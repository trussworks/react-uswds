import React from 'react'

import { Icon } from './Icons'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
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
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AccessibilityNew: Story = {
  render: (args) => <Icon.AccessibilityNew {...args} />,
}

export const AccessibleForward: Story = {
  render: (args) => <Icon.AccessibleForward {...args} />,
}

export const AccountBalance: Story = {
  render: (args) => <Icon.AccountBalance {...args} />,
}

export const AccountBox: Story = {
  render: (args) => <Icon.AccountBox {...args} />,
}

export const AccountCircle: Story = {
  render: (args) => <Icon.AccountCircle {...args} />,
}

export const Add: Story = {
  render: (args) => <Icon.Add {...args} />,
}

export const AddCircle: Story = {
  render: (args) => <Icon.AddCircle {...args} />,
}

export const AddCircleOutline: Story = {
  render: (args) => <Icon.AddCircleOutline {...args} />,
}

export const Alarm: Story = {
  render: (args) => <Icon.Alarm {...args} />,
}

export const AlternateEmail: Story = {
  render: (args) => <Icon.AlternateEmail {...args} />,
}

export const Announcement: Story = {
  render: (args) => <Icon.Announcement {...args} />,
}

export const ArrowBack: Story = {
  render: (args) => <Icon.ArrowBack {...args} />,
}

export const ArrowDownward: Story = {
  render: (args) => <Icon.ArrowDownward {...args} />,
}

export const ArrowDropDown: Story = {
  render: (args) => <Icon.ArrowDropDown {...args} />,
}

export const ArrowDropUp: Story = {
  render: (args) => <Icon.ArrowDropUp {...args} />,
}

export const ArrowForward: Story = {
  render: (args) => <Icon.ArrowForward {...args} />,
}

export const ArrowUpward: Story = {
  render: (args) => <Icon.ArrowUpward {...args} />,
}

export const Api: Story = {
  render: (args) => <Icon.Api {...args} />,
}

export const Assessment: Story = {
  render: (args) => <Icon.Assessment {...args} />,
}

export const AttachFile: Story = {
  render: (args) => <Icon.AttachFile {...args} />,
}

export const AttachMoney: Story = {
  render: (args) => <Icon.AttachMoney {...args} />,
}

export const Autorenew: Story = {
  render: (args) => <Icon.Autorenew {...args} />,
}

export const Backpack: Story = {
  render: (args) => <Icon.Backpack {...args} />,
}

export const Bathtub: Story = {
  render: (args) => <Icon.Bathtub {...args} />,
}

export const Bedding: Story = {
  render: (args) => <Icon.Bedding {...args} />,
}

export const Bookmark: Story = {
  render: (args) => <Icon.Bookmark {...args} />,
}

export const BugReport: Story = {
  render: (args) => <Icon.BugReport {...args} />,
}

export const Build: Story = {
  render: (args) => <Icon.Build {...args} />,
}

export const CalendarToday: Story = {
  render: (args) => <Icon.CalendarToday {...args} />,
}

export const Campaign: Story = {
  render: (args) => <Icon.Campaign {...args} />,
}

export const Camping: Story = {
  render: (args) => <Icon.Camping {...args} />,
}

export const Cancel: Story = {
  render: (args) => <Icon.Cancel {...args} />,
}

export const Chat: Story = {
  render: (args) => <Icon.Chat {...args} />,
}

export const Check: Story = {
  render: (args) => <Icon.Check {...args} />,
}

export const CheckBoxOutlineBlank: Story = {
  render: (args) => <Icon.CheckBoxOutlineBlank {...args} />,
}

export const CheckCircle: Story = {
  render: (args) => <Icon.CheckCircle {...args} />,
}

export const CheckCircleOutline: Story = {
  render: (args) => <Icon.CheckCircleOutline {...args} />,
}

export const Checkroom: Story = {
  render: (args) => <Icon.Checkroom {...args} />,
}

export const CleanHands: Story = {
  render: (args) => <Icon.CleanHands {...args} />,
}

