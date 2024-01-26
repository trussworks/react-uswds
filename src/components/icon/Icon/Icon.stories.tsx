import React from 'react'

import Icons from './Icons'

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
        type: 'select',
        options: [3, 4, 5, 6, 7, 8, 9],
      },
    },
  },
  args: {
    size: 4,
  },
}

export const AccessibilityNew = (args: StorybookArgs): React.ReactElement => (
  <Icons.AccessibilityNew {...args} />
)

export const AccessibleForward = (args: StorybookArgs): React.ReactElement => (
  <Icons.AccessibleForward {...args} />
)

export const AccountBalance = (args: StorybookArgs): React.ReactElement => (
  <Icons.AccountBalance {...args} />
)

export const AccountBox = (args: StorybookArgs): React.ReactElement => (
  <Icons.AccountBox {...args} />
)

export const AccountCircle = (args: StorybookArgs): React.ReactElement => (
  <Icons.AccountCircle {...args} />
)

export const Add = (args: StorybookArgs): React.ReactElement => (
  <Icons.Add {...args} />
)

export const AddCircle = (args: StorybookArgs): React.ReactElement => (
  <Icons.AddCircle {...args} />
)

export const AddCircleOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.AddCircleOutline {...args} />
)

export const Alarm = (args: StorybookArgs): React.ReactElement => (
  <Icons.Alarm {...args} />
)

export const AlternateEmail = (args: StorybookArgs): React.ReactElement => (
  <Icons.AlternateEmail {...args} />
)

export const Announcement = (args: StorybookArgs): React.ReactElement => (
  <Icons.Announcement {...args} />
)

export const ArrowBack = (args: StorybookArgs): React.ReactElement => (
  <Icons.ArrowBack {...args} />
)

export const ArrowDownward = (args: StorybookArgs): React.ReactElement => (
  <Icons.ArrowDownward {...args} />
)

export const ArrowDropDown = (args: StorybookArgs): React.ReactElement => (
  <Icons.ArrowDropDown {...args} />
)

export const ArrowDropUp = (args: StorybookArgs): React.ReactElement => (
  <Icons.ArrowDropUp {...args} />
)

export const ArrowForward = (args: StorybookArgs): React.ReactElement => (
  <Icons.ArrowForward {...args} />
)

export const ArrowUpward = (args: StorybookArgs): React.ReactElement => (
  <Icons.ArrowUpward {...args} />
)

export const Api = (args: StorybookArgs): React.ReactElement => (
  <Icons.Api {...args} />
)

export const Assessment = (args: StorybookArgs): React.ReactElement => (
  <Icons.Assessment {...args} />
)

export const AttachFile = (args: StorybookArgs): React.ReactElement => (
  <Icons.AttachFile {...args} />
)

export const AttachMoney = (args: StorybookArgs): React.ReactElement => (
  <Icons.AttachMoney {...args} />
)

export const Autorenew = (args: StorybookArgs): React.ReactElement => (
  <Icons.Autorenew {...args} />
)

export const Backpack = (args: StorybookArgs): React.ReactElement => (
  <Icons.Backpack {...args} />
)

export const Bathtub = (args: StorybookArgs): React.ReactElement => (
  <Icons.Bathtub {...args} />
)

export const Bedding = (args: StorybookArgs): React.ReactElement => (
  <Icons.Bedding {...args} />
)

export const Bookmark = (args: StorybookArgs): React.ReactElement => (
  <Icons.Bookmark {...args} />
)

export const BugReport = (args: StorybookArgs): React.ReactElement => (
  <Icons.BugReport {...args} />
)

export const Build = (args: StorybookArgs): React.ReactElement => (
  <Icons.Build {...args} />
)

export const CalendarToday = (args: StorybookArgs): React.ReactElement => (
  <Icons.CalendarToday {...args} />
)

export const Campaign = (args: StorybookArgs): React.ReactElement => (
  <Icons.Campaign {...args} />
)

export const Camping = (args: StorybookArgs): React.ReactElement => (
  <Icons.Camping {...args} />
)

