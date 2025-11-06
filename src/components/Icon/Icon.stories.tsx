import React, { type JSX } from 'react'

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

export const AccessibilityNew = (args: StorybookArgs): JSX.Element => (
  <Icon.AccessibilityNew {...args} />
)

export const AccessibleForward = (args: StorybookArgs): JSX.Element => (
  <Icon.AccessibleForward {...args} />
)

export const AccountBalance = (args: StorybookArgs): JSX.Element => (
  <Icon.AccountBalance {...args} />
)

export const AccountBox = (args: StorybookArgs): JSX.Element => (
  <Icon.AccountBox {...args} />
)

export const AccountCircle = (args: StorybookArgs): JSX.Element => (
  <Icon.AccountCircle {...args} />
)

export const Add = (args: StorybookArgs): JSX.Element => <Icon.Add {...args} />

export const AddCircle = (args: StorybookArgs): JSX.Element => (
  <Icon.AddCircle {...args} />
)

export const AddCircleOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.AddCircleOutline {...args} />
)

export const Alarm = (args: StorybookArgs): JSX.Element => (
  <Icon.Alarm {...args} />
)

export const AlternateEmail = (args: StorybookArgs): JSX.Element => (
  <Icon.AlternateEmail {...args} />
)

export const Announcement = (args: StorybookArgs): JSX.Element => (
  <Icon.Announcement {...args} />
)

export const ArrowBack = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowBack {...args} />
)

export const ArrowDownward = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowDownward {...args} />
)

export const ArrowDropDown = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowDropDown {...args} />
)

export const ArrowDropUp = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowDropUp {...args} />
)

export const ArrowForward = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowForward {...args} />
)

export const ArrowUpward = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowUpward {...args} />
)

export const Api = (args: StorybookArgs): JSX.Element => <Icon.Api {...args} />

export const Assessment = (args: StorybookArgs): JSX.Element => (
  <Icon.Assessment {...args} />
)

export const AttachFile = (args: StorybookArgs): JSX.Element => (
  <Icon.AttachFile {...args} />
)

export const AttachMoney = (args: StorybookArgs): JSX.Element => (
  <Icon.AttachMoney {...args} />
)

export const Autorenew = (args: StorybookArgs): JSX.Element => (
  <Icon.Autorenew {...args} />
)

export const Backpack = (args: StorybookArgs): JSX.Element => (
  <Icon.Backpack {...args} />
)

export const Bathtub = (args: StorybookArgs): JSX.Element => (
  <Icon.Bathtub {...args} />
)

export const Bedding = (args: StorybookArgs): JSX.Element => (
  <Icon.Bedding {...args} />
)

export const Bookmark = (args: StorybookArgs): JSX.Element => (
  <Icon.Bookmark {...args} />
)

export const BugReport = (args: StorybookArgs): JSX.Element => (
  <Icon.BugReport {...args} />
)

export const Build = (args: StorybookArgs): JSX.Element => (
  <Icon.Build {...args} />
)

export const CalendarToday = (args: StorybookArgs): JSX.Element => (
  <Icon.CalendarToday {...args} />
)

export const Campaign = (args: StorybookArgs): JSX.Element => (
  <Icon.Campaign {...args} />
)

export const Camping = (args: StorybookArgs): JSX.Element => (
  <Icon.Camping {...args} />
)

export const Cancel = (args: StorybookArgs): JSX.Element => (
  <Icon.Cancel {...args} />
)

export const Chat = (args: StorybookArgs): JSX.Element => (
  <Icon.Chat {...args} />
)

export const Check = (args: StorybookArgs): JSX.Element => (
  <Icon.Check {...args} />
)

export const CheckBoxOutlineBlank = (args: StorybookArgs): JSX.Element => (
  <Icon.CheckBoxOutlineBlank {...args} />
)

export const CheckCircle = (args: StorybookArgs): JSX.Element => (
  <Icon.CheckCircle {...args} />
)

export const CheckCircleOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.CheckCircleOutline {...args} />
)

export const Checkroom = (args: StorybookArgs): JSX.Element => (
  <Icon.Checkroom {...args} />
)

export const CleanHands = (args: StorybookArgs): JSX.Element => (
  <Icon.CleanHands {...args} />
)

export const Clothes = (args: StorybookArgs): JSX.Element => (
  <Icon.Clothes {...args} />
)

export const Close = (args: StorybookArgs): JSX.Element => (
  <Icon.Close {...args} />
)

