/** UTILS */
//import utils from './utils';
//export { utils };

/** CONTEXT/HOOKS */
// Export types - need to do as two lines due to a bug in babel
import * as Types from './Types';

export {
  useCine,
  CineProvider,
  DialogProvider,
  useDialog,
  withDialog,
  DragAndDropProvider,
  ModalProvider,
  ModalConsumer,
  useModal,
  withModal,
  ImageViewerContext,
  ImageViewerProvider,
  useImageViewer,
  SnackbarProvider,
  useSnackbar,
  withSnackbar,
  ViewportDialogProvider,
  useViewportDialog,
  ViewportGridContext,
  ViewportGridProvider,
  useViewportGrid,
  UserAuthenticationContext,
  UserAuthenticationProvider,
  useUserAuthentication,
} from './contextProviders';

/** COMPONENTS */
export {
  AboutModal,
  HotkeyField,
  Header,
  UserPreferences,
  HotkeysPreferences,
  Button,
  ButtonGroup,
  ContextMenu,
  CinePlayer,
  DateRange,
  Dialog,
  Dropdown,
  EmptyStudies,
  ErrorBoundary,
  ExpandableToolbarButton,
  ListMenu,
  Icon,
  IconButton,
  Input,
  InputDateRange,
  InputGroup,
  InputLabelWrapper,
  InputMultiSelect,
  InputText,
  Label,
  LayoutSelector,
  MeasurementTable,
  Modal,
  NavBar,
  Notification,
  Select,
  SegmentationTable,
  SidePanel,
  SplitButton,
  StudyBrowser,
  StudyItem,
  StudyListExpandedRow,
  StudyListFilter,
  StudyListPagination,
  StudyListTable,
  StudyListTableRow,
  StudySummary,
  Svg,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeWrapper,
  Thumbnail,
  ThumbnailNoImage,
  ThumbnailTracked,
  ThumbnailList,
  ToolbarButton,
  ContextMenuMeasurements,
  Tooltip,
  TooltipClipboard,
  Typography,
  Viewport,
  ViewportActionBar,
  ViewportDownloadForm,
  ViewportGrid,
  ViewportPane,
  WindowLevelMenuItem,
  ImageScrollbar,
  ViewportOverlay,
} from './components';

export { Types } from './Types';

/** These are mostly used in the docs */
export { getIcon, ICONS } from './components/Icon/getIcon';
export { BackgroundColor } from './pages/Colors/BackgroundColor';
export { ModalComponent } from './contextProviders/ModalComponent';
export { Types };
