
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

export const AccessibilityNew = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccessibilityNew {...args} />
)

export const AccessibleForward = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccessibleForward {...args} />
)

export const AccountBalance = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccountBalance {...args} />
)

export const AccountBox = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccountBox {...args} />
)

export const AccountCircle = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccountCircle {...args} />
)

export const Add = (args: StorybookArgs): React.ReactElement => (
  <Icon.Add {...args} />
)

export const AddCircle = (args: StorybookArgs): React.ReactElement => (
  <Icon.AddCircle {...args} />
)

export const AddCircleOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.AddCircleOutline {...args} />
)

export const Alarm = (args: StorybookArgs): React.ReactElement => (
  <Icon.Alarm {...args} />
)

export const AlternateEmail = (args: StorybookArgs): React.ReactElement => (
  <Icon.AlternateEmail {...args} />
)

export const Announcement = (args: StorybookArgs): React.ReactElement => (
  <Icon.Announcement {...args} />
)

export const ArrowBack = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowBack {...args} />
)

export const ArrowDownward = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowDownward {...args} />
)

export const ArrowDropDown = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowDropDown {...args} />
)

export const ArrowDropUp = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowDropUp {...args} />
)

export const ArrowForward = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowForward {...args} />
)

export const ArrowUpward = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowUpward {...args} />
)

export const Api = (args: StorybookArgs): React.ReactElement => (
  <Icon.Api {...args} />
)

export const Assessment = (args: StorybookArgs): React.ReactElement => (
  <Icon.Assessment {...args} />
)

export const AttachFile = (args: StorybookArgs): React.ReactElement => (
  <Icon.AttachFile {...args} />
)

export const AttachMoney = (args: StorybookArgs): React.ReactElement => (
  <Icon.AttachMoney {...args} />
)

export const Autorenew = (args: StorybookArgs): React.ReactElement => (
  <Icon.Autorenew {...args} />
)

export const Backpack = (args: StorybookArgs): React.ReactElement => (
  <Icon.Backpack {...args} />
)

export const Bathtub = (args: StorybookArgs): React.ReactElement => (
  <Icon.Bathtub {...args} />
)

export const Bedding = (args: StorybookArgs): React.ReactElement => (
  <Icon.Bedding {...args} />
)

export const Bookmark = (args: StorybookArgs): React.ReactElement => (
  <Icon.Bookmark {...args} />
)

export const BugReport = (args: StorybookArgs): React.ReactElement => (
  <Icon.BugReport {...args} />
)

export const Build = (args: StorybookArgs): React.ReactElement => (
  <Icon.Build {...args} />
)

export const CalendarToday = (args: StorybookArgs): React.ReactElement => (
  <Icon.CalendarToday {...args} />
)

export const Campaign = (args: StorybookArgs): React.ReactElement => (
  <Icon.Campaign {...args} />
)

export const Camping = (args: StorybookArgs): React.ReactElement => (
  <Icon.Camping {...args} />
)

export const Cancel = (args: StorybookArgs): React.ReactElement => (
  <Icon.Cancel {...args} />
)

export const Chat = (args: StorybookArgs): React.ReactElement => (
  <Icon.Chat {...args} />
)

export const Check = (args: StorybookArgs): React.ReactElement => (
  <Icon.Check {...args} />
)

export const CheckBoxOutlineBlank = (
  args: StorybookArgs
): React.ReactElement => <Icon.CheckBoxOutlineBlank {...args} />
export const CheckCircle = (args: StorybookArgs): React.ReactElement => (
  <Icon.CheckCircle {...args} />
)

export const CheckCircleOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.CheckCircleOutline {...args} />
)

export const Checkroom = (args: StorybookArgs): React.ReactElement => (
  <Icon.Checkroom {...args} />
)

export const CleanHands = (args: StorybookArgs): React.ReactElement => (
  <Icon.CleanHands {...args} />
)

export const Clothes = (args: StorybookArgs): React.ReactElement => (
  <Icon.Clothes {...args} />
)

export const Close = (args: StorybookArgs): React.ReactElement => (
  <Icon.Close {...args} />
)

export const ClosedCaption = (args: StorybookArgs): React.ReactElement => (
  <Icon.ClosedCaption {...args} />
)

export const Cloud = (args: StorybookArgs): React.ReactElement => (
  <Icon.Cloud {...args} />
)

export const Code = (args: StorybookArgs): React.ReactElement => (
  <Icon.Code {...args} />
)

