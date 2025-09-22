// src/app/locations/data/index.ts

import {
  LocationData,
  SubDomainData,
  LocationType,
  SitemapEntry,
  LocationRegistryItem,
  DebugInfo,
} from "./types";
import { LOCATION_STATIC_CONFIG } from "./static-config";

// =============================================================================
// DYNAMIC IMPORTS - Add your location files here
// =============================================================================

// Location data imports
import { actoncaDynamicData } from "./data/acton-ca";
import { agourahillscaDynamicData } from "./data/agourahills-ca";
import { altadenacaDynamicData } from "./data/altadena-ca";
import { alhambracaDynamicData } from "./data/alhambra-ca";
import { artesiacaDynamicData } from "./data/artesia-ca";
import { arvincaDynamicData } from "./data/arvin-ca";
import { anaheimcaDynamicData } from "./data/anaheim-ca";
import { baldwinparkcaDynamicData } from "./data/baldwinpark-ca";
import { atwoodcaDynamicData } from "./data/atwood-ca";
import { azusacaDynamicData } from "./data/azusa-ca";
import { arcadiacaDynamicData } from "./data/arcadia-ca";
import { bellcaDynamicData } from "./data/bell-ca";
import { bellflowercaDynamicData } from "./data/bellflower-ca";
import { bellgardenscaDynamicData } from "./data/bellgardens-ca";
import { beverlyhillscaDynamicData } from "./data/beverlyhills-ca";
import { brandeiscaDynamicData } from "./data/brandeis-ca";
import { breacaDynamicData } from "./data/brea-ca";
import { burbankcaDynamicData } from "./data/burbank-ca";
import { calabasascaDynamicData } from "./data/calabasas-ca";
import { buenaparkcaDynamicData } from "./data/buenapark-ca";
import { camarillocaDynamicData } from "./data/camarillo-ca";
import { canyoncountrycaDynamicData } from "./data/canyoncountry-ca";
import { canogaparkcaDynamicData } from "./data/canogapark-ca";
import { carsoncaDynamicData } from "./data/carson-ca";
import { carpinteriacaDynamicData } from "./data/carpinteria-ca";
import { chatsworthcaDynamicData } from "./data/chatsworth-ca";
import { chinohillscaDynamicData } from "./data/chinohills-ca";
import { castaiccaDynamicData } from "./data/castaic-ca";
import { cerritoscaDynamicData } from "./data/cerritos-ca";
import { chinocaDynamicData } from "./data/chino-ca";
import { cityofindustrycaDynamicData } from "./data/cityofindustry-ca";
import { costamesacaDynamicData } from "./data/costamesa-ca";
import { covinacaDynamicData } from "./data/covina-ca";
import { claremontcaDynamicData } from "./data/claremont-ca";
import { comptoncaDynamicData } from "./data/compton-ca";
import { cypresscaDynamicData } from "./data/cypress-ca";
import { diamondbarcaDynamicData } from "./data/diamondbar-ca";
import { culvercitycaDynamicData } from "./data/culvercity-ca";
import { elmontecaDynamicData } from "./data/elmonte-ca";
import { downeycaDynamicData } from "./data/downey-ca";
import { duartecaDynamicData } from "./data/duarte-ca";
import { encinocaDynamicData } from "./data/encino-ca";
import { elsegundocaDynamicData } from "./data/elsegundo-ca";
import { fountainvalleycaDynamicData } from "./data/fountainvalley-ca";
import { fillmorecaDynamicData } from "./data/fillmore-ca";
import { fullertoncaDynamicData } from "./data/fullerton-ca";
import { frazierparkcaDynamicData } from "./data/frazierpark-ca";
import { gardenacaDynamicData } from "./data/gardena-ca";
import { gardengrovecaDynamicData } from "./data/gardengrove-ca";
import { glendoracaDynamicData } from "./data/glendora-ca";
import { guasticaDynamicData } from "./data/guasti-ca";
import { glendalecaDynamicData } from "./data/glendale-ca";
import { harborcitycaDynamicData } from "./data/harborcity-ca";
import { granadahillscaDynamicData } from "./data/granadahills-ca";
import { haciendaheightscaDynamicData } from "./data/haciendaheights-ca";
import { hawaiiangardenscaDynamicData } from "./data/hawaiiangardens-ca";
import { hawthornecaDynamicData } from "./data/hawthorne-ca";
import { hermosabeachcaDynamicData } from "./data/hermosabeach-ca";
import { huntingtonbeachcaDynamicData } from "./data/huntingtonbeach-ca";
import { huntingtonparkcaDynamicData } from "./data/huntingtonpark-ca";
import { inglewoodcaDynamicData } from "./data/inglewood-ca";
import { lacrescentacaDynamicData } from "./data/lacrescenta-ca";
import { lacanadaflintridgecaDynamicData } from "./data/lacanadaflintridge-ca";
import { lahabracaDynamicData } from "./data/lahabra-ca";
import { lakewoodcaDynamicData } from "./data/lakewood-ca";
import { lakehughescaDynamicData } from "./data/lakehughes-ca";
import { lancastercaDynamicData } from "./data/lancaster-ca";
import { lamiradacaDynamicData } from "./data/lamirada-ca";
import { lapalmacaDynamicData } from "./data/lapalma-ca";
import { lavernecaDynamicData } from "./data/laverne-ca";
import { lapuentecaDynamicData } from "./data/lapuente-ca";
import { lawndalecaDynamicData } from "./data/lawndale-ca";
import { littlerockcaDynamicData } from "./data/littlerock-ca";
import { lebeccaDynamicData } from "./data/lebec-ca";
import { llanocaDynamicData } from "./data/llano-ca";
import { lomitacaDynamicData } from "./data/lomita-ca";
import { longbeachcaDynamicData } from "./data/longbeach-ca";
import { losalamitoscaDynamicData } from "./data/losalamitos-ca";
import { losangelescaDynamicData } from "./data/losangeles-ca";
import { lynwoodcaDynamicData } from "./data/lynwood-ca";
import { malibucaDynamicData } from "./data/malibu-ca";
import { marinadelreycaDynamicData } from "./data/marinadelrey-ca";
import { manhattanbeachcaDynamicData } from "./data/manhattanbeach-ca";
import { missionhillscaDynamicData } from "./data/missionhills-ca";
import { midwaycitycaDynamicData } from "./data/midwaycity-ca";
import { maywoodcaDynamicData } from "./data/maywood-ca";
import { mojavecaDynamicData } from "./data/mojave-ca";
import { monroviacaDynamicData } from "./data/monrovia-ca";
import { montclaircaDynamicData } from "./data/montclair-ca";
import { montebellocaDynamicData } from "./data/montebello-ca";
import { montereyparkcaDynamicData } from "./data/montereypark-ca";
import { montrosecaDynamicData } from "./data/montrose-ca";
import { newhallcaDynamicData } from "./data/newhall-ca";
import { mtbaldycaDynamicData } from "./data/mtbaldy-ca";
import { mountwilsoncaDynamicData } from "./data/mountwilson-ca";
import { moorparkcaDynamicData } from "./data/moorpark-ca";
import { newburyparkcaDynamicData } from "./data/newburypark-ca";
import { newportbeachcaDynamicData } from "./data/newportbeach-ca";
import { northhillscaDynamicData } from "./data/northhills-ca";
import { northridgecaDynamicData } from "./data/northridge-ca";
import { northhollywoodcaDynamicData } from "./data/northhollywood-ca";
import { oakparkcaDynamicData } from "./data/oakpark-ca";
import { norwalkcaDynamicData } from "./data/norwalk-ca";
import { oakviewcaDynamicData } from "./data/oakview-ca";
import { ontariocaDynamicData } from "./data/ontario-ca";
import { ojaicaDynamicData } from "./data/ojai-ca";
import { orangecaDynamicData } from "./data/orange-ca";
import { oxnardcaDynamicData } from "./data/oxnard-ca";
import { pacificpalisadescaDynamicData } from "./data/pacificpalisades-ca";
import { palmdalecaDynamicData } from "./data/palmdale-ca";
import { pacoimacaDynamicData } from "./data/pacoima-ca";
import { panoramacitycaDynamicData } from "./data/panoramacity-ca";
import { palosverdespeninsulacaDynamicData } from "./data/palosverdespeninsula-ca";
import { paramountcaDynamicData } from "./data/paramount-ca";
import { pasadenacaDynamicData } from "./data/pasadena-ca";
import { pearblossomcaDynamicData } from "./data/pearblossom-ca";
import { picoriveracaDynamicData } from "./data/picorivera-ca";
import { phelancaDynamicData } from "./data/phelan-ca";
import { pinemountainclubcaDynamicData } from "./data/pinemountainclub-ca";
import { pirucaDynamicData } from "./data/piru-ca";
import { pinonhillscaDynamicData } from "./data/pinonhills-ca";
import { placentiacaDynamicData } from "./data/placentia-ca";
import { playadelreycaDynamicData } from "./data/playadelrey-ca";
import { playavistacaDynamicData } from "./data/playavista-ca";
import { porterranchcaDynamicData } from "./data/porterranch-ca";
import { pomonacaDynamicData } from "./data/pomona-ca";
import { porthuenemecbcbasecaDynamicData } from "./data/porthuenemecbcbase-ca";
import { porthuenemecaDynamicData } from "./data/porthueneme-ca";
import { ranchocucamongacaDynamicData } from "./data/ranchocucamonga-ca";
import { ranchopalosverdescaDynamicData } from "./data/ranchopalosverdes-ca";
import { redondobeachcaDynamicData } from "./data/redondobeach-ca";
import { rosamondcaDynamicData } from "./data/rosamond-ca";
import { rosemeadcaDynamicData } from "./data/rosemead-ca";
import { resedacaDynamicData } from "./data/reseda-ca";
import { sandimascaDynamicData } from "./data/sandimas-ca";
import { rowlandheightscaDynamicData } from "./data/rowlandheights-ca";
import { sanfernandocaDynamicData } from "./data/sanfernando-ca";
import { sangabrielcaDynamicData } from "./data/sangabriel-ca";
import { sanmarinocaDynamicData } from "./data/sanmarino-ca";
import { sanpedrocaDynamicData } from "./data/sanpedro-ca";
import { santaanacaDynamicData } from "./data/santaana-ca";
import { santamonicacaDynamicData } from "./data/santamonica-ca";
import { santabarbaracaDynamicData } from "./data/santabarbara-ca";
import { santaclaritacaDynamicData } from "./data/santaclarita-ca";
import { santapaulacaDynamicData } from "./data/santapaula-ca";
import { santafespringscaDynamicData } from "./data/santafesprings-ca";
import { sierramadrecaDynamicData } from "./data/sierramadre-ca";
import { shermanoakscaDynamicData } from "./data/shermanoaks-ca";
import { sealbeachcaDynamicData } from "./data/sealbeach-ca";
import { simivalleycaDynamicData } from "./data/simivalley-ca";
import { somiscaDynamicData } from "./data/somis-ca";
import { signalhillcaDynamicData } from "./data/signalhill-ca";
import { southelmontecaDynamicData } from "./data/southelmonte-ca";
import { southgatecaDynamicData } from "./data/southgate-ca";
import { southpasadenacaDynamicData } from "./data/southpasadena-ca";
import { stantoncaDynamicData } from "./data/stanton-ca";
import { stevensonranchcaDynamicData } from "./data/stevensonranch-ca";
import { studiocitycaDynamicData } from "./data/studiocity-ca";
import { summerlandcaDynamicData } from "./data/summerland-ca";
import { sunsetbeachcaDynamicData } from "./data/sunsetbeach-ca";
import { sunlandcaDynamicData } from "./data/sunland-ca";
import { sunvalleycaDynamicData } from "./data/sunvalley-ca";
import { surfsidecaDynamicData } from "./data/surfside-ca";
import { sylmarcaDynamicData } from "./data/sylmar-ca";
import { tehachapicaDynamicData } from "./data/tehachapi-ca";
import { tarzanacaDynamicData } from "./data/tarzana-ca";
import { templecitycaDynamicData } from "./data/templecity-ca";
import { thousandoakscaDynamicData } from "./data/thousandoaks-ca";
import { torrancecaDynamicData } from "./data/torrance-ca";
import { tolucalakecaDynamicData } from "./data/tolucalake-ca";
import { topangacaDynamicData } from "./data/topanga-ca";
import { tustincaDynamicData } from "./data/tustin-ca";
import { tujungacaDynamicData } from "./data/tujunga-ca";
import { universalcitycaDynamicData } from "./data/universalcity-ca";
import { valenciacaDynamicData } from "./data/valencia-ca";
import { uplandcaDynamicData } from "./data/upland-ca";
import { valleyvillagecaDynamicData } from "./data/valleyvillage-ca";
import { valyermocaDynamicData } from "./data/valyermo-ca";
import { vannuyscaDynamicData } from "./data/vannuys-ca";
import { verdugocitycaDynamicData } from "./data/verdugocity-ca";
import { venturacaDynamicData } from "./data/ventura-ca";
import { venicecaDynamicData } from "./data/venice-ca";
import { westcovinacaDynamicData } from "./data/westcovina-ca";
import { westhollywoodcaDynamicData } from "./data/westhollywood-ca";
import { walnutcaDynamicData } from "./data/walnut-ca";
import { westminstercaDynamicData } from "./data/westminster-ca";
import { whittiercaDynamicData } from "./data/whittier-ca";
import { westhillscaDynamicData } from "./data/westhills-ca";
import { westlakevillagecaDynamicData } from "./data/westlakevillage-ca";
import { villaparkcaDynamicData } from "./data/villapark-ca";
import { wilmingtoncaDynamicData } from "./data/wilmington-ca";
import { woodlandhillscaDynamicData } from "./data/woodlandhills-ca";
import { winnetkacaDynamicData } from "./data/winnetka-ca";
import { yorbalindacaDynamicData } from "./data/yorbalinda-ca";
import { wrightwoodcaDynamicData } from "./data/wrightwood-ca";