export const Clothes: Story = {
  render: (args) => <Icon.Clothes {...args} />,
}

export const Close: Story = {
  render: (args) => <Icon.Close {...args} />,
}

export const ClosedCaption: Story = {
  render: (args) => <Icon.ClosedCaption {...args} />,
}

export const Cloud: Story = {
  render: (args) => <Icon.Cloud {...args} />,
}

export const Code: Story = {
  render: (args) => <Icon.Code {...args} />,
}

export const Comment: Story = {
  render: (args) => <Icon.Comment {...args} />,
}

export const ConnectWithoutContact: Story = {
  render: (args) => <Icon.ConnectWithoutContact {...args} />,
}

export const Construction: Story = {
  render: (args) => <Icon.Construction {...args} />,
}

export const ConstructionWorker: Story = {
  render: (args) => <Icon.ConstructionWorker {...args} />,
}

export const ContactPage: Story = {
  render: (args) => <Icon.ContactPage {...args} />,
}

export const ContentCopy: Story = {
  render: (args) => <Icon.ContentCopy {...args} />,
}

export const Coronavirus: Story = {
  render: (args) => <Icon.Coronavirus {...args} />,
}

export const CreditCard: Story = {
  render: (args) => <Icon.CreditCard {...args} />,
}

export const Deck: Story = {
  render: (args) => <Icon.Deck {...args} />,
}

export const DeleteIcon: Story = {
  render: (args) => <Icon.Delete {...args} />,
}

export const DeviceThermostat: Story = {
  render: (args) => <Icon.DeviceThermostat {...args} />,
}

export const Directions: Story = {
  render: (args) => <Icon.Directions {...args} />,
}

export const DirectionsBike: Story = {
  render: (args) => <Icon.DirectionsBike {...args} />,
}

export const DirectionsBus: Story = {
  render: (args) => <Icon.DirectionsBus {...args} />,
}

export const DirectionsCar: Story = {
  render: (args) => <Icon.DirectionsCar {...args} />,
}

export const DirectionsWalk: Story = {
  render: (args) => <Icon.DirectionsWalk {...args} />,
}

export const DoNotDisturb: Story = {
  render: (args) => <Icon.DoNotDisturb {...args} />,
}

export const DoNotTouch: Story = {
  render: (args) => <Icon.DoNotTouch {...args} />,
}

export const DragHandle: Story = {
  render: (args) => <Icon.DragHandle {...args} />,
}

export const Eco: Story = {
  render: (args) => <Icon.Eco {...args} />,
}

export const Edit: Story = {
  render: (args) => <Icon.Edit {...args} />,
}

export const ElectricalServices: Story = {
  render: (args) => <Icon.ElectricalServices {...args} />,
}

export const EmojiEvents: Story = {
  render: (args) => <Icon.EmojiEvents {...args} />,
}

export const Error: Story = {
  render: (args) => <Icon.Error {...args} />,
}

export const ErrorOutline: Story = {
  render: (args) => <Icon.ErrorOutline {...args} />,
}

export const Event: Story = {
  render: (args) => <Icon.Event {...args} />,
}

export const ExpandLess: Story = {
  render: (args) => <Icon.ExpandLess {...args} />,
}

export const ExpandMore: Story = {
  render: (args) => <Icon.ExpandMore {...args} />,
}

export const Facebook: Story = {
  render: (args) => <Icon.Facebook {...args} />,
}

export const FastForward: Story = {
  render: (args) => <Icon.FastForward {...args} />,
}

export const FastRewind: Story = {
  render: (args) => <Icon.FastRewind {...args} />,
}

export const Favorite: Story = {
  render: (args) => <Icon.Favorite {...args} />,
}

export const FavoriteBorder: Story = {
  render: (args) => <Icon.FavoriteBorder {...args} />,
}

export const Fax: Story = {
  render: (args) => <Icon.Fax {...args} />,
}

export const FileDownload: Story = {
  render: (args) => <Icon.FileDownload {...args} />,
}

