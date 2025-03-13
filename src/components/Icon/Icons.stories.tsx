import React, { type JSX } from 'react'

import { Icon } from './Icons'

type StorybookArgs = {
  size: 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export default {
  title: 'Components/Icons/All',
  parameters: {
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
  },
  args: {
    size: 4,
    'aria-hidden': true,
  },
}

export const AllIcons = (args: StorybookArgs): JSX.Element => (
  <div>
    <Icon.AccessibilityNew {...args} />
    <Icon.AccessibleForward {...args} />
    <Icon.AccountBalance {...args} />
    <Icon.AccountBox {...args} />
    <Icon.AccountCircle {...args} />
    <Icon.Add {...args} />
    <Icon.AddCircle {...args} />
    <Icon.AddCircleOutline {...args} />
    <Icon.Alarm {...args} />
    <Icon.AlternateEmail {...args} />
    <Icon.Announcement {...args} />
    <Icon.ArrowBack {...args} />
    <Icon.ArrowDownward {...args} />
    <Icon.ArrowDropDown {...args} />
    <Icon.ArrowDropUp {...args} />
    <Icon.ArrowForward {...args} />
    <Icon.ArrowUpward {...args} />
    <Icon.Api {...args} />
    <Icon.Assessment {...args} />
    <Icon.AttachFile {...args} />
    <Icon.AttachMoney {...args} />
    <Icon.Autorenew {...args} />
    <Icon.Backpack {...args} />
    <Icon.Bathtub {...args} />
    <Icon.Bedding {...args} />
    <Icon.Bookmark {...args} />
    <Icon.BugReport {...args} />
    <Icon.Build {...args} />
    <Icon.CalendarToday {...args} />
    <Icon.Campaign {...args} />
    <Icon.Camping {...args} />
    <Icon.Cancel {...args} />
    <Icon.Chat {...args} />
    <Icon.Check {...args} />
    <Icon.CheckBoxOutlineBlank {...args} />
    <Icon.CheckCircle {...args} />
    <Icon.CheckCircleOutline {...args} />
    <Icon.Checkroom {...args} />
    <Icon.CleanHands {...args} />
    <Icon.Clothes {...args} />
    <Icon.Close {...args} />
    <Icon.ClosedCaption {...args} />
    <Icon.Cloud {...args} />
    <Icon.Code {...args} />
    <Icon.Comment {...args} />
    <Icon.ConnectWithoutContact {...args} />
    <Icon.Construction {...args} />
    <Icon.ConstructionWorker {...args} />
    <Icon.ContactPage {...args} />
    <Icon.ContentCopy {...args} />
    <Icon.Coronavirus {...args} />
    <Icon.CreditCard {...args} />
    <Icon.Deck {...args} />
    <Icon.Delete {...args} />
    <Icon.DeviceThermostat {...args} />
    <Icon.Directions {...args} />
    <Icon.DirectionsBike {...args} />
    <Icon.DirectionsBus {...args} />
    <Icon.DirectionsCar {...args} />
    <Icon.DirectionsWalk {...args} />
    <Icon.DoNotDisturb {...args} />
    <Icon.DoNotTouch {...args} />
    <Icon.DragHandle {...args} />
    <Icon.Eco {...args} />
    <Icon.Edit {...args} />
    <Icon.ElectricalServices {...args} />
    <Icon.EmojiEvents {...args} />
    <Icon.Error {...args} />
    <Icon.ErrorOutline {...args} />
    <Icon.Event {...args} />
    <Icon.ExpandLess {...args} />
    <Icon.ExpandMore {...args} />
    <Icon.Facebook {...args} />
    <Icon.FastForward {...args} />
    <Icon.FastRewind {...args} />
    <Icon.Favorite {...args} />
    <Icon.FavoriteBorder {...args} />
    <Icon.Fax {...args} />
    <Icon.FileDownload {...args} />
    <Icon.FilePresent {...args} />
    <Icon.FileUpload {...args} />
    <Icon.FilterAlt {...args} />
    <Icon.FilterList {...args} />
    <Icon.Fingerprint {...args} />
    <Icon.FirstPage {...args} />
    <Icon.Flag {...args} />
    <Icon.Flickr {...args} />
    <Icon.Flight {...args} />
    <Icon.Flooding {...args} />
    <Icon.Folder {...args} />
    <Icon.FolderOpen {...args} />
    <Icon.FormatQuote {...args} />
    <Icon.FormatSize {...args} />
    <Icon.Forum {...args} />
    <Icon.Github {...args} />
    <Icon.GridView {...args} />
    <Icon.GroupAdd {...args} />
    <Icon.Groups {...args} />
    <Icon.Hearing {...args} />
    <Icon.Help {...args} />
    <Icon.HelpOutline {...args} />
    <Icon.HighlightOff {...args} />
    <Icon.History {...args} />
    <Icon.Home {...args} />
    <Icon.Hospital {...args} />
    <Icon.Hotel {...args} />
    <Icon.HourglassEmpty {...args} />
    <Icon.Hurricane {...args} />
    <Icon.Identification {...args} />
    <Icon.Image {...args} />
    <Icon.Info {...args} />
    <Icon.InfoOutline {...args} />
    <Icon.Insights {...args} />
    <Icon.Instagram {...args} />
    <Icon.Keyboard {...args} />
    <Icon.Label {...args} />
    <Icon.Language {...args} />
    <Icon.LastPage {...args} />
    <Icon.Launch {...args} />
    <Icon.Lightbulb {...args} />
    <Icon.LightbulbOutline {...args} />
    <Icon.Link {...args} />
    <Icon.LinkedIn {...args} />
    <Icon.LinkOff {...args} />
    <Icon.List {...args} />
    <Icon.LocalCafe {...args} />
    <Icon.LocalFireDepartment {...args} />
    <Icon.LocalGasStation {...args} />
    <Icon.LocalGroceryStore {...args} />
    <Icon.LocalHospital {...args} />
    <Icon.LocalLaundryService {...args} />
    <Icon.LocalLibrary {...args} />
    <Icon.LocalOffer {...args} />
    <Icon.LocalParking {...args} />
    <Icon.LocalPharmacy {...args} />
    <Icon.LocalPolice {...args} />
    <Icon.LocalTaxi {...args} />
    <Icon.LocationCity {...args} />
    <Icon.LocationOn {...args} />
    <Icon.Lock {...args} />
    <Icon.LockOpen {...args} />
    <Icon.LockOutline {...args} />
    <Icon.Login {...args} />
    <Icon.Logout {...args} />
    <Icon.Loop {...args} />
    <Icon.Mail {...args} />
    <Icon.MailOutline {...args} />
    <Icon.Map {...args} />
    <Icon.Masks {...args} />
    <Icon.MedicalServices {...args} />
    <Icon.Menu {...args} />
    <Icon.MilitaryTech {...args} />
    <Icon.MoreHoriz {...args} />
    <Icon.MoreVert {...args} />
    <Icon.MyLocation {...args} />
    <Icon.NavigateBefore {...args} />
    <Icon.NavigateNext {...args} />
    <Icon.NavigateFarBefore {...args} />
    <Icon.NavigateFarNext {...args} />
    <Icon.NearMe {...args} />
    <Icon.Notifications {...args} />
    <Icon.NotificationsActive {...args} />
    <Icon.NotificationsNone {...args} />
    <Icon.NotificationsOff {...args} />
    <Icon.Park {...args} />
    <Icon.People {...args} />
    <Icon.Person {...args} />
    <Icon.Pets {...args} />
    <Icon.Phone {...args} />
    <Icon.PhotoCamera {...args} />
    <Icon.Print {...args} />
    <Icon.PriorityHigh {...args} />
    <Icon.Public {...args} />
    <Icon.PushPin {...args} />
    <Icon.RadioButtonUnchecked {...args} />
    <Icon.Rain {...args} />
    <Icon.ReduceCapacity {...args} />
    <Icon.Remove {...args} />
    <Icon.RemoveCircle {...args} />
    <Icon.Report {...args} />
    <Icon.Restaurant {...args} />
    <Icon.RssFeed {...args} />
    <Icon.SafetyDivider {...args} />
    <Icon.Sanitizer {...args} />
    <Icon.SaveAlt {...args} />
    <Icon.SevereWeather {...args} />
    <Icon.Schedule {...args} />
    <Icon.School {...args} />
    <Icon.Science {...args} />
    <Icon.Search {...args} />
    <Icon.Security {...args} />
    <Icon.Send {...args} />
    <Icon.SentimentDissatisfied {...args} />
    <Icon.SentimentNeutral {...args} />
    <Icon.SentimentSatisfied {...args} />
    <Icon.SentimentSatisfiedAlt {...args} />
    <Icon.SentimentVeryDissatisfied {...args} />
    <Icon.Settings {...args} />
    <Icon.Share {...args} />
    <Icon.Shield {...args} />
    <Icon.ShoppingBasket {...args} />
    <Icon.Snow {...args} />
    <Icon.Soap {...args} />
    <Icon.SocialDistance {...args} />
    <Icon.SortArrow {...args} />
    <Icon.Spellcheck {...args} />
    <Icon.Star {...args} />
    <Icon.StarHalf {...args} />
    <Icon.StarOutline {...args} />
    <Icon.Store {...args} />
    <Icon.Support {...args} />
    <Icon.SupportAgent {...args} />
    <Icon.TextFields {...args} />
    <Icon.ThumbDownAlt {...args} />
    <Icon.ThumbUpAlt {...args} />
    <Icon.Timer {...args} />
    <Icon.ToggleOff {...args} />
    <Icon.ToggleOn {...args} />
    <Icon.Topic {...args} />
    <Icon.Tornado {...args} />
    <Icon.Translate {...args} />
    <Icon.TrendingDown {...args} />
    <Icon.TrendingUp {...args} />
    <Icon.Twitter {...args} />
    <Icon.Undo {...args} />
    <Icon.UnfoldLess {...args} />
    <Icon.UnfoldMore {...args} />
    <Icon.Update {...args} />
    <Icon.UploadFile {...args} />
    <Icon.Verified {...args} />
    <Icon.VerifiedUser {...args} />
    <Icon.Visibility {...args} />
    <Icon.VisibilityOff {...args} />
    <Icon.VolumeOff {...args} />
    <Icon.Warning {...args} />
    <Icon.Wash {...args} />
    <Icon.Wifi {...args} />
    <Icon.Work {...args} />
    <Icon.X {...args} />
    <Icon.Youtube {...args} />
    <Icon.ZoomIn {...args} />
    <Icon.ZoomOutMap {...args} />
    <Icon.ZoomOut {...args} />
  </div>
)