export const ClosedCaption = (args: StorybookArgs): JSX.Element => (
  <Icon.ClosedCaption {...args} />
)

export const Cloud = (args: StorybookArgs): JSX.Element => (
  <Icon.Cloud {...args} />
)

export const Code = (args: StorybookArgs): JSX.Element => (
  <Icon.Code {...args} />
)

export const Comment = (args: StorybookArgs): JSX.Element => (
  <Icon.Comment {...args} />
)

export const ConnectWithoutContact = (args: StorybookArgs): JSX.Element => (
  <Icon.ConnectWithoutContact {...args} />
)

export const Construction = (args: StorybookArgs): JSX.Element => (
  <Icon.Construction {...args} />
)

export const ConstructionWorker = (args: StorybookArgs): JSX.Element => (
  <Icon.ConstructionWorker {...args} />
)

export const ContactPage = (args: StorybookArgs): JSX.Element => (
  <Icon.ContactPage {...args} />
)

export const ContentCopy = (args: StorybookArgs): JSX.Element => (
  <Icon.ContentCopy {...args} />
)

export const Coronavirus = (args: StorybookArgs): JSX.Element => (
  <Icon.Coronavirus {...args} />
)

export const CreditCard = (args: StorybookArgs): JSX.Element => (
  <Icon.CreditCard {...args} />
)

export const Deck = (args: StorybookArgs): JSX.Element => (
  <Icon.Deck {...args} />
)

export const DeleteIcon = (args: StorybookArgs): JSX.Element => (
  <Icon.Delete {...args} />
)

export const DeviceThermostat = (args: StorybookArgs): JSX.Element => (
  <Icon.DeviceThermostat {...args} />
)

export const Directions = (args: StorybookArgs): JSX.Element => (
  <Icon.Directions {...args} />
)

export const DirectionsBike = (args: StorybookArgs): JSX.Element => (
  <Icon.DirectionsBike {...args} />
)

export const DirectionsBus = (args: StorybookArgs): JSX.Element => (
  <Icon.DirectionsBus {...args} />
)

export const DirectionsCar = (args: StorybookArgs): JSX.Element => (
  <Icon.DirectionsCar {...args} />
)

export const DirectionsWalk = (args: StorybookArgs): JSX.Element => (
  <Icon.DirectionsWalk {...args} />
)

export const DoNotDisturb = (args: StorybookArgs): JSX.Element => (
  <Icon.DoNotDisturb {...args} />
)

export const DoNotTouch = (args: StorybookArgs): JSX.Element => (
  <Icon.DoNotTouch {...args} />
)

export const DragHandle = (args: StorybookArgs): JSX.Element => (
  <Icon.DragHandle {...args} />
)

export const Eco = (args: StorybookArgs): JSX.Element => <Icon.Eco {...args} />

export const Edit = (args: StorybookArgs): JSX.Element => (
  <Icon.Edit {...args} />
)

export const ElectricalServices = (args: StorybookArgs): JSX.Element => (
  <Icon.ElectricalServices {...args} />
)

export const EmojiEvents = (args: StorybookArgs): JSX.Element => (
  <Icon.EmojiEvents {...args} />
)

export const Error = (args: StorybookArgs): JSX.Element => (
  <Icon.Error {...args} />
)

export const ErrorOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.ErrorOutline {...args} />
)

export const Event = (args: StorybookArgs): JSX.Element => (
  <Icon.Event {...args} />
)

export const ExpandLess = (args: StorybookArgs): JSX.Element => (
  <Icon.ExpandLess {...args} />
)

export const ExpandMore = (args: StorybookArgs): JSX.Element => (
  <Icon.ExpandMore {...args} />
)

export const Facebook = (args: StorybookArgs): JSX.Element => (
  <Icon.Facebook {...args} />
)

export const FastForward = (args: StorybookArgs): JSX.Element => (
  <Icon.FastForward {...args} />
)

export const FastRewind = (args: StorybookArgs): JSX.Element => (
  <Icon.FastRewind {...args} />
)

export const Favorite = (args: StorybookArgs): JSX.Element => (
  <Icon.Favorite {...args} />
)

export const FavoriteBorder = (args: StorybookArgs): JSX.Element => (
  <Icon.FavoriteBorder {...args} />
)

export const Fax = (args: StorybookArgs): JSX.Element => <Icon.Fax {...args} />

export const FileDownload = (args: StorybookArgs): JSX.Element => (
  <Icon.FileDownload {...args} />
)