export const Cancel = (args: StorybookArgs): React.ReactElement => (
  <Icons.Cancel {...args} />
)

export const Chat = (args: StorybookArgs): React.ReactElement => (
  <Icons.Chat {...args} />
)

export const Check = (args: StorybookArgs): React.ReactElement => (
  <Icons.Check {...args} />
)

export const CheckBoxOutlineBlank = (
  args: StorybookArgs
): React.ReactElement => <Icons.CheckBoxOutlineBlank {...args} />
export const CheckCircle = (args: StorybookArgs): React.ReactElement => (
  <Icons.CheckCircle {...args} />
)

export const CheckCircleOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.CheckCircleOutline {...args} />
)

export const Checkroom = (args: StorybookArgs): React.ReactElement => (
  <Icons.Checkroom {...args} />
)

export const CleanHands = (args: StorybookArgs): React.ReactElement => (
  <Icons.CleanHands {...args} />
)

export const Clothes = (args: StorybookArgs): React.ReactElement => (
  <Icons.Clothes {...args} />
)

export const Close = (args: StorybookArgs): React.ReactElement => (
  <Icons.Close {...args} />
)

export const ClosedCaption = (args: StorybookArgs): React.ReactElement => (
  <Icons.ClosedCaption {...args} />
)

export const Cloud = (args: StorybookArgs): React.ReactElement => (
  <Icons.Cloud {...args} />
)

export const Code = (args: StorybookArgs): React.ReactElement => (
  <Icons.Code {...args} />
)

export const Comment = (args: StorybookArgs): React.ReactElement => (
  <Icons.Comment {...args} />
)

export const ConnectWithoutContact = (
  args: StorybookArgs
): React.ReactElement => <Icons.ConnectWithoutContact {...args} />
export const Construction = (args: StorybookArgs): React.ReactElement => (
  <Icons.Construction {...args} />
)

export const ConstructionWorker = (args: StorybookArgs): React.ReactElement => (
  <Icons.ConstructionWorker {...args} />
)

export const ContactPage = (args: StorybookArgs): React.ReactElement => (
  <Icons.ContactPage {...args} />
)

export const ContentCopy = (args: StorybookArgs): React.ReactElement => (
  <Icons.ContentCopy {...args} />
)

export const Coronavirus = (args: StorybookArgs): React.ReactElement => (
  <Icons.Coronavirus {...args} />
)

export const CreditCard = (args: StorybookArgs): React.ReactElement => (
  <Icons.CreditCard {...args} />
)

export const Deck = (args: StorybookArgs): React.ReactElement => (
  <Icons.Deck {...args} />
)

export const DeleteIcon = (args: StorybookArgs): React.ReactElement => (
  <Icons.Delete {...args} />
)

export const DeviceThermostat = (args: StorybookArgs): React.ReactElement => (
  <Icons.DeviceThermostat {...args} />
)

export const Directions = (args: StorybookArgs): React.ReactElement => (
  <Icons.Directions {...args} />
)

export const DirectionsBike = (args: StorybookArgs): React.ReactElement => (
  <Icons.DirectionsBike {...args} />
)

export const DirectionsBus = (args: StorybookArgs): React.ReactElement => (
  <Icons.DirectionsBus {...args} />
)

export const DirectionsCar = (args: StorybookArgs): React.ReactElement => (
  <Icons.DirectionsCar {...args} />
)

export const DirectionsWalk = (args: StorybookArgs): React.ReactElement => (
  <Icons.DirectionsWalk {...args} />
)

export const DoNotDisturb = (args: StorybookArgs): React.ReactElement => (
  <Icons.DoNotDisturb {...args} />
)

export const DoNotTouch = (args: StorybookArgs): React.ReactElement => (
  <Icons.DoNotTouch {...args} />
)

export const DragHandle = (args: StorybookArgs): React.ReactElement => (
  <Icons.DragHandle {...args} />
)

export const Eco = (args: StorybookArgs): React.ReactElement => (
  <Icons.Eco {...args} />
)