export const Comment = (args: StorybookArgs): React.ReactElement => (
  <Icon.Comment {...args} />
)

export const ConnectWithoutContact = (
  args: StorybookArgs
): React.ReactElement => <Icon.ConnectWithoutContact {...args} />
export const Construction = (args: StorybookArgs): React.ReactElement => (
  <Icon.Construction {...args} />
)

export const ConstructionWorker = (args: StorybookArgs): React.ReactElement => (
  <Icon.ConstructionWorker {...args} />
)

export const ContactPage = (args: StorybookArgs): React.ReactElement => (
  <Icon.ContactPage {...args} />
)

export const ContentCopy = (args: StorybookArgs): React.ReactElement => (
  <Icon.ContentCopy {...args} />
)

export const Coronavirus = (args: StorybookArgs): React.ReactElement => (
  <Icon.Coronavirus {...args} />
)

export const CreditCard = (args: StorybookArgs): React.ReactElement => (
  <Icon.CreditCard {...args} />
)

export const Deck = (args: StorybookArgs): React.ReactElement => (
  <Icon.Deck {...args} />
)

export const DeleteIcon = (args: StorybookArgs): React.ReactElement => (
  <Icon.Delete {...args} />
)

export const DeviceThermostat = (args: StorybookArgs): React.ReactElement => (
  <Icon.DeviceThermostat {...args} />
)

export const Directions = (args: StorybookArgs): React.ReactElement => (
  <Icon.Directions {...args} />
)

export const DirectionsBike = (args: StorybookArgs): React.ReactElement => (
  <Icon.DirectionsBike {...args} />
)

export const DirectionsBus = (args: StorybookArgs): React.ReactElement => (
  <Icon.DirectionsBus {...args} />
)

export const DirectionsCar = (args: StorybookArgs): React.ReactElement => (
  <Icon.DirectionsCar {...args} />
)

export const DirectionsWalk = (args: StorybookArgs): React.ReactElement => (
  <Icon.DirectionsWalk {...args} />
)

export const DoNotDisturb = (args: StorybookArgs): React.ReactElement => (
  <Icon.DoNotDisturb {...args} />
)

export const DoNotTouch = (args: StorybookArgs): React.ReactElement => (
  <Icon.DoNotTouch {...args} />
)

export const DragHandle = (args: StorybookArgs): React.ReactElement => (
  <Icon.DragHandle {...args} />
)

export const Eco = (args: StorybookArgs): React.ReactElement => (
  <Icon.Eco {...args} />
)

export const Edit = (args: StorybookArgs): React.ReactElement => (
  <Icon.Edit {...args} />
)

export const ElectricalServices = (args: StorybookArgs): React.ReactElement => (
  <Icon.ElectricalServices {...args} />
)

export const EmojiEvents = (args: StorybookArgs): React.ReactElement => (
  <Icon.EmojiEvents {...args} />
)

export const Error = (args: StorybookArgs): React.ReactElement => (
  <Icon.Error {...args} />
)

export const ErrorOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.ErrorOutline {...args} />
)

export const Event = (args: StorybookArgs): React.ReactElement => (
  <Icon.Event {...args} />
)

export const ExpandLess = (args: StorybookArgs): React.ReactElement => (
  <Icon.ExpandLess {...args} />
)

export const ExpandMore = (args: StorybookArgs): React.ReactElement => (
  <Icon.ExpandMore {...args} />
)

export const Facebook = (args: StorybookArgs): React.ReactElement => (
  <Icon.Facebook {...args} />
)

export const FastForward = (args: StorybookArgs): React.ReactElement => (
  <Icon.FastForward {...args} />
)

export const FastRewind = (args: StorybookArgs): React.ReactElement => (
  <Icon.FastRewind {...args} />
)

export const Favorite = (args: StorybookArgs): React.ReactElement => (
  <Icon.Favorite {...args} />
)

export const FavoriteBorder = (args: StorybookArgs): React.ReactElement => (
  <Icon.FavoriteBorder {...args} />
)

export const Fax = (args: StorybookArgs): React.ReactElement => (
  <Icon.Fax {...args} />
)

export const FileDownload = (args: StorybookArgs): React.ReactElement => (
  <Icon.FileDownload {...args} />
)

export const FilePresent = (args: StorybookArgs): React.ReactElement => (
  <Icon.FilePresent {...args} />
)

export const FileUpload = (args: StorybookArgs): React.ReactElement => (
  <Icon.FileUpload {...args} />
)