// Location registry with comprehensive updates
const LOCATIONS_REGISTRY: { [slug: string]: LocationRegistryItem } = {
  "home-improvement-services-in-acton-ca": {
    data: actoncaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-agoura-hills-ca": {
    data: agourahillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-altadena-ca": {
    data: altadenacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-alhambra-ca": {
    data: alhambracaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-artesia-ca": {
    data: artesiacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-arvin-ca": {
    data: arvincaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-anaheim-ca": {
    data: anaheimcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-baldwin-park-ca": {
    data: baldwinparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-atwood-ca": {
    data: atwoodcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-azusa-ca": {
    data: azusacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-arcadia-ca": {
    data: arcadiacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-bell-ca": {
    data: bellcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-bellflower-ca": {
    data: bellflowercaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-bell-gardens-ca": {
    data: bellgardenscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-beverly-hills-ca": {
    data: beverlyhillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-brandeis-ca": {
    data: brandeiscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-brea-ca": {
    data: breacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-burbank-ca": {
    data: burbankcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-calabasas-ca": {
    data: calabasascaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-buena-park-ca": {
    data: buenaparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-camarillo-ca": {
    data: camarillocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-canyon-country-ca": {
    data: canyoncountrycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-canoga-park-ca": {
    data: canogaparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-carson-ca": {
    data: carsoncaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-carpinteria-ca": {
    data: carpinteriacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-chatsworth-ca": {
    data: chatsworthcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-chino-hills-ca": {
    data: chinohillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-castaic-ca": {
    data: castaiccaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-cerritos-ca": {
    data: cerritoscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-chino-ca": {
    data: chinocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-city-of-industry-ca": {
    data: cityofindustrycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-costa-mesa-ca": {
    data: costamesacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-covina-ca": {
    data: covinacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-claremont-ca": {
    data: claremontcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-compton-ca": {
    data: comptoncaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-cypress-ca": {
    data: cypresscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-diamond-bar-ca": {
    data: diamondbarcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-culver-city-ca": {
    data: culvercitycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-el-monte-ca": {
    data: elmontecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-downey-ca": {
    data: downeycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-duarte-ca": {
    data: duartecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-encino-ca": {
    data: encinocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-el-segundo-ca": {
    data: elsegundocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-fountain-valley-ca": {
    data: fountainvalleycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-fillmore-ca": {
    data: fillmorecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-fullerton-ca": {
    data: fullertoncaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-frazier-park-ca": {
    data: frazierparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-gardena-ca": {
    data: gardenacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-garden-grove-ca": {
    data: gardengrovecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-glendora-ca": {
    data: glendoracaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-guasti-ca": {
    data: guasticaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-glendale-ca": {
    data: glendalecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-harbor-city-ca": {
    data: harborcitycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-granada-hills-ca": {
    data: granadahillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-hacienda-heights-ca": {
    data: haciendaheightscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-hawaiian-gardens-ca": {
    data: hawaiiangardenscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-hawthorne-ca": {
    data: hawthornecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-hermosa-beach-ca": {
    data: hermosabeachcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-huntington-beach-ca": {
    data: huntingtonbeachcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-huntington-park-ca": {
    data: huntingtonparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-inglewood-ca": {
    data: inglewoodcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-la-crescenta-ca": {
    data: lacrescentacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-la-canada-flintridge-ca": {
    data: lacanadaflintridgecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-la-habra-ca": {
    data: lahabracaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-lakewood-ca": {
    data: lakewoodcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-lake-hughes-ca": {
    data: lakehughescaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-lancaster-ca": {
    data: lancastercaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-la-mirada-ca": {
    data: lamiradacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-la-palma-ca": {
    data: lapalmacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-la-verne-ca": {
    data: lavernecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-la-puente-ca": {
    data: lapuentecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-lawndale-ca": {
    data: lawndalecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-littlerock-ca": {
    data: littlerockcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-lebec-ca": {
    data: lebeccaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-llano-ca": {
    data: llanocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-lomita-ca": {
    data: lomitacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-long-beach-ca": {
    data: longbeachcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-los-alamitos-ca": {
    data: losalamitoscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-los-angeles-ca": {
    data: losangelescaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-lynwood-ca": {
    data: lynwoodcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-malibu-ca": {
    data: malibucaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-marina-del-rey-ca": {
    data: marinadelreycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-manhattan-beach-ca": {
    data: manhattanbeachcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-mission-hills-ca": {
    data: missionhillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-midway-city-ca": {
    data: midwaycitycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-maywood-ca": {
    data: maywoodcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-mojave-ca": {
    data: mojavecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-monrovia-ca": {
    data: monroviacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-montclair-ca": {
    data: montclaircaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-montebello-ca": {
    data: montebellocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-monterey-park-ca": {
    data: montereyparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-montrose-ca": {
    data: montrosecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-newhall-ca": {
    data: newhallcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-mt-baldy-ca": {
    data: mtbaldycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-mount-wilson-ca": {
    data: mountwilsoncaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-moorpark-ca": {
    data: moorparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-newbury-park-ca": {
    data: newburyparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-newport-beach-ca": {
    data: newportbeachcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-north-hills-ca": {
    data: northhillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-northridge-ca": {
    data: northridgecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-north-hollywood-ca": {
    data: northhollywoodcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-oak-park-ca": {
    data: oakparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-norwalk-ca": {
    data: norwalkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-oak-view-ca": {
    data: oakviewcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-ontario-ca": {
    data: ontariocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-ojai-ca": {
    data: ojaicaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-orange-ca": {
    data: orangecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-oxnard-ca": {
    data: oxnardcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-pacific-palisades-ca": {
    data: pacificpalisadescaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-palmdale-ca": {
    data: palmdalecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-pacoima-ca": {
    data: pacoimacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-panorama-city-ca": {
    data: panoramacitycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-palos-verdes-peninsula-ca": {
    data: palosverdespeninsulacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-paramount-ca": {
    data: paramountcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-pasadena-ca": {
    data: pasadenacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-pearblossom-ca": {
    data: pearblossomcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-pico-rivera-ca": {
    data: picoriveracaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-phelan-ca": {
    data: phelancaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-pine-mountain-club-ca": {
    data: pinemountainclubcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-piru-ca": {
    data: pirucaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-pinon-hills-ca": {
    data: pinonhillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-placentia-ca": {
    data: placentiacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-playa-del-rey-ca": {
    data: playadelreycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-playa-vista-ca": {
    data: playavistacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-porter-ranch-ca": {
    data: porterranchcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-pomona-ca": {
    data: pomonacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-port-hueneme-cbc-base-ca": {
    data: porthuenemecbcbasecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-port-hueneme-ca": {
    data: porthuenemecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-rancho-cucamonga-ca": {
    data: ranchocucamongacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-rancho-palos-verdes-ca": {
    data: ranchopalosverdescaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-redondo-beach-ca": {
    data: redondobeachcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-rosamond-ca": {
    data: rosamondcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-rosemead-ca": {
    data: rosemeadcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-reseda-ca": {
    data: resedacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-san-dimas-ca": {
    data: sandimascaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-rowland-heights-ca": {
    data: rowlandheightscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-san-fernando-ca": {
    data: sanfernandocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-san-gabriel-ca": {
    data: sangabrielcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-san-marino-ca": {
    data: sanmarinocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-san-pedro-ca": {
    data: sanpedrocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-santa-ana-ca": {
    data: santaanacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-santa-monica-ca": {
    data: santamonicacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-santa-barbara-ca": {
    data: santabarbaracaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-santa-clarita-ca": {
    data: santaclaritacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-santa-paula-ca": {
    data: santapaulacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-santa-fe-springs-ca": {
    data: santafespringscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-sierra-madre-ca": {
    data: sierramadrecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-sherman-oaks-ca": {
    data: shermanoakscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-seal-beach-ca": {
    data: sealbeachcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-simi-valley-ca": {
    data: simivalleycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-somis-ca": {
    data: somiscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-signal-hill-ca": {
    data: signalhillcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-south-el-monte-ca": {
    data: southelmontecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-south-gate-ca": {
    data: southgatecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-south-pasadena-ca": {
    data: southpasadenacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-stanton-ca": {
    data: stantoncaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-stevenson-ranch-ca": {
    data: stevensonranchcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-studio-city-ca": {
    data: studiocitycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-summerland-ca": {
    data: summerlandcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-sunset-beach-ca": {
    data: sunsetbeachcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-sunland-ca": {
    data: sunlandcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-sun-valley-ca": {
    data: sunvalleycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-surfside-ca": {
    data: surfsidecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-sylmar-ca": {
    data: sylmarcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-tehachapi-ca": {
    data: tehachapicaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-tarzana-ca": {
    data: tarzanacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-temple-city-ca": {
    data: templecitycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-thousand-oaks-ca": {
    data: thousandoakscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-torrance-ca": {
    data: torrancecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-toluca-lake-ca": {
    data: tolucalakecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-topanga-ca": {
    data: topangacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-tustin-ca": {
    data: tustincaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-tujunga-ca": {
    data: tujungacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-universal-city-ca": {
    data: universalcitycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-valencia-ca": {
    data: valenciacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-upland-ca": {
    data: uplandcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-valley-village-ca": {
    data: valleyvillagecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-valyermo-ca": {
    data: valyermocaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-van-nuys-ca": {
    data: vannuyscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-verdugo-city-ca": {
    data: verdugocitycaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-ventura-ca": {
    data: venturacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-venice-ca": {
    data: venicecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-west-covina-ca": {
    data: westcovinacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-west-hollywood-ca": {
    data: westhollywoodcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-walnut-ca": {
    data: walnutcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-westminster-ca": {
    data: westminstercaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-whittier-ca": {
    data: whittiercaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-west-hills-ca": {
    data: westhillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-westlake-village-ca": {
    data: westlakevillagecaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-villa-park-ca": {
    data: villaparkcaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-wilmington-ca": {
    data: wilmingtoncaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-woodland-hills-ca": {
    data: woodlandhillscaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-winnetka-ca": {
    data: winnetkacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-yorba-linda-ca": {
    data: yorbalindacaDynamicData,
    type: "city",
  },
  "home-improvement-services-in-wrightwood-ca": {
    data: wrightwoodcaDynamicData,
    type: "city",
  },
};

