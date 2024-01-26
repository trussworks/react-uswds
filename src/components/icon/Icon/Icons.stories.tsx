import React from 'react'

import Icons from './Icons'

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
        type: 'select',
        options: [3, 4, 5, 6, 7, 8, 9],
      },
    },
  },
  args: {
    size: 4,
  },
}

export const AllIcons = (args: StorybookArgs): React.ReactElement => (
  <div>
    <Icons.AccessibilityNew {...args} />
    <Icons.AccessibleForward {...args} />
    <Icons.AccountBalance {...args} />
    <Icons.AccountBox {...args} />
    <Icons.AccountCircle {...args} />
    <Icons.Add {...args} />
    <Icons.AddCircle {...args} />
    <Icons.AddCircleOutline {...args} />
    <Icons.Alarm {...args} />
    <Icons.AlternateEmail {...args} />
    <Icons.Announcement {...args} />
    <Icons.ArrowBack {...args} />
    <Icons.ArrowDownward {...args} />
    <Icons.ArrowDropDown {...args} />
    <Icons.ArrowDropUp {...args} />
    <Icons.ArrowForward {...args} />
    <Icons.ArrowUpward {...args} />
    <Icons.Api {...args} />
    <Icons.Assessment {...args} />
    <Icons.AttachFile {...args} />
    <Icons.AttachMoney {...args} />
    <Icons.Autorenew {...args} />
    <Icons.Backpack {...args} />
    <Icons.Bathtub {...args} />
    <Icons.Bedding {...args} />
    <Icons.Bookmark {...args} />
    <Icons.BugReport {...args} />
    <Icons.Build {...args} />
    <Icons.CalendarToday {...args} />
    <Icons.Campaign {...args} />
    <Icons.Camping {...args} />
    <Icons.Cancel {...args} />
    <Icons.Chat {...args} />
    <Icons.Check {...args} />
    <Icons.CheckBoxOutlineBlank {...args} />
    <Icons.CheckCircle {...args} />
    <Icons.CheckCircleOutline {...args} />
    <Icons.Checkroom {...args} />
    <Icons.CleanHands {...args} />
    <Icons.Clothes {...args} />
    <Icons.Close {...args} />
    <Icons.ClosedCaption {...args} />
    <Icons.Cloud {...args} />
    <Icons.Code {...args} />
    <Icons.Comment {...args} />
    <Icons.ConnectWithoutContact {...args} />
    <Icons.Construction {...args} />
    <Icons.ConstructionWorker {...args} />
    <Icons.ContactPage {...args} />
    <Icons.ContentCopy {...args} />
    <Icons.Coronavirus {...args} />
    <Icons.CreditCard {...args} />
    <Icons.Deck {...args} />
    <Icons.Delete {...args} />
    <Icons.DeviceThermostat {...args} />
    <Icons.Directions {...args} />
    <Icons.DirectionsBike {...args} />
    <Icons.DirectionsBus {...args} />
    <Icons.DirectionsCar {...args} />
    <Icons.DirectionsWalk {...args} />
    <Icons.DoNotDisturb {...args} />
    <Icons.DoNotTouch {...args} />
    <Icons.DragHandle {...args} />
    <Icons.Eco {...args} />
    <Icons.Edit {...args} />
    <Icons.ElectricalServices {...args} />
    <Icons.EmojiEvents {...args} />
    <Icons.Error {...args} />
    <Icons.ErrorOutline {...args} />
    <Icons.Event {...args} />
    <Icons.ExpandLess {...args} />
    <Icons.ExpandMore {...args} />
    <Icons.Facebook {...args} />
    <Icons.FastForward {...args} />
    <Icons.FastRewind {...args} />
    <Icons.Favorite {...args} />
    <Icons.FavoriteBorder {...args} />
    <Icons.Fax {...args} />
    <Icons.FileDownload {...args} />
    <Icons.FilePresent {...args} />
    <Icons.FileUpload {...args} />
    <Icons.FilterAlt {...args} />
    <Icons.FilterList {...args} />
    <Icons.Fingerprint {...args} />
    <Icons.FirstPage {...args} />
    <Icons.Flag {...args} />
    <Icons.Flickr {...args} />
    <Icons.Flight {...args} />
    <Icons.Flooding {...args} />
    <Icons.Folder {...args} />
    <Icons.FolderOpen {...args} />
    <Icons.FormatQuote {...args} />
    <Icons.FormatSize {...args} />
    <Icons.Forum {...args} />
    <Icons.Github {...args} />
    <Icons.GridView {...args} />
    <Icons.GroupAdd {...args} />
    <Icons.Groups {...args} />
    <Icons.Hearing {...args} />
    <Icons.Help {...args} />
    <Icons.HelpOutline {...args} />
    <Icons.HighlightOff {...args} />
    <Icons.History {...args} />
    <Icons.Home {...args} />
    <Icons.Hospital {...args} />
    <Icons.Hotel {...args} />
    <Icons.HourglassEmpty {...args} />
    <Icons.Hurricane {...args} />
    <Icons.Identification {...args} />
    <Icons.Image {...args} />
    <Icons.Info {...args} />
    <Icons.InfoOutline {...args} />
    <Icons.Insights {...args} />
    <Icons.Instagram {...args} />
    <Icons.Keyboard {...args} />
    <Icons.Label {...args} />
    <Icons.Language {...args} />
    <Icons.LastPage {...args} />
    <Icons.Launch {...args} />
    <Icons.Lightbulb {...args} />
    <Icons.LightbulbOutline {...args} />
    <Icons.Link {...args} />
    <Icons.LinkedIn {...args} />
    <Icons.LinkOff {...args} />
    <Icons.List {...args} />
    <Icons.LocalCafe {...args} />
    <Icons.LocalFireDepartment {...args} />
    <Icons.LocalGasStation {...args} />
    <Icons.LocalGroceryStore {...args} />
    <Icons.LocalHospital {...args} />
    <Icons.LocalLaundryService {...args} />
    <Icons.LocalLibrary {...args} />
    <Icons.LocalOffer {...args} />
    <Icons.LocalParking {...args} />
    <Icons.LocalPharmacy {...args} />
    <Icons.LocalPolice {...args} />
    <Icons.LocalTaxi {...args} />
    <Icons.LocationCity {...args} />
    <Icons.LocationOn {...args} />
    <Icons.Lock {...args} />
    <Icons.LockOpen {...args} />
    <Icons.LockOutline {...args} />
    <Icons.Login {...args} />
    <Icons.Logout {...args} />
    <Icons.Loop {...args} />
    <Icons.Mail {...args} />
    <Icons.MailOutline {...args} />
    <Icons.Map {...args} />
    <Icons.Masks {...args} />
    <Icons.MedicalServices {...args} />
    <Icons.Menu {...args} />
    <Icons.MilitaryTech {...args} />
    <Icons.MoreHoriz {...args} />
    <Icons.MoreVert {...args} />
    <Icons.MyLocation {...args} />
    <Icons.NavigateBefore {...args} />
    <Icons.NavigateNext {...args} />
    <Icons.NavigateFarBefore {...args} />
    <Icons.NavigateFarNext {...args} />
    <Icons.NearMe {...args} />
    <Icons.Notifications {...args} />
    <Icons.NotificationsActive {...args} />
    <Icons.NotificationsNone {...args} />
    <Icons.NotificationsOff {...args} />
    <Icons.Park {...args} />
    <Icons.People {...args} />
    <Icons.Person {...args} />
    <Icons.Pets {...args} />
    <Icons.Phone {...args} />
    <Icons.PhotoCamera {...args} />
    <Icons.Print {...args} />
    <Icons.PriorityHigh {...args} />
    <Icons.Public {...args} />
    <Icons.PushPin {...args} />
    <Icons.RadioButtonUnchecked {...args} />
    <Icons.Rain {...args} />
    <Icons.ReduceCapacity {...args} />
    <Icons.Remove {...args} />
    <Icons.RemoveCircle {...args} />
    <Icons.Report {...args} />
    <Icons.Restaurant {...args} />
    <Icons.RssFeed {...args} />
    <Icons.SafetyDivider {...args} />
    <Icons.Sanitizer {...args} />
    <Icons.SaveAlt {...args} />
    <Icons.SevereWeather {...args} />
    <Icons.Schedule {...args} />
    <Icons.School {...args} />
    <Icons.Science {...args} />
    <Icons.Search {...args} />
    <Icons.Security {...args} />
    <Icons.Send {...args} />
    <Icons.SentimentDissatisfied {...args} />
    <Icons.SentimentNeutral {...args} />
    <Icons.SentimentSatisfied {...args} />
    <Icons.SentimentSatisfiedAlt {...args} />
    <Icons.SentimentVeryDissatisfied {...args} />
    <Icons.Settings {...args} />
    <Icons.Share {...args} />
    <Icons.Shield {...args} />
    <Icons.ShoppingBasket {...args} />
    <Icons.Snow {...args} />
    <Icons.Soap {...args} />
    <Icons.SocialDistance {...args} />
    <Icons.SortArrow {...args} />
    <Icons.Spellcheck {...args} />
    <Icons.Star {...args} />
    <Icons.StarHalf {...args} />
    <Icons.StarOutline {...args} />
    <Icons.Store {...args} />
    <Icons.Support {...args} />
    <Icons.SupportAgent {...args} />
    <Icons.TextFields {...args} />
    <Icons.ThumbDownAlt {...args} />
    <Icons.ThumbUpAlt {...args} />
    <Icons.Timer {...args} />
    <Icons.ToggleOff {...args} />
    <Icons.ToggleOn {...args} />
    <Icons.Topic {...args} />
    <Icons.Tornado {...args} />
    <Icons.Translate {...args} />
    <Icons.TrendingDown {...args} />
    <Icons.TrendingUp {...args} />
    <Icons.Twitter {...args} />
    <Icons.Undo {...args} />
    <Icons.UnfoldLess {...args} />
    <Icons.UnfoldMore {...args} />
    <Icons.Update {...args} />
    <Icons.UploadFile {...args} />
    <Icons.Verified {...args} />
    <Icons.VerifiedUser {...args} />
    <Icons.Visibility {...args} />
    <Icons.VisibilityOff {...args} />
    <Icons.VolumeOff {...args} />
    <Icons.Warning {...args} />
    <Icons.Wash {...args} />
    <Icons.Wifi {...args} />
    <Icons.Work {...args} />
    <Icons.X {...args} />
    <Icons.Youtube {...args} />
    <Icons.ZoomIn {...args} />
    <Icons.ZoomOutMap {...args} />
    <Icons.ZoomOut {...args} />
  </div>
)