export const FilterAlt = (args: StorybookArgs): React.ReactElement => (
  <Icon.FilterAlt {...args} />
)

export const FilterList = (args: StorybookArgs): React.ReactElement => (
  <Icon.FilterList {...args} />
)

export const Fingerprint = (args: StorybookArgs): React.ReactElement => (
  <Icon.Fingerprint {...args} />
)

export const FirstPage = (args: StorybookArgs): React.ReactElement => (
  <Icon.FirstPage {...args} />
)

export const Flag = (args: StorybookArgs): React.ReactElement => (
  <Icon.Flag {...args} />
)

export const Flickr = (args: StorybookArgs): React.ReactElement => (
  <Icon.Flickr {...args} />
)

export const Flight = (args: StorybookArgs): React.ReactElement => (
  <Icon.Flight {...args} />
)

export const Flooding = (args: StorybookArgs): React.ReactElement => (
  <Icon.Flooding {...args} />
)

export const Folder = (args: StorybookArgs): React.ReactElement => (
  <Icon.Folder {...args} />
)

export const FolderOpen = (args: StorybookArgs): React.ReactElement => (
  <Icon.FolderOpen {...args} />
)

export const FormatQuote = (args: StorybookArgs): React.ReactElement => (
  <Icon.FormatQuote {...args} />
)

export const FormatSize = (args: StorybookArgs): React.ReactElement => (
  <Icon.FormatSize {...args} />
)

export const Forum = (args: StorybookArgs): React.ReactElement => (
  <Icon.Forum {...args} />
)

export const Github = (args: StorybookArgs): React.ReactElement => (
  <Icon.Github {...args} />
)

export const GridView = (args: StorybookArgs): React.ReactElement => (
  <Icon.GridView {...args} />
)

export const GroupAdd = (args: StorybookArgs): React.ReactElement => (
  <Icon.GroupAdd {...args} />
)

export const Groups = (args: StorybookArgs): React.ReactElement => (
  <Icon.Groups {...args} />
)

export const Hearing = (args: StorybookArgs): React.ReactElement => (
  <Icon.Hearing {...args} />
)

export const Help = (args: StorybookArgs): React.ReactElement => (
  <Icon.Help {...args} />
)

export const HelpOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.HelpOutline {...args} />
)

export const HighlightOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.HighlightOff {...args} />
)

export const History = (args: StorybookArgs): React.ReactElement => (
  <Icon.History {...args} />
)

export const Home = (args: StorybookArgs): React.ReactElement => (
  <Icon.Home {...args} />
)

export const Hospital = (args: StorybookArgs): React.ReactElement => (
  <Icon.Hospital {...args} />
)

export const Hotel = (args: StorybookArgs): React.ReactElement => (
  <Icon.Hotel {...args} />
)

export const HourglassEmpty = (args: StorybookArgs): React.ReactElement => (
  <Icon.HourglassEmpty {...args} />
)

export const Hurricane = (args: StorybookArgs): React.ReactElement => (
  <Icon.Hurricane {...args} />
)

export const Identification = (args: StorybookArgs): React.ReactElement => (
  <Icon.Identification {...args} />
)

export const Image = (args: StorybookArgs): React.ReactElement => (
  <Icon.Image {...args} />
)

export const Info = (args: StorybookArgs): React.ReactElement => (
  <Icon.Info {...args} />
)

export const InfoOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.InfoOutline {...args} />
)

export const Insights = (args: StorybookArgs): React.ReactElement => (
  <Icon.Insights {...args} />
)

export const Instagram = (args: StorybookArgs): React.ReactElement => (
  <Icon.Instagram {...args} />
)

export const Keyboard = (args: StorybookArgs): React.ReactElement => (
  <Icon.Keyboard {...args} />
)

export const Label = (args: StorybookArgs): React.ReactElement => (
  <Icon.Label {...args} />
)

export const Language = (args: StorybookArgs): React.ReactElement => (
  <Icon.Language {...args} />
)

export const LastPage = (args: StorybookArgs): React.ReactElement => (
  <Icon.LastPage {...args} />
)

export const Launch = (args: StorybookArgs): React.ReactElement => (
  <Icon.Launch {...args} />
)

export const Lightbulb = (args: StorybookArgs): React.ReactElement => (
  <Icon.Lightbulb {...args} />
)

export const LightbulbOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.LightbulbOutline {...args} />
)