// Replace placeholders in text with location name
const replacePlaceholders = (text: string, locationName: string): string => {
  return text.replace(/\{locationName\}/g, locationName);
};

// Recursively replace placeholders in objects
const replaceObjectPlaceholders = (obj: any, locationName: string): any => {
  if (typeof obj === "string") {
    return replacePlaceholders(obj, locationName);
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => replaceObjectPlaceholders(item, locationName));
  }

  if (typeof obj === "object" && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = replaceObjectPlaceholders(value, locationName);
    }
    return result;
  }

  return obj;
};

// Generate URL for location
const generateLocationUrl = (slug: string): string => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://affordablehomeservices.com";
  return `${baseUrl}/locations/${slug}`;
};

// Automatically determine location type from data structure
const determineLocationType = (data: SubDomainData): LocationType => {
  return data.type || "city";
};

// Convert nearby locations to related locations format
const processRelatedLocations = (
  locationData: SubDomainData,
): { name: string; slug: string }[] => {
  // For cities, use nearbyCities
  if (locationData.nearbyCities && locationData.nearbyCities.length > 0) {
    return locationData.nearbyCities.map((city) => ({
      name: city.name,
      slug: city.slug,
    }));
  }

  // For states, use cities
  if (locationData.cities && locationData.cities.length > 0) {
    return locationData.cities.map((city) => ({
      name: city.name,
      slug: city.slug,
    }));
  }

  // Fallback: return empty array
  return [];
};

