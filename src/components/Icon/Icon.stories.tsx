import React from 'react'

import { icons, IconKeys } from './icons'
import { Icon } from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
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
        options: [3, 4, 5, 6, 7, 8, 9, undefined],
      },
      defaultValue: undefined,
    },
  },
}

export const accessibilityNew = (argTypes): React.ReactElement => (
  <Icon name="accessibilityNew" size={argTypes.size} />
)

export const accessibleForward = (argTypes): React.ReactElement => (
  <Icon name="accessibleForward" size={argTypes.size} />
)

export const accountBalance = (argTypes): React.ReactElement => (
  <Icon name="accountBalance" size={argTypes.size} />
)

export const accountBox = (argTypes): React.ReactElement => (
  <Icon name="accountBox" size={argTypes.size} />
)

export const accountCircle = (argTypes): React.ReactElement => (
  <Icon name="accountCircle" size={argTypes.size} />
)

export const add = (argTypes): React.ReactElement => (
  <Icon name="add" size={argTypes.size} />
)

export const addCircle = (argTypes): React.ReactElement => (
  <Icon name="addCircle" size={argTypes.size} />
)

export const addCircleOutline = (argTypes): React.ReactElement => (
  <Icon name="addCircleOutline" size={argTypes.size} />
)

export const alarm = (argTypes): React.ReactElement => (
  <Icon name="alarm" size={argTypes.size} />
)

export const alternateEmail = (argTypes): React.ReactElement => (
  <Icon name="alternateEmail" size={argTypes.size} />
)

export const announcement = (argTypes): React.ReactElement => (
  <Icon name="announcement" size={argTypes.size} />
)

export const arrowBack = (argTypes): React.ReactElement => (
  <Icon name="arrowBack" size={argTypes.size} />
)

export const arrowDownward = (argTypes): React.ReactElement => (
  <Icon name="arrowDownward" size={argTypes.size} />
)

export const arrowDropDown = (argTypes): React.ReactElement => (
  <Icon name="arrowDropDown" size={argTypes.size} />
)

export const arrowForward = (argTypes): React.ReactElement => (
  <Icon name="arrowForward" size={argTypes.size} />
)

export const arrowDropUp = (argTypes): React.ReactElement => (
  <Icon name="arrowDropUp" size={argTypes.size} />
)

export const arrowUpward = (argTypes): React.ReactElement => (
  <Icon name="arrowUpward" size={argTypes.size} />
)

export const api = (argTypes): React.ReactElement => (
  <Icon name="api" size={argTypes.size} />
)

export const assessment = (argTypes): React.ReactElement => (
  <Icon name="assessment" size={argTypes.size} />
)

export const attachFile = (argTypes): React.ReactElement => (
  <Icon name="attachFile" size={argTypes.size} />
)

export const attachMoney = (argTypes): React.ReactElement => (
  <Icon name="attachMoney" size={argTypes.size} />
)

export const autorenew = (argTypes): React.ReactElement => (
  <Icon name="autorenew" size={argTypes.size} />
)

export const backpack = (argTypes): React.ReactElement => (
  <Icon name="backpack" size={argTypes.size} />
)

export const bathtub = (argTypes): React.ReactElement => (
  <Icon name="bathtub" size={argTypes.size} />
)

export const bedding = (argTypes): React.ReactElement => (
  <Icon name="bedding" size={argTypes.size} />
)

export const bookmark = (argTypes): React.ReactElement => (
  <Icon name="bookmark" size={argTypes.size} />
)

export const bugReport = (argTypes): React.ReactElement => (
  <Icon name="bugReport" size={argTypes.size} />
)

export const build = (argTypes): React.ReactElement => (
  <Icon name="build" size={argTypes.size} />
)

export const calendarToday = (argTypes): React.ReactElement => (
  <Icon name="calendarToday" size={argTypes.size} />
)

export const campaign = (argTypes): React.ReactElement => (
  <Icon name="campaign" size={argTypes.size} />
)

export const camping = (argTypes): React.ReactElement => (
  <Icon name="camping" size={argTypes.size} />
)

export const cancel = (argTypes): React.ReactElement => (
  <Icon name="cancel" size={argTypes.size} />
)

