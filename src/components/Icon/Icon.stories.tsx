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
  },
}

export const accessibilityNew = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccessibilityNew {...args} />
)

export const accessibleForward = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccessibleForward {...args} />
)

export const accountBalance = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccountBalance {...args} />
)

export const accountBox = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccountBox {...args} />
)

export const accountCircle = (args: StorybookArgs): React.ReactElement => (
  <Icon.AccountCircle {...args} />
)

export const add = (args: StorybookArgs): React.ReactElement => (
  <Icon.Add {...args} />
)

export const addCircle = (args: StorybookArgs): React.ReactElement => (
  <Icon.AddCircle {...args} />
)

export const addCircleOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.AddCircleOutline {...args} />
)

export const alarm = (args: StorybookArgs): React.ReactElement => (
  <Icon.Alarm {...args} />
)

export const alternateEmail = (args: StorybookArgs): React.ReactElement => (
  <Icon.AlternateEmail {...args} />
)

export const announcement = (args: StorybookArgs): React.ReactElement => (
  <Icon.Announcement {...args} />
)

export const arrowBack = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowBack {...args} />
)

export const arrowDownward = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowDownward {...args} />
)

export const arrowDropDown = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowDropDown {...args} />
)

export const arrowDropUp = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowDropUp {...args} />
)

export const arrowForward = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowForward {...args} />
)

export const arrowUpward = (args: StorybookArgs): React.ReactElement => (
  <Icon.ArrowUpward {...args} />
)

export const api = (args: StorybookArgs): React.ReactElement => (
  <Icon.Api {...args} />
)

export const assessment = (args: StorybookArgs): React.ReactElement => (
  <Icon.Assessment {...args} />
)

export const attachFile = (args: StorybookArgs): React.ReactElement => (
  <Icon.AttachFile {...args} />
)

export const attachMoney = (args: StorybookArgs): React.ReactElement => (
  <Icon.AttachMoney {...args} />
)

export const autorenew = (args: StorybookArgs): React.ReactElement => (
  <Icon.Autorenew {...args} />
)

export const backpack = (args: StorybookArgs): React.ReactElement => (
  <Icon.Backpack {...args} />
)

export const bathtub = (args: StorybookArgs): React.ReactElement => (
  <Icon.Bathtub {...args} />
)

export const bedding = (args: StorybookArgs): React.ReactElement => (
  <Icon.Bedding {...args} />
)

export const bookmark = (args: StorybookArgs): React.ReactElement => (
  <Icon.Bookmark {...args} />
)

export const bugReport = (args: StorybookArgs): React.ReactElement => (
  <Icon.BugReport {...args} />
)

export const build = (args: StorybookArgs): React.ReactElement => (
  <Icon.Build {...args} />
)

export const calendarToday = (args: StorybookArgs): React.ReactElement => (
  <Icon.CalendarToday {...args} />
)

export const campaign = (args: StorybookArgs): React.ReactElement => (
  <Icon.Campaign {...args} />
)

export const camping = (args: StorybookArgs): React.ReactElement => (
  <Icon.Camping {...args} />
)

export const cancel = (args: StorybookArgs): React.ReactElement => (
  <Icon.Cancel {...args} />
)

export const chat = (args: StorybookArgs): React.ReactElement => (
  <Icon.Chat {...args} />
)

export const check = (args: StorybookArgs): React.ReactElement => (
  <Icon.Check {...args} />
)

export const checkBoxOutlineBlank = (
  args: StorybookArgs
): React.ReactElement => <Icon.CheckBoxOutlineBlank {...args} />
export const checkCircle = (args: StorybookArgs): React.ReactElement => (
  <Icon.CheckCircle {...args} />
)

export const checkCircleOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.CheckCircleOutline {...args} />
)

export const checkroom = (args: StorybookArgs): React.ReactElement => (
  <Icon.Checkroom {...args} />
)

export const cleanHands = (args: StorybookArgs): React.ReactElement => (
  <Icon.CleanHands {...args} />
)

export const clothes = (args: StorybookArgs): React.ReactElement => (
  <Icon.Clothes {...args} />
)

export const close = (args: StorybookArgs): React.ReactElement => (
  <Icon.Close {...args} />
)

export const closedCaption = (args: StorybookArgs): React.ReactElement => (
  <Icon.ClosedCaption {...args} />
)

export const cloud = (args: StorybookArgs): React.ReactElement => (
  <Icon.Cloud {...args} />
)

