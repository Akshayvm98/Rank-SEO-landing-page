import {
  type LucideIcon,
  AlertCircle,
  AlertTriangle,
  AlignLeft,
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUp,
  ArrowUpCircle,
  BadgeCheck,
  Banknote,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  ClipboardList,
  Code,
  Database,
  FileText,
  Filter,
  Globe,
  Home,
  Info,
  Layers,
  LayoutGrid,
  LayoutList,
  Lightbulb,
  Link,
  Menu,
  Monitor,
  PenLine,
  Play,
  Plus,
  Puzzle,
  Repeat2,
  Rocket,
  RotateCcw,
  Route,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Smile,
  Sparkles,
  Star,
  Table,
  Tag,
  Target,
  TrendingUp,
  Upload,
  User,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

/* ── Icon registry ── */
export const Icons = {
  alertCircle: AlertCircle,
  alertTriangle: AlertTriangle,
  alignLeft: AlignLeft,
  arrowLeft: ArrowLeft,
  arrowLeftRight: ArrowLeftRight,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowUpCircle: ArrowUpCircle,
  badgeCheck: BadgeCheck,
  banknote: Banknote,
  barChart: BarChart3,
  bell: Bell,
  bookOpen: BookOpen,
  building: Building2,
  calendar: Calendar,
  check: Check,
  checkCircle: CheckCircle,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  clock: Clock,
  clipboardList: ClipboardList,
  code: Code,
  database: Database,
  fileText: FileText,
  filter: Filter,
  globe: Globe,
  home: Home,
  info: Info,
  layers: Layers,
  layoutGrid: LayoutGrid,
  layoutList: LayoutList,
  lightbulb: Lightbulb,
  link: Link,
  menu: Menu,
  monitor: Monitor,
  penLine: PenLine,
  play: Play,
  plus: Plus,
  puzzle: Puzzle,
  repeat: Repeat2,
  rocket: Rocket,
  rotateCcw: RotateCcw,
  route: Route,
  search: Search,
  settings: Settings,
  share: Share2,
  shieldCheck: ShieldCheck,
  sliders: SlidersHorizontal,
  smile: Smile,
  sparkles: Sparkles,
  star: Star,
  table: Table,
  tag: Tag,
  target: Target,
  trendingUp: TrendingUp,
  upload: Upload,
  user: User,
  users: Users,
  tool: Wrench,
  x: X,
  zap: Zap,
} as const;

/* ── Size tokens ── */
type IconSize = "sm" | "md" | "lg";

const sizeMap: Record<IconSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

/* ── Component ── */
interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
  strokeWidth?: number;
  fill?: string;
}

export function Icon({
  icon: LucideIcon,
  size = "md",
  className = "",
  strokeWidth = 1.75,
  fill,
}: IconProps) {
  return (
    <LucideIcon
      className={`${sizeMap[size]} shrink-0 ${className}`}
      strokeWidth={strokeWidth}
      {...(fill !== undefined && { fill })}
    />
  );
}
