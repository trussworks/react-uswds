import React from 'react'

import { Icon } from './Icons'

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
###USWDS 3.0 Icon component

Source: https://designsystem.digital.gov/components/icon/
`,
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'number',
        min: 3,
        max: 9,
        step: 1,
      },
    },
    'aria-label': {
      name: 'aria-label',
      description: 'Add this if and only aria-hidden is false',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    size: 4,
    'aria-hidden': true,
  },
}

export const AccessibilityNew = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AccessibilityNew {...args} />
)

export const AccessibleForward = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AccessibleForward {...args} />
)

export const AccountBalance = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AccountBalance {...args} />
)

export const AccountBox = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AccountBox {...args} />
)

export const AccountCircle = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AccountCircle {...args} />
)

export const Add = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Add {...args} />
)

export const AddCircle = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AddCircle {...args} />
)

export const AddCircleOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AddCircleOutline {...args} />
)

export const Alarm = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Alarm {...args} />
)

export const AlternateEmail = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AlternateEmail {...args} />
)

export const Announcement = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Announcement {...args} />
)

export const ArrowBack = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ArrowBack {...args} />
)

export const ArrowDownward = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ArrowDownward {...args} />
)

export const ArrowDropDown = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ArrowDropDown {...args} />
)

export const ArrowDropUp = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ArrowDropUp {...args} />
)

export const ArrowForward = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ArrowForward {...args} />
)

export const ArrowUpward = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ArrowUpward {...args} />
)

export const Api = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Api {...args} />
)

export const Assessment = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Assessment {...args} />
)

export const AttachFile = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AttachFile {...args} />
)

export const AttachMoney = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.AttachMoney {...args} />
)

export const Autorenew = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Autorenew {...args} />
)

export const Backpack = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Backpack {...args} />
)

export const Bathtub = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Bathtub {...args} />
)

export const Bedding = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Bedding {...args} />
)

export const Bookmark = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Bookmark {...args} />
)

export const BugReport = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.BugReport {...args} />
)

export const Build = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Build {...args} />
)

export const CalendarToday = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.CalendarToday {...args} />
)

export const Campaign = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Campaign {...args} />
)

export const Camping = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Camping {...args} />
)

export const Cancel = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Cancel {...args} />
)

export const Chat = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Chat {...args} />
)

export const Check = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Check {...args} />
)

export const CheckBoxOutlineBlank = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.CheckBoxOutlineBlank {...args} />
export const CheckCircle = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.CheckCircle {...args} />
)

export const CheckCircleOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.CheckCircleOutline {...args} />
)

export const Checkroom = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Checkroom {...args} />
)

export const CleanHands = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.CleanHands {...args} />
)

export const Clothes = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Clothes {...args} />
)

export const Close = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Close {...args} />
)

export const ClosedCaption = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ClosedCaption {...args} />
)

export const Cloud = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Cloud {...args} />
)

export const Code = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Code {...args} />
)

export const Comment = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Comment {...args} />
)

export const ConnectWithoutContact = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.ConnectWithoutContact {...args} />
export const Construction = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Construction {...args} />
)

export const ConstructionWorker = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ConstructionWorker {...args} />
)

export const ContactPage = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ContactPage {...args} />
)

export const ContentCopy = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ContentCopy {...args} />
)

export const Coronavirus = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Coronavirus {...args} />
)

export const CreditCard = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.CreditCard {...args} />
)

export const Deck = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Deck {...args} />
)

export const DeleteIcon = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Delete {...args} />
)

export const DeviceThermostat = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.DeviceThermostat {...args} />
)

export const Directions = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Directions {...args} />
)

export const DirectionsBike = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.DirectionsBike {...args} />
)

export const DirectionsBus = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.DirectionsBus {...args} />
)

export const DirectionsCar = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.DirectionsCar {...args} />
)

export const DirectionsWalk = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.DirectionsWalk {...args} />
)

export const DoNotDisturb = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.DoNotDisturb {...args} />
)

export const DoNotTouch = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.DoNotTouch {...args} />
)

export const DragHandle = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.DragHandle {...args} />
)

export const Eco = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Eco {...args} />
)

export const Edit = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Edit {...args} />
)

export const ElectricalServices = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ElectricalServices {...args} />
)

export const EmojiEvents = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.EmojiEvents {...args} />
)

export const Error = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Error {...args} />
)

export const ErrorOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ErrorOutline {...args} />
)

export const Event = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Event {...args} />
)

export const ExpandLess = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ExpandLess {...args} />
)

export const ExpandMore = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ExpandMore {...args} />
)

export const Facebook = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Facebook {...args} />
)

export const FastForward = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FastForward {...args} />
)

export const FastRewind = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FastRewind {...args} />
)

export const Favorite = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Favorite {...args} />
)

export const FavoriteBorder = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FavoriteBorder {...args} />
)

export const Fax = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Fax {...args} />
)

export const FileDownload = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FileDownload {...args} />
)

export const FilePresent = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FilePresent {...args} />
)

export const FileUpload = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FileUpload {...args} />
)

export const FilterAlt = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FilterAlt {...args} />
)

export const FilterList = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FilterList {...args} />
)

export const Fingerprint = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Fingerprint {...args} />
)

export const FirstPage = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FirstPage {...args} />
)

export const Flag = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Flag {...args} />
)

export const Flickr = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Flickr {...args} />
)

export const Flight = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Flight {...args} />
)

export const Flooding = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Flooding {...args} />
)

export const Folder = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Folder {...args} />
)

export const FolderOpen = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FolderOpen {...args} />
)

export const FormatQuote = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FormatQuote {...args} />
)

export const FormatSize = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.FormatSize {...args} />
)

export const Forum = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Forum {...args} />
)

export const Github = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Github {...args} />
)

export const GridView = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.GridView {...args} />
)

export const GroupAdd = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.GroupAdd {...args} />
)

export const Groups = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Groups {...args} />
)

export const Hearing = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Hearing {...args} />
)

export const Help = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Help {...args} />
)

export const HelpOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.HelpOutline {...args} />
)

export const HighlightOff = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.HighlightOff {...args} />
)

export const History = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.History {...args} />
)

export const Home = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Home {...args} />
)

export const Hospital = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Hospital {...args} />
)

export const Hotel = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Hotel {...args} />
)

export const HourglassEmpty = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.HourglassEmpty {...args} />
)

export const Hurricane = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Hurricane {...args} />
)

export const Identification = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Identification {...args} />
)

export const Image = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Image {...args} />
)

export const Info = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Info {...args} />
)

export const InfoOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.InfoOutline {...args} />
)

export const Insights = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Insights {...args} />
)

export const Instagram = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Instagram {...args} />
)

export const Keyboard = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Keyboard {...args} />
)

export const Label = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Label {...args} />
)

export const Language = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Language {...args} />
)

export const LastPage = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LastPage {...args} />
)

export const Launch = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Launch {...args} />
)

export const Lightbulb = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Lightbulb {...args} />
)

export const LightbulbOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LightbulbOutline {...args} />
)

export const Link = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Link {...args} />
)

export const LinkedIn = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LinkedIn {...args} />
)

export const LinkOff = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LinkOff {...args} />
)

export const List = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.List {...args} />
)

export const LocalCafe = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalCafe {...args} />
)

export const LocalFireDepartment = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.LocalFireDepartment {...args} />
export const LocalGasStation = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalGasStation {...args} />
)

export const LocalGroceryStore = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalGroceryStore {...args} />
)

export const LocalHospital = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalHospital {...args} />
)

export const LocalLaundryService = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.LocalLaundryService {...args} />
export const LocalLibrary = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalLibrary {...args} />
)

export const LocalOffer = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalOffer {...args} />
)

export const LocalParking = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalParking {...args} />
)

export const LocalPharmacy = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalPharmacy {...args} />
)

export const LocalPolice = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalPolice {...args} />
)

export const LocalTaxi = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocalTaxi {...args} />
)

export const LocationCity = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocationCity {...args} />
)

export const LocationOn = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LocationOn {...args} />
)

export const Lock = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Lock {...args} />
)

export const LockOpen = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LockOpen {...args} />
)

export const LockOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.LockOutline {...args} />
)

export const Login = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Login {...args} />
)

export const Logout = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Logout {...args} />
)

export const Loop = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Loop {...args} />
)

export const Mail = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Mail {...args} />
)

export const MailOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.MailOutline {...args} />
)

export const Map = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Map {...args} />
)

export const Masks = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Masks {...args} />
)

export const MedicalServices = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.MedicalServices {...args} />
)

export const Menu = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Menu {...args} />
)

export const MilitaryTech = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.MilitaryTech {...args} />
)

export const MoreHoriz = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.MoreHoriz {...args} />
)

export const MoreVert = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.MoreVert {...args} />
)

export const MyLocation = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.MyLocation {...args} />
)

export const NavigateBefore = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.NavigateBefore {...args} />
)

export const NavigateNext = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.NavigateNext {...args} />
)

export const NavigateFarBefore = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.NavigateFarBefore {...args} />
)

export const NavigateFarNext = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.NavigateFarNext {...args} />
)

export const NearMe = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.NearMe {...args} />
)

export const Notifications = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Notifications {...args} />
)

export const NotificationsActive = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.NotificationsActive {...args} />
export const NotificationsNone = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.NotificationsNone {...args} />
)

export const NotificationsOff = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.NotificationsOff {...args} />
)

export const Park = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Park {...args} />
)

export const People = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.People {...args} />
)

export const Person = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Person {...args} />
)

export const Pets = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Pets {...args} />
)

export const Phone = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Phone {...args} />
)

export const PhotoCamera = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.PhotoCamera {...args} />
)

export const Print = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Print {...args} />
)

export const PriorityHigh = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.PriorityHigh {...args} />
)

export const PublicIcon = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Public {...args} />
)

export const PushPin = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.PushPin {...args} />
)

export const RadioButtonUnchecked = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.RadioButtonUnchecked {...args} />
export const Rain = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Rain {...args} />
)

export const ReduceCapacity = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ReduceCapacity {...args} />
)

export const Remove = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Remove {...args} />
)

export const RemoveCircle = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.RemoveCircle {...args} />
)

export const Report = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Report {...args} />
)

export const Restaurant = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Restaurant {...args} />
)

export const RssFeed = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.RssFeed {...args} />
)

export const SafetyDivider = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.SafetyDivider {...args} />
)

export const Sanitizer = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Sanitizer {...args} />
)

export const SaveAlt = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.SaveAlt {...args} />
)

export const SevereWeather = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.SevereWeather {...args} />
)

export const Schedule = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Schedule {...args} />
)

export const School = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.School {...args} />
)

export const Science = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Science {...args} />
)

export const Search = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Search {...args} />
)

export const Security = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Security {...args} />
)

export const Send = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Send {...args} />
)

export const SentimentDissatisfied = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.SentimentDissatisfied {...args} />
export const SentimentNeutral = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.SentimentNeutral {...args} />
)

export const SentimentSatisfied = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.SentimentSatisfied {...args} />
)

export const SentimentSatisfiedAlt = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.SentimentSatisfiedAlt {...args} />
export const SentimentVeryDissatisfied = (
  args: StorybookArgs
): React.ReactElement<any> => <Icon.SentimentVeryDissatisfied {...args} />
export const Settings = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Settings {...args} />
)

export const Share = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Share {...args} />
)

export const Shield = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Shield {...args} />
)

export const ShoppingBasket = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ShoppingBasket {...args} />
)

export const Snow = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Snow {...args} />
)

export const Soap = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Soap {...args} />
)

export const SocialDistance = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.SocialDistance {...args} />
)

export const SortArrow = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.SortArrow {...args} />
)

export const Spellcheck = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Spellcheck {...args} />
)

export const Star = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Star {...args} />
)

export const StarHalf = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.StarHalf {...args} />
)

export const StarOutline = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.StarOutline {...args} />
)

export const Store = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Store {...args} />
)

export const Support = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Support {...args} />
)

export const SupportAgent = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.SupportAgent {...args} />
)

export const TextFields = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.TextFields {...args} />
)

export const ThumbDownAlt = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ThumbDownAlt {...args} />
)

export const ThumbUpAlt = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ThumbUpAlt {...args} />
)

export const Timer = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Timer {...args} />
)

export const ToggleOff = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ToggleOff {...args} />
)

export const ToggleOn = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ToggleOn {...args} />
)

export const Topic = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Topic {...args} />
)

export const Tornado = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Tornado {...args} />
)

export const Translate = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Translate {...args} />
)

export const TrendingDown = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.TrendingDown {...args} />
)

export const TrendingUp = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.TrendingUp {...args} />
)

export const Twitter = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Twitter {...args} />
)

export const Undo = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Undo {...args} />
)

export const UnfoldLess = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.UnfoldLess {...args} />
)

export const UnfoldMore = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.UnfoldMore {...args} />
)

export const Update = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Update {...args} />
)

export const UploadFile = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.UploadFile {...args} />
)

export const Verified = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Verified {...args} />
)

export const VerifiedUser = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.VerifiedUser {...args} />
)

export const Visibility = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Visibility {...args} />
)

export const VisibilityOff = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.VisibilityOff {...args} />
)

export const VolumeOff = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.VolumeOff {...args} />
)

export const Warning = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Warning {...args} />
)

export const Wash = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Wash {...args} />
)

export const Wifi = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Wifi {...args} />
)

export const Work = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Work {...args} />
)

export const X = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.X {...args} />
)

export const Youtube = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.Youtube {...args} />
)

export const ZoomIn = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ZoomIn {...args} />
)

export const ZoomOutMap = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ZoomOutMap {...args} />
)

export const ZoomOut = (args: StorybookArgs): React.ReactElement<any> => (
  <Icon.ZoomOut {...args} />
)