export const code = (args: StorybookArgs): React.ReactElement => (
  <Icon.Code {...args} />
)

export const comment = (args: StorybookArgs): React.ReactElement => (
  <Icon.Comment {...args} />
)

export const connectWithoutContact = (
  args: StorybookArgs
): React.ReactElement => <Icon.ConnectWithoutContact {...args} />
export const construction = (args: StorybookArgs): React.ReactElement => (
  <Icon.Construction {...args} />
)

export const constructionWorker = (args: StorybookArgs): React.ReactElement => (
  <Icon.ConstructionWorker {...args} />
)

export const contactPage = (args: StorybookArgs): React.ReactElement => (
  <Icon.ContactPage {...args} />
)

export const contentCopy = (args: StorybookArgs): React.ReactElement => (
  <Icon.ContentCopy {...args} />
)

export const coronavirus = (args: StorybookArgs): React.ReactElement => (
  <Icon.Coronavirus {...args} />
)

export const creditCard = (args: StorybookArgs): React.ReactElement => (
  <Icon.CreditCard {...args} />
)

export const deck = (args: StorybookArgs): React.ReactElement => (
  <Icon.Deck {...args} />
)

export const deleteIcon = (args: StorybookArgs): React.ReactElement => (
  <Icon.Delete {...args} />
)

export const deviceThermostat = (args: StorybookArgs): React.ReactElement => (
  <Icon.DeviceThermostat {...args} />
)

export const directions = (args: StorybookArgs): React.ReactElement => (
  <Icon.Directions {...args} />
)

export const directionsBike = (args: StorybookArgs): React.ReactElement => (
  <Icon.DirectionsBike {...args} />
)

export const directionsBus = (args: StorybookArgs): React.ReactElement => (
  <Icon.DirectionsBus {...args} />
)

export const directionsCar = (args: StorybookArgs): React.ReactElement => (
  <Icon.DirectionsCar {...args} />
)

export const directionsWalk = (args: StorybookArgs): React.ReactElement => (
  <Icon.DirectionsWalk {...args} />
)

export const doNotDisturb = (args: StorybookArgs): React.ReactElement => (
  <Icon.DoNotDisturb {...args} />
)

export const doNotTouch = (args: StorybookArgs): React.ReactElement => (
  <Icon.DoNotTouch {...args} />
)

export const dragHandle = (args: StorybookArgs): React.ReactElement => (
  <Icon.DragHandle {...args} />
)

export const eco = (args: StorybookArgs): React.ReactElement => (
  <Icon.Eco {...args} />
)

export const edit = (args: StorybookArgs): React.ReactElement => (
  <Icon.Edit {...args} />
)

export const electricalServices = (args: StorybookArgs): React.ReactElement => (
  <Icon.ElectricalServices {...args} />
)

export const emojiEvents = (args: StorybookArgs): React.ReactElement => (
  <Icon.EmojiEvents {...args} />
)

export const error = (args: StorybookArgs): React.ReactElement => (
  <Icon.Error {...args} />
)

export const errorOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.ErrorOutline {...args} />
)

export const event = (args: StorybookArgs): React.ReactElement => (
  <Icon.Event {...args} />
)

export const expandLess = (args: StorybookArgs): React.ReactElement => (
  <Icon.ExpandLess {...args} />
)

export const expandMore = (args: StorybookArgs): React.ReactElement => (
  <Icon.ExpandMore {...args} />
)

export const facebook = (args: StorybookArgs): React.ReactElement => (
  <Icon.Facebook {...args} />
)

export const fastForward = (args: StorybookArgs): React.ReactElement => (
  <Icon.FastForward {...args} />
)

export const fastRewind = (args: StorybookArgs): React.ReactElement => (
  <Icon.FastRewind {...args} />
)

export const favorite = (args: StorybookArgs): React.ReactElement => (
  <Icon.Favorite {...args} />
)

export const favoriteBorder = (args: StorybookArgs): React.ReactElement => (
  <Icon.FavoriteBorder {...args} />
)

export const fax = (args: StorybookArgs): React.ReactElement => (
  <Icon.Fax {...args} />
)

export const fileDownload = (args: StorybookArgs): React.ReactElement => (
  <Icon.FileDownload {...args} />
)

export const filePresent = (args: StorybookArgs): React.ReactElement => (
  <Icon.FilePresent {...args} />
)

