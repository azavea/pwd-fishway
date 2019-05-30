import alewifeIllustration from '../media/meetthefish/alewife_large.png';
import americanEelIllustration from '../media/meetthefish/american_eel_large.png';
import americanShadClip from '../media/quiz/american_shad_clip.mp4';
import americanShadIllustration from '../media/meetthefish/american_shad_large.png';
import americanShadPhoto from '../media/seethefishway/american_shad.jpg';
import americanShadVideo from '../media/seethefishway/american_shad.mp4';
import bluebackHerringIllustration from '../media/meetthefish/blueback_herring_large.png';
import bluegillClip from '../media/quiz/bluegill_clip.mp4';
import bluegillIllustration from '../media/meetthefish/bluegill_large.png';
import brownTroutIllustration from '../media/meetthefish/brown_trout_large.png';
import carpPhoto from '../media/seethefishway/carp.jpg';
import carpVideo from '../media/seethefishway/carp.mp4';
import channelCatfishClip from '../media/quiz/channel_catfish_clip.mp4';
import channelCatfishIllustration from '../media/meetthefish/channel_catfish_large.png';
import channelCatfishPhoto from '../media/seethefishway/channel_catfish.jpg';
import channelCatfishVideo from '../media/seethefishway/channel_catfish.mp4';
import commonCarpClip from '../media/quiz/common_carp_clip.mp4';
import commonCarpIllustration from '../media/meetthefish/common_carp_large.png';
import commonCarpPhoto from '../media/seethefishway/common_carp.jpg';
import commonCarpVideo from '../media/seethefishway/common_carp.mp4';
import flatheadCatfishIllustration from '../media/meetthefish/flathead_catfish_large.png';
import gizzardShadIllustration from '../media/meetthefish/gizzard_shad_large.png';
import greenSunfishIllustration from '../media/meetthefish/green_sunfish_large.png';
import hickoryShadIllustration from '../media/meetthefish/hickory_shad_large.png';
import hybridStripedBassPhoto from '../media/seethefishway/hybrid_striped_bass.jpg';
import hybridStripedBassVideo from '../media/seethefishway/hybrid_striped_bass.mp4';
import largemouthBassIllustration from '../media/meetthefish/largemouth_bass_large.png';
import muskellungeIllustration from '../media/meetthefish/muskellunge_large.png';
import pumpkinseedIllustration from '../media/meetthefish/pumpkinseed_large.png';
import pumpkinseedPhoto from '../media/seethefishway/pumpkinseed.jpg';
import pumpkinseedVideo from '../media/seethefishway/pumpkinseed.mp4';
import quillbackCarpPhoto from '../media/seethefishway/quillback_carp.jpg';
import quillbackCarpVideo from '../media/seethefishway/quillback_carp.mp4';
import quillbackCatfishPhoto from '../media/seethefishway/quillback_catfish.jpg';
import quillbackCatfishVideo from '../media/seethefishway/quillback_catfish.mp4';
import quillbackClip from '../media/quiz/quillback_clip.mp4';
import quillbackIllustration from '../media/meetthefish/quillback_large.png';
import quillbackPhoto from '../media/seethefishway/quillback.jpg';
import quillbackVideo from '../media/seethefishway/quillback.mp4';
import quillbacksPhoto from '../media/seethefishway/quillbacks.jpg';
import quillbacksVideo from '../media/seethefishway/quillbacks.mp4';
import rainbowTroutIllustration from '../media/meetthefish/rainbow_trout_large.png';
import rainbowTroutPhoto from '../media/seethefishway/rainbow_trout.jpg';
import rainbowTroutVideo from '../media/seethefishway/rainbow_trout.mp4';
import redbreastSunfishIllustration from '../media/meetthefish/redbreast_sunfish_large.png';
import riverOtterPhoto from '../media/seethefishway/river_otter.jpg';
import riverOtterVideo from '../media/seethefishway/river_otter.mp4';
import shadPhoto from '../media/seethefishway/shad.jpg';
import shadVideo from '../media/seethefishway/shad.mp4';
import smallmouthBassIllustration from '../media/meetthefish/smallmouth_bass_large.png';
import snakePhoto from '../media/seethefishway/snake.jpg';
import snakeVideo from '../media/seethefishway/snake.mp4';
import stripedBassClip from '../media/quiz/striped_bass_clip.mp4';
import stripedBassHybridClip from '../media/quiz/striped_bass_hybrid_clip.mp4';
import stripedBassHybridIllustration from '../media/meetthefish/striped_bass_hybrid_large.png';
import stripedBassHybridPhoto from '../media/seethefishway/striped_bass_hybrid.jpg';
import stripedBassHybridVideo from '../media/seethefishway/striped_bass_hybrid.mp4';
import stripedBassIllustration from '../media/meetthefish/striped_bass_large.png';
import turtlePhoto from '../media/seethefishway/turtle.jpg';
import turtleVideo from '../media/seethefishway/turtle.mp4';
import walleyeIllustration from '../media/meetthefish/walleye_large.png';
import whitePerchClip from '../media/quiz/white_perch_clip.mp4';
import whitePerchIllustration from '../media/meetthefish/white_perch_large.png';
import whitePerchPhoto from '../media/seethefishway/white_perch.jpg';
import whitePerchVideo from '../media/seethefishway/white_perch.mp4';
import whiteSuckerClip from '../media/quiz/white_sucker_clip.mp4';
import whiteSuckerIllustration from '../media/meetthefish/white_sucker_large.png';

import overviewVideo from '../media/about/overview.mp4';
import biologistVideo from '../media/about/biologist.mp4';
import engineerVideo from '../media/about/engineer.mp4';
import schuylkillVideo from '../media/about/schuylkill.mp4';

export const PAUSE = 'PAUSE';
export const RESET = 'RESET';
export const MAX_IDLE_TIME = 180000; //in ms, should be 180000 (3 minutes)
export const GUESS_MESSAGE_TIME = 2500; //in ms, should be 2500
export const FISH_MODAL_OPEN_DELAY = 1000; //in ms, should be 1000

export const ABOUT_PROFILES = [
    {
        title: 'History of the fishway',
        name: '',
        job: '',
        descriptionIntro:
            'When the Fairmount Dam was installed, it helped bring water to people, but was detrimental to fish who couldn’t cross to the other side.',
        description:
            'To counteract the negative environmental effects, the fishway at the Fairmount Dam was constructed in 1979. This animated 3-D video explains how the Fish Ladder works, and how it helps fish to migrate, and survive.',
        videoPath: overviewVideo,
    },
    {
        title: 'How do biologists use the fishway?',
        name: 'Joe Perillo',
        job: 'Aquatic Biologist, PWD',
        description:
            'Studies fish and the ecology of local streams. Records data about fish populations, tracks migration of species, and reports on the general health of local watersheds.',
        videoPath: biologistVideo,
    },
    {
        title: 'How do engineers use the fishway?',
        name: 'Chad Pindar',
        job: 'Water Resources Engineer, PWD',
        description:
            'Prepares computer models of rivers and streams, works on watershed restoration projects, and develops watershed management plans.',
        videoPath: engineerVideo,
    },
    {
        title: 'What about other dams along the Schuylkill River?',
        name: 'Glenn McKenzie',
        job: 'Engineer, Army Corps of Engineers',
        description:
            'Works to construct and maintain fish ladders and other environmental projects for area waterways and rivers.',
        videoPath: schuylkillVideo,
    },
];

const AMERICAN_SHAD_COMMON_NAME = 'American Shad';
const AMERICAN_SHAD_SCIENTIFIC_NAME = 'Alosa sapidissima';
const AMERICAN_SHAD = {
    commonName: AMERICAN_SHAD_COMMON_NAME,
    scientificName: AMERICAN_SHAD_SCIENTIFIC_NAME,
    picturePath: americanShadIllustration,
};

const QUILLBACK_COMMON_NAME = 'Quillback';
const QUILLBACK_SCIENTIFIC_NAME = 'Carpiodes cyprinus';
const QUILLBACK = {
    commonName: QUILLBACK_COMMON_NAME,
    scientificName: QUILLBACK_SCIENTIFIC_NAME,
    picturePath: quillbackIllustration,
};

const STRIPED_BASS_COMMON_NAME = 'Striped Bass';
const STRIPED_BASS_SCIENTIFIC_NAME = 'Morone saxatilis';
const STRIPED_BASS = {
    commonName: STRIPED_BASS_COMMON_NAME,
    scientificName: STRIPED_BASS_SCIENTIFIC_NAME,
    picturePath: stripedBassIllustration,
};

const HYBRID_STRIPED_BASS_COMMON_NAME = `Hybrid ${STRIPED_BASS_COMMON_NAME}`;
const HYBRID_STRIPED_BASS_SCIENTIFIC_NAME = `${STRIPED_BASS_SCIENTIFIC_NAME} x Morone chrysops`;
const HYBRID_STRIPED_BASS = {
    commonName: HYBRID_STRIPED_BASS_COMMON_NAME,
    scientificName: HYBRID_STRIPED_BASS_SCIENTIFIC_NAME,
    picturePath: stripedBassHybridIllustration,
};

const COMMON_CARP_COMMON_NAME = 'Common Carp';
const COMMON_CARP_SCIENTIFIC_NAME = 'Cyprinus carpio';
const COMMON_CARP = {
    commonName: COMMON_CARP_COMMON_NAME,
    scientificName: COMMON_CARP_SCIENTIFIC_NAME,
    picturePath: commonCarpIllustration,
};
const CHANNEL_CATFISH_COMMON_NAME = 'Channel Catfish';
const CHANNEL_CATFISH_SCIENTIFIC_NAME = 'Ictalurus punctatus';
const CHANNEL_CATFISH = {
    commonName: CHANNEL_CATFISH_COMMON_NAME,
    scientificName: CHANNEL_CATFISH_SCIENTIFIC_NAME,
    picturePath: channelCatfishIllustration,
};

const PUMPKINSEED_COMMON_NAME = 'Pumpkinseed';
const PUMPKINSEED_SCIENTIFIC_NAME = 'Lepomis gibbosus';
const PUMPKINSEED = {
    commonName: PUMPKINSEED_COMMON_NAME,
    scientificName: PUMPKINSEED_SCIENTIFIC_NAME,
    picturePath: pumpkinseedIllustration,
};

const WHITE_PERCH_COMMON_NAME = 'White Perch';
const WHITE_PERCH_SCIENTIFIC_NAME = 'Morone americana';
const WHITE_PERCH = {
    commonName: WHITE_PERCH_COMMON_NAME,
    scientificName: WHITE_PERCH_SCIENTIFIC_NAME,
    picturePath: whitePerchIllustration,
};

const WHITE_SUCKER_COMMON_NAME = 'White Sucker';
const WHITE_SUCKER_SCIENTIFIC_NAME = 'Catostomus commersoni';
const WHITE_SUCKER = {
    commonName: WHITE_SUCKER_COMMON_NAME,
    scientificName: WHITE_SUCKER_SCIENTIFIC_NAME,
    picturePath: whiteSuckerIllustration,
};

const BLUEGILL_COMMON_NAME = 'Bluegill';
const BLUEGILL_SCIENTIFIC_NAME = 'Lepomis macrochirus';
const BLUEGILL = {
    commonName: BLUEGILL_COMMON_NAME,
    scientificName: BLUEGILL_SCIENTIFIC_NAME,
    picturePath: bluegillIllustration,
};