export const chat = (argTypes): React.ReactElement => (
  <Icon name="chat" size={argTypes.size} />
)

export const check = (argTypes): React.ReactElement => (
  <Icon name="check" size={argTypes.size} />
)

export const checkBoxOutlineBlank = (argTypes): React.ReactElement => (
  <Icon name="checkBoxOutlineBlank" size={argTypes.size} />
)

export const checkCircle = (argTypes): React.ReactElement => (
  <Icon name="checkCircle" size={argTypes.size} />
)
export const checkCircleOutline = (argTypes): React.ReactElement => (
  <Icon name="checkCircleOutline" size={argTypes.size} />
)

export const checkroom = (argTypes): React.ReactElement => (
  <Icon name="checkroom" size={argTypes.size} />
)

export const cleanHands = (argTypes): React.ReactElement => (
  <Icon name="cleanHands" size={argTypes.size} />
)

export const clothes = (argTypes): React.ReactElement => (
  <Icon name="clothes" size={argTypes.size} />
)

export const close = (argTypes): React.ReactElement => (
  <Icon name="close" size={argTypes.size} />
)

export const closedCaption = (argTypes): React.ReactElement => (
  <Icon name="closedCaption" size={argTypes.size} />
)

export const cloud = (argTypes): React.ReactElement => (
  <Icon name="cloud" size={argTypes.size} />
)

export const code = (argTypes): React.ReactElement => (
  <Icon name="code" size={argTypes.size} />
)

export const comment = (argTypes): React.ReactElement => (
  <Icon name="comment" size={argTypes.size} />
)

export const connectWithoutContact = (argTypes): React.ReactElement => (
  <Icon name="connectWithoutContact" size={argTypes.size} />
)

export const construction = (argTypes): React.ReactElement => (
  <Icon name="construction" size={argTypes.size} />
)

export const constructionWorker = (argTypes): React.ReactElement => (
  <Icon name="constructionWorker" size={argTypes.size} />
)

export const contactPage = (argTypes): React.ReactElement => (
  <Icon name="contactPage" size={argTypes.size} />
)

export const contentCopy = (argTypes): React.ReactElement => (
  <Icon name="contentCopy" size={argTypes.size} />
)

export const coronavirus = (argTypes): React.ReactElement => (
  <Icon name="coronavirus" size={argTypes.size} />
)

export const creditCard = (argTypes): React.ReactElement => (
  <Icon name="creditCard" size={argTypes.size} />
)

export const deck = (argTypes): React.ReactElement => (
  <Icon name="deck" size={argTypes.size} />
)

export const deleteIcon = (argTypes): React.ReactElement => (
  <Icon name="delete" size={argTypes.size} />
)

export const deviceThermostat = (argTypes): React.ReactElement => (
  <Icon name="deviceThermostat" size={argTypes.size} />
)

export const directions = (argTypes): React.ReactElement => (
  <Icon name="directions" size={argTypes.size} />
)

export const directionsBike = (argTypes): React.ReactElement => (
  <Icon name="directionsBike" size={argTypes.size} />
)

export const directionsBus = (argTypes): React.ReactElement => (
  <Icon name="directionsBus" size={argTypes.size} />
)

export const directionsCar = (argTypes): React.ReactElement => (
  <Icon name="directionsCar" size={argTypes.size} />
)

export const directionsWalk = (argTypes): React.ReactElement => (
  <Icon name="directionsWalk" size={argTypes.size} />
)

export const doNotDisturb = (argTypes): React.ReactElement => (
  <Icon name="doNotDisturb" size={argTypes.size} />
)

export const doNotTouch = (argTypes): React.ReactElement => (
  <Icon name="doNotTouch" size={argTypes.size} />
)

export const dragHandle = (argTypes): React.ReactElement => (
  <Icon name="dragHandle" size={argTypes.size} />
)

export const eco = (argTypes): React.ReactElement => (
  <Icon name="eco" size={argTypes.size} />
)

export const edit = (argTypes): React.ReactElement => (
  <Icon name="edit" size={argTypes.size} />
)

export const electricalServices = (argTypes): React.ReactElement => (
  <Icon name="electricalServices" size={argTypes.size} />
)