export const fileUpload = (args: StorybookArgs): React.ReactElement => (
  <Icon.FileUpload {...args} />
)

export const filterAlt = (args: StorybookArgs): React.ReactElement => (
  <Icon.FilterAlt {...args} />
)

export const filterList = (args: StorybookArgs): React.ReactElement => (
  <Icon.FilterList {...args} />
)

export const fingerprint = (args: StorybookArgs): React.ReactElement => (
  <Icon.Fingerprint {...args} />
)

export const firstPage = (args: StorybookArgs): React.ReactElement => (
  <Icon.FirstPage {...args} />
)

export const flag = (args: StorybookArgs): React.ReactElement => (
  <Icon.Flag {...args} />
)

export const flickr = (args: StorybookArgs): React.ReactElement => (
  <Icon.Flickr {...args} />
)

export const flight = (args: StorybookArgs): React.ReactElement => (
  <Icon.Flight {...args} />
)

export const flooding = (args: StorybookArgs): React.ReactElement => (
  <Icon.Flooding {...args} />
)

export const folder = (args: StorybookArgs): React.ReactElement => (
  <Icon.Folder {...args} />
)

export const folderOpen = (args: StorybookArgs): React.ReactElement => (
  <Icon.FolderOpen {...args} />
)

export const formatQuote = (args: StorybookArgs): React.ReactElement => (
  <Icon.FormatQuote {...args} />
)

export const formatSize = (args: StorybookArgs): React.ReactElement => (
  <Icon.FormatSize {...args} />
)

export const forum = (args: StorybookArgs): React.ReactElement => (
  <Icon.Forum {...args} />
)

export const github = (args: StorybookArgs): React.ReactElement => (
  <Icon.Github {...args} />
)

export const gridView = (args: StorybookArgs): React.ReactElement => (
  <Icon.GridView {...args} />
)

export const groupAdd = (args: StorybookArgs): React.ReactElement => (
  <Icon.GroupAdd {...args} />
)

export const groups = (args: StorybookArgs): React.ReactElement => (
  <Icon.Groups {...args} />
)

export const hearing = (args: StorybookArgs): React.ReactElement => (
  <Icon.Hearing {...args} />
)

export const help = (args: StorybookArgs): React.ReactElement => (
  <Icon.Help {...args} />
)

export const helpOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.HelpOutline {...args} />
)

export const highlightOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.HighlightOff {...args} />
)

export const history = (args: StorybookArgs): React.ReactElement => (
  <Icon.History {...args} />
)

export const home = (args: StorybookArgs): React.ReactElement => (
  <Icon.Home {...args} />
)

export const hospital = (args: StorybookArgs): React.ReactElement => (
  <Icon.Hospital {...args} />
)

export const hotel = (args: StorybookArgs): React.ReactElement => (
  <Icon.Hotel {...args} />
)

export const hourglassEmpty = (args: StorybookArgs): React.ReactElement => (
  <Icon.HourglassEmpty {...args} />
)

export const hurricane = (args: StorybookArgs): React.ReactElement => (
  <Icon.Hurricane {...args} />
)

export const identification = (args: StorybookArgs): React.ReactElement => (
  <Icon.Identification {...args} />
)

export const image = (args: StorybookArgs): React.ReactElement => (
  <Icon.Image {...args} />
)

export const info = (args: StorybookArgs): React.ReactElement => (
  <Icon.Info {...args} />
)

export const infoOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.InfoOutline {...args} />
)

export const insights = (args: StorybookArgs): React.ReactElement => (
  <Icon.Insights {...args} />
)

export const instagram = (args: StorybookArgs): React.ReactElement => (
  <Icon.Instagram {...args} />
)

export const keyboard = (args: StorybookArgs): React.ReactElement => (
  <Icon.Keyboard {...args} />
)

export const label = (args: StorybookArgs): React.ReactElement => (
  <Icon.Label {...args} />
)

export const language = (args: StorybookArgs): React.ReactElement => (
  <Icon.Language {...args} />
)

export const lastPage = (args: StorybookArgs): React.ReactElement => (
  <Icon.LastPage {...args} />
)

export const launch = (args: StorybookArgs): React.ReactElement => (
  <Icon.Launch {...args} />
)

export const lightbulb = (args: StorybookArgs): React.ReactElement => (
  <Icon.Lightbulb {...args} />
)

export const lightbulbOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.LightbulbOutline {...args} />
)