export const FilePresent = (args: StorybookArgs): JSX.Element => (
  <Icon.FilePresent {...args} />
)

export const FileUpload = (args: StorybookArgs): JSX.Element => (
  <Icon.FileUpload {...args} />
)

export const FilterAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.FilterAlt {...args} />
)

export const FilterList = (args: StorybookArgs): JSX.Element => (
  <Icon.FilterList {...args} />
)

export const Fingerprint = (args: StorybookArgs): JSX.Element => (
  <Icon.Fingerprint {...args} />
)

export const FirstPage = (args: StorybookArgs): JSX.Element => (
  <Icon.FirstPage {...args} />
)

export const Flag = (args: StorybookArgs): JSX.Element => (
  <Icon.Flag {...args} />
)

export const Flickr = (args: StorybookArgs): JSX.Element => (
  <Icon.Flickr {...args} />
)

export const Flight = (args: StorybookArgs): JSX.Element => (
  <Icon.Flight {...args} />
)

export const Flooding = (args: StorybookArgs): JSX.Element => (
  <Icon.Flooding {...args} />
)

export const Folder = (args: StorybookArgs): JSX.Element => (
  <Icon.Folder {...args} />
)

export const FolderOpen = (args: StorybookArgs): JSX.Element => (
  <Icon.FolderOpen {...args} />
)

export const FormatQuote = (args: StorybookArgs): JSX.Element => (
  <Icon.FormatQuote {...args} />
)

export const FormatSize = (args: StorybookArgs): JSX.Element => (
  <Icon.FormatSize {...args} />
)

export const Forum = (args: StorybookArgs): JSX.Element => (
  <Icon.Forum {...args} />
)

export const Github = (args: StorybookArgs): JSX.Element => (
  <Icon.Github {...args} />
)

export const GridView = (args: StorybookArgs): JSX.Element => (
  <Icon.GridView {...args} />
)

export const GroupAdd = (args: StorybookArgs): JSX.Element => (
  <Icon.GroupAdd {...args} />
)

export const Groups = (args: StorybookArgs): JSX.Element => (
  <Icon.Groups {...args} />
)

export const Hearing = (args: StorybookArgs): JSX.Element => (
  <Icon.Hearing {...args} />
)

export const Help = (args: StorybookArgs): JSX.Element => (
  <Icon.Help {...args} />
)

export const HelpOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.HelpOutline {...args} />
)

export const HighlightOff = (args: StorybookArgs): JSX.Element => (
  <Icon.HighlightOff {...args} />
)

export const History = (args: StorybookArgs): JSX.Element => (
  <Icon.History {...args} />
)

export const Home = (args: StorybookArgs): JSX.Element => (
  <Icon.Home {...args} />
)

export const Hospital = (args: StorybookArgs): JSX.Element => (
  <Icon.Hospital {...args} />
)

export const Hotel = (args: StorybookArgs): JSX.Element => (
  <Icon.Hotel {...args} />
)

export const HourglassEmpty = (args: StorybookArgs): JSX.Element => (
  <Icon.HourglassEmpty {...args} />
)

export const Hurricane = (args: StorybookArgs): JSX.Element => (
  <Icon.Hurricane {...args} />
)

export const Identification = (args: StorybookArgs): JSX.Element => (
  <Icon.Identification {...args} />
)

export const Image = (args: StorybookArgs): JSX.Element => (
  <Icon.Image {...args} />
)

export const Info = (args: StorybookArgs): JSX.Element => (
  <Icon.Info {...args} />
)

export const InfoOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.InfoOutline {...args} />
)

export const Insights = (args: StorybookArgs): JSX.Element => (
  <Icon.Insights {...args} />
)

export const Instagram = (args: StorybookArgs): JSX.Element => (
  <Icon.Instagram {...args} />
)

export const Keyboard = (args: StorybookArgs): JSX.Element => (
  <Icon.Keyboard {...args} />
)

export const Label = (args: StorybookArgs): JSX.Element => (
  <Icon.Label {...args} />
)

export const Language = (args: StorybookArgs): JSX.Element => (
  <Icon.Language {...args} />
)

export const LastPage = (args: StorybookArgs): JSX.Element => (
  <Icon.LastPage {...args} />
)

export const Launch = (args: StorybookArgs): JSX.Element => (
  <Icon.Launch {...args} />
)