export const emojiEvents = (argTypes): React.ReactElement => (
  <Icon name="emojiEvents" size={argTypes.size} />
)

export const error = (argTypes): React.ReactElement => (
  <Icon name="error" size={argTypes.size} />
)

export const errorOutline = (argTypes): React.ReactElement => (
  <Icon name="errorOutline" size={argTypes.size} />
)

export const eventIcon = (argTypes): React.ReactElement => (
  <Icon name="event" size={argTypes.size} />
)

export const expandLess = (argTypes): React.ReactElement => (
  <Icon name="expandLess" size={argTypes.size} />
)

export const expandMore = (argTypes): React.ReactElement => (
  <Icon name="expandMore" size={argTypes.size} />
)

export const facebook = (argTypes): React.ReactElement => (
  <Icon name="facebook" size={argTypes.size} />
)

export const fastForward = (argTypes): React.ReactElement => (
  <Icon name="fastForward" size={argTypes.size} />
)

export const fastRewind = (argTypes): React.ReactElement => (
  <Icon name="fastRewind" size={argTypes.size} />
)

export const favorite = (argTypes): React.ReactElement => (
  <Icon name="favorite" size={argTypes.size} />
)

export const favoriteBorder = (argTypes): React.ReactElement => (
  <Icon name="favoriteBorder" size={argTypes.size} />
)

export const fileDownload = (argTypes): React.ReactElement => (
  <Icon name="fileDownload" size={argTypes.size} />
)

export const filePresent = (argTypes): React.ReactElement => (
  <Icon name="filePresent" size={argTypes.size} />
)

export const fileUpload = (argTypes): React.ReactElement => (
  <Icon name="fileUpload" size={argTypes.size} />
)

export const filterAlt = (argTypes): React.ReactElement => (
  <Icon name="filterAlt" size={argTypes.size} />
)

export const filterList = (argTypes): React.ReactElement => (
  <Icon name="filterList" size={argTypes.size} />
)

export const fingerprint = (argTypes): React.ReactElement => (
  <Icon name="fingerprint" size={argTypes.size} />
)

export const firstPage = (argTypes): React.ReactElement => (
  <Icon name="firstPage" size={argTypes.size} />
)

export const flag = (argTypes): React.ReactElement => (
  <Icon name="flag" size={argTypes.size} />
)

export const flickr = (argTypes): React.ReactElement => (
  <Icon name="flickr" size={argTypes.size} />
)

export const flight = (argTypes): React.ReactElement => (
  <Icon name="flight" size={argTypes.size} />
)

export const flooding = (argTypes): React.ReactElement => (
  <Icon name="flooding" size={argTypes.size} />
)

export const folder = (argTypes): React.ReactElement => (
  <Icon name="folder" size={argTypes.size} />
)

export const folderOpen = (argTypes): React.ReactElement => (
  <Icon name="folderOpen" size={argTypes.size} />
)

export const formatQuote = (argTypes): React.ReactElement => (
  <Icon name="formatQuote" size={argTypes.size} />
)

export const formatSize = (argTypes): React.ReactElement => (
  <Icon name="formatSize" size={argTypes.size} />
)

export const forum = (argTypes): React.ReactElement => (
  <Icon name="forum" size={argTypes.size} />
)

export const github = (argTypes): React.ReactElement => (
  <Icon name="github" size={argTypes.size} />
)

export const gridView = (argTypes): React.ReactElement => (
  <Icon name="gridView" size={argTypes.size} />
)

export const groupAdd = (argTypes): React.ReactElement => (
  <Icon name="groupAdd" size={argTypes.size} />
)

export const groups = (argTypes): React.ReactElement => (
  <Icon name="groups" size={argTypes.size} />
)

export const hearing = (argTypes): React.ReactElement => (
  <Icon name="hearing" size={argTypes.size} />
)

export const help = (argTypes): React.ReactElement => (
  <Icon name="help" size={argTypes.size} />
)

export const helpOutline = (argTypes): React.ReactElement => (
  <Icon name="helpOutline" size={argTypes.size} />
)