export const FilePresent: Story = {
  render: (args) => <Icon.FilePresent {...args} />,
}

export const FileUpload: Story = {
  render: (args) => <Icon.FileUpload {...args} />,
}

export const FilterAlt: Story = {
  render: (args) => <Icon.FilterAlt {...args} />,
}

export const FilterList: Story = {
  render: (args) => <Icon.FilterList {...args} />,
}

export const Fingerprint: Story = {
  render: (args) => <Icon.Fingerprint {...args} />,
}

export const FirstPage: Story = {
  render: (args) => <Icon.FirstPage {...args} />,
}

export const Flag: Story = {
  render: (args) => <Icon.Flag {...args} />,
}

export const Flickr: Story = {
  render: (args) => <Icon.Flickr {...args} />,
}

export const Flight: Story = {
  render: (args) => <Icon.Flight {...args} />,
}

export const Flooding: Story = {
  render: (args) => <Icon.Flooding {...args} />,
}

export const Folder: Story = {
  render: (args) => <Icon.Folder {...args} />,
}

export const FolderOpen: Story = {
  render: (args) => <Icon.FolderOpen {...args} />,
}

export const FormatQuote: Story = {
  render: (args) => <Icon.FormatQuote {...args} />,
}

export const FormatSize: Story = {
  render: (args) => <Icon.FormatSize {...args} />,
}

export const Forum: Story = {
  render: (args) => <Icon.Forum {...args} />,
}

export const Github: Story = {
  render: (args) => <Icon.Github {...args} />,
}

export const GridView: Story = {
  render: (args) => <Icon.GridView {...args} />,
}

export const GroupAdd: Story = {
  render: (args) => <Icon.GroupAdd {...args} />,
}

export const Groups: Story = {
  render: (args) => <Icon.Groups {...args} />,
}

export const Hearing: Story = {
  render: (args) => <Icon.Hearing {...args} />,
}

export const Help: Story = {
  render: (args) => <Icon.Help {...args} />,
}

export const HelpOutline: Story = {
  render: (args) => <Icon.HelpOutline {...args} />,
}

export const HighlightOff: Story = {
  render: (args) => <Icon.HighlightOff {...args} />,
}

export const History: Story = {
  render: (args) => <Icon.History {...args} />,
}

export const Home: Story = {
  render: (args) => <Icon.Home {...args} />,
}

export const Hospital: Story = {
  render: (args) => <Icon.Hospital {...args} />,
}

export const Hotel: Story = {
  render: (args) => <Icon.Hotel {...args} />,
}

export const HourglassEmpty: Story = {
  render: (args) => <Icon.HourglassEmpty {...args} />,
}

export const Hurricane: Story = {
  render: (args) => <Icon.Hurricane {...args} />,
}

export const Identification: Story = {
  render: (args) => <Icon.Identification {...args} />,
}

export const Image: Story = {
  render: (args) => <Icon.Image {...args} />,
}

export const Info: Story = {
  render: (args) => <Icon.Info {...args} />,
}

export const InfoOutline: Story = {
  render: (args) => <Icon.InfoOutline {...args} />,
}

export const Insights: Story = {
  render: (args) => <Icon.Insights {...args} />,
}

export const Instagram: Story = {
  render: (args) => <Icon.Instagram {...args} />,
}

export const Keyboard: Story = {
  render: (args) => <Icon.Keyboard {...args} />,
}

export const Label: Story = {
  render: (args) => <Icon.Label {...args} />,
}

export const Language: Story = {
  render: (args) => <Icon.Language {...args} />,
}

export const LastPage: Story = {
  render: (args) => <Icon.LastPage {...args} />,
}

export const Launch: Story = {
  render: (args) => <Icon.Launch {...args} />,
}

export const Lightbulb: Story = {
  render: (args) => <Icon.Lightbulb {...args} />,
}

export const LightbulbOutline: Story = {
  render: (args) => <Icon.LightbulbOutline {...args} />,
}

export const Link: Story = {
  render: (args) => <Icon.Link {...args} />,
}

