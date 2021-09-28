import React from 'react'

import {
  IconAccessibilityNew,
  IconAccessibleForward,
  IconAccountBalance,
  IconAccountBox,
  IconAccountCircle,
  IconAdd,
  IconAddCircle,
  IconAddCircleOutline,
  IconAlarm,
  IconAlternateEmail,
  IconAnnouncement,
  IconArrowBack,
  IconArrowDownward,
  IconArrowDropDown,
  IconArrowDropUp,
  IconArrowForward,
  IconArrowUpward,
  IconApi,
  IconAssessment,
  IconAttachFile,
  IconAttachMoney,
  IconAutorenew,
  IconBackpack,
  IconBathtub,
  IconBedding,
  IconBookmark,
  IconBugReport,
  IconBuild,
  IconCalendarToday,
  IconCampaign,
  IconCamping,
  IconCancel,
  IconChat,
  IconCheck,
  IconCheckBoxOutlineBlank,
  IconCheckCircle,
  IconCheckCircleOutline,
  IconCheckroom,
  IconCleanHands,
  IconClothes,
  IconClose,
  IconClosedCaption,
  IconCloud,
  IconCode,
  IconComment,
  IconConnectWithoutContact,
  IconConstruction,
  IconConstructionWorker,
  IconContactPage,
  IconContentCopy,
  IconCoronavirus,
  IconCreditCard,
  IconDeck,
  IconDelete,
  IconDeviceThermostat,
  IconDirections,
  IconDirectionsBike,
  IconDirectionsBus,
  IconDirectionsCar,
  IconDirectionsWalk,
  IconDoNotDisturb,
  IconDoNotTouch,
  IconDragHandle,
  IconEco,
  IconElectricalServices,
  IconEmojiEvents,
  IconError,
  IconErrorOutline,
  IconEvent,
  IconExpandLess,
  IconExpandMore,
  IconFacebook,
  IconFastForward,
  IconFastRewind,
  IconFavorite,
  IconFavoriteBorder,
  IconFileDownload,
  IconFilePresent,
  IconFileUpload,
  IconFilterAlt,
  IconFilterList,
  IconFingerprint,
  IconFirstPage,
  IconFlag,
  IconFlickr,
  IconFlight,
  IconFlooding,
  IconFolder,
  IconFolderOpen,
  IconFormatQuote,
  IconFormatSize,
  IconForum,
  IconGithub,
  IconGridView,
  IconGroupAdd,
  IconGroups,
  IconHearing,
  IconHelp,
  IconHelpOutline,
  IconHighlightOff,
  IconHistory,
  IconHome,
  IconHospital,
  IconHotel,
  IconHourglassEmpty,
  IconHurricane,
  IconIdentification,
  IconImage,
  IconInfo,
  IconInfoOutline,
  IconInsights,
  IconInstagram,
  IconKeyboard,
  IconLabel,
  IconLanguage,
  IconLastPage,
  IconLaunch,
  IconLightbulb,
  IconLightbulbOutline,
  IconLink,
  IconLinkOff,
  IconList,
  IconLocalCafe,
  IconLocalFireDepartment,
  IconLocalGasStation,
  IconLocalGroceryStore,
  IconLocalHospital,
  IconLocalLaundryService,
  IconLocalLibrary,
  IconLocalOffer,
  IconLocalParking,
  IconLocalPharmacy,
  IconLocalPolice,
  IconLocalTaxi,
  IconLocationCity,
  IconLocationOn,
  IconLock,
  IconLockOpen,
  IconLockOutline,
  IconLogin,
  IconLogout,
  IconLoop,
  IconMail,
  IconMailOutline,
  IconMap,
  IconMasks,
  IconMedicalServices,
  IconMenu,
  IconMilitaryTech,
  IconMoreHoriz,
  IconMoreVert,
  IconMyLocation,
  IconNavigateBefore,
  IconNavigateNext,
  IconNavigateFarBefore,
  IconNavigateFarNext,
  IconNearMe,
  IconNotifications,
  IconNotificationsActive,
  IconNotificationsNone,
  IconNotificationsOff,
  IconPark,
  IconPeople,
  IconPerson,
  IconPets,
  IconPhone,
  IconPhotoCamera,
  IconPrint,
  IconPriorityHigh,
  IconPublic,
  IconPushPin,
  IconRadioButtonUnchecked,
  IconRain,
  IconReduceCapacity,
  IconRemove,
  IconReport,
  IconRestaurant,
  IconRssFeed,
  IconSafetyDivider,
  IconSanitizer,
  IconSaveAlt,
  IconSevereWeather,
  IconSchedule,
  IconSchool,
  IconScience,
  IconSearch,
  IconSecurity,
  IconSend,
  IconSentimentDissatisfied,
  IconSentimentNeutral,
  IconSentimentSatisfied,
  IconSentimentSatisfiedAlt,
  IconSentimentVeryDissatisfied,
  IconSettings,
  IconShare,
  IconShield,
  IconShoppingBasket,
  IconSnow,
  IconSoap,
  IconSocialDistance,
  IconSortArrow,
  IconSpellcheck,
  IconStar,
  IconStarHalf,
  IconStarOutline,
  IconStore,
  IconSupport,
  IconSupportAgent,
  IconTextFields,
  IconThumbDownAlt,
  IconThumbUpAlt,
  IconTimer,
  IconToggleOff,
  IconToggleOn,
  IconTopic,
  IconTornado,
  IconTranslate,
  IconTrendingDown,
  IconTrendingUp,
  IconTwitter,
  IconUndo,
  IconUnfoldLess,
  IconUnfoldMore,
  IconUpdate,
  IconUploadFile,
  IconVerified,
  IconVerifiedUser,
  IconVisiblity,
  IconVisibilityOff,
  IconVolumeOff,
  IconWarning,
  IconWash,
  IconWifi,
  IconWork,
  IconYoutube,
  IconZoomIn,
  IconZoomOutMap,
  IconZoomOut,
} from './Icons'