export const highlightOff = (argTypes): React.ReactElement => (
  <Icon name="highlightOff" size={argTypes.size} />
)

export const history = (argTypes): React.ReactElement => (
  <Icon name="history" size={argTypes.size} />
)

export const home = (argTypes): React.ReactElement => (
  <Icon name="home" size={argTypes.size} />
)

export const hospital = (argTypes): React.ReactElement => (
  <Icon name="hospital" size={argTypes.size} />
)

export const hotel = (argTypes): React.ReactElement => (
  <Icon name="hotel" size={argTypes.size} />
)

export const hourglassEmpty = (argTypes): React.ReactElement => (
  <Icon name="hourglassEmpty" size={argTypes.size} />
)

export const hurricane = (argTypes): React.ReactElement => (
  <Icon name="hurricane" size={argTypes.size} />
)

export const identification = (argTypes): React.ReactElement => (
  <Icon name="identification" size={argTypes.size} />
)

export const image = (argTypes): React.ReactElement => (
  <Icon name="image" size={argTypes.size} />
)

export const info = (argTypes): React.ReactElement => (
  <Icon name="info" size={argTypes.size} />
)

export const infoOutline = (argTypes): React.ReactElement => (
  <Icon name="infoOutline" size={argTypes.size} />
)

export const insights = (argTypes): React.ReactElement => (
  <Icon name="insights" size={argTypes.size} />
)

export const instagram = (argTypes): React.ReactElement => (
  <Icon name="instagram" size={argTypes.size} />
)

export const keyboard = (argTypes): React.ReactElement => (
  <Icon name="keyboard" size={argTypes.size} />
)

export const label = (argTypes): React.ReactElement => (
  <Icon name="label" size={argTypes.size} />
)

export const language = (argTypes): React.ReactElement => (
  <Icon name="language" size={argTypes.size} />
)

export const lastPage = (argTypes): React.ReactElement => (
  <Icon name="lastPage" size={argTypes.size} />
)

export const lightbulb = (argTypes): React.ReactElement => (
  <Icon name="lightbulb" size={argTypes.size} />
)

export const lightbulbOutline = (argTypes): React.ReactElement => (
  <Icon name="lightbulbOutline" size={argTypes.size} />
)

export const link = (argTypes): React.ReactElement => (
  <Icon name="link" size={argTypes.size} />
)

export const linkOff = (argTypes): React.ReactElement => (
  <Icon name="linkOff" size={argTypes.size} />
)

export const list = (argTypes): React.ReactElement => (
  <Icon name="list" size={argTypes.size} />
)

export const localCafe = (argTypes): React.ReactElement => (
  <Icon name="localCafe" size={argTypes.size} />
)

export const localFireDepartment = (argTypes): React.ReactElement => (
  <Icon name="localFireDepartment" size={argTypes.size} />
)

export const localGasStation = (argTypes): React.ReactElement => (
  <Icon name="localGasStation" size={argTypes.size} />
)

export const localGroceryStore = (argTypes): React.ReactElement => (
  <Icon name="localGroceryStore" size={argTypes.size} />
)

export const localHospital = (argTypes): React.ReactElement => (
  <Icon name="localHospital" size={argTypes.size} />
)

export const localLaundryService = (argTypes): React.ReactElement => (
  <Icon name="localLaundryService" size={argTypes.size} />
)

export const localLibrary = (argTypes): React.ReactElement => (
  <Icon name="localLibrary" size={argTypes.size} />
)

export const localOffer = (argTypes): React.ReactElement => (
  <Icon name="localOffer" size={argTypes.size} />
)

export const localParking = (argTypes): React.ReactElement => (
  <Icon name="localParking" size={argTypes.size} />
)

export const localPharmacy = (argTypes): React.ReactElement => (
  <Icon name="localPharmacy" size={argTypes.size} />
)

export const localPolice = (argTypes): React.ReactElement => (
  <Icon name="localPolice" size={argTypes.size} />
)

export const localTaxi = (argTypes): React.ReactElement => (
  <Icon name="localTaxi" size={argTypes.size} />
)

export const locationCity = (argTypes): React.ReactElement => (
  <Icon name="locationCity" size={argTypes.size} />
)