export const LinkedIn: Story = {
  render: (args) => <Icon.LinkedIn {...args} />,
}

export const LinkOff: Story = {
  render: (args) => <Icon.LinkOff {...args} />,
}

export const List: Story = {
  render: (args) => <Icon.List {...args} />,
}

export const LocalCafe: Story = {
  render: (args) => <Icon.LocalCafe {...args} />,
}

export const LocalFireDepartment: Story = {
  render: (args) => <Icon.LocalFireDepartment {...args} />,
}

export const LocalGasStation: Story = {
  render: (args) => <Icon.LocalGasStation {...args} />,
}

export const LocalGroceryStore: Story = {
  render: (args) => <Icon.LocalGroceryStore {...args} />,
}

export const LocalHospital: Story = {
  render: (args) => <Icon.LocalHospital {...args} />,
}

export const LocalLaundryService: Story = {
  render: (args) => <Icon.LocalLaundryService {...args} />,
}

export const LocalLibrary: Story = {
  render: (args) => <Icon.LocalLibrary {...args} />,
}

export const LocalOffer: Story = {
  render: (args) => <Icon.LocalOffer {...args} />,
}

export const LocalParking: Story = {
  render: (args) => <Icon.LocalParking {...args} />,
}

export const LocalPharmacy: Story = {
  render: (args) => <Icon.LocalPharmacy {...args} />,
}

export const LocalPolice: Story = {
  render: (args) => <Icon.LocalPolice {...args} />,
}

export const LocalTaxi: Story = {
  render: (args) => <Icon.LocalTaxi {...args} />,
}

export const LocationCity: Story = {
  render: (args) => <Icon.LocationCity {...args} />,
}

export const LocationOn: Story = {
  render: (args) => <Icon.LocationOn {...args} />,
}

export const Lock: Story = {
  render: (args) => <Icon.Lock {...args} />,
}

export const LockOpen: Story = {
  render: (args) => <Icon.LockOpen {...args} />,
}

export const LockOutline: Story = {
  render: (args) => <Icon.LockOutline {...args} />,
}

export const Login: Story = {
  render: (args) => <Icon.Login {...args} />,
}

export const Logout: Story = {
  render: (args) => <Icon.Logout {...args} />,
}

export const Loop: Story = {
  render: (args) => <Icon.Loop {...args} />,
}

export const Mail: Story = {
  render: (args) => <Icon.Mail {...args} />,
}

export const MailOutline: Story = {
  render: (args) => <Icon.MailOutline {...args} />,
}

export const Map: Story = {
  render: (args) => <Icon.Map {...args} />,
}

export const Masks: Story = {
  render: (args) => <Icon.Masks {...args} />,
}

export const MedicalServices: Story = {
  render: (args) => <Icon.MedicalServices {...args} />,
}

export const Menu: Story = {
  render: (args) => <Icon.Menu {...args} />,
}

export const MilitaryTech: Story = {
  render: (args) => <Icon.MilitaryTech {...args} />,
}

export const MoreHoriz: Story = {
  render: (args) => <Icon.MoreHoriz {...args} />,
}

export const MoreVert: Story = {
  render: (args) => <Icon.MoreVert {...args} />,
}

export const MyLocation: Story = {
  render: (args) => <Icon.MyLocation {...args} />,
}

export const NavigateBefore: Story = {
  render: (args) => <Icon.NavigateBefore {...args} />,
}

export const NavigateNext: Story = {
  render: (args) => <Icon.NavigateNext {...args} />,
}

export const NavigateFarBefore: Story = {
  render: (args) => <Icon.NavigateFarBefore {...args} />,
}

export const NavigateFarNext: Story = {
  render: (args) => <Icon.NavigateFarNext {...args} />,
}

export const NearMe: Story = {
  render: (args) => <Icon.NearMe {...args} />,
}

export const Notifications: Story = {
  render: (args) => <Icon.Notifications {...args} />,
}