// =============================================================================
// MAIN DATA FUNCTIONS
// =============================================================================

// Get location data with all static content merged
export const getLocationData = async (
  slug: string,
): Promise<LocationData | null> => {
  const registryItem = LOCATIONS_REGISTRY[slug];
  if (!registryItem) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[getLocationData] No data found for: ${slug}`);
    }
    return null;
  }

  const rawData = registryItem.data;
  const locationType = registryItem.type || determineLocationType(rawData);

  try {
    // Validate required fields
    if (!rawData.name || !rawData.slug) {
      console.error(`[getLocationData] Missing required fields for ${slug}:`, {
        hasName: !!rawData.name,
        hasSlug: !!rawData.slug,
      });
      return null;
    }

    // Create processed location data with static content merged
    const locationData: LocationData = {
      ...rawData,
      type: locationType,

      // Add population from static config if not present
      population: LOCATION_STATIC_CONFIG.defaultPopulation,

      // Add processed static content
      hero: {
        ...rawData.hero,
        badgeIcon: LOCATION_STATIC_CONFIG.heroStatic.badgeIcon,
        trustIndicators: LOCATION_STATIC_CONFIG.heroStatic.trustIndicators,
      },

      // Add static UI, services, etc. with placeholder replacement
      ui: replaceObjectPlaceholders(LOCATION_STATIC_CONFIG.ui, rawData.name),
      services: replaceObjectPlaceholders(
        LOCATION_STATIC_CONFIG.services,
        rawData.name,
      ),
      whyChooseUs: replaceObjectPlaceholders(
        LOCATION_STATIC_CONFIG.whyChooseUs,
        rawData.name,
      ),
      process: replaceObjectPlaceholders(
        LOCATION_STATIC_CONFIG.process,
        rawData.name,
      ),
      contact: LOCATION_STATIC_CONFIG.contact,
      trustPlatforms: LOCATION_STATIC_CONFIG.trustPlatforms,
      stats: LOCATION_STATIC_CONFIG.statsTemplates[locationType].stats,
      trustIndicators: LOCATION_STATIC_CONFIG.trustIndicators,

      // Process related locations
      relatedLocations: processRelatedLocations(rawData),

      // Update SEO URLs with canonical URLs
      seo: {
        ...rawData.seo,
        canonicalUrl: rawData.seo.canonicalUrl || generateLocationUrl(slug),
        robots: rawData.seo.robots || "index, follow",
        openGraph: {
          ...rawData.seo.openGraph,
          url: rawData.seo.openGraph.url || generateLocationUrl(slug),
          type: rawData.seo.openGraph.type || "website",
        },
      },
    };

    return locationData;
  } catch (error) {
    console.error(
      `[getLocationData] Error processing data for ${slug}:`,
      error,
    );
    console.error("Raw data structure:", JSON.stringify(rawData, null, 2));
    return null;
  }
};

// Synchronous version for build time
export const getLocationDataSync = (slug: string): LocationData | null => {
  const registryItem = LOCATIONS_REGISTRY[slug];
  if (!registryItem) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[getLocationDataSync] No data found for: ${slug}`);
    }
    return null;
  }

  const rawData = registryItem.data;
  const locationType = registryItem.type || determineLocationType(rawData);

  try {
    // Validate required fields
    if (!rawData.name || !rawData.slug) {
      console.error(
        `[getLocationDataSync] Missing required fields for ${slug}:`,
        {
          hasName: !!rawData.name,
          hasSlug: !!rawData.slug,
        },
      );
      return null;
    }

    const locationData: LocationData = {
      ...rawData,
      type: locationType,

      // Add population from static config if not present
      population: LOCATION_STATIC_CONFIG.defaultPopulation,

      hero: {
        ...rawData.hero,
        badgeIcon: LOCATION_STATIC_CONFIG.heroStatic.badgeIcon,
        trustIndicators: LOCATION_STATIC_CONFIG.heroStatic.trustIndicators,
      },

      ui: replaceObjectPlaceholders(LOCATION_STATIC_CONFIG.ui, rawData.name),
      services: replaceObjectPlaceholders(
        LOCATION_STATIC_CONFIG.services,
        rawData.name,
      ),
      whyChooseUs: replaceObjectPlaceholders(
        LOCATION_STATIC_CONFIG.whyChooseUs,
        rawData.name,
      ),
      process: replaceObjectPlaceholders(
        LOCATION_STATIC_CONFIG.process,
        rawData.name,
      ),
      contact: LOCATION_STATIC_CONFIG.contact,
      trustPlatforms: LOCATION_STATIC_CONFIG.trustPlatforms,
      stats: LOCATION_STATIC_CONFIG.statsTemplates[locationType].stats,
      trustIndicators: LOCATION_STATIC_CONFIG.trustIndicators,

      relatedLocations: processRelatedLocations(rawData),

      seo: {
        ...rawData.seo,
        canonicalUrl: rawData.seo.canonicalUrl || generateLocationUrl(slug),
        robots: rawData.seo.robots || "index, follow",
        openGraph: {
          ...rawData.seo.openGraph,
          url: rawData.seo.openGraph.url || generateLocationUrl(slug),
          type: rawData.seo.openGraph.type || "website",
        },
      },
    };

    return locationData;
  } catch (error) {
    console.error(
      `[getLocationDataSync] Error processing data for ${slug}:`,
      error,
    );
    return null;
  }
};

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