export const locationOn = (argTypes): React.ReactElement => (
  <Icon name="locationOn" size={argTypes.size} />
)

export const lock = (argTypes): React.ReactElement => (
  <Icon name="lock" size={argTypes.size} />
)

export const lockOpen = (argTypes): React.ReactElement => (
  <Icon name="lockOpen" size={argTypes.size} />
)

export const lockOutline = (argTypes): React.ReactElement => (
  <Icon name="lockOutline" size={argTypes.size} />
)

export const login = (argTypes): React.ReactElement => (
  <Icon name="login" size={argTypes.size} />
)

export const logout = (argTypes): React.ReactElement => (
  <Icon name="logout" size={argTypes.size} />
)

export const loop = (argTypes): React.ReactElement => (
  <Icon name="loop" size={argTypes.size} />
)

export const mail = (argTypes): React.ReactElement => (
  <Icon name="mail" size={argTypes.size} />
)

export const mailOutline = (argTypes): React.ReactElement => (
  <Icon name="mailOutline" size={argTypes.size} />
)

export const map = (argTypes): React.ReactElement => (
  <Icon name="map" size={argTypes.size} />
)

export const masks = (argTypes): React.ReactElement => (
  <Icon name="masks" size={argTypes.size} />
)

export const medicalServices = (argTypes): React.ReactElement => (
  <Icon name="medicalServices" size={argTypes.size} />
)

export const menu = (argTypes): React.ReactElement => (
  <Icon name="menu" size={argTypes.size} />
)

export const militaryTech = (argTypes): React.ReactElement => (
  <Icon name="militaryTech" size={argTypes.size} />
)

export const moreHoriz = (argTypes): React.ReactElement => (
  <Icon name="moreHoriz" size={argTypes.size} />
)

export const moreVert = (argTypes): React.ReactElement => (
  <Icon name="moreVert" size={argTypes.size} />
)

export const myLocation = (argTypes): React.ReactElement => (
  <Icon name="myLocation" size={argTypes.size} />
)

export const navigateBefore = (argTypes): React.ReactElement => (
  <Icon name="navigateBefore" size={argTypes.size} />
)

export const navigateNext = (argTypes): React.ReactElement => (
  <Icon name="navigateNext" size={argTypes.size} />
)

export const navigateFarBefore = (argTypes): React.ReactElement => (
  <Icon name="navigateFarBefore" size={argTypes.size} />
)

export const navigateFarNext = (argTypes): React.ReactElement => (
  <Icon name="navigateFarNext" size={argTypes.size} />
)

export const nearMe = (argTypes): React.ReactElement => (
  <Icon name="nearMe" size={argTypes.size} />
)

export const notifications = (argTypes): React.ReactElement => (
  <Icon name="notifications" size={argTypes.size} />
)

export const notificationsActive = (argTypes): React.ReactElement => (
  <Icon name="notificationsActive" size={argTypes.size} />
)

export const notificationsNone = (argTypes): React.ReactElement => (
  <Icon name="notificationsNone" size={argTypes.size} />
)

export const notificationsOff = (argTypes): React.ReactElement => (
  <Icon name="notificationsOff" size={argTypes.size} />
)

export const park = (argTypes): React.ReactElement => (
  <Icon name="park" size={argTypes.size} />
)

export const people = (argTypes): React.ReactElement => (
  <Icon name="people" size={argTypes.size} />
)

export const person = (argTypes): React.ReactElement => (
  <Icon name="person" size={argTypes.size} />
)

export const pets = (argTypes): React.ReactElement => (
  <Icon name="pets" size={argTypes.size} />
)

export const phone = (argTypes): React.ReactElement => (
  <Icon name="phone" size={argTypes.size} />
)

export const photoCamera = (argTypes): React.ReactElement => (
  <Icon name="photoCamera" size={argTypes.size} />
)

export const print = (argTypes): React.ReactElement => (
  <Icon name="print" size={argTypes.size} />
)

export const priorityHigh = (argTypes): React.ReactElement => (
  <Icon name="priorityHigh" size={argTypes.size} />
)

export const public = (argTypes): React.ReactElement => (
  <Icon name="public" size={argTypes.size} />
)