export const NotificationsActive: Story = {
  render: (args) => <Icon.NotificationsActive {...args} />,
}

export const NotificationsNone: Story = {
  render: (args) => <Icon.NotificationsNone {...args} />,
}

export const NotificationsOff: Story = {
  render: (args) => <Icon.NotificationsOff {...args} />,
}

export const Park: Story = {
  render: (args) => <Icon.Park {...args} />,
}

export const People: Story = {
  render: (args) => <Icon.People {...args} />,
}

export const Person: Story = {
  render: (args) => <Icon.Person {...args} />,
}

export const Pets: Story = {
  render: (args) => <Icon.Pets {...args} />,
}

export const Phone: Story = {
  render: (args) => <Icon.Phone {...args} />,
}

export const PhotoCamera: Story = {
  render: (args) => <Icon.PhotoCamera {...args} />,
}

export const Print: Story = {
  render: (args) => <Icon.Print {...args} />,
}

export const PriorityHigh: Story = {
  render: (args) => <Icon.PriorityHigh {...args} />,
}

export const PublicIcon: Story = {
  render: (args) => <Icon.Public {...args} />,
}

export const PushPin: Story = {
  render: (args) => <Icon.PushPin {...args} />,
}

export const RadioButtonUnchecked: Story = {
  render: (args) => <Icon.RadioButtonUnchecked {...args} />,
}

export const Rain: Story = {
  render: (args) => <Icon.Rain {...args} />,
}

export const ReduceCapacity: Story = {
  render: (args) => <Icon.ReduceCapacity {...args} />,
}

export const Remove: Story = {
  render: (args) => <Icon.Remove {...args} />,
}

export const RemoveCircle: Story = {
  render: (args) => <Icon.RemoveCircle {...args} />,
}

export const Report: Story = {
  render: (args) => <Icon.Report {...args} />,
}

export const Restaurant: Story = {
  render: (args) => <Icon.Restaurant {...args} />,
}

export const RssFeed: Story = {
  render: (args) => <Icon.RssFeed {...args} />,
}

export const SafetyDivider: Story = {
  render: (args) => <Icon.SafetyDivider {...args} />,
}

export const Sanitizer: Story = {
  render: (args) => <Icon.Sanitizer {...args} />,
}

export const SaveAlt: Story = {
  render: (args) => <Icon.SaveAlt {...args} />,
}

export const SevereWeather: Story = {
  render: (args) => <Icon.SevereWeather {...args} />,
}

export const Schedule: Story = {
  render: (args) => <Icon.Schedule {...args} />,
}

export const School: Story = {
  render: (args) => <Icon.School {...args} />,
}

export const Science: Story = {
  render: (args) => <Icon.Science {...args} />,
}

export const Search: Story = {
  render: (args) => <Icon.Search {...args} />,
}

export const Security: Story = {
  render: (args) => <Icon.Security {...args} />,
}

export const Send: Story = {
  render: (args) => <Icon.Send {...args} />,
}

export const SentimentDissatisfied: Story = {
  render: (args) => <Icon.SentimentDissatisfied {...args} />,
}

export const SentimentNeutral: Story = {
  render: (args) => <Icon.SentimentNeutral {...args} />,
}

export const SentimentSatisfied: Story = {
  render: (args) => <Icon.SentimentSatisfied {...args} />,
}

export const SentimentSatisfiedAlt: Story = {
  render: (args) => <Icon.SentimentSatisfiedAlt {...args} />,
}
export const SentimentVeryDissatisfied: Story = {
  render: (args) => <Icon.SentimentVeryDissatisfied {...args} />,
}

export const Settings: Story = {
  render: (args) => <Icon.Settings {...args} />,
}

export const Share: Story = {
  render: (args) => <Icon.Share {...args} />,
}

export const Shield: Story = {
  render: (args) => <Icon.Shield {...args} />,
}

export const ShoppingBasket: Story = {
  render: (args) => <Icon.ShoppingBasket {...args} />,
}

export const Snow: Story = {
  render: (args) => <Icon.Snow {...args} />,
}