export const link = (args: StorybookArgs): React.ReactElement => (
  <Icon.Link {...args} />
)

export const linkedIn = (args: StorybookArgs): React.ReactElement => (
  <Icon.LinkedIn {...args} />
)

export const linkOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.LinkOff {...args} />
)

export const list = (args: StorybookArgs): React.ReactElement => (
  <Icon.List {...args} />
)

export const localCafe = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalCafe {...args} />
)

export const localFireDepartment = (
  args: StorybookArgs
): React.ReactElement => <Icon.LocalFireDepartment {...args} />
export const localGasStation = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalGasStation {...args} />
)

export const localGroceryStore = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalGroceryStore {...args} />
)

export const localHospital = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalHospital {...args} />
)

export const localLaundryService = (
  args: StorybookArgs
): React.ReactElement => <Icon.LocalLaundryService {...args} />
export const localLibrary = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalLibrary {...args} />
)

export const localOffer = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalOffer {...args} />
)

export const localParking = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalParking {...args} />
)

export const localPharmacy = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalPharmacy {...args} />
)

export const localPolice = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalPolice {...args} />
)

export const localTaxi = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocalTaxi {...args} />
)

export const locationCity = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocationCity {...args} />
)

export const locationOn = (args: StorybookArgs): React.ReactElement => (
  <Icon.LocationOn {...args} />
)

export const lock = (args: StorybookArgs): React.ReactElement => (
  <Icon.Lock {...args} />
)

export const lockOpen = (args: StorybookArgs): React.ReactElement => (
  <Icon.LockOpen {...args} />
)

export const lockOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.LockOutline {...args} />
)

export const login = (args: StorybookArgs): React.ReactElement => (
  <Icon.Login {...args} />
)

export const logout = (args: StorybookArgs): React.ReactElement => (
  <Icon.Logout {...args} />
)

export const loop = (args: StorybookArgs): React.ReactElement => (
  <Icon.Loop {...args} />
)

export const mail = (args: StorybookArgs): React.ReactElement => (
  <Icon.Mail {...args} />
)

export const mailOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.MailOutline {...args} />
)

export const map = (args: StorybookArgs): React.ReactElement => (
  <Icon.Map {...args} />
)

export const masks = (args: StorybookArgs): React.ReactElement => (
  <Icon.Masks {...args} />
)

export const medicalServices = (args: StorybookArgs): React.ReactElement => (
  <Icon.MedicalServices {...args} />
)

export const menu = (args: StorybookArgs): React.ReactElement => (
  <Icon.Menu {...args} />
)

export const militaryTech = (args: StorybookArgs): React.ReactElement => (
  <Icon.MilitaryTech {...args} />
)

export const moreHoriz = (args: StorybookArgs): React.ReactElement => (
  <Icon.MoreHoriz {...args} />
)

export const moreVert = (args: StorybookArgs): React.ReactElement => (
  <Icon.MoreVert {...args} />
)

export const myLocation = (args: StorybookArgs): React.ReactElement => (
  <Icon.MyLocation {...args} />
)

export const navigateBefore = (args: StorybookArgs): React.ReactElement => (
  <Icon.NavigateBefore {...args} />
)

export const navigateNext = (args: StorybookArgs): React.ReactElement => (
  <Icon.NavigateNext {...args} />
)

export const navigateFarBefore = (args: StorybookArgs): React.ReactElement => (
  <Icon.NavigateFarBefore {...args} />
)

export const navigateFarNext = (args: StorybookArgs): React.ReactElement => (
  <Icon.NavigateFarNext {...args} />
)

export const nearMe = (args: StorybookArgs): React.ReactElement => (
  <Icon.NearMe {...args} />
)

export const notifications = (args: StorybookArgs): React.ReactElement => (
  <Icon.Notifications {...args} />
)

export const notificationsActive = (
  args: StorybookArgs
): React.ReactElement => <Icon.NotificationsActive {...args} />
export const notificationsNone = (args: StorybookArgs): React.ReactElement => (
  <Icon.NotificationsNone {...args} />
)

export const notificationsOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.NotificationsOff {...args} />
)

export const park = (args: StorybookArgs): React.ReactElement => (
  <Icon.Park {...args} />
)

export const people = (args: StorybookArgs): React.ReactElement => (
  <Icon.People {...args} />
)

export const person = (args: StorybookArgs): React.ReactElement => (
  <Icon.Person {...args} />
)

