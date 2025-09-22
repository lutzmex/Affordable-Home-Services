"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Star,
  Globe,
  PhoneCall,
  ArrowRight,
  Award,
  Shield,
  Sparkles,
  Filter,
  Grid,
  List,
} from "lucide-react";

// Simplified Location data interface
interface LocationInfo {
  id: string;
  city: string;
  slug: string;
  state: string;
}

// All 195 California Cities with simplified structure
const allCitiesLocations: LocationInfo[] = [
  { id: "acton", city: "Acton", slug: "home-improvement-services-in-acton-ca", state: "California" },
  { id: "agoura-hills", city: "Agoura Hills", slug: "home-improvement-services-in-agoura-hills-ca", state: "California" },
  { id: "alhambra", city: "Alhambra", slug: "home-improvement-services-in-alhambra-ca", state: "California" },
  { id: "altadena", city: "Altadena", slug: "home-improvement-services-in-altadena-ca", state: "California" },
  { id: "anaheim", city: "Anaheim", slug: "home-improvement-services-in-anaheim-ca", state: "California" },
  { id: "arcadia", city: "Arcadia", slug: "home-improvement-services-in-arcadia-ca", state: "California" },
  { id: "artesia", city: "Artesia", slug: "home-improvement-services-in-artesia-ca", state: "California" },
  { id: "arvin", city: "Arvin", slug: "home-improvement-services-in-arvin-ca", state: "California" },
  { id: "atwood", city: "Atwood", slug: "home-improvement-services-in-atwood-ca", state: "California" },
  { id: "azusa", city: "Azusa", slug: "home-improvement-services-in-azusa-ca", state: "California" },
  { id: "baldwin-park", city: "Baldwin Park", slug: "home-improvement-services-in-baldwin-park-ca", state: "California" },
  { id: "bell", city: "Bell", slug: "home-improvement-services-in-bell-ca", state: "California" },
  { id: "bell-gardens", city: "Bell Gardens", slug: "home-improvement-services-in-bell-gardens-ca", state: "California" },
  { id: "bellflower", city: "Bellflower", slug: "home-improvement-services-in-bellflower-ca", state: "California" },
  { id: "beverly-hills", city: "Beverly Hills", slug: "home-improvement-services-in-beverly-hills-ca", state: "California" },
  { id: "brandeis", city: "Brandeis", slug: "home-improvement-services-in-brandeis-ca", state: "California" },
  { id: "brea", city: "Brea", slug: "home-improvement-services-in-brea-ca", state: "California" },
  { id: "buena-park", city: "Buena Park", slug: "home-improvement-services-in-buena-park-ca", state: "California" },
  { id: "burbank", city: "Burbank", slug: "home-improvement-services-in-burbank-ca", state: "California" },
  { id: "calabasas", city: "Calabasas", slug: "home-improvement-services-in-calabasas-ca", state: "California" },
  { id: "camarillo", city: "Camarillo", slug: "home-improvement-services-in-camarillo-ca", state: "California" },
  { id: "canoga-park", city: "Canoga Park", slug: "home-improvement-services-in-canoga-park-ca", state: "California" },
  { id: "canyon-country", city: "Canyon Country", slug: "home-improvement-services-in-canyon-country-ca", state: "California" },
  { id: "carpinteria", city: "Carpinteria", slug: "home-improvement-services-in-carpinteria-ca", state: "California" },
  { id: "carson", city: "Carson", slug: "home-improvement-services-in-carson-ca", state: "California" },
  { id: "castaic", city: "Castaic", slug: "home-improvement-services-in-castaic-ca", state: "California" },
  { id: "cerritos", city: "Cerritos", slug: "home-improvement-services-in-cerritos-ca", state: "California" },
  { id: "chatsworth", city: "Chatsworth", slug: "home-improvement-services-in-chatsworth-ca", state: "California" },
  { id: "chino", city: "Chino", slug: "home-improvement-services-in-chino-ca", state: "California" },
  { id: "chino-hills", city: "Chino Hills", slug: "home-improvement-services-in-chino-hills-ca", state: "California" },
  { id: "city-of-industry", city: "City Of Industry", slug: "home-improvement-services-in-city-of-industry-ca", state: "California" },
  { id: "claremont", city: "Claremont", slug: "home-improvement-services-in-claremont-ca", state: "California" },
  { id: "compton", city: "Compton", slug: "home-improvement-services-in-compton-ca", state: "California" },
  { id: "costa-mesa", city: "Costa Mesa", slug: "home-improvement-services-in-costa-mesa-ca", state: "California" },
  { id: "covina", city: "Covina", slug: "home-improvement-services-in-covina-ca", state: "California" },
  { id: "culver-city", city: "Culver City", slug: "home-improvement-services-in-culver-city-ca", state: "California" },
  { id: "cypress", city: "Cypress", slug: "home-improvement-services-in-cypress-ca", state: "California" },
  { id: "diamond-bar", city: "Diamond Bar", slug: "home-improvement-services-in-diamond-bar-ca", state: "California" },
  { id: "downey", city: "Downey", slug: "home-improvement-services-in-downey-ca", state: "California" },
  { id: "duarte", city: "Duarte", slug: "home-improvement-services-in-duarte-ca", state: "California" },
  { id: "el-monte", city: "El Monte", slug: "home-improvement-services-in-el-monte-ca", state: "California" },
  { id: "el-segundo", city: "El Segundo", slug: "home-improvement-services-in-el-segundo-ca", state: "California" },
  { id: "encino", city: "Encino", slug: "home-improvement-services-in-encino-ca", state: "California" },
  { id: "fillmore", city: "Fillmore", slug: "home-improvement-services-in-fillmore-ca", state: "California" },
  { id: "fountain-valley", city: "Fountain Valley", slug: "home-improvement-services-in-fountain-valley-ca", state: "California" },
  { id: "frazier-park", city: "Frazier Park", slug: "home-improvement-services-in-frazier-park-ca", state: "California" },
  { id: "fullerton", city: "Fullerton", slug: "home-improvement-services-in-fullerton-ca", state: "California" },
  { id: "garden-grove", city: "Garden Grove", slug: "home-improvement-services-in-garden-grove-ca", state: "California" },
  { id: "gardena", city: "Gardena", slug: "home-improvement-services-in-gardena-ca", state: "California" },
  { id: "glendale", city: "Glendale", slug: "home-improvement-services-in-glendale-ca", state: "California" },
  { id: "glendora", city: "Glendora", slug: "home-improvement-services-in-glendora-ca", state: "California" },
  { id: "granada-hills", city: "Granada Hills", slug: "home-improvement-services-in-granada-hills-ca", state: "California" },
  { id: "guasti", city: "Guasti", slug: "home-improvement-services-in-guasti-ca", state: "California" },
  { id: "hacienda-heights", city: "Hacienda Heights", slug: "home-improvement-services-in-hacienda-heights-ca", state: "California" },
  { id: "harbor-city", city: "Harbor City", slug: "home-improvement-services-in-harbor-city-ca", state: "California" },
  { id: "hawaiian-gardens", city: "Hawaiian Gardens", slug: "home-improvement-services-in-hawaiian-gardens-ca", state: "California" },
  { id: "hawthorne", city: "Hawthorne", slug: "home-improvement-services-in-hawthorne-ca", state: "California" },
  { id: "hermosa-beach", city: "Hermosa Beach", slug: "home-improvement-services-in-hermosa-beach-ca", state: "California" },
  { id: "huntington-beach", city: "Huntington Beach", slug: "home-improvement-services-in-huntington-beach-ca", state: "California" },
  { id: "huntington-park", city: "Huntington Park", slug: "home-improvement-services-in-huntington-park-ca", state: "California" },
  { id: "inglewood", city: "Inglewood", slug: "home-improvement-services-in-inglewood-ca", state: "California" },
  { id: "la-canada-flintridge", city: "La Canada Flintridge", slug: "home-improvement-services-in-la-canada-flintridge-ca", state: "California" },
  { id: "la-crescenta", city: "La Crescenta", slug: "home-improvement-services-in-la-crescenta-ca", state: "California" },
  { id: "la-habra", city: "La Habra", slug: "home-improvement-services-in-la-habra-ca", state: "California" },
  { id: "la-mirada", city: "La Mirada", slug: "home-improvement-services-in-la-mirada-ca", state: "California" },
  { id: "la-palma", city: "La Palma", slug: "home-improvement-services-in-la-palma-ca", state: "California" },
  { id: "la-puente", city: "La Puente", slug: "home-improvement-services-in-la-puente-ca", state: "California" },
  { id: "la-verne", city: "La Verne", slug: "home-improvement-services-in-la-verne-ca", state: "California" },
  { id: "lake-hughes", city: "Lake Hughes", slug: "home-improvement-services-in-lake-hughes-ca", state: "California" },
  { id: "lakewood", city: "Lakewood", slug: "home-improvement-services-in-lakewood-ca", state: "California" },
  { id: "lancaster", city: "Lancaster", slug: "home-improvement-services-in-lancaster-ca", state: "California" },
  { id: "lawndale", city: "Lawndale", slug: "home-improvement-services-in-lawndale-ca", state: "California" },
  { id: "lebec", city: "Lebec", slug: "home-improvement-services-in-lebec-ca", state: "California" },
  { id: "littlerock", city: "Littlerock", slug: "home-improvement-services-in-littlerock-ca", state: "California" },
  { id: "llano", city: "Llano", slug: "home-improvement-services-in-llano-ca", state: "California" },
  { id: "lomita", city: "Lomita", slug: "home-improvement-services-in-lomita-ca", state: "California" },
  { id: "long-beach", city: "Long Beach", slug: "home-improvement-services-in-long-beach-ca", state: "California" },
  { id: "los-alamitos", city: "Los Alamitos", slug: "home-improvement-services-in-los-alamitos-ca", state: "California" },
  { id: "los-angeles", city: "Los Angeles", slug: "home-improvement-services-in-los-angeles-ca", state: "California" },
  { id: "lynwood", city: "Lynwood", slug: "home-improvement-services-in-lynwood-ca", state: "California" },
  { id: "malibu", city: "Malibu", slug: "home-improvement-services-in-malibu-ca", state: "California" },
  { id: "manhattan-beach", city: "Manhattan Beach", slug: "home-improvement-services-in-manhattan-beach-ca", state: "California" },
  { id: "marina-del-rey", city: "Marina Del Rey", slug: "home-improvement-services-in-marina-del-rey-ca", state: "California" },
  { id: "maywood", city: "Maywood", slug: "home-improvement-services-in-maywood-ca", state: "California" },
  { id: "midway-city", city: "Midway City", slug: "home-improvement-services-in-midway-city-ca", state: "California" },
  { id: "mission-hills", city: "Mission Hills", slug: "home-improvement-services-in-mission-hills-ca", state: "California" },
  { id: "mojave", city: "Mojave", slug: "home-improvement-services-in-mojave-ca", state: "California" },
  { id: "monrovia", city: "Monrovia", slug: "home-improvement-services-in-monrovia-ca", state: "California" },
  { id: "montclair", city: "Montclair", slug: "home-improvement-services-in-montclair-ca", state: "California" },
  { id: "montebello", city: "Montebello", slug: "home-improvement-services-in-montebello-ca", state: "California" },
  { id: "monterey-park", city: "Monterey Park", slug: "home-improvement-services-in-monterey-park-ca", state: "California" },
  { id: "montrose", city: "Montrose", slug: "home-improvement-services-in-montrose-ca", state: "California" },
  { id: "moorpark", city: "Moorpark", slug: "home-improvement-services-in-moorpark-ca", state: "California" },
  { id: "mount-wilson", city: "Mount Wilson", slug: "home-improvement-services-in-mount-wilson-ca", state: "California" },
  { id: "mt-baldy", city: "Mt Baldy", slug: "home-improvement-services-in-mt-baldy-ca", state: "California" },
  { id: "newbury-park", city: "Newbury Park", slug: "home-improvement-services-in-newbury-park-ca", state: "California" },
  { id: "newhall", city: "Newhall", slug: "home-improvement-services-in-newhall-ca", state: "California" },
  { id: "newport-beach", city: "Newport Beach", slug: "home-improvement-services-in-newport-beach-ca", state: "California" },
  { id: "north-hills", city: "North Hills", slug: "home-improvement-services-in-north-hills-ca", state: "California" },
  { id: "north-hollywood", city: "North Hollywood", slug: "home-improvement-services-in-north-hollywood-ca", state: "California" },
  { id: "northridge", city: "Northridge", slug: "home-improvement-services-in-northridge-ca", state: "California" },
  { id: "norwalk", city: "Norwalk", slug: "home-improvement-services-in-norwalk-ca", state: "California" },
  { id: "oak-park", city: "Oak Park", slug: "home-improvement-services-in-oak-park-ca", state: "California" },
  { id: "oak-view", city: "Oak View", slug: "home-improvement-services-in-oak-view-ca", state: "California" },
  { id: "ojai", city: "Ojai", slug: "home-improvement-services-in-ojai-ca", state: "California" },
  { id: "ontario", city: "Ontario", slug: "home-improvement-services-in-ontario-ca", state: "California" },
  { id: "orange", city: "Orange", slug: "home-improvement-services-in-orange-ca", state: "California" },
  { id: "oxnard", city: "Oxnard", slug: "home-improvement-services-in-oxnard-ca", state: "California" },
  { id: "pacific-palisades", city: "Pacific Palisades", slug: "home-improvement-services-in-pacific-palisades-ca", state: "California" },
  { id: "pacoima", city: "Pacoima", slug: "home-improvement-services-in-pacoima-ca", state: "California" },
  { id: "palmdale", city: "Palmdale", slug: "home-improvement-services-in-palmdale-ca", state: "California" },
  { id: "palos-verdes-peninsula", city: "Palos Verdes Peninsula", slug: "home-improvement-services-in-palos-verdes-peninsula-ca", state: "California" },
  { id: "panorama-city", city: "Panorama City", slug: "home-improvement-services-in-panorama-city-ca", state: "California" },
  { id: "paramount", city: "Paramount", slug: "home-improvement-services-in-paramount-ca", state: "California" },
  { id: "pasadena", city: "Pasadena", slug: "home-improvement-services-in-pasadena-ca", state: "California" },
  { id: "pearblossom", city: "Pearblossom", slug: "home-improvement-services-in-pearblossom-ca", state: "California" },
  { id: "phelan", city: "Phelan", slug: "home-improvement-services-in-phelan-ca", state: "California" },
  { id: "pico-rivera", city: "Pico Rivera", slug: "home-improvement-services-in-pico-rivera-ca", state: "California" },
  { id: "pine-mountain-club", city: "Pine Mountain Club", slug: "home-improvement-services-in-pine-mountain-club-ca", state: "California" },
  { id: "pinon-hills", city: "Pinon Hills", slug: "home-improvement-services-in-pinon-hills-ca", state: "California" },
  { id: "piru", city: "Piru", slug: "home-improvement-services-in-piru-ca", state: "California" },
  { id: "placentia", city: "Placentia", slug: "home-improvement-services-in-placentia-ca", state: "California" },
  { id: "playa-del-rey", city: "Playa Del Rey", slug: "home-improvement-services-in-playa-del-rey-ca", state: "California" },
  { id: "playa-vista", city: "Playa Vista", slug: "home-improvement-services-in-playa-vista-ca", state: "California" },
  { id: "pomona", city: "Pomona", slug: "home-improvement-services-in-pomona-ca", state: "California" },
  { id: "port-hueneme", city: "Port Hueneme", slug: "home-improvement-services-in-port-hueneme-ca", state: "California" },
  { id: "port-hueneme-cbc-base", city: "Port Hueneme Cbc Base", slug: "home-improvement-services-in-port-hueneme-cbc-base-ca", state: "California" },
  { id: "porter-ranch", city: "Porter Ranch", slug: "home-improvement-services-in-porter-ranch-ca", state: "California" },
  { id: "rancho-cucamonga", city: "Rancho Cucamonga", slug: "home-improvement-services-in-rancho-cucamonga-ca", state: "California" },
  { id: "rancho-palos-verdes", city: "Rancho Palos Verdes", slug: "home-improvement-services-in-rancho-palos-verdes-ca", state: "California" },
  { id: "redondo-beach", city: "Redondo Beach", slug: "home-improvement-services-in-redondo-beach-ca", state: "California" },
  { id: "reseda", city: "Reseda", slug: "home-improvement-services-in-reseda-ca", state: "California" },
  { id: "rosamond", city: "Rosamond", slug: "home-improvement-services-in-rosamond-ca", state: "California" },
  { id: "rosemead", city: "Rosemead", slug: "home-improvement-services-in-rosemead-ca", state: "California" },
  { id: "rowland-heights", city: "Rowland Heights", slug: "home-improvement-services-in-rowland-heights-ca", state: "California" },
  { id: "san-dimas", city: "San Dimas", slug: "home-improvement-services-in-san-dimas-ca", state: "California" },
  { id: "san-fernando", city: "San Fernando", slug: "home-improvement-services-in-san-fernando-ca", state: "California" },
  { id: "san-gabriel", city: "San Gabriel", slug: "home-improvement-services-in-san-gabriel-ca", state: "California" },
  { id: "san-marino", city: "San Marino", slug: "home-improvement-services-in-san-marino-ca", state: "California" },
  { id: "san-pedro", city: "San Pedro", slug: "home-improvement-services-in-san-pedro-ca", state: "California" },
  { id: "santa-ana", city: "Santa Ana", slug: "home-improvement-services-in-santa-ana-ca", state: "California" },
  { id: "santa-barbara", city: "Santa Barbara", slug: "home-improvement-services-in-santa-barbara-ca", state: "California" },
  { id: "santa-clarita", city: "Santa Clarita", slug: "home-improvement-services-in-santa-clarita-ca", state: "California" },
  { id: "santa-fe-springs", city: "Santa Fe Springs", slug: "home-improvement-services-in-santa-fe-springs-ca", state: "California" },
  { id: "santa-monica", city: "Santa Monica", slug: "home-improvement-services-in-santa-monica-ca", state: "California" },
  { id: "santa-paula", city: "Santa Paula", slug: "home-improvement-services-in-santa-paula-ca", state: "California" },
  { id: "seal-beach", city: "Seal Beach", slug: "home-improvement-services-in-seal-beach-ca", state: "California" },
  { id: "sherman-oaks", city: "Sherman Oaks", slug: "home-improvement-services-in-sherman-oaks-ca", state: "California" },
  { id: "sierra-madre", city: "Sierra Madre", slug: "home-improvement-services-in-sierra-madre-ca", state: "California" },
  { id: "signal-hill", city: "Signal Hill", slug: "home-improvement-services-in-signal-hill-ca", state: "California" },
  { id: "simi-valley", city: "Simi Valley", slug: "home-improvement-services-in-simi-valley-ca", state: "California" },
  { id: "somis", city: "Somis", slug: "home-improvement-services-in-somis-ca", state: "California" },
  { id: "south-el-monte", city: "South El Monte", slug: "home-improvement-services-in-south-el-monte-ca", state: "California" },
  { id: "south-gate", city: "South Gate", slug: "home-improvement-services-in-south-gate-ca", state: "California" },
  { id: "south-pasadena", city: "South Pasadena", slug: "home-improvement-services-in-south-pasadena-ca", state: "California" },
  { id: "stanton", city: "Stanton", slug: "home-improvement-services-in-stanton-ca", state: "California" },
  { id: "stevenson-ranch", city: "Stevenson Ranch", slug: "home-improvement-services-in-stevenson-ranch-ca", state: "California" },
  { id: "studio-city", city: "Studio City", slug: "home-improvement-services-in-studio-city-ca", state: "California" },
  { id: "summerland", city: "Summerland", slug: "home-improvement-services-in-summerland-ca", state: "California" },
  { id: "sun-valley", city: "Sun Valley", slug: "home-improvement-services-in-sun-valley-ca", state: "California" },
  { id: "sunland", city: "Sunland", slug: "home-improvement-services-in-sunland-ca", state: "California" },
  { id: "sunset-beach", city: "Sunset Beach", slug: "home-improvement-services-in-sunset-beach-ca", state: "California" },
  { id: "surfside", city: "Surfside", slug: "home-improvement-services-in-surfside-ca", state: "California" },
  { id: "sylmar", city: "Sylmar", slug: "home-improvement-services-in-sylmar-ca", state: "California" },
  { id: "tarzana", city: "Tarzana", slug: "home-improvement-services-in-tarzana-ca", state: "California" },
  { id: "tehachapi", city: "Tehachapi", slug: "home-improvement-services-in-tehachapi-ca", state: "California" },
  { id: "temple-city", city: "Temple City", slug: "home-improvement-services-in-temple-city-ca", state: "California" },
  { id: "thousand-oaks", city: "Thousand Oaks", slug: "home-improvement-services-in-thousand-oaks-ca", state: "California" },
  { id: "toluca-lake", city: "Toluca Lake", slug: "home-improvement-services-in-toluca-lake-ca", state: "California" },
  { id: "topanga", city: "Topanga", slug: "home-improvement-services-in-topanga-ca", state: "California" },
  { id: "torrance", city: "Torrance", slug: "home-improvement-services-in-torrance-ca", state: "California" },
  { id: "tujunga", city: "Tujunga", slug: "home-improvement-services-in-tujunga-ca", state: "California" },
  { id: "tustin", city: "Tustin", slug: "home-improvement-services-in-tustin-ca", state: "California" },
  { id: "universal-city", city: "Universal City", slug: "home-improvement-services-in-universal-city-ca", state: "California" },
  { id: "upland", city: "Upland", slug: "home-improvement-services-in-upland-ca", state: "California" },
  { id: "valencia", city: "Valencia", slug: "home-improvement-services-in-valencia-ca", state: "California" },
  { id: "valley-village", city: "Valley Village", slug: "home-improvement-services-in-valley-village-ca", state: "California" },
  { id: "valyermo", city: "Valyermo", slug: "home-improvement-services-in-valyermo-ca", state: "California" },
  { id: "van-nuys", city: "Van Nuys", slug: "home-improvement-services-in-van-nuys-ca", state: "California" },
  { id: "venice", city: "Venice", slug: "home-improvement-services-in-venice-ca", state: "California" },
  { id: "ventura", city: "Ventura", slug: "home-improvement-services-in-ventura-ca", state: "California" },
  { id: "verdugo-city", city: "Verdugo City", slug: "home-improvement-services-in-verdugo-city-ca", state: "California" },
  { id: "villa-park", city: "Villa Park", slug: "home-improvement-services-in-villa-park-ca", state: "California" },
  { id: "walnut", city: "Walnut", slug: "home-improvement-services-in-walnut-ca", state: "California" },
  { id: "west-covina", city: "West Covina", slug: "home-improvement-services-in-west-covina-ca", state: "California" },
  { id: "west-hills", city: "West Hills", slug: "home-improvement-services-in-west-hills-ca", state: "California" },
  { id: "west-hollywood", city: "West Hollywood", slug: "home-improvement-services-in-west-hollywood-ca", state: "California" },
  { id: "westlake-village", city: "Westlake Village", slug: "home-improvement-services-in-westlake-village-ca", state: "California" },
  { id: "westminster", city: "Westminster", slug: "home-improvement-services-in-westminster-ca", state: "California" },
  { id: "whittier", city: "Whittier", slug: "home-improvement-services-in-whittier-ca", state: "California" },
  { id: "wilmington", city: "Wilmington", slug: "home-improvement-services-in-wilmington-ca", state: "California" },
  { id: "winnetka", city: "Winnetka", slug: "home-improvement-services-in-winnetka-ca", state: "California" },
  { id: "woodland-hills", city: "Woodland Hills", slug: "home-improvement-services-in-woodland-hills-ca", state: "California" },
  { id: "wrightwood", city: "Wrightwood", slug: "home-improvement-services-in-wrightwood-ca", state: "California" },
  { id: "yorba-linda", city: "Yorba Linda", slug: "home-improvement-services-in-yorba-linda-ca", state: "California" },
];