export const Lightbulb = (args: StorybookArgs): JSX.Element => (
  <Icon.Lightbulb {...args} />
)

export const LightbulbOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.LightbulbOutline {...args} />
)

export const Link = (args: StorybookArgs): JSX.Element => (
  <Icon.Link {...args} />
)

export const LinkedIn = (args: StorybookArgs): JSX.Element => (
  <Icon.LinkedIn {...args} />
)

export const LinkOff = (args: StorybookArgs): JSX.Element => (
  <Icon.LinkOff {...args} />
)

export const List = (args: StorybookArgs): JSX.Element => (
  <Icon.List {...args} />
)

export const LocalCafe = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalCafe {...args} />
)

export const LocalFireDepartment = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalFireDepartment {...args} />
)

export const LocalGasStation = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalGasStation {...args} />
)

export const LocalGroceryStore = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalGroceryStore {...args} />
)

export const LocalHospital = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalHospital {...args} />
)

export const LocalLaundryService = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalLaundryService {...args} />
)

export const LocalLibrary = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalLibrary {...args} />
)

export const LocalOffer = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalOffer {...args} />
)

export const LocalParking = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalParking {...args} />
)

export const LocalPharmacy = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalPharmacy {...args} />
)

export const LocalPolice = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalPolice {...args} />
)

export const LocalTaxi = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalTaxi {...args} />
)

export const LocationCity = (args: StorybookArgs): JSX.Element => (
  <Icon.LocationCity {...args} />
)

export const LocationOn = (args: StorybookArgs): JSX.Element => (
  <Icon.LocationOn {...args} />
)

export const Lock = (args: StorybookArgs): JSX.Element => (
  <Icon.Lock {...args} />
)

export const LockOpen = (args: StorybookArgs): JSX.Element => (
  <Icon.LockOpen {...args} />
)

export const LockOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.LockOutline {...args} />
)

export const Login = (args: StorybookArgs): JSX.Element => (
  <Icon.Login {...args} />
)

export const Logout = (args: StorybookArgs): JSX.Element => (
  <Icon.Logout {...args} />
)

export const Loop = (args: StorybookArgs): JSX.Element => (
  <Icon.Loop {...args} />
)

export const Mail = (args: StorybookArgs): JSX.Element => (
  <Icon.Mail {...args} />
)

export const MailOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.MailOutline {...args} />
)

export const Map = (args: StorybookArgs): JSX.Element => <Icon.Map {...args} />

export const Masks = (args: StorybookArgs): JSX.Element => (
  <Icon.Masks {...args} />
)

export const MedicalServices = (args: StorybookArgs): JSX.Element => (
  <Icon.MedicalServices {...args} />
)

export const Menu = (args: StorybookArgs): JSX.Element => (
  <Icon.Menu {...args} />
)

export const MilitaryTech = (args: StorybookArgs): JSX.Element => (
  <Icon.MilitaryTech {...args} />
)

export const MoreHoriz = (args: StorybookArgs): JSX.Element => (
  <Icon.MoreHoriz {...args} />
)

export const MoreVert = (args: StorybookArgs): JSX.Element => (
  <Icon.MoreVert {...args} />
)

export const MyLocation = (args: StorybookArgs): JSX.Element => (
  <Icon.MyLocation {...args} />
)

export const NavigateBefore = (args: StorybookArgs): JSX.Element => (
  <Icon.NavigateBefore {...args} />
)

export const NavigateNext = (args: StorybookArgs): JSX.Element => (
  <Icon.NavigateNext {...args} />
)

export const NavigateFarBefore = (args: StorybookArgs): JSX.Element => (
  <Icon.NavigateFarBefore {...args} />
)

export const NavigateFarNext = (args: StorybookArgs): JSX.Element => (
  <Icon.NavigateFarNext {...args} />
)

export const NearMe = (args: StorybookArgs): JSX.Element => (
  <Icon.NearMe {...args} />
)

export const Notifications = (args: StorybookArgs): JSX.Element => (
  <Icon.Notifications {...args} />
)

export const NotificationsActive = (args: StorybookArgs): JSX.Element => (
  <Icon.NotificationsActive {...args} />
)

export const NotificationsNone = (args: StorybookArgs): JSX.Element => (
  <Icon.NotificationsNone {...args} />
)

export const NotificationsOff = (args: StorybookArgs): JSX.Element => (
  <Icon.NotificationsOff {...args} />
)

export const Park = (args: StorybookArgs): JSX.Element => (
  <Icon.Park {...args} />
)