export const pets = (args: StorybookArgs): React.ReactElement => (
  <Icon.Pets {...args} />
)

export const phone = (args: StorybookArgs): React.ReactElement => (
  <Icon.Phone {...args} />
)

export const photoCamera = (args: StorybookArgs): React.ReactElement => (
  <Icon.PhotoCamera {...args} />
)

export const print = (args: StorybookArgs): React.ReactElement => (
  <Icon.Print {...args} />
)

export const priorityHigh = (args: StorybookArgs): React.ReactElement => (
  <Icon.PriorityHigh {...args} />
)

export const publicIcon = (args: StorybookArgs): React.ReactElement => (
  <Icon.Public {...args} />
)

export const pushPin = (args: StorybookArgs): React.ReactElement => (
  <Icon.PushPin {...args} />
)

export const radioButtonUnchecked = (
  args: StorybookArgs
): React.ReactElement => <Icon.RadioButtonUnchecked {...args} />
export const rain = (args: StorybookArgs): React.ReactElement => (
  <Icon.Rain {...args} />
)

export const reduceCapacity = (args: StorybookArgs): React.ReactElement => (
  <Icon.ReduceCapacity {...args} />
)

export const remove = (args: StorybookArgs): React.ReactElement => (
  <Icon.Remove {...args} />
)

export const removeCircle = (args: StorybookArgs): React.ReactElement => (
  <Icon.RemoveCircle {...args} />
)

export const report = (args: StorybookArgs): React.ReactElement => (
  <Icon.Report {...args} />
)

export const restaurant = (args: StorybookArgs): React.ReactElement => (
  <Icon.Restaurant {...args} />
)

export const rssFeed = (args: StorybookArgs): React.ReactElement => (
  <Icon.RssFeed {...args} />
)

export const safetyDivider = (args: StorybookArgs): React.ReactElement => (
  <Icon.SafetyDivider {...args} />
)

export const sanitizer = (args: StorybookArgs): React.ReactElement => (
  <Icon.Sanitizer {...args} />
)

export const saveAlt = (args: StorybookArgs): React.ReactElement => (
  <Icon.SaveAlt {...args} />
)

export const severeWeather = (args: StorybookArgs): React.ReactElement => (
  <Icon.SevereWeather {...args} />
)

export const schedule = (args: StorybookArgs): React.ReactElement => (
  <Icon.Schedule {...args} />
)

export const school = (args: StorybookArgs): React.ReactElement => (
  <Icon.School {...args} />
)

export const science = (args: StorybookArgs): React.ReactElement => (
  <Icon.Science {...args} />
)

export const search = (args: StorybookArgs): React.ReactElement => (
  <Icon.Search {...args} />
)

export const security = (args: StorybookArgs): React.ReactElement => (
  <Icon.Security {...args} />
)

export const send = (args: StorybookArgs): React.ReactElement => (
  <Icon.Send {...args} />
)

export const sentimentDissatisfied = (
  args: StorybookArgs
): React.ReactElement => <Icon.SentimentDissatisfied {...args} />
export const sentimentNeutral = (args: StorybookArgs): React.ReactElement => (
  <Icon.SentimentNeutral {...args} />
)

export const sentimentSatisfied = (args: StorybookArgs): React.ReactElement => (
  <Icon.SentimentSatisfied {...args} />
)

export const sentimentSatisfiedAlt = (
  args: StorybookArgs
): React.ReactElement => <Icon.SentimentSatisfiedAlt {...args} />
export const sentimentVeryDissatisfied = (
  args: StorybookArgs
): React.ReactElement => <Icon.SentimentVeryDissatisfied {...args} />
export const settings = (args: StorybookArgs): React.ReactElement => (
  <Icon.Settings {...args} />
)

export const share = (args: StorybookArgs): React.ReactElement => (
  <Icon.Share {...args} />
)

export const shield = (args: StorybookArgs): React.ReactElement => (
  <Icon.Shield {...args} />
)

export const shoppingBasket = (args: StorybookArgs): React.ReactElement => (
  <Icon.ShoppingBasket {...args} />
)

export const snow = (args: StorybookArgs): React.ReactElement => (
  <Icon.Snow {...args} />
)

export const soap = (args: StorybookArgs): React.ReactElement => (
  <Icon.Soap {...args} />
)

export const socialDistance = (args: StorybookArgs): React.ReactElement => (
  <Icon.SocialDistance {...args} />
)