export const Soap: Story = {
  render: (args) => <Icon.Soap {...args} />,
}

export const SocialDistance: Story = {
  render: (args) => <Icon.SocialDistance {...args} />,
}

export const SortArrow: Story = {
  render: (args) => <Icon.SortArrow {...args} />,
}

export const Spellcheck: Story = {
  render: (args) => <Icon.Spellcheck {...args} />,
}

export const Star: Story = {
  render: (args) => <Icon.Star {...args} />,
}

export const StarHalf: Story = {
  render: (args) => <Icon.StarHalf {...args} />,
}

export const StarOutline: Story = {
  render: (args) => <Icon.StarOutline {...args} />,
}

export const Store: Story = {
  render: (args) => <Icon.Store {...args} />,
}

export const Support: Story = {
  render: (args) => <Icon.Support {...args} />,
}

export const SupportAgent: Story = {
  render: (args) => <Icon.SupportAgent {...args} />,
}

export const TextFields: Story = {
  render: (args) => <Icon.TextFields {...args} />,
}

export const ThumbDownAlt: Story = {
  render: (args) => <Icon.ThumbDownAlt {...args} />,
}

export const ThumbUpAlt: Story = {
  render: (args) => <Icon.ThumbUpAlt {...args} />,
}

export const Timer: Story = {
  render: (args) => <Icon.Timer {...args} />,
}

export const ToggleOff: Story = {
  render: (args) => <Icon.ToggleOff {...args} />,
}

export const ToggleOn: Story = {
  render: (args) => <Icon.ToggleOn {...args} />,
}

export const Topic: Story = {
  render: (args) => <Icon.Topic {...args} />,
}

export const Tornado: Story = {
  render: (args) => <Icon.Tornado {...args} />,
}

export const Translate: Story = {
  render: (args) => <Icon.Translate {...args} />,
}

export const TrendingDown: Story = {
  render: (args) => <Icon.TrendingDown {...args} />,
}

export const TrendingUp: Story = {
  render: (args) => <Icon.TrendingUp {...args} />,
}

export const Twitter: Story = {
  render: (args) => <Icon.Twitter {...args} />,
}

export const Undo: Story = {
  render: (args) => <Icon.Undo {...args} />,
}

export const UnfoldLess: Story = {
  render: (args) => <Icon.UnfoldLess {...args} />,
}

export const UnfoldMore: Story = {
  render: (args) => <Icon.UnfoldMore {...args} />,
}

export const Update: Story = {
  render: (args) => <Icon.Update {...args} />,
}

export const UploadFile: Story = {
  render: (args) => <Icon.UploadFile {...args} />,
}

export const Verified: Story = {
  render: (args) => <Icon.Verified {...args} />,
}

export const VerifiedUser: Story = {
  render: (args) => <Icon.VerifiedUser {...args} />,
}

export const Visibility: Story = {
  render: (args) => <Icon.Visibility {...args} />,
}

export const VisibilityOff: Story = {
  render: (args) => <Icon.VisibilityOff {...args} />,
}

export const VolumeOff: Story = {
  render: (args) => <Icon.VolumeOff {...args} />,
}

export const Warning: Story = {
  render: (args) => <Icon.Warning {...args} />,
}

export const Wash: Story = {
  render: (args) => <Icon.Wash {...args} />,
}

export const Wifi: Story = {
  render: (args) => <Icon.Wifi {...args} />,
}

export const Work: Story = {
  render: (args) => <Icon.Work {...args} />,
}

export const X: Story = {
  render: (args) => <Icon.X {...args} />,
}

export const Youtube: Story = {
  render: (args) => <Icon.Youtube {...args} />,
}

export const ZoomIn: Story = {
  render: (args) => <Icon.ZoomIn {...args} />,
}

export const ZoomOutMap: Story = {
  render: (args) => <Icon.ZoomOutMap {...args} />,
}

export const ZoomOut: Story = {
  render: (args) => <Icon.ZoomOut {...args} />,
}
