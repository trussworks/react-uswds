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
        type: 'select',
        options: [3, 4, 5, 6, 7, 8, 9],
      },
    },
  },
  args: {
    size: 4,
  }
}

export const accessibilityNew = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AccessibilityNew {...args} />
  ),
}

export const accessibleForward = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AccessibleForward {...args} />
  ),
}

export const accountBalance = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AccountBalance {...args} />
  ),
}

export const accountBox = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AccountBox {...args} />
  ),
}

export const accountCircle = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AccountCircle {...args} />
  ),
}

export const add = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Add {...args} />,
}

export const addCircle = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AddCircle {...args} />
  ),
}

export const addCircleOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AddCircleOutline {...args} />
  ),
}

export const alarm = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Alarm {...args} />,
}

export const alternateEmail = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AlternateEmail {...args} />
  ),
}

export const announcement = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Announcement {...args} />
  ),
}

export const arrowBack = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ArrowBack {...args} />
  ),
}

export const arrowDownward = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ArrowDownward {...args} />
  ),
}

export const arrowDropDown = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ArrowDropDown {...args} />
  ),
}

export const arrowDropUp = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ArrowDropUp {...args} />
  ),
}

export const arrowForward = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ArrowForward {...args} />
  ),
}

export const arrowUpward = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ArrowUpward {...args} />
  ),
}

export const api = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Api {...args} />,
}

export const assessment = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Assessment {...args} />
  ),
}

export const attachFile = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AttachFile {...args} />
  ),
}

export const attachMoney = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.AttachMoney {...args} />
  ),
}

export const autorenew = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Autorenew {...args} />
  ),
}

export const backpack = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Backpack {...args} />
  ),
}

export const bathtub = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Bathtub {...args} />
  ),
}

export const bedding = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Bedding {...args} />
  ),
}

export const bookmark = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Bookmark {...args} />
  ),
}

export const bugReport = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.BugReport {...args} />
  ),
}

export const build = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Build {...args} />,
}

export const calendarToday = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.CalendarToday {...args} />
  ),
}

export const campaign = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Campaign {...args} />
  ),
}

export const camping = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Camping {...args} />
  ),
}

export const cancel = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Cancel {...args} />
  ),
}

export const chat = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Chat {...args} />,
}

export const check = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Check {...args} />,
}

export const checkBoxOutlineBlank = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.CheckBoxOutlineBlank {...args} />
  ),
}
export const checkCircle = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.CheckCircle {...args} />
  ),
}

export const checkCircleOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.CheckCircleOutline {...args} />
  ),
}

export const checkroom = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Checkroom {...args} />
  ),
}

export const cleanHands = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.CleanHands {...args} />
  ),
}

export const clothes = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Clothes {...args} />
  ),
}

export const close = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Close {...args} />,
}

export const closedCaption = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ClosedCaption {...args} />
  ),
}

export const cloud = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Cloud {...args} />,
}

export const code = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Code {...args} />,
}

export const comment = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Comment {...args} />
  ),
}

export const connectWithoutContact = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ConnectWithoutContact {...args} />
  ),
}
export const construction = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Construction {...args} />
  ),
}

export const constructionWorker = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ConstructionWorker {...args} />
  ),
}

export const contactPage = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ContactPage {...args} />
  ),
}

export const contentCopy = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ContentCopy {...args} />
  ),
}

export const coronavirus = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Coronavirus {...args} />
  ),
}

export const creditCard = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.CreditCard {...args} />
  ),
}

export const deck = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Deck {...args} />,
}

export const deleteIcon = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Delete {...args} />
  ),
}

export const deviceThermostat = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.DeviceThermostat {...args} />
  ),
}

export const directions = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Directions {...args} />
  ),
}

export const directionsBike = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.DirectionsBike {...args} />
  ),
}

export const directionsBus = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.DirectionsBus {...args} />
  ),
}

export const directionsCar = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.DirectionsCar {...args} />
  ),
}

export const directionsWalk = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.DirectionsWalk {...args} />
  ),
}

export const doNotDisturb = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.DoNotDisturb {...args} />
  ),
}

export const doNotTouch = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.DoNotTouch {...args} />
  ),
}

export const dragHandle = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.DragHandle {...args} />
  ),
}

export const eco = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Eco {...args} />,
}

export const electricalServices = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ElectricalServices {...args} />
  ),
}

export const emojiEvents = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.EmojiEvents {...args} />
  ),
}

export const error = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Error {...args} />,
}

export const errorOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ErrorOutline {...args} />
  ),
}

export const event = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Event {...args} />,
}

export const expandLess = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ExpandLess {...args} />
  ),
}

export const expandMore = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ExpandMore {...args} />
  ),
}

export const facebook = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Facebook {...args} />
  ),
}

export const fastForward = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FastForward {...args} />
  ),
}

export const fastRewind = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FastRewind {...args} />
  ),
}

export const favorite = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Favorite {...args} />
  ),
}

export const favoriteBorder = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FavoriteBorder {...args} />
  ),
}