export const sortArrow = (args: StorybookArgs): React.ReactElement => (
  <Icon.SortArrow {...args} />
)

export const spellcheck = (args: StorybookArgs): React.ReactElement => (
  <Icon.Spellcheck {...args} />
)

export const star = (args: StorybookArgs): React.ReactElement => (
  <Icon.Star {...args} />
)

export const starHalf = (args: StorybookArgs): React.ReactElement => (
  <Icon.StarHalf {...args} />
)

export const starOutline = (args: StorybookArgs): React.ReactElement => (
  <Icon.StarOutline {...args} />
)

export const store = (args: StorybookArgs): React.ReactElement => (
  <Icon.Store {...args} />
)

export const support = (args: StorybookArgs): React.ReactElement => (
  <Icon.Support {...args} />
)

export const supportAgent = (args: StorybookArgs): React.ReactElement => (
  <Icon.SupportAgent {...args} />
)

export const textFields = (args: StorybookArgs): React.ReactElement => (
  <Icon.TextFields {...args} />
)

export const thumbDownAlt = (args: StorybookArgs): React.ReactElement => (
  <Icon.ThumbDownAlt {...args} />
)

export const thumbUpAlt = (args: StorybookArgs): React.ReactElement => (
  <Icon.ThumbUpAlt {...args} />
)

export const timer = (args: StorybookArgs): React.ReactElement => (
  <Icon.Timer {...args} />
)

export const toggleOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.ToggleOff {...args} />
)

export const toggleOn = (args: StorybookArgs): React.ReactElement => (
  <Icon.ToggleOn {...args} />
)

export const topic = (args: StorybookArgs): React.ReactElement => (
  <Icon.Topic {...args} />
)

export const tornado = (args: StorybookArgs): React.ReactElement => (
  <Icon.Tornado {...args} />
)

export const translate = (args: StorybookArgs): React.ReactElement => (
  <Icon.Translate {...args} />
)

export const trendingDown = (args: StorybookArgs): React.ReactElement => (
  <Icon.TrendingDown {...args} />
)

export const trendingUp = (args: StorybookArgs): React.ReactElement => (
  <Icon.TrendingUp {...args} />
)

export const twitter = (args: StorybookArgs): React.ReactElement => (
  <Icon.Twitter {...args} />
)

export const undo = (args: StorybookArgs): React.ReactElement => (
  <Icon.Undo {...args} />
)

export const unfoldLess = (args: StorybookArgs): React.ReactElement => (
  <Icon.UnfoldLess {...args} />
)

export const unfoldMore = (args: StorybookArgs): React.ReactElement => (
  <Icon.UnfoldMore {...args} />
)

export const update = (args: StorybookArgs): React.ReactElement => (
  <Icon.Update {...args} />
)

export const uploadFile = (args: StorybookArgs): React.ReactElement => (
  <Icon.UploadFile {...args} />
)

export const verified = (args: StorybookArgs): React.ReactElement => (
  <Icon.Verified {...args} />
)

export const verifiedUser = (args: StorybookArgs): React.ReactElement => (
  <Icon.VerifiedUser {...args} />
)

export const visibility = (args: StorybookArgs): React.ReactElement => (
  <Icon.Visibility {...args} />
)

export const visibilityOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.VisibilityOff {...args} />
)

export const volumeOff = (args: StorybookArgs): React.ReactElement => (
  <Icon.VolumeOff {...args} />
)

export const warning = (args: StorybookArgs): React.ReactElement => (
  <Icon.Warning {...args} />
)

export const wash = (args: StorybookArgs): React.ReactElement => (
  <Icon.Wash {...args} />
)

export const wifi = (args: StorybookArgs): React.ReactElement => (
  <Icon.Wifi {...args} />
)

export const work = (args: StorybookArgs): React.ReactElement => (
  <Icon.Work {...args} />
)

export const x = (args: StorybookArgs): React.ReactElement => (
  <Icon.X {...args} />
)

export const youtube = (args: StorybookArgs): React.ReactElement => (
  <Icon.Youtube {...args} />
)

export const zoomIn = (args: StorybookArgs): React.ReactElement => (
  <Icon.ZoomIn {...args} />
)

export const zoomOutMap = (args: StorybookArgs): React.ReactElement => (
  <Icon.ZoomOutMap {...args} />
)

export const zoomOut = (args: StorybookArgs): React.ReactElement => (
  <Icon.ZoomOut {...args} />
)
