"use server";

import { z } from "zod";

// Simplified validation schemas
const RecommendationSchema = z.object({
  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City name too long")
    .transform((str) => str.trim()),
  state: z
    .string()
    .min(1, "State is required")
    .max(50, "State name too long")
    .transform((str) => str.trim()),
  zipCode: z
    .string()
    .min(5, "Zip code must be 5 digits")
    .max(5, "Zip code must be 5 digits")
    .regex(/^\d{5}$/, "Zip code must contain only numbers")
    .transform((str) => str.trim()),
});

export interface RecommendationFormState {
  message: string;
  recommendation?: string;
  fields?: Record<string, string>;
  issues?: string[];
  isLoading?: boolean;
  timestamp?: number;
}

export async function fetchServiceRecommendation(
  prevState: RecommendationFormState,
  formData: FormData,
): Promise<RecommendationFormState> {
  const startTime = Date.now();

  try {
    // Extract and validate form data
    const rawData = {
      city: formData.get("city")?.toString()?.trim() || "",
      state: formData.get("state")?.toString()?.trim() || "",
      zipCode: formData.get("zipCode")?.toString()?.trim() || "",
    };

    const validatedFields = RecommendationSchema.safeParse(rawData);

    if (!validatedFields.success) {
      const issues = validatedFields.error.issues.map((issue) => issue.message);
      return {
        message: "Error: Please check your input and try again.",
        issues,
        fields: rawData,
        isLoading: false,
        timestamp: Date.now(),
      };
    }

    // Simplified recommendation logic - removed AI dependency for performance
    const { city, state, zipCode } = validatedFields.data;

    // Generate a basic recommendation based on location
    const recommendation = generateBasicRecommendation(city, state, zipCode);

    const duration = Date.now() - startTime;
    console.log(`Service recommendation generated in ${duration}ms`);

    return {
      message: "Success: Recommendation generated successfully.",
      recommendation,
      isLoading: false,
      timestamp: Date.now(),
    };
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error("Error fetching service recommendation:", {
      error: error instanceof Error ? error.message : "Unknown error",
      duration,
      timestamp: new Date().toISOString(),
    });

    return {
      message:
        "Error: Unable to generate recommendation at this time. Please try again later.",
      fields: {
        city: formData.get("city")?.toString() || "",
        state: formData.get("state")?.toString() || "",
        zipCode: formData.get("zipCode")?.toString() || "",
      },
      isLoading: false,
      timestamp: Date.now(),
    };
  }
}

// Simplified recommendation generator for home improvement services
function generateBasicRecommendation(
  city: string,
  state: string,
  zipCode: string,
): string {
  const recommendations = {
    general: `Based on your location in ${city}, ${state}, we recommend our comprehensive home improvement services. Our licensed contractors use professional techniques and premium materials to transform your property with lasting quality.`,

    services: [
      "🏗️ **Paver Installation Services** - Beautiful driveways, patios, and walkways",
      "🏠 **Window Replacement & Repair** - Energy-efficient windows for your home",
      "🏠 **Professional Roofing Services** - Repair, replacement, and emergency service",
      "🎨 **Exterior Painting Services** - Professional painting for lasting curb appeal",
    ],

    benefits: [
      "✅ **Licensed & Insured Contractors** - CSLB licensed with full insurance coverage",
      "✅ **Free Written Estimates** - Transparent pricing with no hidden fees",
      "✅ **Quality Materials & Workmanship** - Premium materials with comprehensive warranties",
      "✅ **Local Southern California Experts** - 13+ years serving LA & Ventura County",
    ],

    footer: `**Ready to get started?** Call us at **(818) 453-6110** for immediate assistance or to schedule your free estimate in ${city}, ${state}.`,
  };

  return `${recommendations.general}

## 🏠 Recommended Services for Your Area:

${recommendations.services.join("\n")}

## ⭐ Why Choose Affordable Home Services:

${recommendations.benefits.join("\n")}

${recommendations.footer}`;
}

// Simplified contact form schema
const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long")
    .transform((str) => str.trim()),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email address is too long")
    .toLowerCase()
    .transform((str) => str.trim()),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,14}$/.test(val),
      "Please enter a valid phone number",
    ),
  subject: z
    .string()
    .optional()
    .transform((str) => str?.trim()),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(2000, "Message is too long (maximum 2000 characters)")
    .transform((str) => str.trim()),
  // Honeypot field for spam protection
  website: z.string().optional(),
});

export interface ContactFormState {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  isSuccess?: boolean;
  isLoading?: boolean;
  timestamp?: number;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const startTime = Date.now();

  try {
    // Extract form data
    const rawData = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      website: formData.get("website")?.toString() || "", // Honeypot field
    };

    // Honeypot spam protection
    if (rawData.website) {
      console.log("Spam detected via honeypot field");
      return {
        message: "Error: Invalid submission detected.",
        isSuccess: false,
        isLoading: false,
        timestamp: Date.now(),
      };
    }

    // Validate form data
    const validatedFields = ContactFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
      const issues = validatedFields.error.issues.map((issue) => issue.message);
      return {
        message: "Error: Please correct the highlighted fields and try again.",
        issues,
        fields: {
          name: rawData.name,
          email: rawData.email,
          phone: rawData.phone,
          subject: rawData.subject,
          message: rawData.message,
        },
        isSuccess: false,
        isLoading: false,
        timestamp: Date.now(),
      };
    }

    // Log the contact form submission (in production, send to your backend/email service)
    console.log("Contact Form Submission:", {
      ...validatedFields.data,
      submittedAt: new Date().toISOString(),
      duration: Date.now() - startTime,
    });

    // In a real application, you would:
    // 1. Send email notification
    // 2. Save to database
    // 3. Send to CRM system
    // 4. Send auto-reply to user

    // Simulate processing time (reduced from 500ms to 100ms)
    await new Promise((resolve) => setTimeout(resolve, 100));

    const duration = Date.now() - startTime;
    console.log(`Contact form processed in ${duration}ms`);

    return {
      message:
        "Success: Thank you for your message! We'll get back to you within 24 hours with your free estimate.",
      isSuccess: true,
      isLoading: false,
      timestamp: Date.now(),
    };
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error("Error submitting contact form:", {
      error: error instanceof Error ? error.message : "Unknown error",
      duration,
      timestamp: new Date().toISOString(),
    });

    return {
      message:
        "Error: Unable to send your message at this time. Please try again or call us directly at (818) 453-6110.",
      fields: {
        name: formData.get("name")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        phone: formData.get("phone")?.toString() || "",
        subject: formData.get("subject")?.toString() || "",
        message: formData.get("message")?.toString() || "",
      },
      isSuccess: false,
      isLoading: false,
      timestamp: Date.now(),
    };
  }
}

// Rate limiting helper (simplified)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests = 5,
  windowMs = 60000,
): boolean {
  const now = Date.now();
  const current = rateLimitMap.get(identifier);

  if (!current || now > current.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

// Validation patterns
export const ValidationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,14}$/,
  zipCode: /^\d{5}(-\d{4})?$/,
  name: /^[a-zA-Z\s\-'\.]+$/,
} as const;