// Check if a slug is valid
export const isValidLocationSlug = async (slug: string): Promise<boolean> => {
  return LOCATIONS_REGISTRY[slug] !== undefined;
};

// Synchronous version
export const isValidLocationSlugSync = (slug: string): boolean => {
  return LOCATIONS_REGISTRY[slug] !== undefined;
};

// Get location type
export const getLocationType = async (
  slug: string,
): Promise<LocationType | null> => {
  const registryItem = LOCATIONS_REGISTRY[slug];
  return registryItem ? registryItem.type : null;
};

// =============================================================================
// DATA RETRIEVAL FUNCTIONS
// =============================================================================

// Get all available slugs
export const getAllLocationSlugs = async (): Promise<string[]> => {
  return Object.keys(LOCATIONS_REGISTRY);
};

// Synchronous version for build time
export const getAllLocationSlugsSync = (): string[] => {
  return Object.keys(LOCATIONS_REGISTRY);
};

// Get all state slugs
export const getAllStateSlugs = async (): Promise<string[]> => {
  return Object.keys(LOCATIONS_REGISTRY).filter(
    (slug) => LOCATIONS_REGISTRY[slug].type === "state",
  );
};

// Get all city slugs
export const getAllCitySlugs = async (): Promise<string[]> => {
  return Object.keys(LOCATIONS_REGISTRY).filter(
    (slug) => LOCATIONS_REGISTRY[slug].type === "city",
  );
};