export const FISH_HIGHLIGHTS = [
    {
        ...AMERICAN_SHAD,
        video: shadVideo,
        photo: shadPhoto,
        timestamp: 1118762520000,
        notes:
            'Three American shad dart through the ladder during their annual spawning migration',
    },
    {
        ...AMERICAN_SHAD,
        video: americanShadVideo,
        photo: americanShadPhoto,
        timestamp: 1085515200000,
        notes:
            'An American shad swims upstream during the annual spawning migration.',
    },
    {
        ...QUILLBACK,
        video: quillbackVideo,
        photo: quillbackPhoto,
        timestamp: 1115046300000,
        notes:
            "This fish is named for its pointed dorsal fin — thought to be in the shape of a 'quill.'",
    },
    {
        ...QUILLBACK,
        video: quillbacksVideo,
        photo: quillbacksPhoto,
        timestamp: 1084454640000,
        notes: 'Three quillbacks swim by the viewing window.',
    },
    {
        ...PUMPKINSEED,
        video: pumpkinseedVideo,
        photo: pumpkinseedPhoto,
        timestamp: 1116184920000,
        notes:
            'This fish is a type of sunfish common to PA waters. Can you guess where its name comes from?',
    },
    {
        ...HYBRID_STRIPED_BASS,
        video: hybridStripedBassVideo,
        photo: hybridStripedBassPhoto,
        timestamp: 1114074720000,
        notes:
            'Striped bass migrate upriver each year to spawn, much like the American shad.',
    },
    {
        ...HYBRID_STRIPED_BASS,
        video: stripedBassHybridVideo,
        photo: stripedBassHybridPhoto,
        timestamp: 1084279080000,
        notes: 'A very large, hybrid striped bass — an excellent specimen.',
    },
    {
        commonName: 'Turtle',
        scientificName: '—',
        video: turtleVideo,
        photo: turtlePhoto,
        timestamp: 1114119720000,
        notes:
            'A turtle moves downstream through the ladder, carried along by the current.',
    },
    {
        commonName: 'Snake',
        scientificName: '—',
        video: snakeVideo,
        photo: snakePhoto,
        timestamp: 1115907780000,
        notes:
            'A 3-foot long river snake swims downstream. Some snakes can swim almost as well as fish!',
    },
    {
        commonName: 'Rainbow Trout',
        scientificName: 'Oncorhynchus mykiss',
        video: rainbowTroutVideo,
        photo: rainbowTroutPhoto,
        timestamp: 1115870340000,
        notes:
            'A rainbow trout is shown just before midnight – captured in the act of feeding.',
    },
    {
        ...COMMON_CARP,
        video: carpVideo,
        photo: carpPhoto,
        timestamp: 1115826720000,
        notes:
            'Two enormous carp move through the ladder at night. The first carp is over three feet long!',
    },
    {
        ...COMMON_CARP,
        video: commonCarpVideo,
        photo: commonCarpPhoto,
        timestamp: 1084512000000,
        notes: 'A very large female carp, pregnant with eggs.',
    },
    {
        commonName: `${QUILLBACK_COMMON_NAME} and ${COMMON_CARP_COMMON_NAME}`,
        scientificName: `${QUILLBACK_SCIENTIFIC_NAME} and ${COMMON_CARP_SCIENTIFIC_NAME}`,
        video: quillbackCarpVideo,
        photo: quillbackCarpPhoto,
        timestamp: 1084417860000,
        notes: 'A quillback and a carp try to swim together upriver.',
    },
    {
        commonName: 'River Otter',
        scientificName: 'Lutra canadensis',
        video: riverOtterVideo,
        photo: riverOtterPhoto,
        timestamp: 1111371600000,
        notes: 'River Otter swims through the fish ladder to star in a video.',
    },
    {
        ...CHANNEL_CATFISH,
        video: channelCatfishVideo,
        photo: channelCatfishPhoto,
        timestamp: 1084417680000,
        notes: 'Catfish group, traveling at night.',
    },
    {
        commonName: `${QUILLBACK_COMMON_NAME}s and ${CHANNEL_CATFISH_COMMON_NAME}`,
        scientificName: `${QUILLBACK_SCIENTIFIC_NAME} and ${CHANNEL_CATFISH_SCIENTIFIC_NAME}`,
        video: quillbackCatfishVideo,
        photo: quillbackCatfishPhoto,
        timestamp: 1084461660000,
        notes:
            'A group of quillbacks swim through the fish ladder, followed by two catfish.',
    },
    {
        ...WHITE_PERCH,
        video: whitePerchVideo,
        photo: whitePerchPhoto,
        timestamp: 1084379160000,
        notes: 'A white perch darts through the water.',
    },
];