export const Edit = (args: StorybookArgs): React.ReactElement => (
  <Icons.Edit {...args} />
)

export const ElectricalServices = (args: StorybookArgs): React.ReactElement => (
  <Icons.ElectricalServices {...args} />
)

export const EmojiEvents = (args: StorybookArgs): React.ReactElement => (
  <Icons.EmojiEvents {...args} />
)

export const Error = (args: StorybookArgs): React.ReactElement => (
  <Icons.Error {...args} />
)

export const ErrorOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.ErrorOutline {...args} />
)

export const Event = (args: StorybookArgs): React.ReactElement => (
  <Icons.Event {...args} />
)

export const ExpandLess = (args: StorybookArgs): React.ReactElement => (
  <Icons.ExpandLess {...args} />
)

export const ExpandMore = (args: StorybookArgs): React.ReactElement => (
  <Icons.ExpandMore {...args} />
)

export const Facebook = (args: StorybookArgs): React.ReactElement => (
  <Icons.Facebook {...args} />
)

export const FastForward = (args: StorybookArgs): React.ReactElement => (
  <Icons.FastForward {...args} />
)

export const FastRewind = (args: StorybookArgs): React.ReactElement => (
  <Icons.FastRewind {...args} />
)

export const Favorite = (args: StorybookArgs): React.ReactElement => (
  <Icons.Favorite {...args} />
)

export const FavoriteBorder = (args: StorybookArgs): React.ReactElement => (
  <Icons.FavoriteBorder {...args} />
)

export const Fax = (args: StorybookArgs): React.ReactElement => (
  <Icons.Fax {...args} />
)

export const FileDownload = (args: StorybookArgs): React.ReactElement => (
  <Icons.FileDownload {...args} />
)

export const FilePresent = (args: StorybookArgs): React.ReactElement => (
  <Icons.FilePresent {...args} />
)

export const FileUpload = (args: StorybookArgs): React.ReactElement => (
  <Icons.FileUpload {...args} />
)

export const FilterAlt = (args: StorybookArgs): React.ReactElement => (
  <Icons.FilterAlt {...args} />
)

export const FilterList = (args: StorybookArgs): React.ReactElement => (
  <Icons.FilterList {...args} />
)

export const Fingerprint = (args: StorybookArgs): React.ReactElement => (
  <Icons.Fingerprint {...args} />
)

export const FirstPage = (args: StorybookArgs): React.ReactElement => (
  <Icons.FirstPage {...args} />
)

export const Flag = (args: StorybookArgs): React.ReactElement => (
  <Icons.Flag {...args} />
)

export const Flickr = (args: StorybookArgs): React.ReactElement => (
  <Icons.Flickr {...args} />
)

export const Flight = (args: StorybookArgs): React.ReactElement => (
  <Icons.Flight {...args} />
)

export const Flooding = (args: StorybookArgs): React.ReactElement => (
  <Icons.Flooding {...args} />
)

export const Folder = (args: StorybookArgs): React.ReactElement => (
  <Icons.Folder {...args} />
)

export const FolderOpen = (args: StorybookArgs): React.ReactElement => (
  <Icons.FolderOpen {...args} />
)

export const FormatQuote = (args: StorybookArgs): React.ReactElement => (
  <Icons.FormatQuote {...args} />
)

export const FormatSize = (args: StorybookArgs): React.ReactElement => (
  <Icons.FormatSize {...args} />
)

export const Forum = (args: StorybookArgs): React.ReactElement => (
  <Icons.Forum {...args} />
)

export const Github = (args: StorybookArgs): React.ReactElement => (
  <Icons.Github {...args} />
)

export const GridView = (args: StorybookArgs): React.ReactElement => (
  <Icons.GridView {...args} />
)

export const GroupAdd = (args: StorybookArgs): React.ReactElement => (
  <Icons.GroupAdd {...args} />
)

export const Groups = (args: StorybookArgs): React.ReactElement => (
  <Icons.Groups {...args} />
)

export const Hearing = (args: StorybookArgs): React.ReactElement => (
  <Icons.Hearing {...args} />
)