export const pushPin = (argTypes): React.ReactElement => (
  <Icon name="pushPin" size={argTypes.size} />
)

export const radioButtonUnchecked = (argTypes): React.ReactElement => (
  <Icon name="radioButtonUnchecked" size={argTypes.size} />
)

export const rain = (argTypes): React.ReactElement => (
  <Icon name="rain" size={argTypes.size} />
)

export const reduceCapacity = (argTypes): React.ReactElement => (
  <Icon name="reduceCapacity" size={argTypes.size} />
)

export const remove = (argTypes): React.ReactElement => (
  <Icon name="remove" size={argTypes.size} />
)

export const report = (argTypes): React.ReactElement => (
  <Icon name="report" size={argTypes.size} />
)

export const restaurant = (argTypes): React.ReactElement => (
  <Icon name="restaurant" size={argTypes.size} />
)

export const rssFeed = (argTypes): React.ReactElement => (
  <Icon name="rssFeed" size={argTypes.size} />
)

export const safetyDivider = (argTypes): React.ReactElement => (
  <Icon name="safetyDivider" size={argTypes.size} />
)

export const sanitizer = (argTypes): React.ReactElement => (
  <Icon name="sanitizer" size={argTypes.size} />
)

export const saveAlt = (argTypes): React.ReactElement => (
  <Icon name="saveAlt" size={argTypes.size} />
)

export const severeWeather = (argTypes): React.ReactElement => (
  <Icon name="severeWeather" size={argTypes.size} />
)

export const schedule = (argTypes): React.ReactElement => (
  <Icon name="schedule" size={argTypes.size} />
)

export const school = (argTypes): React.ReactElement => (
  <Icon name="school" size={argTypes.size} />
)

export const science = (argTypes): React.ReactElement => (
  <Icon name="science" size={argTypes.size} />
)

export const search = (argTypes): React.ReactElement => (
  <Icon name="search" size={argTypes.size} />
)

export const security = (argTypes): React.ReactElement => (
  <Icon name="security" size={argTypes.size} />
)

export const send = (argTypes): React.ReactElement => (
  <Icon name="send" size={argTypes.size} />
)

export const sentimentDissatisfied = (argTypes): React.ReactElement => (
  <Icon name="sentimentDissatisfied" size={argTypes.size} />
)

export const sentimentNeutral = (argTypes): React.ReactElement => (
  <Icon name="sentimentNeutral" size={argTypes.size} />
)

export const sentimentSatisfied = (argTypes): React.ReactElement => (
  <Icon name="sentimentSatisfied" size={argTypes.size} />
)

export const sentimentSatisfiedAlt = (argTypes): React.ReactElement => (
  <Icon name="sentimentSatisfiedAlt" size={argTypes.size} />
)

export const sentimentVeryDissatisfied = (argTypes): React.ReactElement => (
  <Icon name="sentimentVeryDissatisfied" size={argTypes.size} />
)

export const settings = (argTypes): React.ReactElement => (
  <Icon name="settings" size={argTypes.size} />
)

export const share = (argTypes): React.ReactElement => (
  <Icon name="share" size={argTypes.size} />
)

export const shield = (argTypes): React.ReactElement => (
  <Icon name="shield" size={argTypes.size} />
)

export const shoppingBasket = (argTypes): React.ReactElement => (
  <Icon name="shoppingBasket" size={argTypes.size} />
)

export const snow = (argTypes): React.ReactElement => (
  <Icon name="snow" size={argTypes.size} />
)

export const soap = (argTypes): React.ReactElement => (
  <Icon name="soap" size={argTypes.size} />
)

export const socialDistance = (argTypes): React.ReactElement => (
  <Icon name="socialDistance" size={argTypes.size} />
)

export const sortArrow = (argTypes): React.ReactElement => (
  <Icon name="sortArrow" size={argTypes.size} />
)

export const spellcheck = (argTypes): React.ReactElement => (
  <Icon name="spellcheck" size={argTypes.size} />
)

export const star = (argTypes): React.ReactElement => (
  <Icon name="star" size={argTypes.size} />
)