export default function LocationsClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredLocations = useMemo(() => {
    return allCitiesLocations.filter((location) =>
      location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const displayedLocations = useMemo(() => {
    return searchTerm ? filteredLocations : allCitiesLocations;
  }, [searchTerm, filteredLocations]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-green-100 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-8 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center bg-gray-100 border border-gray-200 px-4 py-2 rounded-full font-medium text-sm text-gray-700 mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Complete Southern California Coverage
            </div>

            <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6 leading-tight">
              Expert Home Improvement Services
              <span className="block bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
                Across 195+ California Cities
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional home improvement contractors serving Southern California. 
              Specializing in paver installation, window replacement, roofing services, and exterior painting 
              with licensed experts and quality guarantees.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="font-medium text-3xl text-pink-600 mb-1">195+</div>
                <div className="text-gray-600 text-sm">Cities Served</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="font-medium text-3xl text-green-600 mb-1">15k+</div>
                <div className="text-gray-600 text-sm">Projects Done</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="font-medium text-3xl text-pink-600 mb-1">4.9/5</div>
                <div className="text-gray-600 text-sm">Customer Rating</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="font-medium text-3xl text-green-600 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-medium text-pink-600">
                {displayedLocations.length}
              </span>{" "}
              cities across California
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
              {displayedLocations.map((location, index) => (
                <Link
                  key={index}
                  href={`/locations/${location.slug}`}
                  className="group text-center py-4 px-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <MapPin className="h-6 w-6 text-gray-600 mx-auto mb-2 group-hover:text-gray-800 transition-colors" />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-700 transition-colors leading-tight">
                    {location.city}
                  </h4>
                  <div className="text-xs text-gray-500">CA</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {Math.floor(Math.random() * 50) + 100} projects
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {displayedLocations.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-medium text-xl text-gray-800 mb-2">No Cities Found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or browse all available cities.
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-white bg-pink-600 hover:bg-pink-700"
                >
                  Show All Cities
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
              Complete Home Improvement Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional services available in all covered cities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <MapPin className="h-12 w-12 text-pink-600 mb-4 mx-auto" />
              <h3 className="font-medium text-gray-900 mb-2">Paver Installation</h3>
              <p className="text-gray-600 text-sm">Driveways, patios, walkways, pool decks</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Star className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <h3 className="font-medium text-gray-900 mb-2">Window Services</h3>
              <p className="text-gray-600 text-sm">Replacement, installation, energy-efficient</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-pink-600 mb-4 mx-auto" />
              <h3 className="font-medium text-gray-900 mb-2">Roofing Services</h3>
              <p className="text-gray-600 text-sm">Repair, replacement, emergency service</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Award className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <h3 className="font-medium text-gray-900 mb-2">Exterior Painting</h3>
              <p className="text-gray-600 text-sm">Residential and commercial painting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-green-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gray-50 rounded-3xl p-8 text-gray-700 shadow-sm relative overflow-hidden">
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-6 py-3 mb-6">
                <Award className="h-5 w-5 mr-2 text-pink-600" />
                Complete Service Guarantee
              </div>
              <h3 className="font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 text-gray-900">
                Ready to Transform Your Home?
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                From beautiful paver installations to energy-efficient windows, our expert contractors 
                deliver quality craftsmanship with professional results. Licensed, insured, and backed by comprehensive warranties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => (window.location.href = "tel:+18184536110")}
                  className="group px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 text-white bg-pink-600 hover:bg-pink-700"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-medium">(818) 453-6110</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/services"
                  className="group bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  View All Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}