// Get raw data without processing (for debugging)
export const getRawLocationData = async (
  slug: string,
): Promise<SubDomainData | null> => {
  const registryItem = LOCATIONS_REGISTRY[slug];
  return registryItem ? registryItem.data : null;
};

// =============================================================================
// SEARCH FUNCTIONS
// =============================================================================

// Search locations by name, state, or county
export const searchLocations = async (
  query: string,
): Promise<LocationData[]> => {
  const lowercaseQuery = query.toLowerCase();
  const matchingSlugs = Object.keys(LOCATIONS_REGISTRY).filter((slug) => {
    const location = LOCATIONS_REGISTRY[slug].data;
    return (
      location.name.toLowerCase().includes(lowercaseQuery) ||
      location.slug.toLowerCase().includes(lowercaseQuery) ||
      (location.state &&
        location.state.toLowerCase().includes(lowercaseQuery)) ||
      (location.county &&
        location.county.toLowerCase().includes(lowercaseQuery))
    );
  });

  const locations = await Promise.all(
    matchingSlugs.map((slug) => getLocationData(slug)),
  );

  return locations.filter(
    (location): location is LocationData => location !== null,
  );
};

// =============================================================================
// RELATED LOCATIONS FUNCTIONS
// =============================================================================

// Get related locations
export const getRelatedLocations = async (
  slug: string,
): Promise<LocationData[]> => {
  const location = await getLocationData(slug);
  if (!location || !location.relatedLocations) return [];

  const relatedSlugs = location.relatedLocations.map((loc) => loc.slug);

  const relatedLocations = await Promise.all(
    relatedSlugs.map((relatedSlug) => getLocationData(relatedSlug)),
  );

  return relatedLocations.filter(
    (location): location is LocationData => location !== null,
  );
};