export const People = (args: StorybookArgs): JSX.Element => (
  <Icon.People {...args} />
)

export const Person = (args: StorybookArgs): JSX.Element => (
  <Icon.Person {...args} />
)

export const Pets = (args: StorybookArgs): JSX.Element => (
  <Icon.Pets {...args} />
)

export const Phone = (args: StorybookArgs): JSX.Element => (
  <Icon.Phone {...args} />
)

export const PhotoCamera = (args: StorybookArgs): JSX.Element => (
  <Icon.PhotoCamera {...args} />
)

export const Print = (args: StorybookArgs): JSX.Element => (
  <Icon.Print {...args} />
)

export const PriorityHigh = (args: StorybookArgs): JSX.Element => (
  <Icon.PriorityHigh {...args} />
)

export const PublicIcon = (args: StorybookArgs): JSX.Element => (
  <Icon.Public {...args} />
)

export const PushPin = (args: StorybookArgs): JSX.Element => (
  <Icon.PushPin {...args} />
)

export const RadioButtonUnchecked = (args: StorybookArgs): JSX.Element => (
  <Icon.RadioButtonUnchecked {...args} />
)

export const Rain = (args: StorybookArgs): JSX.Element => (
  <Icon.Rain {...args} />
)

export const ReduceCapacity = (args: StorybookArgs): JSX.Element => (
  <Icon.ReduceCapacity {...args} />
)

export const Remove = (args: StorybookArgs): JSX.Element => (
  <Icon.Remove {...args} />
)

export const RemoveCircle = (args: StorybookArgs): JSX.Element => (
  <Icon.RemoveCircle {...args} />
)

export const Report = (args: StorybookArgs): JSX.Element => (
  <Icon.Report {...args} />
)

export const Restaurant = (args: StorybookArgs): JSX.Element => (
  <Icon.Restaurant {...args} />
)

export const RssFeed = (args: StorybookArgs): JSX.Element => (
  <Icon.RssFeed {...args} />
)

export const SafetyDivider = (args: StorybookArgs): JSX.Element => (
  <Icon.SafetyDivider {...args} />
)

export const Sanitizer = (args: StorybookArgs): JSX.Element => (
  <Icon.Sanitizer {...args} />
)

export const SaveAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.SaveAlt {...args} />
)

export const SevereWeather = (args: StorybookArgs): JSX.Element => (
  <Icon.SevereWeather {...args} />
)

export const Schedule = (args: StorybookArgs): JSX.Element => (
  <Icon.Schedule {...args} />
)

export const School = (args: StorybookArgs): JSX.Element => (
  <Icon.School {...args} />
)

export const Science = (args: StorybookArgs): JSX.Element => (
  <Icon.Science {...args} />
)

export const Search = (args: StorybookArgs): JSX.Element => (
  <Icon.Search {...args} />
)

export const Security = (args: StorybookArgs): JSX.Element => (
  <Icon.Security {...args} />
)

export const Send = (args: StorybookArgs): JSX.Element => (
  <Icon.Send {...args} />
)

export const SentimentDissatisfied = (args: StorybookArgs): JSX.Element => (
  <Icon.SentimentDissatisfied {...args} />
)

export const SentimentNeutral = (args: StorybookArgs): JSX.Element => (
  <Icon.SentimentNeutral {...args} />
)

export const SentimentSatisfied = (args: StorybookArgs): JSX.Element => (
  <Icon.SentimentSatisfied {...args} />
)

export const SentimentSatisfiedAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.SentimentSatisfiedAlt {...args} />
)
export const SentimentVeryDissatisfied = (args: StorybookArgs): JSX.Element => (
  <Icon.SentimentVeryDissatisfied {...args} />
)

export const Settings = (args: StorybookArgs): JSX.Element => (
  <Icon.Settings {...args} />
)

export const Share = (args: StorybookArgs): JSX.Element => (
  <Icon.Share {...args} />
)

export const Shield = (args: StorybookArgs): JSX.Element => (
  <Icon.Shield {...args} />
)

export const ShoppingBasket = (args: StorybookArgs): JSX.Element => (
  <Icon.ShoppingBasket {...args} />
)

export const Snow = (args: StorybookArgs): JSX.Element => (
  <Icon.Snow {...args} />
)

export const Soap = (args: StorybookArgs): JSX.Element => (
  <Icon.Soap {...args} />
)