export const Help = (args: StorybookArgs): React.ReactElement => (
  <Icons.Help {...args} />
)

export const HelpOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.HelpOutline {...args} />
)

export const HighlightOff = (args: StorybookArgs): React.ReactElement => (
  <Icons.HighlightOff {...args} />
)

export const History = (args: StorybookArgs): React.ReactElement => (
  <Icons.History {...args} />
)

export const Home = (args: StorybookArgs): React.ReactElement => (
  <Icons.Home {...args} />
)

export const Hospital = (args: StorybookArgs): React.ReactElement => (
  <Icons.Hospital {...args} />
)

export const Hotel = (args: StorybookArgs): React.ReactElement => (
  <Icons.Hotel {...args} />
)

export const HourglassEmpty = (args: StorybookArgs): React.ReactElement => (
  <Icons.HourglassEmpty {...args} />
)

export const Hurricane = (args: StorybookArgs): React.ReactElement => (
  <Icons.Hurricane {...args} />
)

export const Identification = (args: StorybookArgs): React.ReactElement => (
  <Icons.Identification {...args} />
)

export const Image = (args: StorybookArgs): React.ReactElement => (
  <Icons.Image {...args} />
)

export const Info = (args: StorybookArgs): React.ReactElement => (
  <Icons.Info {...args} />
)

export const InfoOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.InfoOutline {...args} />
)

export const Insights = (args: StorybookArgs): React.ReactElement => (
  <Icons.Insights {...args} />
)

export const Instagram = (args: StorybookArgs): React.ReactElement => (
  <Icons.Instagram {...args} />
)

export const Keyboard = (args: StorybookArgs): React.ReactElement => (
  <Icons.Keyboard {...args} />
)

export const Label = (args: StorybookArgs): React.ReactElement => (
  <Icons.Label {...args} />
)

export const Language = (args: StorybookArgs): React.ReactElement => (
  <Icons.Language {...args} />
)

export const LastPage = (args: StorybookArgs): React.ReactElement => (
  <Icons.LastPage {...args} />
)

export const Launch = (args: StorybookArgs): React.ReactElement => (
  <Icons.Launch {...args} />
)

export const Lightbulb = (args: StorybookArgs): React.ReactElement => (
  <Icons.Lightbulb {...args} />
)

export const LightbulbOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.LightbulbOutline {...args} />
)

export const Link = (args: StorybookArgs): React.ReactElement => (
  <Icons.Link {...args} />
)

export const LinkedIn = (args: StorybookArgs): React.ReactElement => (
  <Icons.LinkedIn {...args} />
)

export const LinkOff = (args: StorybookArgs): React.ReactElement => (
  <Icons.LinkOff {...args} />
)

export const List = (args: StorybookArgs): React.ReactElement => (
  <Icons.List {...args} />
)

export const LocalCafe = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalCafe {...args} />
)

export const LocalFireDepartment = (
  args: StorybookArgs
): React.ReactElement => <Icons.LocalFireDepartment {...args} />
export const LocalGasStation = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalGasStation {...args} />
)

export const LocalGroceryStore = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalGroceryStore {...args} />
)

export const LocalHospital = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalHospital {...args} />
)

export const LocalLaundryService = (
  args: StorybookArgs
): React.ReactElement => <Icons.LocalLaundryService {...args} />
export const LocalLibrary = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalLibrary {...args} />
)

export const LocalOffer = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalOffer {...args} />
)

export const LocalParking = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalParking {...args} />
)

export const LocalPharmacy = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalPharmacy {...args} />
)

export const LocalPolice = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalPolice {...args} />
)

export const LocalTaxi = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocalTaxi {...args} />
)

export const LocationCity = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocationCity {...args} />
)

export const LocationOn = (args: StorybookArgs): React.ReactElement => (
  <Icons.LocationOn {...args} />
)

export const Lock = (args: StorybookArgs): React.ReactElement => (
  <Icons.Lock {...args} />
)

export const LockOpen = (args: StorybookArgs): React.ReactElement => (
  <Icons.LockOpen {...args} />
)

