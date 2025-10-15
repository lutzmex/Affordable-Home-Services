"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

// Location Interface
interface LocationInfo {
  id: string;
  city: string;
  slug: string;
  state: string;
  projectsCompleted: number;
  tagline: string;
}

// All California Cities with project data
const allCitiesLocations: LocationInfo[] = [
  { id: "acton", city: "Acton", slug: "home-improvement-services-in-acton-ca", state: "California", projectsCompleted: 145, tagline: "Quality home services" },
  { id: "agoura-hills", city: "Agoura Hills", slug: "home-improvement-services-in-agoura-hills-ca", state: "California", projectsCompleted: 223, tagline: "Professional home solutions" },
  { id: "alhambra", city: "Alhambra", slug: "home-improvement-services-in-alhambra-ca", state: "California", projectsCompleted: 334, tagline: "Expert home services" },
  { id: "altadena", city: "Altadena", slug: "home-improvement-services-in-altadena-ca", state: "California", projectsCompleted: 189, tagline: "Trusted local experts" },
  { id: "anaheim", city: "Anaheim", slug: "home-improvement-services-in-anaheim-ca", state: "California", projectsCompleted: 456, tagline: "Premier home improvements" },
  { id: "arcadia", city: "Arcadia", slug: "home-improvement-services-in-arcadia-ca", state: "California", projectsCompleted: 278, tagline: "Quality craftsmanship" },
  { id: "artesia", city: "Artesia", slug: "home-improvement-services-in-artesia-ca", state: "California", projectsCompleted: 167, tagline: "Reliable home services" },
  { id: "arvin", city: "Arvin", slug: "home-improvement-services-in-arvin-ca", state: "California", projectsCompleted: 134, tagline: "Professional contractors" },
  { id: "atwood", city: "Atwood", slug: "home-improvement-services-in-atwood-ca", state: "California", projectsCompleted: 98, tagline: "Expert home solutions" },
  { id: "azusa", city: "Azusa", slug: "home-improvement-services-in-azusa-ca", state: "California", projectsCompleted: 245, tagline: "Quality home improvements" },
  { id: "baldwin-park", city: "Baldwin Park", slug: "home-improvement-services-in-baldwin-park-ca", state: "California", projectsCompleted: 212, tagline: "Trusted home experts" },
  { id: "bell", city: "Bell", slug: "home-improvement-services-in-bell-ca", state: "California", projectsCompleted: 187, tagline: "Professional home services" },
  { id: "bell-gardens", city: "Bell Gardens", slug: "home-improvement-services-in-bell-gardens-ca", state: "California", projectsCompleted: 156, tagline: "Expert contractors" },
  { id: "bellflower", city: "Bellflower", slug: "home-improvement-services-in-bellflower-ca", state: "California", projectsCompleted: 234, tagline: "Quality home solutions" },
  { id: "beverly-hills", city: "Beverly Hills", slug: "home-improvement-services-in-beverly-hills-ca", state: "California", projectsCompleted: 567, tagline: "Luxury home services" },
  { id: "brandeis", city: "Brandeis", slug: "home-improvement-services-in-brandeis-ca", state: "California", projectsCompleted: 112, tagline: "Professional solutions" },
  { id: "brea", city: "Brea", slug: "home-improvement-services-in-brea-ca", state: "California", projectsCompleted: 289, tagline: "Expert home improvements" },
  { id: "buena-park", city: "Buena Park", slug: "home-improvement-services-in-buena-park-ca", state: "California", projectsCompleted: 298, tagline: "Quality craftsmanship" },
  { id: "burbank", city: "Burbank", slug: "home-improvement-services-in-burbank-ca", state: "California", projectsCompleted: 445, tagline: "Expert renovation services" },
  { id: "calabasas", city: "Calabasas", slug: "home-improvement-services-in-calabasas-ca", state: "California", projectsCompleted: 356, tagline: "Premium home services" },
  { id: "camarillo", city: "Camarillo", slug: "home-improvement-services-in-camarillo-ca", state: "California", projectsCompleted: 267, tagline: "Professional contractors" },
  { id: "canoga-park", city: "Canoga Park", slug: "home-improvement-services-in-canoga-park-ca", state: "California", projectsCompleted: 312, tagline: "Expert home solutions" },
  { id: "canyon-country", city: "Canyon Country", slug: "home-improvement-services-in-canyon-country-ca", state: "California", projectsCompleted: 198, tagline: "Quality home services" },
  { id: "carpinteria", city: "Carpinteria", slug: "home-improvement-services-in-carpinteria-ca", state: "California", projectsCompleted: 176, tagline: "Coastal home experts" },
  { id: "carson", city: "Carson", slug: "home-improvement-services-in-carson-ca", state: "California", projectsCompleted: 334, tagline: "Professional home services" },
  { id: "castaic", city: "Castaic", slug: "home-improvement-services-in-castaic-ca", state: "California", projectsCompleted: 154, tagline: "Trusted local contractors" },
  { id: "cerritos", city: "Cerritos", slug: "home-improvement-services-in-cerritos-ca", state: "California", projectsCompleted: 289, tagline: "Expert home improvements" },
  { id: "chatsworth", city: "Chatsworth", slug: "home-improvement-services-in-chatsworth-ca", state: "California", projectsCompleted: 267, tagline: "Quality home solutions" },
  { id: "chino", city: "Chino", slug: "home-improvement-services-in-chino-ca", state: "California", projectsCompleted: 298, tagline: "Professional contractors" },
  { id: "chino-hills", city: "Chino Hills", slug: "home-improvement-services-in-chino-hills-ca", state: "California", projectsCompleted: 345, tagline: "Expert home services" },
  { id: "city-of-industry", city: "City Of Industry", slug: "home-improvement-services-in-city-of-industry-ca", state: "California", projectsCompleted: 187, tagline: "Commercial & residential" },
  { id: "claremont", city: "Claremont", slug: "home-improvement-services-in-claremont-ca", state: "California", projectsCompleted: 234, tagline: "Quality craftsmanship" },
  { id: "compton", city: "Compton", slug: "home-improvement-services-in-compton-ca", state: "California", projectsCompleted: 278, tagline: "Professional services" },
  { id: "costa-mesa", city: "Costa Mesa", slug: "home-improvement-services-in-costa-mesa-ca", state: "California", projectsCompleted: 389, tagline: "Coastal home experts" },
  { id: "covina", city: "Covina", slug: "home-improvement-services-in-covina-ca", state: "California", projectsCompleted: 256, tagline: "Expert home solutions" },
  { id: "culver-city", city: "Culver City", slug: "home-improvement-services-in-culver-city-ca", state: "California", projectsCompleted: 412, tagline: "Premium home services" },
  { id: "cypress", city: "Cypress", slug: "home-improvement-services-in-cypress-ca", state: "California", projectsCompleted: 234, tagline: "Quality home improvements" },
  { id: "diamond-bar", city: "Diamond Bar", slug: "home-improvement-services-in-diamond-bar-ca", state: "California", projectsCompleted: 289, tagline: "Professional contractors" },
  { id: "downey", city: "Downey", slug: "home-improvement-services-in-downey-ca", state: "California", projectsCompleted: 356, tagline: "Expert home services" },
  { id: "duarte", city: "Duarte", slug: "home-improvement-services-in-duarte-ca", state: "California", projectsCompleted: 198, tagline: "Trusted local experts" },
  { id: "el-monte", city: "El Monte", slug: "home-improvement-services-in-el-monte-ca", state: "California", projectsCompleted: 312, tagline: "Quality home solutions" },
  { id: "el-segundo", city: "El Segundo", slug: "home-improvement-services-in-el-segundo-ca", state: "California", projectsCompleted: 267, tagline: "Coastal home services" },
  { id: "encino", city: "Encino", slug: "home-improvement-services-in-encino-ca", state: "California", projectsCompleted: 445, tagline: "Premium home improvements" },
  { id: "fillmore", city: "Fillmore", slug: "home-improvement-services-in-fillmore-ca", state: "California", projectsCompleted: 145, tagline: "Professional contractors" },
  { id: "fountain-valley", city: "Fountain Valley", slug: "home-improvement-services-in-fountain-valley-ca", state: "California", projectsCompleted: 278, tagline: "Expert home services" },
  { id: "frazier-park", city: "Frazier Park", slug: "home-improvement-services-in-frazier-park-ca", state: "California", projectsCompleted: 98, tagline: "Mountain home experts" },
  { id: "fullerton", city: "Fullerton", slug: "home-improvement-services-in-fullerton-ca", state: "California", projectsCompleted: 398, tagline: "Quality home solutions" },
  { id: "garden-grove", city: "Garden Grove", slug: "home-improvement-services-in-garden-grove-ca", state: "California", projectsCompleted: 367, tagline: "Professional services" },
  { id: "gardena", city: "Gardena", slug: "home-improvement-services-in-gardena-ca", state: "California", projectsCompleted: 289, tagline: "Expert contractors" },
  { id: "glendale", city: "Glendale", slug: "home-improvement-services-in-glendale-ca", state: "California", projectsCompleted: 487, tagline: "Professional home services" },
  { id: "glendora", city: "Glendora", slug: "home-improvement-services-in-glendora-ca", state: "California", projectsCompleted: 267, tagline: "Quality craftsmanship" },
  { id: "granada-hills", city: "Granada Hills", slug: "home-improvement-services-in-granada-hills-ca", state: "California", projectsCompleted: 312, tagline: "Expert home improvements" },
  { id: "guasti", city: "Guasti", slug: "home-improvement-services-in-guasti-ca", state: "California", projectsCompleted: 87, tagline: "Professional solutions" },
  { id: "hacienda-heights", city: "Hacienda Heights", slug: "home-improvement-services-in-hacienda-heights-ca", state: "California", projectsCompleted: 245, tagline: "Quality home services" },
  { id: "harbor-city", city: "Harbor City", slug: "home-improvement-services-in-harbor-city-ca", state: "California", projectsCompleted: 198, tagline: "Harbor area experts" },
  { id: "hawaiian-gardens", city: "Hawaiian Gardens", slug: "home-improvement-services-in-hawaiian-gardens-ca", state: "California", projectsCompleted: 156, tagline: "Professional contractors" },
  { id: "hawthorne", city: "Hawthorne", slug: "home-improvement-services-in-hawthorne-ca", state: "California", projectsCompleted: 278, tagline: "Expert home services" },
  { id: "hermosa-beach", city: "Hermosa Beach", slug: "home-improvement-services-in-hermosa-beach-ca", state: "California", projectsCompleted: 298, tagline: "Beach home specialists" },
  { id: "huntington-beach", city: "Huntington Beach", slug: "home-improvement-services-in-huntington-beach-ca", state: "California", projectsCompleted: 456, tagline: "Coastal home experts" },
  { id: "huntington-park", city: "Huntington Park", slug: "home-improvement-services-in-huntington-park-ca", state: "California", projectsCompleted: 234, tagline: "Professional services" },
  { id: "inglewood", city: "Inglewood", slug: "home-improvement-services-in-inglewood-ca", state: "California", projectsCompleted: 345, tagline: "Quality home solutions" },
  { id: "la-canada-flintridge", city: "La Canada Flintridge", slug: "home-improvement-services-in-la-canada-flintridge-ca", state: "California", projectsCompleted: 267, tagline: "Premium home services" },
  { id: "la-crescenta", city: "La Crescenta", slug: "home-improvement-services-in-la-crescenta-ca", state: "California", projectsCompleted: 198, tagline: "Expert contractors" },
  { id: "la-habra", city: "La Habra", slug: "home-improvement-services-in-la-habra-ca", state: "California", projectsCompleted: 245, tagline: "Professional solutions" },
  { id: "la-mirada", city: "La Mirada", slug: "home-improvement-services-in-la-mirada-ca", state: "California", projectsCompleted: 267, tagline: "Quality home services" },
  { id: "la-palma", city: "La Palma", slug: "home-improvement-services-in-la-palma-ca", state: "California", projectsCompleted: 189, tagline: "Expert home improvements" },
  { id: "la-puente", city: "La Puente", slug: "home-improvement-services-in-la-puente-ca", state: "California", projectsCompleted: 223, tagline: "Professional contractors" },
  { id: "la-verne", city: "La Verne", slug: "home-improvement-services-in-la-verne-ca", state: "California", projectsCompleted: 234, tagline: "Quality craftsmanship" },
  { id: "lake-hughes", city: "Lake Hughes", slug: "home-improvement-services-in-lake-hughes-ca", state: "California", projectsCompleted: 76, tagline: "Mountain home experts" },
  { id: "lakewood", city: "Lakewood", slug: "home-improvement-services-in-lakewood-ca", state: "California", projectsCompleted: 334, tagline: "Professional home services" },
  { id: "lancaster", city: "Lancaster", slug: "home-improvement-services-in-lancaster-ca", state: "California", projectsCompleted: 389, tagline: "Desert home specialists" },
  { id: "lawndale", city: "Lawndale", slug: "home-improvement-services-in-lawndale-ca", state: "California", projectsCompleted: 198, tagline: "Expert home solutions" },
  { id: "lebec", city: "Lebec", slug: "home-improvement-services-in-lebec-ca", state: "California", projectsCompleted: 87, tagline: "Mountain services" },
  { id: "littlerock", city: "Littlerock", slug: "home-improvement-services-in-littlerock-ca", state: "California", projectsCompleted: 98, tagline: "Professional contractors" },
  { id: "llano", city: "Llano", slug: "home-improvement-services-in-llano-ca", state: "California", projectsCompleted: 76, tagline: "Rural home experts" },
  { id: "lomita", city: "Lomita", slug: "home-improvement-services-in-lomita-ca", state: "California", projectsCompleted: 167, tagline: "Quality home services" },
  { id: "long-beach", city: "Long Beach", slug: "home-improvement-services-in-long-beach-ca", state: "California", projectsCompleted: 567, tagline: "Coastal home improvement" },
  { id: "los-alamitos", city: "Los Alamitos", slug: "home-improvement-services-in-los-alamitos-ca", state: "California", projectsCompleted: 198, tagline: "Professional services" },
  { id: "los-angeles", city: "Los Angeles", slug: "home-improvement-services-in-los-angeles-ca", state: "California", projectsCompleted: 756, tagline: "Premier home services" },
  { id: "lynwood", city: "Lynwood", slug: "home-improvement-services-in-lynwood-ca", state: "California", projectsCompleted: 234, tagline: "Expert contractors" },
  { id: "malibu", city: "Malibu", slug: "home-improvement-services-in-malibu-ca", state: "California", projectsCompleted: 398, tagline: "Luxury coastal homes" },
  { id: "manhattan-beach", city: "Manhattan Beach", slug: "home-improvement-services-in-manhattan-beach-ca", state: "California", projectsCompleted: 389, tagline: "Beach home specialists" },
  { id: "marina-del-rey", city: "Marina Del Rey", slug: "home-improvement-services-in-marina-del-rey-ca", state: "California", projectsCompleted: 334, tagline: "Marina home experts" },
  { id: "maywood", city: "Maywood", slug: "home-improvement-services-in-maywood-ca", state: "California", projectsCompleted: 167, tagline: "Professional solutions" },
  { id: "midway-city", city: "Midway City", slug: "home-improvement-services-in-midway-city-ca", state: "California", projectsCompleted: 145, tagline: "Quality home services" },
  { id: "mission-hills", city: "Mission Hills", slug: "home-improvement-services-in-mission-hills-ca", state: "California", projectsCompleted: 278, tagline: "Expert home improvements" },
  { id: "mojave", city: "Mojave", slug: "home-improvement-services-in-mojave-ca", state: "California", projectsCompleted: 134, tagline: "Desert home services" },
  { id: "monrovia", city: "Monrovia", slug: "home-improvement-services-in-monrovia-ca", state: "California", projectsCompleted: 267, tagline: "Professional contractors" },
  { id: "montclair", city: "Montclair", slug: "home-improvement-services-in-montclair-ca", state: "California", projectsCompleted: 223, tagline: "Quality craftsmanship" },
  { id: "montebello", city: "Montebello", slug: "home-improvement-services-in-montebello-ca", state: "California", projectsCompleted: 289, tagline: "Expert home services" },
  { id: "monterey-park", city: "Monterey Park", slug: "home-improvement-services-in-monterey-park-ca", state: "California", projectsCompleted: 312, tagline: "Professional solutions" },
  { id: "montrose", city: "Montrose", slug: "home-improvement-services-in-montrose-ca", state: "California", projectsCompleted: 198, tagline: "Quality home improvements" },
  { id: "moorpark", city: "Moorpark", slug: "home-improvement-services-in-moorpark-ca", state: "California", projectsCompleted: 245, tagline: "Ventura County experts" },
  { id: "mount-wilson", city: "Mount Wilson", slug: "home-improvement-services-in-mount-wilson-ca", state: "California", projectsCompleted: 65, tagline: "Mountain home services" },
  { id: "mt-baldy", city: "Mt Baldy", slug: "home-improvement-services-in-mt-baldy-ca", state: "California", projectsCompleted: 54, tagline: "Alpine home experts" },
  { id: "newbury-park", city: "Newbury Park", slug: "home-improvement-services-in-newbury-park-ca", state: "California", projectsCompleted: 267, tagline: "Professional contractors" },
  { id: "newhall", city: "Newhall", slug: "home-improvement-services-in-newhall-ca", state: "California", projectsCompleted: 234, tagline: "Expert home services" },
  { id: "newport-beach", city: "Newport Beach", slug: "home-improvement-services-in-newport-beach-ca", state: "California", projectsCompleted: 498, tagline: "Luxury coastal homes" },
  { id: "north-hills", city: "North Hills", slug: "home-improvement-services-in-north-hills-ca", state: "California", projectsCompleted: 223, tagline: "Quality home solutions" },
  { id: "north-hollywood", city: "North Hollywood", slug: "home-improvement-services-in-north-hollywood-ca", state: "California", projectsCompleted: 389, tagline: "Professional services" },
  { id: "northridge", city: "Northridge", slug: "home-improvement-services-in-northridge-ca", state: "California", projectsCompleted: 378, tagline: "Valley home experts" },
  { id: "norwalk", city: "Norwalk", slug: "home-improvement-services-in-norwalk-ca", state: "California", projectsCompleted: 298, tagline: "Expert contractors" },
  { id: "oak-park", city: "Oak Park", slug: "home-improvement-services-in-oak-park-ca", state: "California", projectsCompleted: 187, tagline: "Professional solutions" },
  { id: "oak-view", city: "Oak View", slug: "home-improvement-services-in-oak-view-ca", state: "California", projectsCompleted: 134, tagline: "Quality home services" },
  { id: "ojai", city: "Ojai", slug: "home-improvement-services-in-ojai-ca", state: "California", projectsCompleted: 198, tagline: "Valley home specialists" },
  { id: "ontario", city: "Ontario", slug: "home-improvement-services-in-ontario-ca", state: "California", projectsCompleted: 412, tagline: "Inland Empire experts" },
  { id: "orange", city: "Orange", slug: "home-improvement-services-in-orange-ca", state: "California", projectsCompleted: 356, tagline: "Orange County services" },
  { id: "oxnard", city: "Oxnard", slug: "home-improvement-services-in-oxnard-ca", state: "California", projectsCompleted: 389, tagline: "Coastal home improvements" },
  { id: "pacific-palisades", city: "Pacific Palisades", slug: "home-improvement-services-in-pacific-palisades-ca", state: "California", projectsCompleted: 423, tagline: "Luxury coastal services" },
  { id: "pacoima", city: "Pacoima", slug: "home-improvement-services-in-pacoima-ca", state: "California", projectsCompleted: 267, tagline: "Professional contractors" },
  { id: "palmdale", city: "Palmdale", slug: "home-improvement-services-in-palmdale-ca", state: "California", projectsCompleted: 378, tagline: "Desert home experts" },
  { id: "palos-verdes-peninsula", city: "Palos Verdes Peninsula", slug: "home-improvement-services-in-palos-verdes-peninsula-ca", state: "California", projectsCompleted: 389, tagline: "Peninsula specialists" },
  { id: "panorama-city", city: "Panorama City", slug: "home-improvement-services-in-panorama-city-ca", state: "California", projectsCompleted: 278, tagline: "Valley home services" },
  { id: "paramount", city: "Paramount", slug: "home-improvement-services-in-paramount-ca", state: "California", projectsCompleted: 234, tagline: "Professional solutions" },
  { id: "pasadena", city: "Pasadena", slug: "home-improvement-services-in-pasadena-ca", state: "California", projectsCompleted: 487, tagline: "Quality home specialists" },
  { id: "pearblossom", city: "Pearblossom", slug: "home-improvement-services-in-pearblossom-ca", state: "California", projectsCompleted: 98, tagline: "Desert home services" },
  { id: "phelan", city: "Phelan", slug: "home-improvement-services-in-phelan-ca", state: "California", projectsCompleted: 145, tagline: "High desert experts" },
  { id: "pico-rivera", city: "Pico Rivera", slug: "home-improvement-services-in-pico-rivera-ca", state: "California", projectsCompleted: 267, tagline: "Professional contractors" },
  { id: "pine-mountain-club", city: "Pine Mountain Club", slug: "home-improvement-services-in-pine-mountain-club-ca", state: "California", projectsCompleted: 87, tagline: "Mountain home specialists" },
  { id: "pinon-hills", city: "Pinon Hills", slug: "home-improvement-services-in-pinon-hills-ca", state: "California", projectsCompleted: 112, tagline: "Desert home services" },
  { id: "piru", city: "Piru", slug: "home-improvement-services-in-piru-ca", state: "California", projectsCompleted: 98, tagline: "Rural home experts" },
  { id: "placentia", city: "Placentia", slug: "home-improvement-services-in-placentia-ca", state: "California", projectsCompleted: 234, tagline: "Orange County services" },
  { id: "playa-del-rey", city: "Playa Del Rey", slug: "home-improvement-services-in-playa-del-rey-ca", state: "California", projectsCompleted: 278, tagline: "Beach home specialists" },
  { id: "playa-vista", city: "Playa Vista", slug: "home-improvement-services-in-playa-vista-ca", state: "California", projectsCompleted: 298, tagline: "Modern home services" },
  { id: "pomona", city: "Pomona", slug: "home-improvement-services-in-pomona-ca", state: "California", projectsCompleted: 334, tagline: "Professional contractors" },
  { id: "port-hueneme", city: "Port Hueneme", slug: "home-improvement-services-in-port-hueneme-ca", state: "California", projectsCompleted: 189, tagline: "Coastal home experts" },
  { id: "port-hueneme-cbc-base", city: "Port Hueneme Cbc Base", slug: "home-improvement-services-in-port-hueneme-cbc-base-ca", state: "California", projectsCompleted: 76, tagline: "Military base services" },
  { id: "porter-ranch", city: "Porter Ranch", slug: "home-improvement-services-in-porter-ranch-ca", state: "California", projectsCompleted: 289, tagline: "Valley home solutions" },
  { id: "rancho-cucamonga", city: "Rancho Cucamonga", slug: "home-improvement-services-in-rancho-cucamonga-ca", state: "California", projectsCompleted: 398, tagline: "Inland Empire specialists" },
  { id: "rancho-palos-verdes", city: "Rancho Palos Verdes", slug: "home-improvement-services-in-rancho-palos-verdes-ca", state: "California", projectsCompleted: 367, tagline: "Peninsula home experts" },
  { id: "redondo-beach", city: "Redondo Beach", slug: "home-improvement-services-in-redondo-beach-ca", state: "California", projectsCompleted: 378, tagline: "Beach home specialists" },
  { id: "reseda", city: "Reseda", slug: "home-improvement-services-in-reseda-ca", state: "California", projectsCompleted: 289, tagline: "Valley home services" },
  { id: "rosamond", city: "Rosamond", slug: "home-improvement-services-in-rosamond-ca", state: "California", projectsCompleted: 145, tagline: "Desert home solutions" },
  { id: "rosemead", city: "Rosemead", slug: "home-improvement-services-in-rosemead-ca", state: "California", projectsCompleted: 245, tagline: "Professional contractors" },
  { id: "rowland-heights", city: "Rowland Heights", slug: "home-improvement-services-in-rowland-heights-ca", state: "California", projectsCompleted: 278, tagline: "Quality home services" },
  { id: "san-dimas", city: "San Dimas", slug: "home-improvement-services-in-san-dimas-ca", state: "California", projectsCompleted: 267, tagline: "Expert home improvements" },
  { id: "san-fernando", city: "San Fernando", slug: "home-improvement-services-in-san-fernando-ca", state: "California", projectsCompleted: 256, tagline: "Valley home experts" },
  { id: "san-gabriel", city: "San Gabriel", slug: "home-improvement-services-in-san-gabriel-ca", state: "California", projectsCompleted: 289, tagline: "Professional services" },
  { id: "san-marino", city: "San Marino", slug: "home-improvement-services-in-san-marino-ca", state: "California", projectsCompleted: 312, tagline: "Premium home solutions" },
  { id: "san-pedro", city: "San Pedro", slug: "home-improvement-services-in-san-pedro-ca", state: "California", projectsCompleted: 356, tagline: "Harbor area specialists" },
  { id: "santa-ana", city: "Santa Ana", slug: "home-improvement-services-in-santa-ana-ca", state: "California", projectsCompleted: 445, tagline: "Orange County experts" },
  { id: "santa-barbara", city: "Santa Barbara", slug: "home-improvement-services-in-santa-barbara-ca", state: "California", projectsCompleted: 423, tagline: "Coastal luxury services" },
  { id: "santa-clarita", city: "Santa Clarita", slug: "home-improvement-services-in-santa-clarita-ca", state: "California", projectsCompleted: 456, tagline: "Trusted local experts" },
  { id: "santa-fe-springs", city: "Santa Fe Springs", slug: "home-improvement-services-in-santa-fe-springs-ca", state: "California", projectsCompleted: 234, tagline: "Professional contractors" },
  { id: "santa-monica", city: "Santa Monica", slug: "home-improvement-services-in-santa-monica-ca", state: "California", projectsCompleted: 498, tagline: "Beach city specialists" },
  { id: "santa-paula", city: "Santa Paula", slug: "home-improvement-services-in-santa-paula-ca", state: "California", projectsCompleted: 178, tagline: "Ventura County services" },
  { id: "seal-beach", city: "Seal Beach", slug: "home-improvement-services-in-seal-beach-ca", state: "California", projectsCompleted: 267, tagline: "Coastal home experts" },
  { id: "sherman-oaks", city: "Sherman Oaks", slug: "home-improvement-services-in-sherman-oaks-ca", state: "California", projectsCompleted: 412, tagline: "Valley home solutions" },
  { id: "sierra-madre", city: "Sierra Madre", slug: "home-improvement-services-in-sierra-madre-ca", state: "California", projectsCompleted: 198, tagline: "Foothill home specialists" },
  { id: "signal-hill", city: "Signal Hill", slug: "home-improvement-services-in-signal-hill-ca", state: "California", projectsCompleted: 189, tagline: "Professional services" },
  { id: "simi-valley", city: "Simi Valley", slug: "home-improvement-services-in-simi-valley-ca", state: "California", projectsCompleted: 389, tagline: "Professional home solutions" },
  { id: "somis", city: "Somis", slug: "home-improvement-services-in-somis-ca", state: "California", projectsCompleted: 98, tagline: "Rural home services" },
  { id: "south-el-monte", city: "South El Monte", slug: "home-improvement-services-in-south-el-monte-ca", state: "California", projectsCompleted: 223, tagline: "Professional contractors" },
  { id: "south-gate", city: "South Gate", slug: "home-improvement-services-in-south-gate-ca", state: "California", projectsCompleted: 267, tagline: "Quality home services" },
  { id: "south-pasadena", city: "South Pasadena", slug: "home-improvement-services-in-south-pasadena-ca", state: "California", projectsCompleted: 289, tagline: "Expert home solutions" },
  { id: "stanton", city: "Stanton", slug: "home-improvement-services-in-stanton-ca", state: "California", projectsCompleted: 198, tagline: "Professional services" },
  { id: "stevenson-ranch", city: "Stevenson Ranch", slug: "home-improvement-services-in-stevenson-ranch-ca", state: "California", projectsCompleted: 234, tagline: "Ranch home specialists" },
  { id: "studio-city", city: "Studio City", slug: "home-improvement-services-in-studio-city-ca", state: "California", projectsCompleted: 398, tagline: "Valley home experts" },
  { id: "summerland", city: "Summerland", slug: "home-improvement-services-in-summerland-ca", state: "California", projectsCompleted: 134, tagline: "Coastal home services" },
  { id: "sun-valley", city: "Sun Valley", slug: "home-improvement-services-in-sun-valley-ca", state: "California", projectsCompleted: 267, tagline: "Valley home solutions" },
  { id: "sunland", city: "Sunland", slug: "home-improvement-services-in-sunland-ca", state: "California", projectsCompleted: 223, tagline: "Foothill home experts" },
  { id: "sunset-beach", city: "Sunset Beach", slug: "home-improvement-services-in-sunset-beach-ca", state: "California", projectsCompleted: 198, tagline: "Beach home specialists" },
  { id: "surfside", city: "Surfside", slug: "home-improvement-services-in-surfside-ca", state: "California", projectsCompleted: 167, tagline: "Coastal home services" },
  { id: "sylmar", city: "Sylmar", slug: "home-improvement-services-in-sylmar-ca", state: "California", projectsCompleted: 289, tagline: "Valley home solutions" },
  { id: "tarzana", city: "Tarzana", slug: "home-improvement-services-in-tarzana-ca", state: "California", projectsCompleted: 334, tagline: "Valley home specialists" },
  { id: "tehachapi", city: "Tehachapi", slug: "home-improvement-services-in-tehachapi-ca", state: "California", projectsCompleted: 156, tagline: "Mountain home experts" },
  { id: "temple-city", city: "Temple City", slug: "home-improvement-services-in-temple-city-ca", state: "California", projectsCompleted: 234, tagline: "Professional services" },
  { id: "thousand-oaks", city: "Thousand Oaks", slug: "home-improvement-services-in-thousand-oaks-ca", state: "California", projectsCompleted: 412, tagline: "Ventura County experts" },
  { id: "toluca-lake", city: "Toluca Lake", slug: "home-improvement-services-in-toluca-lake-ca", state: "California", projectsCompleted: 256, tagline: "Valley home services" },
  { id: "topanga", city: "Topanga", slug: "home-improvement-services-in-topanga-ca", state: "California", projectsCompleted: 178, tagline: "Canyon home specialists" },
  { id: "torrance", city: "Torrance", slug: "home-improvement-services-in-torrance-ca", state: "California", projectsCompleted: 445, tagline: "South Bay specialists" },
  { id: "tujunga", city: "Tujunga", slug: "home-improvement-services-in-tujunga-ca", state: "California", projectsCompleted: 198, tagline: "Foothill home experts" },
  { id: "tustin", city: "Tustin", slug: "home-improvement-services-in-tustin-ca", state: "California", projectsCompleted: 298, tagline: "Orange County services" },
  { id: "universal-city", city: "Universal City", slug: "home-improvement-services-in-universal-city-ca", state: "California", projectsCompleted: 223, tagline: "Entertainment district" },
  { id: "upland", city: "Upland", slug: "home-improvement-services-in-upland-ca", state: "California", projectsCompleted: 289, tagline: "Inland Empire experts" },
  { id: "valencia", city: "Valencia", slug: "home-improvement-services-in-valencia-ca", state: "California", projectsCompleted: 378, tagline: "Santa Clarita Valley" },
  { id: "valley-village", city: "Valley Village", slug: "home-improvement-services-in-valley-village-ca", state: "California", projectsCompleted: 267, tagline: "Valley home solutions" },
  { id: "valyermo", city: "Valyermo", slug: "home-improvement-services-in-valyermo-ca", state: "California", projectsCompleted: 76, tagline: "Mountain home services" },
  { id: "van-nuys", city: "Van Nuys", slug: "home-improvement-services-in-van-nuys-ca", state: "California", projectsCompleted: 389, tagline: "Valley home experts" },
  { id: "venice", city: "Venice", slug: "home-improvement-services-in-venice-ca", state: "California", projectsCompleted: 445, tagline: "Beach city specialists" },
  { id: "ventura", city: "Ventura", slug: "home-improvement-services-in-ventura-ca", state: "California", projectsCompleted: 423, tagline: "Coastal home services" },
  { id: "verdugo-city", city: "Verdugo City", slug: "home-improvement-services-in-verdugo-city-ca", state: "California", projectsCompleted: 134, tagline: "Professional contractors" },
  { id: "villa-park", city: "Villa Park", slug: "home-improvement-services-in-villa-park-ca", state: "California", projectsCompleted: 198, tagline: "Orange County experts" },
  { id: "walnut", city: "Walnut", slug: "home-improvement-services-in-walnut-ca", state: "California", projectsCompleted: 245, tagline: "Quality home services" },
  { id: "west-covina", city: "West Covina", slug: "home-improvement-services-in-west-covina-ca", state: "California", projectsCompleted: 334, tagline: "Professional solutions" },
  { id: "west-hills", city: "West Hills", slug: "home-improvement-services-in-west-hills-ca", state: "California", projectsCompleted: 278, tagline: "Valley home specialists" },
  { id: "west-hollywood", city: "West Hollywood", slug: "home-improvement-services-in-west-hollywood-ca", state: "California", projectsCompleted: 445, tagline: "Urban home experts" },
  { id: "westlake-village", city: "Westlake Village", slug: "home-improvement-services-in-westlake-village-ca", state: "California", projectsCompleted: 356, tagline: "Lake community services" },
  { id: "westminster", city: "Westminster", slug: "home-improvement-services-in-westminster-ca", state: "California", projectsCompleted: 289, tagline: "Orange County services" },
  { id: "whittier", city: "Whittier", slug: "home-improvement-services-in-whittier-ca", state: "California", projectsCompleted: 356, tagline: "Professional contractors" },
  { id: "wilmington", city: "Wilmington", slug: "home-improvement-services-in-wilmington-ca", state: "California", projectsCompleted: 245, tagline: "Harbor area experts" },
  { id: "winnetka", city: "Winnetka", slug: "home-improvement-services-in-winnetka-ca", state: "California", projectsCompleted: 267, tagline: "Valley home solutions" },
  { id: "woodland-hills", city: "Woodland Hills", slug: "home-improvement-services-in-woodland-hills-ca", state: "California", projectsCompleted: 398, tagline: "Valley home specialists" },
  { id: "wrightwood", city: "Wrightwood", slug: "home-improvement-services-in-wrightwood-ca", state: "California", projectsCompleted: 112, tagline: "Mountain home experts" },
  { id: "yorba-linda", city: "Yorba Linda", slug: "home-improvement-services-in-yorba-linda-ca", state: "California", projectsCompleted: 289, tagline: "Orange County services" },
];

