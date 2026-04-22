export type DayPlan = {
  day: number
  title: string
  desc: string
}

export type TravelPlan = {
  title: string
  shortDesc: string
  days: number
  image: string
  galleryImages: string[]
  dayPlans: DayPlan[]
}

const createGalleryImagePaths = (coverImagePath: string) => {
  const directoryPath = coverImagePath.replace(/\/cover\.[^.]+$/i, '')

  if (directoryPath === coverImagePath) {
    return []
  }

  return Array.from({ length: 4 }, (_, index) => `${directoryPath}/gallery/${index + 1}.png`)
}

const rawPlans: Omit<TravelPlan, 'galleryImages'>[] = [
  {
    title: 'Paro, Thimphu, Phobjikha & Punakha Journey',
    shortDesc:
      'An 8-day Bhutan journey through Thimphu, Phobjikha, Punakha, and Paro with scenic passes, valley walks, and Tiger\'s Nest.',
    days: 8,
    image: '/img/plans/cultural/bhutan-beyond-the-valleys/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro and transfer to Thimphu',
        desc: 'Meet your guide in Paro, visit a few heritage stops if time allows, and continue to Thimphu for the first overnight stay.',
      },
      {
        day: 2,
        title: 'Thimphu cultural highlights',
        desc: 'Explore the capital, including memorials, monasteries, and viewpoints that set the tone for the journey.',
      },
      {
        day: 3,
        title: 'Drive to Phobjikha via Dochula Pass',
        desc: 'Cross Dochula Pass and descend into the open Phobjikha valley for nature walks and mountain scenery.',
      },
      {
        day: 4,
        title: 'Phobjikha to Punakha',
        desc: 'Continue into Punakha for riverside walks, dzong views, and a slower valley day.',
      },
      {
        day: 5,
        title: 'Return to Paro',
        desc: 'Travel back to Paro and settle into the valley for the final stretch of the trip.',
      },
      {
        day: 6,
        title: 'Tiger\'s Nest hike',
        desc: 'Trek to Taktsang Monastery for the signature Bhutan experience and the strongest mountain views of the itinerary.',
      },
      {
        day: 7,
        title: 'Optional mountain pass or leisure day',
        desc: 'Use the extra time for a relaxed valley day, a pass excursion, or local exploration in Paro.',
      },
      {
        day: 8,
        title: 'Departure',
        desc: 'Breakfast and transfer to the airport for departure.',
      },
    ],
  },
  {
    title: 'Thimphu, Punakha & Paro Highlights',
    shortDesc:
      'A 5-day Bhutan immersion blending Thimphu, Punakha, Paro, and Tiger\'s Nest with a compact mix of culture and outdoor movement.',
    days: 5,
    image: '/img/plans/cultural/bhutan-immersion-nature-culture/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival and Thimphu discovery',
        desc: 'Land in Paro, transfer to Thimphu, and settle into the capital with light sightseeing and a first evening walk.',
      },
      {
        day: 2,
        title: 'Punakha scenic journey',
        desc: 'Drive via Dochula Pass into Punakha for riverside views, monastery stops, and open valley landscapes.',
      },
      {
        day: 3,
        title: 'Paro cultural exploration',
        desc: 'Continue to Paro for heritage sites, town time, and a slower mountain-valley atmosphere.',
      },
      {
        day: 4,
        title: 'Tiger\'s Nest and farmhouse experience',
        desc: 'Hike to Taktsang Monastery and end the day with a traditional Bhutanese farmhouse meal and hot stone bath.',
      },
      {
        day: 5,
        title: 'Departure',
        desc: 'Relaxed breakfast and transfer to the airport.',
      },
    ],
  },
  {
    title: 'Phobjikha Valley Adventure',
    shortDesc:
      'An 8-day Bhutan journey through Paro, Thimphu, Phobjikha, and Punakha with a stronger focus on hikes, valleys, and river landscapes.',
    days: 8,
    image: '/img/plans/cultural/cultural-odyssey-adventure/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro and transfer to Thimphu',
        desc: 'Arrive in Paro, make the road transfer to Thimphu, and take in the first views of western Bhutan.',
      },
      {
        day: 2,
        title: 'Thimphu cultural exploration',
        desc: 'See the capital city through its monuments, viewpoints, and local market energy.',
      },
      {
        day: 3,
        title: 'Dochula Pass and Phobjikha',
        desc: 'Cross the pass into Phobjikha and spend the afternoon on valley trails and open terrain.',
      },
      {
        day: 4,
        title: 'Punakha valley adventure',
        desc: 'Move into Punakha for a day of monastery stops, river views, and optional outdoor activity.',
      },
      {
        day: 5,
        title: 'Back to Paro',
        desc: 'Return to Paro through the mountain roads and enjoy the valley at a slower pace.',
      },
      {
        day: 6,
        title: 'Tiger\'s Nest hike',
        desc: 'Make the climb to Taktsang Monastery and spend the afternoon at one of Bhutan\'s defining landmarks.',
      },
      {
        day: 7,
        title: 'Leisure or pass excursion',
        desc: 'Leave room for rest, a short hike, or a scenic drive depending on the weather and energy.',
      },
      {
        day: 8,
        title: 'Departure',
        desc: 'Breakfast and airport transfer.',
      },
    ],
  },
  {
    title: 'Bumthang Sacred Circuit',
    shortDesc:
      'A 12-day central Bhutan circuit through Paro, Thimphu, Phobjikha, Bumthang, and Punakha with valleys, passes, and heritage walks.',
    days: 12,
    image: '/img/plans/cultural/essence-of-origins/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro and transfer to Thimphu',
        desc: 'Arrive in Paro and settle into Thimphu after a scenic transfer through the western valleys.',
      },
      {
        day: 2,
        title: 'Thimphu city day',
        desc: 'Explore the capital\'s main cultural stops and viewpoints.',
      },
      {
        day: 3,
        title: 'Optional hike or monastery visit',
        desc: 'Use a flexible day for a forest hike, monastery walk, or easy city exploration.',
      },
      {
        day: 4,
        title: 'Phobjikha via Dochula Pass',
        desc: 'Drive across the pass and into the broad Phobjikha valley for a nature-focused day.',
      },
      {
        day: 5,
        title: 'Cross into Bumthang',
        desc: 'Continue through central Bhutan and arrive in the Bumthang region for a more remote setting.',
      },
      {
        day: 6,
        title: 'Bumthang sacred sites',
        desc: 'Visit the valley\'s important monasteries, temples, and village stops.',
      },
      {
        day: 7,
        title: 'Return toward Punakha',
        desc: 'Travel west again and enjoy the long mountain drive back into greener valleys.',
      },
      {
        day: 8,
        title: 'Punakha exploration',
        desc: 'Spend the day around Punakha Dzong, the rivers, and the suspension bridge.',
      },
      {
        day: 9,
        title: 'Adventure day in Punakha',
        desc: 'Choose a hike, a river activity, or a slower valley walk depending on conditions.',
      },
      {
        day: 10,
        title: 'Paro heritage day',
        desc: 'Continue to Paro for dzongs, temples, and time in the valley town.',
      },
      {
        day: 11,
        title: 'Tiger\'s Nest hike',
        desc: 'Climb to Taktsang Monastery for the defining finale of the itinerary.',
      },
      {
        day: 12,
        title: 'Departure',
        desc: 'Breakfast and transfer to the airport.',
      },
    ],
  },
  {
    title: 'Bhutan Highlands Circuit',
    shortDesc:
      'A 13-day route through Thimphu, Phobjikha, Bumthang, Trongsa, Punakha, and Paro with ridge walks, monasteries, and mountain passes.',
    days: 13,
    image: '/img/plans/cultural/sacred-shores-silent-hills/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival and Thimphu transfer',
        desc: 'Land in Paro, transfer to Thimphu, and ease into the trip with a first look at Bhutan\'s capital.',
      },
      {
        day: 2,
        title: 'Thimphu highlights',
        desc: 'Visit the core cultural landmarks and viewpoints around the capital.',
      },
      {
        day: 3,
        title: 'Optional hike day',
        desc: 'Choose a valley hike or monastery walk for a more active day outside the city.',
      },
      {
        day: 4,
        title: 'Phobjikha via Dochula Pass',
        desc: 'Cross the pass and descend into Phobjikha for highland scenery and open nature.',
      },
      {
        day: 5,
        title: 'Bumthang approach',
        desc: 'Travel east toward Bumthang and settle into a more remote mountain landscape.',
      },
      {
        day: 6,
        title: 'Bumthang sacred sites',
        desc: 'Spend the day around Bhutan\'s major spiritual landmarks in the Bumthang valley.',
      },
      {
        day: 7,
        title: 'Trongsa stopover',
        desc: 'Continue through central Bhutan and visit Trongsa before heading west again.',
      },
      {
        day: 8,
        title: 'Punakha arrival',
        desc: 'Reach Punakha and enjoy the valley setting, river views, and dzong atmosphere.',
      },
      {
        day: 9,
        title: 'Punakha outdoor day',
        desc: 'Add a hike, bridge walk, or river-side exploration to the itinerary.',
      },
      {
        day: 10,
        title: 'Paro heritage',
        desc: 'Move back to Paro and spend the afternoon around the town and its heritage sites.',
      },
      {
        day: 11,
        title: 'Tiger\'s Nest',
        desc: 'Hike to Taktsang Monastery for the most recognisable viewpoint in Bhutan.',
      },
      {
        day: 12,
        title: 'Chele La or rest day',
        desc: 'Leave time for a pass excursion or recovery day depending on pace and weather.',
      },
      {
        day: 13,
        title: 'Departure',
        desc: 'Breakfast and airport transfer.',
      },
    ],
  },
  {
    title: 'Thimphu, Punakha & Paro Escape',
    shortDesc:
      'A 6-day mountain journey across Thimphu, Punakha, and Paro with valley drives, heritage visits, and Tiger\'s Nest.',
    days: 6,
    image: '/img/plans/cultural/happiness-in-the-himalayas/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival and transfer to Thimphu',
        desc: 'Land in Paro and drive to Thimphu for a first night in the capital.',
      },
      {
        day: 2,
        title: 'Thimphu cultural exploration',
        desc: 'See the major monuments, viewpoints, and market areas around the city.',
      },
      {
        day: 3,
        title: 'Punakha scenic drive',
        desc: 'Cross Dochula Pass and continue down into Punakha for a river-valley day.',
      },
      {
        day: 4,
        title: 'Return to Paro',
        desc: 'Drive back to Paro and spend the afternoon in the valley town.',
      },
      {
        day: 5,
        title: 'Tiger\'s Nest hike',
        desc: 'Climb to Taktsang Monastery and enjoy the classic Bhutan hike.',
      },
      {
        day: 6,
        title: 'Departure',
        desc: 'Final breakfast and airport transfer.',
      },
    ],
  },
  {
    title: 'Thimphu, Punakha, Phobjikha & Paro Circuit',
    shortDesc:
      'A 10-day Bhutan circuit through Thimphu, Punakha, Phobjikha, Bumthang, and Paro with pass crossings, valley hikes, and Tiger\'s Nest.',
    days: 10,
    image: '/img/plans/cultural/the-bond-beyond-borders/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival and transfer to Thimphu',
        desc: 'Begin in Paro and settle in Thimphu after the scenic drive from the airport.',
      },
      {
        day: 2,
        title: 'Thimphu living traditions',
        desc: 'Explore the city through its monasteries, viewpoints, and cultural stops.',
      },
      {
        day: 3,
        title: 'Punakha via Dochula Pass',
        desc: 'Drive into Punakha for a valley and river-focused day.',
      },
      {
        day: 4,
        title: 'Phobjikha valley',
        desc: 'Continue into the high valley for open landscape, trails, and a slower pace.',
      },
      {
        day: 5,
        title: 'Bumthang via central highlands',
        desc: 'Cross the central passes and settle into Bumthang for the night.',
      },
      {
        day: 6,
        title: 'Jakar and Bumthang exploration',
        desc: 'Spend the day around the valley temples, monasteries, and village roads.',
      },
      {
        day: 7,
        title: 'Return to Punakha',
        desc: 'Head west again and break up the drive with scenic stops.',
      },
      {
        day: 8,
        title: 'Paro heritage',
        desc: 'Continue to Paro and visit the valley\'s heritage sites.',
      },
      {
        day: 9,
        title: 'Tiger\'s Nest and optional Chele La',
        desc: 'Hike to Taktsang Monastery and keep the rest of the day flexible for a pass excursion.',
      },
      {
        day: 10,
        title: 'Departure',
        desc: 'Breakfast and transfer to the airport.',
      },
    ],
  },
  {
    title: 'Chele La Ridge & Haa Valley Trek',
    shortDesc:
      'A 9-day western Bhutan journey combining Paro, Haa, Thimphu, and Punakha with a scenic ridge trek and high Himalayan views.',
    days: 9,
    image: '/img/plans/treks/chele-la-ridge-trek/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro',
        desc: 'Land in Paro and spend the day settling into the valley and preparing for the trek.',
      },
      {
        day: 2,
        title: 'Tiger\'s Nest and Chele La to Haa',
        desc: 'Hike to Taktsang Monastery, then cross Chele La Pass and continue into Haa Valley.',
      },
      {
        day: 3,
        title: 'Trek day 1',
        desc: 'Start the ridge trek from Haa through villages, fields, and yak herder camps.',
      },
      {
        day: 4,
        title: 'Trek day 2',
        desc: 'Climb higher across ridges and meadow country with broad mountain views.',
      },
      {
        day: 5,
        title: 'Trek day 3 and return',
        desc: 'Complete the ridge section, descend from the trail, and head back toward Thimphu.',
      },
      {
        day: 6,
        title: 'Thimphu cultural exploration',
        desc: 'Spend a recovery day around the capital with light sightseeing and market time.',
      },
      {
        day: 7,
        title: 'Punakha via Dochula Pass',
        desc: 'Cross Dochula and continue into Punakha for valley and river scenery.',
      },
      {
        day: 8,
        title: 'Return to Paro',
        desc: 'Drive back to Paro for the final night in the west.',
      },
      {
        day: 9,
        title: 'Departure',
        desc: 'Breakfast and airport transfer.',
      },
    ],
  },
  {
    title: 'Dagala Thousand Lakes Trek',
    shortDesc:
      'A 5-day high-altitude trek across the Dagala range featuring alpine lakes, panoramas, and yak herder camps.',
    days: 5,
    image: '/img/plans/treks/dagala-trek/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Genekha to Gur',
        desc: 'Leave Thimphu, reach Genekha, and begin the climb into the Dagala hills to Gur campsite.',
      },
      {
        day: 2,
        title: 'Gur to Labatama',
        desc: 'Trek along ridgelines and climb toward the lake basin around Labatama.',
      },
      {
        day: 3,
        title: 'Alpine lake exploration',
        desc: 'Spend the day walking between the nearby lakes and high viewpoints in the Dagala range.',
      },
      {
        day: 4,
        title: 'Labatama to Panka',
        desc: 'Cross the high saddle and descend toward Panka camp.',
      },
      {
        day: 5,
        title: 'Return to Thimphu',
        desc: 'Finish the trek and return to Thimphu.',
      },
    ],
  },
  {
    title: 'Jomolhari Base Camp Trek',
    shortDesc:
      'A 10-day classic Himalayan trek through the Paro and Lingzhi valleys with remote camps, high passes, and Jomolhari Base Camp.',
    days: 10,
    image: '/img/plans/treks/jomolhari-trek/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Bhutan',
        desc: 'Reach Paro and prepare for the high-altitude trek with an easy first day in the valley.',
      },
      {
        day: 2,
        title: 'Paro valley to Shana',
        desc: 'Start the trek through the Paro Chhu valley on a gradual ascent toward the first campsite.',
      },
      {
        day: 3,
        title: 'Shana to Jangothang',
        desc: 'Climb into alpine meadow country and arrive at Jomolhari Base Camp.',
      },
      {
        day: 4,
        title: 'Acclimatization at Jangothang',
        desc: 'Take an acclimatization hike or rest at camp beneath the mountains.',
      },
      {
        day: 5,
        title: 'Jangothang to Lingzhi',
        desc: 'Cross the high pass and continue into the Lingzhi valley.',
      },
      {
        day: 6,
        title: 'Lingzhi to Chebisa',
        desc: 'Descend through higher village country and camp at Chebisa.',
      },
      {
        day: 7,
        title: 'Return through the high valley',
        desc: 'Continue the route back through the high country with long mountain views.',
      },
      {
        day: 8,
        title: 'Approach the exit valley',
        desc: 'Complete the lower part of the trek and return toward the roadhead.',
      },
      {
        day: 9,
        title: 'Back to Paro',
        desc: 'Re-enter Paro and enjoy a night back in the valley town.',
      },
      {
        day: 10,
        title: 'Departure',
        desc: 'Breakfast and transfer to the airport.',
      },
    ],
  },
  {
    title: 'Nub Tshonapata Alpine Lakes Trek',
    shortDesc:
      'A 12-day remote western Bhutan trek through Haa and high mountain lakes to Nub Tshonapata, with long ridge walks and alpine camps.',
    days: 12,
    image: '/img/plans/treks/nub-tshonapata-trek/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro',
        desc: 'Arrive in Paro and settle into the valley before the trek starts.',
      },
      {
        day: 2,
        title: 'Paro to Haa via Chele La',
        desc: 'Hike to Tiger\'s Nest if time allows, then drive across Chele La into Haa Valley.',
      },
      {
        day: 3,
        title: 'Trek day 1 to Chhewakha',
        desc: 'Begin trekking through forest and meadow terrain toward the first campsite.',
      },
      {
        day: 4,
        title: 'Trek day 2 to Tshokam Lake',
        desc: 'Climb into higher alpine country and reach the lake camp.',
      },
      {
        day: 5,
        title: 'Trek day 3 to Nub Tshonapata',
        desc: 'Continue upward to the lake basin at the heart of the trek.',
      },
      {
        day: 6,
        title: 'Acclimatization and exploration',
        desc: 'Use the high camp for side hikes, lake views, and recovery time.',
      },
      {
        day: 7,
        title: 'Descend toward Jangchulakha',
        desc: 'Leave the main lake basin and start the gradual descent.',
      },
      {
        day: 8,
        title: 'Return to Haa Valley',
        desc: 'Complete the trekking section and return to the valley floor.',
      },
      {
        day: 9,
        title: 'Haa to Thimphu',
        desc: 'Drive east and stop at key viewpoints on the way back to the capital.',
      },
      {
        day: 10,
        title: 'Thimphu cultural day',
        desc: 'Explore the capital at a slower pace after the trek.',
      },
      {
        day: 11,
        title: 'Punakha excursion',
        desc: 'Head into Punakha for a final valley day and a softer finish.',
      },
      {
        day: 12,
        title: 'Departure',
        desc: 'Breakfast and airport transfer.',
      },
    ],
  },
  {
    title: 'Druk Path Paro-Thimphu Trek',
    shortDesc:
      'A 6-day classic trek linking Paro and Thimphu through high mountain passes, alpine lakes, and yak pastures.',
    days: 6,
    image: '/img/plans/treks/druk-path-trek/cover.png',
    dayPlans: [
      {
        day: 1,
        title: 'Paro to Jele Dzong',
        desc: 'Start the trek near Paro and climb to Jele Dzong for the first night.',
      },
      {
        day: 2,
        title: 'Jele Dzong to Jangchulakha',
        desc: 'Continue along the ridgeline through forest and open views.',
      },
      {
        day: 3,
        title: 'Jangchulakha to Jimilangtsho',
        desc: 'Trek to the lake country and camp near Jimilangtsho.',
      },
      {
        day: 4,
        title: 'Jimilangtsho to Simkota',
        desc: 'Move over the higher section of the route toward the Simkota lakes.',
      },
      {
        day: 5,
        title: 'Simkota to Thimphu',
        desc: 'Descend through the final high passes and arrive in Thimphu.',
      },
      {
        day: 6,
        title: 'Departure',
        desc: 'Breakfast and airport transfer.',
      },
    ],
  },
]

export const plans: TravelPlan[] = rawPlans.map((plan) => ({
  ...plan,
  galleryImages: createGalleryImagePaths(plan.image),
}))

export const getPlanSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const getPlanBySlug = (slug: string) =>
  plans.find((plan) => getPlanSlug(plan.title) === slug)

export const getPlanPath = (plan: TravelPlan) => `/tours/${getPlanSlug(plan.title)}`

export const getPlanImageSrc = (plan: TravelPlan) => plan.image