type StorybookArgs = {
  size: 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export default {
  title: 'Components/Icons/Individual',
  parameters: {
    happo: false, // Don't take screenshots of individual icon stories
    docs: {
      description: {
        component: `
###USWDS 2.0 Icon component
Source: https://designsystem.digital.gov/components/icon/
`,
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [3, 4, 5, 6, 7, 8, 9],
      },
      defaultValue: 4,
    },
  },
}

export const accessibilityNew = (args: StorybookArgs): React.ReactElement => (
  <IconAccessibilityNew {...args} />
)

export const accessibleForward = (args: StorybookArgs): React.ReactElement => (
  <IconAccessibleForward {...args} />
)

export const accountBalance = (args: StorybookArgs): React.ReactElement => (
  <IconAccountBalance {...args} />
)

export const accountBox = (args: StorybookArgs): React.ReactElement => (
  <IconAccountBox {...args} />
)

export const accountCircle = (args: StorybookArgs): React.ReactElement => (
  <IconAccountCircle {...args} />
)

export const add = (args: StorybookArgs): React.ReactElement => (
  <IconAdd {...args} />
)

export const addCircle = (args: StorybookArgs): React.ReactElement => (
  <IconAddCircle {...args} />
)
export const addCircleOutline = (args: StorybookArgs): React.ReactElement => (
  <IconAddCircleOutline {...args} />
)
export const alarm = (args: StorybookArgs): React.ReactElement => (
  <IconAlarm {...args} />
)
export const alternateEmail = (args: StorybookArgs): React.ReactElement => (
  <IconAlternateEmail {...args} />
)
export const announcement = (args: StorybookArgs): React.ReactElement => (
  <IconAnnouncement {...args} />
)
export const arrowBack = (args: StorybookArgs): React.ReactElement => (
  <IconArrowBack {...args} />
)
export const arrowDownward = (args: StorybookArgs): React.ReactElement => (
  <IconArrowDownward {...args} />
)
export const arrowDropDown = (args: StorybookArgs): React.ReactElement => (
  <IconArrowDropDown {...args} />
)
export const arrowDropUp = (args: StorybookArgs): React.ReactElement => (
  <IconArrowDropUp {...args} />
)
export const arrowForward = (args: StorybookArgs): React.ReactElement => (
  <IconArrowForward {...args} />
)
export const arrowUpward = (args: StorybookArgs): React.ReactElement => (
  <IconArrowUpward {...args} />
)
export const api = (args: StorybookArgs): React.ReactElement => (
  <IconApi {...args} />
)
export const assessment = (args: StorybookArgs): React.ReactElement => (
  <IconAssessment {...args} />
)
export const attachFile = (args: StorybookArgs): React.ReactElement => (
  <IconAttachFile {...args} />
)
export const attachMoney = (args: StorybookArgs): React.ReactElement => (
  <IconAttachMoney {...args} />
)
export const autorenew = (args: StorybookArgs): React.ReactElement => (
  <IconAutorenew {...args} />
)
export const backpack = (args: StorybookArgs): React.ReactElement => (
  <IconBackpack {...args} />
)
export const bathtub = (args: StorybookArgs): React.ReactElement => (
  <IconBathtub {...args} />
)
export const bedding = (args: StorybookArgs): React.ReactElement => (
  <IconBedding {...args} />
)
export const bookmark = (args: StorybookArgs): React.ReactElement => (
  <IconBookmark {...args} />
)
export const bugReport = (args: StorybookArgs): React.ReactElement => (
  <IconBugReport {...args} />
)
export const build = (args: StorybookArgs): React.ReactElement => (
  <IconBuild {...args} />
)
export const calendarToday = (args: StorybookArgs): React.ReactElement => (
  <IconCalendarToday {...args} />
)
export const campaign = (args: StorybookArgs): React.ReactElement => (
  <IconCampaign {...args} />
)
export const camping = (args: StorybookArgs): React.ReactElement => (
  <IconCamping {...args} />
)
export const cancel = (args: StorybookArgs): React.ReactElement => (
  <IconCancel {...args} />
)
export const chat = (args: StorybookArgs): React.ReactElement => (
  <IconChat {...args} />
)
export const check = (args: StorybookArgs): React.ReactElement => (
  <IconCheck {...args} />
)
export const checkBoxOutlineBlank = (
  args: StorybookArgs
): React.ReactElement => <IconCheckBoxOutlineBlank {...args} />
export const checkCircle = (args: StorybookArgs): React.ReactElement => (
  <IconCheckCircle {...args} />
)
export const checkCircleOutline = (args: StorybookArgs): React.ReactElement => (
  <IconCheckCircleOutline {...args} />
)
export const checkroom = (args: StorybookArgs): React.ReactElement => (
  <IconCheckroom {...args} />
)
export const cleanHands = (args: StorybookArgs): React.ReactElement => (
  <IconCleanHands {...args} />
)
export const clothes = (args: StorybookArgs): React.ReactElement => (
  <IconClothes {...args} />
)
export const close = (args: StorybookArgs): React.ReactElement => (
  <IconClose {...args} />
)
export const closedCaption = (args: StorybookArgs): React.ReactElement => (
  <IconClosedCaption {...args} />
)
export const cloud = (args: StorybookArgs): React.ReactElement => (
  <IconCloud {...args} />
)
export const code = (args: StorybookArgs): React.ReactElement => (
  <IconCode {...args} />
)
export const comment = (args: StorybookArgs): React.ReactElement => (
  <IconComment {...args} />
)
export const connectWithoutContact = (
  args: StorybookArgs
): React.ReactElement => <IconConnectWithoutContact {...args} />
export const construction = (args: StorybookArgs): React.ReactElement => (
  <IconConstruction {...args} />
)
export const constructionWorker = (args: StorybookArgs): React.ReactElement => (
  <IconConstructionWorker {...args} />
)
export const contactPage = (args: StorybookArgs): React.ReactElement => (
  <IconContactPage {...args} />
)
export const contentCopy = (args: StorybookArgs): React.ReactElement => (
  <IconContentCopy {...args} />
)
export const coronavirus = (args: StorybookArgs): React.ReactElement => (
  <IconCoronavirus {...args} />
)
export const creditCard = (args: StorybookArgs): React.ReactElement => (
  <IconCreditCard {...args} />
)

export const deck = (args: StorybookArgs): React.ReactElement => (
  <IconDeck {...args} />
)
export const deleteIcon = (args: StorybookArgs): React.ReactElement => (
  <IconDelete {...args} />
)
export const deviceThermostat = (args: StorybookArgs): React.ReactElement => (
  <IconDeviceThermostat {...args} />
)
export const directions = (args: StorybookArgs): React.ReactElement => (
  <IconDirections {...args} />
)
export const directionsBike = (args: StorybookArgs): React.ReactElement => (
  <IconDirectionsBike {...args} />
)
export const directionsBus = (args: StorybookArgs): React.ReactElement => (
  <IconDirectionsBus {...args} />
)
export const directionsCar = (args: StorybookArgs): React.ReactElement => (
  <IconDirectionsCar {...args} />
)
export const directionsWalk = (args: StorybookArgs): React.ReactElement => (
  <IconDirectionsWalk {...args} />
)
export const doNotDisturb = (args: StorybookArgs): React.ReactElement => (
  <IconDoNotDisturb {...args} />
)
export const doNotTouch = (args: StorybookArgs): React.ReactElement => (
  <IconDoNotTouch {...args} />
)
export const dragHandle = (args: StorybookArgs): React.ReactElement => (
  <IconDragHandle {...args} />
)
export const eco = (args: StorybookArgs): React.ReactElement => (
  <IconEco {...args} />
)
export const electricalServices = (args: StorybookArgs): React.ReactElement => (
  <IconElectricalServices {...args} />
)
export const emojiEvents = (args: StorybookArgs): React.ReactElement => (
  <IconEmojiEvents {...args} />
)
export const error = (args: StorybookArgs): React.ReactElement => (
  <IconError {...args} />
)
export const errorOutline = (args: StorybookArgs): React.ReactElement => (
  <IconErrorOutline {...args} />
)
export const event = (args: StorybookArgs): React.ReactElement => (
  <IconEvent {...args} />
)
export const expandLess = (args: StorybookArgs): React.ReactElement => (
  <IconExpandLess {...args} />
)
export const expandMore = (args: StorybookArgs): React.ReactElement => (
  <IconExpandMore {...args} />
)
export const facebook = (args: StorybookArgs): React.ReactElement => (
  <IconFacebook {...args} />
)
export const fastForward = (args: StorybookArgs): React.ReactElement => (
  <IconFastForward {...args} />
)
export const fastRewind = (args: StorybookArgs): React.ReactElement => (
  <IconFastRewind {...args} />
)
export const favorite = (args: StorybookArgs): React.ReactElement => (
  <IconFavorite {...args} />
)
export const favoriteBorder = (args: StorybookArgs): React.ReactElement => (
  <IconFavoriteBorder {...args} />
)
export const fileDownload = (args: StorybookArgs): React.ReactElement => (
  <IconFileDownload {...args} />
)
export const filePresent = (args: StorybookArgs): React.ReactElement => (
  <IconFilePresent {...args} />
)
export const fileUpload = (args: StorybookArgs): React.ReactElement => (
  <IconFileUpload {...args} />
)
export const filterAlt = (args: StorybookArgs): React.ReactElement => (
  <IconFilterAlt {...args} />
)
export const filterList = (args: StorybookArgs): React.ReactElement => (
  <IconFilterList {...args} />
)
export const fingerprint = (args: StorybookArgs): React.ReactElement => (
  <IconFingerprint {...args} />
)
export const firstPage = (args: StorybookArgs): React.ReactElement => (
  <IconFirstPage {...args} />
)
export const flag = (args: StorybookArgs): React.ReactElement => (
  <IconFlag {...args} />
)
export const flickr = (args: StorybookArgs): React.ReactElement => (
  <IconFlickr {...args} />
)
export const flight = (args: StorybookArgs): React.ReactElement => (
  <IconFlight {...args} />
)
export const flooding = (args: StorybookArgs): React.ReactElement => (
  <IconFlooding {...args} />
)
export const folder = (args: StorybookArgs): React.ReactElement => (
  <IconFolder {...args} />
)
export const folderOpen = (args: StorybookArgs): React.ReactElement => (
  <IconFolderOpen {...args} />
)
export const formatQuote = (args: StorybookArgs): React.ReactElement => (
  <IconFormatQuote {...args} />
)
export const formatSize = (args: StorybookArgs): React.ReactElement => (
  <IconFormatSize {...args} />
)
export const forum = (args: StorybookArgs): React.ReactElement => (
  <IconForum {...args} />
)
export const github = (args: StorybookArgs): React.ReactElement => (
  <IconGithub {...args} />
)
export const gridView = (args: StorybookArgs): React.ReactElement => (
  <IconGridView {...args} />
)
export const groupAdd = (args: StorybookArgs): React.ReactElement => (
  <IconGroupAdd {...args} />
)
export const groups = (args: StorybookArgs): React.ReactElement => (
  <IconGroups {...args} />
)
export const hearing = (args: StorybookArgs): React.ReactElement => (
  <IconHearing {...args} />
)
export const help = (args: StorybookArgs): React.ReactElement => (
  <IconHelp {...args} />
)
export const helpOutline = (args: StorybookArgs): React.ReactElement => (
  <IconHelpOutline {...args} />
)
export const highlightOff = (args: StorybookArgs): React.ReactElement => (
  <IconHighlightOff {...args} />
)
export const history = (args: StorybookArgs): React.ReactElement => (
  <IconHistory {...args} />
)
export const home = (args: StorybookArgs): React.ReactElement => (
  <IconHome {...args} />
)
export const hospital = (args: StorybookArgs): React.ReactElement => (
  <IconHospital {...args} />
)
export const hotel = (args: StorybookArgs): React.ReactElement => (
  <IconHotel {...args} />
)
export const hourglassEmpty = (args: StorybookArgs): React.ReactElement => (
  <IconHourglassEmpty {...args} />
)
export const hurricane = (args: StorybookArgs): React.ReactElement => (
  <IconHurricane {...args} />
)
export const identification = (args: StorybookArgs): React.ReactElement => (
  <IconIdentification {...args} />
)
export const image = (args: StorybookArgs): React.ReactElement => (
  <IconImage {...args} />
)
export const info = (args: StorybookArgs): React.ReactElement => (
  <IconInfo {...args} />
)
export const infoOutline = (args: StorybookArgs): React.ReactElement => (
  <IconInfoOutline {...args} />
)
export const insights = (args: StorybookArgs): React.ReactElement => (
  <IconInsights {...args} />
)
export const instagram = (args: StorybookArgs): React.ReactElement => (
  <IconInstagram {...args} />
)
export const keyboard = (args: StorybookArgs): React.ReactElement => (
  <IconKeyboard {...args} />
)
export const label = (args: StorybookArgs): React.ReactElement => (
  <IconLabel {...args} />
)
export const language = (args: StorybookArgs): React.ReactElement => (
  <IconLanguage {...args} />
)
export const lastPage = (args: StorybookArgs): React.ReactElement => (
  <IconLastPage {...args} />
)
export const launch = (args: StorybookArgs): React.ReactElement => (
  <IconLaunch {...args} />
)
export const lightbulb = (args: StorybookArgs): React.ReactElement => (
  <IconLightbulb {...args} />
)
export const lightbulbOutline = (args: StorybookArgs): React.ReactElement => (
  <IconLightbulbOutline {...args} />
)
export const link = (args: StorybookArgs): React.ReactElement => (
  <IconLink {...args} />
)
export const linkOff = (args: StorybookArgs): React.ReactElement => (
  <IconLinkOff {...args} />
)
export const list = (args: StorybookArgs): React.ReactElement => (
  <IconList {...args} />
)
export const localCafe = (args: StorybookArgs): React.ReactElement => (
  <IconLocalCafe {...args} />
)
export const localFireDepartment = (
  args: StorybookArgs
): React.ReactElement => <IconLocalFireDepartment {...args} />
export const localGasStation = (args: StorybookArgs): React.ReactElement => (
  <IconLocalGasStation {...args} />
)
export const localGroceryStore = (args: StorybookArgs): React.ReactElement => (
  <IconLocalGroceryStore {...args} />
)
export const localHospital = (args: StorybookArgs): React.ReactElement => (
  <IconLocalHospital {...args} />
)
export const localLaundryService = (
  args: StorybookArgs
): React.ReactElement => <IconLocalLaundryService {...args} />
export const localLibrary = (args: StorybookArgs): React.ReactElement => (
  <IconLocalLibrary {...args} />
)
export const localOffer = (args: StorybookArgs): React.ReactElement => (
  <IconLocalOffer {...args} />
)
export const localParking = (args: StorybookArgs): React.ReactElement => (
  <IconLocalParking {...args} />
)
export const localPharmacy = (args: StorybookArgs): React.ReactElement => (
  <IconLocalPharmacy {...args} />
)
export const localPolice = (args: StorybookArgs): React.ReactElement => (
  <IconLocalPolice {...args} />
)
export const localTaxi = (args: StorybookArgs): React.ReactElement => (
  <IconLocalTaxi {...args} />
)
export const locationCity = (args: StorybookArgs): React.ReactElement => (
  <IconLocationCity {...args} />
)
export const locationOn = (args: StorybookArgs): React.ReactElement => (
  <IconLocationOn {...args} />
)
export const lock = (args: StorybookArgs): React.ReactElement => (
  <IconLock {...args} />
)
export const lockOpen = (args: StorybookArgs): React.ReactElement => (
  <IconLockOpen {...args} />
)
export const lockOutline = (args: StorybookArgs): React.ReactElement => (
  <IconLockOutline {...args} />
)
export const login = (args: StorybookArgs): React.ReactElement => (
  <IconLogin {...args} />
)
export const logout = (args: StorybookArgs): React.ReactElement => (
  <IconLogout {...args} />
)
export const loop = (args: StorybookArgs): React.ReactElement => (
  <IconLoop {...args} />
)
export const mail = (args: StorybookArgs): React.ReactElement => (
  <IconMail {...args} />
)
export const mailOutline = (args: StorybookArgs): React.ReactElement => (
  <IconMailOutline {...args} />
)
export const map = (args: StorybookArgs): React.ReactElement => (
  <IconMap {...args} />
)
export const masks = (args: StorybookArgs): React.ReactElement => (
  <IconMasks {...args} />
)
export const medicalServices = (args: StorybookArgs): React.ReactElement => (
  <IconMedicalServices {...args} />
)
export const menu = (args: StorybookArgs): React.ReactElement => (
  <IconMenu {...args} />
)
export const militaryTech = (args: StorybookArgs): React.ReactElement => (
  <IconMilitaryTech {...args} />
)
export const moreHoriz = (args: StorybookArgs): React.ReactElement => (
  <IconMoreHoriz {...args} />
)
export const moreVert = (args: StorybookArgs): React.ReactElement => (
  <IconMoreVert {...args} />
)
export const myLocation = (args: StorybookArgs): React.ReactElement => (
  <IconMyLocation {...args} />
)
export const navigateBefore = (args: StorybookArgs): React.ReactElement => (
  <IconNavigateBefore {...args} />
)
export const navigateNext = (args: StorybookArgs): React.ReactElement => (
  <IconNavigateNext {...args} />
)
export const navigateFarBefore = (args: StorybookArgs): React.ReactElement => (
  <IconNavigateFarBefore {...args} />
)
export const navigateFarNext = (args: StorybookArgs): React.ReactElement => (
  <IconNavigateFarNext {...args} />
)
export const nearMe = (args: StorybookArgs): React.ReactElement => (
  <IconNearMe {...args} />
)
export const notifications = (args: StorybookArgs): React.ReactElement => (
  <IconNotifications {...args} />
)
export const notificationsActive = (
  args: StorybookArgs
): React.ReactElement => <IconNotificationsActive {...args} />
export const notificationsNone = (args: StorybookArgs): React.ReactElement => (
  <IconNotificationsNone {...args} />
)
export const notificationsOff = (args: StorybookArgs): React.ReactElement => (
  <IconNotificationsOff {...args} />
)
export const park = (args: StorybookArgs): React.ReactElement => (
  <IconPark {...args} />
)
export const people = (args: StorybookArgs): React.ReactElement => (
  <IconPeople {...args} />
)
export const person = (args: StorybookArgs): React.ReactElement => (
  <IconPerson {...args} />
)
export const pets = (args: StorybookArgs): React.ReactElement => (
  <IconPets {...args} />
)
export const phone = (args: StorybookArgs): React.ReactElement => (
  <IconPhone {...args} />
)
export const photoCamera = (args: StorybookArgs): React.ReactElement => (
  <IconPhotoCamera {...args} />
)
export const print = (args: StorybookArgs): React.ReactElement => (
  <IconPrint {...args} />
)
export const priorityHigh = (args: StorybookArgs): React.ReactElement => (
  <IconPriorityHigh {...args} />
)
export const publicIcon = (args: StorybookArgs): React.ReactElement => (
  <IconPublic {...args} />
)
export const pushPin = (args: StorybookArgs): React.ReactElement => (
  <IconPushPin {...args} />
)
export const radioButtonUnchecked = (
  args: StorybookArgs
): React.ReactElement => <IconRadioButtonUnchecked {...args} />
export const rain = (args: StorybookArgs): React.ReactElement => (
  <IconRain {...args} />
)
export const reduceCapacity = (args: StorybookArgs): React.ReactElement => (
  <IconReduceCapacity {...args} />
)
export const remove = (args: StorybookArgs): React.ReactElement => (
  <IconRemove {...args} />
)
export const report = (args: StorybookArgs): React.ReactElement => (
  <IconReport {...args} />
)
export const restaurant = (args: StorybookArgs): React.ReactElement => (
  <IconRestaurant {...args} />
)
export const rssFeed = (args: StorybookArgs): React.ReactElement => (
  <IconRssFeed {...args} />
)
export const safetyDivider = (args: StorybookArgs): React.ReactElement => (
  <IconSafetyDivider {...args} />
)
export const sanitizer = (args: StorybookArgs): React.ReactElement => (
  <IconSanitizer {...args} />
)
export const saveAlt = (args: StorybookArgs): React.ReactElement => (
  <IconSaveAlt {...args} />
)
export const severeWeather = (args: StorybookArgs): React.ReactElement => (
  <IconSevereWeather {...args} />
)
export const schedule = (args: StorybookArgs): React.ReactElement => (
  <IconSchedule {...args} />
)
export const school = (args: StorybookArgs): React.ReactElement => (
  <IconSchool {...args} />
)
export const science = (args: StorybookArgs): React.ReactElement => (
  <IconScience {...args} />
)
export const search = (args: StorybookArgs): React.ReactElement => (
  <IconSearch {...args} />
)
export const security = (args: StorybookArgs): React.ReactElement => (
  <IconSecurity {...args} />
)
export const send = (args: StorybookArgs): React.ReactElement => (
  <IconSend {...args} />
)
export const sentimentDissatisfied = (
  args: StorybookArgs
): React.ReactElement => <IconSentimentDissatisfied {...args} />
export const sentimentNeutral = (args: StorybookArgs): React.ReactElement => (
  <IconSentimentNeutral {...args} />
)
export const sentimentSatisfied = (args: StorybookArgs): React.ReactElement => (
  <IconSentimentSatisfied {...args} />
)
export const sentimentSatisfiedAlt = (
  args: StorybookArgs
): React.ReactElement => <IconSentimentSatisfiedAlt {...args} />
export const sentimentVeryDissatisfied = (
  args: StorybookArgs
): React.ReactElement => <IconSentimentVeryDissatisfied {...args} />
export const settings = (args: StorybookArgs): React.ReactElement => (
  <IconSettings {...args} />
)
export const share = (args: StorybookArgs): React.ReactElement => (
  <IconShare {...args} />
)
export const shield = (args: StorybookArgs): React.ReactElement => (
  <IconShield {...args} />
)
export const shoppingBasket = (args: StorybookArgs): React.ReactElement => (
  <IconShoppingBasket {...args} />
)
export const snow = (args: StorybookArgs): React.ReactElement => (
  <IconSnow {...args} />
)
export const soap = (args: StorybookArgs): React.ReactElement => (
  <IconSoap {...args} />
)
export const socialDistance = (args: StorybookArgs): React.ReactElement => (
  <IconSocialDistance {...args} />
)
export const sortArrow = (args: StorybookArgs): React.ReactElement => (
  <IconSortArrow {...args} />
)
export const spellcheck = (args: StorybookArgs): React.ReactElement => (
  <IconSpellcheck {...args} />
)
export const star = (args: StorybookArgs): React.ReactElement => (
  <IconStar {...args} />
)
export const starHalf = (args: StorybookArgs): React.ReactElement => (
  <IconStarHalf {...args} />
)
export const starOutline = (args: StorybookArgs): React.ReactElement => (
  <IconStarOutline {...args} />
)
export const store = (args: StorybookArgs): React.ReactElement => (
  <IconStore {...args} />
)
export const support = (args: StorybookArgs): React.ReactElement => (
  <IconSupport {...args} />
)
export const supportAgent = (args: StorybookArgs): React.ReactElement => (
  <IconSupportAgent {...args} />
)
export const textFields = (args: StorybookArgs): React.ReactElement => (
  <IconTextFields {...args} />
)
export const thumbDownAlt = (args: StorybookArgs): React.ReactElement => (
  <IconThumbDownAlt {...args} />
)
export const thumbUpAlt = (args: StorybookArgs): React.ReactElement => (
  <IconThumbUpAlt {...args} />
)
export const timer = (args: StorybookArgs): React.ReactElement => (
  <IconTimer {...args} />
)
export const toggleOff = (args: StorybookArgs): React.ReactElement => (
  <IconToggleOff {...args} />
)
export const toggleOn = (args: StorybookArgs): React.ReactElement => (
  <IconToggleOn {...args} />
)
export const topic = (args: StorybookArgs): React.ReactElement => (
  <IconTopic {...args} />
)
export const tornado = (args: StorybookArgs): React.ReactElement => (
  <IconTornado {...args} />
)
export const translate = (args: StorybookArgs): React.ReactElement => (
  <IconTranslate {...args} />
)
export const trendingDown = (args: StorybookArgs): React.ReactElement => (
  <IconTrendingDown {...args} />
)
export const trendingUp = (args: StorybookArgs): React.ReactElement => (
  <IconTrendingUp {...args} />
)
export const twitter = (args: StorybookArgs): React.ReactElement => (
  <IconTwitter {...args} />
)
export const undo = (args: StorybookArgs): React.ReactElement => (
  <IconUndo {...args} />
)
export const unfoldLess = (args: StorybookArgs): React.ReactElement => (
  <IconUnfoldLess {...args} />
)
export const unfoldMore = (args: StorybookArgs): React.ReactElement => (
  <IconUnfoldMore {...args} />
)
export const update = (args: StorybookArgs): React.ReactElement => (
  <IconUpdate {...args} />
)
export const uploadFile = (args: StorybookArgs): React.ReactElement => (
  <IconUploadFile {...args} />
)
export const verified = (args: StorybookArgs): React.ReactElement => (
  <IconVerified {...args} />
)
export const verifiedUser = (args: StorybookArgs): React.ReactElement => (
  <IconVerifiedUser {...args} />
)
export const visibility = (args: StorybookArgs): React.ReactElement => (
  <IconVisiblity {...args} />
)
export const visibilityOff = (args: StorybookArgs): React.ReactElement => (
  <IconVisibilityOff {...args} />
)
export const volumeOff = (args: StorybookArgs): React.ReactElement => (
  <IconVolumeOff {...args} />
)
export const warning = (args: StorybookArgs): React.ReactElement => (
  <IconWarning {...args} />
)
export const wash = (args: StorybookArgs): React.ReactElement => (
  <IconWash {...args} />
)
export const wifi = (args: StorybookArgs): React.ReactElement => (
  <IconWifi {...args} />
)
export const work = (args: StorybookArgs): React.ReactElement => (
  <IconWork {...args} />
)
export const youtube = (args: StorybookArgs): React.ReactElement => (
  <IconYoutube {...args} />
)
export const zoomIn = (args: StorybookArgs): React.ReactElement => (
  <IconZoomIn {...args} />
)
export const zoomOutMap = (args: StorybookArgs): React.ReactElement => (
  <IconZoomOutMap {...args} />
)
export const zoomOut = (args: StorybookArgs): React.ReactElement => (
  <IconZoomOut {...args} />
)