export const fileDownload = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FileDownload {...args} />
  ),
}

export const filePresent = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FilePresent {...args} />
  ),
}

export const fileUpload = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FileUpload {...args} />
  ),
}

export const filterAlt = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FilterAlt {...args} />
  ),
}

export const filterList = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FilterList {...args} />
  ),
}

export const fingerprint = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Fingerprint {...args} />
  ),
}

export const firstPage = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FirstPage {...args} />
  ),
}

export const flag = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Flag {...args} />,
}

export const flickr = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Flickr {...args} />
  ),
}

export const flight = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Flight {...args} />
  ),
}

export const flooding = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Flooding {...args} />
  ),
}

export const folder = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Folder {...args} />
  ),
}

export const folderOpen = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FolderOpen {...args} />
  ),
}

export const formatQuote = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FormatQuote {...args} />
  ),
}

export const formatSize = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.FormatSize {...args} />
  ),
}

export const forum = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Forum {...args} />,
}

export const github = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Github {...args} />
  ),
}

export const gridView = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.GridView {...args} />
  ),
}

export const groupAdd = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.GroupAdd {...args} />
  ),
}

export const groups = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Groups {...args} />
  ),
}

export const hearing = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Hearing {...args} />
  ),
}

export const help = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Help {...args} />,
}

export const helpOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.HelpOutline {...args} />
  ),
}

export const highlightOff = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.HighlightOff {...args} />
  ),
}

export const history = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.History {...args} />
  ),
}

export const home = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Home {...args} />,
}

export const hospital = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Hospital {...args} />
  ),
}

export const hotel = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Hotel {...args} />,
}

export const hourglassEmpty = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.HourglassEmpty {...args} />
  ),
}

export const hurricane = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Hurricane {...args} />
  ),
}

export const identification = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Identification {...args} />
  ),
}

export const image = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Image {...args} />,
}

export const info = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Info {...args} />,
}

export const infoOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.InfoOutline {...args} />
  ),
}

export const insights = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Insights {...args} />
  ),
}

export const instagram = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Instagram {...args} />
  ),
}

export const keyboard = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Keyboard {...args} />
  ),
}

export const label = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Label {...args} />,
}

export const language = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Language {...args} />
  ),
}

export const lastPage = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LastPage {...args} />
  ),
}

export const launch = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Launch {...args} />
  ),
}

export const lightbulb = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Lightbulb {...args} />
  ),
}

export const lightbulbOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LightbulbOutline {...args} />
  ),
}

export const link = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Link {...args} />,
}

export const linkOff = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LinkOff {...args} />
  ),
}

export const list = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.List {...args} />,
}

export const localCafe = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalCafe {...args} />
  ),
}

export const localFireDepartment = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalFireDepartment {...args} />
  ),
}
export const localGasStation = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalGasStation {...args} />
  ),
}

export const localGroceryStore = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalGroceryStore {...args} />
  ),
}

export const localHospital = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalHospital {...args} />
  ),
}

export const localLaundryService = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalLaundryService {...args} />
  ),
}
export const localLibrary = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalLibrary {...args} />
  ),
}

export const localOffer = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalOffer {...args} />
  ),
}

export const localParking = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalParking {...args} />
  ),
}

export const localPharmacy = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalPharmacy {...args} />
  ),
}

export const localPolice = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalPolice {...args} />
  ),
}

export const localTaxi = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocalTaxi {...args} />
  ),
}

export const locationCity = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocationCity {...args} />
  ),
}

export const locationOn = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LocationOn {...args} />
  ),
}

export const lock = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Lock {...args} />,
}

export const lockOpen = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LockOpen {...args} />
  ),
}

export const lockOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.LockOutline {...args} />
  ),
}

export const login = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Login {...args} />,
}

export const logout = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Logout {...args} />
  ),
}

export const loop = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Loop {...args} />,
}

export const mail = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Mail {...args} />,
}

export const mailOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.MailOutline {...args} />
  ),
}

export const map = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Map {...args} />,
}

export const masks = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Masks {...args} />,
}

export const medicalServices = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.MedicalServices {...args} />
  ),
}

export const menu = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Menu {...args} />,
}

export const militaryTech = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.MilitaryTech {...args} />
  ),
}

export const moreHoriz = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.MoreHoriz {...args} />
  ),
}

export const moreVert = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.MoreVert {...args} />
  ),
}

export const myLocation = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.MyLocation {...args} />
  ),
}

export const navigateBefore = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.NavigateBefore {...args} />
  ),
}

export const navigateNext = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.NavigateNext {...args} />
  ),
}

export const navigateFarBefore = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.NavigateFarBefore {...args} />
  ),
}

export const navigateFarNext = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.NavigateFarNext {...args} />
  ),
}

export const nearMe = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.NearMe {...args} />
  ),
}

export const notifications = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Notifications {...args} />
  ),
}

export const notificationsActive = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.NotificationsActive {...args} />
  ),
}
export const notificationsNone = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.NotificationsNone {...args} />
  ),
}