// Get locations by state
export const getLocationsByState = async (
  stateSlug: string,
): Promise<LocationData[]> => {
  const matchingSlugs = Object.keys(LOCATIONS_REGISTRY).filter((slug) => {
    const location = LOCATIONS_REGISTRY[slug].data;
    return (
      location.stateSlug === stateSlug &&
      LOCATIONS_REGISTRY[slug].type === "city"
    );
  });

  const locations = await Promise.all(
    matchingSlugs.map((slug) => getLocationData(slug)),
  );

  return locations.filter(
    (location): location is LocationData => location !== null,
  );
};

// Get cities in a specific state (returns slugs only)
export const getCitiesInState = async (
  stateSlug: string,
): Promise<string[]> => {
  return Object.keys(LOCATIONS_REGISTRY).filter((slug) => {
    const location = LOCATIONS_REGISTRY[slug].data;
    return (
      location.stateSlug === stateSlug &&
      LOCATIONS_REGISTRY[slug].type === "city"
    );
  });
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

// Find location by exact name match
export const findLocationByName = async (
  name: string,
): Promise<LocationData | null> => {
  const normalizedName = name.toLowerCase().trim();
  const matchingSlug = Object.keys(LOCATIONS_REGISTRY).find((slug) => {
    const location = LOCATIONS_REGISTRY[slug].data;
    return location.name.toLowerCase() === normalizedName;
  });

  if (matchingSlug) {
    return await getLocationData(matchingSlug);
  }

  return null;
};

// Get random locations (for suggestions, recommendations, etc.)
export const getRandomLocations = async (
  count: number = 6,
): Promise<LocationData[]> => {
  const allSlugs = Object.keys(LOCATIONS_REGISTRY);
  const shuffled = allSlugs.sort(() => 0.5 - Math.random());
  const selectedSlugs = shuffled.slice(0, count);

  const locations = await Promise.all(
    selectedSlugs.map((slug) => getLocationData(slug)),
  );

  return locations.filter(
    (location): location is LocationData => location !== null,
  );
};

// =============================================================================
// SITEMAP GENERATION
// =============================================================================

// Generate sitemap data for all locations
export const generateSitemapData = async (): Promise<SitemapEntry[]> => {
  const slugs = await getAllLocationSlugs();
  return slugs.map((slug) => ({
    slug,
    url: generateLocationUrl(slug),
    type: LOCATIONS_REGISTRY[slug].type,
    name: LOCATIONS_REGISTRY[slug].data.name,
    lastModified: new Date().toISOString(),
  }));
};

// =============================================================================
// STATISTICS & DEBUG FUNCTIONS
// =============================================================================

// Get location statistics
export const getLocationStatistics = async () => {
  const allSlugs = Object.keys(LOCATIONS_REGISTRY);

  const stateCount = allSlugs.filter(
    (slug) => LOCATIONS_REGISTRY[slug].type === "state",
  ).length;
  const cityCount = allSlugs.filter(
    (slug) => LOCATIONS_REGISTRY[slug].type === "city",
  ).length;

  const statesRepresented = new Set(
    allSlugs
      .filter((slug) => LOCATIONS_REGISTRY[slug].type === "city")
      .map((slug) => LOCATIONS_REGISTRY[slug].data.state)
      .filter(Boolean),
  );

  return {
    totalLocations: allSlugs.length,
    totalStates: stateCount,
    totalCities: cityCount,
    statesRepresented: statesRepresented.size,
    largestCity: allSlugs.reduce((largest, slug) => {
      if (!largest) return slug;
      return slug;
    }, ""),
    smallestCity: allSlugs.reduce((smallest, slug) => {
      if (!smallest) return slug;
      return slug;
    }, ""),
  };
};

// Get debug info for development
export const getDebugInfo = async (): Promise<DebugInfo> => {
  const allSlugs = Object.keys(LOCATIONS_REGISTRY);
  const stateSlugs = allSlugs.filter(
    (slug) => LOCATIONS_REGISTRY[slug].type === "state",
  );
  const citySlugs = allSlugs.filter(
    (slug) => LOCATIONS_REGISTRY[slug].type === "city",
  );

  return {
    totalLocations: allSlugs.length,
    totalStates: stateSlugs.length,
    totalCities: citySlugs.length,
    locations: allSlugs.map((slug) => ({
      slug,
      name: LOCATIONS_REGISTRY[slug].data.name,
      type: LOCATIONS_REGISTRY[slug].type,
      url: generateLocationUrl(slug),
    })),
  };
};

// =============================================================================
// RUNTIME REGISTRY MANAGEMENT (for dynamic additions)
// =============================================================================

// Add location data at runtime
export const addLocationData = (
  slug: string,
  data: SubDomainData,
  type?: LocationType,
) => {
  const locationType = type || determineLocationType(data);
  LOCATIONS_REGISTRY[slug] = { data, type: locationType };
};

// Remove location data at runtime
export const removeLocationData = (slug: string) => {
  if (LOCATIONS_REGISTRY[slug]) {
    delete LOCATIONS_REGISTRY[slug];
  }
};

// Get the entire registry
export const getLocationRegistry = async () => {
  return LOCATIONS_REGISTRY;
};

// Validate data integrity
export const validateDataIntegrity = async () => {
  const issues: string[] = [];

  Object.keys(LOCATIONS_REGISTRY).forEach((slug) => {
    const registryItem = LOCATIONS_REGISTRY[slug];
    const data = registryItem.data;

    // Check required fields
    if (!data.name) issues.push(`${slug}: Missing name`);
    if (!data.slug) issues.push(`${slug}: Missing slug`);
    if (!data.hero) issues.push(`${slug}: Missing hero data`);
    if (!data.seo) issues.push(`${slug}: Missing SEO data`);

    // Check type-specific fields
    if (registryItem.type === "city") {
      if (!data.state) issues.push(`${slug}: City missing state`);
      if (!data.stateSlug) issues.push(`${slug}: City missing stateSlug`);
      if (!data.county) issues.push(`${slug}: City missing county`);
    }
  });

  return {
    isValid: issues.length === 0,
    issues,
  };
};

// =============================================================================
// EXPORTS
// =============================================================================

export type {
  LocationData,
  SubDomainData,
  LocationType,
  SitemapEntry,
  LocationRegistryItem,
  DebugInfo,
} from "./types";
