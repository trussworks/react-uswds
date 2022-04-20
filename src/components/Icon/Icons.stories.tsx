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
  title: 'Components/Icons/All',
  parameters: {
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

export const allIcons = (args: StorybookArgs): React.ReactElement => (
  <div>
    <IconAccessibilityNew {...args} />
    <IconAccessibleForward {...args} />
    <IconAccountBalance {...args} />
    <IconAccountBox {...args} />
    <IconAccountCircle {...args} />
    <IconAdd {...args} />
    <IconAddCircle {...args} />
    <IconAddCircleOutline {...args} />
    <IconAlarm {...args} />
    <IconAlternateEmail {...args} />
    <IconAnnouncement {...args} />
    <IconArrowBack {...args} />
    <IconArrowDownward {...args} />
    <IconArrowDropDown {...args} />
    <IconArrowDropUp {...args} />
    <IconArrowForward {...args} />
    <IconArrowUpward {...args} />
    <IconApi {...args} />
    <IconAssessment {...args} />
    <IconAttachFile {...args} />
    <IconAttachMoney {...args} />
    <IconAutorenew {...args} />
    <IconBackpack {...args} />
    <IconBathtub {...args} />
    <IconBedding {...args} />
    <IconBookmark {...args} />
    <IconBugReport {...args} />
    <IconBuild {...args} />
    <IconCalendarToday {...args} />
    <IconCampaign {...args} />
    <IconCamping {...args} />
    <IconCancel {...args} />
    <IconChat {...args} />
    <IconCheck {...args} />
    <IconCheckBoxOutlineBlank {...args} />
    <IconCheckCircle {...args} />
    <IconCheckCircleOutline {...args} />
    <IconCheckroom {...args} />
    <IconCleanHands {...args} />
    <IconClothes {...args} />
    <IconClose {...args} />
    <IconClosedCaption {...args} />
    <IconCloud {...args} />
    <IconCode {...args} />
    <IconComment {...args} />
    <IconConnectWithoutContact {...args} />
    <IconConstruction {...args} />
    <IconConstructionWorker {...args} />
    <IconContactPage {...args} />
    <IconContentCopy {...args} />
    <IconCoronavirus {...args} />
    <IconCreditCard {...args} />
    <IconDeck {...args} />
    <IconDelete {...args} />
    <IconDeviceThermostat {...args} />
    <IconDirections {...args} />
    <IconDirectionsBike {...args} />
    <IconDirectionsBus {...args} />
    <IconDirectionsCar {...args} />
    <IconDirectionsWalk {...args} />
    <IconDoNotDisturb {...args} />
    <IconDoNotTouch {...args} />
    <IconDragHandle {...args} />
    <IconEco {...args} />
    <IconElectricalServices {...args} />
    <IconEmojiEvents {...args} />
    <IconError {...args} />
    <IconErrorOutline {...args} />
    <IconEvent {...args} />
    <IconExpandLess {...args} />
    <IconExpandMore {...args} />
    <IconFacebook {...args} />
    <IconFastForward {...args} />
    <IconFastRewind {...args} />
    <IconFavorite {...args} />
    <IconFavoriteBorder {...args} />
    <IconFileDownload {...args} />
    <IconFilePresent {...args} />
    <IconFileUpload {...args} />
    <IconFilterAlt {...args} />
    <IconFilterList {...args} />
    <IconFingerprint {...args} />
    <IconFirstPage {...args} />
    <IconFlag {...args} />
    <IconFlickr {...args} />
    <IconFlight {...args} />
    <IconFlooding {...args} />
    <IconFolder {...args} />
    <IconFolderOpen {...args} />
    <IconFormatQuote {...args} />
    <IconFormatSize {...args} />
    <IconForum {...args} />
    <IconGithub {...args} />
    <IconGridView {...args} />
    <IconGroupAdd {...args} />
    <IconGroups {...args} />
    <IconHearing {...args} />
    <IconHelp {...args} />
    <IconHelpOutline {...args} />
    <IconHighlightOff {...args} />
    <IconHistory {...args} />
    <IconHome {...args} />
    <IconHospital {...args} />
    <IconHotel {...args} />
    <IconHourglassEmpty {...args} />
    <IconHurricane {...args} />
    <IconIdentification {...args} />
    <IconImage {...args} />
    <IconInfo {...args} />
    <IconInfoOutline {...args} />
    <IconInsights {...args} />
    <IconInstagram {...args} />
    <IconKeyboard {...args} />
    <IconLabel {...args} />
    <IconLanguage {...args} />
    <IconLastPage {...args} />
    <IconLaunch {...args} />
    <IconLightbulb {...args} />
    <IconLightbulbOutline {...args} />
    <IconLink {...args} />
    <IconLinkOff {...args} />
    <IconList {...args} />
    <IconLocalCafe {...args} />
    <IconLocalFireDepartment {...args} />
    <IconLocalGasStation {...args} />
    <IconLocalGroceryStore {...args} />
    <IconLocalHospital {...args} />
    <IconLocalLaundryService {...args} />
    <IconLocalLibrary {...args} />
    <IconLocalOffer {...args} />
    <IconLocalParking {...args} />
    <IconLocalPharmacy {...args} />
    <IconLocalPolice {...args} />
    <IconLocalTaxi {...args} />
    <IconLocationCity {...args} />
    <IconLocationOn {...args} />
    <IconLock {...args} />
    <IconLockOpen {...args} />
    <IconLockOutline {...args} />
    <IconLogin {...args} />
    <IconLogout {...args} />
    <IconLoop {...args} />
    <IconMail {...args} />
    <IconMailOutline {...args} />
    <IconMap {...args} />
    <IconMasks {...args} />
    <IconMedicalServices {...args} />
    <IconMenu {...args} />
    <IconMilitaryTech {...args} />
    <IconMoreHoriz {...args} />
    <IconMoreVert {...args} />
    <IconMyLocation {...args} />
    <IconNavigateBefore {...args} />
    <IconNavigateNext {...args} />
    <IconNavigateFarBefore {...args} />
    <IconNavigateFarNext {...args} />
    <IconNearMe {...args} />
    <IconNotifications {...args} />
    <IconNotificationsActive {...args} />
    <IconNotificationsNone {...args} />
    <IconNotificationsOff {...args} />
    <IconPark {...args} />
    <IconPeople {...args} />
    <IconPerson {...args} />
    <IconPets {...args} />
    <IconPhone {...args} />
    <IconPhotoCamera {...args} />
    <IconPrint {...args} />
    <IconPriorityHigh {...args} />
    <IconPublic {...args} />
    <IconPushPin {...args} />
    <IconRadioButtonUnchecked {...args} />
    <IconRain {...args} />
    <IconReduceCapacity {...args} />
    <IconRemove {...args} />
    <IconReport {...args} />
    <IconRestaurant {...args} />
    <IconRssFeed {...args} />
    <IconSafetyDivider {...args} />
    <IconSanitizer {...args} />
    <IconSaveAlt {...args} />
    <IconSevereWeather {...args} />
    <IconSchedule {...args} />
    <IconSchool {...args} />
    <IconScience {...args} />
    <IconSearch {...args} />
    <IconSecurity {...args} />
    <IconSend {...args} />
    <IconSentimentDissatisfied {...args} />
    <IconSentimentNeutral {...args} />
    <IconSentimentSatisfied {...args} />
    <IconSentimentSatisfiedAlt {...args} />
    <IconSentimentVeryDissatisfied {...args} />
    <IconSettings {...args} />
    <IconShare {...args} />
    <IconShield {...args} />
    <IconShoppingBasket {...args} />
    <IconSnow {...args} />
    <IconSoap {...args} />
    <IconSocialDistance {...args} />
    <IconSortArrow {...args} />
    <IconSpellcheck {...args} />
    <IconStar {...args} />
    <IconStarHalf {...args} />
    <IconStarOutline {...args} />
    <IconStore {...args} />
    <IconSupport {...args} />
    <IconSupportAgent {...args} />
    <IconTextFields {...args} />
    <IconThumbDownAlt {...args} />
    <IconThumbUpAlt {...args} />
    <IconTimer {...args} />
    <IconToggleOff {...args} />
    <IconToggleOn {...args} />
    <IconTopic {...args} />
    <IconTornado {...args} />
    <IconTranslate {...args} />
    <IconTrendingDown {...args} />
    <IconTrendingUp {...args} />
    <IconTwitter {...args} />
    <IconUndo {...args} />
    <IconUnfoldLess {...args} />
    <IconUnfoldMore {...args} />
    <IconUpdate {...args} />
    <IconUploadFile {...args} />
    <IconVerified {...args} />
    <IconVerifiedUser {...args} />
    <IconVisiblity {...args} />
    <IconVisibilityOff {...args} />
    <IconVolumeOff {...args} />
    <IconWarning {...args} />
    <IconWash {...args} />
    <IconWifi {...args} />
    <IconWork {...args} />
    <IconYoutube {...args} />
    <IconZoomIn {...args} />
    <IconZoomOutMap {...args} />
    <IconZoomOut {...args} />
  </div>
)