export const LockOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.LockOutline {...args} />
)

export const Login = (args: StorybookArgs): React.ReactElement => (
  <Icons.Login {...args} />
)

export const Logout = (args: StorybookArgs): React.ReactElement => (
  <Icons.Logout {...args} />
)

export const Loop = (args: StorybookArgs): React.ReactElement => (
  <Icons.Loop {...args} />
)

export const Mail = (args: StorybookArgs): React.ReactElement => (
  <Icons.Mail {...args} />
)

export const MailOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.MailOutline {...args} />
)

export const Map = (args: StorybookArgs): React.ReactElement => (
  <Icons.Map {...args} />
)

export const Masks = (args: StorybookArgs): React.ReactElement => (
  <Icons.Masks {...args} />
)

export const MedicalServices = (args: StorybookArgs): React.ReactElement => (
  <Icons.MedicalServices {...args} />
)

export const Menu = (args: StorybookArgs): React.ReactElement => (
  <Icons.Menu {...args} />
)

export const MilitaryTech = (args: StorybookArgs): React.ReactElement => (
  <Icons.MilitaryTech {...args} />
)

export const MoreHoriz = (args: StorybookArgs): React.ReactElement => (
  <Icons.MoreHoriz {...args} />
)

export const MoreVert = (args: StorybookArgs): React.ReactElement => (
  <Icons.MoreVert {...args} />
)

export const MyLocation = (args: StorybookArgs): React.ReactElement => (
  <Icons.MyLocation {...args} />
)

export const NavigateBefore = (args: StorybookArgs): React.ReactElement => (
  <Icons.NavigateBefore {...args} />
)

export const NavigateNext = (args: StorybookArgs): React.ReactElement => (
  <Icons.NavigateNext {...args} />
)

export const NavigateFarBefore = (args: StorybookArgs): React.ReactElement => (
  <Icons.NavigateFarBefore {...args} />
)

export const NavigateFarNext = (args: StorybookArgs): React.ReactElement => (
  <Icons.NavigateFarNext {...args} />
)

export const NearMe = (args: StorybookArgs): React.ReactElement => (
  <Icons.NearMe {...args} />
)

export const Notifications = (args: StorybookArgs): React.ReactElement => (
  <Icons.Notifications {...args} />
)

export const NotificationsActive = (
  args: StorybookArgs
): React.ReactElement => <Icons.NotificationsActive {...args} />
export const NotificationsNone = (args: StorybookArgs): React.ReactElement => (
  <Icons.NotificationsNone {...args} />
)

export const NotificationsOff = (args: StorybookArgs): React.ReactElement => (
  <Icons.NotificationsOff {...args} />
)

export const Park = (args: StorybookArgs): React.ReactElement => (
  <Icons.Park {...args} />
)

export const People = (args: StorybookArgs): React.ReactElement => (
  <Icons.People {...args} />
)

export const Person = (args: StorybookArgs): React.ReactElement => (
  <Icons.Person {...args} />
)

export const Pets = (args: StorybookArgs): React.ReactElement => (
  <Icons.Pets {...args} />
)

export const Phone = (args: StorybookArgs): React.ReactElement => (
  <Icons.Phone {...args} />
)

export const PhotoCamera = (args: StorybookArgs): React.ReactElement => (
  <Icons.PhotoCamera {...args} />
)

export const Print = (args: StorybookArgs): React.ReactElement => (
  <Icons.Print {...args} />
)

export const PriorityHigh = (args: StorybookArgs): React.ReactElement => (
  <Icons.PriorityHigh {...args} />
)

export const PublicIcon = (args: StorybookArgs): React.ReactElement => (
  <Icons.Public {...args} />
)

export const PushPin = (args: StorybookArgs): React.ReactElement => (
  <Icons.PushPin {...args} />
)

export const RadioButtonUnchecked = (
  args: StorybookArgs
): React.ReactElement => <Icons.RadioButtonUnchecked {...args} />
export const Rain = (args: StorybookArgs): React.ReactElement => (
  <Icons.Rain {...args} />
)