export const notificationsOff = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.NotificationsOff {...args} />
  ),
}

export const park = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Park {...args} />,
}

export const people = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.People {...args} />
  ),
}

export const person = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Person {...args} />
  ),
}

export const pets = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Pets {...args} />,
}

export const phone = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Phone {...args} />,
}

export const photoCamera = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.PhotoCamera {...args} />
  ),
}

export const print = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Print {...args} />,
}

export const priorityHigh = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.PriorityHigh {...args} />
  ),
}

export const publicIcon = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Public {...args} />
  ),
}

export const pushPin = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.PushPin {...args} />
  ),
}

export const radioButtonUnchecked = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.RadioButtonUnchecked {...args} />
  ),
}
export const rain = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Rain {...args} />,
}

export const reduceCapacity = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ReduceCapacity {...args} />
  ),
}

export const remove = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Remove {...args} />
  ),
}

export const report = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Report {...args} />
  ),
}

export const restaurant = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Restaurant {...args} />
  ),
}

export const rssFeed = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.RssFeed {...args} />
  ),
}

export const safetyDivider = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SafetyDivider {...args} />
  ),
}

export const sanitizer = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Sanitizer {...args} />
  ),
}

export const saveAlt = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SaveAlt {...args} />
  ),
}

export const severeWeather = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SevereWeather {...args} />
  ),
}

export const schedule = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Schedule {...args} />
  ),
}

export const school = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.School {...args} />
  ),
}

export const science = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Science {...args} />
  ),
}

export const search = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Search {...args} />
  ),
}

export const security = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Security {...args} />
  ),
}

export const send = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Send {...args} />,
}

export const sentimentDissatisfied = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SentimentDissatisfied {...args} />
  ),
}
export const sentimentNeutral = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SentimentNeutral {...args} />
  ),
}

export const sentimentSatisfied = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SentimentSatisfied {...args} />
  ),
}

export const sentimentSatisfiedAlt = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SentimentSatisfiedAlt {...args} />
  ),
}
export const sentimentVeryDissatisfied = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SentimentVeryDissatisfied {...args} />
  ),
}
export const settings = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Settings {...args} />
  ),
}

export const share = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Share {...args} />,
}

export const shield = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Shield {...args} />
  ),
}

export const shoppingBasket = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ShoppingBasket {...args} />
  ),
}

export const snow = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Snow {...args} />,
}

export const soap = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Soap {...args} />,
}

export const socialDistance = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SocialDistance {...args} />
  ),
}

export const sortArrow = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SortArrow {...args} />
  ),
}

export const spellcheck = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Spellcheck {...args} />
  ),
}

export const star = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Star {...args} />,
}

export const starHalf = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.StarHalf {...args} />
  ),
}

export const starOutline = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.StarOutline {...args} />
  ),
}

export const store = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Store {...args} />,
}

export const support = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Support {...args} />
  ),
}

export const supportAgent = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.SupportAgent {...args} />
  ),
}

export const textFields = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.TextFields {...args} />
  ),
}

export const thumbDownAlt = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ThumbDownAlt {...args} />
  ),
}

export const thumbUpAlt = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ThumbUpAlt {...args} />
  ),
}

export const timer = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Timer {...args} />,
}

export const toggleOff = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ToggleOff {...args} />
  ),
}

export const toggleOn = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ToggleOn {...args} />
  ),
}

export const topic = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Topic {...args} />,
}

export const tornado = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Tornado {...args} />
  ),
}

export const translate = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Translate {...args} />
  ),
}

export const trendingDown = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.TrendingDown {...args} />
  ),
}

export const trendingUp = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.TrendingUp {...args} />
  ),
}

export const twitter = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Twitter {...args} />
  ),
}

export const undo = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Undo {...args} />,
}

export const unfoldLess = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.UnfoldLess {...args} />
  ),
}

export const unfoldMore = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.UnfoldMore {...args} />
  ),
}

export const update = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Update {...args} />
  ),
}

export const uploadFile = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.UploadFile {...args} />
  ),
}

export const verified = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Verified {...args} />
  ),
}

export const verifiedUser = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.VerifiedUser {...args} />
  ),
}

export const visibility = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Visibility {...args} />
  ),
}

export const visibilityOff = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.VisibilityOff {...args} />
  ),
}

export const volumeOff = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.VolumeOff {...args} />
  ),
}

export const warning = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Warning {...args} />
  ),
}

export const wash = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Wash {...args} />,
}

export const wifi = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Wifi {...args} />,
}

export const work = {
  render: (args: StorybookArgs): React.ReactElement => <Icon.Work {...args} />,
}

export const youtube = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.Youtube {...args} />
  ),
}

export const zoomIn = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ZoomIn {...args} />
  ),
}

export const zoomOutMap = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ZoomOutMap {...args} />
  ),
}

export const zoomOut = {
  render: (args: StorybookArgs): React.ReactElement => (
    <Icon.ZoomOut {...args} />
  ),
}