export default function LocationsClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredLocations = useMemo(() => {
    return allCitiesLocations.filter((location) =>
      location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const displayedLocations = useMemo(() => {
    const locations = searchTerm ? filteredLocations : allCitiesLocations;
    // Show only 10 cities initially unless showAll is true or searching
    if (!showAll && !searchTerm) {
      return locations.slice(0, 10);
    }
    return locations;
  }, [searchTerm, filteredLocations, showAll]);

  // Reset showAll when search term changes
  useEffect(() => {
    if (searchTerm) {
      setShowAll(false);
    }
  }, [searchTerm]);

  const handleShowMoreToggle = () => {
    if (showAll) {
      // Scroll to cities section when collapsing
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Content */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            {/* Badge */}
            <div
              className={`inline-flex items-center bg-pink-50 text-pink-700 px-6 py-3 rounded-full font-semibold text-sm mb-6 border border-pink-100 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <Building2 className="h-5 w-5 mr-2" />
              Serving 195+ California Cities
            </div>

            {/* Main Heading */}
            <h1
              className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              Expert Home Services
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                Across Southern California
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              Professional paver installation, window replacement, roofing, and
              exterior painting services available in your neighborhood.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <a
                href="tel:+18184536110"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 hover:shadow-xl shadow-lg gap-2 sm:gap-3"
                style={{
                  backgroundColor: "#D74599",
                  color: "white",
                }}
              >
                <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
                <span>Call: (818) 453-6110</span>
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center bg-white hover:bg-pink-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-lg gap-2 sm:gap-3 border-2"
                style={{
                  color: "#D74599",
                  borderColor: "#D74599",
                }}
              >
                <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
                View All Services
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-7xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <div
              className={`relative transition-all duration-1000 delay-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full">
                <Image
                  src="/images/location-page.webp"
                  alt="Service locations across Southern California"
                  width={2000}
                  height={1200}
                  className="w-full h-auto object-contain"
                  priority={true}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 2000px"
                />
              </div>
            </div>

            {/* Center Down Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-20">
              <div
                className={`rounded-full p-3 sm:p-4 shadow-lg animate-bounce transition-all duration-1000 delay-1000 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundColor: "#D74599",
                }}
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-white rotate-90" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                195+
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                Cities Served
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                50K+
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                Projects Completed
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                4.9★
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                Average Rating
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                Available Service
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-8 px-4 transition-all duration-1000 delay-1100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CheckCircle2
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: "#D74599" }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700">
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <Phone
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: "#D74599" }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700">
                Same Day Service
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CheckCircle2
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: "#D74599" }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700">
                Quality Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <MapPin
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: "#D74599" }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700">
                Free Estimates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search your city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-base bg-white shadow-sm"
              />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {searchTerm ? (
                  <>
                    Found{" "}
                    <span className="font-bold text-pink-600">
                      {filteredLocations.length}
                    </span>{" "}
                    {filteredLocations.length === 1 ? "city" : "cities"} matching
                    "{searchTerm}"
                  </>
                ) : (
                  <>
                    Showing{" "}
                    <span className="font-bold text-pink-600">
                      {showAll ? allCitiesLocations.length : Math.min(10, allCitiesLocations.length)}
                    </span>{" "}
                    of{" "}
                    <span className="font-bold text-pink-600">
                      {allCitiesLocations.length}
                    </span>{" "}
                    cities across Southern California
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {displayedLocations.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200 max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  No Cities Found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try different search terms or view all cities.
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-white"
                  style={{ backgroundColor: "#D74599" }}
                >
                  Show All Cities
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 max-w-[1400px] mx-auto mb-10 sm:mb-12">
                {displayedLocations.map((location) => (
                  <Link
                    key={location.id}
                    href={`/locations/${location.slug}`}
                    className="group relative bg-white rounded-2xl p-5 sm:p-6 transition-all duration-300 border border-gray-200 hover:border-pink-300 hover:shadow-xl overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(215, 69, 153, 0.3) 0%, transparent 100%)",
                      }}
                    />

                    <div className="relative text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-pink-50 p-3 rounded-xl group-hover:bg-pink-100 transition-colors duration-300 border border-pink-100">
                          <MapPin className="h-6 w-6 text-pink-600" />
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-pink-600 transition-colors duration-300">
                        {location.city}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
                        {location.tagline}
                      </p>

                      <div className="flex items-center justify-center gap-2 mb-4">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-semibold text-gray-700">
                          {location.projectsCompleted} projects
                        </span>
                      </div>

                      <div className="flex items-center justify-center text-pink-600 font-semibold text-sm group-hover:text-pink-700 transition-colors">
                        Get Quote
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Show More / Show Less Buttons */}
              {!searchTerm && allCitiesLocations.length > 10 && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreToggle}
                    className="inline-flex items-center gap-3 px-10 sm:px-12 lg:px-14 py-3.5 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400"
                  >
                    {showAll ? (
                      <>
                        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 rotate-[-90deg]" />
                        Show Less Cities
                      </>
                    ) : (
                      <>
                        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 rotate-90" />
                        Show More Cities ({allCitiesLocations.length - 10} more)
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg overflow-hidden max-w-3xl mx-auto min-h-[240px] sm:h-[200px] flex items-center justify-center">
              {/* Pink Gradient Effect on Top */}
              <div
                className="absolute top-0 left-0 right-0 h-16 opacity-15 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(215, 69, 153, 0.5) 0%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="relative w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Ready to Transform Your Home?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl mx-auto px-2">
                  Contact our expert team today for a free consultation and
                  detailed estimate for your home improvement project.
                </p>

                {/* Buttons Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4">
                  <a
                    href="/services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400"
                  >
                    View All Services
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>

                  <a
                    href="tel:+18184536110"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-white"
                    style={{ backgroundColor: "#D74599" }}
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    Call: (818) 453-6110
                  </a>
                </div>

                {/* Info Text */}
                <div className="flex justify-center items-center">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">
                    Available 7 Days • Free Estimates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}