export const Link = (args: StorybookArgs): React.ReactElement => (
  <Icon.Link {...args} />
)

export const LinkedIn = (args: StorybookArgs): React.ReactElement => (
  <Icon.LinkedIn {...args} />
)

export const LinkOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.LinkOff {...args} />
)

export const List = (args: StorybookArgs): React.ReactElement => (
  <Icon.List {...args} />
)

export const LocalCafe = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalCafe {...args} />
)

export const LocalFireDepartment = (
  args: StorybookArgs
): React.ReactElement => <Icon.LocalFireDepartment {...args} />
export const LocalGasStation = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalGasStation {...args} />
)

export const LocalGroceryStore = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalGroceryStore {...args} />
)

export const LocalHospital = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalHospital {...args} />
)

export const LocalLaundryService = (
  args: StorybookArgs
): React.ReactElement => <Icon.LocalLaundryService {...args} />
export const LocalLibrary = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalLibrary {...args} />
)

export const LocalOffer = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalOffer {...args} />
)

export const LocalParking = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalParking {...args} />
)

export const LocalPharmacy = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalPharmacy {...args} />
)

export const LocalPolice = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalPolice {...args} />
)

export const LocalTaxi = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalTaxi {...args} />
)

export const LocationCity = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocationCity {...args} />
)

export const LocationOn = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocationOn {...args} />
)

export const Lock = (args: StorybookArgs): React.ReactElement => (
  <Icon.Lock {...args} />
)

export const LockOpen = (args: StorybookArgs): React.ReactElement => (
  <Icon.LockOpen {...args} />
)

export const LockOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.LockOutline {...args} />
)

export const Login = (args: StorybookArgs): React.ReactElement => (
  <Icon.Login {...args} />
)

export const Logout = (args: StorybookArgs): React.ReactElement => (
  <Icon.Logout {...args} />
)

export const Loop = (args: StorybookArgs): React.ReactElement => (
  <Icon.Loop {...args} />
)

export const Mail = (args: StorybookArgs): React.ReactElement => (
  <Icon.Mail {...args} />
)

export const MailOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.MailOutline {...args} />
)

export const Map = (args: StorybookArgs): React.ReactElement => (
  <Icon.Map {...args} />
)

export const Masks = (args: StorybookArgs): React.ReactElement => (
  <Icon.Masks {...args} />
)

export const MedicalServices = (args: StorybookArgs): React.ReactElement => (
  <Icon.MedicalServices {...args} />
)

export const Menu = (args: StorybookArgs): React.ReactElement => (
  <Icon.Menu {...args} />
)

export const MilitaryTech = (args: StorybookArgs): React.ReactElement => (
  <Icon.MilitaryTech {...args} />
)

export const MoreHoriz = (args: StorybookArgs): React.ReactElement => (
  <Icon.MoreHoriz {...args} />
)

export const MoreVert = (args: StorybookArgs): React.ReactElement => (
  <Icon.MoreVert {...args} />
)

export const MyLocation = (args: StorybookArgs): React.ReactElement => (
  <Icon.MyLocation {...args} />
)

export const NavigateBefore = (args: StorybookArgs): React.ReactElement => (
  <Icon.NavigateBefore {...args} />
)

export const NavigateNext = (args: StorybookArgs): React.ReactElement => (
  <Icon.NavigateNext {...args} />
)

export const NavigateFarBefore = (args: StorybookArgs): React.ReactElement => (
  <Icon.NavigateFarBefore {...args} />
)

export const NavigateFarNext = (args: StorybookArgs): React.ReactElement => (
  <Icon.NavigateFarNext {...args} />
)

export const NearMe = (args: StorybookArgs): React.ReactElement => (
  <Icon.NearMe {...args} />
)

export const Notifications = (args: StorybookArgs): React.ReactElement => (
  <Icon.Notifications {...args} />
)

export const NotificationsActive = (
  args: StorybookArgs
): React.ReactElement => <Icon.NotificationsActive {...args} />
export const NotificationsNone = (args: StorybookArgs): React.ReactElement => (
  <Icon.NotificationsNone {...args} />
)

export const NotificationsOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.NotificationsOff {...args} />
)

export const Park = (args: StorybookArgs): React.ReactElement => (
  <Icon.Park {...args} />
)

export const People = (args: StorybookArgs): React.ReactElement => (
  <Icon.People {...args} />
)

export const Person = (args: StorybookArgs): React.ReactElement => (
  <Icon.Person {...args} />
)