export const SocialDistance = (args: StorybookArgs): JSX.Element => (
  <Icon.SocialDistance {...args} />
)

export const SortArrow = (args: StorybookArgs): JSX.Element => (
  <Icon.SortArrow {...args} />
)

export const Spellcheck = (args: StorybookArgs): JSX.Element => (
  <Icon.Spellcheck {...args} />
)

export const Star = (args: StorybookArgs): JSX.Element => (
  <Icon.Star {...args} />
)

export const StarHalf = (args: StorybookArgs): JSX.Element => (
  <Icon.StarHalf {...args} />
)

export const StarOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.StarOutline {...args} />
)

export const Store = (args: StorybookArgs): JSX.Element => (
  <Icon.Store {...args} />
)

export const Support = (args: StorybookArgs): JSX.Element => (
  <Icon.Support {...args} />
)

export const SupportAgent = (args: StorybookArgs): JSX.Element => (
  <Icon.SupportAgent {...args} />
)

export const TextFields = (args: StorybookArgs): JSX.Element => (
  <Icon.TextFields {...args} />
)

export const ThumbDownAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.ThumbDownAlt {...args} />
)

export const ThumbUpAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.ThumbUpAlt {...args} />
)

export const Timer = (args: StorybookArgs): JSX.Element => (
  <Icon.Timer {...args} />
)

export const ToggleOff = (args: StorybookArgs): JSX.Element => (
  <Icon.ToggleOff {...args} />
)

export const ToggleOn = (args: StorybookArgs): JSX.Element => (
  <Icon.ToggleOn {...args} />
)

export const Topic = (args: StorybookArgs): JSX.Element => (
  <Icon.Topic {...args} />
)

export const Tornado = (args: StorybookArgs): JSX.Element => (
  <Icon.Tornado {...args} />
)

export const Translate = (args: StorybookArgs): JSX.Element => (
  <Icon.Translate {...args} />
)

export const TrendingDown = (args: StorybookArgs): JSX.Element => (
  <Icon.TrendingDown {...args} />
)

export const TrendingUp = (args: StorybookArgs): JSX.Element => (
  <Icon.TrendingUp {...args} />
)

export const Twitter = (args: StorybookArgs): JSX.Element => (
  <Icon.Twitter {...args} />
)

export const Undo = (args: StorybookArgs): JSX.Element => (
  <Icon.Undo {...args} />
)

export const UnfoldLess = (args: StorybookArgs): JSX.Element => (
  <Icon.UnfoldLess {...args} />
)

export const UnfoldMore = (args: StorybookArgs): JSX.Element => (
  <Icon.UnfoldMore {...args} />
)

export const Update = (args: StorybookArgs): JSX.Element => (
  <Icon.Update {...args} />
)

export const UploadFile = (args: StorybookArgs): JSX.Element => (
  <Icon.UploadFile {...args} />
)

export const Verified = (args: StorybookArgs): JSX.Element => (
  <Icon.Verified {...args} />
)

export const VerifiedUser = (args: StorybookArgs): JSX.Element => (
  <Icon.VerifiedUser {...args} />
)

export const Visibility = (args: StorybookArgs): JSX.Element => (
  <Icon.Visibility {...args} />
)

export const VisibilityOff = (args: StorybookArgs): JSX.Element => (
  <Icon.VisibilityOff {...args} />
)

export const VolumeOff = (args: StorybookArgs): JSX.Element => (
  <Icon.VolumeOff {...args} />
)

export const Warning = (args: StorybookArgs): JSX.Element => (
  <Icon.Warning {...args} />
)

export const Wash = (args: StorybookArgs): JSX.Element => (
  <Icon.Wash {...args} />
)

export const Wifi = (args: StorybookArgs): JSX.Element => (
  <Icon.Wifi {...args} />
)

export const Work = (args: StorybookArgs): JSX.Element => (
  <Icon.Work {...args} />
)

export const X = (args: StorybookArgs): JSX.Element => <Icon.X {...args} />

export const Youtube = (args: StorybookArgs): JSX.Element => (
  <Icon.Youtube {...args} />
)

export const ZoomIn = (args: StorybookArgs): JSX.Element => (
  <Icon.ZoomIn {...args} />
)

export const ZoomOutMap = (args: StorybookArgs): JSX.Element => (
  <Icon.ZoomOutMap {...args} />
)

export const ZoomOut = (args: StorybookArgs): JSX.Element => (
  <Icon.ZoomOut {...args} />
)