export const FISH = [
    {
        commonName: 'Alewife',
        scientificName: 'Alosa pseudoharengus',
        picturePath: alewifeIllustration,
        overview:
            'The alewife is an anadromous herring in its natural range, living its adult life in salt water and swimming into freshwater tributaries to spawn. Its original distribution was along the Atlantic Coast, from South Carolina northward into Canada. Alewives enter Pennsylvania’s Delaware River on spawning migrations. The alewife can also live entirely in fresh water. It has become established in all the Great Lakes, including the Pennsylvania portion of Lake Erie. It was first reported in Lake Ontario in the 1870s, there either by accidental introduction or by making its way through water routes from New York’s Finger Lakes, the St. Lawrence River or the Erie Canal. By 1931, the alewife was reported in Lake Erie, having bypassed Niagara Falls via the Welland Canal. As a food fish for larger game fish, alewives have also been stocked in impoundments across the state. They have also been accidentally spread as escapees from fishermen’s bait buckets. Its small size, large schools and availability to openwater game fish have made the alewife suited for stocking in some inland reservoirs as a forage fish. It has been introduced in Pennsylvania for that purpose in some of our larger impoundments. The species name “pseudoharengus” means “false herring.”',
        characteristics:
            'On the exterior, the alewife is nearly identical to the closely related blueback herring. The surest difference is inside the fish. The alewife has a silver-gray lining (peritoneum) to its body cavity. The blueback’s peritoneum is black. Alewives are bluish green or bluish gray on the back, silvery on the sides, with faint, dark stripes. They have a large eye that is wider than the distance between the front of the snout to the front of the eye. Like the blueback herring, alewives have a single dark spot behind the upper gill cover, and the rear edge of the upper jaw extends to the middle of the eye. The alewife’s lower jaw does not project noticeably beyond the upper jaw. Like the American shad, the alewife has a deep notch in its upper jaw. Saltwater alewives seldom weigh over one pound. Their maximum length is 12 to 15 inches. Landlocked freshwater alewives rarely go more than nine inches. The usual size is three to six inches.',
        habitat:
            'Alewives can live in both fresh and salt water. Coastal marine fish, they enter freshwater tributary rivers seasonally to spawn, negotiating rapids and fishways to gain access upstream on their migration. Alewives can also spend their lives entirely in cool, freshwater lakes, reproducing successfully and becoming extremely abundant. Alewives are pelagic, schooling and feeding in midwater or at the surface, over any bottom type.',
        lifespan:
            'Alewives spawn about two or three weeks earlier in the spring than the American shad. They migrate upstream in April and May from the mouths of rivers and creeks that open to the ocean into the freshwater flows. They spawn in quiet areas with slow current or in still pools, randomly releasing their minute, sticky eggs over the rocks, pebbles or other bottom material. After spawning, the adults return to the stream mouth and may live in the shallow estuary until fall, before going back to the ocean for the winter. In April, the landlocked alewife in large freshwater lakes moves from its deepwater habitat toward shore to spawn in the shallow water along beaches and on shoals. Spawning occurs day or night from June through August, but normally peaks in mid-July. After spawning, the school of adult alewives retreats to deep water. The eggs sink to the bottom, and develop and hatch on their own. Landlocked alewife females can spawn 10,000 to 22,000 eggs, while the larger oceangoing alewives can produce up to 100,000 minute eggs. Young alewives reach two or three inches long their first year. The males spawn at two years old, the females at three. They eat zooplankton and other tiny water organisms, some crustaceans, shrimp, small fishes and fish eggs. Even as adults, alewives are able to feed extensively on zooplankton, because the gill rakers that filter the microscopic food from the water increase in number as the fish grow. They are not always a welcome addition to a lake because they compete with the young of other fishes for food and they eat larval fish. Along the Great Lakes, summer die-offs of immense numbers of alewives have occurred, the dead fish washing onto shorelines. This summer kill is probably the result of water temperature change, spawning stress and other causes.',
    },
    {
        commonName: 'American Eel',
        scientificName: 'Family Anguillidae',
        picturePath: americanEelIllustration,
        overview:
            'Freshwater eels are the only catadromous fishes in North America. “Catadromous” means that they spawn in salt water and live as adults in fresh water. Anadromous fishes, like salmon and American shad, spawn in fresh water but live as adults in the ocean. On this continent, eels are represented by a single species, the American eel (Anguilla rostrata). Although the eel looks snakelike, it is a fish. The American eel is found widely along the Atlantic and Gulf coasts, where the young eels move far upstream into small tributaries. The Delaware River in Pennsylvania has the most abundant population of eels of all the state’s streams, because there are no dam obstructions to prevent the eel’s upriver migration. Eels are rarely found in the Susquehanna River system. Passageways and lifts to move fish past all the Susquehanna’s dams should soon return eels, shad and other ocean-migrating fish to that watershed. Eels are also occasionally seen in the Potomac River watershed. They have even been reported from some headwater sections of the Ohio River watershed in Pennsylvania. While in fresh water, eels live in a variety of stream habitats, especially where they can hide under logs, rocks and undercut banks. Until the early 1900s, eels supported an intense commercial fishery in the Susquehanna and Delaware River systems. Adult eels on their downstream migration toward the sea were trapped by low, in-river V-shaped wing dams, which were barricades made of rocks. The eels entered these eel racks from the wide upstream side and swam through the small funnel opening downstream, into holding baskets. The remains of old “eel weirs” can still be seen in some Delaware and Susquehanna River watershed streams. Even in a “poor” eel year, the take was staggering: In 1912, called an “off year,” 50,000 eels weighing more than 44,000 pounds were caught in Pennsylvania. Today, eels are caught mostly by anglers looking for food and sport (eels are good eating, especially smoked). The genus name “Anguilla” is Latin for “eel.” The species name “rostrata” means “long nose.”',
        characteristics:
            'The American eel’s body is long and slender, and seems scaleless. Actually, it has smooth, tiny scales that are embedded in the skin. A long, low dorsal fin extends over at least two-thirds of the back. It blends with the caudal fin and the anal fin, which is also long and low, on the underside. There are no pelvic fins, but the pectoral fins are well-developed. The presence of pectoral fins can be used to distinguish an eel from a lamprey, which has no paired fins. The head has a smallish eye. The head is long, and tapers to a small mouth. The lower jaw sticks out a little farther than the upper jaw. Eels are yellowish brown to dark-olive, and lighter underneath. In Pennsylvania, the maximum size is two to three feet, although four feet or more is possible. Females grow larger than males.',
        habitat: '',
        lifespan:
            'The mysterious life history of freshwater eels was revealed only in this century, and even today, eels are not completely understood. The principal puzzle for many years was where eels spawned. Their spawning grounds have finally been identified as the Sargasso Sea, in the northern Caribbean-Bermuda region of the Atlantic Ocean. The eels that arrive there to spawn come from two directions, the American eel from the west and the European eel from the east. But how young eels of each species know which continent to go to has not yet been explained. After the adult eels spawn, they die. The larval eels, called “leptocephali,” are ribbonlike and transparent. These “glass eels” drift with other tiny organisms in the northward-flowing ocean currents. The transforming young eels, called elvers, enter river estuaries when they reach the continent. The females don’t stop. They continue swimming many miles upstream, mainly at night, even to the river system’s headwaters. The trip from the spawning grounds in the ocean to the eel’s freshwater upstream home takes about a year. The male eels, which remain smaller than the females, stay in the lower reaches of the coastal river and in the brackish tidewater just off the river’s mouth. After remaining in fresh water for 10 to 20 years, the adult females, now called “silver eels” because of their silvery appearance, migrate downstream in the fall on their long way back to the Sargasso Sea. Sexually mature female eels may contain two million or more eggs. Eels are predators. They eat a wide variety of aquatic insects, crayfish and other crustaceans, frogs, fishes and worms. They feed mostly at night.',
    },
    {
        ...AMERICAN_SHAD,
        overview:
            'The American shad is the largest member of the herring family that lives in or visits Pennsylvania waters. The annual migration of shad up rivers that feed the Atlantic Coast was used as food by American Indians as well as early European settlers. The spring shad run is credited with helping to save General Washington’s starving troops at Valley Forge during the Revolutionary War, arriving just in time. Shad also supported a commercial fishery on the Susquehanna River as well as the Delaware River. The Susquehanna’s runs stopped when hydroelectric power dams were built across the river in the early 1900s. Since that blockage, efforts led by the Pennsylvania Fish & Boat Commission have been aimed at restoring shad to the Susquehanna watershed. The result is that now there are fish passage devices to enable fish passage at nearly all the dams. Full access to the river system should be possible soon. Shad are once again returning to the Susquehanna through the fishways, and the shad are providing evidence of natural spawning. The Pennsylvania Fish & Boat Commission has also stocked shad in the Juniata River system, above the Susquehanna River dams, to help restore the run. There are also fishways that allow shad migration over dam obstacles on the Schuylkill River and Lehigh River, but the only major waterway completely accessible to the natural shad migration in Pennsylvania is the Delaware River. Adult shad travel at least as far up as the confluence of the West Branch and East Branch of the Delaware, in extreme northeastern Pennsylvania. Along the Atlantic Coast, shad range from Labrador to Florida, ascending coastal rivers all along the way during spawning runs, but they are most abundant from Connecticut to North Carolina. American shad were introduced into the Sacramento and Columbia rivers in California in 1871, and today there is a shad fishery on the Pacific Coast. In fact, shad eggs collected from the introduced population in the Columbia River have been used in the Susquehanna River restoration efforts. Past attempts failed to establish shad in Lake Ontario, the Mississippi River watershed and the Great Salt Lake. The American shad’s genus name “Alosa” is from “allis,” an old Saxon name for the European shad. The species name “sapidissima” means “most savory.” Even though shad are bony, the meat is tasty, and the roe, or eggs, are a delicacy.',
        characteristics:
            'Female shad, carrying their eggs during the spawning run, average four to five pounds, with a six- or seven-pounder fairly common. The males are smaller for their age. Shad can grow to 30 inches, with a maximum weight of about 12 pounds. Shad are brilliantly silver on the sides, with a greenish or bluish-metallic sheen on the back. The scales are large and readily detach when the fish is handled. Shad have one to two, rarely three, rows of dark spots extending along the side from the back edge of the gill cover. The first spot is the largest. The body is deep from the side and narrow seen head-on. Shad have sharp-edged modified scales along the belly line, as do other herrings. The dorsal fin is at the center of the back, and the tail is deeply notched. The dorsal and caudal fins are dusky. The caudal fin has a black edge, and the other fins are clear to light-green. The upper and lower jaws are about equal in length, neither jutting past the other. The rear corner of the upper jaw extends to the rear edge of the large eye. The head has a short, triangular look. The shad is notorious for its thin, easily torn mouth tissue.',
        habitat:
            'American shad are anadromous. They live in the open-water ocean as adults, entering brackish estuaries and swimming far upstream to spawn in freshwater rivers. They do not normally enter small streams and creeks, as does their cousin the hickory shad. American shad stay in the mainstem, bigger rivers. As marine adults, shad travel in schools extensively along the coast.',
        lifespan:
            'Shad run upriver from salt water into fresh water on their spring spawning migration when the water temperature is in the mid-50s to 60 degrees, with peak spawning activity occurring at about 65 degrees. The males travel upriver in schools ahead of the females. Shad spawn over sandbars or rocky riffles at night. Females, which are larger than the males, produce 100,000 eggs as an average, with 300,000 a documented high. Shad eggs are not adhesive and are just slightly heavier than water, so they do not readily sink. Instead, they drift along with the current. They develop and hatch in eight to 12 days, depending on water temperature. Adult shad feed little on their upstream spawning run, although they strike anglers’ offerings. The spawned-out, or spent, fish do eat on their way downriver to the sea again. Hatched shad live several months in fresh water, reaching the ocean by their first autumn. Shad stay in salt water for four or five years and until they are about 18 inches long, when they become sexually mature. Then they make their first freshwater spawning run. Some return to their home streams, but others show no migratory pattern. Shad feed mostly on microcrustaceans, or zooplankton, as well as some worms and small fish. While in fresh water, the young feed on insect larvae.',
    },
    {
        commonName: 'Blueback Herring',
        scientificName: 'Alosa aestivalis',
        picturePath: bluebackHerringIllustration,
        overview:
            'Blueback herring look much like a closely related species, the alewife. Their marine range is along the Atlantic Coast from Nova Scotia to Florida. They migrate for spawning into the lower reaches of freshwater streams and rivers. In Pennsylvania, the blueback herring is found only in the lower Delaware River and the Delaware estuary, where it returns to spawn. Throughout its range, dams have blocked the blueblack from entering streams, and reduced its abundance and distribution in freshwater. South of Pennsylvania, blueback herring can be very common in river mouths in the spring, giving it the common name “glut herring.”',
        characteristics:
            'Blueback herring look like alewives, with which they associate. The main difference between the alewife and blueback herring is internal: The alewife has a silver-gray lining (peritoneum) to its body cavity. The blueback’s peritoneum is black. The eye of the blueback is smaller, comparatively, than the alewife’s eye. Bluebacks have a single blue-black spot behind the upper part of the gill cover on the side of the body. The back is blue-green and the body sides are bright-silver. The cheek is longer than it is deep. The lower jaw projects slightly beyond the upper jaw, giving them a “stick out your chin” look. Bluebacks are generally more slender than alewives and are darker in color than other members of the herring family. The maximum size is about 15 inches and less than one pound. As in the other herrings, there is a row of saw-toothed scales along the belly line. There is also one dorsal fin, and the tail is deeply forked.',
        habitat:
            'Adult blueback herring are marine, inhabiting a narrow band of water off the coast. Fish enter the coastal rivers to spawn. Bluebacks spawn in fresh water several miles upstream of the tidal line in the Delaware River. While in streams, the blueback lives in the current over a rocky bottom, although its time there, during spawning, is brief.',
        lifespan:
            'As anadromous fish, blueback herring begin their lives in the flowing sections of ocean tributaries, not far from the stream’s outlet. Adult bluebacks are mature and spawn in their fourth year, migrating from the sea into the mouths of freshwater rivers in late spring, after the alewife has spawned. These schooling fish spawn in brackish water and in fresh water over a firm, not silted bottom. Their sticky eggs sink and adhere there. After spawning, the parents head for the sea again, taking no care of the eggs or young. The tiny one-millimeter-long eggs hatch in two or three days, at a little over 70 degrees. When young bluebacks are about one month old and about two inches long, they head for salt water. Bluebacks feed on zooplankton, as well as shrimp, small fish and fish eggs.',
    },
    {
        ...BLUEGILL,
        overview:
            'The bluegill is what many people think of as a “sunfish.” It is what they usually catch when they go fishing for “sunnies.” The common name refers to the bluish color that curves from the lower jaw around the bottom of the gill cover. The scientific species name “macrochirus” means “large hand,” probably describing the fish’s body shape. The bluegill is found throughout Pennsylvania nowadays. It is believed not to have been present originally in Atlantic Ocean watersheds.',
        characteristics:
            'The bluegill has several characteristic markings, which are helpful because its colors vary so much. Generally, the bluegill has an olive to brownish back, with sides that shade to brownish, orange and even pink. The sides have eight to 10 sets of double, bluish vertical bars that may look chainlike. The belly is white to yellow or coppery- orange. The sides of the head are greenish to blue-green, with lighter metallic-looking blue on the lower edge of the gill flap and under the lower jaw. Breeding males are darker, with rosy or lavendar sheens. The pectoral fin is long and pointed. The giveaway marking that distinguishes this sunfish from others is that the flap at the end of its gill cover is black with no red spot. Bluegills also have a dark spot or blotch on the lower part of the back section of the dorsal fin.',
        habitat:
            'Bluegills prefer to live in habitats similar to those of largemouth bass. Bluegills are found in lakes, small farm ponds, and the slower parts of warmwater streams and rivers. Typical bluegill habitat has aquatic weeds, where the fish can hide and feed. They can also be found near submerged stumps, logs and rocks. In the daytime, schools of small bluegills can be found close to shore. Larger bluegills prefer nearby deep water. In the evening and early morning, the bigger bluegills move into the shallows to feed. Dry flies and small poppers on a fly rod work well when bluegills are on the feed. Small jigs, wet flies, nymphs and a variety of small baits, fished on small hooks to accommodate the bluegill’s small mouth, are also effective.',
        lifespan:
            'Bluegills spawn during a longer period than most sunfish, from May, when the water temperature reaches 67 degrees, until August. The males fan small, saucerlike depressions in sand and gravel as nests, and vigorously guard the eggs and hatched young. Large numbers of nests are often in the same area and form colonies. One female may deposit as many as 38,000 eggs in a nest. Bluegill eggs hatch in two to five days. Because several females have contributed, there may be more than 60,000 young fish produced from a single nest. Bluegills may overpopulate their habitat, resulting in smaller and slower-growing fish. As generalized feeders, bluegills eat aquatic insects, crustaceans and minnows, and they have been known to eat aquatic plants. The bluegill feeds only in the daytime and throughout the water column. It may grow to a foot long and up to two pounds, although nine inches is an average.',
    },
    {
        commonName: 'Brown Trout',
        scientificName: 'Salmo trutta',
        picturePath: brownTroutIllustration,
        overview:
            'The brown trout is not a native Pennsylvanian, although it is now naturalized and widespread here in the wild, even becoming the main trout species in streams previously dominated by brook trout. Brown trout were originally found in Eurasia and were stocked in the late 1800s in the United States as strains from various locations, including Scotland and Germany. Pennsylvania received its first brown trout in 1886. Brown trout are considered more difficult to catch than brook trout. The larger ones tend to feed at night. Brown trout are closely related to Atlantic salmon (Salmo salar). The genus name “Salmo” is the Latin name for the Atlantic salmon. The species name “trutta” is the Latin name for “trout.”',
        characteristics:
            'Brown trout are brownish in overall tone. The back and upper sides are dark-brown to gray-brown, with yellow-brown to silvery lower sides. Large, dark spots are outlined with pale halos on the sides, the back and dorsal fin, with reddish-orange or yellow spots scattered on the sides. The fins are clear, yellow-brown, and unmarked. The belly is white-yellow. Like other trout and salmon, breeding males develop a long, hooked jaw and brighten in color. Wild brown trout in infertile streams may grow only slightly larger than the brook trout there. But in more fertile streams brown trout that weigh a pound are common. A brown trout over 10 pounds is a trophy. Brown trout may exceed 30 inches in length. The state record is nearly 18 pounds.',
        habitat:
            'The brown trout lives in cold or cool streams, rivers, lakes and impoundments. It is more tolerant of siltation and higher water temperatures than brook trout. A brown trout’s optimum water temperature range is 50 to 60 degrees, although it can tolerate water temperatures in the low 70s. Like brook trout, they are also somewhat tolerant of acidity. Brown trout may be found in all of the state’s watersheds, from limestone spring creeks, infertile headwaters and swampy outflows to suitable habitat in the larger rivers and reservoir tailwaters. Some brown trout can “hold over” after they are stocked. They can last a year or more in a stream, because they are adaptable to stream changes and are not that easy to catch.',
        lifespan:
            'Brown trout spawn in the fall, a little later than brook trout, when water temperatures are in the mid-40s to high 40s. Eggs are deposited in a stream gravel depression that the female prepares with swimming actions of her fins and body. Large females produce 4,000 to 12,000 eggs. Several males may accompany the female during spawning. The eggs hatch the following spring, with no parental attention. Brown trout eat aquatic and terrestrial insects, crayfish and other crustaceans, and especially fish. The big ones may also eat small mammals (like mice), salamanders, frogs and turtles. Large browns feed mainly at night, especially during the summer. Their life span in the wild can be 10 to 12 years.',
    },
    {
        ...CHANNEL_CATFISH,
        overview:
            'Next to the flathead catfish, the channel catfish is the largest catfish in Pennsylvania. Weights of up to 15 pounds are not unusual at lengths of about 30 inches. The state record is over 35 pounds. Channel “cats” are avidly sought sport fish and are raised commercially for the table. They are found statewide, introduced where they did not occur naturally. The native range of channel catfish is believed to be the Great Lakes and St. Lawrence River watershed, the Missouri River system, the Mississippi River watershed, Gulf of Mexico watershed and parts of Mexico. They were not native to the Atlantic Coast north of Florida. The channel catfish’s species name “punctatus” means “spotted,” referring to the small, dark spots on its sides. The channel catfish is the only catfish that has these dots.',
        characteristics:
            'The channel cat has a deeply forked tail, with tail lobes that are sharply pointed. In bigger fish, the fork is less noticeable or disappears. Channel cats have 24 to 30 rays on the anal fin, a small, fleshy adipose fin that is separated from the tail, and typical catfish spines on its dorsal and pectoral fins. The barbels are black and long. The back is blue-gray to slate-gray or bluish olive. The sides tend to be silvery-gray, and the belly is whitish. Except for some large adults, especially the males, channel catfish have small, irregular spots on the sides and back. None of the other catfishes has these spots. Males become darker, almost blue-black, during spawning time.',
        habitat:
            'The channel catfish is an adaptable fish, usually found in clear, warm lakes and moderately large to large rivers, over clean sand, gravel or rock-rubble bottoms. It is generally not found in the muddied, weed-choked waters that some other catfish species frequent. Channel cats, especially young fish, may be found in fast-flowing water. Usually, channel catfish prefer deep pools and runs in rivers that have alternating pool and riffle habitats. It is also found in reservoirs, lakes and farm ponds, and even in some of the larger trout streams.',
        lifespan:
            'Channel catfish spawn in May to early June, when the water temperature ranges from 75 to 85 degrees, with 80 degrees the optimum. The male prepares the nest, which is usually a depression or hole in an undercut bank, or an excavated burrow under logs or rocks. Sometimes channel cats spawn in sunken, hollow logs or abandoned muskrat holes. In clear ponds, spawning channel cats must have semi-darkened shelters, either natural or provided. From reservoirs, channel catfish sometimes move upstream to spawn in tributary rivers. A female channel cat may lay 2,000 to 70,000 eggs per year, depending on her size. After spawning, the males protect the adhesive egg mass and aerate and clean the eggs by fanning their fins. The males also guard the hatched fish for a time. Young channel cats are insect-eaters, feeding on mayfly nymphs, caddis larvae and midge larvae. As they grow, they switch to fish, crayfish and mollusks, but still feed on aquatic insects, and occasionally eat plant matter. Yearling and subadult channel cats are more tolerant of fast water than larger adults. They move out of slow water into the quicker current or swim short distances into tributary streams to feed. Channel cats feed mostly at night, but may forage on the bottom, where it’s dim during the day. Channel catfish, especially young fish, have been known to feed on the surface. Like other catfish, at night they depend on their barbels and their sense of taste to find food. Even so, channel cats are believed to be more of a sight-feeder than other catfishes, because of their clear-water habitat.',
    },
    {
        ...COMMON_CARP,
        overview:
            'Pennsylvania’s biggest minnow is not a native of this continent, or this hemisphere. It was originally distributed throughout Europe and Asia. It is not known exactly when carp were brought to the United States from Europe, probably the mid-1800s to late 1800s. Some earlier reports by European settlers of “carp” in North America are thought to be misidentifications of the quillback (see page 75). By 1880, the U.S. Fish Commission had distributed more than 12,000 carp to people in 25 states and territories to establish the fish in this country. Today, carp are found not only throughout the United States, where they are especially abundant in the fertile waters of the Mississippi River watershed, but they occur in all 67 Pennsylvania counties. Young carp are an important part of the aquatic food base. Larger carp are a fisherman’s challenge because of their tackle-testing weight. Carp are also pursued by bow fishermen, especially when the fish move into shallow water to spawn. The genus name “Cyprinus” is the old-world name for carp. “Carpio” is a Latinized word meaning “carp.”',
        characteristics:
            'Carp can be confused with feral (wild) goldfish, except that the carp grows much larger and has two pairs of soft, fleshy barbels around its mouth. Goldfish don’t have these barbels. The carp’s body is robust, deep and thick, and arched toward the dorsal fin. It has large scales that are dark-edged, with a black spot at the base. Most carp are heavily scaled, but two genetic mutants show either few, extremely large scales (the “mirror carp”) or no scales at all (the “leather carp”). Carp have a lengthy dorsal fin, with nearly 20 soft rays. The dorsal fin extends well along the back. The dorsal and anal fins have a sharp “spine,” actually, a hardened soft ray, on the front edge. The typical carp’s back is olive-brown to reddish brown, with the sides becoming silvery-bronze, brassy, or olive-gold. The belly is yellow or yellow-white. The caudal and anal fins are usually tinged with red. Carp generally grow to about 30 inches and 10 to 15 pounds. The Pennsylvania state record is over 50 pounds.',
        habitat:
            'Carp tolerate a variety of habitats, even heavily silted water or polluted water that most other fish cannot tolerate. They can also be found in clean streams, including the larger trout streams. When carp live in rivers, they inhabit the slower-flowing sections. They are also in ponds, lakes and reservoirs. Carp prefer shallow areas with plenty of underwater weed growth. But they can be found over any type of bottom, including mud, sand or gravel. Carp create their own turbidity, muddying the waters during their bottom-rooting feeding. They have been blamed for contributing to the decline of clean-water native fish, because their silt-stirring activities decrease light penetration. This inhibits plant growth, and causes mud to settle on and suffocate developing fish eggs.',
        lifespan:
            'Carp spawn in late spring to early summer, over aquatic vegetation. They may choose a shallow, weedy bay. After rains have swelled their home river over its banks, they may move into flooded fields to deposit eggs on submerged plants. The splashing of their spawning commotion in shallow water can often be seen and heard. Several males may spawn with a female, which can release up to two million tiny eggs. The carp parents abandon the eggs. The eggs adhere to submerged vegetation and to the bottom. They hatch in four or five days. Carp grow to four or five inches their first year. They mature in three or four years, and they can live to be about 20 years old. The carp is an omnivore, eating a wide variety of aquatic plants, algae, insect larvae and other invertebrates, and even small fish. Its usual feeding method is to disturb the bottom material with its snout and pick up the food it dislodges, usually kicking up clouds of silt. Carp have a well-developed sense of taste and a sensitive mouth. Their pharyngeal “teeth,” located in the throat, are adapted for crushing. The larger ones look like human molars.',
    },
    {
        commonName: 'Flathead Catfish',
        scientificName: 'Pylodictis olivaris',
        picturePath: flatheadCatfishIllustration,
        overview:
            'Flathead catfish grow longer and heavier than other Pennsylvania catfish. In fact, they are one of the state’s biggest fish, of any kind. Flathead catfish are known to grow to more than 100 pounds, but 20 or 30 pounds is more likely in Pennsylvania. The Pennsylvania record is over 40 pounds. Flathead catfish are native to the lower Great Lakes and the Mississippi River basin, from western Pennsylvania southward. They are also in Gulf of Mexico watersheds, and can live in reservoirs. In Pennsylvania, flatheads are found mainly in the Ohio, Allegheny and Monongahela rivers. Fossils of this catfish genus that are about 15 million years old, from the mid-Miocene Epoch, can’t be distinguished from the modern flathead catfish. The flathead’s genus name “Pylodictis” means “mud fish,” and its species name “olivaris” means “olive-colored.”',
        characteristics:
            'Flathead catfish have the scaleless, strong body and the well- developed pectoral and dorsal fin spines typical of catfish. The tail is only slightly indented, or may appear square or rounded. The dorsal fin is high, and the lower jaw projects past the upper jaw. The body looks long and slender. The upper portion of the flathead catfish’s body is yellowish brown to dark, even purplish brown, with black or brown mottling on lighter brown sides. The belly is grayish or yellowish white. It does have a flat-looking head, very wide and depressed. The chin barbels are white to yellow, the fins are mottled, and the anal fin, which has fewer than 16 rays, is short and rounded. Except for very large adults, flathead catfish have a white tip on the upper lobe of the caudal fin. Young flathead catfish are nearly black on the back.',
        habitat:
            'Flathead catfish are found in large rivers, streams and lakes, usually over hard bottoms. They prefer deep, sluggish pools, with logs and other submerged debris that can be used as cover. Young flatheads live in rocky or sandy runs in the river and in the riffles.',
        lifespan:
            'The flathead is a loner and a traveler, leading a solitary existence except at spawning time. Flatheads spawn in early summer, later than channel catfish. The flathead’s spawning behavior is like that of other catfish. The adults form pairs and build nests in natural cavelike depressions in the bank, or they may hollow out a cavity under an underwater object, like a log or boulder. Their compact egg masses contain from 4,000 to 100,000 eggs. The male guards the nest and the newly hatched fry, becoming aggressive toward the female. Flatheads grow fairly rapidly and mature sexually at about 15 inches and five years old. They can live to at least 19 years old. Juvenile flatheads live in riffle areas and feed on larvae and nymphs of aquatic insects. As the flathead grows, it switches to crayfish and fishes, although many items are on its menu. During the day, flathead catfish stay out of sight, hiding beneath undercut banks, in brush piles and log jams. At night they forage in a variety of habitats, including very shallow riffles where their backs and dorsal fins may be exposed. For this reason, angling at night is the way to catch a big flathead. Biologists report that one possible feeding strategy of the flathead is to lie motionless with its mouth open, until a fish looking for a spot in which to hide swims in. Others have observed flatheads lunging and grabbing prey after they have lain in wait.',
    },
    {
        commonName: 'Gizzard Shad',
        scientificName: 'Dorosoma cepedianum',
        picturePath: gizzardShadIllustration,
        overview:
            'The gizzard shad is a herring with a difference. It is set apart from its herring relatives (that are in the genus Alosa), by its gizzardlike stomach. The gizzard shad is found mainly in the Ohio River watershed and Lake Erie in appropriate habitat. However, as a result of both intentional and unintentional stocking, it is found statewide. The gizzard shad’s original home range was the southeastern United States, except for the Appalachian Mountains, but the fish seems to be spreading northward. Biologists question whether or not the gizzard shad was native to Lake Erie. They believe it probably invaded the Great Lakes from the upper Mississippi River. Today, gizzard shad can be found in the St. Lawrence River, the Great Lakes, the Mississippi River and its tributaries, and the Atlantic and Gulf Coast watersheds. The gizzard shad gets its common name from its muscular, gizzardlike stomach, which helps process the plankton and plant food this fish strains from the water. The genus name “Dorosoma” refers to a lancelike body. The species name “cepedianum” recognizes a French ichthyologist named Lacepede.',
        characteristics:
            'The gizzard shad has the typical herring family shape, but with a distinctive dorsal fin. Its short, soft-rayed dorsal fin is located at the center of its back. It has a long, trailing filament as the rear ray, longer than any of the other rays. The gizzard shad’s back is silvery blue-green to gray. The sides are silvery or reflect blue, green, brassy or reddish tints. There is no lateral line. The tail is deeply forked, and the lower jaw is slightly shorter than the upper jaw. The snout is blunt. The mouth is small, and there is a deep notch in the center of the upper jaw. The gizzard shad’s eye is large. There is a big, purplish-blue spot near the edge of the upper gill in young gizzard shad and small adults. This spot is faint or disappears completely in larger, older fish. The fins are dusky and there are the usual herring sawtooth- edged belly scales. Gizzard shad grow rapidly and can reach a maximum size of about 20 inches.',
        habitat:
            'The gizzard shad is a school fish of lakes and impoundments. It also lives in the backwaters of sluggish rivers and the deep, slow pools of smaller streams. Gizzard shad become more abundant as a lake eutrophies–that is, as it gains fertility through natural aging or added pollutants. Generally found in fresh water, gizzard shad can also live in the brackish water of tidal zones and estuaries. Unlike many other herrings, gizzard shad are nonmigratory and stay near their home areas. They are often found over a mucky bottom, which they filter when feeding.',
        lifespan:
            'The gizzard shad spawns in spring, May to June, when water temperatures reach the mid-60s to mid-70s. Spawning gizzard shad gather in large schools to broadcast their eggs in water several feet deep, near the shore. The actual spawning is done near the surface. The females participate with several males. An average female gizzard shad produces about 300,000 eggs, but some may expel a half-million, with maximum production by two-year-old fish. After releasing their eggs and milt, the adults return to the water depths. The sticky eggs fall to underwater roots, plant fibers and other debris. There they adhere and hatch in two or three days. Young gizzard shad are a food source for game fish, but grow rapidly, to as much as seven inches their first year. Their use as a forage fish is limited because they quickly grow past the prey size preferences of all but the largest predatory fish. In some fertile waters, gizzard shad become numerous, and extensive winter die-offs are not uncommon. Winter die-offs are associated with temperature stress. Massive mortality of gizzard shad may also follow spawning. Gizzard shad are filter-feeders, straining small animal organisms and plants from bottom mud and organic deposits. The adults have very many, often more than 400, fine gill rakers that can catch even minute plankton. Gizzard shad have an unusual digestion process for fish. The vegetable material they eat is ground in a gizzardlike stomach.',
    },
    {
        commonName: 'Green Sunfish',
        scientificName: 'Lepomis cyanellus',
        picturePath: greenSunfishIllustration,
        overview:
            'The green sunfish was originally found west of the Appalachian Mountains, throughout the Mississippi watershed. It has been introduced elsewhere in the East, and is now found in most of Pennsylvania, although not in great numbers. The species name “cyanellus” means “blue.”',
        characteristics:
            'The green sunfish’s back and sides are olive, with a blue- green sheen and small, scattered dark specks. The lower sides and the belly have a brassy- gold tint and the head has bright-blue spots or lines. The gill flap is black with a pale-red, pink or yellow edge, and the pectoral fins are short and rounded. There is a black blotch on the rear portion of the dorsal fin and at the base of the anal fin. The green sunfish’s mouth is larger and the lips are heavier than in most sunfish. The top jaw extends past the front of the eye. Dorsal, caudal and anal fins are edged with a white, yellow or orange border. Green sunfish reach eight or nine inches in length.',
        habitat:
            'The green sunfish likes sluggish pools and backwaters in streams and rivers. It also lives in the shallows of ponds and lakes and is tolerant of siltation. Green sunfish do not roam far from their small home range.',
        lifespan:
            'Green sunfish spawn over several months, between June and August. The fish mature at two years of age, although they may be only three inches long. The males fan several dishlike depressions in the bottom with the tail, and defend the nests vigorously against other green sunfish males. Green sunfish may nest in colonies, and readily hybridize with other sunfish, like bluegills and pumpkinseeds. The females spawn 2,000 to 10,000 eggs onto the nests of several males, and the males stay with the nest about a week while the eggs develop. Green sunfish are prolific producers. They tend to overpopulate the shallow water areas where they live. Their rather large mouth lets them eat insects, snails, crayfish and even small fish.',
    },
    {
        commonName: 'Hickory Shad',
        scientificName: 'Alosa mediocris',
        picturePath: hickoryShadIllustration,
        overview:
            'Hickory shad live in coastal marine waters and move into fresh water to spawn. Hickory shad range from the Bay of Fundy in Maine to the St. Johns River in Florida. The hickory shad is common from Chesapeake Bay to North Carolina and in coastal waters of the northeast states. Between these areas, it is scarce. In Latin, the name “mediocris” means “not important,” or “ordinary.” Like American shad, hickory shad are anadromous. They live in coastal ocean waters as adults and enter brackish estuaries, like the Delaware, and swim far upstream to spawn in freshwater rivers and creeks. Hickory shad are returning to the Susquehanna River watershed because of fish lifts on dams. Currently, they are on the list of endangered, threatened, and candidate fishes because of their extremely limited distribution and abundance. In states where their numbers are sufficient to allow sport fishing, they are pursued by light-tackle specialists for their fighting and leaping abilities.',
        characteristics:
            'The hickory shad is silver-sided with a dark spot on the shoulder followed in some individuals by several less distinct dark spots. The fish are grayish green on top fading to silvery on the sides. The sides of the head are bronze. The tip of the lower jaw, and the dorsal and caudal fins, are darker. The tail is deeply forked with pointed lobes. The lower jaw projects beyond the upper jaw. The hickory shad’s shape is unique. The back curves only slightly. The body is long but compressed. In cross section it is wedge-shaped. The hickory shad ranges in size between the bigger American shad and the smaller blueback herring and alewife. The most common size of a hickory shad is about 12 to 15 inches. A very large specimen would measure 24 inches long, but hickory shad rarely reach two pounds.',
        habitat:
            'In its coastal ocean enviroment, the hickory shad feeds on squid, small fish, fish eggs and some invertebrates such as crabs and crustaceans. It is unknown whether or not hickory shad feed when they enter fresh water to spawn.',
        lifespan:
            'Very little is actually known about the hickory shad’s life history, except that the species is anadromous. It is believed that hickory shad enter the Delaware estuary and Delaware River, and Chesapeake Bay and the Susquehanna River, in the spring, from April to June, to spawn. Spawning is believed to take place at night, between dusk and around midnight, when water temperatures reach 61 degrees. The eggs, which are buoyant and somewhat adhesive, are easily carried downstream by swift water and current. The eggs hatch in 48 to 70 hours.',
    },
    {
        commonName: 'Largemouth Bass',
        scientificName: 'Micropterus salmoides',
        picturePath: largemouthBassIllustration,
        overview:
            'Largemouth bass were originally distributed in the Ohio River and Lake Erie watersheds in Pennsylvania. The largemouth has been established statewide in appropriate habitat. The largemouth bass is Pennsylvania’s biggest sunfish. The state angling record is over 11 pounds, and the fish can grow two feet or more in length. The largest largemouths are generally females. The species name “salmoides” refers to trout (“salmo”), because the largemouth is sometimes called a “trout” in the southern United States. One nickname is “bucketmouth,” which, like the common name “largemouth,” is well-deserved by the fish’s gaping jaw, with which it can swallow sizable prey.',
        characteristics:
            'Along with growing larger, the largemouth is more rotund and less flattened laterally (side to side) than other members of the sunfish family. The largemouth’s head and back are a bright-green to olive-green. Its sides are lighter green, and the belly is whitish or pale-yellow. The largemouth’s upper jaw extends beyond the back edge of its eye. It has a broad black stripe or a line of broken splotches running along its side from head to tail. In the largemouth, the two sections of the dorsal fin are nearly separate.',
        habitat:
            'The largemouth bass lives throughout Pennsylvania in suitable warmwater habitat, which is usually a pond or small, weedy lake. It is also found in the shallow backwaters and coves of large lakes and in the sluggish sections of big rivers. Largemouths are almost always associated with aquatic weeds, a soft bottom or stumps and downed logs. They are rarely found over rocks or in depths of more than 20 feet.',
        lifespan:
            'In true sunfish style, the male largemouth fans a circular nest for spawning and aggressively defends the nest site, eggs and young fish. Largemouths spawn in spring and early summer, when water temperatures remain at 60 degrees for about three days. The typical nest is on gravel, sand or even soft mud. It is two to three feet in diameter, about six inches deep, and in one to four feet of water. Largemouths usually spawn within eight feet of a shoreline and keep their nests at least 20 feet apart. Several largemouth bass females may spawn on one nest, each contributing 2,000 to 7,000 eggs per pound of body weight. Egg hatching takes about 10 days in 65-degree water. The young largemouths stay at the bottom of the nest for about a week, until the yolk sac is absorbed. Then they rise above the nest in a school and begin feeding. The male continues to guard them for as long as a month. Young bass feed on zooplankton, insects and small fishes, and they are cannibalistic on one another. Frequently, spring lake conditions determine the abundance of these forage items. Thus, the abundance of these forage items also determines the abundance of young largemouth bass. The number of young largemouth bass produced each year varies according to lake conditions and ultimately leads to changes in adult largemouth bass abundance. Adult largemouths are predators and eat mostly fish and crayfish, but they also take frogs, snakes, and even small mammals and birds, like mice and ducklings that happen onto the water’s surface. Largemouth bass feed day and night. Attention-attracting, splashy surface plugs, minnowlike lures and soft-plastic worms or other slithery imitations, snaked through the weeds, all appeal to the aggressive largemouth.',
    },
    {
        commonName: 'Muskellunge',
        scientificName: 'Esox masquinongy',
        picturePath: muskellungeIllustration,
        overview:
            'A voracious predator, the muskellunge is one of Pennsylvania’s largest and fastest-growing fish, with the state record standing at over 54 pounds. The muskellunge’s original North American range was the St. Lawrence River, throughout the Great Lakes and Hudson Bay, and the Mississippi River basin, but it has been widely propagated and stocked elsewhere for sport fishing. In Pennsylvania, muskies were originally restricted to the northwest region, the Lake Erie and Ohio River watersheds, especially in the large glacier- formed lakes, like Conneaut Lake in Crawford County and Presque Isle Bay in Lake Erie. The species name “masquinongy” comes from an Ojibwa (Chippewa) name for the fish—“mas,” meaning “ugly,” and “kinononge,” meaning “fish.”',
        characteristics:
            'The musky is streamlined with a dorsal and anal fin that are set so far back toward the tail that the fish is almost missile-shaped. Its flat, ducklike snout has many strong, sharp teeth. The musky has no scales on the lower half of its cheek and the lower half of its gill cover, which helps to distinguish it from the northern pike. Also, the musky has six to nine pores, tiny sensory openings, beneath each side of its jaw; the northern pike has five or fewer pores. Muskies vary in the color and the intensity of their markings. The base color on the back and sides is light greenish gray or yellow-green to olive-brown, the sides shading lighter. The flanks have more or less vertical rows of darker spotting, or indistinct bars. The striping is more pronounced in younger fish. In older fish it may fade, giving the fish a uniform color. The musky’s belly is white. Its fins are greenish cream to brownish orange, with dark blotches. There is no dark teardrop mark below the eye. Instead, a black horizontal streak runs through the eye. A musky of 20 to 35 pounds is not unusual, and they may grow over four feet long.',
        habitat:
            'Muskies are coolwater fish, found in clear natural lakes, reservoirs and rivers. They frequent quiet backwaters and slow pools that have plenty of aquatic weed growth, which the musky uses for cover and which attracts its prey. Muskies are usually found in fairly shallow water, 15 feet or less, but they have been caught 40 or 50 feet deep. They also associate with rocky or boulder-strewn shoals. Muskies use a restricted home range, rarely moving more than two miles from their summer feeding areas, with the large ones often remaining in one pool.',
        lifespan:
            'Muskellunge are solitary, territorial predators. They are very aggressive and will even attack and eat one another. Their main diet is fish, but they will take what opportunity gives them, including snakes, frogs, muskrats, mice and waterbirds. Muskies spawn in the spring, after the northern pike, when water temperatures are in the high 50s to high 60s. They spawn at night in shallow water, often just six to 12 inches deep. Relatively long-distance spawning migrations have been documented because adults tend to return to the same spawning locations each year. As the male and female swim over the spawning site, which usually features underwater stumps and logs on a muck bottom, the eggs are released to fall as they will. Female muskies 25 to 53 inches long produce 22,000 to 180,000 eggs. The adhesive eggs hatch in eight to 14 days, and as is usual for the pike family, the fry attach themselves to sunken debris as they absorb their egg sacs. Mortality of fry is high, because fish eat the vulnerable musky young. When muskies are about four days old, they turn the tables, and begin eating fish. On that diet they can grow to one foot long in only four months. Muskies are sexually mature at about three years old and a little over 20 inches long. Females grow faster than males, and all muskies grow best in the early summer and fall, when water temperatures reach about 68 degrees. Muskies naturally hybridize with northern pike, producing the “tiger musky” (see page 97). Tiger muskies are also bred artificially in fish hatcheries and stocked for sport. The usual age of a musky that is caught is three to six years, but some have reached nearly 20 years old.',
    },
    {
        ...PUMPKINSEED,
        overview:
            'As highly colored as any tropical fish, the pumpkinseed is one of our most common and frequently caught sunfish. Pumpkinseeds are found throughout Pennsylvania, and in eastern Canada and the eastern United States in the Atlantic watershed and upper Mississippi watershed. The species name “gibbosus” means that it is “formed like the full moon,” appropriate for its flat, roundish body.',
        characteristics:
            'The pumpkinseed is one of our smaller sunfishes, with eight inches an average size. The body is an overall light-olive to golden-brown, with irregular blue or blue-green lines and a sprinkling of olive, orange or red-orange spots. The fish’s cheeks and gill covers are marked with wavy light-blue lines. The belly is reddish orange to yellow. The best way to identify a pumpkinseed is to observe its gill flap, which is at the rear edge of the gill cover. The black gill flap is smaller and more rigid than the bluegill’s. It is bordered with lighter color and, most importantly, has a bright orange-red tip.',
        habitat:
            'Pumpkinseeds are found in the quiet, weedy shallows of streams, lakes and ponds. They usually live in cooler water than other sunfish. They can tolerate poorer water quality, surviving periods of low oxygen. They also tolerate muddy water and acidic water.',
        lifespan:
            'Pumpkinseeds spawn in late May to early June. The males clear small, saucer-shaped nests on the bottom in water three feet deep or less. Pumpkinseeds nest in small groups of up to three nests, but these groups of nests can be very close. The nests may have several thousand eggs each, which have been deposited by several females. Although the nest is guarded, other males may rush in and fertilize eggs. It takes about three days for the eggs to hatch, and each nest may produce more than 14,000 young pumpkinseeds. Pumpkinseeds may hybridize with bluegills and green, redbreast, longear and other sunfish. They feed heavily on snails and have special throat structures for doing so. Pumpkinseeds feed mostly on the bottom of a stream or pond, where they also eat burrowing and other aquatic insects. Like the bluegill, small baits, jigs and flies take pumpkinseeds best.',
    },
    {
        ...QUILLBACK,
        overview:
            'One of the quillback’s common names is “quillback carpsucker.” “Quillback” refers to the lengthy first dorsal rays and several following rays that form a long projection at the leading edge of the back fin, which might remind some of a quill pen or feather quill. “Carpsucker” is also appropriate because this sucker does look much like a carp. Its genus name “Carpiodes” means “carplike,” and its species name “cyprinus” is the generic name of the carp. Quillbacks are uncommon even though they range from the Great Lakes and St. Lawrence River south along the Atlantic Coast to Virginia. They are present in the Mississippi River watershed, and in Gulf Coast watersheds. They are in all of Pennsylvania’s major watersheds. Quillbacks are the only carpsuckers now living in the state’s waters.',

        characteristics:
            'Quillbacks have a body that is deep when viewed from the side, but narrow when seen from the front (laterally compressed). The back color is olive-brown to grayish, with the sides silvery. The large, reflective scales add hints of shimmering-green or blue. The dorsal fin is long, stretching along the back nearly to the tail fin. The first several rays of the dorsal fin are very long, about five times longer than the short rays on the rear portion of the fin. The high front portion of the dorsal fin looks like a pointed projection and trails over the fish’s back. There are no sharp spines on any of the fins. The quillback’s pelvic fins are white to orange, and the head is small and conical. Quillbacks have typical sucker mouths. The upper jaw does not extend beyond the front of the eye. The tail is deeply forked. Quillbacks grow to about two feet long and about 12 pounds.',
        habitat:
            'Quillbacks live in slow-moving pools and backwaters of streams and rivers. They favor a gravel bottom and little silt in the water. They may also be found in lakes and reservoirs.',
        lifespan:
            'Quillbacks spawn in spring when the water temperature reaches about 60 degrees. Females release several hundred thousand eggs, which are scattered haphazardly in shallow water, over gravelly riffles, sand or mud. The parent quillbacks may make a run, or migration, to their spawning areas. The eggs are not guarded. They are left to develop and hatch on their own, which takes eight to 12 days. Mortality is high among the eggs, fry and young fish, because they provide forage for predatory fish. Among adult quillbacks, mortality is 60 to 70 percent annually. Quillbacks feed on the bottom, with aquatic insect larvae and other small animal organisms the bulk of their diet. They also eat mollusks, like fingernail clams, and some aquatic vegetation. Quillbacks travel in schools.',
    },
    {
        commonName: 'Rainbow Trout',
        scientificName: 'Oncorhynchus mykiss',
        picturePath: rainbowTroutIllustration,
        overview:
            'Rainbow trout are a western North American species, native to the Pacific slope from California to Alaska. In a turn-of-the-century effort to restore Pennsylvania’s degraded trout fishery, rainbows were introduced throughout the state. But today, as wild fish, rainbows sustain reproducing populations only in a handful of fast-falling creeks scattered around the state. As stocked, hatchery-reared fish, rainbows are found throughout Pennsylvania’s watersheds. For many years the rainbow was considered a near relative of the brown trout, and it was given the scientific name Salmo gairdneri, which still appears in some reference books. Today, biologists consider the rainbow more closely akin to the Pacific salmons and the cutthroat trout of the West. Its scientific name was changed to reflect that link. Like those salmons, some rainbows (steelhead) run to the ocean or a large sealike lake, like the Great Lakes, if they have access, returning upstream for spawning. Then they are called “steelhead” (they appear steel- colored, or more silvery, than stream rainbows). Rainbows are flashy fighters when hooked, jumping out of the water more than other trout. The genus name “Oncorhynchus” means “hooked snout,” referring to the hooked lower jaw of big, breeding males.',
        characteristics:
            'Rainbow trout are silvery-gray to dark-green on the back and sides. They have a pinkish or reddish lateral stripe, sometimes with lavendar or orange overtones, from the gill cover running the length of the fish to the tail. The caudal fin has rows of small dark spots, and there are more small blackish spots sprinkled on the head and sides, and spotting on the dorsal and adipose fins. The belly is whitish. The lower fins are pale-pink without spots. At spawning time, males become deeply colored with an intensely red side stripe. Steelhead can be separated from similar-looking coho and chinook salmon by looking at the inside of the mouth. The mouth is completely white in the steelhead. In the salmons, the mouth has some gray or black. Steelhead and other deepwater, big-lake rainbows are more silvery than stream fish, with less of a side stripe. Great Lakes steelhead can grow to 30 inches and larger. The state record, taken from Lake Erie, is over 19 pounds.',
        habitat:
            'Rainbows are considered fastwater fish, preferring the swift runs and riffle areas of streams. They may live in small creeks, as well as suitable spots in large rivers, the tailwaters of dams, and in lakes and reservoirs. As trout, rainbows live in cold, clean, well-oxygenated water. Their optimum water temperature is about 55 degrees. Although they do best when the water is under 70 degrees, they can withstand temperatures into the 70s if there is plenty of oxygen and a cool, shady place to which they can retreat. Rainbows are the trout least tolerant of acidity. They do best in slightly alkaline waters. As steelhead, rainbows inhabit the cool waters of large lakes, especially Lake Erie and other Great Lakes, as well as oceans. Rainbow trout respond well to hatchery culture and have been introduced for sport fishing throughout the world. In some places, especially the mountains of the southeastern United States, introduced rainbows have encroached on native brook trout populations.',
        lifespan:
            'Rainbow trout are considered spring spawners, but steelhead may enter streams to spawn from late fall through spring. Spawning takes place when the water temperature is about 50 degrees, over gravel beds with good water flow. Rainbow trout move upstream to find the proper spawning area. Rainbows in lakes seek tributary streams. Like other trout, the female rainbow prepares the nest depression by turning on her side and “kicking” against the bottom gravel with her body and fins. Male rainbows are aggressive on the spawning grounds, driving other males away from the female’s nest. When the actual spawning takes place, several males may be beside the female. The females produce several hundred to over 12,000 eggs, depending on their size. After the eggs are deposited into the gravel and fertilized, no parental care is given. The eggs hatch in four to seven weeks. The fry take up to another week in the gravel to absorb the yolk sac. Then they become free- swimming. Most rainbows are sexually mature when they reach about three to five years old. Documentation of successful natural reproduction in Pennsylvania is rare. Self-sustaining populations of rainbow trout are found only in a few scattered streams. But mature rainbows, especially steelhead that have run up Lake Erie tributaries, successfully spawn and produce young. However, adult returns are mostly comprised of hatchery-released fish. Unlike salmon, which die after spawning, steelhead can spawn again, returning to the ocean or large lake to grow even bigger before the next year’s spawning run. Steelhead also follow other spawning fish migrating upstream and prey on their eggs and young. Rainbows feed on aquatic and terrestrial insects, crayfish and other crustaceans. Rainbows also eat fish, as well as plankton, snails, leeches and fish eggs. They take a variety of anglers’ flies, lures and baits. Rainbows have been intensively cultured in fish hatcheries. Strains have been developed that are of various colors, are tolerant of warm water, grow rapidly, resist disease and spawn at times different from the rainbow’s natural spawning time. The lifespan of the steelhead in the Great Lakes is six to eight years. Small-stream rainbows may live only to be three or four years old.',
    },
    {
        commonName: 'Redbreast Sunfish',
        scientificName: 'Lepomis auritus',
        picturePath: redbreastSunfishIllustration,
        overview:
            'The redbreast sunfish is native to Atlantic Coast watersheds. It is found in southern and eastern Pennsylvania in the Delaware, Susquehanna and Potomac River watersheds. The species name “auritus” means “eared,” referring to the long, dark gill flap. The common name describes the deep-orange or reddish belly.',
        characteristics:
            'Redbreast sunfish resemble bluegills, but with some important differences. The redbreast’s back is blue-green to olive, and there may be indistinct, dark vertical bands against the lighter bluish green on the sides. The lower side and belly shades to yellow and orange. The breast, between the gill opening and the pelvic fin, may be a deep red- orange. The gill flap is very long, with an elongated black spot. The tail is slightly forked, not rounded as in most other sunfish. The mouth is small and the pectoral fins are short and round.',
        habitat:
            'The redbreast sunfish lives in a variety of habitats, from small creeks to big rivers and reservoirs. It can tolerate silted, turbid water. It prefers the same habitat as smallmouth bass and rock bass, and is often found in the larger rivers with them, but frequents the shallower water.',
        lifespan:
            'Except during the spawning season, the redbreast sunfish moves very little from its home area. Spawning is in spring and summer, usually June, when the water temperature reaches 68 degrees. Male redbreast sunfish fan a shallow nest of about 12 inches in diameter in gravel or sand. They guard the eggs and protect the young for a short while after the eggs hatch. The males construct a single nest, but the nests may be grouped in closely packed colonies, when appropriate bottom material is in short supply. The females deposit 3,300 or more eggs, depending on their size. Redbreast sunfish hybridize with bluegills and other sunfish. The redbreast feeds on aquatic insects and terrestrial insects that fall onto the water, including large ones like mayflies and dragonflies. They also eat crayfish and small fish. They are active in cooler water than the bluegill. Although widespread, redbreast sunfish don’t become as locally abundant as other sunfishes, and they are normally loners when the water is warm. When the water cools, redbreasts form schools.',
    },
    {
        commonName: 'Smallmouth Bass',
        scientificName: 'Micropterus dolomieui',
        picturePath: smallmouthBassIllustration,
        overview:
            'The smallmouth bass was native to and found only in the Great Lakes and Ohio River watersheds until the mid-1800s. When the railroads spread around the country in the second half of the 19th century, so did the smallmouth. It was transported by train and eventually became a popular sport fish throughout the United States. It is now found all across Pennsylvania. Because of its body’s brownish-gold tints, the smallmouth has been nicknamed “bronzeback.” Its species name recognizes a French naturalist, M. Dolomieu.',
        characteristics:
            'The robust-looking smallmouth has a brownish or bronze cast to its back. It is lighter on the sides and has a white or pale-yellow belly. There is a goldish sheen to its scales, and smallmouths have a series of eight to 15 olive-colored vertical, broken bars along each side. The end of the upper jaw of a smallmouth does not extend beyond the back edge of the eye. The dorsal fin sections are separated by a shallow notch, not a deep notch as in the largemouth. The smallmouth’s eye is orange-red, and dark lines radiate from the eye backward. In young smallmouths, the vertical side bars are prominent, and the tail fin has three colors: Orange at the base, then a black band, then white to yellow at the tip.',
        habitat:
            'Although largemouths and smallmouths may live in the same rivers or lakes, they are found in different habitats. Smallmouths prefer rocky locations, more water depth and heavier current than largemouths. In Pennsylvania, smallmouth bass are found in medium to large streams and clear, deep lakes and reservoirs with a summer water temperature between 60 and 80 degrees. In lakes, they hang around downed logs, stumps, stone rubble and rock outcrops, and along the steep sides of submerged creek channels. They prefer streams with riffles flowing over gravel or boulders, where they are found in the pools, pockets behind rocks, or in the deeper moving water.',
        lifespan:
            'Smallmouth bass spawn in spring, May to early June, when water temperatures reach 60 to 70 degrees. The male builds the nest. The male fans a circular depression in gravel or sand with his fins. The nest is 14 to 30 inches in diameter and usually in three or four feet of water, although it may be more than 20 feet deep in clear water, as in Lake Erie. Smallmouths in lakes often move into tributary streams to spawn. Several females spawn on the same nest, adding 2,000 to 7,000 eggs per pound of body weight. Because the females spawn at different times, the eggs the male is guarding do not all hatch at the same time. Depending on water temperature, the eggs hatch in two to nine days. The young fish are ready to leave the nest five or six days after that. In rivers and streams, flow and temperature can affect the survival of young smallmouth bass. High flows can sweep eggs and fry downriver, where they may perish. Conversely, moderate flows may lead to high fry survival. These early season events frequently lead to low or high densities of adult smallmouth bass. Young smallmouths eat tiny crustaceans. Then they graduate to insect larvae, crayfish and fish. Smallmouths may reach 20 inches or more in length. The Pennsylvania smallmouth angling record is over seven pounds.',
    },
    {
        ...HYBRID_STRIPED_BASS,
        overview:
            'The striped bass hybrid is a hatchery-created cross between a white bass and a striped bass. It is stocked primarily because it tolerates warmer water than the purebred striped bass, which, as it grows older and larger, requires well-oxygenated water during the summer. In Pennsylvania it is stocked mostly in the western part of the state, in reservoirs such as Lake Arthur and Shenango Lake, and in the big-river area of the Ohio and Allegheny rivers near Pittsburgh. Here the hybrid typically grows larger than the white bass. Fisheries managers in the state do not tend to stock the striped bass hybrid in lakes and rivers that lead to Delaware or Chesapeake bays to minimize the chance of the hybrids mixing and reproducing with wild marine striped bass.',
        characteristics:
            'The hybrid striped bass’s body is stockier than that of a pure striped bass, and its lateral stripes are discontinuous and less distinct. Its back is dark, almost black. Its sides are silvery, with seven or eight faint and broken-looking lateral stripes, and its belly is white. The anal fin has 11 or 12 rays, and there are two tooth patches on the rear of its tongue. In size it grows to a length and weight midway between its parents. A 10- or 12- pounder is considered a big one.',
        habitat:
            'The striped bass hybrid is stocked in larger reservoirs and slow rivers, where there are open-water forage fish like gizzard shad and alewives.',
        lifespan:
            'The striped bass hybrid is fast-growing, which is typical of hybrids. It is generally sterile, and can be stocked instead of the purebred striped bass into waters to avoid the purebred’s potential of reproducing too prolifically and outstripping its food source. However, occasionally fertile striped bass hybrids have occurred, and some states have reported the hybrid back-crossing with the white bass. Striped bass hybrids feast on forage fish as adults.',
    },
    {
        ...STRIPED_BASS,
        overview:
            'In their native habitat, the Atlantic Coast from the St. Lawrence River to Florida and some tributaries of the Gulf of Mexico, the striped bass is a true anadromous fish, living in salt water but traveling to fresh water to spawn. Through stocking, striped bass have reached the West Coast. Striped bass can also live entirely in fresh water as a landlocked form that cannot reach the sea. In Pennsylvania, striped bass are found in the Delaware River, and historically had been found throughout the Susquehanna River, the fish traveling upstream from the Chesapeake Bay. Dams on the Susquehanna had blocked the striped bass upstream migration to spawning grounds, but fish lifts, or fishways, on the dams should soon make access possible to the middle Susquehanna for this and other anadromous fishes. Striped bass have also been stocked in several of Pennsylvania’s large inland reservoirs, with an especially good fishery having developed in Raystown Lake in Huntingdon County. Striped bass are valuable food fish, as well as much sought-after sport fish. Striped bass provided an important food source for the Plymouth colonists, who as early as 1623 netted enough of the fish to support themselves during the summer months. Captain John Smith wrote of the excellent eating qualities of striped bass. The seagoing stripers along the Atlantic Coast occur in definite “races,” or stocks, different from one another but not so much to be called subspecies, depending on where their home range is located. When the Santee River in South Carolina was impounded during the 1940s, the striped bass present there produced a population that adapted to a freshwater landlocked existence. Offspring and subsequent generations of these fish have been stocked in many inland waters, reservoirs and the rivers that run into them throughout North America. South of Pennsylvania and New Jersey, fishermen call stripers “rockfish.” Their species name “saxatilis” means “dwelling among rocks.”',
        characteristics:
            'The striped bass has a smoothly arched profile, slimmer and more streamlined than a striped bass hybrid, until it reaches a weight of five to 10 pounds, when its body becomes heavy-looking. The back is olive-green to steely blue-gray, sometimes almost black. The sides are silvery to pale silvery-green, shading to white on the belly. There are seven or eight distinct dark stripes that run laterally on the side of the body. Striped bass have two dorsal fins, the front spiny-rayed, the second mostly soft-rayed, separated by a notch. The back of the tongue has two tooth patches, unlike the white bass, which has one tooth patch at the base of its tongue. There are three spines and 11 soft rays on the anal fin, with the longest of these spines less than half the height of the anal fin. Young striped bass do not have dark lateral stripes, but instead have dusky bars. Striped bass catches in the 15- to 20-pound range are not uncommon in Pennsylvania. For sea-living striped bass, sizes in excess of 100 pounds have been reported. The Pennsylvania state records both for marine and landlocked striped bass are over 50 pounds.',
        habitat:
            'Striped bass live in salt water, in brackish estuaries and in fresh water. Migratory forms travel from the ocean or saltwater bays into freshwater rivers, above tidal influence, to spawn. Landlocked forms of striped bass live in large reservoirs as roaming, mid-water schools. Significant lengths of flowing water are needed for successful spawning, sufficient to keep eggs suspended before hatching.',
        lifespan:
            'From their saltwater homes, striped bass migrate upstream in the spring to spawn, traveling into the mouths of large freshwater rivers. Over stony riffles, several males chase a large female in what appears to be a battle, but it is actually frantic spawning antics and frenzied swimming–the striped bass’s courtship and spawning ritual. Male striped bass become mature at about two years of age, with the females usually ready to spawn in their fourth year, when they are 18 to 24 inches long. At all ages, the females are larger and heavier than the males. Water temperature signals spawning time, with some spawning occurring at 55 degrees, but most at 60 to 67 degrees. Young females may release just 65,000 eggs. Striped bass eggs are greenish and somewhat buoyant. After they are released, the eggs drift freely with the current until they hatch, usually in two or three days. Flowing water is critical to the success of striped bass spawning. That helps explain why there is no reproduction or little natural reproduction of the fish when they are confined to inland lakes. Striped bass eggs that sink to the bottom die, because they become covered with silt or because of other factors. Just-hatched striped bass grow rapidly and stay in brackish bays at the end of their downstream float. Juveniles spend their first and second summers in the tidal Delaware River with most inhabitating that area from the Schuylkill River downstream into the state of Delaware. After several years in these “nursery areas,” the adult striped bass become free- ranging along the Atlantic Coast. Marine striped bass make two migrations, one for spawning. The other, in fish two years old or older, occurs when a small percentage move out of their wintering areas, like the Chesapeake and Delaware bays, and travel north along the coast to New England and southern Canada. There they mingle with northern populations of striped bass during the summer. Then most return to their winter quarters. In reservoirs, the landlocked freshwater striped bass move according to temperature and dissolved oxygen in the lake, favoring cooler arms of the impoundment during the hot summer. Striped bass feed on just about anything alive that is available. They are a top-level carnivore whether found in salt water or fresh water. Young striped bass eat microcrustaceans, or zooplankton, and midge larvae. As they grow, their diet changes to large crustaceans, mollusks and especially other fish. As adults, striped bass live in roving schools, feeding mostly at night. When chasing forage fish near the surface, the splashing and slashing make a spectacular display. Substantial increases in abundance of striped bass have occurred in the Delaware River since the mid-1980s because of improved river water quality and harvest restrictions.',
    },
    {
        commonName: 'Walleye',
        scientificName: 'Stizostedion vitreum',
        picturePath: walleyeIllustration,
        overview:
            'Walleyes are native to central North America and Canada, including the Ohio River and Great Lakes watersheds. Popular sport fish, they have been extensively stocked. In Pennsylvania they are now found throughout the state, including the Susquehanna and Delaware River watersheds, as well as their original Allegheny River and Lake Erie watershed homes. One of the walleye’s nicknames is “Susquehanna salmon.” It has also been called “yellow pike” and even “pickerel.” All these nicknames put it in the wrong fish family–it’s neither a pike cousin nor a salmon. It’s the biggest, toothiest member of the perch family. The name “walleye” refers to the fish’s large, milky eye that looks luminous when light is shined on it. The eye has a reflecting membrane behind the retina, which causes this effect. The species name “vitreum” means “glassy,” and refers to the luminous eye.',
        characteristics:
            'Walleyes have a long, roundish body, a forked tail and sharp canine teeth in their jaws. The large eye is glassy and reflects light at night. The dorsal fin is separated into two parts, the front portion with 12 to 16 spines, the rear portion with one or two short spines and the rest, soft rays. The anal fin has one or two spines. Walleyes vary in color, ranging from a bluish gray to olive-brown to golden-yellow, with dark- on-light mottling. Side scales may be flecked with gold. Irregular spots on the sides can join to make a vague barred pattern. The belly is light-colored or white. One way to distinguish a walleye from its cousin, the sauger, is to look for the walleye’s dark spot at the rear edge of the front (spiny) section of its dorsal fin. Also, on the walleye, the lower portion of the tail fin is whitish, and so is the bottom margin of its anal fin.',
        habitat:
            'Walleyes live in large lakes, big streams and rivers. They are rarely found in lakes smaller than 50 to 100 acres. Walleyes are abundant in water that is cool and moderately deep, with a gravelly, sandy or rocky bottom. They tolerate turbid and clear water conditions. Walleyes also need relatively cool water, where summer temperatures do not exceed 85 degrees. They use extensive gravel or rubble areas for spawning, and typically inhabit lakes or rivers that have expansive areas deeper than 10 feet.',
        lifespan:
            'Walleyes travel, feed and spawn in schools. They range widely in their home lakes or rivers. Walleyes are one of the first fish to spawn in the spring, sometimes even before the ice has completely melted from the surface or around the shoreline. They return year after year to their spawning sites, sometimes traveling a long distance, so they truly make a “spawning run.” The spawning site may be rocky or gravelly shoals or shallows in a lake or river cove at the base of dams or riffles, or the walleyes may travel up a tributary stream to spawn over flooded marsh grass. The females move into the spawning area first, when water temperatures reach 45 to 50 degrees. The eggs are scattered randomly. The females spawn with several males, usually at night. Eggs are commonly deposited where there is some water movement, whether from stream flow or wave action near the edges of the lake. After they are extruded, the eggs fall into protective spaces in the rocks and gravel. Walleye eggs hatch in about 12 to 18 days, depending on water temperature. Females produce 25,000 eggs per pound of body weight, so a single large female could spawn 500,000 minute eggs or more. When they hatch, walleye fry are about a half-inch long and paper-thin. At first they drift about, absorbing the yolk sac. Young walleyes feed on microscopic animals, or zooplankton. When they reach several inches long, walleyes switch to other small fish as their primary food. Like the adults, they spend much of their time in deep water, moving closer to shore during mornings and evenings to feed. Typically, adult walleyes feed at dusk during the cooler months and at night during the summer. In turbid water, walleyes can be active during the day. The light-reflective coating behind the walleye’s retinas, which gives the eye the glowing appearance, is an adaptation to feeding at night and in dim light. Walleyes are often the top predator fish in their habitat, eating other fishes, as well as frogs, crayfish and large insect larvae. Walleyes can grow to 36 inches. The state record is over 17 pounds. Although walleyes can be caught at any time of day, night fishing or fishing the dim depths with live bait or fishlike lures and jigs is effective for catching walleyes.',
    },
    {
        ...WHITE_PERCH,
        overview:
            'Although the white perch has “perch” in its common name, it does not look like, nor is it closely related to, the yellow perch. The white perch is a temperate bass native to the Atlantic Coast of North America, from Nova Scotia to North Carolina. It also occurs in Lake Ontario and the non-Pennsylvania portion of Lake Erie. In Pennsylvania, white perch are in the lower Delaware River and its estuary, where salt water mixes with fresh water, and in the lower Susquehanna River. They are also becoming more common in Lake Erie since colonization this century. Unfortunately, populations have been established in several southeastern Pennsylvania waters by illegal stocking.',
        characteristics:
            'White perch are silvery chunky-bodied fish, about 2 1/2 or three times as long as they are deep, not counting the tail. Their two dorsal fins are separated by a tiny notch. The first dorsal fin has nine spines. The second has one spine and 12 soft rays. The anal fin has three spines and eight or 10 soft rays. The ventral fins have a spine on the leading edge. When young, white perch may look like striped bass, showing lateral dark stripes. The adult white perch has no stripes, or very faint, interrupted ones. The white perch’s back varies from olive-brown to blackish green, shading to paler silvery-green on the sides, and silver-white on the belly. The fins are dusky.',
        habitat:
            'The white perch can tolerate a wide range of salinity, living in fresh water, landlocked lakes, brackish backwaters and bays, and full-fledged salt water. It is especially at home in ponds connected to the sea.',
        lifespan:
            'White perch are gregarious school fish with seasonal movements. In the spring they migrate upstream from brackish estuaries to spawn in freshwater runs and tributaries. Then they go back to the deeper, saltier water for fall and winter. They are haphazard about spawning, but have great fertility and spawning success. When white perch spawn, the females and males chase one another in open water, milling about and splashing. The males release milt without pairing with specific females. The females extrude thousands of tiny eggs, about 150,000 for a one-pound fish. The eggs stick to anything they touch and hatch in less than five days. White perch populations fluctuate, but they do not seem to be affected by angling pressure because they are very capable of replenishing their numbers. White perch may overpopulate waters and become stunted and slow-growing. Illegal releases of this species have upset the natural balance of fish communities in several southeastern Pennsylvania lakes. White perch average eight to 10 inches long and less than a pound, but in brackish water they can grow to 15 inches or so and about two pounds. They have a long lifespan, and fish 12 years old are not uncommon. Their diet varies with the season. White perch eat bottom- dwelling insect larvae in the winter and early spring. Then during the warmer months they consume large burrowing mayflies, crustaceans, water fleas and small fish. They seldom go into very shallow water, where minnows are abundant, but remain in deep water by day and near shore at sundown. In marine habitats, white perch eat small fish, squid, crabs and shrimp.',
    },
    {
        ...WHITE_SUCKER,
        overview:
            'The white sucker is found across Pennsylvania. It is the most common and widely distributed sucker in the state. Its natural range is from northern Canada to Florida, throughout the uplands of eastern North America, and west to the Plains region. It grows large enough to be sought by anglers, who usually fish for them during the white sucker’s spring spawning run. The genus name “Catostomus” means “inferior mouth,” referring to the bottom position of the mouth on the head. The species name “commersoni” recognizes an early French naturalist, P. Commerson.',
        characteristics:
            'White suckers have a stout cylindrical or tube-shaped body. They reach a maximum length of about 24 inches and five pounds. The upper part of the head and back is olive-brown, shading to light-yellow. There is a dull, silvery sheen on the scales on the sides, and the belly is whitish. In the white sucker, the lower lip is wider than it is high, and is split into two parts. The rounded snout projects very little, or not at all, beyond the tip of the fleshy upper lip. There is a single dorsal fin with 10 to 13 soft rays. During spawning, the male white sucker’s back becomes olive with a bright-lavender sheen, and there is a band of pink or red along each side.',
        habitat:
            'White suckers live in many habitats, from cool, clear headwater streams to warm rivers, to lakes, ponds and reservoirs. They are tolerant of pollution, low oxygen and silted water. Not particularly choosy about their home, white suckers can be found in dense weed beds, or in the rocky pools and riffles of streams.',
        lifespan:
            'In spring, when water temperatures reach about 50 degrees, white suckers make their spawning runs, or migrations. They sometimes enter small gravel-bottomed streams by the thousands. The fish may home in on spawning sites they have visited before. The fish spawn from early May to early June, which has given the white sucker one of its nicknames, “June sucker.” In lakes, they spawn along the edges or on shallow shoals, over gravel. Spawning runs take place at night, with the actual spawning done after dark as well, in shallow water, sometimes with the fish’s back out of the water. Two or more males spawn with each female, pressing against her as eggs and milt are released. The tiny, slightly adhesive eggs scatter over the gravel, generally 20,000 to 50,000 per female. The eggs adhere to the rocks or drift downstream before settling to the bottom. The motions of the spawning act disturb the gravel and help to cover the eggs slightly. Neither parent cares for the eggs or young, which is typical of the sucker family. After they hatch, young white suckers remain in the safety of the gravel for a week or two. Then they move off. White suckers can grow rapidly with sufficient food, and they themselves are an important food for game fish. If not caught or eaten, white suckers can live up to 12 years. White suckers are moderately active in the daytime, but do most of their feeding at sunrise and sunset, when they can move into shallow water in dim light. They are bottom-feeders. They eat both plant and animal material, like zooplankton, aquatic insects, mollusks and crustaceans. White suckers are schooling fish, and can sometimes be seen in groups in the pools of clear streams.',
    },
];

export const QUIZ_FISH = [
    {
        ...AMERICAN_SHAD,
        videoPath: americanShadClip,
        hint: '',
    },
    {
        ...BLUEGILL,
        videoPath: bluegillClip,
        hint: '',
    },
    {
        ...CHANNEL_CATFISH,
        videoPath: channelCatfishClip,
        hint: '',
    },
    {
        ...COMMON_CARP,
        videoPath: commonCarpClip,
        hint: '',
    },
    {
        ...QUILLBACK,
        videoPath: quillbackClip,
        hint: '',
    },
    {
        ...STRIPED_BASS,
        videoPath: stripedBassClip,
        hint: '',
    },
    {
        ...HYBRID_STRIPED_BASS,
        videoPath: stripedBassHybridClip,
        hint: '',
    },
    {
        ...WHITE_PERCH,
        videoPath: whitePerchClip,
        hint: '',
    },
    {
        ...WHITE_SUCKER,
        videoPath: whiteSuckerClip,
        hint: '',
    },
];