export const Pets = (args: StorybookArgs): React.ReactElement => (
  <Icon.Pets {...args} />
)

export const Phone = (args: StorybookArgs): React.ReactElement => (
  <Icon.Phone {...args} />
)

export const PhotoCamera = (args: StorybookArgs): React.ReactElement => (
  <Icon.PhotoCamera {...args} />
)

export const Print = (args: StorybookArgs): React.ReactElement => (
  <Icon.Print {...args} />
)

export const PriorityHigh = (args: StorybookArgs): React.ReactElement => (
  <Icon.PriorityHigh {...args} />
)

export const PublicIcon = (args: StorybookArgs): React.ReactElement => (
  <Icon.Public {...args} />
)

export const PushPin = (args: StorybookArgs): React.ReactElement => (
  <Icon.PushPin {...args} />
)

export const RadioButtonUnchecked = (
  args: StorybookArgs
): React.ReactElement => <Icon.RadioButtonUnchecked {...args} />
export const Rain = (args: StorybookArgs): React.ReactElement => (
  <Icon.Rain {...args} />
)

export const ReduceCapacity = (args: StorybookArgs): React.ReactElement => (
  <Icon.ReduceCapacity {...args} />
)

export const Remove = (args: StorybookArgs): React.ReactElement => (
  <Icon.Remove {...args} />
)

export const RemoveCircle = (args: StorybookArgs): React.ReactElement => (
  <Icon.RemoveCircle {...args} />
)

export const Report = (args: StorybookArgs): React.ReactElement => (
  <Icon.Report {...args} />
)

export const Restaurant = (args: StorybookArgs): React.ReactElement => (
  <Icon.Restaurant {...args} />
)

export const RssFeed = (args: StorybookArgs): React.ReactElement => (
  <Icon.RssFeed {...args} />
)

export const SafetyDivider = (args: StorybookArgs): React.ReactElement => (
  <Icon.SafetyDivider {...args} />
)

export const Sanitizer = (args: StorybookArgs): React.ReactElement => (
  <Icon.Sanitizer {...args} />
)

export const SaveAlt = (args: StorybookArgs): React.ReactElement => (
  <Icon.SaveAlt {...args} />
)

export const SevereWeather = (args: StorybookArgs): React.ReactElement => (
  <Icon.SevereWeather {...args} />
)

export const Schedule = (args: StorybookArgs): React.ReactElement => (
  <Icon.Schedule {...args} />
)

export const School = (args: StorybookArgs): React.ReactElement => (
  <Icon.School {...args} />
)

export const Science = (args: StorybookArgs): React.ReactElement => (
  <Icon.Science {...args} />
)

export const Search = (args: StorybookArgs): React.ReactElement => (
  <Icon.Search {...args} />
)

export const Security = (args: StorybookArgs): React.ReactElement => (
  <Icon.Security {...args} />
)

export const Send = (args: StorybookArgs): React.ReactElement => (
  <Icon.Send {...args} />
)

export const SentimentDissatisfied = (
  args: StorybookArgs
): React.ReactElement => <Icon.SentimentDissatisfied {...args} />
export const SentimentNeutral = (args: StorybookArgs): React.ReactElement => (
  <Icon.SentimentNeutral {...args} />
)

export const SentimentSatisfied = (args: StorybookArgs): React.ReactElement => (
  <Icon.SentimentSatisfied {...args} />
)

export const SentimentSatisfiedAlt = (
  args: StorybookArgs
): React.ReactElement => <Icon.SentimentSatisfiedAlt {...args} />
export const SentimentVeryDissatisfied = (
  args: StorybookArgs
): React.ReactElement => <Icon.SentimentVeryDissatisfied {...args} />
export const Settings = (args: StorybookArgs): React.ReactElement => (
  <Icon.Settings {...args} />
)

export const Share = (args: StorybookArgs): React.ReactElement => (
  <Icon.Share {...args} />
)

export const Shield = (args: StorybookArgs): React.ReactElement => (
  <Icon.Shield {...args} />
)

export const ShoppingBasket = (args: StorybookArgs): React.ReactElement => (
  <Icon.ShoppingBasket {...args} />
)

export const Snow = (args: StorybookArgs): React.ReactElement => (
  <Icon.Snow {...args} />
)

export const Soap = (args: StorybookArgs): React.ReactElement => (
  <Icon.Soap {...args} />
)

export const SocialDistance = (args: StorybookArgs): React.ReactElement => (
  <Icon.SocialDistance {...args} />
)

