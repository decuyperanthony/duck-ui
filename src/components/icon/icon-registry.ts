import type { ElementType } from 'react';

import {
  AlertCircle,
  AlertTriangle,
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Calendar,
  CalendarCheck,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  Clock,
  Copy,
  Download,
  Edit,
  ExternalLink,
  Eye,
  EyeOff,
  File,
  Filter,
  Folder,
  Heart,
  HelpCircle,
  Home,
  Image,
  Info,
  Link,
  List,
  Loader,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Pencil,
  Phone,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Share,
  Star,
  Sun,
  Trash,
  Upload,
  User,
  Users,
  X,
  XCircle,
} from 'lucide-react';

import { ObjectUtils } from '@/lib/object-utils';

/**
 * Icon registry - Add new icons here
 *
 * Convention: kebab-case keys matching lucide names
 * The key becomes the `name` prop value
 */
const ICON_MAP = {
  // Alerts & Status
  'alert-circle': AlertCircle,
  'alert-triangle': AlertTriangle,
  'check-circle': CheckCircle,
  'x-circle': XCircle,
  'help-circle': HelpCircle,
  info: Info,
  check: Check,

  // Navigation
  'arrow-down': ArrowDown,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'external-link': ExternalLink,
  home: Home,
  menu: Menu,

  // Actions
  copy: Copy,
  download: Download,
  edit: Edit,
  filter: Filter,
  link: Link,
  'log-out': LogOut,
  pencil: Pencil,
  plus: Plus,
  minus: Minus,
  'refresh-cw': RefreshCw,
  search: Search,
  settings: Settings,
  share: Share,
  trash: Trash,
  upload: Upload,
  x: X,

  // Objects
  archive: Archive,
  bell: Bell,
  calendar: Calendar,
  'calendar-check': CalendarCheck,
  circle: Circle,
  clock: Clock,
  file: File,
  folder: Folder,
  image: Image,
  list: List,
  lock: Lock,
  mail: Mail,
  'map-pin': MapPin,
  'message-circle': MessageCircle,
  phone: Phone,

  // Users
  user: User,
  users: Users,

  // UI
  eye: Eye,
  'eye-off': EyeOff,
  heart: Heart,
  loader: Loader,
  moon: Moon,
  'more-horizontal': MoreHorizontal,
  'more-vertical': MoreVertical,
  star: Star,
  sun: Sun,
} as const;

export const iconNames = ObjectUtils.keys(ICON_MAP);
export type IconName = keyof typeof ICON_MAP;

export const ICONS: Record<IconName, ElementType> = ICON_MAP;