export const ReduceCapacity = (args: StorybookArgs): React.ReactElement => (
  <Icons.ReduceCapacity {...args} />
)

export const Remove = (args: StorybookArgs): React.ReactElement => (
  <Icons.Remove {...args} />
)

export const RemoveCircle = (args: StorybookArgs): React.ReactElement => (
  <Icons.RemoveCircle {...args} />
)

export const Report = (args: StorybookArgs): React.ReactElement => (
  <Icons.Report {...args} />
)

export const Restaurant = (args: StorybookArgs): React.ReactElement => (
  <Icons.Restaurant {...args} />
)

export const RssFeed = (args: StorybookArgs): React.ReactElement => (
  <Icons.RssFeed {...args} />
)

export const SafetyDivider = (args: StorybookArgs): React.ReactElement => (
  <Icons.SafetyDivider {...args} />
)

export const Sanitizer = (args: StorybookArgs): React.ReactElement => (
  <Icons.Sanitizer {...args} />
)

export const SaveAlt = (args: StorybookArgs): React.ReactElement => (
  <Icons.SaveAlt {...args} />
)

export const SevereWeather = (args: StorybookArgs): React.ReactElement => (
  <Icons.SevereWeather {...args} />
)

export const Schedule = (args: StorybookArgs): React.ReactElement => (
  <Icons.Schedule {...args} />
)

export const School = (args: StorybookArgs): React.ReactElement => (
  <Icons.School {...args} />
)

export const Science = (args: StorybookArgs): React.ReactElement => (
  <Icons.Science {...args} />
)

export const Search = (args: StorybookArgs): React.ReactElement => (
  <Icons.Search {...args} />
)

export const Security = (args: StorybookArgs): React.ReactElement => (
  <Icons.Security {...args} />
)

export const Send = (args: StorybookArgs): React.ReactElement => (
  <Icons.Send {...args} />
)

export const SentimentDissatisfied = (
  args: StorybookArgs
): React.ReactElement => <Icons.SentimentDissatisfied {...args} />
export const SentimentNeutral = (args: StorybookArgs): React.ReactElement => (
  <Icons.SentimentNeutral {...args} />
)

export const SentimentSatisfied = (args: StorybookArgs): React.ReactElement => (
  <Icons.SentimentSatisfied {...args} />
)

export const SentimentSatisfiedAlt = (
  args: StorybookArgs
): React.ReactElement => <Icons.SentimentSatisfiedAlt {...args} />
export const SentimentVeryDissatisfied = (
  args: StorybookArgs
): React.ReactElement => <Icons.SentimentVeryDissatisfied {...args} />
export const Settings = (args: StorybookArgs): React.ReactElement => (
  <Icons.Settings {...args} />
)

export const Share = (args: StorybookArgs): React.ReactElement => (
  <Icons.Share {...args} />
)

export const Shield = (args: StorybookArgs): React.ReactElement => (
  <Icons.Shield {...args} />
)

export const ShoppingBasket = (args: StorybookArgs): React.ReactElement => (
  <Icons.ShoppingBasket {...args} />
)

export const Snow = (args: StorybookArgs): React.ReactElement => (
  <Icons.Snow {...args} />
)

export const Soap = (args: StorybookArgs): React.ReactElement => (
  <Icons.Soap {...args} />
)

export const SocialDistance = (args: StorybookArgs): React.ReactElement => (
  <Icons.SocialDistance {...args} />
)

export const SortArrow = (args: StorybookArgs): React.ReactElement => (
  <Icons.SortArrow {...args} />
)

export const Spellcheck = (args: StorybookArgs): React.ReactElement => (
  <Icons.Spellcheck {...args} />
)

export const Star = (args: StorybookArgs): React.ReactElement => (
  <Icons.Star {...args} />
)

export const StarHalf = (args: StorybookArgs): React.ReactElement => (
  <Icons.StarHalf {...args} />
)

export const StarOutline = (args: StorybookArgs): React.ReactElement => (
  <Icons.StarOutline {...args} />
)