export const starHalf = (argTypes): React.ReactElement => (
  <Icon name="starHalf" size={argTypes.size} />
)

export const starOutline = (argTypes): React.ReactElement => (
  <Icon name="starOutline" size={argTypes.size} />
)

export const store = (argTypes): React.ReactElement => (
  <Icon name="store" size={argTypes.size} />
)

export const support = (argTypes): React.ReactElement => (
  <Icon name="support" size={argTypes.size} />
)

export const supportAgent = (argTypes): React.ReactElement => (
  <Icon name="supportAgent" size={argTypes.size} />
)

export const textFields = (argTypes): React.ReactElement => (
  <Icon name="textFields" size={argTypes.size} />
)

export const thumbDownAlt = (argTypes): React.ReactElement => (
  <Icon name="thumbDownAlt" size={argTypes.size} />
)

export const thumbUpAlt = (argTypes): React.ReactElement => (
  <Icon name="thumbUpAlt" size={argTypes.size} />
)

export const timer = (argTypes): React.ReactElement => (
  <Icon name="timer" size={argTypes.size} />
)

export const toggleOff = (argTypes): React.ReactElement => (
  <Icon name="toggleOff" size={argTypes.size} />
)

export const toggleOn = (argTypes): React.ReactElement => (
  <Icon name="toggleOn" size={argTypes.size} />
)

export const topic = (argTypes): React.ReactElement => (
  <Icon name="topic" size={argTypes.size} />
)

export const tornado = (argTypes): React.ReactElement => (
  <Icon name="tornado" size={argTypes.size} />
)

export const translate = (argTypes): React.ReactElement => (
  <Icon name="translate" size={argTypes.size} />
)

export const trendingDown = (argTypes): React.ReactElement => (
  <Icon name="trendingDown" size={argTypes.size} />
)

export const trendingUp = (argTypes): React.ReactElement => (
  <Icon name="trendingUp" size={argTypes.size} />
)

export const twitter = (argTypes): React.ReactElement => (
  <Icon name="twitter" size={argTypes.size} />
)

export const undo = (argTypes): React.ReactElement => (
  <Icon name="undo" size={argTypes.size} />
)

export const unfoldLess = (argTypes): React.ReactElement => (
  <Icon name="unfoldLess" size={argTypes.size} />
)

export const unfoldMore = (argTypes): React.ReactElement => (
  <Icon name="unfoldMore" size={argTypes.size} />
)

export const update = (argTypes): React.ReactElement => (
  <Icon name="update" size={argTypes.size} />
)

export const uploadFile = (argTypes): React.ReactElement => (
  <Icon name="uploadFile" size={argTypes.size} />
)

export const verified = (argTypes): React.ReactElement => (
  <Icon name="verified" size={argTypes.size} />
)

export const verifiedUser = (argTypes): React.ReactElement => (
  <Icon name="verifiedUser" size={argTypes.size} />
)

export const visibility = (argTypes): React.ReactElement => (
  <Icon name="visibility" size={argTypes.size} />
)

export const visibilityOff = (argTypes): React.ReactElement => (
  <Icon name="visibilityOff" size={argTypes.size} />
)

export const volumeOff = (argTypes): React.ReactElement => (
  <Icon name="volumeOff" size={argTypes.size} />
)

export const warning = (argTypes): React.ReactElement => (
  <Icon name="warning" size={argTypes.size} />
)

export const wash = (argTypes): React.ReactElement => (
  <Icon name="wash" size={argTypes.size} />
)

export const wifi = (argTypes): React.ReactElement => (
  <Icon name="wifi" size={argTypes.size} />
)

export const work = (argTypes): React.ReactElement => (
  <Icon name="work" size={argTypes.size} />
)

export const youtube = (argTypes): React.ReactElement => (
  <Icon name="youtube" size={argTypes.size} />
)

export const zoomIn = (argTypes): React.ReactElement => (
  <Icon name="zoomIn" size={argTypes.size} />
)

export const zoomOutMap = (argTypes): React.ReactElement => (
  <Icon name="zoomOutMap" size={argTypes.size} />
)

export const zoomOut = (argTypes): React.ReactElement => (
  <Icon name="zoomOut" size={argTypes.size} />
)