export const SortArrow = (args: StorybookArgs): React.ReactElement => (
  <Icon.SortArrow {...args} />
)

export const Spellcheck = (args: StorybookArgs): React.ReactElement => (
  <Icon.Spellcheck {...args} />
)

export const Star = (args: StorybookArgs): React.ReactElement => (
  <Icon.Star {...args} />
)

export const StarHalf = (args: StorybookArgs): React.ReactElement => (
  <Icon.StarHalf {...args} />
)

export const StarOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.StarOutline {...args} />
)

export const Store = (args: StorybookArgs): React.ReactElement => (
  <Icon.Store {...args} />
)

export const Support = (args: StorybookArgs): React.ReactElement => (
  <Icon.Support {...args} />
)

export const SupportAgent = (args: StorybookArgs): React.ReactElement => (
  <Icon.SupportAgent {...args} />
)

export const TextFields = (args: StorybookArgs): React.ReactElement => (
  <Icon.TextFields {...args} />
)

export const ThumbDownAlt = (args: StorybookArgs): React.ReactElement => (
  <Icon.ThumbDownAlt {...args} />
)

export const ThumbUpAlt = (args: StorybookArgs): React.ReactElement => (
  <Icon.ThumbUpAlt {...args} />
)

export const Timer = (args: StorybookArgs): React.ReactElement => (
  <Icon.Timer {...args} />
)

export const ToggleOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.ToggleOff {...args} />
)

export const ToggleOn = (args: StorybookArgs): React.ReactElement => (
  <Icon.ToggleOn {...args} />
)

export const Topic = (args: StorybookArgs): React.ReactElement => (
  <Icon.Topic {...args} />
)

export const Tornado = (args: StorybookArgs): React.ReactElement => (
  <Icon.Tornado {...args} />
)

export const Translate = (args: StorybookArgs): React.ReactElement => (
  <Icon.Translate {...args} />
)

export const TrendingDown = (args: StorybookArgs): React.ReactElement => (
  <Icon.TrendingDown {...args} />
)

export const TrendingUp = (args: StorybookArgs): React.ReactElement => (
  <Icon.TrendingUp {...args} />
)

export const Twitter = (args: StorybookArgs): React.ReactElement => (
  <Icon.Twitter {...args} />
)

export const Undo = (args: StorybookArgs): React.ReactElement => (
  <Icon.Undo {...args} />
)

export const UnfoldLess = (args: StorybookArgs): React.ReactElement => (
  <Icon.UnfoldLess {...args} />
)

export const UnfoldMore = (args: StorybookArgs): React.ReactElement => (
  <Icon.UnfoldMore {...args} />
)

export const Update = (args: StorybookArgs): React.ReactElement => (
  <Icon.Update {...args} />
)

export const UploadFile = (args: StorybookArgs): React.ReactElement => (
  <Icon.UploadFile {...args} />
)

export const Verified = (args: StorybookArgs): React.ReactElement => (
  <Icon.Verified {...args} />
)

export const VerifiedUser = (args: StorybookArgs): React.ReactElement => (
  <Icon.VerifiedUser {...args} />
)

export const Visibility = (args: StorybookArgs): React.ReactElement => (
  <Icon.Visibility {...args} />
)

export const VisibilityOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.VisibilityOff {...args} />
)

export const VolumeOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.VolumeOff {...args} />
)

export const Warning = (args: StorybookArgs): React.ReactElement => (
  <Icon.Warning {...args} />
)

export const Wash = (args: StorybookArgs): React.ReactElement => (
  <Icon.Wash {...args} />
)

export const Wifi = (args: StorybookArgs): React.ReactElement => (
  <Icon.Wifi {...args} />
)

export const Work = (args: StorybookArgs): React.ReactElement => (
  <Icon.Work {...args} />
)

export const X = (args: StorybookArgs): React.ReactElement => (
  <Icon.X {...args} />
)

export const Youtube = (args: StorybookArgs): React.ReactElement => (
  <Icon.Youtube {...args} />
)

export const ZoomIn = (args: StorybookArgs): React.ReactElement => (
  <Icon.ZoomIn {...args} />
)

export const ZoomOutMap = (args: StorybookArgs): React.ReactElement => (
  <Icon.ZoomOutMap {...args} />
)

export const ZoomOut = (args: StorybookArgs): React.ReactElement => (
  <Icon.ZoomOut {...args} />
)