export const Store = (args: StorybookArgs): React.ReactElement => (
  <Icons.Store {...args} />
)

export const Support = (args: StorybookArgs): React.ReactElement => (
  <Icons.Support {...args} />
)

export const SupportAgent = (args: StorybookArgs): React.ReactElement => (
  <Icons.SupportAgent {...args} />
)

export const TextFields = (args: StorybookArgs): React.ReactElement => (
  <Icons.TextFields {...args} />
)

export const ThumbDownAlt = (args: StorybookArgs): React.ReactElement => (
  <Icons.ThumbDownAlt {...args} />
)

export const ThumbUpAlt = (args: StorybookArgs): React.ReactElement => (
  <Icons.ThumbUpAlt {...args} />
)

export const Timer = (args: StorybookArgs): React.ReactElement => (
  <Icons.Timer {...args} />
)

export const ToggleOff = (args: StorybookArgs): React.ReactElement => (
  <Icons.ToggleOff {...args} />
)

export const ToggleOn = (args: StorybookArgs): React.ReactElement => (
  <Icons.ToggleOn {...args} />
)

export const Topic = (args: StorybookArgs): React.ReactElement => (
  <Icons.Topic {...args} />
)

export const Tornado = (args: StorybookArgs): React.ReactElement => (
  <Icons.Tornado {...args} />
)

export const Translate = (args: StorybookArgs): React.ReactElement => (
  <Icons.Translate {...args} />
)

export const TrendingDown = (args: StorybookArgs): React.ReactElement => (
  <Icons.TrendingDown {...args} />
)

export const TrendingUp = (args: StorybookArgs): React.ReactElement => (
  <Icons.TrendingUp {...args} />
)

export const Twitter = (args: StorybookArgs): React.ReactElement => (
  <Icons.Twitter {...args} />
)

export const Undo = (args: StorybookArgs): React.ReactElement => (
  <Icons.Undo {...args} />
)

export const UnfoldLess = (args: StorybookArgs): React.ReactElement => (
  <Icons.UnfoldLess {...args} />
)

export const UnfoldMore = (args: StorybookArgs): React.ReactElement => (
  <Icons.UnfoldMore {...args} />
)

export const Update = (args: StorybookArgs): React.ReactElement => (
  <Icons.Update {...args} />
)

export const UploadFile = (args: StorybookArgs): React.ReactElement => (
  <Icons.UploadFile {...args} />
)

export const Verified = (args: StorybookArgs): React.ReactElement => (
  <Icons.Verified {...args} />
)

export const VerifiedUser = (args: StorybookArgs): React.ReactElement => (
  <Icons.VerifiedUser {...args} />
)

export const Visibility = (args: StorybookArgs): React.ReactElement => (
  <Icons.Visibility {...args} />
)

export const VisibilityOff = (args: StorybookArgs): React.ReactElement => (
  <Icons.VisibilityOff {...args} />
)

export const VolumeOff = (args: StorybookArgs): React.ReactElement => (
  <Icons.VolumeOff {...args} />
)

export const Warning = (args: StorybookArgs): React.ReactElement => (
  <Icons.Warning {...args} />
)

export const Wash = (args: StorybookArgs): React.ReactElement => (
  <Icons.Wash {...args} />
)

export const Wifi = (args: StorybookArgs): React.ReactElement => (
  <Icons.Wifi {...args} />
)

export const Work = (args: StorybookArgs): React.ReactElement => (
  <Icons.Work {...args} />
)

export const X = (args: StorybookArgs): React.ReactElement => (
  <Icons.X {...args} />
)

export const Youtube = (args: StorybookArgs): React.ReactElement => (
  <Icons.Youtube {...args} />
)

export const ZoomIn = (args: StorybookArgs): React.ReactElement => (
  <Icons.ZoomIn {...args} />
)

export const ZoomOutMap = (args: StorybookArgs): React.ReactElement => (
  <Icons.ZoomOutMap {...args} />
)

export const ZoomOut = (args: StorybookArgs): React.ReactElement => (
  <Icons.ZoomOut {...args} />
)
