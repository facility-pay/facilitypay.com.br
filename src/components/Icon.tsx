import HeartSVG from "@/assets/icons/heart.svg";
import PercentageSVG from "@/assets/icons/percentage.svg";
import SmileSVG from "@/assets/icons/smile.svg";
import FlagSVG from "@/assets/icons/flag.svg";
import WhatsappSVG from "@/assets/icons/whatsapp.svg";
import ChevronRightSVG from "@/assets/icons/chevron-right.svg";
import ChevronLeftSVG from "@/assets/icons/chevron-left.svg";
import ChevronDownSVG from "@/assets/icons/chevron-down.svg";
import ClockSVG from "@/assets/icons/clock.svg";
import OneDaySVG from "@/assets/icons/one-day.svg";
import OnTimeSVG from "@/assets/icons/on-time.svg";
import ThirtyDaysSVG from "@/assets/icons/30-days.svg";
import CardSVG from "@/assets/icons/card.svg";
import OutlinedClockSVG from "@/assets/icons/outlined-clock.svg";
import StarSVG from "@/assets/icons/star.svg";
import MachineSVG from "@/assets/icons/machine.svg";
import FingersSVG from "@/assets/icons/fingers.svg";
import RocketSVG from "@/assets/icons/rocket.svg";
import EditSVG from "@/assets/icons/edit.svg";
import CompetitorLogoSVG from "@/assets/icons/competitor-logo.svg";
import ChatSVG from "@/assets/icons/chat.svg";
import ArrowLeftSVG from "@/assets/icons/arrow-left.svg";
import ArrowRightSVG from "@/assets/icons/arrow-right.svg";
import RateStarSVG from "@/assets/icons/rate-star.svg";
import CheckSVG from "@/assets/icons/check.svg";
import UncheckSVG from "@/assets/icons/uncheck.svg";
import YoutubeSVG from "@/assets/icons/youtube.svg";
import PlaySVG from "@/assets/icons/play.svg";
import TargetSVG from "@/assets/icons/target.svg";
import MegaphoneSVG from "@/assets/icons/megaphone.svg";
import ProfitSVG from "@/assets/icons/profit.svg";
import SimulatorSVG from "@/assets/icons/simulator.svg";
import KnowMachinesSVG from "@/assets/icons/know-machines.svg";
import TaxesMachinesSVG from "@/assets/icons/taxes-machine.svg";
import Off20SVG from "@/assets/icons/20off.svg";
import PathSVG from "@/assets/icons/path.svg";
import ContextSVG from "@/assets/icons/context.svg";
import PromoSVG from "@/assets/icons/promo.svg";
import BlogSVG from "@/assets/icons/blog.svg";
import PostDateSVG from "@/assets/icons/post-date.svg";
import LinkSVG from "@/assets/icons/link.svg";

import AleloSVG from "@/assets/card_brands/alelo.svg";
import AmexSVG from "@/assets/card_brands/amex.svg";
import EloSVG from "@/assets/card_brands/elo.svg";
import HiperSVG from "@/assets/card_brands/hiper.svg";
import HipercardSVG from "@/assets/card_brands/hipercard.svg";
import MastercardSVG from "@/assets/card_brands/mastercard.svg";
import PluxeeSVG from "@/assets/card_brands/pluxee.svg";
import TicketSVG from "@/assets/card_brands/ticket.svg";
import VisaSVG from "@/assets/card_brands/visa.svg";
import VrSVG from "@/assets/card_brands/vr.svg";
import PixSVG from "@/assets/card_brands/pix.svg";

import FacebookSVG from "@/assets/icons/facebook.svg";
import InstagramSVG from "@/assets/icons/instagram.svg";
import InstagramRadialSVG from "@/assets/icons/instagram-radial.svg";
import YtbSVG from "@/assets/icons/ytb.svg";
import MailSVG from "@/assets/icons/mail.svg";
import TrueWhatsappSVG from "@/assets/icons/true-whatsapp.svg";

import FacilityLetterSVG from "@/assets/logos/facility-letter.svg";

export type IconName =
  | "heart"
  | "percentage"
  | "smile"
  | "chevron-right"
  | "chevron-left"
  | "chevron-down"
  | "flag"
  | "whatsapp"
  | "clock"
  | "one-day"
  | "30-days"
  | "card"
  | "alelo"
  | "amex"
  | "elo"
  | "hiper"
  | "hipercard"
  | "mastercard"
  | "pluxee"
  | "ticket"
  | "visa"
  | "vr"
  | "outlined-clock"
  | "star"
  | "machine"
  | "fingers"
  | "rocket"
  | "edit"
  | "facility-letter"
  | "competitor"
  | "chat"
  | "arrow-left"
  | "arrow-right"
  | "rate-star"
  | "check"
  | "uncheck"
  | "youtube"
  | "play"
  | "target"
  | "megaphone"
  | "profit"
  | "simulator"
  | "know-machines"
  | "facebook"
  | "instagram"
  | "instagram-radial"
  | "ytb"
  | "mail"
  | "true-whatsapp"
  | "taxes-machine"
  | "20-off"
  | "path"
  | "on-time"
  | "context"
  | "promo"
  | "pix"
  | "blog"
  | "post-date"
  | "link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const icons: { [key in IconName]: any } = {
  heart: HeartSVG,
  percentage: PercentageSVG,
  smile: SmileSVG,
  "chevron-right": ChevronRightSVG,
  "chevron-left": ChevronLeftSVG,
  "chevron-down": ChevronDownSVG,
  flag: FlagSVG,
  whatsapp: WhatsappSVG,
  clock: ClockSVG,
  "one-day": OneDaySVG,
  "30-days": ThirtyDaysSVG,
  card: CardSVG,
  alelo: AleloSVG,
  amex: AmexSVG,
  elo: EloSVG,
  hiper: HiperSVG,
  hipercard: HipercardSVG,
  mastercard: MastercardSVG,
  pluxee: PluxeeSVG,
  ticket: TicketSVG,
  visa: VisaSVG,
  vr: VrSVG,
  "outlined-clock": OutlinedClockSVG,
  star: StarSVG,
  machine: MachineSVG,
  fingers: FingersSVG,
  rocket: RocketSVG,
  edit: EditSVG,
  "facility-letter": FacilityLetterSVG,
  competitor: CompetitorLogoSVG,
  chat: ChatSVG,
  "arrow-left": ArrowLeftSVG,
  "arrow-right": ArrowRightSVG,
  "rate-star": RateStarSVG,
  check: CheckSVG,
  uncheck: UncheckSVG,
  youtube: YoutubeSVG,
  play: PlaySVG,
  target: TargetSVG,
  megaphone: MegaphoneSVG,
  profit: ProfitSVG,
  simulator: SimulatorSVG,
  "know-machines": KnowMachinesSVG,
  facebook: FacebookSVG,
  instagram: InstagramSVG,
  "instagram-radial": InstagramRadialSVG,
  ytb: YtbSVG,
  mail: MailSVG,
  "true-whatsapp": TrueWhatsappSVG,
  "taxes-machine": TaxesMachinesSVG,
  "20-off": Off20SVG,
  path: PathSVG,
  "on-time": OnTimeSVG,
  context: ContextSVG,
  promo: PromoSVG,
  pix: PixSVG,
  blog: BlogSVG,
  "post-date": PostDateSVG,
  link: LinkSVG,
};

type IconProps = {
  iconName: IconName;
  className?: string;
  color?: string;
};

const Icon = ({ iconName, className, color }: IconProps) => {
  const ChoosenIcon = icons[iconName];

  return <ChoosenIcon color={color} className={className} />;
};

export default Icon;
