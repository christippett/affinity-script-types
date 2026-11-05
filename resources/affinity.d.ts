// Type declarations for the Affinity JavaScript SDK.
//
// GENERATED FILE - do not edit. Produced by util/GenerateDTS.py from the SDK
// description in output/json-js. Re-run the script when the SDK changes.
//
// Layout
//  - Handles are opaque values returned by the SDK. They are never required
//    or constructed from JavaScript, so they are declared once, globally, at
//    the top of the file. Each handle interface has one read-only marker
//    property named after itself. The marker never exists at runtime; it only
//    makes handle types distinct to the compiler. A handle with a "base" in
//    handles.json `extends` that base, so it also carries the base's marker
//    and is accepted wherever the base is expected.
//  - Everything else is a runtime export of an "affinity:<module>" module,
//    so it is declared inside the matching `declare module` block. This
//    makes both of these type-check:
//        const { PageBoxInterfaceApi } = require("affinity:dom");
//        import { PageBoxInterfaceApi } from "affinity:dom";
//    Types that live in another module are imported at the top of the block.
//  - Classes are `class` declarations: one field per variable, then any
//    methods. Constructors are not declared yet; they will be added once
//    the SDK description includes them. A class marked "boundOnly" (its
//    inputs must be real instances, not just objects of the same shape) gets
//    a `#private;` member, which makes TypeScript compare it nominally.
//  - Enums are `enum` declarations listing the item names only.
//  - APIs are an `interface` with one method per API method, plus a `const`
//    of that type, which is the object scripts actually call. An API with a
//    "base" in its JSON `extends` that base API's interface, so the inherited
//    methods are available on it. A method the derived API declares itself
//    replaces the inherited one, exactly as on the JavaScript prototype
//    chain, so such names are removed from the base with `Omit` first.
//    Methods with no return value return `void`.
//  - Union types (JSON "A|B") are written `A | B`.
//  - Parameters whose name ends in "OrNull" also accept `null`.
//  - Callback parameters are inline function types, such as
//    `(node: NodeHandle) => EnumerationResult`: the arguments the SDK passes
//    to the function, and what it should return. Asynchronous callbacks are
//    Node.js style, `(err: Error | null, result: XHandle | null) => void`.
//    A callback whose signature the SDK description doesn't give is the
//    built-in `Function`.

// ---------------------------------------------------------------------------
// Handles
// ---------------------------------------------------------------------------

interface AddChildNodesCommandBuilderHandle { readonly __AddChildNodesCommandBuilderHandle: true; }
interface AddNoiseFilterParametersHandle { readonly __AddNoiseFilterParametersHandle: true; }
interface AddNoiseFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __AddNoiseFilterRasterNodeDefinitionHandle: true; }
interface AddNoiseFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __AddNoiseFilterRasterNodeHandle: true; }
interface AdjustmentRasterNodeDefinitionHandle extends EnclosureRasterNodeDefinitionHandle { readonly __AdjustmentRasterNodeDefinitionHandle: true; }
interface AdjustmentRasterNodeHandle extends EnclosureRasterNodeHandle { readonly __AdjustmentRasterNodeHandle: true; }
interface AnchorGlyphHandle extends GlyphHandle { readonly __AnchorGlyphHandle: true; }
interface ArrowHeadHandle { readonly __ArrowHeadHandle: true; }
interface ArtTextNodeDefinitionHandle extends TextNodeDefinitionHandle { readonly __ArtTextNodeDefinitionHandle: true; }
interface ArtTextNodeHandle extends TextNodeHandle { readonly __ArtTextNodeHandle: true; }
interface ArtboardDocumentPropertiesHandle { readonly __ArtboardDocumentPropertiesHandle: true; }
interface ArtboardInterfaceHandle { readonly __ArtboardInterfaceHandle: true; }
interface ArtboardPropertiesHandle { readonly __ArtboardPropertiesHandle: true; }
interface BaseBoxInterfaceHandle { readonly __BaseBoxInterfaceHandle: true; }
interface BaselineGridInterfaceHandle { readonly __BaselineGridInterfaceHandle: true; }
interface BaselineGridOptionsHandle { readonly __BaselineGridOptionsHandle: true; }
interface BevelEmbossLayerEffectHandle extends LayerEffectHandle { readonly __BevelEmbossLayerEffectHandle: true; }
interface BilateralBlurFilterParametersHandle { readonly __BilateralBlurFilterParametersHandle: true; }
interface BilateralBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __BilateralBlurFilterRasterNodeDefinitionHandle: true; }
interface BilateralBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __BilateralBlurFilterRasterNodeHandle: true; }
interface BitmapFillHandle extends FillHandle { readonly __BitmapFillHandle: true; }
interface BlackAndWhiteAdjustmentParametersHandle { readonly __BlackAndWhiteAdjustmentParametersHandle: true; }
interface BlackAndWhiteAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __BlackAndWhiteAdjustmentRasterNodeDefinitionHandle: true; }
interface BlackAndWhiteAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __BlackAndWhiteAdjustmentRasterNodeHandle: true; }
interface BlendModeInterfaceHandle { readonly __BlendModeInterfaceHandle: true; }
interface BlendOptionsHandle { readonly __BlendOptionsHandle: true; }
interface BloomFilterParametersHandle { readonly __BloomFilterParametersHandle: true; }
interface BloomFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __BloomFilterRasterNodeDefinitionHandle: true; }
interface BloomFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __BloomFilterRasterNodeHandle: true; }
interface BoxBlurFilterParametersHandle { readonly __BoxBlurFilterParametersHandle: true; }
interface BoxBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __BoxBlurFilterRasterNodeDefinitionHandle: true; }
interface BoxBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __BoxBlurFilterRasterNodeHandle: true; }
interface BrightnessContrastAdjustmentParametersHandle { readonly __BrightnessContrastAdjustmentParametersHandle: true; }
interface BrightnessContrastAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __BrightnessContrastAdjustmentRasterNodeDefinitionHandle: true; }
interface BrightnessContrastAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __BrightnessContrastAdjustmentRasterNodeHandle: true; }
interface BrushDynamicHandle { readonly __BrushDynamicHandle: true; }
interface BrushFillInterfaceHandle { readonly __BrushFillInterfaceHandle: true; }
interface BufferHandle { readonly __BufferHandle: true; }
interface CapturedDateTimeGlyphHandle extends FormattableFieldGlyphHandle { readonly __CapturedDateTimeGlyphHandle: true; }
interface CharGlyphHandle extends GlyphHandle { readonly __CharGlyphHandle: true; }
interface ClarityFilterParametersHandle { readonly __ClarityFilterParametersHandle: true; }
interface ClarityFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __ClarityFilterRasterNodeDefinitionHandle: true; }
interface ClarityFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __ClarityFilterRasterNodeHandle: true; }
interface ColourBalanceAdjustmentParametersHandle { readonly __ColourBalanceAdjustmentParametersHandle: true; }
interface ColourBalanceAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __ColourBalanceAdjustmentRasterNodeDefinitionHandle: true; }
interface ColourBalanceAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __ColourBalanceAdjustmentRasterNodeHandle: true; }
interface ColourHandle { readonly __ColourHandle: true; }
interface ColourMeshHandle extends MeshHandle { readonly __ColourMeshHandle: true; }
interface ColourOverlayLayerEffectHandle extends LayerEffectHandle { readonly __ColourOverlayLayerEffectHandle: true; }
interface ColourProfileHandle { readonly __ColourProfileHandle: true; }
interface ColourProfileSetHandle { readonly __ColourProfileSetHandle: true; }
interface ColouredLogicalNodeDefinitionHandle extends LogicalNodeDefinitionHandle { readonly __ColouredLogicalNodeDefinitionHandle: true; }
interface ColouredLogicalNodeHandle extends LogicalNodeHandle { readonly __ColouredLogicalNodeHandle: true; }
interface CommandHandle { readonly __CommandHandle: true; }
interface CompoundCommandBuilderHandle { readonly __CompoundCommandBuilderHandle: true; }
interface CompoundOperationInterfaceHandle { readonly __CompoundOperationInterfaceHandle: true; }
interface ConfigurationItemHandle { readonly __ConfigurationItemHandle: true; }
interface ContainerNodeDefinitionHandle extends ColouredLogicalNodeDefinitionHandle { readonly __ContainerNodeDefinitionHandle: true; }
interface ContainerNodeHandle extends ColouredLogicalNodeHandle { readonly __ContainerNodeHandle: true; }
interface CrossReferenceGlyphHandle extends FieldGlyphHandle { readonly __CrossReferenceGlyphHandle: true; }
interface CrossReferenceSubGlyphHandle extends GlyphHandle { readonly __CrossReferenceSubGlyphHandle: true; }
interface CurveBuilderHandle { readonly __CurveBuilderHandle: true; }
interface CurveEdgeSubSelectionHandle extends SubSelectionHandle { readonly __CurveEdgeSubSelectionHandle: true; }
interface CurveHandle { readonly __CurveHandle: true; }
interface CurveNodeSubSelectionHandle extends SubSelectionHandle { readonly __CurveNodeSubSelectionHandle: true; }
interface CurvePathTextNodeDefinitionHandle extends TextNodeDefinitionHandle { readonly __CurvePathTextNodeDefinitionHandle: true; }
interface CurvePathTextNodeHandle extends TextNodeHandle { readonly __CurvePathTextNodeHandle: true; }
interface CurvesAdjustmentParametersHandle { readonly __CurvesAdjustmentParametersHandle: true; }
interface CurvesAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __CurvesAdjustmentRasterNodeDefinitionHandle: true; }
interface CurvesAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __CurvesAdjustmentRasterNodeHandle: true; }
interface CurvesInterfaceHandle { readonly __CurvesInterfaceHandle: true; }
interface CustomFieldGlyphHandle extends FormattableFieldGlyphHandle { readonly __CustomFieldGlyphHandle: true; }
interface DataMergeFieldGlyphHandle extends DataMergeGlyphHandle { readonly __DataMergeFieldGlyphHandle: true; }
interface DataMergeGlyphHandle extends FormattableFieldGlyphHandle { readonly __DataMergeGlyphHandle: true; }
interface DataMergeSourceGlyphHandle extends DataMergeGlyphHandle { readonly __DataMergeSourceGlyphHandle: true; }
interface DefringeFilterParametersHandle { readonly __DefringeFilterParametersHandle: true; }
interface DefringeFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __DefringeFilterRasterNodeDefinitionHandle: true; }
interface DefringeFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __DefringeFilterRasterNodeHandle: true; }
interface DenoiseFilterParametersHandle { readonly __DenoiseFilterParametersHandle: true; }
interface DenoiseFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __DenoiseFilterRasterNodeDefinitionHandle: true; }
interface DenoiseFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __DenoiseFilterRasterNodeHandle: true; }
interface DepthOfFieldFilterParametersHandle { readonly __DepthOfFieldFilterParametersHandle: true; }
interface DepthOfFieldFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __DepthOfFieldFilterRasterNodeDefinitionHandle: true; }
interface DepthOfFieldFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __DepthOfFieldFilterRasterNodeHandle: true; }
interface DescriptionInterfaceHandle { readonly __DescriptionInterfaceHandle: true; }
interface DevelopNodeHandle extends PhysicalNodeHandle { readonly __DevelopNodeHandle: true; }
interface DevelopParametersHandle { readonly __DevelopParametersHandle: true; }
interface DialogBoolControlHandle extends DialogControlHandle { readonly __DialogBoolControlHandle: true; }
interface DialogButtonHandle extends DialogControlHandle { readonly __DialogButtonHandle: true; }
interface DialogButtonSetHandle extends DialogEnumControlHandle { readonly __DialogButtonSetHandle: true; }
interface DialogCheckBoxHandle extends DialogBoolControlHandle { readonly __DialogCheckBoxHandle: true; }
interface DialogColourPickerHandle extends DialogControlHandle { readonly __DialogColourPickerHandle: true; }
interface DialogColumnHandle extends DialogItemHandle { readonly __DialogColumnHandle: true; }
interface DialogColumnStackHandle extends DialogItemHandle { readonly __DialogColumnStackHandle: true; }
interface DialogComboBoxHandle extends DialogEnumControlHandle { readonly __DialogComboBoxHandle: true; }
interface DialogControlHandle extends DialogItemHandle { readonly __DialogControlHandle: true; }
interface DialogEnumControlHandle extends DialogControlHandle { readonly __DialogEnumControlHandle: true; }
interface DialogFillEditorHandle extends DialogControlHandle { readonly __DialogFillEditorHandle: true; }
interface DialogFontPickerHandle extends DialogControlHandle { readonly __DialogFontPickerHandle: true; }
interface DialogGroupHandle extends DialogItemHandle { readonly __DialogGroupHandle: true; }
interface DialogHandle { readonly __DialogHandle: true; }
interface DialogItemHandle { readonly __DialogItemHandle: true; }
interface DialogRadioGroupHandle extends DialogEnumControlHandle { readonly __DialogRadioGroupHandle: true; }
interface DialogSpatialAnchorHandle extends DialogControlHandle { readonly __DialogSpatialAnchorHandle: true; }
interface DialogStaticTextHandle extends DialogTextControlHandle { readonly __DialogStaticTextHandle: true; }
interface DialogStrokeEditorHandle extends DialogControlHandle { readonly __DialogStrokeEditorHandle: true; }
interface DialogSwitchHandle extends DialogBoolControlHandle { readonly __DialogSwitchHandle: true; }
interface DialogTextBoxHandle extends DialogTextControlHandle { readonly __DialogTextBoxHandle: true; }
interface DialogTextControlHandle extends DialogControlHandle { readonly __DialogTextControlHandle: true; }
interface DialogUnitValueEditorHandle extends DialogControlHandle { readonly __DialogUnitValueEditorHandle: true; }
interface DiffuseFilterParametersHandle { readonly __DiffuseFilterParametersHandle: true; }
interface DiffuseFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __DiffuseFilterRasterNodeDefinitionHandle: true; }
interface DiffuseFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __DiffuseFilterRasterNodeHandle: true; }
interface DiffuseGlowFilterParametersHandle { readonly __DiffuseGlowFilterParametersHandle: true; }
interface DiffuseGlowFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __DiffuseGlowFilterRasterNodeDefinitionHandle: true; }
interface DiffuseGlowFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __DiffuseGlowFilterRasterNodeHandle: true; }
interface DiffusionCurveSetHandle { readonly __DiffusionCurveSetHandle: true; }
interface DiffusionFillHandle extends FillHandle { readonly __DiffusionFillHandle: true; }
interface DirectoryIteratorHandle { readonly __DirectoryIteratorHandle: true; }
interface DocumentCommandHandle extends CommandHandle { readonly __DocumentCommandHandle: true; }
interface DocumentExportRecordHandle { readonly __DocumentExportRecordHandle: true; }
interface DocumentExportRecordsHandle { readonly __DocumentExportRecordsHandle: true; }
interface DocumentFieldGlyphHandle extends FormattableFieldGlyphHandle { readonly __DocumentFieldGlyphHandle: true; }
interface DocumentHandle { readonly __DocumentHandle: true; }
interface DocumentHistoryHandle { readonly __DocumentHistoryHandle: true; }
interface DocumentHistoryItemHandle { readonly __DocumentHistoryItemHandle: true; }
interface DocumentNodeHandle extends LogicalNodeHandle { readonly __DocumentNodeHandle: true; }
interface DocumentPresetHandle { readonly __DocumentPresetHandle: true; }
interface DocumentPropertiesHandle { readonly __DocumentPropertiesHandle: true; }
interface DocumentSnapshotHandle { readonly __DocumentSnapshotHandle: true; }
interface DocumentViewHandle { readonly __DocumentViewHandle: true; }
interface DrawingScaleHandle { readonly __DrawingScaleHandle: true; }
interface DustAndScratchFilterParametersHandle { readonly __DustAndScratchFilterParametersHandle: true; }
interface DustAndScratchFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __DustAndScratchFilterRasterNodeDefinitionHandle: true; }
interface DustAndScratchFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __DustAndScratchFilterRasterNodeHandle: true; }
interface EditabilityInterfaceHandle { readonly __EditabilityInterfaceHandle: true; }
interface EmbeddedDocumentNodeHandle extends PhysicalNodeHandle { readonly __EmbeddedDocumentNodeHandle: true; }
interface EnclosureRasterNodeDefinitionHandle extends RasterNodeDefinitionHandle { readonly __EnclosureRasterNodeDefinitionHandle: true; }
interface EnclosureRasterNodeHandle extends RasterNodeHandle { readonly __EnclosureRasterNodeHandle: true; }
interface ExportConfigHandle { readonly __ExportConfigHandle: true; }
interface ExportFormatHandle { readonly __ExportFormatHandle: true; }
interface ExportScaleHandle { readonly __ExportScaleHandle: true; }
interface ExportSizeHandle { readonly __ExportSizeHandle: true; }
interface ExportableInterfaceHandle { readonly __ExportableInterfaceHandle: true; }
interface ExposureAdjustmentParametersHandle { readonly __ExposureAdjustmentParametersHandle: true; }
interface ExposureAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __ExposureAdjustmentRasterNodeDefinitionHandle: true; }
interface ExposureAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __ExposureAdjustmentRasterNodeHandle: true; }
interface FieldBlurFilterParametersHandle { readonly __FieldBlurFilterParametersHandle: true; }
interface FieldBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __FieldBlurFilterRasterNodeDefinitionHandle: true; }
interface FieldBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __FieldBlurFilterRasterNodeHandle: true; }
interface FieldGlyphHandle extends GlyphHandle { readonly __FieldGlyphHandle: true; }
interface FileExportAreaHandle { readonly __FileExportAreaHandle: true; }
interface FileExportOptionsHandle { readonly __FileExportOptionsHandle: true; }
interface FileHandle { readonly __FileHandle: true; }
interface FileStatusHandle { readonly __FileStatusHandle: true; }
interface FillDescriptorHandle { readonly __FillDescriptorHandle: true; }
interface FillHandle { readonly __FillHandle: true; }
interface FillMeshSubSelectionHandle extends SubSelectionHandle { readonly __FillMeshSubSelectionHandle: true; }
interface FillSubSelectionHandle extends SubSelectionHandle { readonly __FillSubSelectionHandle: true; }
interface FillerTextGlyphHandle extends FieldGlyphHandle { readonly __FillerTextGlyphHandle: true; }
interface FilterRasterNodeDefinitionHandle extends EnclosureRasterNodeDefinitionHandle { readonly __FilterRasterNodeDefinitionHandle: true; }
interface FilterRasterNodeHandle extends EnclosureRasterNodeHandle { readonly __FilterRasterNodeHandle: true; }
interface FontCollectionHandle { readonly __FontCollectionHandle: true; }
interface FontFamilyHandle { readonly __FontFamilyHandle: true; }
interface FontHandle { readonly __FontHandle: true; }
interface FormattableFieldGlyphHandle extends FieldGlyphHandle { readonly __FormattableFieldGlyphHandle: true; }
interface FrameTextNodeDefinitionHandle extends TextNodeDefinitionHandle { readonly __FrameTextNodeDefinitionHandle: true; }
interface FrameTextNodeHandle extends TextNodeHandle { readonly __FrameTextNodeHandle: true; }
interface GaussianBlurFilterParametersHandle { readonly __GaussianBlurFilterParametersHandle: true; }
interface GaussianBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __GaussianBlurFilterRasterNodeDefinitionHandle: true; }
interface GaussianBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __GaussianBlurFilterRasterNodeHandle: true; }
interface GaussianBlurLayerEffectHandle extends LayerEffectHandle { readonly __GaussianBlurLayerEffectHandle: true; }
interface GlyphAttsHandle { readonly __GlyphAttsHandle: true; }
interface GlyphHandle { readonly __GlyphHandle: true; }
interface GlyphIndexGlyphHandle extends GlyphHandle { readonly __GlyphIndexGlyphHandle: true; }
interface GradientFillHandle extends FillHandle { readonly __GradientFillHandle: true; }
interface GradientHandle { readonly __GradientHandle: true; }
interface GradientOverlayLayerEffectHandle extends LayerEffectHandle { readonly __GradientOverlayLayerEffectHandle: true; }
interface GroupNodeHandle extends LogicalNodeHandle { readonly __GroupNodeHandle: true; }
interface HSLShiftAdjustmentParametersHandle { readonly __HSLShiftAdjustmentParametersHandle: true; }
interface HSLShiftAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __HSLShiftAdjustmentRasterNodeDefinitionHandle: true; }
interface HSLShiftAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __HSLShiftAdjustmentRasterNodeHandle: true; }
interface HalftoneFilterParametersHandle { readonly __HalftoneFilterParametersHandle: true; }
interface HalftoneFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __HalftoneFilterRasterNodeDefinitionHandle: true; }
interface HalftoneFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __HalftoneFilterRasterNodeHandle: true; }
interface HardBreakGlyphHandle extends GlyphHandle { readonly __HardBreakGlyphHandle: true; }
interface HatchFillHandle extends FillHandle { readonly __HatchFillHandle: true; }
interface HatchLineHandle { readonly __HatchLineHandle: true; }
interface HatchPatternHandle { readonly __HatchPatternHandle: true; }
interface HighPassFilterParametersHandle { readonly __HighPassFilterParametersHandle: true; }
interface HighPassFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __HighPassFilterRasterNodeDefinitionHandle: true; }
interface HighPassFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __HighPassFilterRasterNodeHandle: true; }
interface HttpRequestHandle { readonly __HttpRequestHandle: true; }
interface HttpResponseHandle { readonly __HttpResponseHandle: true; }
interface ImageNodeDefinitionHandle extends VectorNodeDefinitionHandle { readonly __ImageNodeDefinitionHandle: true; }
interface ImageNodeHandle extends VectorNodeHandle { readonly __ImageNodeHandle: true; }
interface ImageResourceInterfaceHandle { readonly __ImageResourceInterfaceHandle: true; }
interface IndentToHereGlyphHandle extends GlyphHandle { readonly __IndentToHereGlyphHandle: true; }
interface IndexMarkGlyphHandle extends GlyphHandle { readonly __IndexMarkGlyphHandle: true; }
interface InnerGlowLayerEffectHandle extends LayerEffectHandle { readonly __InnerGlowLayerEffectHandle: true; }
interface InnerShadowLayerEffectHandle extends LayerEffectHandle { readonly __InnerShadowLayerEffectHandle: true; }
interface InvertAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __InvertAdjustmentRasterNodeDefinitionHandle: true; }
interface InvertAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __InvertAdjustmentRasterNodeHandle: true; }
interface LayerEffectHandle { readonly __LayerEffectHandle: true; }
interface LayerEffectsInterfaceHandle { readonly __LayerEffectsInterfaceHandle: true; }
interface LensBlurFilterParametersHandle { readonly __LensBlurFilterParametersHandle: true; }
interface LensBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __LensBlurFilterRasterNodeDefinitionHandle: true; }
interface LensBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __LensBlurFilterRasterNodeHandle: true; }
interface LevelsAdjustmentParametersHandle { readonly __LevelsAdjustmentParametersHandle: true; }
interface LevelsAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __LevelsAdjustmentRasterNodeDefinitionHandle: true; }
interface LevelsAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __LevelsAdjustmentRasterNodeHandle: true; }
interface LineFillMeshSubSelectionHandle extends SubSelectionHandle { readonly __LineFillMeshSubSelectionHandle: true; }
interface LineFillSubSelectionHandle extends SubSelectionHandle { readonly __LineFillSubSelectionHandle: true; }
interface LineStyleDescriptorHandle { readonly __LineStyleDescriptorHandle: true; }
interface LineStyleHandle { readonly __LineStyleHandle: true; }
interface LineStyleInterfaceHandle { readonly __LineStyleInterfaceHandle: true; }
interface ListNumberGlyphHandle extends GlyphHandle { readonly __ListNumberGlyphHandle: true; }
interface LoadDocumentOptionsHandle { readonly __LoadDocumentOptionsHandle: true; }
interface LoadDwgOptionsHandle extends LoadDocumentOptionsHandle { readonly __LoadDwgOptionsHandle: true; }
interface LocaleHandle { readonly __LocaleHandle: true; }
interface LogFileHandle { readonly __LogFileHandle: true; }
interface LogicalNodeDefinitionHandle extends NodeDefinitionHandle { readonly __LogicalNodeDefinitionHandle: true; }
interface LogicalNodeHandle extends NodeHandle { readonly __LogicalNodeHandle: true; }
interface MarginsInterfaceHandle { readonly __MarginsInterfaceHandle: true; }
interface MaskRasterNodeDefinitionHandle { readonly __MaskRasterNodeDefinitionHandle: true; }
interface MaskRasterNodeHandle extends EnclosureRasterNodeHandle { readonly __MaskRasterNodeHandle: true; }
interface MaximumBlurFilterParametersHandle { readonly __MaximumBlurFilterParametersHandle: true; }
interface MaximumBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __MaximumBlurFilterRasterNodeDefinitionHandle: true; }
interface MaximumBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __MaximumBlurFilterRasterNodeHandle: true; }
interface MeasurementNodeDefinitionHandle extends VectorNodeDefinitionHandle { readonly __MeasurementNodeDefinitionHandle: true; }
interface MeasurementNodeHandle extends VectorNodeHandle { readonly __MeasurementNodeHandle: true; }
interface MedianBlurFilterParametersHandle { readonly __MedianBlurFilterParametersHandle: true; }
interface MedianBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __MedianBlurFilterRasterNodeDefinitionHandle: true; }
interface MedianBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __MedianBlurFilterRasterNodeHandle: true; }
interface MeshFillHandle extends FillHandle { readonly __MeshFillHandle: true; }
interface MeshHandle { readonly __MeshHandle: true; }
interface MinimumBlurFilterParametersHandle { readonly __MinimumBlurFilterParametersHandle: true; }
interface MinimumBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __MinimumBlurFilterRasterNodeDefinitionHandle: true; }
interface MinimumBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __MinimumBlurFilterRasterNodeHandle: true; }
interface MotionBlurFilterParametersHandle { readonly __MotionBlurFilterParametersHandle: true; }
interface MotionBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __MotionBlurFilterRasterNodeDefinitionHandle: true; }
interface MotionBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __MotionBlurFilterRasterNodeHandle: true; }
interface NewDocumentOptionsHandle { readonly __NewDocumentOptionsHandle: true; }
interface NoFillHandle extends FillHandle { readonly __NoFillHandle: true; }
interface NodeCastHandle { readonly __NodeCastHandle: true; }
interface NodeDefinitionHandle { readonly __NodeDefinitionHandle: true; }
interface NodeHandle extends SelectableHandle { readonly __NodeHandle: true; }
interface NodeRenderingEngineOptionsHandle { readonly __NodeRenderingEngineOptionsHandle: true; }
interface NormalsAdjustmentParametersHandle { readonly __NormalsAdjustmentParametersHandle: true; }
interface NormalsAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __NormalsAdjustmentRasterNodeDefinitionHandle: true; }
interface NormalsAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __NormalsAdjustmentRasterNodeHandle: true; }
interface NoteNumberGlyphHandle extends GlyphHandle { readonly __NoteNumberGlyphHandle: true; }
interface OuterGlowLayerEffectHandle extends LayerEffectHandle { readonly __OuterGlowLayerEffectHandle: true; }
interface OuterShadowLayerEffectHandle extends LayerEffectHandle { readonly __OuterShadowLayerEffectHandle: true; }
interface OutlineLayerEffectHandle extends LayerEffectHandle { readonly __OutlineLayerEffectHandle: true; }
interface PageBoxInterfaceHandle { readonly __PageBoxInterfaceHandle: true; }
interface PageDocumentPropertiesHandle { readonly __PageDocumentPropertiesHandle: true; }
interface PageNumberGlyphHandle extends FieldGlyphHandle { readonly __PageNumberGlyphHandle: true; }
interface PanoseHandle { readonly __PanoseHandle: true; }
interface ParagraphAttsHandle { readonly __ParagraphAttsHandle: true; }
interface PathBrushHandle { readonly __PathBrushHandle: true; }
interface PatternRasterNodeDefinitionHandle extends RasterNodeDefinitionHandle { readonly __PatternRasterNodeDefinitionHandle: true; }
interface PatternRasterNodeHandle extends RasterNodeHandle { readonly __PatternRasterNodeHandle: true; }
interface PhongBevelLayerEffectHandle extends LayerEffectHandle { readonly __PhongBevelLayerEffectHandle: true; }
interface PhysicalNodeDefinitionHandle extends NodeDefinitionHandle { readonly __PhysicalNodeDefinitionHandle: true; }
interface PhysicalNodeHandle extends NodeHandle { readonly __PhysicalNodeHandle: true; }
interface PhysicalRootInterfaceHandle { readonly __PhysicalRootInterfaceHandle: true; }
interface PhysicalRootPropertiesInterfaceHandle { readonly __PhysicalRootPropertiesInterfaceHandle: true; }
interface PictureFrameInterfaceHandle { readonly __PictureFrameInterfaceHandle: true; }
interface PinGlyphHandle extends GlyphHandle { readonly __PinGlyphHandle: true; }
interface PinchPunchFilterParametersHandle { readonly __PinchPunchFilterParametersHandle: true; }
interface PinchPunchFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __PinchPunchFilterRasterNodeDefinitionHandle: true; }
interface PinchPunchFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __PinchPunchFilterRasterNodeHandle: true; }
interface PixelReaderCMYKA8Handle { readonly __PixelReaderCMYKA8Handle: true; }
interface PixelReaderIA16Handle { readonly __PixelReaderIA16Handle: true; }
interface PixelReaderIA8Handle { readonly __PixelReaderIA8Handle: true; }
interface PixelReaderLABA16Handle { readonly __PixelReaderLABA16Handle: true; }
interface PixelReaderM16Handle { readonly __PixelReaderM16Handle: true; }
interface PixelReaderM8Handle { readonly __PixelReaderM8Handle: true; }
interface PixelReaderMfHandle { readonly __PixelReaderMfHandle: true; }
interface PixelReaderRGBA16Handle { readonly __PixelReaderRGBA16Handle: true; }
interface PixelReaderRGBA8Handle { readonly __PixelReaderRGBA8Handle: true; }
interface PixelReaderRGBAufHandle { readonly __PixelReaderRGBAufHandle: true; }
interface PixelReaderWriterCMYKA8Handle { readonly __PixelReaderWriterCMYKA8Handle: true; }
interface PixelReaderWriterIA16Handle { readonly __PixelReaderWriterIA16Handle: true; }
interface PixelReaderWriterIA8Handle { readonly __PixelReaderWriterIA8Handle: true; }
interface PixelReaderWriterLABA16Handle { readonly __PixelReaderWriterLABA16Handle: true; }
interface PixelReaderWriterM16Handle { readonly __PixelReaderWriterM16Handle: true; }
interface PixelReaderWriterM8Handle { readonly __PixelReaderWriterM8Handle: true; }
interface PixelReaderWriterMfHandle { readonly __PixelReaderWriterMfHandle: true; }
interface PixelReaderWriterRGBA16Handle { readonly __PixelReaderWriterRGBA16Handle: true; }
interface PixelReaderWriterRGBA8Handle { readonly __PixelReaderWriterRGBA8Handle: true; }
interface PixelReaderWriterRGBAufHandle { readonly __PixelReaderWriterRGBAufHandle: true; }
interface PixelateFilterParametersHandle { readonly __PixelateFilterParametersHandle: true; }
interface PixelateFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __PixelateFilterRasterNodeDefinitionHandle: true; }
interface PixelateFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __PixelateFilterRasterNodeHandle: true; }
interface PointLightHandle { readonly __PointLightHandle: true; }
interface PolyCurveHandle { readonly __PolyCurveHandle: true; }
interface PolyCurveNodeDefinitionHandle extends VectorNodeDefinitionHandle { readonly __PolyCurveNodeDefinitionHandle: true; }
interface PolyCurveNodeHandle extends VectorNodeHandle { readonly __PolyCurveNodeHandle: true; }
interface PolyCurveTextNodeDefinitionHandle extends TextNodeDefinitionHandle { readonly __PolyCurveTextNodeDefinitionHandle: true; }
interface PolyCurveTextNodeHandle extends TextNodeHandle { readonly __PolyCurveTextNodeHandle: true; }
interface PolyPolyCurveHandle { readonly __PolyPolyCurveHandle: true; }
interface PolygonHandle { readonly __PolygonHandle: true; }
interface PosteriseAdjustmentParametersHandle { readonly __PosteriseAdjustmentParametersHandle: true; }
interface PosteriseAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __PosteriseAdjustmentRasterNodeDefinitionHandle: true; }
interface PosteriseAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __PosteriseAdjustmentRasterNodeHandle: true; }
interface QRPayloadDataMergeHandle extends QRPayloadHandle { readonly __QRPayloadDataMergeHandle: true; }
interface QRPayloadEmailHandle extends QRPayloadHandle { readonly __QRPayloadEmailHandle: true; }
interface QRPayloadFaceTimeHandle extends QRPayloadHandle { readonly __QRPayloadFaceTimeHandle: true; }
interface QRPayloadHandle { readonly __QRPayloadHandle: true; }
interface QRPayloadLocationHandle extends QRPayloadHandle { readonly __QRPayloadLocationHandle: true; }
interface QRPayloadPhoneHandle extends QRPayloadHandle { readonly __QRPayloadPhoneHandle: true; }
interface QRPayloadSMSHandle extends QRPayloadHandle { readonly __QRPayloadSMSHandle: true; }
interface QRPayloadTextHandle extends QRPayloadHandle { readonly __QRPayloadTextHandle: true; }
interface QRPayloadURLHandle extends QRPayloadHandle { readonly __QRPayloadURLHandle: true; }
interface QRPayloadVCardHandle extends QRPayloadHandle { readonly __QRPayloadVCardHandle: true; }
interface QRPayloadWhatsAppHandle extends QRPayloadHandle { readonly __QRPayloadWhatsAppHandle: true; }
interface QRPayloadWifiHandle extends QRPayloadHandle { readonly __QRPayloadWifiHandle: true; }
interface RadialBlurFilterParametersHandle { readonly __RadialBlurFilterParametersHandle: true; }
interface RadialBlurFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __RadialBlurFilterRasterNodeDefinitionHandle: true; }
interface RadialBlurFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __RadialBlurFilterRasterNodeHandle: true; }
interface RangenoteBodyGlyphHandle extends FieldGlyphHandle { readonly __RangenoteBodyGlyphHandle: true; }
interface RangenoteEndGlyphHandle extends GlyphHandle { readonly __RangenoteEndGlyphHandle: true; }
interface RangenoteReferenceGlyphHandle extends FieldGlyphHandle { readonly __RangenoteReferenceGlyphHandle: true; }
interface RasterBrushHandle { readonly __RasterBrushHandle: true; }
interface RasterInterfaceHandle { readonly __RasterInterfaceHandle: true; }
interface RasterNodeDefinitionHandle extends PhysicalNodeDefinitionHandle { readonly __RasterNodeDefinitionHandle: true; }
interface RasterNodeHandle extends PhysicalNodeHandle { readonly __RasterNodeHandle: true; }
interface RasterObjectHandle { readonly __RasterObjectHandle: true; }
interface RasterSelectionHandle { readonly __RasterSelectionHandle: true; }
interface RecolourAdjustmentParametersHandle { readonly __RecolourAdjustmentParametersHandle: true; }
interface RecolourAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __RecolourAdjustmentRasterNodeDefinitionHandle: true; }
interface RecolourAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __RecolourAdjustmentRasterNodeHandle: true; }
interface RefControlHandle { readonly __RefControlHandle: true; }
interface ResourceBundleHandle { readonly __ResourceBundleHandle: true; }
interface ResourceHandle { readonly __ResourceHandle: true; }
interface ResourceIteratorHandle { readonly __ResourceIteratorHandle: true; }
interface RightIndentTabGlyphHandle extends GlyphHandle { readonly __RightIndentTabGlyphHandle: true; }
interface RippleFilterParametersHandle { readonly __RippleFilterParametersHandle: true; }
interface RippleFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __RippleFilterRasterNodeDefinitionHandle: true; }
interface RippleFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __RippleFilterRasterNodeHandle: true; }
interface RunningHeaderGlyphHandle extends FormattableFieldGlyphHandle { readonly __RunningHeaderGlyphHandle: true; }
interface SectionNameGlyphHandle extends FieldGlyphHandle { readonly __SectionNameGlyphHandle: true; }
interface SelectableHandle { readonly __SelectableHandle: true; }
interface SelectionHandle { readonly __SelectionHandle: true; }
interface SelectionItemHandle { readonly __SelectionItemHandle: true; }
interface SelectiveColourAdjustmentParametersHandle { readonly __SelectiveColourAdjustmentParametersHandle: true; }
interface SelectiveColourAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __SelectiveColourAdjustmentRasterNodeDefinitionHandle: true; }
interface SelectiveColourAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __SelectiveColourAdjustmentRasterNodeHandle: true; }
interface SetHatchFillAttributesCommandBuilderHandle { readonly __SetHatchFillAttributesCommandBuilderHandle: true; }
interface ShadowsHighlightsAdjustmentParametersHandle { readonly __ShadowsHighlightsAdjustmentParametersHandle: true; }
interface ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle: true; }
interface ShadowsHighlightsAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __ShadowsHighlightsAdjustmentRasterNodeHandle: true; }
interface ShadowsHighlightsFilterParametersHandle { readonly __ShadowsHighlightsFilterParametersHandle: true; }
interface ShadowsHighlightsFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __ShadowsHighlightsFilterRasterNodeDefinitionHandle: true; }
interface ShadowsHighlightsFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __ShadowsHighlightsFilterRasterNodeHandle: true; }
interface ShapeArrowHandle extends ShapeHandle { readonly __ShapeArrowHandle: true; }
interface ShapeCalloutEllipseHandle extends ShapeHandle { readonly __ShapeCalloutEllipseHandle: true; }
interface ShapeCalloutRectangleHandle extends ShapeHandle { readonly __ShapeCalloutRectangleHandle: true; }
interface ShapeCat2Handle extends ShapeHandle { readonly __ShapeCat2Handle: true; }
interface ShapeCat3Handle extends ShapeHandle { readonly __ShapeCat3Handle: true; }
interface ShapeCat4Handle extends ShapeHandle { readonly __ShapeCat4Handle: true; }
interface ShapeCatHandle extends ShapeHandle { readonly __ShapeCatHandle: true; }
interface ShapeCloudHandle extends ShapeHandle { readonly __ShapeCloudHandle: true; }
interface ShapeCogHandle extends ShapeHandle { readonly __ShapeCogHandle: true; }
interface ShapeCrescentHandle extends ShapeHandle { readonly __ShapeCrescentHandle: true; }
interface ShapeDiamondHandle extends ShapeHandle { readonly __ShapeDiamondHandle: true; }
interface ShapeDoubleStarHandle extends ShapeHandle { readonly __ShapeDoubleStarHandle: true; }
interface ShapeEllipseHandle extends ShapeHandle { readonly __ShapeEllipseHandle: true; }
interface ShapeHandle { readonly __ShapeHandle: true; }
interface ShapeHeartHandle extends ShapeHandle { readonly __ShapeHeartHandle: true; }
interface ShapeInterfaceHandle { readonly __ShapeInterfaceHandle: true; }
interface ShapeNodeDefinitionHandle extends VectorNodeDefinitionHandle { readonly __ShapeNodeDefinitionHandle: true; }
interface ShapeNodeHandle extends VectorNodeHandle { readonly __ShapeNodeHandle: true; }
interface ShapePathTextNodeDefinitionHandle extends TextNodeDefinitionHandle { readonly __ShapePathTextNodeDefinitionHandle: true; }
interface ShapePathTextNodeHandle extends TextNodeHandle { readonly __ShapePathTextNodeHandle: true; }
interface ShapePieHandle extends ShapeHandle { readonly __ShapePieHandle: true; }
interface ShapePolygonHandle extends ShapeHandle { readonly __ShapePolygonHandle: true; }
interface ShapeQRCodeHandle extends ShapeHandle { readonly __ShapeQRCodeHandle: true; }
interface ShapeRectangleHandle extends ShapeHandle { readonly __ShapeRectangleHandle: true; }
interface ShapeSegmentHandle extends ShapeHandle { readonly __ShapeSegmentHandle: true; }
interface ShapeSpiralHandle extends ShapeHandle { readonly __ShapeSpiralHandle: true; }
interface ShapeSquareStarHandle extends ShapeHandle { readonly __ShapeSquareStarHandle: true; }
interface ShapeStarHandle extends ShapeHandle { readonly __ShapeStarHandle: true; }
interface ShapeTearHandle extends ShapeHandle { readonly __ShapeTearHandle: true; }
interface ShapeTextNodeDefinitionHandle extends TextNodeDefinitionHandle { readonly __ShapeTextNodeDefinitionHandle: true; }
interface ShapeTextNodeHandle extends TextNodeHandle { readonly __ShapeTextNodeHandle: true; }
interface ShapeTrapezoidHandle extends ShapeHandle { readonly __ShapeTrapezoidHandle: true; }
interface ShapeTriangleHandle extends ShapeHandle { readonly __ShapeTriangleHandle: true; }
interface SolidFillHandle extends FillHandle { readonly __SolidFillHandle: true; }
interface SphericalFilterParametersHandle { readonly __SphericalFilterParametersHandle: true; }
interface SphericalFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __SphericalFilterRasterNodeDefinitionHandle: true; }
interface SphericalFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __SphericalFilterRasterNodeHandle: true; }
interface SplineHandle { readonly __SplineHandle: true; }
interface SplitToningAdjustmentParametersHandle { readonly __SplitToningAdjustmentParametersHandle: true; }
interface SplitToningAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __SplitToningAdjustmentRasterNodeDefinitionHandle: true; }
interface SplitToningAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __SplitToningAdjustmentRasterNodeHandle: true; }
interface SpreadDocumentPropertiesHandle extends ArtboardDocumentPropertiesHandle { readonly __SpreadDocumentPropertiesHandle: true; }
interface SpreadNodeHandle extends PhysicalNodeHandle { readonly __SpreadNodeHandle: true; }
interface StoryBuilderHandle { readonly __StoryBuilderHandle: true; }
interface StoryDeltaHandle { readonly __StoryDeltaHandle: true; }
interface StoryHandle { readonly __StoryHandle: true; }
interface StoryInterfaceHandle { readonly __StoryInterfaceHandle: true; }
interface SubSelectionHandle { readonly __SubSelectionHandle: true; }
interface TableSubSelectionHandle extends SubSelectionHandle { readonly __TableSubSelectionHandle: true; }
interface TableTextNodeDefinitionHandle extends TextNodeDefinitionHandle { readonly __TableTextNodeDefinitionHandle: true; }
interface TableTextNodeHandle extends TextNodeHandle { readonly __TableTextNodeHandle: true; }
interface TagInterfaceHandle { readonly __TagInterfaceHandle: true; }
interface TextFlowHandle { readonly __TextFlowHandle: true; }
interface TextFlowOverflowInfoHandle { readonly __TextFlowOverflowInfoHandle: true; }
interface TextFrameInterfaceHandle { readonly __TextFrameInterfaceHandle: true; }
interface TextNodeDefinitionHandle extends PhysicalNodeDefinitionHandle { readonly __TextNodeDefinitionHandle: true; }
interface TextNodeHandle extends PhysicalNodeHandle { readonly __TextNodeHandle: true; }
interface TextSelectionHandle extends SubSelectionHandle { readonly __TextSelectionHandle: true; }
interface TextVisibilityOptionsHandle { readonly __TextVisibilityOptionsHandle: true; }
interface ThresholdAdjustmentParametersHandle { readonly __ThresholdAdjustmentParametersHandle: true; }
interface ThresholdAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __ThresholdAdjustmentRasterNodeDefinitionHandle: true; }
interface ThresholdAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __ThresholdAdjustmentRasterNodeHandle: true; }
interface TimerHandle { readonly __TimerHandle: true; }
interface ToneCompressionAdjustmentParametersHandle { readonly __ToneCompressionAdjustmentParametersHandle: true; }
interface ToneCompressionAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __ToneCompressionAdjustmentRasterNodeDefinitionHandle: true; }
interface ToneCompressionAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __ToneCompressionAdjustmentRasterNodeHandle: true; }
interface ToneStretchAdjustmentParametersHandle { readonly __ToneStretchAdjustmentParametersHandle: true; }
interface ToneStretchAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __ToneStretchAdjustmentRasterNodeDefinitionHandle: true; }
interface ToneStretchAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __ToneStretchAdjustmentRasterNodeHandle: true; }
interface TransformInterfaceHandle { readonly __TransformInterfaceHandle: true; }
interface TransparencyInterfaceHandle { readonly __TransparencyInterfaceHandle: true; }
interface TransparencyMeshSubSelectionHandle extends SubSelectionHandle { readonly __TransparencyMeshSubSelectionHandle: true; }
interface TransparencySubSelectionHandle extends SubSelectionHandle { readonly __TransparencySubSelectionHandle: true; }
interface TwirlFilterParametersHandle { readonly __TwirlFilterParametersHandle: true; }
interface TwirlFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __TwirlFilterRasterNodeDefinitionHandle: true; }
interface TwirlFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __TwirlFilterRasterNodeHandle: true; }
interface UnitValueConverterHandle { readonly __UnitValueConverterHandle: true; }
interface UnsharpMaskFilterParametersHandle { readonly __UnsharpMaskFilterParametersHandle: true; }
interface UnsharpMaskFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __UnsharpMaskFilterRasterNodeDefinitionHandle: true; }
interface UnsharpMaskFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __UnsharpMaskFilterRasterNodeHandle: true; }
interface VectorNodeDefinitionHandle extends PhysicalNodeDefinitionHandle { readonly __VectorNodeDefinitionHandle: true; }
interface VectorNodeHandle extends PhysicalNodeHandle { readonly __VectorNodeHandle: true; }
interface VibranceAdjustmentParametersHandle { readonly __VibranceAdjustmentParametersHandle: true; }
interface VibranceAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __VibranceAdjustmentRasterNodeDefinitionHandle: true; }
interface VibranceAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __VibranceAdjustmentRasterNodeHandle: true; }
interface VignetteFilterParametersHandle { readonly __VignetteFilterParametersHandle: true; }
interface VignetteFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __VignetteFilterRasterNodeDefinitionHandle: true; }
interface VignetteFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __VignetteFilterRasterNodeHandle: true; }
interface VisibilityInterfaceHandle { readonly __VisibilityInterfaceHandle: true; }
interface VisibilityTestOptionsHandle { readonly __VisibilityTestOptionsHandle: true; }
interface VoronoiFilterParametersHandle { readonly __VoronoiFilterParametersHandle: true; }
interface VoronoiFilterRasterNodeDefinitionHandle extends FilterRasterNodeDefinitionHandle { readonly __VoronoiFilterRasterNodeDefinitionHandle: true; }
interface VoronoiFilterRasterNodeHandle extends FilterRasterNodeHandle { readonly __VoronoiFilterRasterNodeHandle: true; }
interface WhiteBalanceAdjustmentParametersHandle { readonly __WhiteBalanceAdjustmentParametersHandle: true; }
interface WhiteBalanceAdjustmentRasterNodeDefinitionHandle extends AdjustmentRasterNodeDefinitionHandle { readonly __WhiteBalanceAdjustmentRasterNodeDefinitionHandle: true; }
interface WhiteBalanceAdjustmentRasterNodeHandle extends AdjustmentRasterNodeHandle { readonly __WhiteBalanceAdjustmentRasterNodeHandle: true; }

// ---------------------------------------------------------------------------
// Not assigned to any module in modules.json, so declared globally
// ---------------------------------------------------------------------------

declare enum RasterBrushSubSyncMode {
    CurrentNozzle,
    PreviousNozzle,
    WholeStroke,
}

declare enum TaskCallbackReason {
    Execute,
    Destroy,
}

declare class UnitTypePower {
    type: import("affinity:common").UnitType;
    power: number;
}


// ---------------------------------------------------------------------------
// affinity:application
// ---------------------------------------------------------------------------

declare module "affinity:application" {

    import { EnumerationResult, LogLevel } from "affinity:common";

    export enum BuildKind {
        AffinityRetail,
        AppStoreRetail,
        InternalAlpha,
        CustomerBeta,
        PublicBeta,
    }

    export enum EnvironmentPermission {
        FileSystem,
        Network,
        GenAI,
    }

    export enum UiParadigm {
        Desktop,
        Tablet,
    }

    export class HeapStatistics {
        totalHeapSize: number;
        totalHeapSizeExecutable: number;
        totalPhysicalSize: number;
        totalAvailableSize: number;
        totalGlobalHandlesSize: number;
        usedGlobalHandlesSize: number;
        usedHeapSize: number;
        heapSizeLimit: number;
        mallocedMemory: number;
        externalMemory: number;
        peakMallocedMemory: number;
        numberOfNativeContexts: number;
        numberOfDetachedContexts: number;
        doesZapGarbage: boolean;
    }

    export interface ApplicationApi {
        getArgC(): number;
        getArgV(): string[];
        getBuildKind(): BuildKind;
        getBuildVersion(): number;
        getCompileDate(): string;
        getDocumentVersion(): number;
        getMajorVersion(): number;
        getMinorVersion(): number;
        getPlatformName(): string;
        getProductCopyrightMessage(): string;
        getProductFullName(): string;
        getProductLongName(): string;
        getProductPrimaryFileExtension(): string;
        getProductShortName(): string;
        getProductVersionName(): string;
        getResourcesPath(): string;
        getRevisionVersion(): number;
        getShortVersion(): string;
        getSuiteFullName(): string;
        getUiParadigm(): UiParadigm;
        getUserDesktopPath(): string;
        getVersion(): string;
    }
    export const ApplicationApi: ApplicationApi;

    export interface ApplicationSettingsApi {
        getAllowCodeGenerationFromStrings(): boolean;
        getLoadPSDWithEditableText(): boolean;
        getUndoLimit(): number;
        setLoadPSDWithEditableText(value: boolean): void;
    }
    export const ApplicationSettingsApi: ApplicationSettingsApi;

    export interface EnvironmentApi {
        enumerateFileSystemRoots(callback: (root: string) => EnumerationResult): void;
        getConfiguration(): ConfigurationItemHandle;
        getHeapStatistics(): HeapStatistics;
        getLogLevel(): LogLevel;
        getResources(): ResourceBundleHandle;
        getSDKVersionStr(): string;
        getV8VersionStr(): string;
        hasPermission(permission: EnvironmentPermission): boolean;
        postTask(taskProc: () => void): void;
        quit(): void;
        setLogLevel(logLevel: LogLevel): void;
    }
    export const EnvironmentApi: EnvironmentApi;

    export interface ResourceApi {
        getName(self: ResourceHandle): string;
        getPath(self: ResourceHandle): string;
        getSize(self: ResourceHandle): number;
        readBytes(self: ResourceHandle): BufferHandle;
        readBytesAsync(self: ResourceHandle, callback: (errorCode: Error | null, buffer: BufferHandle | null) => void): void;
    }
    export const ResourceApi: ResourceApi;

    export interface ResourceBundleApi {
        containsNativePath(self: ResourceBundleHandle, path: string): boolean;
        createIterator(self: ResourceBundleHandle): ResourceIteratorHandle;
        enumerate(self: ResourceBundleHandle, callback: (resource: ResourceHandle) => EnumerationResult): void;
        get(self: ResourceBundleHandle, path: string): ResourceHandle;
    }
    export const ResourceBundleApi: ResourceBundleApi;

    export interface ResourceIteratorApi {
        getResource(self: ResourceIteratorHandle): ResourceHandle;
        isDone(self: ResourceIteratorHandle): boolean;
        next(self: ResourceIteratorHandle): void;
    }
    export const ResourceIteratorApi: ResourceIteratorApi;

}

// ---------------------------------------------------------------------------
// affinity:brushes
// ---------------------------------------------------------------------------

declare module "affinity:brushes" {

    import { BlendMode } from "affinity:common";

    export enum BrushDynamicControllerType {
        None,
        Random,
        Pressure,
        Angle,
        Tilt,
        Rotation,
        Cyclic,
        Velocity,
        VelocityInverse,
        Direction,
        Wheel,
        Distance,
    }

    export enum CornerStrategy {
        Pull,
        Fold,
        Overlap,
    }

    export enum PathBrushDynamicControllerType {
        None,
        Pressure,
        Velocity,
        VelocityInverse,
    }

    export enum RasterBrushTextureMode {
        None,
        Nozzle,
        Final,
    }

    export interface BrushDynamicApi {
        clone(self: BrushDynamicHandle): BrushDynamicHandle;
        getControllerType(self: BrushDynamicHandle): BrushDynamicControllerType;
        getDynamicMax(self: BrushDynamicHandle): number;
        getDynamicMin(self: BrushDynamicHandle): number;
        getSpline(self: BrushDynamicHandle): SplineHandle;
        getValue(self: BrushDynamicHandle): number;
        getVariance(self: BrushDynamicHandle): number;
        setControllerType(self: BrushDynamicHandle, controllerType: BrushDynamicControllerType): void;
        setSpline(self: BrushDynamicHandle, spline: SplineHandle): void;
        setValue(self: BrushDynamicHandle, value: number): void;
        setVariance(self: BrushDynamicHandle, variance: number): void;
    }
    export const BrushDynamicApi: BrushDynamicApi;

    export interface PathBrushApi {
        clone(self: PathBrushHandle): PathBrushHandle;
        getBrushWidth(self: PathBrushHandle): number;
        getCornerStrategy(self: PathBrushHandle): CornerStrategy;
        getHeadOffset(self: PathBrushHandle): number;
        getOpacityVariance(self: PathBrushHandle): number;
        getSizeControllerType(self: PathBrushHandle): PathBrushDynamicControllerType;
        getSizeSpline(self: PathBrushHandle): SplineHandle;
        getSizeVariance(self: PathBrushHandle): number;
        getTailOffset(self: PathBrushHandle): number;
        isRepeat(self: PathBrushHandle): boolean;
        setBrushWidth(self: PathBrushHandle, brushWidth: number): void;
        setCornerStrategy(self: PathBrushHandle, cornerStrategy: CornerStrategy): void;
        setHeadOffset(self: PathBrushHandle, headOffset: number): void;
        setIsRepeat(self: PathBrushHandle, repeat: boolean): void;
        setOpacityVariance(self: PathBrushHandle, opacityVariance: number): void;
        setSizeControllerType(self: PathBrushHandle, sizeControllerType: PathBrushDynamicControllerType): void;
        setSizeSpline(self: PathBrushHandle, sizeSpline: SplineHandle): void;
        setSizeVariance(self: PathBrushHandle, sizeVariance: number): void;
        setTailOffset(self: PathBrushHandle, tailOffset: number): void;
    }
    export const PathBrushApi: PathBrushApi;

    export interface RasterBrushApi {
        clone(self: RasterBrushHandle): RasterBrushHandle;
        getAccumulation(self: RasterBrushHandle): BrushDynamicHandle;
        getAngle(self: RasterBrushHandle): BrushDynamicHandle;
        getBlendMode(self: RasterBrushHandle): BlendMode;
        getFlow(self: RasterBrushHandle): BrushDynamicHandle;
        getHardness(self: RasterBrushHandle): BrushDynamicHandle;
        getHueShift(self: RasterBrushHandle): BrushDynamicHandle;
        getLumShift(self: RasterBrushHandle): BrushDynamicHandle;
        getMaskTextureMode(self: RasterBrushHandle): RasterBrushTextureMode;
        getMaskTextureScale(self: RasterBrushHandle): number;
        getOpacity(self: RasterBrushHandle): number;
        getSatShift(self: RasterBrushHandle): BrushDynamicHandle;
        getScatterX(self: RasterBrushHandle): BrushDynamicHandle;
        getScatterY(self: RasterBrushHandle): BrushDynamicHandle;
        getShape(self: RasterBrushHandle): BrushDynamicHandle;
        getShouldApplyWetEdges(self: RasterBrushHandle): boolean;
        getShouldInterpolateTips(self: RasterBrushHandle): boolean;
        getSize(self: RasterBrushHandle): BrushDynamicHandle;
        getSpacing(self: RasterBrushHandle): number;
        getWetEdges(self: RasterBrushHandle): boolean;
        setAccumulation(self: RasterBrushHandle, accumulation: BrushDynamicHandle): void;
        setAngle(self: RasterBrushHandle, angle: BrushDynamicHandle): void;
        setBlendMode(self: RasterBrushHandle, blendMode: BlendMode): void;
        setFlow(self: RasterBrushHandle, flow: BrushDynamicHandle): void;
        setHardness(self: RasterBrushHandle, hardness: BrushDynamicHandle): void;
        setHueShift(self: RasterBrushHandle, hueShift: BrushDynamicHandle): void;
        setLumShift(self: RasterBrushHandle, lumShift: BrushDynamicHandle): void;
        setMaskTextureMode(self: RasterBrushHandle, maskTextureMode: RasterBrushTextureMode): void;
        setMaskTextureScale(self: RasterBrushHandle, maskTextureScale: number): void;
        setOpacity(self: RasterBrushHandle, opacity: number): void;
        setSatShift(self: RasterBrushHandle, satShift: BrushDynamicHandle): void;
        setScatterX(self: RasterBrushHandle, scatterX: BrushDynamicHandle): void;
        setScatterY(self: RasterBrushHandle, scatterY: BrushDynamicHandle): void;
        setShape(self: RasterBrushHandle, shape: BrushDynamicHandle): void;
        setShouldApplyWetEdges(self: RasterBrushHandle, shouldApplyWetEdges: boolean): void;
        setShouldInterpolateTips(self: RasterBrushHandle, shouldInterpolateTips: boolean): void;
        setSize(self: RasterBrushHandle, size: BrushDynamicHandle): void;
        setSpacing(self: RasterBrushHandle, spacing: number): void;
        setWetEdges(self: RasterBrushHandle, wetEdges: boolean): void;
    }
    export const RasterBrushApi: RasterBrushApi;

}

// ---------------------------------------------------------------------------
// affinity:buffer
// ---------------------------------------------------------------------------

declare module "affinity:buffer" {

    export interface BufferApi {
        clone(self: BufferHandle): BufferHandle;
        cloneAsBuffer(self: BufferHandle): BufferHandle;
        compare(self: BufferHandle, other: BufferHandle): number;
        compareSome(self: BufferHandle, offset: number, length: number, other: BufferHandle, otherOffset: number, otherLength: number): number;
        create(size: number): BufferHandle;
        createSlice(self: BufferHandle, offset: number, length: number): BufferHandle;
        createSpan(self: BufferHandle, offset: number, length: number): BufferHandle;
        equals(self: BufferHandle, other: BufferHandle): boolean;
        getArrayBuffer(self: BufferHandle): ArrayBuffer;
        getSize(self: BufferHandle): number;
        toString(buffer: BufferHandle | ArrayBuffer | SharedArrayBuffer | ArrayBufferView, encoding: string, start: number, end: number): string;
    }
    export const BufferApi: BufferApi;

}

// ---------------------------------------------------------------------------
// affinity:colours
// ---------------------------------------------------------------------------

declare module "affinity:colours" {

    import { EnumerationResult } from "affinity:common";
    import { RasterFormat, RasterIntent } from "affinity:raster";

    export enum ColourSpaceType {
        Unknown,
        Grey,
        RGB,
        CMYK,
        LAB,
        RGBU,
    }

    export enum ColourType {
        RGB,
        CMYK,
        HSL,
        Grey,
        LAB,
        Named,
        Registration,
    }

    export class CMYKA8 {
        c: number;
        m: number;
        y: number;
        k: number;
        alpha: number;
    }

    export class CMYKAf {
        c: number;
        m: number;
        y: number;
        k: number;
        alpha: number;
    }

    export class ColourStop {
        colour: ColourHandle;
        position: number;
        midpoint: number;
        smoothness: number;
    }

    export class HSLAf {
        h: number;
        s: number;
        l: number;
        alpha: number;
    }

    export class IA16 {
        i: number;
        alpha: number;
    }

    export class IA8 {
        i: number;
        alpha: number;
    }

    export class LABA16 {
        l: number;
        a: number;
        b: number;
        alpha: number;
    }

    export class M16 {
        alpha: number;
    }

    export class M8 {
        alpha: number;
    }

    export class Mf {
        alpha: number;
    }

    export class RGBA16 {
        r: number;
        g: number;
        b: number;
        alpha: number;
    }

    export class RGBA8 {
        r: number;
        g: number;
        b: number;
        alpha: number;
    }

    export class RGBAuf {
        r: number;
        g: number;
        b: number;
        alpha: number;
    }

    export interface ColourApi {
        clone(self: ColourHandle): ColourHandle;
        convertProfile(self: ColourHandle, fromProfile: ColourProfileHandle, toProfile: ColourProfileHandle, intent: RasterIntent, isBlackPointCompensation: boolean): void;
        createCMYKA8(cMYKA8: CMYKA8): ColourHandle;
        createCMYKAf(cMYKAf: CMYKAf): ColourHandle;
        createDefault(): ColourHandle;
        createHSLAf(hSLAf: HSLAf): ColourHandle;
        createIA16(iA16: IA16): ColourHandle;
        createIA8(iA8: IA8): ColourHandle;
        createLABA16(lABA16: LABA16): ColourHandle;
        createRGBA16(rGBA16: RGBA16): ColourHandle;
        createRGBA8(rGB8: RGBA8): ColourHandle;
        createRGBAuf(rGBAuf: RGBAuf): ColourHandle;
        getAlpha(self: ColourHandle): number;
        getCMYKA8(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): CMYKA8;
        getCMYKAf(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): CMYKAf;
        getColourSpace(self: ColourHandle): ColourSpaceType;
        getHSLAf(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): HSLAf;
        getIA16(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): IA16;
        getIA8(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): IA8;
        getIntensity(self: ColourHandle): number;
        getLABA16(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): LABA16;
        getNoise(self: ColourHandle): number;
        getOverprint(self: ColourHandle): boolean;
        getRGBA16(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): RGBA16;
        getRGBA8(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): RGBA8;
        getRGBAuf(self: ColourHandle, applyTint: boolean, profilesOrNull: ColourProfileSetHandle | null): RGBAuf;
        getTint(self: ColourHandle): number;
        getType(self: ColourHandle): ColourType;
        setAlpha(self: ColourHandle, alpha: number): void;
        setIntensity(self: ColourHandle, intensity: number): void;
        setNoise(self: ColourHandle, noise: number): void;
        setOverprint(self: ColourHandle, overprint: boolean): void;
        setTint(self: ColourHandle, tint: number): void;
    }
    export const ColourApi: ColourApi;

    export interface ColourProfileApi {
        canApplyTo(self: ColourProfileHandle, format: RasterFormat): boolean;
        enumerateProfiles(callback: (colourProfile: ColourProfileHandle) => EnumerationResult): void;
        enumerateProfilesForColourSpace(colourSpaceType: ColourSpaceType, callback: (colourProfile: ColourProfileHandle) => EnumerationResult): void;
        enumerateProfilesForFormat(format: RasterFormat, callback: (colourProfile: ColourProfileHandle) => EnumerationResult): void;
        find(name: string): ColourProfileHandle;
        getApproximateGamma(self: ColourProfileHandle): number;
        getColourSpace(self: ColourProfileHandle): ColourSpaceType;
        getDefaultForColourSpace(colourSpaceType: ColourSpaceType): ColourProfileHandle;
        getDefaultForFormat(format: RasterFormat): ColourProfileHandle;
        getDeviceClass(self: ColourProfileHandle): number;
        getName(self: ColourProfileHandle): string;
        getProfile(index: number): ColourProfileHandle;
        getProfileCount(): number;
        getVersion(self: ColourProfileHandle): number;
        isLinear(self: ColourProfileHandle): boolean;
        isStandard(self: ColourProfileHandle): boolean;
    }
    export const ColourProfileApi: ColourProfileApi;

    export interface ColourProfileSetApi {
        createDefault(): ColourProfileSetHandle;
        getBlackPointCompensation(self: ColourProfileSetHandle): boolean;
        getIntent(self: ColourProfileSetHandle): RasterIntent;
        getProfileForColourSpaceType(self: ColourProfileSetHandle, colourSpaceType: ColourSpaceType): ColourProfileHandle;
        getProfileForFormat(self: ColourProfileSetHandle, format: RasterFormat): ColourProfileHandle;
        setBlackPointCompensation(self: ColourProfileSetHandle, isBlackPointCompensation: boolean): void;
        setIntent(self: ColourProfileSetHandle, intent: RasterIntent): void;
        setProfileForColourSpaceType(self: ColourProfileSetHandle, colourSpaceType: ColourSpaceType, colourProfile: ColourProfileHandle): void;
        setProfileForFormat(self: ColourProfileSetHandle, format: RasterFormat, colourProfile: ColourProfileHandle): void;
    }
    export const ColourProfileSetApi: ColourProfileSetApi;

    export interface GradientApi {
        clone(self: GradientHandle): GradientHandle;
        create(stops: ColourStop[]): GradientHandle;
        createDefault(): GradientHandle;
        getAlpha(self: GradientHandle): number;
        getIntensity(self: GradientHandle): number;
        getNoise(self: GradientHandle): number;
        getStop(self: GradientHandle, index: number): ColourStop;
        getStopCount(self: GradientHandle): number;
        getTint(self: GradientHandle): number;
        hasNoise(self: GradientHandle): boolean;
        hasNonFullAlpha(self: GradientHandle): boolean;
        hasNonLinearMapping(self: GradientHandle): boolean;
        setAlpha(self: GradientHandle, alpha: number): void;
        setIntensity(self: GradientHandle, intensity: number): void;
        setNoise(self: GradientHandle, noise: number): void;
        setTint(self: GradientHandle, tint: number): void;
    }
    export const GradientApi: GradientApi;

}

// ---------------------------------------------------------------------------
// affinity:commands
// ---------------------------------------------------------------------------

declare module "affinity:commands" {

    import { ColourSpaceType } from "affinity:colours";
    import { BlendMode, EnumerationResult, UnitType } from "affinity:common";
    import { AntialiasingMode, ContentType, CurveNodeSubSelectionItem, NodeChildType, NodeMoveType, PageBoundingBoxType, PredefinedTagKey, RasterFillMode, RasterFloodFillSamplingSource, RasterSelectionLogicalOperation, RasterSelectionOutlineAlignment, SamplingSource, SpatialAnchor, VisibilityMode } from "affinity:dom";
    import { FillMask } from "affinity:fills";
    import { CurveNodeStyle, Point, Rectangle, ShapeBoolParam, ShapeEnumParam, ShapeFloatParam, ShapeIntParam, Transform, WindingOrder } from "affinity:geometry";
    import { BevelEmbossType, StrokeFillType } from "affinity:layereffects";
    import { LineStyleMask, StrokeAlignment } from "affinity:linestyles";
    import { RasterFormat } from "affinity:raster";

    export enum GroupTransformAnchor {
        LogicalEdge,
        Spread,
        SpreadMargins,
        FirstSelected,
        LastSelected,
        Page,
        PageMargins,
    }

    export enum GroupTransformOrder {
        Min,
        Mid,
        Max,
    }

    export enum GroupTransformType {
        None,
        Min,
        Mid,
        Max,
        DistributeMin,
        DistributeMid,
        DistributeMax,
        Space,
        Reorder,
        SpaceKeyObject,
    }

    export enum InsertionMode {
        Default,
        Inside_AtBack,
        Inside_AtFront,
        Behind,
        Top,
    }

    export enum LineCommandDefaultsMode {
        None,
        Line,
        Brush,
        ArtText,
        FrameText,
    }

    export enum PageInsertMode {
        DocumentFlow,
        ExtendSpread,
        CreateSpread,
    }

    export class GroupTransformData {
        type: GroupTransformType;
        anchor: GroupTransformAnchor;
        order: GroupTransformOrder;
        spacing: number;
        isAutoSpacing: boolean;
        reorderSpaces: boolean;
    }

    export interface AddChildNodesCommandBuilderApi {
        addAddNoiseFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: AddNoiseFilterRasterNodeDefinitionHandle): void;
        addBilateralBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, bilateralBlurFilterRasterNodeDefinition: BilateralBlurFilterRasterNodeDefinitionHandle): void;
        addBlackAndWhiteAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: BlackAndWhiteAdjustmentRasterNodeDefinitionHandle): void;
        addBloomFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: BloomFilterRasterNodeDefinitionHandle): void;
        addBoxBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, boxBlurFilterRasterNodeDefinition: BoxBlurFilterRasterNodeDefinitionHandle): void;
        addBrightnessContrastAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: BrightnessContrastAdjustmentRasterNodeDefinitionHandle): void;
        addClarityFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: ClarityFilterRasterNodeDefinitionHandle): void;
        addColourBalanceAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: ColourBalanceAdjustmentRasterNodeDefinitionHandle): void;
        addContainerNode(self: AddChildNodesCommandBuilderHandle, containerNodeDefinition: ContainerNodeDefinitionHandle): void;
        addCurvesAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, curvesAdjustmentRasterNodeDefinition: CurvesAdjustmentRasterNodeDefinitionHandle): void;
        addDefringeFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: DefringeFilterRasterNodeDefinitionHandle): void;
        addDenoiseFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: DenoiseFilterRasterNodeDefinitionHandle): void;
        addDepthOfFieldFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: DepthOfFieldFilterRasterNodeDefinitionHandle): void;
        addDiffuseFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: DiffuseFilterRasterNodeDefinitionHandle): void;
        addDiffuseGlowFilterRasterNode(self: AddChildNodesCommandBuilderHandle, diffuseGlowFilterRasterNodeDefinition: DiffuseGlowFilterRasterNodeDefinitionHandle): void;
        addDustAndScratchFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: DustAndScratchFilterRasterNodeDefinitionHandle): void;
        addExposureAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, exposureAdjustmentRasterNodeDefinition: ExposureAdjustmentRasterNodeDefinitionHandle): void;
        addFieldBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, fieldBlurFilterRasterNodeDefinition: FieldBlurFilterRasterNodeDefinitionHandle): void;
        addGaussianBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, gaussianBlurFilterRasterNodeDefinition: GaussianBlurFilterRasterNodeDefinitionHandle): void;
        addHSLShiftAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: HSLShiftAdjustmentRasterNodeDefinitionHandle): void;
        addHalftoneFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: HalftoneFilterRasterNodeDefinitionHandle): void;
        addHighPassFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: HighPassFilterRasterNodeDefinitionHandle): void;
        addImageNode(self: AddChildNodesCommandBuilderHandle, imageNodeDefinition: ImageNodeDefinitionHandle): void;
        addInvertAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: InvertAdjustmentRasterNodeDefinitionHandle): void;
        addLensBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, lensBlurFilterRasterNodeDefinition: LensBlurFilterRasterNodeDefinitionHandle): void;
        addLevelsAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, levelsAdjustmentRasterNodeDefinition: LevelsAdjustmentRasterNodeDefinitionHandle): void;
        addMaskRasterNode(self: AddChildNodesCommandBuilderHandle, maskRasterNodeDefinition: MaskRasterNodeDefinitionHandle): void;
        addMaximumBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, maximumBlurFilterRasterNodeDefinition: MaximumBlurFilterRasterNodeDefinitionHandle): void;
        addMeasurementNode(self: AddChildNodesCommandBuilderHandle, measurementNodeDefinition: MeasurementNodeDefinitionHandle): void;
        addMedianBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, medianBlurFilterRasterNodeDefinition: MedianBlurFilterRasterNodeDefinitionHandle): void;
        addMinimumBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, minimumBlurFilterRasterNodeDefinition: MinimumBlurFilterRasterNodeDefinitionHandle): void;
        addMotionBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, motionBlurFilterRasterNodeDefinition: MotionBlurFilterRasterNodeDefinitionHandle): void;
        addNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: NodeDefinitionHandle): void;
        addNormalsAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: NormalsAdjustmentRasterNodeDefinitionHandle): void;
        addPatternRasterNode(self: AddChildNodesCommandBuilderHandle, patternRasterNodeDefinition: PatternRasterNodeDefinitionHandle): void;
        addPinchPunchFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: PinchPunchFilterRasterNodeDefinitionHandle): void;
        addPixelateFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: PixelateFilterRasterNodeDefinitionHandle): void;
        addPolyCurveNode(self: AddChildNodesCommandBuilderHandle, polyCurveNodeDefinition: PolyCurveNodeDefinitionHandle): void;
        addPosteriseAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: PosteriseAdjustmentRasterNodeDefinitionHandle): void;
        addRadialBlurFilterRasterNode(self: AddChildNodesCommandBuilderHandle, radialBlurFilterRasterNodeDefinition: RadialBlurFilterRasterNodeDefinitionHandle): void;
        addRasterNode(self: AddChildNodesCommandBuilderHandle, rasterNodeDefinition: RasterNodeDefinitionHandle): void;
        addRecolourAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: RecolourAdjustmentRasterNodeDefinitionHandle): void;
        addRippleFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: RippleFilterRasterNodeDefinitionHandle): void;
        addSelectiveColourAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: SelectiveColourAdjustmentRasterNodeDefinitionHandle): void;
        addShadowsHighlightsFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: ShadowsHighlightsFilterRasterNodeDefinitionHandle): void;
        addShapeNode(self: AddChildNodesCommandBuilderHandle, shapeNodeDefinition: ShapeNodeDefinitionHandle): void;
        addSphericalFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: SphericalFilterRasterNodeDefinitionHandle): void;
        addSplitToningAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: SplitToningAdjustmentRasterNodeDefinitionHandle): void;
        addTableTextNode(self: AddChildNodesCommandBuilderHandle, tableTextNodeDefinition: TableTextNodeDefinitionHandle): void;
        addThresholdAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: ThresholdAdjustmentRasterNodeDefinitionHandle): void;
        addToneCompressionAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, toneCompressionAdjustmentRasterNodeDefinition: ToneCompressionAdjustmentRasterNodeDefinitionHandle): void;
        addToneStretchAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, toneStretchAdjustmentRasterNodeDefinition: ToneStretchAdjustmentRasterNodeDefinitionHandle): void;
        addTwirlFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: TwirlFilterRasterNodeDefinitionHandle): void;
        addUnsharpMaskFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: UnsharpMaskFilterRasterNodeDefinitionHandle): void;
        addVibranceAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: VibranceAdjustmentRasterNodeDefinitionHandle): void;
        addVignetteFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: VignetteFilterRasterNodeDefinitionHandle): void;
        addVoronoiFilterRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: VoronoiFilterRasterNodeDefinitionHandle): void;
        addWhiteBalanceAdjustmentRasterNode(self: AddChildNodesCommandBuilderHandle, nodeDefinition: WhiteBalanceAdjustmentRasterNodeDefinitionHandle): void;
        clearInsertionTarget(self: AddChildNodesCommandBuilderHandle): void;
        clearInsertionTargetSelection(self: AddChildNodesCommandBuilderHandle): void;
        clearNodes(self: AddChildNodesCommandBuilderHandle): void;
        create(): AddChildNodesCommandBuilderHandle;
        createCommand(self: AddChildNodesCommandBuilderHandle, andSelect: boolean, childType: NodeChildType): DocumentCommandHandle;
        createCommandAndReset(self: AddChildNodesCommandBuilderHandle, andSelect: boolean, childType: NodeChildType): DocumentCommandHandle;
        setAppendCurrentSelection(self: AddChildNodesCommandBuilderHandle, appendCurrentSelection: boolean): void;
        setAutoName(self: AddChildNodesCommandBuilderHandle, autoName: boolean): void;
        setClearCurrentSelection(self: AddChildNodesCommandBuilderHandle, clearCurrentSelection: boolean): void;
        setForcePixelAlignment(self: AddChildNodesCommandBuilderHandle, forcePixelAlignment: boolean): void;
        setInsertionMode(self: AddChildNodesCommandBuilderHandle, mode: InsertionMode): void;
        setInsertionTarget(self: AddChildNodesCommandBuilderHandle, targetNode: NodeHandle): void;
        setInsertionTargetSelection(self: AddChildNodesCommandBuilderHandle, targetSelection: SelectionHandle): void;
    }
    export const AddChildNodesCommandBuilderApi: AddChildNodesCommandBuilderApi;

    export interface CommandApi {
        areEqual(self: CommandHandle, other: CommandHandle): void;
        getDescription(self: CommandHandle): string;
    }
    export const CommandApi: CommandApi;

    export interface CompoundCommandBuilderApi {
        addCommand(self: CompoundCommandBuilderHandle, documentCommand: DocumentCommandHandle, useAsDescription: boolean): void;
        clear(self: CompoundCommandBuilderHandle): void;
        create(): CompoundCommandBuilderHandle;
        createCommand(self: CompoundCommandBuilderHandle): DocumentCommandHandle;
    }
    export const CompoundCommandBuilderApi: CompoundCommandBuilderApi;

    export interface DocumentCommandApi extends CommandApi {
        createAddArtboardCommand(artboardDefinition: NodeDefinitionHandle, copyProperties: boolean, copyGuides: boolean): DocumentCommandHandle;
        createAddCurveCommand(curvesInterface: CurvesInterfaceHandle, curve: CurveHandle, select: boolean, preserveExistingSubSelection: boolean): DocumentCommandHandle;
        createAddCurveNodeCommand(curvesInterface: CurvesInterfaceHandle, curveHandle: CurveNodeSubSelectionItem, parametricDistance: number): DocumentCommandHandle;
        createAddDocumentSnapshotCommand(description: string): DocumentCommandHandle;
        createAddEmptyMaskCommand(selectionOrNull: SelectionHandle | null, andSelect: boolean, childType: NodeChildType): DocumentCommandHandle;
        createAddGuideCommand(horizontal: boolean, dPixels96: number): DocumentCommandHandle;
        createAddMaskCommand(selectionOrNull: SelectionHandle | null, andSelect: boolean, childType: NodeChildType): DocumentCommandHandle;
        createAddMasterPagesCommand(insertAfterMasterSpreadIndex: number, masterSpreadCount: number, pageCount: number): DocumentCommandHandle;
        createAddNoiseFilterCommand(selectionOrNull: SelectionHandle | null, parameters: AddNoiseFilterParametersHandle): DocumentCommandHandle;
        createAddPagesCommand(firstPageIndex: number, insertAfter: boolean, pageCount: number, masterSpreadIndex: number, insertMode: PageInsertMode): DocumentCommandHandle;
        createAddShapeCommand(shape: ShapeHandle, rectangle: Rectangle): DocumentCommandHandle;
        createBilateralBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: BilateralBlurFilterParametersHandle): DocumentCommandHandle;
        createBloomFilterCommand(selectionOrNull: SelectionHandle | null, parameters: BloomFilterParametersHandle): DocumentCommandHandle;
        createBoolOpIntersectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createBoolOpSubtractCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createBoolOpUnionCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createBoolOpXorCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createBoxBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: BoxBlurFilterParametersHandle): DocumentCommandHandle;
        createBreakCurvesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createClarityFilterCommand(selectionOrNull: SelectionHandle | null, parameters: ClarityFilterParametersHandle): DocumentCommandHandle;
        createClearMacroCommand(): DocumentCommandHandle;
        createClearPreviewsCommand(): DocumentCommandHandle;
        createColouriseCommand(): DocumentCommandHandle;
        createConvertDocumentFormatCommand(format: RasterFormat): DocumentCommandHandle;
        createConvertToCurvesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createCycleAlternateFuturesCommand(index: number): DocumentCommandHandle;
        createDecomposeLayerCommand(): DocumentCommandHandle;
        createDefringeFilterCommand(selectionOrNull: SelectionHandle | null, parameters: DefringeFilterParametersHandle): DocumentCommandHandle;
        createDeleteCurveNodesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createDeleteDocumentSnapshotCommand(snapshot: DocumentSnapshotHandle): DocumentCommandHandle;
        createDeleteMasterPagesCommand(firstMasterSpreadIndex: number, masterSpreadCount: number): DocumentCommandHandle;
        createDeleteNodesCommand(selectionOrNull: SelectionHandle | null, ignoreRasterSelection: boolean): DocumentCommandHandle;
        createDeletePagesCommand(firstPageIndex: number, pageCount: number): DocumentCommandHandle;
        createDenoiseFilterCommand(selectionOrNull: SelectionHandle | null, parameters: DenoiseFilterParametersHandle): DocumentCommandHandle;
        createDepthOfFieldFilterCommand(selectionOrNull: SelectionHandle | null, parameters: DepthOfFieldFilterParametersHandle): DocumentCommandHandle;
        createDetectDepthCommand(): DocumentCommandHandle;
        createDiffuseFilterCommand(selectionOrNull: SelectionHandle | null, parameters: DiffuseFilterParametersHandle): DocumentCommandHandle;
        createDiffuseGlowFilterCommand(selectionOrNull: SelectionHandle | null, parameters: DiffuseGlowFilterParametersHandle): DocumentCommandHandle;
        createDivideShapesCommand(selectionOrNull: SelectionHandle | null, retainAllParts: boolean): DocumentCommandHandle;
        createDuplicateBevelEmbossLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createDuplicateColourOverlayLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createDuplicateGaussianBlurLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createDuplicateGradientOverlayLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createDuplicateInnerGlowLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createDuplicateInnerShadowLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createDuplicateOuterGlowLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createDuplicateOuterShadowLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createDuplicateOutlineLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createDuplicatePhongBevelLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createDustAndScratchFilterCommand(selectionOrNull: SelectionHandle | null, parameters: DustAndScratchFilterParametersHandle): DocumentCommandHandle;
        createExportMacroCommand(macroPath: string): DocumentCommandHandle;
        createFeatherRasterSelectionCommand(radius: number): DocumentCommandHandle;
        createFieldBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: FieldBlurFilterParametersHandle): DocumentCommandHandle;
        createFlattenCommand(): DocumentCommandHandle;
        createFlipCanvasCommand(isHorizontal: boolean): DocumentCommandHandle;
        createFormatTextCommand(selectionOrNull: SelectionHandle | null, delta: StoryDeltaHandle): DocumentCommandHandle;
        createGaussianBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: GaussianBlurFilterParametersHandle): DocumentCommandHandle;
        createGenerateImageCommand(prompt: string): DocumentCommandHandle;
        createGenerativeEditImageCommand(prompt: string): DocumentCommandHandle;
        createGenerativeUpscaleCommand(selectionOrNull: SelectionHandle | null, scale: number): DocumentCommandHandle;
        createGroupNodesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createGroupTransformCommand(selectionOrNull: SelectionHandle | null, xDataOrNull: GroupTransformData | null, yDataOrNull: GroupTransformData | null): DocumentCommandHandle;
        createGrowShrinkRasterSelectionCommand(radius: number, circular: boolean): DocumentCommandHandle;
        createHalftoneFilterCommand(selectionOrNull: SelectionHandle | null, parameters: HalftoneFilterParametersHandle): DocumentCommandHandle;
        createHighPassFilterCommand(selectionOrNull: SelectionHandle | null, parameters: HighPassFilterParametersHandle): DocumentCommandHandle;
        createImageTraceCommand(selectionOrNull: SelectionHandle | null, edgeThreshold: number, curveFittingTolerance: number): DocumentCommandHandle;
        createImportMacroCommand(macroPath: string): DocumentCommandHandle;
        createInsertGlyphCommand(selectionOrNull: SelectionHandle | null, glyph: GlyphHandle): DocumentCommandHandle;
        createJoinCurvesCommand(selectionOrNull: SelectionHandle | null, isJoinStraight: boolean): DocumentCommandHandle;
        createKnifeCutCommand(cutCurve: CurveHandle, selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createLayerTo3DModelCommand(): DocumentCommandHandle;
        createLensBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: LensBlurFilterParametersHandle): DocumentCommandHandle;
        createLinkTextFrameCommand(srcNode: TextNodeHandle, destNode: TextNodeHandle): DocumentCommandHandle;
        createLiveStackGroupNodesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createLiveToneBlendGroupNodesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createMaximumBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: MaximumBlurFilterParametersHandle): DocumentCommandHandle;
        createMedianBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: MedianBlurFilterParametersHandle): DocumentCommandHandle;
        createMergeCurvesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createMergeDownCommand(): DocumentCommandHandle;
        createMergeSelectedCommand(): DocumentCommandHandle;
        createMergeVisibleCommand(): DocumentCommandHandle;
        createMinimumBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: MinimumBlurFilterParametersHandle): DocumentCommandHandle;
        createMixedLightCorrectionCommand(selectionOrNull: SelectionHandle | null, strength: number, preserveWhiteBalance: boolean, temperature: number): DocumentCommandHandle;
        createMotionBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: MotionBlurFilterParametersHandle): DocumentCommandHandle;
        createMoveColourOverlayLayerEffectCommand(selectionOrNull: SelectionHandle | null, fromIndex: number, toIndex: number): DocumentCommandHandle;
        createMoveGradientOverlayLayerEffectCommand(selectionOrNull: SelectionHandle | null, fromIndex: number, toIndex: number): DocumentCommandHandle;
        createMoveGuideCommand(horizontal: boolean, nIndex: number, dNewPixels96: number): DocumentCommandHandle;
        createMoveInnerShadowLayerEffectCommand(selectionOrNull: SelectionHandle | null, fromIndex: number, toIndex: number): DocumentCommandHandle;
        createMoveMappedNodesCommand(selectionOrNull: SelectionHandle | null, fromNodes: NodeHandle[], toNodes: NodeHandle[], nodeMoveType: NodeMoveType): DocumentCommandHandle;
        createMoveNodesCommand(selectionOrNull: SelectionHandle | null, toNode: NodeHandle, nodeMoveType: NodeMoveType, childType: NodeChildType): DocumentCommandHandle;
        createMoveOuterShadowLayerEffectCommand(selectionOrNull: SelectionHandle | null, fromIndex: number, toIndex: number): DocumentCommandHandle;
        createMoveOutlineLayerEffectCommand(selectionOrNull: SelectionHandle | null, fromIndex: number, toIndex: number): DocumentCommandHandle;
        createOutlineRasterSelectionCommand(radius: number, alignment: RasterSelectionOutlineAlignment, circular: boolean): DocumentCommandHandle;
        createPinchPunchFilterCommand(selectionOrNull: SelectionHandle | null, parameters: PinchPunchFilterParametersHandle): DocumentCommandHandle;
        createPixelateFilterCommand(selectionOrNull: SelectionHandle | null, parameters: PixelateFilterParametersHandle): DocumentCommandHandle;
        createPopulatePictureFrameCommand(contentNode: NodeHandle, selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRadialBlurFilterCommand(selectionOrNull: SelectionHandle | null, parameters: RadialBlurFilterParametersHandle): DocumentCommandHandle;
        createRasterAutoColoursCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasterAutoContrastCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasterAutoLevelsCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasterAutoWhiteBalanceCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasterDeselectCommand(): DocumentCommandHandle;
        createRasterEdgeDetectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasterFillCommand(selectionOrNull: SelectionHandle | null, mode: RasterFillMode, colourOrNull: ColourHandle | null, opacity: number, blendMode: BlendMode): DocumentCommandHandle;
        createRasterFloodFillCommand(selectionOrNull: SelectionHandle | null, point: Point, tolerance: number, isContiguous: boolean, antialias: boolean, samplingSource: RasterFloodFillSamplingSource, blendMode: BlendMode, colourOrNull: ColourHandle | null): DocumentCommandHandle;
        createRasterFloodSelectCommand(point: Point, tolerance: number, isContiguous: boolean, antialias: boolean, operation: RasterSelectionLogicalOperation, samplingSource: SamplingSource): DocumentCommandHandle;
        createRasterHorizontalEdgeDetectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasterInvertSelectionCommand(): DocumentCommandHandle;
        createRasterMLDenoiseCommand(selectionOrNull: SelectionHandle | null, lumaStrength: number, chromaStrength: number): DocumentCommandHandle;
        createRasterMotionBlurReductionCommand(selectionOrNull: SelectionHandle | null, strength: number): DocumentCommandHandle;
        createRasterPolarToRectangularCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasterRectangularToPolarCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasterReselectCommand(): DocumentCommandHandle;
        createRasterSDRToHDRCommand(selectionOrNull: SelectionHandle | null, strength: number): DocumentCommandHandle;
        createRasterSelectAllCommand(): DocumentCommandHandle;
        createRasterSelectBluesCommand(): DocumentCommandHandle;
        createRasterSelectGreensCommand(): DocumentCommandHandle;
        createRasterSelectHighlightsCommand(): DocumentCommandHandle;
        createRasterSelectMidtonesCommand(): DocumentCommandHandle;
        createRasterSelectOpaqueCommand(): DocumentCommandHandle;
        createRasterSelectPartiallyTransparentCommand(): DocumentCommandHandle;
        createRasterSelectRedsCommand(): DocumentCommandHandle;
        createRasterSelectShadowsCommand(): DocumentCommandHandle;
        createRasterSelectTransparentCommand(): DocumentCommandHandle;
        createRasterVerticalEdgeDetectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRasteriseObjectsCommand(selectionOrNull: SelectionHandle | null, rasteriseContentsOnly: boolean, clipToSpread: boolean): DocumentCommandHandle;
        createRedoCommand(): DocumentCommandHandle;
        createRemoveAllLayerEffectsCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRemoveBackgroundCommand(): DocumentCommandHandle;
        createRemoveBevelEmbossLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRemoveColourOverlayLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createRemoveGaussianBlurLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRemoveGradientOverlayLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createRemoveGuideCommand(horizontal: boolean, nIndex: number): DocumentCommandHandle;
        createRemoveInnerGlowLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRemoveInnerShadowLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createRemoveOuterGlowLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRemoveOuterShadowLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createRemoveOutlineLayerEffectCommand(selectionOrNull: SelectionHandle | null, index: number): DocumentCommandHandle;
        createRemovePhongBevelLayerEffectCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createReplaceBitmapCommand(selectionOrNull: SelectionHandle | null, bitmap: RasterObjectHandle): DocumentCommandHandle;
        createReplayMacroCommand(): DocumentCommandHandle;
        createRestoreDocumentSnapshotCommand(snapshot: DocumentSnapshotHandle): DocumentCommandHandle;
        createReverseCurvesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createRippleFilterCommand(selectionOrNull: SelectionHandle | null, parameters: RippleFilterParametersHandle): DocumentCommandHandle;
        createScissorCutCommand(node: NodeHandle, polyCurveIndex: number, curveIndex: number, isParametric: boolean, distance: number): DocumentCommandHandle;
        createSelectAllCommand(selectOnCurrentLayerOnly: boolean): DocumentCommandHandle;
        createSelectSubjectCommand(): DocumentCommandHandle;
        createSeparateCurvesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createSetAddNoiseFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: AddNoiseFilterParametersHandle): DocumentCommandHandle;
        createSetAllLayerEffectsScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean): DocumentCommandHandle;
        createSetAntialiasingModeCommand(selectionOrNull: SelectionHandle | null, antialiasingMode: AntialiasingMode): DocumentCommandHandle;
        createSetArtboardBaselineGridCommand(selectionOrNull: SelectionHandle | null, baselineGridOptions: BaselineGridOptionsHandle): DocumentCommandHandle;
        createSetArtboardDocumentPropertiesCommand(artboardInterface: ArtboardInterfaceHandle, artboardDocumentProperties: ArtboardDocumentPropertiesHandle): DocumentCommandHandle;
        createSetArtboardEnabledCommand(selectionOrNull: SelectionHandle | null, isEnabled: boolean): DocumentCommandHandle;
        createSetArtboardSizeWithAnchorCommand(artboardInterface: ArtboardInterfaceHandle, width: number, height: number, anchor: SpatialAnchor): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectAzimuthCommand(selectionOrNull: SelectionHandle | null, azimuth: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: BevelEmbossLayerEffectHandle): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectDepthCommand(selectionOrNull: SelectionHandle | null, depth: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectDirectionCommand(selectionOrNull: SelectionHandle | null, azimuth: number, elevation: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectElevationCommand(selectionOrNull: SelectionHandle | null, elevation: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectHighlightBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectHighlightColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectHighlightOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectInvertedCommand(selectionOrNull: SelectionHandle | null, inverted: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectLinkDepthCommand(selectionOrNull: SelectionHandle | null, linkDepth: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectRadiusCommand(selectionOrNull: SelectionHandle | null, radius: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectShadowBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectShadowColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectShadowOpacityCommand(selectionOrNull: SelectionHandle | null, shadowOpacity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectSoftenCommand(selectionOrNull: SelectionHandle | null, soften: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBevelEmbossLayerEffectTypeCommand(selectionOrNull: SelectionHandle | null, bevelType: BevelEmbossType, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetBilateralBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: BilateralBlurFilterParametersHandle): DocumentCommandHandle;
        createSetBlackAndWhiteAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: BlackAndWhiteAdjustmentParametersHandle): DocumentCommandHandle;
        createSetBlendGammaCommand(selectionOrNull: SelectionHandle | null, gamma: number): DocumentCommandHandle;
        createSetBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, setPassthrough: boolean): DocumentCommandHandle;
        createSetBlendRangesCommand(selectionOrNull: SelectionHandle | null, blendOptions: BlendOptionsHandle): DocumentCommandHandle;
        createSetBloomFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: BloomFilterParametersHandle): DocumentCommandHandle;
        createSetBoxBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: BoxBlurFilterParametersHandle): DocumentCommandHandle;
        createSetBrightnessContrastAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: BrightnessContrastAdjustmentParametersHandle): DocumentCommandHandle;
        createSetBrushFillCommand(selectionOrNull: SelectionHandle | null, fillDescriptorOrNull: FillDescriptorHandle | null, contentType: ContentType, fillMask: FillMask, copyTransform: boolean, useTextSelection: boolean, maintainBlendMode: boolean, restoreAspectRatio: boolean): DocumentCommandHandle;
        createSetBrushFillIsAnchoredToSpreadCommand(selectionOrNull: SelectionHandle | null, isAnchoredToSpread: boolean, contentType: ContentType, useTextSelection: boolean, applyToAllFills: boolean): DocumentCommandHandle;
        createSetBrushFillOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, contentType: ContentType, useTextSelection: boolean): DocumentCommandHandle;
        createSetClarityFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: ClarityFilterParametersHandle): DocumentCommandHandle;
        createSetColourBalanceAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: ColourBalanceAdjustmentParametersHandle): DocumentCommandHandle;
        createSetColourOverlayLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetColourOverlayLayerEffectColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetColourOverlayLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: ColourOverlayLayerEffectHandle, index: number): DocumentCommandHandle;
        createSetColourOverlayLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean, index: number): DocumentCommandHandle;
        createSetColourOverlayLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetColourOverlayLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetCurrentSnapshotCommand(snapshot: DocumentSnapshotHandle): DocumentCommandHandle;
        createSetCurrentSnapshotFromHistoryItemCommand(historyItem: DocumentHistoryItemHandle): DocumentCommandHandle;
        createSetCurrentSpreadCommand(spreadNode: SpreadNodeHandle): DocumentCommandHandle;
        createSetCurveNodeStyleCommand(selectionOrNull: SelectionHandle | null, style: CurveNodeStyle): DocumentCommandHandle;
        createSetCurvesAdjustmentColourSpaceCommand(selectionOrNull: SelectionHandle | null, colourSpace: ColourSpaceType): DocumentCommandHandle;
        createSetCurvesAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: CurvesAdjustmentParametersHandle): DocumentCommandHandle;
        createSetCurvesCommand(curvesInterface: CurvesInterfaceHandle, polyCurve: PolyCurveHandle): DocumentCommandHandle;
        createSetDefringeFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: DefringeFilterParametersHandle): DocumentCommandHandle;
        createSetDenoiseFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: DenoiseFilterParametersHandle): DocumentCommandHandle;
        createSetDepthOfFieldFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: DepthOfFieldFilterParametersHandle): DocumentCommandHandle;
        createSetDescriptionCommand(selectionOrNull: SelectionHandle | null, description: string): DocumentCommandHandle;
        createSetDevelopParametersCommand(selectionOrNull: SelectionHandle | null, parameters: DevelopParametersHandle): DocumentCommandHandle;
        createSetDiffuseFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: DiffuseFilterParametersHandle): DocumentCommandHandle;
        createSetDiffuseGlowFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: DiffuseGlowFilterParametersHandle): DocumentCommandHandle;
        createSetDocumentBaselineGridCommand(baselineGridOptions: BaselineGridOptionsHandle): DocumentCommandHandle;
        createSetDocumentPropertiesCommand(documentProperties: DocumentPropertiesHandle): DocumentCommandHandle;
        createSetDocumentUnitsCommand(units: UnitType): DocumentCommandHandle;
        createSetDustAndScratchFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: DustAndScratchFilterParametersHandle): DocumentCommandHandle;
        createSetEditableCommand(selectionOrNull: SelectionHandle | null, isEditable: boolean): DocumentCommandHandle;
        createSetEmbeddedDocumentAllLayersVisibilityCommand(selectionOrNull: SelectionHandle | null, isVisible: boolean[]): DocumentCommandHandle;
        createSetEmbeddedDocumentLayerVisibilityCommand(selectionOrNull: SelectionHandle | null, layer: number, isVisible: boolean): DocumentCommandHandle;
        createSetEmbeddedDocumentPDFPassthroughCommand(selectionOrNull: SelectionHandle | null, isSet: boolean): DocumentCommandHandle;
        createSetEmbeddedDocumentPageBoundingBoxTypeCommand(selectionOrNull: SelectionHandle | null, pageBoundingBoxType: PageBoundingBoxType): DocumentCommandHandle;
        createSetEmbeddedDocumentSelectedArtboardIDCommand(selectionOrNull: SelectionHandle | null, artboardID: string): DocumentCommandHandle;
        createSetEmbeddedDocumentSelectedSpreadIDCommand(selectionOrNull: SelectionHandle | null, spreadID: string): DocumentCommandHandle;
        createSetExportConfigCommand(selectionOrNull: SelectionHandle | null, exportConfig: ExportConfigHandle): DocumentCommandHandle;
        createSetExposureAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: ExposureAdjustmentParametersHandle): DocumentCommandHandle;
        createSetFieldBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: FieldBlurFilterParametersHandle): DocumentCommandHandle;
        createSetGaussianBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: GaussianBlurFilterParametersHandle): DocumentCommandHandle;
        createSetGaussianBlurLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGaussianBlurLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: GaussianBlurLayerEffectHandle): DocumentCommandHandle;
        createSetGaussianBlurLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean): DocumentCommandHandle;
        createSetGaussianBlurLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGaussianBlurLayerEffectPreserveAlphaCommand(selectionOrNull: SelectionHandle | null, preserveAlpha: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGaussianBlurLayerEffectRadiusCommand(selectionOrNull: SelectionHandle | null, radius: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGaussianBlurLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGradientOverlayLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGradientOverlayLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: GradientOverlayLayerEffectHandle, index: number): DocumentCommandHandle;
        createSetGradientOverlayLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean, index: number): DocumentCommandHandle;
        createSetGradientOverlayLayerEffectFillCommand(selectionOrNull: SelectionHandle | null, gradientFill: GradientFillHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGradientOverlayLayerEffectFillTransformCommand(selectionOrNull: SelectionHandle | null, transform: Transform, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGradientOverlayLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGradientOverlayLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetGuidesColourCommand(colour: ColourHandle): DocumentCommandHandle;
        createSetHSLShiftAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: HSLShiftAdjustmentParametersHandle): DocumentCommandHandle;
        createSetHalftoneFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: HalftoneFilterParametersHandle): DocumentCommandHandle;
        createSetHighPassFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: HighPassFilterParametersHandle): DocumentCommandHandle;
        createSetHistoryIndexCommand(index: number): DocumentCommandHandle;
        createSetInnerGlowLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerGlowLayerEffectColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerGlowLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: InnerGlowLayerEffectHandle): DocumentCommandHandle;
        createSetInnerGlowLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean): DocumentCommandHandle;
        createSetInnerGlowLayerEffectIntensityCommand(selectionOrNull: SelectionHandle | null, intensity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerGlowLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerGlowLayerEffectRadiusCommand(selectionOrNull: SelectionHandle | null, radius: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerGlowLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerShadowLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerShadowLayerEffectColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerShadowLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: InnerShadowLayerEffectHandle, index: number): DocumentCommandHandle;
        createSetInnerShadowLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean, index: number): DocumentCommandHandle;
        createSetInnerShadowLayerEffectIntensityCommand(selectionOrNull: SelectionHandle | null, intensity: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerShadowLayerEffectOffsetAngleCommand(selectionOrNull: SelectionHandle | null, offset: number, angle: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerShadowLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerShadowLayerEffectRadiusCommand(selectionOrNull: SelectionHandle | null, radius: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetInnerShadowLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetLensBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: LensBlurFilterParametersHandle): DocumentCommandHandle;
        createSetLevelsAdjustmentColourSpaceCommand(selectionOrNull: SelectionHandle | null, colourSpace: ColourSpaceType): DocumentCommandHandle;
        createSetLevelsAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: LevelsAdjustmentParametersHandle): DocumentCommandHandle;
        createSetLineFillOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, contentType: ContentType, useTextSelection: boolean): DocumentCommandHandle;
        createSetLineStyleCommand(selectionOrNull: SelectionHandle | null, lineStyle: LineStyleHandle, lineStyleMask: LineStyleMask, contentType: ContentType, useTextSelection: boolean, defaultsMode: LineCommandDefaultsMode): DocumentCommandHandle;
        createSetLineStyleDescriptorCommand(selectionOrNull: SelectionHandle | null, lineStyleDescriptor: LineStyleDescriptorHandle, lineStyleMask: LineStyleMask, contentType: ContentType, useTextSelection: boolean, defaultsMode: LineCommandDefaultsMode): DocumentCommandHandle;
        createSetMaximumBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: MaximumBlurFilterParametersHandle): DocumentCommandHandle;
        createSetMeasurementAnnotationOffsetCommand(node: MeasurementNodeHandle, offset: number): DocumentCommandHandle;
        createSetMeasurementPrecisionCommand(useDocumentPrecision: boolean, decimalPlaces: number): DocumentCommandHandle;
        createSetMeasurementShowEndpointMarkersCommand(show: boolean): DocumentCommandHandle;
        createSetMeasurementUnitsCommand(units: UnitType): DocumentCommandHandle;
        createSetMedianBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: MedianBlurFilterParametersHandle): DocumentCommandHandle;
        createSetMinimumBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: MinimumBlurFilterParametersHandle): DocumentCommandHandle;
        createSetMotionBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: MotionBlurFilterParametersHandle): DocumentCommandHandle;
        createSetNormalsAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: NormalsAdjustmentParametersHandle): DocumentCommandHandle;
        createSetOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number): DocumentCommandHandle;
        createSetOuterGlowLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterGlowLayerEffectColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterGlowLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: OuterGlowLayerEffectHandle): DocumentCommandHandle;
        createSetOuterGlowLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean): DocumentCommandHandle;
        createSetOuterGlowLayerEffectIntensityCommand(selectionOrNull: SelectionHandle | null, intensity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterGlowLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterGlowLayerEffectRadiusCommand(selectionOrNull: SelectionHandle | null, radius: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterGlowLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterShadowLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterShadowLayerEffectColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterShadowLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: OuterShadowLayerEffectHandle, index: number): DocumentCommandHandle;
        createSetOuterShadowLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean, index: number): DocumentCommandHandle;
        createSetOuterShadowLayerEffectIntensityCommand(selectionOrNull: SelectionHandle | null, intensity: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterShadowLayerEffectKnocksOutCommand(selectionOrNull: SelectionHandle | null, knocksOut: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterShadowLayerEffectOffsetAngleCommand(selectionOrNull: SelectionHandle | null, offset: number, angle: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterShadowLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterShadowLayerEffectRadiusCommand(selectionOrNull: SelectionHandle | null, radius: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOuterShadowLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectAlignmentCommand(selectionOrNull: SelectionHandle | null, alignment: StrokeAlignment, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectBlendModeCommand(selectionOrNull: SelectionHandle | null, blendMode: BlendMode, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: OutlineLayerEffectHandle, index: number): DocumentCommandHandle;
        createSetOutlineLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean, index: number): DocumentCommandHandle;
        createSetOutlineLayerEffectFillCommand(selectionOrNull: SelectionHandle | null, gradientFill: GradientFillHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectFillTransformCommand(selectionOrNull: SelectionHandle | null, fillDescriptor: FillDescriptorHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectFillTypeCommand(selectionOrNull: SelectionHandle | null, fillType: StrokeFillType, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectRadiusCommand(selectionOrNull: SelectionHandle | null, radius: number, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetOutlineLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, index: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPageDocumentPropertiesCommand(spreadNode: SpreadNodeHandle, page: number, pageDocumentProperties: PageDocumentPropertiesHandle): DocumentCommandHandle;
        createSetPenFillCommand(selectionOrNull: SelectionHandle | null, fillDescriptorOrNull: FillDescriptorHandle | null, contentType: ContentType, fillMask: FillMask, copyTransform: boolean, useTextSelection: boolean, maintainBlendMode: boolean, restoreAspectRatio: boolean): DocumentCommandHandle;
        createSetPenFillIsAnchoredToSpreadCommand(selectionOrNull: SelectionHandle | null, isAnchoredToSpread: boolean, contentType: ContentType, useTextSelection: boolean, applyToAllFills: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectAmbientColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectAmbientCommand(selectionOrNull: SelectionHandle | null, ambient: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectCommand(selectionOrNull: SelectionHandle | null, layerEffect: PhongBevelLayerEffectHandle): DocumentCommandHandle;
        createSetPhongBevelLayerEffectDepthCommand(selectionOrNull: SelectionHandle | null, depth: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectDiffuseCommand(selectionOrNull: SelectionHandle | null, diffuse: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectEnabledCommand(selectionOrNull: SelectionHandle | null, enabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectLightsCommand(selectionOrNull: SelectionHandle | null, lights: PointLightHandle[], enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectLinkDepthCommand(selectionOrNull: SelectionHandle | null, linkDepth: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectOpacityCommand(selectionOrNull: SelectionHandle | null, opacity: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectRadiusCommand(selectionOrNull: SelectionHandle | null, radius: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectScaleWithObjectCommand(selectionOrNull: SelectionHandle | null, scaleWithObject: boolean, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectShininessCommand(selectionOrNull: SelectionHandle | null, shininess: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectSoftenCommand(selectionOrNull: SelectionHandle | null, soften: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectSpecularColourCommand(selectionOrNull: SelectionHandle | null, colour: ColourHandle, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPhongBevelLayerEffectSpecularCommand(selectionOrNull: SelectionHandle | null, specular: number, enableIfDisabled: boolean): DocumentCommandHandle;
        createSetPinchPunchFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: PinchPunchFilterParametersHandle): DocumentCommandHandle;
        createSetPixelateFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: PixelateFilterParametersHandle): DocumentCommandHandle;
        createSetPosteriseAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: PosteriseAdjustmentParametersHandle): DocumentCommandHandle;
        createSetRadialBlurFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: RadialBlurFilterParametersHandle): DocumentCommandHandle;
        createSetRasterSelectionFromObjectCommand(nodeOrNull: NodeHandle | null, useIntensity: boolean, operation: RasterSelectionLogicalOperation): DocumentCommandHandle;
        createSetRasterSelectionFromPolygonCommand(polygon: PolygonHandle, operation: RasterSelectionLogicalOperation, isAntialias: boolean, featherRadius: number): DocumentCommandHandle;
        createSetRecolourAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: RecolourAdjustmentParametersHandle): DocumentCommandHandle;
        createSetRippleFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: RippleFilterParametersHandle): DocumentCommandHandle;
        createSetSelectionCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createSetSelectiveColourAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: SelectiveColourAdjustmentParametersHandle): DocumentCommandHandle;
        createSetShadowsHighlightsAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: ShadowsHighlightsAdjustmentParametersHandle): DocumentCommandHandle;
        createSetShadowsHighlightsFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: ShadowsHighlightsFilterParametersHandle): DocumentCommandHandle;
        createSetShapeBoolParamCommand(selectionOrNull: SelectionHandle | null, key: ShapeBoolParam, value: boolean): DocumentCommandHandle;
        createSetShapeCommand(selectionOrNull: SelectionHandle | null, shape: ShapeHandle, onlyReplaceLikeShapes: boolean): DocumentCommandHandle;
        createSetShapeEnumParamCommand(selectionOrNull: SelectionHandle | null, key: ShapeEnumParam, value: number): DocumentCommandHandle;
        createSetShapeFloatParamCommand(selectionOrNull: SelectionHandle | null, key: ShapeFloatParam, value: number, isConstrained: boolean, isSymmetrical: boolean): DocumentCommandHandle;
        createSetShapeIntParamCommand(selectionOrNull: SelectionHandle | null, key: ShapeIntParam, value: number): DocumentCommandHandle;
        createSetSphericalFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: SphericalFilterParametersHandle): DocumentCommandHandle;
        createSetSplitToningAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: SplitToningAdjustmentParametersHandle): DocumentCommandHandle;
        createSetSpreadDocumentPropertiesCommand(spreadNode: SpreadNodeHandle, spreadDocumentProperties: SpreadDocumentPropertiesHandle): DocumentCommandHandle;
        createSetSpreadSizeWithAnchorCommand(spreadNode: SpreadNodeHandle, width: number, height: number, anchor: SpatialAnchor): DocumentCommandHandle;
        createSetStrokeAlignmentCommand(selectionOrNull: SelectionHandle | null, strokeAlignment: StrokeAlignment, contentType: ContentType, useTextSelection: boolean, defaultsMode: LineCommandDefaultsMode): DocumentCommandHandle;
        createSetTagColourCommand(selectionOrNull: SelectionHandle | null, colourOrNull: ColourHandle | null): DocumentCommandHandle;
        createSetTagValueForKeyCommand(selectionOrNull: SelectionHandle | null, tagKey: string, tagValue: string): DocumentCommandHandle;
        createSetTagValueForPredefinedKeyCommand(selectionOrNull: SelectionHandle | null, key: PredefinedTagKey, tagValue: string): DocumentCommandHandle;
        createSetTextCommand(selectionOrNull: SelectionHandle | null, text: string): DocumentCommandHandle;
        createSetTextFrameBaselineGridCommand(selectionOrNull: SelectionHandle | null, baselineGridOptions: BaselineGridOptionsHandle): DocumentCommandHandle;
        createSetTextFrameHideOverflowCommand(selectionOrNull: SelectionHandle | null, hideOverflow: boolean): DocumentCommandHandle;
        createSetTextFrameIgnoreBaselineGridCommand(selectionOrNull: SelectionHandle | null, ignoreBaselineGrid: boolean): DocumentCommandHandle;
        createSetTextFrameIgnoreTextWrapsCommand(selectionOrNull: SelectionHandle | null, ignoreTextWraps: boolean): DocumentCommandHandle;
        createSetThresholdAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: ThresholdAdjustmentParametersHandle): DocumentCommandHandle;
        createSetToneCompressionAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: ToneCompressionAdjustmentParametersHandle): DocumentCommandHandle;
        createSetToneStretchAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: ToneStretchAdjustmentParametersHandle): DocumentCommandHandle;
        createSetTransparencyFillCommand(selectionOrNull: SelectionHandle | null, fillDescriptorOrNull: FillDescriptorHandle | null, contentType: ContentType, fillMask: FillMask, copyTransform: boolean, useTextSelection: boolean, maintainBlendMode: boolean, restoreAspectRatio: boolean): DocumentCommandHandle;
        createSetTransparencyFillIsAnchoredToSpreadCommand(selectionOrNull: SelectionHandle | null, isAnchoredToSpread: boolean, contentType: ContentType, useTextSelection: boolean, applyToAllFills: boolean): DocumentCommandHandle;
        createSetTwirlFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: TwirlFilterParametersHandle): DocumentCommandHandle;
        createSetUnsharpMaskFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: UnsharpMaskFilterParametersHandle): DocumentCommandHandle;
        createSetVibranceAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: VibranceAdjustmentParametersHandle): DocumentCommandHandle;
        createSetVignetteFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: VignetteFilterParametersHandle): DocumentCommandHandle;
        createSetVisibilityCommand(selectionOrNull: SelectionHandle | null, mode: VisibilityMode, isVisible: boolean): DocumentCommandHandle;
        createSetVoronoiFilterParametersCommand(selectionOrNull: SelectionHandle | null, parameters: VoronoiFilterParametersHandle): DocumentCommandHandle;
        createSetWhiteBalanceAdjustmentParametersCommand(selectionOrNull: SelectionHandle | null, parameters: WhiteBalanceAdjustmentParametersHandle): DocumentCommandHandle;
        createSetWindingModeCommand(selectionOrNull: SelectionHandle | null, windingOrder: WindingOrder): DocumentCommandHandle;
        createShadowsHighlightsFilterCommand(selectionOrNull: SelectionHandle | null, parameters: ShadowsHighlightsFilterParametersHandle): DocumentCommandHandle;
        createShowAllCommand(): DocumentCommandHandle;
        createSmoothCurvesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createSmoothRasterSelectionCommand(radius: number): DocumentCommandHandle;
        createSphericalFilterCommand(selectionOrNull: SelectionHandle | null, parameters: SphericalFilterParametersHandle): DocumentCommandHandle;
        createSplitCurveCommand(selectionOrNull: SelectionHandle | null, parametricDistance: number): DocumentCommandHandle;
        createStartRecordingMacroCommand(): DocumentCommandHandle;
        createStopRecordingMacroCommand(): DocumentCommandHandle;
        createTransformCommand(selectionOrNull: SelectionHandle | null, transform: Transform, isMergeable: boolean, cloneRaster: boolean, correctChildren: boolean, duplicateNodes: boolean): DocumentCommandHandle;
        createTwirlFilterCommand(selectionOrNull: SelectionHandle | null, parameters: TwirlFilterParametersHandle): DocumentCommandHandle;
        createUndoCommand(): DocumentCommandHandle;
        createUngroupAllNodesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createUngroupNodesCommand(selectionOrNull: SelectionHandle | null): DocumentCommandHandle;
        createUnlinkTextFrameCommand(node: TextNodeHandle): DocumentCommandHandle;
        createUnlockAllCommand(): DocumentCommandHandle;
        createUnsharpMaskFilterCommand(selectionOrNull: SelectionHandle | null, parameters: UnsharpMaskFilterParametersHandle): DocumentCommandHandle;
        createVignetteFilterCommand(selectionOrNull: SelectionHandle | null, parameters: VignetteFilterParametersHandle): DocumentCommandHandle;
        createVoronoiFilterCommand(selectionOrNull: SelectionHandle | null, parameters: VoronoiFilterParametersHandle): DocumentCommandHandle;
        enumerateNewNodes(self: DocumentCommandHandle, callback: (node: NodeHandle) => EnumerationResult): void;
    }
    export const DocumentCommandApi: DocumentCommandApi;

    export interface SetHatchFillAttributesCommandBuilderApi {
        clone(self: SetHatchFillAttributesCommandBuilderHandle): SetHatchFillAttributesCommandBuilderHandle;
        create(): SetHatchFillAttributesCommandBuilderHandle;
        createBrushFillCommand(self: SetHatchFillAttributesCommandBuilderHandle, contentType: ContentType, bUseTextSelection: boolean, selectionOrNull: SelectionHandle | null, bApplyToAllFills: boolean): DocumentCommandHandle;
        createPenFillCommand(self: SetHatchFillAttributesCommandBuilderHandle, contentType: ContentType, bUseTextSelection: boolean, selectionOrNull: SelectionHandle | null, bApplyToAllFills: boolean): DocumentCommandHandle;
        createTransparencyFillCommand(self: SetHatchFillAttributesCommandBuilderHandle, contentType: ContentType, bUseTextSelection: boolean, selectionOrNull: SelectionHandle | null, bApplyToAllFills: boolean): DocumentCommandHandle;
        reset(self: SetHatchFillAttributesCommandBuilderHandle): void;
        setBrushColour(self: SetHatchFillAttributesCommandBuilderHandle, brushColourOrNull: ColourHandle | null): void;
        setFixScale(self: SetHatchFillAttributesCommandBuilderHandle, fixScale: boolean): void;
        setLineWeight(self: SetHatchFillAttributesCommandBuilderHandle, lineWeight: number): void;
        setPattern(self: SetHatchFillAttributesCommandBuilderHandle, pattern: HatchPatternHandle): void;
        setPenColour(self: SetHatchFillAttributesCommandBuilderHandle, penColourOrNull: ColourHandle | null): void;
        setRotation(self: SetHatchFillAttributesCommandBuilderHandle, rotationRads: number): void;
        setScale(self: SetHatchFillAttributesCommandBuilderHandle, scale: number): void;
        setUseCurrentItemOriginForRelativeTransform(self: SetHatchFillAttributesCommandBuilderHandle, useCurrentItemOriginForRelativeTransform: boolean): void;
        setUseRelativeTransform(self: SetHatchFillAttributesCommandBuilderHandle, useRelativeTransform: boolean): void;
    }
    export const SetHatchFillAttributesCommandBuilderApi: SetHatchFillAttributesCommandBuilderApi;

}

// ---------------------------------------------------------------------------
// affinity:common
// ---------------------------------------------------------------------------

declare module "affinity:common" {

    export enum BlendMode {
        Normal,
        Pigment,
        Darken,
        DarkerColour,
        Multiply,
        ColourBurn,
        LinearBurn,
        Lighten,
        LighterColour,
        Screen,
        ColourDodge,
        Add,
        Overlay,
        SoftLight,
        HardLight,
        VividLight,
        PinLight,
        LinearLight,
        HardMix,
        Difference,
        Exclusion,
        Subtract,
        Divide,
        Hue,
        Saturation,
        Luminosity,
        Colour,
        Average,
        Negation,
        Reflect,
        Glow,
        ContrastInvert,
        Erase,
    }

    export enum ConfigurationValueType {
        Object,
        Array,
        String,
        Float,
        Uint,
        Int,
        Bool,
        Null,
        Binary,
    }

    export enum EnumerationResult {
        Continue,
        Stop,
    }

    export enum ErrorCode {
        OK,
        ERROR,
        INVALID_OP,
        INVALID_HANDLE,
        DEPRECATED,
        DISPOSED,
        ABORTED,
        ALLOC_ERROR,
        CREATE_FILE_ERROR,
        FILE_ALREADY_OPEN,
        READ_ONLY,
        READ_ERROR,
        WRITE_ERROR,
        IS_LOCKED,
        IS_LOCKED_THIS_DEVICE,
        IS_LOCKED_BLOCKED,
        ASYNC_IN_PROGRESS,
        COMMAND_FAILED,
        NO_ENVIRONMENT,
        SAVE_ERROR,
        WARNINGS_ONLY,
        NOT_ALLOWED,
        CREATE_DIR_ERROR,
        EMBED_METADATA_ERROR,
        CREATE_GAIN_MAP_ERROR,
        PARSE_FILE_ERROR,
        CREATE_TEMPORARY_ARCHIVE_ERROR,
        OPEN_LINKED_ARCHIVE_ERROR,
        BAD_FILE_VERSION,
        FUTURE_FILE_VERSION,
        BAD_ARCHIVE,
        FILE_TRUNCATED,
        VALIDATION_FAILED,
        VALIDATION_FOR_EMBED_FAILED,
        MIGRATION_FAILED,
        BAD_SIGNAL_FILE,
        WRONG_PASSWORD,
        EMBED_RESTRICTED,
        COPY_FILE_ERROR,
        UNSUPPORTED_ENCRYPTION,
        NOT_DOCUMENT_ARCHIVE,
        FILE_CORRUPTED,
        UNSUPPORTED_FEATURES,
        UNSUPPORTED_VERSION,
        UNSUPPORTED_COMPRESSION,
        ARCHIVE_FILE_NOT_FOUND,
        PARSE_KNOWN_FILE_TYPE_ERROR,
        LOST_OWNERSHIP,
        OWNERSHIP_VALIDATION_ERROR,
        LOCK_LOST,
        ARCHIVE_LOST,
        ARCHIVE_LOST_DURING_STREAMLINE,
        ARCHIVE_BROKEN_DURING_STREAMLINE,
        OUT_OF_SPACE_DURING_STREAMLINE,
        ARCHIVE_LOST_DURING_MIGRATE,
        SCRATCH_LOST,
        SAVE_TO_TEMPORARY_ARCHIVE_ERROR,
        ARCHIVE_HAS_BEEN_REWOUND,
        ARCHIVE_IS_READ_ONLY,
        AUTOSAVE_REQUIRES_SCRATCH_FILE,
        ARCHIVE_INTEGRITY_VERIFICATION_ERROR,
        ARCHIVE_FILES_VERIFICATION_ERROR,
        RASTER_DATA_LOST,
        BACKING_DATA_LOST,
        BACKING_DATA_MISSING,
        DOCUMENT_IS_TEMPORARY,
        IN_EXTERNAL_UPDATE,
        INTERNAL_ERROR,
        RESTORE_FILE_NOT_FOUND,
        RESTORE_ACCESS_DENIED,
        RESTORE_PERMISSION_DENIED,
        RESTORE_READ_ONLY,
        RESTORE_OPEN_ERROR,
        RESTORE_TIMEDOUT,
        RESTORE_CONNECTION_REFUSED,
        RESTORE_MISMATCH,
        LINK_RECURSIVE,
        OPEN_IN_APP,
        OPERATION_NOT_PERMITTED,
        NO_SUCH_FILE_OR_DIRECTORY,
        NO_SUCH_PROCESS,
        INTERRUPTED_SYSTEM_CALL,
        INPUT_OUTPUT_ERROR,
        DEVICE_NOT_CONFIGURED,
        ARGUMENT_LIST_TOO_LONG,
        EXEC_FORMAT_ERROR,
        BAD_FILE_DESCRIPTOR,
        NO_CHILD_PROCESSES,
        RESOURCE_DEADLOCK_AVOIDED,
        CANNOT_ALLOCATE_MEMORY,
        PERMISSION_DENIED,
        BAD_ADDRESS,
        DEVICE_OR_RESOURCE_BUSY,
        FILE_EXISTS,
        CROSS_DEVICE_LINK,
        OPERATION_NOT_SUPPORTED_BY_DEVICE,
        NOT_A_DIRECTORY,
        IS_A_DIRECTORY,
        INVALID_ARGS,
        TOO_MANY_OPEN_FILES_IN_SYSTEM,
        TOO_MANY_OPEN_FILES,
        INAPPROPRIATE_IOCTL_FOR_DEVICE,
        TEXT_FILE_BUSY,
        FILE_TOO_LARGE,
        NO_SPACE_LEFT_ON_DEVICE,
        ILLEGAL_SEEK,
        READ_ONLY_FILE_SYSTEM,
        TOO_MANY_LINKS,
        BROKEN_PIPE,
        NUMERICAL_ARGUMENT_OUT_OF_DOMAIN,
        RESULT_TOO_LARGE,
        RESOURCE_TEMPORARILY_UNAVAILABLE,
        OPERATION_NOW_IN_PROGRESS,
        OPERATION_ALREADY_IN_PROGRESS,
        SOCKET_OPERATION_ON_NON_SOCKET,
        DESTINATION_ADDRESS_REQUIRED,
        MESSAGE_TOO_LONG,
        PROTOCOL_WRONG_TYPE_FOR_SOCKET,
        PROTOCOL_NOT_AVAILABLE,
        PROTOCOL_NOT_SUPPORTED,
        NOT_SUPPORTED,
        ADDRESS_FAMILY_NOT_SUPPORTED,
        ADDRESS_ALREADY_IN_USE,
        ADDRESS_NOT_AVAILABLE,
        NETWORK_DOWN,
        NETWORK_UNREACHABLE,
        NETWORK_RESET,
        CONNECTION_ABORTED,
        CONNECTION_RESET,
        NO_BUFFER_SPACE_AVAILABLE,
        SOCKET_ALREADY_CONNECTED,
        SOCKET_NOT_CONNECTED,
        OPERATION_TIMED_OUT,
        CONNECTION_REFUSED,
        TOO_MANY_LEVELS_OF_SYMBOLIC_LINKS,
        FILE_NAME_TOO_LONG,
        HOST_UNREACHABLE,
        DIRECTORY_NOT_EMPTY,
        NO_LOCKS_AVAILABLE,
        NOT_IMPLEMENTED,
        OVERFLOW,
        OPERATION_CANCELLED,
        IDENTIFIER_REMOVED,
        NO_MESSAGE_OF_DESIRED_TYPE,
        ILLEGAL_BYTE_SEQUENCE,
        BAD_MESSAGE,
        NO_MESSAGE_AVAILABLE_ON_STREAM,
        LINK_SEVERED,
        NO_STREAM_RESOURCES,
        NOT_A_STREAM,
        PROTOCOL_ERROR,
        STREAM_IOCTL_TIMEOUT,
        STATE_NOT_RECOVERABLE,
        OWNER_DEAD,
        BLOCK_DEVICE_REQUIRED,
        SOCKET_TYPE_NOT_SUPPORTED,
        PROTOCOL_FAMILY_NOT_SUPPORTED,
        CANNOT_SEND_AFTER_SOCKET_SHUTDOWN,
        TOO_MANY_REFERENCES,
        HOST_IS_DOWN,
        TOO_MANY_PROCESSES,
        TOO_MANY_USERS,
        DISC_QUOTA_EXCEEDED,
        STALE_NFS_FILE_HANDLE,
        TOO_MANY_LEVELS_OF_REMOTE_IN_PATH,
        RPC_STRUCT_BAD,
        RPC_VERSION_WRONG,
        RPC_PROG_NOT_AVAIL,
        PROGRAM_VERSION_WRONG,
        PROCEDURE_UNAVAILABLE,
        INAPPROPRIATE_FILE_TYPE_OR_FORMAT,
        AUTHENTICATION_ERROR,
        NEED_AUTHENTICATOR,
        DEVICE_POWER_IS_OFF,
        DEVICE_ERROR,
        BAD_EXECUTABLE,
        BAD_ARCHITECTURE,
        SHARED_LIBRARY_VERSION_MISMATCH,
        MALFORMED_MACHO_FILE,
        ATTRIBUTE_NOT_FOUND,
        MULTIHOP_ATTEMPTED,
        NO_SUCH_POLICY_REGISTERED,
        INTERFACE_OUTPUT_QUEUE_FULL,
        STRING_TRUNCATED,
    }

    export enum HorizontalAlignment {
        Left,
        Centre,
        Right,
        Fill,
    }

    export enum LogLevel {
        All,
        Trace,
        Debug,
        Info,
        Warn,
        Error,
        None,
    }

    export enum UnitCategory {
        Distance,
        Angle,
        Relative,
        Data,
        Temperature,
    }

    export enum UnitType {
        Number,
        Percentage,
        Permille,
        Degree,
        Radian,
        Pixel,
        Inch,
        Point,
        Millimetre,
        Centimetre,
        Metre,
        Foot,
        Yard,
        Cat,
        Pica,
        Kilometre,
        Mile,
        Byte,
        Kilobyte,
        Megabyte,
        Gigabyte,
        Terabyte,
        Petabyte,
        Exabyte,
        Zettabyte,
        Yottabyte,
        Kelvin,
    }

    export enum UserUnitType {
        Default,
        Text,
        Line,
    }

    export class UnitValue {
        value: number;
        units: UnitTypePower;
    }

    export interface ConfigurationItemApi {
        createFromJsonString(jsonStr: string, allowComments: boolean): ConfigurationItemHandle;
        enumerateItems(self: ConfigurationItemHandle, callback: (value: ConfigurationItemHandle) => EnumerationResult): void;
        enumerateProperties(self: ConfigurationItemHandle, callback: (name: string, value: ConfigurationItemHandle) => EnumerationResult): void;
        enumeratePropertyNames(self: ConfigurationItemHandle, callback: (name: string) => EnumerationResult): void;
        getArrayItem(self: ConfigurationItemHandle, index: number): ConfigurationItemHandle;
        getArrayLength(self: ConfigurationItemHandle): number;
        getBool(self: ConfigurationItemHandle): boolean;
        getBoolOrDefault(self: ConfigurationItemHandle, defaultValue: boolean): boolean;
        getFloat(self: ConfigurationItemHandle): number;
        getFloatOrDefault(self: ConfigurationItemHandle, defaultValue: number): number;
        getInt(self: ConfigurationItemHandle): number;
        getIntOrDefault(self: ConfigurationItemHandle, defaultValue: number): number;
        getProperty(self: ConfigurationItemHandle, propertyName: string): ConfigurationItemHandle;
        getPropertyBool(self: ConfigurationItemHandle, propertyName: string): boolean;
        getPropertyBoolOrDefault(self: ConfigurationItemHandle, propertyName: string, defaultValue: boolean): boolean;
        getPropertyCount(self: ConfigurationItemHandle): number;
        getPropertyFloat(self: ConfigurationItemHandle, propertyName: string): number;
        getPropertyFloatOrDefault(self: ConfigurationItemHandle, propertyName: string, defaultValue: number): number;
        getPropertyInt(self: ConfigurationItemHandle, propertyName: string): number;
        getPropertyIntOrDefault(self: ConfigurationItemHandle, propertyName: string, defaultValue: number): number;
        getPropertyString(self: ConfigurationItemHandle, propertyName: string): string;
        getPropertyStringOrDefault(self: ConfigurationItemHandle, propertyName: string, defaultValue: string): string;
        getPropertyUint(self: ConfigurationItemHandle, propertyName: string): number;
        getPropertyUintOrDefault(self: ConfigurationItemHandle, propertyName: string, defaultValue: number): number;
        getString(self: ConfigurationItemHandle): string;
        getStringOrDefault(self: ConfigurationItemHandle, defaultValue: string): string;
        getUint(self: ConfigurationItemHandle): number;
        getUintOrDefault(self: ConfigurationItemHandle, defaultValue: number): number;
        getValueType(self: ConfigurationItemHandle): ConfigurationValueType;
        hasProperty(self: ConfigurationItemHandle, propertyName: string): boolean;
        isArray(self: ConfigurationItemHandle): boolean;
        isBinary(self: ConfigurationItemHandle): boolean;
        isBool(self: ConfigurationItemHandle): boolean;
        isFloat(self: ConfigurationItemHandle): boolean;
        isInt(self: ConfigurationItemHandle): boolean;
        isNull(self: ConfigurationItemHandle): boolean;
        isNumber(self: ConfigurationItemHandle): boolean;
        isObject(self: ConfigurationItemHandle): boolean;
        isPrimitive(self: ConfigurationItemHandle): boolean;
        isString(self: ConfigurationItemHandle): boolean;
        isStructured(self: ConfigurationItemHandle): boolean;
        isUint(self: ConfigurationItemHandle): boolean;
    }
    export const ConfigurationItemApi: ConfigurationItemApi;

    export interface LocaleApi {
        enumerateUserPreferredLanguageIDs(callback: (languageID: string) => EnumerationResult): void;
        getCurrent(): LocaleHandle;
        getID(self: LocaleHandle): string;
        getISOCode(self: LocaleHandle): string;
    }
    export const LocaleApi: LocaleApi;

    export interface LogFileApi {
        create(path: string, logLevel: LogLevel, append: boolean): LogFileHandle;
        flush(self: LogFileHandle): void;
        getLogLevel(self: LogFileHandle): LogLevel;
        setLogLevel(self: LogFileHandle, logLevel: LogLevel): void;
        start(self: LogFileHandle): void;
        stop(self: LogFileHandle): void;
    }
    export const LogFileApi: LogFileApi;

    export interface RefControlApi {
        cancel(self: RefControlHandle): void;
        create(): RefControlHandle;
        hasRef(self: RefControlHandle): boolean;
        isCancelled(self: RefControlHandle): boolean;
        ref(self: RefControlHandle): void;
        unref(self: RefControlHandle): void;
    }
    export const RefControlApi: RefControlApi;

    export interface UnitValueApi {
        assign(dest: UnitValue, src: UnitValue): void;
        getTypeCategory(unitType: UnitType): UnitCategory;
        getValueAsDegrees(unitValue: UnitValue): number;
        getValueAsNumber(unitValue: UnitValue): number;
        getValueAsPixels(unitValue: UnitValue, unitValueConverter: UnitValueConverterHandle): number;
        getValueAsRadians(unitValue: UnitValue): number;
        getValueAsUnitType(unitValue: UnitValue, unitValueConverter: UnitValueConverterHandle, unitType: UnitType): number;
        getValueAsUnitTypePower(unitValue: UnitValue, unitValueConverter: UnitValueConverterHandle, unitTypePower: UnitTypePower): number;
        isFinite(unitValue: UnitValue): boolean;
        makeInfinity(unitValue: UnitValue): void;
        makeZero(unitValue: UnitValue): void;
    }
    export const UnitValueApi: UnitValueApi;

    export interface UnitValueConverterApi {
        clone(self: UnitValueConverterHandle): UnitValueConverterHandle;
        create(dpi: number): UnitValueConverterHandle;
        createWithViewDpi(dpi: number, viewDpi: number): UnitValueConverterHandle;
        equals(self: UnitValueConverterHandle, other: UnitValueConverterHandle): boolean;
        getConversionFactor(self: UnitValueConverterHandle, from: UnitType, to: UnitType): number;
        getDpi(self: UnitValueConverterHandle): number;
        getViewDpi(self: UnitValueConverterHandle): number;
    }
    export const UnitValueConverterApi: UnitValueConverterApi;

}

// ---------------------------------------------------------------------------
// affinity:dom
// ---------------------------------------------------------------------------

declare module "affinity:dom" {

    import { ColourSpaceType } from "affinity:colours";
    import { InsertionMode } from "affinity:commands";
    import { BlendMode, EnumerationResult, ErrorCode, UnitType, UnitValue } from "affinity:common";
    import { Endpoints, Point, Rectangle, ShapeType, Size, Transform, WindingOrder } from "affinity:geometry";
    import { RasterExtendType, RasterFormat, RasterResamplerType } from "affinity:raster";
    import { StoryRange, TableAxis } from "affinity:story";

    export enum AddNoiseType {
        Gaussian,
        Uniform,
    }

    export enum AntialiasingMode {
        Inherit,
        ForceOn,
        ForceOff,
    }

    export enum BaselineGridRelativeTo {
        TopOfSpread,
        TopOfPage,
        TopMargin,
        TopOfArtboard,
        TopArtboardMargin,
        TopOfFrame,
        TopInset,
    }

    export enum BloomMethod {
        Contrast,
        Bright,
    }

    export enum CompoundOperation {
        Union,
        Intersect,
        Subtract,
        Xor,
    }

    export enum ConstraintType {
        NotSizable,
        FixedMinX,
        ScaleWidth,
        FixedMaxX,
        FixedMinY,
        ScaleHeight,
        FixedMaxY,
        FixedAspectMin,
        FixedAspectMax,
        ForceAspectMin,
        ForceAspectMax,
        StretchToFit,
        NoScale,
        Default,
    }

    export enum ContentType {
        Main,
        Frame,
        Cell,
    }

    export enum DepthOfFieldMode {
        Elliptical,
        TiltShift,
    }

    export enum DevelopDetailRefinementMethod {
        UnsharpMask,
        HighPass,
        MultiBand,
    }

    export enum DevelopInvertMethod {
        InfraredRB,
        InfraredRGB,
        Negative,
    }

    export enum DevelopToneCurveMethod {
        Standard,
        Compressed,
        Natural,
        HighContrast,
        Log,
    }

    export enum DocumentLoadMode {
        Application,
        Spreads,
        Artboards,
    }

    export enum ExportScalePreset {
        Standard,
        Mult2x,
        Mult3x,
        Width100,
        Height50,
        Square64,
        Square64Mult2x,
        Width32Height32,
    }

    export enum ExportScaleSizeType {
        None,
        Width,
        Height,
        Square,
        WidthHeight,
    }

    export enum FileType {
        JPEG,
        PNG,
        TIFF,
        WEBP,
        HDPhoto,
        RAW,
        GIF,
        JPEG2000,
        BMP,
        TGA,
        OpenEXR,
        HDR,
        Unknown,
        Affinity,
        HEIF,
        FITS,
        Plugin,
    }

    export enum HalftoneDotType {
        Cosine,
        Round,
        Line,
    }

    export enum HalftoneScreenType {
        Mono,
        Colour,
        Line,
        Circular,
    }

    export enum ImagePlacement {
        Embedded,
        Linked,
    }

    export enum LoadDwgLayoutSelection {
        AllPages,
        Model,
        Single,
    }

    export enum NodeChildType {
        Main,
        Enclosure,
        MasterSpread,
        WrapShape,
        StoryPin,
    }

    export enum NodeMoveType {
        Before,
        After,
        Inside,
    }

    export enum PackageResourcesPolicy {
        None,
        IncludeImages,
        IncludeTexts,
        IncludeCSS,
        IncludeUnrestrictedFonts,
        IncludeRestrictedFonts,
    }

    export enum PageBoundingBoxType {
        MediaBox,
        CropBox,
        TrimBox,
        ArtBox,
        BleedBox,
        MinimumContent,
        MinimumVisibleContent,
        MaximumContent,
        MaximumVisibleContent,
    }

    export enum PredefinedTagKey {
        AltTextTag,
        AltTextSource,
        ExtDescTag,
        ExtDescSource,
        ScriptLabel,
    }

    export enum RasterFillMode {
        Colour,
        Foreground,
        Background,
        Inpainting,
        History,
    }

    export enum RasterFloodFillSamplingSource {
        CurrentLayer,
        CurrentLayerAndBelow,
        LayersBeneath,
    }

    export enum RasterSelectionLogicalOperation {
        New,
        Add,
        Subtract,
        Intersect,
    }

    export enum RasterSelectionOutlineAlignment {
        Outside,
        Centre,
        Inside,
    }

    export enum SamplingSource {
        CurrentLayer,
        AllLayers,
    }

    export enum SelectiveColour {
        Reds,
        Yellows,
        Greens,
        Cyans,
        Blues,
        Magentas,
        Whites,
        Neutrals,
        Blacks,
    }

    export enum ShadowsHighlightsVersion {
        Default,
        V16,
    }

    export enum SpatialAnchor {
        None,
        TopLeft,
        CentreLeft,
        BottomLeft,
        TopCentre,
        Centre,
        BottomCentre,
        TopRight,
        CentreRight,
        BottomRight,
        FocalPoint,
    }

    export enum SubSelectionType {
        CurveEdge,
        CurveNode,
        Text,
        Table,
        ExportFormat,
        Fill,
        LineFill,
        Transparency,
        FillMesh,
        LineFillMesh,
        TransparencyMesh,
        GeometryModifier,
        FillDiffusion,
    }

    export enum TableEdgeSelector {
        None,
        Left,
        Right,
        InnerColumns,
        Top,
        Bottom,
        InnerRows,
        OuterRows,
        Rows,
        OuterColumns,
        Columns,
        Inner,
        Border,
        All,
    }

    export enum TextDefaultType {
        Art,
        Frame,
        Unknown,
        Measurement,
    }

    export enum TextFlowOverflowState {
        Unknown,
        None,
        Safe,
        Warn,
    }

    export enum TonalRangeType {
        Shadows,
        Midtones,
        Highlights,
    }

    export enum ToneCompressionMethod {
        Basic,
        Natural,
        Bright,
        Contrast,
        Filmic,
        Punchy,
        PBRNeutral,
        Log,
    }

    export enum ToneStretchMethod {
        Basic,
        Arcsinh,
        Logarithmic,
        Structural,
        ColourPreserving,
    }

    export enum VisibilityMode {
        Main,
        Export,
    }

    export class ColourBalanceValues {
        cyanRed: number;
        magentaGreen: number;
        yellowBlue: number;
    }

    export class CurveEdgeSubSelectionItem {
        curveID: number;
        edgeID: number;
    }

    export class CurveNodeSubSelectionItem {
        curveID: number;
        nodeID: number;
    }

    export class DocumentLoadResult {
        document: DocumentHandle;
        description: string;
    }

    export class EllipticalDepthOfFieldParameters {
        position: Point;
        radiusX: number;
        radiusY: number;
        inFocus: number;
        rotation: number;
    }

    export class FieldBlurItemParameters {
        position: Point;
        level: number;
        power: number;
    }

    export class FocalPoint {
        point: Point;
        isValid: boolean;
    }

    export class HSLShiftAdjustmentChannelParameters {
        hueShift: number;
        saturationShift: number;
        luminosityShift: number;
    }

    export class HSLShiftAdjustmentColourRange {
        rampUpBegin: number;
        rampUpEnd: number;
        rampDownBegin: number;
        rampDownEnd: number;
    }

    export class LTRB {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }

    export class LevelsAdjustmentChannelParameters {
        blackLevel: number;
        whiteLevel: number;
        gamma: number;
        outputBlackLevel: number;
        outputWhiteLevel: number;
    }

    export class LineDescriptors {
        fill: FillDescriptorHandle;
        lineStyle: LineStyleDescriptorHandle;
    }

    export class MeshSubSelectionItem {
        x: number;
        y: number;
    }

    export class PageOriginDelta {
        x: number;
        y: number;
    }

    export class SelectiveColourWeights {
        cyanWeight: number;
        magentaWeight: number;
        yellowWeight: number;
        blackWeight: number;
    }

    export class TiltShiftDepthOfFieldParameters {
        position: Point;
        top: number;
        bottom: number;
        inFocusTop: number;
        inFocusBottom: number;
        rotation: number;
    }

    export interface AddNoiseFilterParametersApi {
        create(): AddNoiseFilterParametersHandle;
        getIntensity(self: AddNoiseFilterParametersHandle): number;
        getIsMonochromatic(self: AddNoiseFilterParametersHandle): boolean;
        getNoiseType(self: AddNoiseFilterParametersHandle): AddNoiseType;
        setIntensity(self: AddNoiseFilterParametersHandle, intensity: number): void;
        setIsMonochromatic(self: AddNoiseFilterParametersHandle, isMonochromatic: boolean): void;
        setNoiseType(self: AddNoiseFilterParametersHandle, noiseType: AddNoiseType): void;
    }
    export const AddNoiseFilterParametersApi: AddNoiseFilterParametersApi;

    export interface AddNoiseFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): AddNoiseFilterRasterNodeHandle;
        getParameters(node: AddNoiseFilterRasterNodeHandle): AddNoiseFilterParametersHandle;
    }
    export const AddNoiseFilterRasterNodeApi: AddNoiseFilterRasterNodeApi;

    export interface AddNoiseFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: AddNoiseFilterParametersHandle): AddNoiseFilterRasterNodeDefinitionHandle;
        createDefault(): AddNoiseFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): AddNoiseFilterRasterNodeDefinitionHandle;
        getParameters(node: AddNoiseFilterRasterNodeDefinitionHandle): AddNoiseFilterParametersHandle;
        setParameters(node: AddNoiseFilterRasterNodeDefinitionHandle, parameters: AddNoiseFilterParametersHandle): void;
    }
    export const AddNoiseFilterRasterNodeDefinitionApi: AddNoiseFilterRasterNodeDefinitionApi;

    export interface AdjustmentRasterNodeApi extends Omit<EnclosureRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): AdjustmentRasterNodeHandle;
    }
    export const AdjustmentRasterNodeApi: AdjustmentRasterNodeApi;

    export interface AdjustmentRasterNodeDefinitionApi extends Omit<EnclosureRasterNodeDefinitionApi, "fromNodeDefinition"> {
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): AdjustmentRasterNodeDefinitionHandle;
    }
    export const AdjustmentRasterNodeDefinitionApi: AdjustmentRasterNodeDefinitionApi;

    export interface ArtTextNodeApi extends Omit<TextNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ArtTextNodeHandle;
    }
    export const ArtTextNodeApi: ArtTextNodeApi;

    export interface ArtTextNodeDefinitionApi extends Omit<TextNodeDefinitionApi, "fromNodeDefinition"> {
        createFromStoryBuilder(position: Point, storyBuilder: StoryBuilderHandle): ArtTextNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ArtTextNodeDefinitionHandle;
    }
    export const ArtTextNodeDefinitionApi: ArtTextNodeDefinitionApi;

    export interface ArtboardDocumentPropertiesApi {
        clone(self: ArtboardDocumentPropertiesHandle): ArtboardDocumentPropertiesHandle;
        create(): ArtboardDocumentPropertiesHandle;
        getAnchorType(self: ArtboardDocumentPropertiesHandle): SpatialAnchor;
        getDimensions(self: ArtboardDocumentPropertiesHandle): Size;
        getDrawingScale(self: ArtboardDocumentPropertiesHandle): DrawingScaleHandle;
        getMargin(self: ArtboardDocumentPropertiesHandle): LTRB;
        getMarginFill(self: ArtboardDocumentPropertiesHandle): FillDescriptorHandle;
        getUseDrawingScale(self: ArtboardDocumentPropertiesHandle): boolean;
        getUseMargin(self: ArtboardDocumentPropertiesHandle): boolean;
        setAnchorType(self: ArtboardDocumentPropertiesHandle, anchorType: SpatialAnchor): void;
        setDimensions(self: ArtboardDocumentPropertiesHandle, dimensions: Size): void;
        setDrawingScale(self: ArtboardDocumentPropertiesHandle, drawingScale: DrawingScaleHandle): void;
        setMargin(self: ArtboardDocumentPropertiesHandle, margin: LTRB): void;
        setMarginFill(self: ArtboardDocumentPropertiesHandle, marginFill: FillDescriptorHandle): void;
        setUseDrawingScale(self: ArtboardDocumentPropertiesHandle, useDrawingScale: boolean): void;
        setUseMargin(self: ArtboardDocumentPropertiesHandle, useMargin: boolean): void;
    }
    export const ArtboardDocumentPropertiesApi: ArtboardDocumentPropertiesApi;

    export interface ArtboardInterfaceApi {
        fromNode(node: NodeHandle): ArtboardInterfaceHandle;
        getArtboardBaseBox(self: ArtboardInterfaceHandle): Rectangle;
        getArtboardDescription(self: ArtboardInterfaceHandle): string;
        getArtboardProperties(self: ArtboardInterfaceHandle): ArtboardPropertiesHandle;
        getArtboardSpreadBaseBox(self: ArtboardInterfaceHandle): Rectangle;
        getBaselineGridInterface(self: ArtboardInterfaceHandle): BaselineGridInterfaceHandle;
        getNode(self: ArtboardInterfaceHandle): NodeHandle;
        getPhysicalRootInterface(self: ArtboardInterfaceHandle): PhysicalRootInterfaceHandle;
        getTopOfPageMargin(self: ArtboardInterfaceHandle): number;
        isArtboardEnabled(self: ArtboardInterfaceHandle): boolean;
        isSameObject(self: ArtboardInterfaceHandle, other: ArtboardInterfaceHandle): boolean;
    }
    export const ArtboardInterfaceApi: ArtboardInterfaceApi;

    export interface ArtboardPropertiesApi {
        getMarginsInterface(self: ArtboardPropertiesHandle): MarginsInterfaceHandle;
        getNode(self: ArtboardPropertiesHandle): NodeHandle;
        getPhysicalRootPropertiesInterface(self: ArtboardPropertiesHandle): PhysicalRootPropertiesInterfaceHandle;
    }
    export const ArtboardPropertiesApi: ArtboardPropertiesApi;

    export interface BaseBoxInterfaceApi {
        fromNode(node: NodeHandle): BaseBoxInterfaceHandle;
        getBaseBox(self: BaseBoxInterfaceHandle, includeClips: boolean): Rectangle;
        getConstrainingBaseBox(self: BaseBoxInterfaceHandle, includeClips: boolean): Rectangle;
        getNode(node: BaseBoxInterfaceHandle): NodeHandle;
    }
    export const BaseBoxInterfaceApi: BaseBoxInterfaceApi;

    export interface BaselineGridInterfaceApi {
        fromNode(node: NodeHandle): BaselineGridInterfaceHandle;
        getBaselineGridOptions(self: BaselineGridInterfaceHandle): BaselineGridOptionsHandle;
        getNode(self: BaselineGridInterfaceHandle): NodeHandle;
    }
    export const BaselineGridInterfaceApi: BaselineGridInterfaceApi;

    export interface BaselineGridOptionsApi {
        create(): BaselineGridOptionsHandle;
        getColour(self: BaselineGridOptionsHandle): ColourHandle;
        getRelativeTo(self: BaselineGridOptionsHandle): BaselineGridRelativeTo;
        getSpacing(self: BaselineGridOptionsHandle): number;
        getStart(self: BaselineGridOptionsHandle): number;
        getUseBaselineGrid(self: BaselineGridOptionsHandle): boolean;
        setColour(self: BaselineGridOptionsHandle, colour: ColourHandle): void;
        setRelativeTo(self: BaselineGridOptionsHandle, relativeTo: BaselineGridRelativeTo): void;
        setSpacing(self: BaselineGridOptionsHandle, spacing: number): void;
        setStart(self: BaselineGridOptionsHandle, start: number): void;
        setUseBaselineGrid(self: BaselineGridOptionsHandle, useBaselineGrid: boolean): void;
    }
    export const BaselineGridOptionsApi: BaselineGridOptionsApi;

    export interface BilateralBlurFilterParametersApi {
        create(): BilateralBlurFilterParametersHandle;
        getRadius(self: BilateralBlurFilterParametersHandle): number;
        getTolerance(self: BilateralBlurFilterParametersHandle): number;
        setRadius(self: BilateralBlurFilterParametersHandle, radius: number): void;
        setTolerance(self: BilateralBlurFilterParametersHandle, tolerance: number): void;
    }
    export const BilateralBlurFilterParametersApi: BilateralBlurFilterParametersApi;

    export interface BilateralBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): BilateralBlurFilterRasterNodeHandle;
        getParameters(node: BilateralBlurFilterRasterNodeHandle): BilateralBlurFilterParametersHandle;
    }
    export const BilateralBlurFilterRasterNodeApi: BilateralBlurFilterRasterNodeApi;

    export interface BilateralBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: BilateralBlurFilterParametersHandle): BilateralBlurFilterRasterNodeDefinitionHandle;
        createDefault(): BilateralBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): BilateralBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: BilateralBlurFilterRasterNodeDefinitionHandle): BilateralBlurFilterParametersHandle;
        setParameters(self: BilateralBlurFilterRasterNodeDefinitionHandle, parameters: BilateralBlurFilterParametersHandle): void;
    }
    export const BilateralBlurFilterRasterNodeDefinitionApi: BilateralBlurFilterRasterNodeDefinitionApi;

    export interface BlackAndWhiteAdjustmentParametersApi {
        create(): BlackAndWhiteAdjustmentParametersHandle;
        getBlue(self: BlackAndWhiteAdjustmentParametersHandle): number;
        getCyan(self: BlackAndWhiteAdjustmentParametersHandle): number;
        getGreen(self: BlackAndWhiteAdjustmentParametersHandle): number;
        getMagenta(self: BlackAndWhiteAdjustmentParametersHandle): number;
        getRed(self: BlackAndWhiteAdjustmentParametersHandle): number;
        getYellow(self: BlackAndWhiteAdjustmentParametersHandle): number;
        setBlue(self: BlackAndWhiteAdjustmentParametersHandle, blue: number): void;
        setCyan(self: BlackAndWhiteAdjustmentParametersHandle, cyan: number): void;
        setGreen(self: BlackAndWhiteAdjustmentParametersHandle, green: number): void;
        setMagenta(self: BlackAndWhiteAdjustmentParametersHandle, magenta: number): void;
        setRed(self: BlackAndWhiteAdjustmentParametersHandle, red: number): void;
        setYellow(self: BlackAndWhiteAdjustmentParametersHandle, yellow: number): void;
    }
    export const BlackAndWhiteAdjustmentParametersApi: BlackAndWhiteAdjustmentParametersApi;

    export interface BlackAndWhiteAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): BlackAndWhiteAdjustmentRasterNodeHandle;
        getParameters(node: BlackAndWhiteAdjustmentRasterNodeHandle): BlackAndWhiteAdjustmentParametersHandle;
    }
    export const BlackAndWhiteAdjustmentRasterNodeApi: BlackAndWhiteAdjustmentRasterNodeApi;

    export interface BlackAndWhiteAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: BlackAndWhiteAdjustmentParametersHandle): BlackAndWhiteAdjustmentRasterNodeDefinitionHandle;
        createDefault(): BlackAndWhiteAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): BlackAndWhiteAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: BlackAndWhiteAdjustmentRasterNodeDefinitionHandle): BlackAndWhiteAdjustmentParametersHandle;
        setParameters(node: BlackAndWhiteAdjustmentRasterNodeDefinitionHandle, parameters: BlackAndWhiteAdjustmentParametersHandle): void;
    }
    export const BlackAndWhiteAdjustmentRasterNodeDefinitionApi: BlackAndWhiteAdjustmentRasterNodeDefinitionApi;

    export interface BlendModeInterfaceApi {
        fromNode(node: NodeHandle): BlendModeInterfaceHandle;
        getAntialiasingMode(self: BlendModeInterfaceHandle): AntialiasingMode;
        getBlendMode(self: BlendModeInterfaceHandle): BlendMode;
        getBlendOptions(self: BlendModeInterfaceHandle): BlendOptionsHandle;
        getNode(self: BlendModeInterfaceHandle): NodeHandle;
    }
    export const BlendModeInterfaceApi: BlendModeInterfaceApi;

    export interface BlendOptionsApi {
        getChannelSourceLayerRanges(self: BlendOptionsHandle, channel: number): SplineHandle;
        getChannelUnderlyingCompositionRanges(self: BlendOptionsHandle, channel: number): SplineHandle;
        getGamma(self: BlendOptionsHandle): number;
        getMasterSourceLayerRanges(self: BlendOptionsHandle): SplineHandle;
        getMasterUnderlyingCompositionRanges(self: BlendOptionsHandle): SplineHandle;
        setChannelSourceLayerRanges(self: BlendOptionsHandle, channel: number, spline: SplineHandle): void;
        setChannelUnderlyingCompositionRanges(self: BlendOptionsHandle, channel: number, spline: SplineHandle): void;
        setGamma(self: BlendOptionsHandle, gamma: number): void;
        setMasterSourceLayerRanges(self: BlendOptionsHandle, spline: SplineHandle): void;
        setMasterUnderlyingCompositionRanges(self: BlendOptionsHandle, spline: SplineHandle): void;
    }
    export const BlendOptionsApi: BlendOptionsApi;

    export interface BloomFilterParametersApi {
        create(): BloomFilterParametersHandle;
        getColour(self: BloomFilterParametersHandle): number;
        getHighlightBlend(self: BloomFilterParametersHandle): number;
        getIsStrong(self: BloomFilterParametersHandle): boolean;
        getMethod(self: BloomFilterParametersHandle): BloomMethod;
        getMidtoneBlend(self: BloomFilterParametersHandle): number;
        getShadowBlend(self: BloomFilterParametersHandle): number;
        setColour(self: BloomFilterParametersHandle, colour: number): void;
        setHighlightBlend(self: BloomFilterParametersHandle, highlightBlend: number): void;
        setIsStrong(self: BloomFilterParametersHandle, isStrong: boolean): void;
        setMethod(self: BloomFilterParametersHandle, method: BloomMethod): void;
        setMidtoneBlend(self: BloomFilterParametersHandle, midtoneBlend: number): void;
        setShadowBlend(self: BloomFilterParametersHandle, shadowBlend: number): void;
    }
    export const BloomFilterParametersApi: BloomFilterParametersApi;

    export interface BloomFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): BloomFilterRasterNodeHandle;
        getParameters(node: BloomFilterRasterNodeHandle): BloomFilterParametersHandle;
    }
    export const BloomFilterRasterNodeApi: BloomFilterRasterNodeApi;

    export interface BloomFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: BloomFilterParametersHandle): BloomFilterRasterNodeDefinitionHandle;
        createDefault(): BloomFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): BloomFilterRasterNodeDefinitionHandle;
        getParameters(self: BloomFilterRasterNodeDefinitionHandle): BloomFilterParametersHandle;
        setParameters(self: BloomFilterRasterNodeDefinitionHandle, parameters: BloomFilterParametersHandle): void;
    }
    export const BloomFilterRasterNodeDefinitionApi: BloomFilterRasterNodeDefinitionApi;

    export interface BoxBlurFilterParametersApi {
        create(): BoxBlurFilterParametersHandle;
        getRadius(self: BoxBlurFilterParametersHandle): number;
        setRadius(self: BoxBlurFilterParametersHandle, radius: number): void;
    }
    export const BoxBlurFilterParametersApi: BoxBlurFilterParametersApi;

    export interface BoxBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): BoxBlurFilterRasterNodeHandle;
        getParameters(node: BoxBlurFilterRasterNodeHandle): BoxBlurFilterParametersHandle;
    }
    export const BoxBlurFilterRasterNodeApi: BoxBlurFilterRasterNodeApi;

    export interface BoxBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: BoxBlurFilterParametersHandle): BoxBlurFilterRasterNodeDefinitionHandle;
        createDefault(): BoxBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): BoxBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: BoxBlurFilterRasterNodeDefinitionHandle): BoxBlurFilterParametersHandle;
        setParameters(self: BoxBlurFilterRasterNodeDefinitionHandle, parameters: BoxBlurFilterParametersHandle): void;
    }
    export const BoxBlurFilterRasterNodeDefinitionApi: BoxBlurFilterRasterNodeDefinitionApi;

    export interface BrightnessContrastAdjustmentParametersApi {
        create(): BrightnessContrastAdjustmentParametersHandle;
        getBrightness(self: BrightnessContrastAdjustmentParametersHandle): number;
        getContrast(self: BrightnessContrastAdjustmentParametersHandle): number;
        getIsLinear(self: BrightnessContrastAdjustmentParametersHandle): boolean;
        setBrightness(self: BrightnessContrastAdjustmentParametersHandle, brightness: number): void;
        setContrast(self: BrightnessContrastAdjustmentParametersHandle, contrast: number): void;
        setIsLinear(self: BrightnessContrastAdjustmentParametersHandle, isLinear: boolean): void;
    }
    export const BrightnessContrastAdjustmentParametersApi: BrightnessContrastAdjustmentParametersApi;

    export interface BrightnessContrastAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): BrightnessContrastAdjustmentRasterNodeHandle;
        getParameters(node: BrightnessContrastAdjustmentRasterNodeHandle): BrightnessContrastAdjustmentParametersHandle;
    }
    export const BrightnessContrastAdjustmentRasterNodeApi: BrightnessContrastAdjustmentRasterNodeApi;

    export interface BrightnessContrastAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: BrightnessContrastAdjustmentParametersHandle): BrightnessContrastAdjustmentRasterNodeDefinitionHandle;
        createDefault(): BrightnessContrastAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): BrightnessContrastAdjustmentRasterNodeDefinitionHandle;
        getParameters(self: BrightnessContrastAdjustmentRasterNodeDefinitionHandle): BrightnessContrastAdjustmentParametersHandle;
        setParameters(self: BrightnessContrastAdjustmentRasterNodeDefinitionHandle, parameters: BrightnessContrastAdjustmentParametersHandle): void;
    }
    export const BrightnessContrastAdjustmentRasterNodeDefinitionApi: BrightnessContrastAdjustmentRasterNodeDefinitionApi;

    export interface BrushFillInterfaceApi {
        enumerateDescriptors(self: BrushFillInterfaceHandle, obeyScaleWithObject: boolean, callback: (fillDescriptorRef: FillDescriptorHandle) => EnumerationResult): void;
        fromNode(node: NodeHandle): BrushFillInterfaceHandle;
        getContentType(self: BrushFillInterfaceHandle): ContentType;
        getCurrentDescriptor(self: BrushFillInterfaceHandle, obeyScaleWithObject: boolean): FillDescriptorHandle;
        getCurrentIndex(self: BrushFillInterfaceHandle): number;
        getDescriptor(self: BrushFillInterfaceHandle, index: number, obeyScaleWithObject: boolean): FillDescriptorHandle;
        getDescriptorCount(self: BrushFillInterfaceHandle): number;
        getDomainTransform(self: BrushFillInterfaceHandle): Transform;
        getNode(self: BrushFillInterfaceHandle): NodeHandle;
        getSubSelection(self: BrushFillInterfaceHandle, index: number): SubSelectionHandle;
        getSubSelectionCount(self: BrushFillInterfaceHandle): number;
        isBrushFillVisible(self: BrushFillInterfaceHandle, minAlpha: number): boolean;
        isNoFill(self: BrushFillInterfaceHandle): boolean;
    }
    export const BrushFillInterfaceApi: BrushFillInterfaceApi;

    export interface ClarityFilterParametersApi {
        create(): ClarityFilterParametersHandle;
        getStrength(self: ClarityFilterParametersHandle): number;
        setStrength(self: ClarityFilterParametersHandle, strength: number): void;
    }
    export const ClarityFilterParametersApi: ClarityFilterParametersApi;

    export interface ClarityFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ClarityFilterRasterNodeHandle;
        getParameters(node: ClarityFilterRasterNodeHandle): ClarityFilterParametersHandle;
    }
    export const ClarityFilterRasterNodeApi: ClarityFilterRasterNodeApi;

    export interface ClarityFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: ClarityFilterParametersHandle): ClarityFilterRasterNodeDefinitionHandle;
        createDefault(): ClarityFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ClarityFilterRasterNodeDefinitionHandle;
        getParameters(node: ClarityFilterRasterNodeDefinitionHandle): ClarityFilterParametersHandle;
        setParameters(node: ClarityFilterRasterNodeDefinitionHandle, parameters: ClarityFilterParametersHandle): void;
    }
    export const ClarityFilterRasterNodeDefinitionApi: ClarityFilterRasterNodeDefinitionApi;

    export interface ColourBalanceAdjustmentParametersApi {
        create(): ColourBalanceAdjustmentParametersHandle;
        enumerateValues(self: ColourBalanceAdjustmentParametersHandle, callback: (tonalRange: TonalRangeType, values: ColourBalanceValues) => EnumerationResult): void;
        getPreserveLuminosity(self: ColourBalanceAdjustmentParametersHandle): boolean;
        getValues(self: ColourBalanceAdjustmentParametersHandle, tonalRange: TonalRangeType): ColourBalanceValues;
        getValuesCount(self: ColourBalanceAdjustmentParametersHandle): number;
        setPreserveLuminosity(self: ColourBalanceAdjustmentParametersHandle, preserveLuminosity: boolean): void;
        setValues(self: ColourBalanceAdjustmentParametersHandle, tonalRange: TonalRangeType, values: ColourBalanceValues): void;
    }
    export const ColourBalanceAdjustmentParametersApi: ColourBalanceAdjustmentParametersApi;

    export interface ColourBalanceAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ColourBalanceAdjustmentRasterNodeHandle;
        getParameters(node: ColourBalanceAdjustmentRasterNodeHandle): ColourBalanceAdjustmentParametersHandle;
    }
    export const ColourBalanceAdjustmentRasterNodeApi: ColourBalanceAdjustmentRasterNodeApi;

    export interface ColourBalanceAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: ColourBalanceAdjustmentParametersHandle): ColourBalanceAdjustmentRasterNodeDefinitionHandle;
        createDefault(): ColourBalanceAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ColourBalanceAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: ColourBalanceAdjustmentRasterNodeDefinitionHandle): ColourBalanceAdjustmentParametersHandle;
        setParameters(node: ColourBalanceAdjustmentRasterNodeDefinitionHandle, parameters: ColourBalanceAdjustmentParametersHandle): void;
    }
    export const ColourBalanceAdjustmentRasterNodeDefinitionApi: ColourBalanceAdjustmentRasterNodeDefinitionApi;

    export interface ColouredLogicalNodeApi extends Omit<LogicalNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ColouredLogicalNodeHandle;
        getLayerColour(node: ColouredLogicalNodeHandle): ColourHandle;
    }
    export const ColouredLogicalNodeApi: ColouredLogicalNodeApi;

    export interface ColouredLogicalNodeDefinitionApi extends Omit<LogicalNodeDefinitionApi, "fromNodeDefinition"> {
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ColouredLogicalNodeDefinitionHandle;
    }
    export const ColouredLogicalNodeDefinitionApi: ColouredLogicalNodeDefinitionApi;

    export interface CompoundOperationInterfaceApi {
        fromNode(node: NodeHandle): CompoundOperationInterfaceHandle;
        getCompoundOperation(self: CompoundOperationInterfaceHandle): CompoundOperation;
        getNode(node: CompoundOperationInterfaceHandle): NodeHandle;
    }
    export const CompoundOperationInterfaceApi: CompoundOperationInterfaceApi;

    export interface ContainerNodeApi extends Omit<ColouredLogicalNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ContainerNodeHandle;
    }
    export const ContainerNodeApi: ContainerNodeApi;

    export interface ContainerNodeDefinitionApi extends Omit<ColouredLogicalNodeDefinitionApi, "fromNodeDefinition"> {
        createDefault(): ContainerNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ContainerNodeDefinitionHandle;
    }
    export const ContainerNodeDefinitionApi: ContainerNodeDefinitionApi;

    export interface CurveEdgeSubSelectionApi extends SubSelectionApi {
        clone(self: CurveEdgeSubSelectionHandle): CurveEdgeSubSelectionHandle;
        cloneAndAddItems(self: CurveEdgeSubSelectionHandle, items: CurveEdgeSubSelectionItem[]): CurveEdgeSubSelectionHandle;
        cloneAndRemoveCurves(self: CurveEdgeSubSelectionHandle, curveIDs: number[]): CurveEdgeSubSelectionHandle;
        cloneAndRemoveItems(self: CurveEdgeSubSelectionHandle, items: CurveEdgeSubSelectionItem[]): CurveEdgeSubSelectionHandle;
        cloneAsCurveEdgeSubSelection(self: CurveEdgeSubSelectionHandle): CurveEdgeSubSelectionHandle;
        create(items: CurveEdgeSubSelectionItem[]): CurveEdgeSubSelectionHandle;
        enumerateItems(self: CurveEdgeSubSelectionHandle, callback: (item: CurveEdgeSubSelectionItem) => EnumerationResult): void;
        enumerateItemsWithCurveID(self: CurveEdgeSubSelectionHandle, curveID: number, callback: (item: CurveEdgeSubSelectionItem) => EnumerationResult): void;
        fromSubSelection(subSelection: SubSelectionHandle): CurveEdgeSubSelectionHandle;
        getItem(self: CurveEdgeSubSelectionHandle, index: number): CurveEdgeSubSelectionItem;
        getItemCount(self: CurveEdgeSubSelectionHandle): number;
        isEmpty(self: CurveEdgeSubSelectionHandle): boolean;
    }
    export const CurveEdgeSubSelectionApi: CurveEdgeSubSelectionApi;

    export interface CurveNodeSubSelectionApi extends SubSelectionApi {
        clone(self: CurveNodeSubSelectionHandle): CurveNodeSubSelectionHandle;
        cloneAndAddItems(self: CurveNodeSubSelectionHandle, items: CurveNodeSubSelectionItem[]): CurveNodeSubSelectionHandle;
        cloneAndRemoveCurves(self: CurveNodeSubSelectionHandle, curveIDs: number[]): CurveNodeSubSelectionHandle;
        cloneAndRemoveItems(self: CurveNodeSubSelectionHandle, items: CurveNodeSubSelectionItem[]): CurveNodeSubSelectionHandle;
        cloneAsCurveNodeSubSelection(self: CurveNodeSubSelectionHandle): CurveNodeSubSelectionHandle;
        create(items: CurveNodeSubSelectionItem[]): CurveNodeSubSelectionHandle;
        enumerateItems(self: CurveNodeSubSelectionHandle, callback: (item: CurveNodeSubSelectionItem) => EnumerationResult): void;
        enumerateItemsWithCurveID(self: CurveNodeSubSelectionHandle, curveID: number, callback: (item: CurveNodeSubSelectionItem) => EnumerationResult): void;
        fromSubSelection(subSelection: SubSelectionHandle): CurveNodeSubSelectionHandle;
        getItem(self: CurveNodeSubSelectionHandle, index: number): CurveNodeSubSelectionItem;
        getItemCount(self: CurveNodeSubSelectionHandle): number;
        isEmpty(self: CurveNodeSubSelectionHandle): boolean;
    }
    export const CurveNodeSubSelectionApi: CurveNodeSubSelectionApi;

    export interface CurvePathTextNodeApi extends Omit<TextNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): CurvePathTextNodeHandle;
    }
    export const CurvePathTextNodeApi: CurvePathTextNodeApi;

    export interface CurvePathTextNodeDefinitionApi extends Omit<TextNodeDefinitionApi, "fromNodeDefinition"> {
        createFromStoryBuilder(polyCurve: PolyCurveHandle, storyBuilder: StoryBuilderHandle): CurvePathTextNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): CurvePathTextNodeDefinitionHandle;
    }
    export const CurvePathTextNodeDefinitionApi: CurvePathTextNodeDefinitionApi;

    export interface CurvesAdjustmentParametersApi {
        create(): CurvesAdjustmentParametersHandle;
        enumerateChannelSplines(self: CurvesAdjustmentParametersHandle, callback: (channel: number, spline: SplineHandle) => EnumerationResult): void;
        getChannelSpline(self: CurvesAdjustmentParametersHandle, channel: number): SplineHandle;
        getChannelSplineCount(self: CurvesAdjustmentParametersHandle): number;
        getMasterSpline(self: CurvesAdjustmentParametersHandle): SplineHandle;
        getMax(self: CurvesAdjustmentParametersHandle): number;
        getMin(self: CurvesAdjustmentParametersHandle): number;
        setChannelSpline(self: CurvesAdjustmentParametersHandle, channel: number, spline: SplineHandle): void;
        setMasterSpline(self: CurvesAdjustmentParametersHandle, spline: SplineHandle): void;
        setMax(self: CurvesAdjustmentParametersHandle, max: number): void;
        setMin(self: CurvesAdjustmentParametersHandle, min: number): void;
    }
    export const CurvesAdjustmentParametersApi: CurvesAdjustmentParametersApi;

    export interface CurvesAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): CurvesAdjustmentRasterNodeHandle;
        getColourSpace(node: CurvesAdjustmentRasterNodeHandle): ColourSpaceType;
        getParameters(node: CurvesAdjustmentRasterNodeHandle): CurvesAdjustmentParametersHandle;
    }
    export const CurvesAdjustmentRasterNodeApi: CurvesAdjustmentRasterNodeApi;

    export interface CurvesAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: CurvesAdjustmentParametersHandle, colourSpace: ColourSpaceType): CurvesAdjustmentRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): CurvesAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): CurvesAdjustmentRasterNodeDefinitionHandle;
        getColourSpace(node: CurvesAdjustmentRasterNodeDefinitionHandle): ColourSpaceType;
        getParameters(node: CurvesAdjustmentRasterNodeDefinitionHandle): CurvesAdjustmentParametersHandle;
        setColourSpace(node: CurvesAdjustmentRasterNodeDefinitionHandle, colourSpace: ColourSpaceType): void;
        setParameters(node: CurvesAdjustmentRasterNodeDefinitionHandle, parameters: CurvesAdjustmentParametersHandle): void;
    }
    export const CurvesAdjustmentRasterNodeDefinitionApi: CurvesAdjustmentRasterNodeDefinitionApi;

    export interface CurvesInterfaceApi {
        fromNode(node: NodeHandle): CurvesInterfaceHandle;
        getCorneredCurves(self: CurvesInterfaceHandle): PolyCurveHandle;
        getCurves(self: CurvesInterfaceHandle): PolyCurveHandle;
        getDomainTransform(self: CurvesInterfaceHandle): Transform;
        getNode(self: CurvesInterfaceHandle): NodeHandle;
        getPolyPolyCurves(self: CurvesInterfaceHandle): PolyPolyCurveHandle;
        getSubSelection(self: CurvesInterfaceHandle, subSelectionType: SubSelectionType, index: number): SubSelectionHandle;
        getSubSelectionCount(self: CurvesInterfaceHandle, subSelectionType: SubSelectionType): number;
        getWindingOrder(self: CurvesInterfaceHandle): WindingOrder;
        isMutable(self: CurvesInterfaceHandle): boolean;
    }
    export const CurvesInterfaceApi: CurvesInterfaceApi;

    export interface DefringeFilterParametersApi {
        create(): DefringeFilterParametersHandle;
        getEdgeBrightnessThreshold(self: DefringeFilterParametersHandle): number;
        getHue(self: DefringeFilterParametersHandle): number;
        getRadius(self: DefringeFilterParametersHandle): number;
        getRemoveComplementary(self: DefringeFilterParametersHandle): boolean;
        getTolerance(self: DefringeFilterParametersHandle): number;
        setEdgeBrightnessThreshold(self: DefringeFilterParametersHandle, edgeBrightnessThreshold: number): void;
        setHue(self: DefringeFilterParametersHandle, hue: number): void;
        setRadius(self: DefringeFilterParametersHandle, radius: number): void;
        setRemoveComplementary(self: DefringeFilterParametersHandle, removeComplementary: boolean): void;
        setTolerance(self: DefringeFilterParametersHandle, tolerance: number): void;
    }
    export const DefringeFilterParametersApi: DefringeFilterParametersApi;

    export interface DefringeFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): DefringeFilterRasterNodeHandle;
        getParameters(node: DefringeFilterRasterNodeHandle): DefringeFilterParametersHandle;
    }
    export const DefringeFilterRasterNodeApi: DefringeFilterRasterNodeApi;

    export interface DefringeFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: DefringeFilterParametersHandle): DefringeFilterRasterNodeDefinitionHandle;
        createDefault(): DefringeFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): DefringeFilterRasterNodeDefinitionHandle;
        getParameters(node: DefringeFilterRasterNodeDefinitionHandle): DefringeFilterParametersHandle;
        setParameters(node: DefringeFilterRasterNodeDefinitionHandle, parameters: DefringeFilterParametersHandle): void;
    }
    export const DefringeFilterRasterNodeDefinitionApi: DefringeFilterRasterNodeDefinitionApi;

    export interface DenoiseFilterParametersApi {
        create(): DenoiseFilterParametersHandle;
        getColours(self: DenoiseFilterParametersHandle): number;
        getColoursContribution(self: DenoiseFilterParametersHandle): number;
        getLuminance(self: DenoiseFilterParametersHandle): number;
        getLuminanceContribution(self: DenoiseFilterParametersHandle): number;
        getLuminanceDetail(self: DenoiseFilterParametersHandle): number;
        setColours(self: DenoiseFilterParametersHandle, colours: number): void;
        setColoursContribution(self: DenoiseFilterParametersHandle, coloursContribution: number): void;
        setLuminance(self: DenoiseFilterParametersHandle, luminance: number): void;
        setLuminanceContribution(self: DenoiseFilterParametersHandle, luminanceContribution: number): void;
        setLuminanceDetail(self: DenoiseFilterParametersHandle, luminanceDetail: number): void;
    }
    export const DenoiseFilterParametersApi: DenoiseFilterParametersApi;

    export interface DenoiseFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): DenoiseFilterRasterNodeHandle;
        getParameters(node: DenoiseFilterRasterNodeHandle): DenoiseFilterParametersHandle;
    }
    export const DenoiseFilterRasterNodeApi: DenoiseFilterRasterNodeApi;

    export interface DenoiseFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: DenoiseFilterParametersHandle): DenoiseFilterRasterNodeDefinitionHandle;
        createDefault(): DenoiseFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): DenoiseFilterRasterNodeDefinitionHandle;
        getParameters(node: DenoiseFilterRasterNodeDefinitionHandle): DenoiseFilterParametersHandle;
        setParameters(node: DenoiseFilterRasterNodeDefinitionHandle, parameters: DenoiseFilterParametersHandle): void;
    }
    export const DenoiseFilterRasterNodeDefinitionApi: DenoiseFilterRasterNodeDefinitionApi;

    export interface DepthOfFieldFilterParametersApi {
        create(): DepthOfFieldFilterParametersHandle;
        getClarity(self: DepthOfFieldFilterParametersHandle): number;
        getEllipticalParams(self: DepthOfFieldFilterParametersHandle): EllipticalDepthOfFieldParameters;
        getMode(self: DepthOfFieldFilterParametersHandle): DepthOfFieldMode;
        getRadius(self: DepthOfFieldFilterParametersHandle): number;
        getTiltShiftParams(self: DepthOfFieldFilterParametersHandle): TiltShiftDepthOfFieldParameters;
        getVibrance(self: DepthOfFieldFilterParametersHandle): number;
        setClarity(self: DepthOfFieldFilterParametersHandle, clarity: number): void;
        setEllipticalParams(self: DepthOfFieldFilterParametersHandle, params: EllipticalDepthOfFieldParameters): void;
        setRadius(self: DepthOfFieldFilterParametersHandle, radius: number): void;
        setTiltShiftParams(self: DepthOfFieldFilterParametersHandle, params: TiltShiftDepthOfFieldParameters): void;
        setVibrance(self: DepthOfFieldFilterParametersHandle, vibrance: number): void;
    }
    export const DepthOfFieldFilterParametersApi: DepthOfFieldFilterParametersApi;

    export interface DepthOfFieldFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): DepthOfFieldFilterRasterNodeHandle;
        getParameters(node: DepthOfFieldFilterRasterNodeHandle): DepthOfFieldFilterParametersHandle;
    }
    export const DepthOfFieldFilterRasterNodeApi: DepthOfFieldFilterRasterNodeApi;

    export interface DepthOfFieldFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: DepthOfFieldFilterParametersHandle): DepthOfFieldFilterRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): DepthOfFieldFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): DepthOfFieldFilterRasterNodeDefinitionHandle;
        getParameters(self: DepthOfFieldFilterRasterNodeDefinitionHandle): DepthOfFieldFilterParametersHandle;
        setParameters(self: DepthOfFieldFilterRasterNodeDefinitionHandle, parameters: DepthOfFieldFilterParametersHandle): void;
    }
    export const DepthOfFieldFilterRasterNodeDefinitionApi: DepthOfFieldFilterRasterNodeDefinitionApi;

    export interface DescriptionInterfaceApi {
        fromNode(node: NodeHandle): DescriptionInterfaceHandle;
        getDefaultDescription(self: DescriptionInterfaceHandle): string;
        getDefaultDescriptionForDisplay(self: DescriptionInterfaceHandle): string;
        getDescription(self: DescriptionInterfaceHandle, getDefaultIfEmpty: boolean): string;
        getNode(self: DescriptionInterfaceHandle): NodeHandle;
        getTagColour(self: DescriptionInterfaceHandle, inferFromAncestors: boolean): ColourHandle;
        getUserDescription(self: DescriptionInterfaceHandle): string;
    }
    export const DescriptionInterfaceApi: DescriptionInterfaceApi;

    export interface DevelopNodeApi extends Omit<PhysicalNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): DevelopNodeHandle;
        getImageResourceInterface(self: DevelopNodeHandle): ImageResourceInterfaceHandle;
        getImageSize(self: DevelopNodeHandle): Size;
        getParameters(self: DevelopNodeHandle): DevelopParametersHandle;
        getRasterInterface(self: DevelopNodeHandle): RasterInterfaceHandle;
        getSourceIsRaw(self: DevelopNodeHandle): boolean;
    }
    export const DevelopNodeApi: DevelopNodeApi;

    export interface DevelopParametersApi {
        getApplyToneCurve(self: DevelopParametersHandle): boolean;
        getBlackAndWhite(self: DevelopParametersHandle): BlackAndWhiteAdjustmentParametersHandle;
        getBlackAndWhiteEnabled(self: DevelopParametersHandle): boolean;
        getBlackpoint(self: DevelopParametersHandle): number;
        getChromaticAberrationEnabled(self: DevelopParametersHandle): boolean;
        getChromaticAberrationUseProfile(self: DevelopParametersHandle): boolean;
        getClarity(self: DevelopParametersHandle): number;
        getColourBalance(self: DevelopParametersHandle): ColourBalanceAdjustmentParametersHandle;
        getColourBalanceEnabled(self: DevelopParametersHandle): boolean;
        getColourContribution(self: DevelopParametersHandle): number;
        getContrast(self: DevelopParametersHandle): number;
        getCurves(self: DevelopParametersHandle): CurvesAdjustmentParametersHandle;
        getCurvesEnabled(self: DevelopParametersHandle): boolean;
        getDefringeComplementary(self: DevelopParametersHandle): boolean;
        getDefringeEnabled(self: DevelopParametersHandle): boolean;
        getDefringeHue(self: DevelopParametersHandle): number;
        getDefringeRadius(self: DevelopParametersHandle): number;
        getDefringeThreshold(self: DevelopParametersHandle): number;
        getDefringeTolerance(self: DevelopParametersHandle): number;
        getDetailRefinementAmount(self: DevelopParametersHandle): number;
        getDetailRefinementEnabled(self: DevelopParametersHandle): boolean;
        getDetailRefinementMethod(self: DevelopParametersHandle): DevelopDetailRefinementMethod;
        getDetailRefinementRadius(self: DevelopParametersHandle): number;
        getEnhanceEnabled(self: DevelopParametersHandle): boolean;
        getExposure(self: DevelopParametersHandle): number;
        getExposureEnabled(self: DevelopParametersHandle): boolean;
        getFocusPeakingHue(self: DevelopParametersHandle): number;
        getHSL(self: DevelopParametersHandle): HSLShiftAdjustmentParametersHandle;
        getHSLEnabled(self: DevelopParametersHandle): boolean;
        getHighlightsIntensity(self: DevelopParametersHandle): number;
        getInvertEnabled(self: DevelopParametersHandle): boolean;
        getInvertMethod(self: DevelopParametersHandle): DevelopInvertMethod;
        getInvertStrength(self: DevelopParametersHandle): number;
        getLensCorrectionEnabled(self: DevelopParametersHandle): boolean;
        getLensDistortion(self: DevelopParametersHandle): number;
        getLensHorizontal(self: DevelopParametersHandle): number;
        getLensProfileDistortion(self: DevelopParametersHandle): boolean;
        getLensProfileName(self: DevelopParametersHandle): string;
        getLensRotation(self: DevelopParametersHandle): number;
        getLensScale(self: DevelopParametersHandle): number;
        getLensVertical(self: DevelopParametersHandle): number;
        getLensVignetteEnabled(self: DevelopParametersHandle): boolean;
        getLensVignetteIntensity(self: DevelopParametersHandle): number;
        getLensVignetteUseProfile(self: DevelopParametersHandle): boolean;
        getLuminanceContribution(self: DevelopParametersHandle): number;
        getNoiseAdditionColour(self: DevelopParametersHandle): boolean;
        getNoiseAdditionEnabled(self: DevelopParametersHandle): boolean;
        getNoiseAdditionGaussian(self: DevelopParametersHandle): boolean;
        getNoiseAdditionIntensity(self: DevelopParametersHandle): number;
        getNoiseReductionChromaSigma(self: DevelopParametersHandle): number;
        getNoiseReductionDetail(self: DevelopParametersHandle): number;
        getNoiseReductionEnabled(self: DevelopParametersHandle): boolean;
        getNoiseReductionLuminanceSigma(self: DevelopParametersHandle): number;
        getPostVignetteEnabled(self: DevelopParametersHandle): boolean;
        getPostVignetteHardness(self: DevelopParametersHandle): number;
        getPostVignetteIntensity(self: DevelopParametersHandle): number;
        getPostVignetteScale(self: DevelopParametersHandle): number;
        getProfileEnabled(self: DevelopParametersHandle): boolean;
        getRawWhiteBalance(self: DevelopParametersHandle): boolean;
        getSaturation(self: DevelopParametersHandle): number;
        getSelectiveColour(self: DevelopParametersHandle): SelectiveColourAdjustmentParametersHandle;
        getSelectiveColourEnabled(self: DevelopParametersHandle): boolean;
        getShadowsHighlightsEnabled(self: DevelopParametersHandle): boolean;
        getShadowsIntensity(self: DevelopParametersHandle): number;
        getShowClippedHighlights(self: DevelopParametersHandle): boolean;
        getShowClippedShadows(self: DevelopParametersHandle): boolean;
        getShowClippedTones(self: DevelopParametersHandle): boolean;
        getShowFocusPeaking(self: DevelopParametersHandle): boolean;
        getSplitToning(self: DevelopParametersHandle): SplitToningAdjustmentParametersHandle;
        getSplitToningEnabled(self: DevelopParametersHandle): boolean;
        getTexture(self: DevelopParametersHandle): number;
        getTint(self: DevelopParametersHandle): number;
        getToneCurveEnabled(self: DevelopParametersHandle): boolean;
        getToneCurveMethod(self: DevelopParametersHandle): DevelopToneCurveMethod;
        getVibrance(self: DevelopParametersHandle): number;
        getWaveletChromaLevels(self: DevelopParametersHandle): number;
        getWaveletChromaSigma(self: DevelopParametersHandle): number;
        getWaveletDetail(self: DevelopParametersHandle): number;
        getWaveletLevels(self: DevelopParametersHandle): number;
        getWaveletLumaSigma(self: DevelopParametersHandle): number;
        getWaveletNoiseReductionEnabled(self: DevelopParametersHandle): boolean;
        getWhiteBalance(self: DevelopParametersHandle): number;
        getWhiteBalanceEnabled(self: DevelopParametersHandle): boolean;
        getWhitepoint(self: DevelopParametersHandle): number;
        setApplyToneCurve(self: DevelopParametersHandle, applyToneCurve: boolean): void;
        setBlackAndWhite(self: DevelopParametersHandle, blackAndWhite: BlackAndWhiteAdjustmentParametersHandle): void;
        setBlackAndWhiteEnabled(self: DevelopParametersHandle, blackAndWhiteEnabled: boolean): void;
        setBlackpoint(self: DevelopParametersHandle, blackpoint: number): void;
        setChromaticAberrationEnabled(self: DevelopParametersHandle, chromaticAberrationEnabled: boolean): void;
        setChromaticAberrationUseProfile(self: DevelopParametersHandle, chromaticAberrationUseProfile: boolean): void;
        setClarity(self: DevelopParametersHandle, clarity: number): void;
        setColourBalance(self: DevelopParametersHandle, colourBalance: ColourBalanceAdjustmentParametersHandle): void;
        setColourBalanceEnabled(self: DevelopParametersHandle, colourBalanceEnabled: boolean): void;
        setColourContribution(self: DevelopParametersHandle, colourContribution: number): void;
        setContrast(self: DevelopParametersHandle, contrast: number): void;
        setCurves(self: DevelopParametersHandle, curves: CurvesAdjustmentParametersHandle): void;
        setCurvesEnabled(self: DevelopParametersHandle, curvesEnabled: boolean): void;
        setDefringeComplementary(self: DevelopParametersHandle, defringeComplementary: boolean): void;
        setDefringeEnabled(self: DevelopParametersHandle, defringeEnabled: boolean): void;
        setDefringeHue(self: DevelopParametersHandle, defringeHue: number): void;
        setDefringeRadius(self: DevelopParametersHandle, defringeRadius: number): void;
        setDefringeThreshold(self: DevelopParametersHandle, defringeThreshold: number): void;
        setDefringeTolerance(self: DevelopParametersHandle, defringeTolerance: number): void;
        setDetailRefinementAmount(self: DevelopParametersHandle, detailRefinementAmount: number): void;
        setDetailRefinementEnabled(self: DevelopParametersHandle, detailRefinementEnabled: boolean): void;
        setDetailRefinementMethod(self: DevelopParametersHandle, detailRefinementMethod: DevelopDetailRefinementMethod): void;
        setDetailRefinementRadius(self: DevelopParametersHandle, detailRefinementRadius: number): void;
        setEnhanceEnabled(self: DevelopParametersHandle, enhanceEnabled: boolean): void;
        setExposure(self: DevelopParametersHandle, exposure: number): void;
        setExposureEnabled(self: DevelopParametersHandle, exposureEnabled: boolean): void;
        setFocusPeakingHue(self: DevelopParametersHandle, focusPeakingHue: number): void;
        setHSL(self: DevelopParametersHandle, hsl: HSLShiftAdjustmentParametersHandle): void;
        setHSLEnabled(self: DevelopParametersHandle, hslEnabled: boolean): void;
        setHighlightsIntensity(self: DevelopParametersHandle, highlightsIntensity: number): void;
        setInvertEnabled(self: DevelopParametersHandle, invertEnabled: boolean): void;
        setInvertMethod(self: DevelopParametersHandle, invertMethod: DevelopInvertMethod): void;
        setInvertStrength(self: DevelopParametersHandle, invertStrength: number): void;
        setLensCorrectionEnabled(self: DevelopParametersHandle, lensCorrectionEnabled: boolean): void;
        setLensDistortion(self: DevelopParametersHandle, lensDistortion: number): void;
        setLensHorizontal(self: DevelopParametersHandle, lensHorizontal: number): void;
        setLensProfileDistortion(self: DevelopParametersHandle, lensProfileDistortion: boolean): void;
        setLensRotation(self: DevelopParametersHandle, lensRotation: number): void;
        setLensScale(self: DevelopParametersHandle, lensScale: number): void;
        setLensVertical(self: DevelopParametersHandle, lensVertical: number): void;
        setLensVignetteEnabled(self: DevelopParametersHandle, lensVignetteEnabled: boolean): void;
        setLensVignetteIntensity(self: DevelopParametersHandle, lensVignetteIntensity: number): void;
        setLensVignetteUseProfile(self: DevelopParametersHandle, lensVignetteUseProfile: boolean): void;
        setLuminanceContribution(self: DevelopParametersHandle, luminanceContribution: number): void;
        setNoiseAdditionColour(self: DevelopParametersHandle, noiseAdditionColour: boolean): void;
        setNoiseAdditionEnabled(self: DevelopParametersHandle, noiseAdditionEnabled: boolean): void;
        setNoiseAdditionGaussian(self: DevelopParametersHandle, noiseAdditionGaussian: boolean): void;
        setNoiseAdditionIntensity(self: DevelopParametersHandle, noiseAdditionIntensity: number): void;
        setNoiseReductionChromaSigma(self: DevelopParametersHandle, noiseReductionChromaSigma: number): void;
        setNoiseReductionDetail(self: DevelopParametersHandle, noiseReductionDetail: number): void;
        setNoiseReductionEnabled(self: DevelopParametersHandle, noiseReductionEnabled: boolean): void;
        setNoiseReductionLuminanceSigma(self: DevelopParametersHandle, noiseReductionLuminanceSigma: number): void;
        setPostVignetteEnabled(self: DevelopParametersHandle, postVignetteEnabled: boolean): void;
        setPostVignetteHardness(self: DevelopParametersHandle, postVignetteHardness: number): void;
        setPostVignetteIntensity(self: DevelopParametersHandle, postVignetteIntensity: number): void;
        setPostVignetteScale(self: DevelopParametersHandle, postVignetteScale: number): void;
        setProfileEnabled(self: DevelopParametersHandle, profileEnabled: boolean): void;
        setSaturation(self: DevelopParametersHandle, saturation: number): void;
        setSelectiveColour(self: DevelopParametersHandle, selectiveColour: SelectiveColourAdjustmentParametersHandle): void;
        setSelectiveColourEnabled(self: DevelopParametersHandle, selectiveColourEnabled: boolean): void;
        setShadowsHighlightsEnabled(self: DevelopParametersHandle, shadowsHighlightsEnabled: boolean): void;
        setShadowsIntensity(self: DevelopParametersHandle, shadowsIntensity: number): void;
        setShowClippedHighlights(self: DevelopParametersHandle, showClippedHighlights: boolean): void;
        setShowClippedShadows(self: DevelopParametersHandle, showClippedShadows: boolean): void;
        setShowClippedTones(self: DevelopParametersHandle, showClippedTones: boolean): void;
        setShowFocusPeaking(self: DevelopParametersHandle, showFocusPeaking: boolean): void;
        setSplitToning(self: DevelopParametersHandle, splitToning: SplitToningAdjustmentParametersHandle): void;
        setSplitToningEnabled(self: DevelopParametersHandle, splitToningEnabled: boolean): void;
        setTexture(self: DevelopParametersHandle, texture: number): void;
        setTint(self: DevelopParametersHandle, tint: number): void;
        setToneCurveEnabled(self: DevelopParametersHandle, toneCurveEnabled: boolean): void;
        setToneCurveMethod(self: DevelopParametersHandle, toneCurveMethod: DevelopToneCurveMethod): void;
        setVibrance(self: DevelopParametersHandle, vibrance: number): void;
        setWaveletChromaLevels(self: DevelopParametersHandle, waveletChromaLevels: number): void;
        setWaveletChromaSigma(self: DevelopParametersHandle, waveletChromaSigma: number): void;
        setWaveletDetail(self: DevelopParametersHandle, waveletDetail: number): void;
        setWaveletLevels(self: DevelopParametersHandle, waveletLevels: number): void;
        setWaveletLumaSigma(self: DevelopParametersHandle, waveletLumaSigma: number): void;
        setWaveletNoiseReductionEnabled(self: DevelopParametersHandle, waveletNoiseReductionEnabled: boolean): void;
        setWhiteBalance(self: DevelopParametersHandle, whiteBalance: number): void;
        setWhiteBalanceEnabled(self: DevelopParametersHandle, whiteBalanceEnabled: boolean): void;
        setWhitepoint(self: DevelopParametersHandle, whitepoint: number): void;
    }
    export const DevelopParametersApi: DevelopParametersApi;

    export interface DiffuseFilterParametersApi {
        create(): DiffuseFilterParametersHandle;
        getIntensity(self: DiffuseFilterParametersHandle): number;
        setIntensity(self: DiffuseFilterParametersHandle, intensity: number): void;
    }
    export const DiffuseFilterParametersApi: DiffuseFilterParametersApi;

    export interface DiffuseFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): DiffuseFilterRasterNodeHandle;
        getParameters(node: DiffuseFilterRasterNodeHandle): DiffuseFilterParametersHandle;
    }
    export const DiffuseFilterRasterNodeApi: DiffuseFilterRasterNodeApi;

    export interface DiffuseFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: DiffuseFilterParametersHandle): DiffuseFilterRasterNodeDefinitionHandle;
        createDefault(): DiffuseFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): DiffuseFilterRasterNodeDefinitionHandle;
        getParameters(node: DiffuseFilterRasterNodeDefinitionHandle): DiffuseFilterParametersHandle;
        setParameters(node: DiffuseFilterRasterNodeDefinitionHandle, parameters: DiffuseFilterParametersHandle): void;
    }
    export const DiffuseFilterRasterNodeDefinitionApi: DiffuseFilterRasterNodeDefinitionApi;

    export interface DiffuseGlowFilterParametersApi {
        create(): DiffuseGlowFilterParametersHandle;
        getIntensity(self: DiffuseGlowFilterParametersHandle): number;
        getOpacity(self: DiffuseGlowFilterParametersHandle): number;
        getRadius(self: DiffuseGlowFilterParametersHandle): number;
        getThreshold(self: DiffuseGlowFilterParametersHandle): number;
        setIntensity(self: DiffuseGlowFilterParametersHandle, intensity: number): void;
        setOpacity(self: DiffuseGlowFilterParametersHandle, opacity: number): void;
        setRadius(self: DiffuseGlowFilterParametersHandle, radius: number): void;
        setThreshold(self: DiffuseGlowFilterParametersHandle, threshold: number): void;
    }
    export const DiffuseGlowFilterParametersApi: DiffuseGlowFilterParametersApi;

    export interface DiffuseGlowFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): DiffuseGlowFilterRasterNodeHandle;
        getParameters(node: DiffuseGlowFilterRasterNodeHandle): DiffuseGlowFilterParametersHandle;
    }
    export const DiffuseGlowFilterRasterNodeApi: DiffuseGlowFilterRasterNodeApi;

    export interface DiffuseGlowFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: DiffuseGlowFilterParametersHandle): DiffuseGlowFilterRasterNodeDefinitionHandle;
        createDefault(): DiffuseGlowFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): DiffuseGlowFilterRasterNodeDefinitionHandle;
        getParameters(self: DiffuseGlowFilterRasterNodeDefinitionHandle): DiffuseGlowFilterParametersHandle;
        setParameters(self: DiffuseGlowFilterRasterNodeDefinitionHandle, parameters: DiffuseGlowFilterParametersHandle): void;
    }
    export const DiffuseGlowFilterRasterNodeDefinitionApi: DiffuseGlowFilterRasterNodeDefinitionApi;

    export interface DocumentApi {
        close(self: DocumentHandle): void;
        closeAsync(self: DocumentHandle, callback: (result: Error | null) => void): void;
        createFromOptions(option: NewDocumentOptionsHandle): DocumentHandle;
        createFromOptionsAsync(option: NewDocumentOptionsHandle, callback: (result: Error | null, documentRef: DocumentHandle | null) => void): void;
        createFromPreset(preset: DocumentPresetHandle, isLandscape: boolean): DocumentHandle;
        createFromPresetAsync(preset: DocumentPresetHandle, isLandscape: boolean, callback: (result: Error | null, documentRef: DocumentHandle | null) => void): void;
        createFromSnapshot(snapshot: DocumentSnapshotHandle): DocumentHandle;
        createFromSnapshotAsync(snapshot: DocumentSnapshotHandle, callback: (result: Error | null, documentRef: DocumentHandle | null) => void): void;
        enumerateFontNames(self: DocumentHandle, callback: (name: string, isInstalled: boolean) => EnumerationResult): void;
        enumerateOpen(callback: (documentRef: DocumentHandle) => EnumerationResult): void;
        enumerateSnapshots(self: DocumentHandle, callback: (snapshotRef: DocumentSnapshotHandle) => EnumerationResult): void;
        executeCommand(self: DocumentHandle, command: DocumentCommandHandle, preview: boolean): void;
        executeCommandAsync(self: DocumentHandle, command: DocumentCommandHandle, preview: boolean, callback: (result: Error | null) => void): void;
        export(self: DocumentHandle, path: string, options: FileExportOptionsHandle, exportAreaOrNull: FileExportAreaHandle | null, sizeOrNull: Size | null): DocumentExportRecordsHandle;
        exportAsync(self: DocumentHandle, path: string, options: FileExportOptionsHandle, exportAreaOrNull: FileExportAreaHandle | null, sizeOrNull: Size | null, callback: (result: Error | null, documentExportRecordsRef: DocumentExportRecordsHandle | null) => void): void;
        getColourProfile(self: DocumentHandle): ColourProfileHandle;
        getCurrent(): DocumentHandle;
        getCurrentAsync(callback: (result: Error | null, documentRef: DocumentHandle | null) => void): void;
        getCurrentSelection(self: DocumentHandle): SelectionHandle;
        getCurrentSnapshot(self: DocumentHandle): DocumentSnapshotHandle;
        getCurrentSnapshotHistoryIndex(self: DocumentHandle): number;
        getCurrentSnapshotIndex(self: DocumentHandle): number;
        getCurrentSpread(self: DocumentHandle): SpreadNodeHandle;
        getDpi(self: DocumentHandle): number;
        getFormat(self: DocumentHandle): RasterFormat;
        getHistory(self: DocumentHandle): DocumentHistoryHandle;
        getInsertionMode(self: DocumentHandle): InsertionMode;
        getMaskFormat(self: DocumentHandle): RasterFormat;
        getPath(self: DocumentHandle): string;
        getPersistentUuid(self: DocumentHandle): string;
        getRasterSelection(self: DocumentHandle): RasterSelectionHandle;
        getRootNode(self: DocumentHandle): DocumentNodeHandle;
        getSessionUuid(self: DocumentHandle): string;
        getSnapshot(self: DocumentHandle, index: number): DocumentSnapshotHandle;
        getSnapshotCount(self: DocumentHandle): number;
        getTitle(self: DocumentHandle): string;
        getUnitValueConverter(self: DocumentHandle): UnitValueConverterHandle;
        getUnits(self: DocumentHandle): UnitType;
        getViewDpi(self: DocumentHandle): number;
        isDirty(self: DocumentHandle): boolean;
        isEmbedded(self: DocumentHandle): boolean;
        isOpen(self: DocumentHandle): boolean;
        isReadOnly(self: DocumentHandle): boolean;
        isSameObject(self: DocumentHandle, other: DocumentHandle): boolean;
        load(path: string, optionsOrNull: LoadDocumentOptionsHandle | null): DocumentLoadResult;
        loadAsync(path: string, optionsOrNull: LoadDocumentOptionsHandle | null, callback: (err: Error | null, result: DocumentLoadResult | null) => void): void;
        loadFromResource(resource: ResourceHandle, optionsOrNull: LoadDocumentOptionsHandle | null): DocumentLoadResult;
        loadFromResourceAsync(resource: ResourceHandle, optionsOrNull: LoadDocumentOptionsHandle | null, callback: (err: Error | null, result: DocumentLoadResult | null) => void): void;
        mustSaveAs(self: DocumentHandle): boolean;
        needsSaving(self: DocumentHandle): boolean;
        save(self: DocumentHandle): void;
        saveAs(self: DocumentHandle, path: string): void;
        saveAsAsync(self: DocumentHandle, path: string, callback: (result: Error | null) => void): void;
        saveAsPackage(self: DocumentHandle, path: string, policy: PackageResourcesPolicy): void;
        saveAsPackageAsync(self: DocumentHandle, path: string, policy: PackageResourcesPolicy, callback: (result: Error | null) => void): void;
        saveAsync(self: DocumentHandle, callback: (result: Error | null) => void): void;
    }
    export const DocumentApi: DocumentApi;

    export interface DocumentExportRecordApi {
        getErrorMessage(self: DocumentExportRecordHandle): string;
        getPath(self: DocumentExportRecordHandle): string;
        getResult(self: DocumentExportRecordHandle): ErrorCode;
        getWarningMessage(self: DocumentExportRecordHandle): string;
        hasWarnings(self: DocumentExportRecordHandle): boolean;
    }
    export const DocumentExportRecordApi: DocumentExportRecordApi;

    export interface DocumentExportRecordsApi {
        enumerate(self: DocumentExportRecordsHandle, callback: (documentExportRecordRef: DocumentExportRecordHandle) => EnumerationResult): void;
        getCount(self: DocumentExportRecordsHandle): number;
    }
    export const DocumentExportRecordsApi: DocumentExportRecordsApi;

    export interface DocumentHistoryApi {
        canRedo(self: DocumentHistoryHandle): boolean;
        canUndo(self: DocumentHistoryHandle): boolean;
        enumerateItems(self: DocumentHistoryHandle, callback: (documentHistoryItemRef: DocumentHistoryItemHandle) => EnumerationResult): void;
        getItem(self: DocumentHistoryHandle, index: number): DocumentHistoryItemHandle;
        getRedoDescription(self: DocumentHistoryHandle): string;
        getSize(self: DocumentHistoryHandle): number;
        getUndoDescription(self: DocumentHistoryHandle): string;
        getUndoPosition(self: DocumentHistoryHandle): number;
    }
    export const DocumentHistoryApi: DocumentHistoryApi;

    export interface DocumentHistoryItemApi {
        dispose(self: DocumentHistoryItemHandle): void;
        getCommand(self: DocumentHistoryItemHandle): DocumentCommandHandle;
        getDescription(self: DocumentHistoryItemHandle): string;
        getThumbnail(self: DocumentHistoryItemHandle): RasterObjectHandle;
        hasAlternateFutures(self: DocumentHistoryItemHandle): boolean;
    }
    export const DocumentHistoryItemApi: DocumentHistoryItemApi;

    export interface DocumentNodeApi extends Omit<LogicalNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): DocumentNodeHandle;
        getBaselineGridInterface(self: DocumentNodeHandle): BaselineGridInterfaceHandle;
        getPageCount(self: DocumentNodeHandle): number;
        getSpreadCount(self: DocumentNodeHandle): number;
    }
    export const DocumentNodeApi: DocumentNodeApi;

    export interface DocumentPresetApi {
        enumerateAll(callback: (self: DocumentPresetHandle) => EnumerationResult): void;
        getBleed(self: DocumentPresetHandle): LTRB;
        getColourProfileName(self: DocumentPresetHandle): string;
        getCreateArtboard(self: DocumentPresetHandle): boolean;
        getDoublePageStart(self: DocumentPresetHandle): boolean;
        getDpi(self: DocumentPresetHandle): number;
        getDrawingScale(self: DocumentPresetHandle): DrawingScaleHandle;
        getFacing(self: DocumentPresetHandle): boolean;
        getHeight(self: DocumentPresetHandle): number;
        getImagePlacement(self: DocumentPresetHandle): ImagePlacement;
        getIsFavourite(self: DocumentPresetHandle): boolean;
        getIsMultiPage(self: DocumentPresetHandle): boolean;
        getIsTransparentBackground(self: DocumentPresetHandle): boolean;
        getMargins(self: DocumentPresetHandle): LTRB;
        getMarginsEnabled(self: DocumentPresetHandle): boolean;
        getName(self: DocumentPresetHandle): string;
        getRasterFormat(self: DocumentPresetHandle): RasterFormat;
        getUnits(self: DocumentPresetHandle): UnitType;
        getUseDrawingScale(self: DocumentPresetHandle): boolean;
        getVerticalStack(self: DocumentPresetHandle): boolean;
        getViewDpi(self: DocumentPresetHandle): number;
        getWidth(self: DocumentPresetHandle): number;
    }
    export const DocumentPresetApi: DocumentPresetApi;

    export interface DocumentPropertiesApi {
        clone(self: DocumentPropertiesHandle): DocumentPropertiesHandle;
        create(): DocumentPropertiesHandle;
        getAssignColourProfile(self: DocumentPropertiesHandle): boolean;
        getBleed(self: DocumentPropertiesHandle): LTRB;
        getBleedFill(self: DocumentPropertiesHandle): FillDescriptorHandle;
        getColourFormat(self: DocumentPropertiesHandle): RasterFormat;
        getColourProfile(self: DocumentPropertiesHandle): ColourProfileHandle;
        getDimensions(self: DocumentPropertiesHandle): Size;
        getDpi(self: DocumentPropertiesHandle): number;
        getDrawingScale(self: DocumentPropertiesHandle): DrawingScaleHandle;
        getImageResourcePolicy(self: DocumentPropertiesHandle): ImagePlacement;
        getIsFacingPages(self: DocumentPropertiesHandle): boolean;
        getIsFullSpreadStart(self: DocumentPropertiesHandle): boolean;
        getIsTransparent(self: DocumentPropertiesHandle): boolean;
        getIsVerticalStack(self: DocumentPropertiesHandle): boolean;
        getLinkTextFiles(self: DocumentPropertiesHandle): boolean;
        getPreserveTextStyles(self: DocumentPropertiesHandle): boolean;
        getResamplerType(self: DocumentPropertiesHandle): RasterResamplerType;
        getShouldReflowPages(self: DocumentPropertiesHandle): boolean;
        getUnits(self: DocumentPropertiesHandle): UnitType;
        setAssignColourProfile(self: DocumentPropertiesHandle, assignColourProfile: boolean): void;
        setBleed(self: DocumentPropertiesHandle, bleed: LTRB): void;
        setBleedFill(self: DocumentPropertiesHandle, bleedFill: FillDescriptorHandle): void;
        setColourFormatAndProfile(self: DocumentPropertiesHandle, format: RasterFormat, colourProfile: ColourProfileHandle): void;
        setDimensions(self: DocumentPropertiesHandle, dimensions: Size): void;
        setDpi(self: DocumentPropertiesHandle, dpi: number): void;
        setDrawingScale(self: DocumentPropertiesHandle, drawingScale: DrawingScaleHandle): void;
        setImageResourcePolicy(self: DocumentPropertiesHandle, imageResourcePolicy: ImagePlacement): void;
        setIsFacingPages(self: DocumentPropertiesHandle, isFacingPages: boolean): void;
        setIsFullSpreadStart(self: DocumentPropertiesHandle, isFullSpreadStart: boolean): void;
        setIsTransparent(self: DocumentPropertiesHandle, isTransparent: boolean): void;
        setIsVerticalStack(self: DocumentPropertiesHandle, isVerticalStack: boolean): void;
        setLinkTextFiles(self: DocumentPropertiesHandle, linkTextFiles: boolean): void;
        setPreserveTextStyles(self: DocumentPropertiesHandle, preserveTextStyles: boolean): void;
        setResamplerType(self: DocumentPropertiesHandle, resamplerType: RasterResamplerType): void;
        setShouldReflowPages(self: DocumentPropertiesHandle, shouldReflowPages: boolean): void;
        setUnits(self: DocumentPropertiesHandle, unitType: UnitType): void;
    }
    export const DocumentPropertiesApi: DocumentPropertiesApi;

    export interface DocumentSnapshotApi {
        getDescription(self: DocumentSnapshotHandle): string;
        getFormat(self: DocumentSnapshotHandle): RasterFormat;
    }
    export const DocumentSnapshotApi: DocumentSnapshotApi;

    export interface DrawingScaleApi {
        create(left: UnitValue, right: UnitValue): DrawingScaleHandle;
        createFromIntegers(left: number, right: number, simplifyFaction: boolean): DrawingScaleHandle;
        createFromString(scaleString: string, simplifyFaction: boolean, simplifyDecimalPlaces: number, allowOneToOne: boolean): DrawingScaleHandle;
        enumerateDefaults(unitType: UnitType, callback: (drawingScale: DrawingScaleHandle) => EnumerationResult): void;
        getAsString(self: DrawingScaleHandle, useTightFormat: boolean, showUnits: boolean, indicateApproximations: boolean): string;
        getLeftValue(self: DrawingScaleHandle): UnitValue;
        getRightValue(self: DrawingScaleHandle): UnitValue;
    }
    export const DrawingScaleApi: DrawingScaleApi;

    export interface DustAndScratchFilterParametersApi {
        create(): DustAndScratchFilterParametersHandle;
        getIsChannelTolerance(self: DustAndScratchFilterParametersHandle): boolean;
        getRadius(self: DustAndScratchFilterParametersHandle): number;
        getTolerance(self: DustAndScratchFilterParametersHandle): number;
        setIsChannelTolerance(self: DustAndScratchFilterParametersHandle, isChannelTolerance: boolean): void;
        setRadius(self: DustAndScratchFilterParametersHandle, radius: number): void;
        setTolerance(self: DustAndScratchFilterParametersHandle, tolerance: number): void;
    }
    export const DustAndScratchFilterParametersApi: DustAndScratchFilterParametersApi;

    export interface DustAndScratchFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): DustAndScratchFilterRasterNodeHandle;
        getParameters(node: DustAndScratchFilterRasterNodeHandle): DustAndScratchFilterParametersHandle;
    }
    export const DustAndScratchFilterRasterNodeApi: DustAndScratchFilterRasterNodeApi;

    export interface DustAndScratchFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: DustAndScratchFilterParametersHandle): DustAndScratchFilterRasterNodeDefinitionHandle;
        createDefault(): DustAndScratchFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): DustAndScratchFilterRasterNodeDefinitionHandle;
        getParameters(node: DustAndScratchFilterRasterNodeDefinitionHandle): DustAndScratchFilterParametersHandle;
        setParameters(node: DustAndScratchFilterRasterNodeDefinitionHandle, parameters: DustAndScratchFilterParametersHandle): void;
    }
    export const DustAndScratchFilterRasterNodeDefinitionApi: DustAndScratchFilterRasterNodeDefinitionApi;

    export interface EditabilityInterfaceApi {
        fromNode(node: NodeHandle): EditabilityInterfaceHandle;
        getNode(self: EditabilityInterfaceHandle): NodeHandle;
        isEditable(self: EditabilityInterfaceHandle): boolean;
        isLocalEditable(self: EditabilityInterfaceHandle): boolean;
        isMasterEditable(self: EditabilityInterfaceHandle): boolean;
    }
    export const EditabilityInterfaceApi: EditabilityInterfaceApi;

    export interface EmbeddedDocumentNodeApi extends Omit<PhysicalNodeApi, "fromNode"> {
        canEditEmbeddedImage(self: EmbeddedDocumentNodeHandle): boolean;
        canMakeLinked(self: EmbeddedDocumentNodeHandle): boolean;
        canSetPDFPassthrough(self: EmbeddedDocumentNodeHandle): boolean;
        embeddedDocumentHasArtboards(self: EmbeddedDocumentNodeHandle): boolean;
        embeddedDocumentHasLayers(self: EmbeddedDocumentNodeHandle): boolean;
        embeddedDocumentHasPageBoundingBoxes(self: EmbeddedDocumentNodeHandle): boolean;
        embeddedDocumentHasSpreads(self: EmbeddedDocumentNodeHandle): boolean;
        enumerateArtboards(self: EmbeddedDocumentNodeHandle, callback: (artboardDescription: string, artboardID: string) => EnumerationResult): void;
        enumerateLayerVisibilities(self: EmbeddedDocumentNodeHandle, callback: (layerName: string, isVisible: boolean) => EnumerationResult): void;
        enumeratePageBoundingBoxes(self: EmbeddedDocumentNodeHandle, callback: (pageBoundingBox: PageBoundingBoxType, pageBoundingBoxID: string) => EnumerationResult): void;
        enumerateSpreads(self: EmbeddedDocumentNodeHandle, includeMasters: boolean, callback: (spreadDescription: string, spreadID: string) => EnumerationResult): void;
        fromNode(node: NodeHandle): EmbeddedDocumentNodeHandle;
        getImageResourceInterface(self: EmbeddedDocumentNodeHandle): ImageResourceInterfaceHandle;
        getLoadDocumentOptions(self: EmbeddedDocumentNodeHandle): LoadDocumentOptionsHandle;
        getOriginalHostDPI(self: EmbeddedDocumentNodeHandle): number;
        getPDFPassthrough(self: EmbeddedDocumentNodeHandle): boolean;
        getPageBoundingBoxType(self: EmbeddedDocumentNodeHandle): PageBoundingBoxType;
        getRasterDPI(self: EmbeddedDocumentNodeHandle): number;
        getSelectedArtboardId(self: EmbeddedDocumentNodeHandle): string;
        getSelectedArtboardOffset(self: EmbeddedDocumentNodeHandle): Point;
        getSelectedSpreadId(self: EmbeddedDocumentNodeHandle): string;
        getTransparencyInterface(self: EmbeddedDocumentNodeHandle): TransparencyInterfaceHandle;
        isAffinityFile(self: EmbeddedDocumentNodeHandle): boolean;
        isArtboardDoc(self: EmbeddedDocumentNodeHandle): boolean;
        isArtboardSelected(self: EmbeddedDocumentNodeHandle): boolean;
        needsPassword(self: EmbeddedDocumentNodeHandle): boolean;
        shouldAllowSelectDocument(self: EmbeddedDocumentNodeHandle): boolean;
    }
    export const EmbeddedDocumentNodeApi: EmbeddedDocumentNodeApi;

    export interface EnclosureRasterNodeApi extends Omit<RasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): EnclosureRasterNodeHandle;
    }
    export const EnclosureRasterNodeApi: EnclosureRasterNodeApi;

    export interface EnclosureRasterNodeDefinitionApi extends Omit<RasterNodeDefinitionApi, "fromNodeDefinition"> {
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): EnclosureRasterNodeDefinitionHandle;
        getExtendEmpty(self: EnclosureRasterNodeDefinitionHandle): boolean;
        setExtendEmpty(self: EnclosureRasterNodeDefinitionHandle, extendEmpty: boolean): void;
    }
    export const EnclosureRasterNodeDefinitionApi: EnclosureRasterNodeDefinitionApi;

    export interface ExportConfigApi {
        appendFormat(self: ExportConfigHandle, exportFormat: ExportFormatHandle): void;
        deleteFormat(self: ExportConfigHandle, index: number): void;
        enumerateFormats(self: ExportConfigHandle, callback: (exportFormat: ExportFormatHandle) => EnumerationResult): void;
        getFormatCount(self: ExportConfigHandle): number;
        replaceFormat(self: ExportConfigHandle, index: number, exportFormat: ExportFormatHandle): void;
    }
    export const ExportConfigApi: ExportConfigApi;

    export interface ExportFormatApi {
        appendSize(self: ExportFormatHandle, exportSize: ExportSizeHandle): void;
        createWithFileExportOptions(fileExportOptions: FileExportOptionsHandle): ExportFormatHandle;
        deleteSize(self: ExportFormatHandle, index: number): void;
        enumerateSizes(self: ExportFormatHandle, callback: (exportSize: ExportSizeHandle) => EnumerationResult): void;
        getSizeCount(self: ExportFormatHandle): number;
        replaceSize(self: ExportFormatHandle, index: number, exportSize: ExportSizeHandle): void;
    }
    export const ExportFormatApi: ExportFormatApi;

    export interface ExportScaleApi {
        createWithHeight(height: number): ExportScaleHandle;
        createWithMultiplier(multiplier: number): ExportScaleHandle;
        createWithMultiplierSquare(multiplier: number, size: number): ExportScaleHandle;
        createWithPreset(scalePreset: ExportScalePreset): ExportScaleHandle;
        createWithSquare(size: number): ExportScaleHandle;
        createWithWidth(width: number): ExportScaleHandle;
        createWithWidthHeight(width: number, height: number): ExportScaleHandle;
        getHeight(self: ExportScaleHandle): number;
        getMultiplier(self: ExportScaleHandle): number;
        getSize(self: ExportScaleHandle): number;
        getSizeType(self: ExportScaleHandle): ExportScaleSizeType;
        getWidth(self: ExportScaleHandle): number;
        hasMultiplier(self: ExportScaleHandle): boolean;
    }
    export const ExportScaleApi: ExportScaleApi;

    export interface ExportSizeApi {
        createWithExportScale(exportScale: ExportScaleHandle): ExportSizeHandle;
        getExportScale(self: ExportSizeHandle): ExportScaleHandle;
        setExportScale(self: ExportSizeHandle, exportScale: ExportScaleHandle): void;
    }
    export const ExportSizeApi: ExportSizeApi;

    export interface ExportableInterfaceApi {
        fromNode(node: NodeHandle): ExportableInterfaceHandle;
        getExportConfig(self: ExportableInterfaceHandle): ExportConfigHandle;
        getNode(self: ExportableInterfaceHandle): NodeHandle;
    }
    export const ExportableInterfaceApi: ExportableInterfaceApi;

    export interface ExposureAdjustmentParametersApi {
        create(): ExposureAdjustmentParametersHandle;
        getExposure(self: ExposureAdjustmentParametersHandle): number;
        setExposure(self: ExposureAdjustmentParametersHandle, exposure: number): void;
    }
    export const ExposureAdjustmentParametersApi: ExposureAdjustmentParametersApi;

    export interface ExposureAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ExposureAdjustmentRasterNodeHandle;
        getParameters(node: ExposureAdjustmentRasterNodeHandle): ExposureAdjustmentParametersHandle;
    }
    export const ExposureAdjustmentRasterNodeApi: ExposureAdjustmentRasterNodeApi;

    export interface ExposureAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: ExposureAdjustmentParametersHandle): ExposureAdjustmentRasterNodeDefinitionHandle;
        createDefault(): ExposureAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ExposureAdjustmentRasterNodeDefinitionHandle;
        getParameters(self: ExposureAdjustmentRasterNodeDefinitionHandle): ExposureAdjustmentParametersHandle;
        setParameters(self: ExposureAdjustmentRasterNodeDefinitionHandle, parameters: ExposureAdjustmentParametersHandle): void;
    }
    export const ExposureAdjustmentRasterNodeDefinitionApi: ExposureAdjustmentRasterNodeDefinitionApi;

    export interface FieldBlurFilterParametersApi {
        addBlurItem(self: FieldBlurFilterParametersHandle, blurItemParameters: FieldBlurItemParameters): number;
        create(): FieldBlurFilterParametersHandle;
        deleteBlurItem(self: FieldBlurFilterParametersHandle, index: number): void;
        enumerateBlurItems(self: FieldBlurFilterParametersHandle, callback: (index: number, blurItemParameters: FieldBlurItemParameters) => EnumerationResult): void;
        getBlurItem(self: FieldBlurFilterParametersHandle, index: number): FieldBlurItemParameters;
        getBlurItemCount(self: FieldBlurFilterParametersHandle): number;
        getGlobalRadius(self: FieldBlurFilterParametersHandle): number;
        setGlobalRadius(self: FieldBlurFilterParametersHandle, radius: number): void;
    }
    export const FieldBlurFilterParametersApi: FieldBlurFilterParametersApi;

    export interface FieldBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): FieldBlurFilterRasterNodeHandle;
        getParameters(node: FieldBlurFilterRasterNodeHandle): FieldBlurFilterParametersHandle;
    }
    export const FieldBlurFilterRasterNodeApi: FieldBlurFilterRasterNodeApi;

    export interface FieldBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: FieldBlurFilterParametersHandle): FieldBlurFilterRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): FieldBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): FieldBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: FieldBlurFilterRasterNodeDefinitionHandle): FieldBlurFilterParametersHandle;
        setParameters(self: FieldBlurFilterRasterNodeDefinitionHandle, parameters: FieldBlurFilterParametersHandle): void;
    }
    export const FieldBlurFilterRasterNodeDefinitionApi: FieldBlurFilterRasterNodeDefinitionApi;

    export interface FileExportAreaApi {
        clone(self: FileExportAreaHandle): FileExportAreaHandle;
        createForArtboard(artboard: ArtboardInterfaceHandle): FileExportAreaHandle;
        createForCurrentPage(): FileExportAreaHandle;
        createForCurrentSpread(): FileExportAreaHandle;
        createForPages(pages: string): FileExportAreaHandle;
        createForSelection(selectionOrNull: SelectionHandle | null): FileExportAreaHandle;
        createForSelectionArea(selectionOrNull: SelectionHandle | null): FileExportAreaHandle;
        createForSpreads(pages: string): FileExportAreaHandle;
        createForWholeDocument(): FileExportAreaHandle;
    }
    export const FileExportAreaApi: FileExportAreaApi;

    export interface FileExportOptionsApi {
        createForCanvaExport(dpi: number): FileExportOptionsHandle;
        createWithPresetName(presetName: string): FileExportOptionsHandle;
        enumeratePresetNames(callback: (presetNameRef: string) => EnumerationResult): void;
    }
    export const FileExportOptionsApi: FileExportOptionsApi;

    export interface FillMeshSubSelectionApi extends SubSelectionApi {
        enumerateItems(self: FillMeshSubSelectionHandle, callback: (meshSubSelectionItem: MeshSubSelectionItem) => EnumerationResult): void;
        fromSubSelection(subSelection: SubSelectionHandle): FillMeshSubSelectionHandle;
        getItemCount(self: FillMeshSubSelectionHandle): number;
        isEmpty(self: FillMeshSubSelectionHandle): boolean;
    }
    export const FillMeshSubSelectionApi: FillMeshSubSelectionApi;

    export interface FillSubSelectionApi extends SubSelectionApi {
        clone(self: FillSubSelectionHandle): FillSubSelectionHandle;
        cloneAsFillSubSelection(self: FillSubSelectionHandle): FillSubSelectionHandle;
        fromSubSelection(subSelection: SubSelectionHandle): FillSubSelectionHandle;
        getIndex(self: FillSubSelectionHandle): number;
    }
    export const FillSubSelectionApi: FillSubSelectionApi;

    export interface FilterRasterNodeApi extends Omit<EnclosureRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): FilterRasterNodeHandle;
        getPreserveAlpha(node: FilterRasterNodeHandle): boolean;
    }
    export const FilterRasterNodeApi: FilterRasterNodeApi;

    export interface FilterRasterNodeDefinitionApi extends Omit<EnclosureRasterNodeDefinitionApi, "fromNodeDefinition"> {
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): FilterRasterNodeDefinitionHandle;
        getPreserveAlpha(self: FilterRasterNodeDefinitionHandle): boolean;
        setPreserveAlpha(self: FilterRasterNodeDefinitionHandle, preserve: boolean): void;
    }
    export const FilterRasterNodeDefinitionApi: FilterRasterNodeDefinitionApi;

    export interface FrameTextNodeApi extends Omit<TextNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): FrameTextNodeHandle;
    }
    export const FrameTextNodeApi: FrameTextNodeApi;

    export interface FrameTextNodeDefinitionApi extends Omit<TextNodeDefinitionApi, "fromNodeDefinition"> {
        createFromStoryBuilder(frameBox: Rectangle, storyBuilder: StoryBuilderHandle): FrameTextNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): FrameTextNodeDefinitionHandle;
    }
    export const FrameTextNodeDefinitionApi: FrameTextNodeDefinitionApi;

    export interface GaussianBlurFilterParametersApi {
        create(): GaussianBlurFilterParametersHandle;
        getRadius(self: GaussianBlurFilterParametersHandle): number;
        setRadius(self: GaussianBlurFilterParametersHandle, radius: number): void;
    }
    export const GaussianBlurFilterParametersApi: GaussianBlurFilterParametersApi;

    export interface GaussianBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): GaussianBlurFilterRasterNodeHandle;
        getParameters(node: GaussianBlurFilterRasterNodeHandle): GaussianBlurFilterParametersHandle;
    }
    export const GaussianBlurFilterRasterNodeApi: GaussianBlurFilterRasterNodeApi;

    export interface GaussianBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: GaussianBlurFilterParametersHandle): GaussianBlurFilterRasterNodeDefinitionHandle;
        createDefault(): GaussianBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): GaussianBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: GaussianBlurFilterRasterNodeDefinitionHandle): GaussianBlurFilterParametersHandle;
        setParameters(self: GaussianBlurFilterRasterNodeDefinitionHandle, parameters: GaussianBlurFilterParametersHandle): void;
    }
    export const GaussianBlurFilterRasterNodeDefinitionApi: GaussianBlurFilterRasterNodeDefinitionApi;

    export interface GroupNodeApi extends Omit<LogicalNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): GroupNodeHandle;
    }
    export const GroupNodeApi: GroupNodeApi;

    export interface HSLShiftAdjustmentParametersApi {
        create(): HSLShiftAdjustmentParametersHandle;
        enumerateChannelColourRanges(self: HSLShiftAdjustmentParametersHandle, callback: (channel: number, colourRange: HSLShiftAdjustmentColourRange) => EnumerationResult): void;
        enumerateChannelParameters(self: HSLShiftAdjustmentParametersHandle, callback: (channel: number, parameters: HSLShiftAdjustmentChannelParameters) => EnumerationResult): void;
        getChannelColourRange(self: HSLShiftAdjustmentParametersHandle, channel: number): HSLShiftAdjustmentColourRange;
        getChannelCount(self: HSLShiftAdjustmentParametersHandle): number;
        getChannelParameters(self: HSLShiftAdjustmentParametersHandle, channel: number): HSLShiftAdjustmentChannelParameters;
        getMasterParameters(self: HSLShiftAdjustmentParametersHandle): HSLShiftAdjustmentChannelParameters;
        getUseHSV(self: HSLShiftAdjustmentParametersHandle): boolean;
        setChannelColourRange(self: HSLShiftAdjustmentParametersHandle, channel: number, colourRange: HSLShiftAdjustmentColourRange): void;
        setChannelParameters(self: HSLShiftAdjustmentParametersHandle, channel: number, parameters: HSLShiftAdjustmentChannelParameters): void;
        setMasterParameters(self: HSLShiftAdjustmentParametersHandle, parameters: HSLShiftAdjustmentChannelParameters): void;
        setUseHSV(self: HSLShiftAdjustmentParametersHandle, useHSV: boolean): void;
    }
    export const HSLShiftAdjustmentParametersApi: HSLShiftAdjustmentParametersApi;

    export interface HSLShiftAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): HSLShiftAdjustmentRasterNodeHandle;
        getParameters(node: HSLShiftAdjustmentRasterNodeHandle): HSLShiftAdjustmentParametersHandle;
    }
    export const HSLShiftAdjustmentRasterNodeApi: HSLShiftAdjustmentRasterNodeApi;

    export interface HSLShiftAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: HSLShiftAdjustmentParametersHandle): HSLShiftAdjustmentRasterNodeDefinitionHandle;
        createDefault(): HSLShiftAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): HSLShiftAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: HSLShiftAdjustmentRasterNodeDefinitionHandle): HSLShiftAdjustmentParametersHandle;
        setParameters(node: HSLShiftAdjustmentRasterNodeDefinitionHandle, parameters: HSLShiftAdjustmentParametersHandle): void;
    }
    export const HSLShiftAdjustmentRasterNodeDefinitionApi: HSLShiftAdjustmentRasterNodeDefinitionApi;

    export interface HalftoneFilterParametersApi {
        create(): HalftoneFilterParametersHandle;
        getCellSize(self: HalftoneFilterParametersHandle): number;
        getContrast(self: HalftoneFilterParametersHandle): number;
        getDotType(self: HalftoneFilterParametersHandle): HalftoneDotType;
        getGreyComponentReplacement(self: HalftoneFilterParametersHandle): number;
        getScreenAngle(self: HalftoneFilterParametersHandle): number;
        getScreenType(self: HalftoneFilterParametersHandle): HalftoneScreenType;
        getUnderColourRemoval(self: HalftoneFilterParametersHandle): number;
        setCellSize(self: HalftoneFilterParametersHandle, cellSize: number): void;
        setContrast(self: HalftoneFilterParametersHandle, contrast: number): void;
        setDotType(self: HalftoneFilterParametersHandle, dotType: HalftoneDotType): void;
        setGreyComponentReplacement(self: HalftoneFilterParametersHandle, greyComponentReplacement: number): void;
        setScreenAngle(self: HalftoneFilterParametersHandle, screenAngle: number): void;
        setScreenType(self: HalftoneFilterParametersHandle, screenType: HalftoneScreenType): void;
        setUnderColourRemoval(self: HalftoneFilterParametersHandle, underColourRemoval: number): void;
    }
    export const HalftoneFilterParametersApi: HalftoneFilterParametersApi;

    export interface HalftoneFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): HalftoneFilterRasterNodeHandle;
        getParameters(node: HalftoneFilterRasterNodeHandle): HalftoneFilterParametersHandle;
    }
    export const HalftoneFilterRasterNodeApi: HalftoneFilterRasterNodeApi;

    export interface HalftoneFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: HalftoneFilterParametersHandle): HalftoneFilterRasterNodeDefinitionHandle;
        createDefault(): HalftoneFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): HalftoneFilterRasterNodeDefinitionHandle;
        getParameters(self: HalftoneFilterRasterNodeDefinitionHandle): HalftoneFilterParametersHandle;
        setParameters(self: HalftoneFilterRasterNodeDefinitionHandle, parameters: HalftoneFilterParametersHandle): void;
    }
    export const HalftoneFilterRasterNodeDefinitionApi: HalftoneFilterRasterNodeDefinitionApi;

    export interface HighPassFilterParametersApi {
        create(): HighPassFilterParametersHandle;
        getIsMonochrome(self: HighPassFilterParametersHandle): boolean;
        getRadius(self: HighPassFilterParametersHandle): number;
        setIsMonochrome(self: HighPassFilterParametersHandle, isMonochrome: boolean): void;
        setRadius(self: HighPassFilterParametersHandle, radius: number): void;
    }
    export const HighPassFilterParametersApi: HighPassFilterParametersApi;

    export interface HighPassFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): HighPassFilterRasterNodeHandle;
        getParameters(node: HighPassFilterRasterNodeHandle): HighPassFilterParametersHandle;
    }
    export const HighPassFilterRasterNodeApi: HighPassFilterRasterNodeApi;

    export interface HighPassFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: HighPassFilterParametersHandle): HighPassFilterRasterNodeDefinitionHandle;
        createDefault(): HighPassFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): HighPassFilterRasterNodeDefinitionHandle;
        getParameters(node: HighPassFilterRasterNodeDefinitionHandle): HighPassFilterParametersHandle;
        setParameters(node: HighPassFilterRasterNodeDefinitionHandle, parameters: HighPassFilterParametersHandle): void;
    }
    export const HighPassFilterRasterNodeDefinitionApi: HighPassFilterRasterNodeDefinitionApi;

    export interface ImageNodeApi extends Omit<VectorNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ImageNodeHandle;
        getBitmapBrushFillDescriptor(self: ImageNodeHandle): FillDescriptorHandle;
        getExtendType(self: ImageNodeHandle): RasterExtendType;
        getImageResourceInterface(self: ImageNodeHandle): ImageResourceInterfaceHandle;
        getLastRendered(self: ImageNodeHandle): number;
        getRasterInterface(self: ImageNodeHandle): RasterInterfaceHandle;
        getStockAuthor(self: ImageNodeHandle): string;
        getStockURL(self: ImageNodeHandle): string;
        getStockUserProfileURL(self: ImageNodeHandle): string;
        getUpsamplerType(self: ImageNodeHandle): RasterResamplerType;
        isKOnly(self: ImageNodeHandle): boolean;
    }
    export const ImageNodeApi: ImageNodeApi;

    export interface ImageNodeDefinitionApi extends Omit<VectorNodeDefinitionApi, "fromNodeDefinition"> {
        create(format: RasterFormat): ImageNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ImageNodeDefinitionHandle;
        getBitmap(self: ImageNodeDefinitionHandle): RasterObjectHandle;
        setBitmap(self: ImageNodeDefinitionHandle, bitmap: RasterObjectHandle): void;
    }
    export const ImageNodeDefinitionApi: ImageNodeDefinitionApi;

    export interface ImageResourceInterfaceApi {
        canEditOriginalImage(self: ImageResourceInterfaceHandle): boolean;
        createFileTypeName(self: ImageResourceInterfaceHandle): string;
        fromNode(nodeHandle: NodeHandle): ImageResourceInterfaceHandle;
        getArtboard(self: ImageResourceInterfaceHandle): string;
        getColourFormat(self: ImageResourceInterfaceHandle, allowRemote: boolean): RasterFormat;
        getFileType(self: ImageResourceInterfaceHandle): FileType;
        getFileTypeName(self: ImageResourceInterfaceHandle): string;
        getICCProfile(self: ImageResourceInterfaceHandle): string;
        getImageFilePath(self: ImageResourceInterfaceHandle): string;
        getImageFileSize(self: ImageResourceInterfaceHandle, asBigInt: boolean): number;
        getImagePlacement(self: ImageResourceInterfaceHandle): ImagePlacement;
        getLargeThumbnail(self: ImageResourceInterfaceHandle, format: RasterFormat, colourProfileSet: ColourProfileSetHandle): RasterObjectHandle;
        getMasterPage(self: ImageResourceInterfaceHandle): string;
        getModifiedTime(self: ImageResourceInterfaceHandle, asBigInt: boolean): number;
        getNode(self: ImageResourceInterfaceHandle): NodeHandle;
        getOriginalDPI(self: ImageResourceInterfaceHandle): number;
        getOriginalSize(self: ImageResourceInterfaceHandle): Size;
        getPage(self: ImageResourceInterfaceHandle): number;
        getPlacedSize(self: ImageResourceInterfaceHandle): Size;
        getResourceNode(self: ImageResourceInterfaceHandle): NodeHandle;
        getSmallThumbnail(self: ImageResourceInterfaceHandle, format: RasterFormat, colourProfileSet: ColourProfileSetHandle): RasterObjectHandle;
        isOnArtboard(self: ImageResourceInterfaceHandle): boolean;
        saveOriginalFile(self: ImageResourceInterfaceHandle, path: string): string;
    }
    export const ImageResourceInterfaceApi: ImageResourceInterfaceApi;

    export interface InvertAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): InvertAdjustmentRasterNodeHandle;
    }
    export const InvertAdjustmentRasterNodeApi: InvertAdjustmentRasterNodeApi;

    export interface InvertAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(): InvertAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): InvertAdjustmentRasterNodeDefinitionHandle;
    }
    export const InvertAdjustmentRasterNodeDefinitionApi: InvertAdjustmentRasterNodeDefinitionApi;

    export interface LayerEffectsInterfaceApi {
        enumerateEffects(self: LayerEffectsInterfaceHandle, callback: (layerEffect: LayerEffectHandle) => EnumerationResult): void;
        fromNode(node: NodeHandle): LayerEffectsInterfaceHandle;
        getEffect(self: LayerEffectsInterfaceHandle, index: number): LayerEffectHandle;
        getEffectCount(self: LayerEffectsInterfaceHandle): number;
        getNode(self: LayerEffectsInterfaceHandle): NodeHandle;
        hasActiveEffects(self: LayerEffectsInterfaceHandle): boolean;
        hasAnyVisibleEffects(self: LayerEffectsInterfaceHandle): boolean;
        isScaleWithObject(self: LayerEffectsInterfaceHandle): boolean;
    }
    export const LayerEffectsInterfaceApi: LayerEffectsInterfaceApi;

    export interface LensBlurFilterParametersApi {
        create(): LensBlurFilterParametersHandle;
        getBladeCurvature(self: LensBlurFilterParametersHandle): number;
        getBloomColour(self: LensBlurFilterParametersHandle): number;
        getBloomFactor(self: LensBlurFilterParametersHandle): number;
        getBloomThreshold(self: LensBlurFilterParametersHandle): number;
        getNumberOfBlades(self: LensBlurFilterParametersHandle): number;
        getRadius(self: LensBlurFilterParametersHandle): number;
        setBladeCurvature(self: LensBlurFilterParametersHandle, bladeCurvature: number): void;
        setBloomColour(self: LensBlurFilterParametersHandle, bloomColour: number): void;
        setBloomFactor(self: LensBlurFilterParametersHandle, bloomFactor: number): void;
        setBloomThreshold(self: LensBlurFilterParametersHandle, bloomThreshold: number): void;
        setNumberOfBlades(self: LensBlurFilterParametersHandle, numberOfBlades: number): void;
        setRadius(self: LensBlurFilterParametersHandle, radius: number): void;
    }
    export const LensBlurFilterParametersApi: LensBlurFilterParametersApi;

    export interface LensBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): LensBlurFilterRasterNodeHandle;
        getParameters(node: LensBlurFilterRasterNodeHandle): LensBlurFilterParametersHandle;
    }
    export const LensBlurFilterRasterNodeApi: LensBlurFilterRasterNodeApi;

    export interface LensBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: LensBlurFilterParametersHandle): LensBlurFilterRasterNodeDefinitionHandle;
        createDefault(): LensBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): LensBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: LensBlurFilterRasterNodeDefinitionHandle): LensBlurFilterParametersHandle;
        setParameters(self: LensBlurFilterRasterNodeDefinitionHandle, parameters: LensBlurFilterParametersHandle): void;
    }
    export const LensBlurFilterRasterNodeDefinitionApi: LensBlurFilterRasterNodeDefinitionApi;

    export interface LevelsAdjustmentParametersApi {
        create(): LevelsAdjustmentParametersHandle;
        enumerateChannelParameters(self: LevelsAdjustmentParametersHandle, callback: (channel: number, parameters: LevelsAdjustmentChannelParameters) => EnumerationResult): void;
        getChannelParameters(self: LevelsAdjustmentParametersHandle, channel: number): LevelsAdjustmentChannelParameters;
        getChannelParametersCount(self: LevelsAdjustmentParametersHandle): number;
        getMasterParameters(self: LevelsAdjustmentParametersHandle): LevelsAdjustmentChannelParameters;
        setChannelParameters(self: LevelsAdjustmentParametersHandle, channel: number, parameters: LevelsAdjustmentChannelParameters): void;
        setMasterParameters(self: LevelsAdjustmentParametersHandle, parameters: LevelsAdjustmentChannelParameters): void;
    }
    export const LevelsAdjustmentParametersApi: LevelsAdjustmentParametersApi;

    export interface LevelsAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): LevelsAdjustmentRasterNodeHandle;
        getColourSpace(node: LevelsAdjustmentRasterNodeHandle): ColourSpaceType;
        getParameters(node: LevelsAdjustmentRasterNodeHandle): LevelsAdjustmentParametersHandle;
    }
    export const LevelsAdjustmentRasterNodeApi: LevelsAdjustmentRasterNodeApi;

    export interface LevelsAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: LevelsAdjustmentParametersHandle, colourSpace: ColourSpaceType): LevelsAdjustmentRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): LevelsAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): LevelsAdjustmentRasterNodeDefinitionHandle;
        getColourSpace(node: LevelsAdjustmentRasterNodeDefinitionHandle): ColourSpaceType;
        getParameters(node: LevelsAdjustmentRasterNodeDefinitionHandle): LevelsAdjustmentParametersHandle;
        setColourSpace(node: LevelsAdjustmentRasterNodeDefinitionHandle, colourSpace: ColourSpaceType): void;
        setParameters(node: LevelsAdjustmentRasterNodeDefinitionHandle, parameters: LevelsAdjustmentParametersHandle): void;
    }
    export const LevelsAdjustmentRasterNodeDefinitionApi: LevelsAdjustmentRasterNodeDefinitionApi;

    export interface LineFillMeshSubSelectionApi extends SubSelectionApi {
        enumerateItems(self: LineFillMeshSubSelectionHandle, callback: (meshSubSelectionItem: MeshSubSelectionItem) => EnumerationResult): void;
        fromSubSelection(subSelection: SubSelectionHandle): LineFillMeshSubSelectionHandle;
        getItemCount(self: LineFillMeshSubSelectionHandle): number;
        isEmpty(self: LineFillMeshSubSelectionHandle): boolean;
    }
    export const LineFillMeshSubSelectionApi: LineFillMeshSubSelectionApi;

    export interface LineFillSubSelectionApi extends SubSelectionApi {
        clone(self: LineFillSubSelectionHandle): LineFillSubSelectionHandle;
        cloneAsLineFillSubSelection(self: LineFillSubSelectionHandle): LineFillSubSelectionHandle;
        fromSubSelection(subSelection: SubSelectionHandle): LineFillSubSelectionHandle;
        getIndex(self: LineFillSubSelectionHandle): number;
    }
    export const LineFillSubSelectionApi: LineFillSubSelectionApi;

    export interface LineStyleInterfaceApi {
        enumerateDescriptors(self: LineStyleInterfaceHandle, obeyScaleWithObject: boolean, callback: (fillDescriptorRef: FillDescriptorHandle, lineStyleDescriptorRef: LineStyleDescriptorHandle) => EnumerationResult): void;
        enumerateFillDescriptors(self: LineStyleInterfaceHandle, obeyScaleWithObject: boolean, callback: (fillDescriptorRef: FillDescriptorHandle) => EnumerationResult): void;
        enumerateLineStyleDescriptors(self: LineStyleInterfaceHandle, callback: (lineStyleDescriptorRef: LineStyleDescriptorHandle) => EnumerationResult): void;
        fromNode(node: NodeHandle): LineStyleInterfaceHandle;
        getContentType(self: LineStyleInterfaceHandle): ContentType;
        getCurrentDescriptors(self: LineStyleInterfaceHandle, obeyScaleWithObject: boolean): LineDescriptors;
        getCurrentFillDescriptor(self: LineStyleInterfaceHandle, obeyScaleWithObject: boolean): FillDescriptorHandle;
        getCurrentIndex(self: LineStyleInterfaceHandle): number;
        getCurrentLineStyleDescriptor(self: LineStyleInterfaceHandle): LineStyleDescriptorHandle;
        getDescriptorCount(self: LineStyleInterfaceHandle): number;
        getDescriptors(self: LineStyleInterfaceHandle, index: number, obeyScaleWithObject: boolean): LineDescriptors;
        getDomainTransform(self: LineStyleInterfaceHandle): Transform;
        getFillDescriptor(self: LineStyleInterfaceHandle, index: number, obeyScaleWithObject: boolean): FillDescriptorHandle;
        getLineStyleDescriptor(self: LineStyleInterfaceHandle, index: number): LineStyleDescriptorHandle;
        getNode(self: LineStyleInterfaceHandle): NodeHandle;
        getScalarDomainTransform(self: LineStyleInterfaceHandle): Transform;
        isLineStyleVisible(self: LineStyleInterfaceHandle): boolean;
        isNoFill(self: LineStyleInterfaceHandle): boolean;
    }
    export const LineStyleInterfaceApi: LineStyleInterfaceApi;

    export interface LoadDocumentOptionsApi {
        clone(self: LoadDocumentOptionsHandle): LoadDocumentOptionsHandle;
        cloneAsLoadDocumentOptions(self: LoadDocumentOptionsHandle): LoadDocumentOptionsHandle;
        createDefault(): LoadDocumentOptionsHandle;
        getColourSpace(self: LoadDocumentOptionsHandle): ColourSpaceType;
        getDpi(self: LoadDocumentOptionsHandle): number;
        getFormat(self: LoadDocumentOptionsHandle): RasterFormat;
        getHostDpi(self: LoadDocumentOptionsHandle): number;
        getLoadMode(self: LoadDocumentOptionsHandle): DocumentLoadMode;
        setColourSpace(self: LoadDocumentOptionsHandle, colourSpace: ColourSpaceType): void;
        setDpi(self: LoadDocumentOptionsHandle, dpi: number): void;
        setFormat(self: LoadDocumentOptionsHandle, format: RasterFormat): void;
        setHostDpi(self: LoadDocumentOptionsHandle, dpi: number): void;
        setLoadMode(self: LoadDocumentOptionsHandle, loadMode: DocumentLoadMode): void;
        setPassword(self: LoadDocumentOptionsHandle, password: string): void;
    }
    export const LoadDocumentOptionsApi: LoadDocumentOptionsApi;

    export interface LoadDwgOptionsApi extends Omit<LoadDocumentOptionsApi, "clone" | "createDefault"> {
        clone(self: LoadDwgOptionsHandle): LoadDwgOptionsHandle;
        cloneAsLoadDwgOptions(self: LoadDwgOptionsHandle): LoadDwgOptionsHandle;
        createDefault(): LoadDwgOptionsHandle;
        getBackgroundColour(self: LoadDwgOptionsHandle): ColourHandle;
        getLayoutSelection(self: LoadDwgOptionsHandle): LoadDwgLayoutSelection;
        getModelUnits(self: LoadDwgOptionsHandle): UnitType;
        getOverrideColour(self: LoadDwgOptionsHandle): ColourHandle;
        getOverrideLineWeights(self: LoadDwgOptionsHandle): boolean;
        getRemoveHiddenItems(self: LoadDwgOptionsHandle): boolean;
        getSelectedLayoutName(self: LoadDwgOptionsHandle): string;
        getShowHandles(self: LoadDwgOptionsHandle): boolean;
        setBackgroundColour(self: LoadDwgOptionsHandle, backgroundColour: ColourHandle): void;
        setLayoutSelectionToAllPages(self: LoadDwgOptionsHandle): void;
        setLayoutSelectionToModel(self: LoadDwgOptionsHandle): void;
        setLayoutSelectionToSingle(self: LoadDwgOptionsHandle, layoutName: string): void;
        setModelUnits(self: LoadDwgOptionsHandle, unitType: UnitType): void;
        setOverrideColour(self: LoadDwgOptionsHandle, overrideColour: ColourHandle): void;
        setOverrideLineWeights(self: LoadDwgOptionsHandle, overrideLineWeights: boolean): void;
        setRemoveHiddenItems(self: LoadDwgOptionsHandle, removeHiddenItems: boolean): void;
        setShowHandles(self: LoadDwgOptionsHandle, showHandles: boolean): void;
    }
    export const LoadDwgOptionsApi: LoadDwgOptionsApi;

    export interface LogicalNodeApi extends NodeApi {
        fromNode(node: NodeHandle): LogicalNodeHandle;
        getBrushFillInterface(self: LogicalNodeHandle): BrushFillInterfaceHandle;
        getLineStyleInterface(self: LogicalNodeHandle): LineStyleInterfaceHandle;
        getTransparencyInterface(self: LogicalNodeHandle): TransparencyInterfaceHandle;
        hasNonMaskChildren(self: LogicalNodeHandle): boolean;
        hasNonMaskOrAdjustmentChildren(self: LogicalNodeHandle): boolean;
    }
    export const LogicalNodeApi: LogicalNodeApi;

    export interface LogicalNodeDefinitionApi extends NodeDefinitionApi {
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): LogicalNodeDefinitionHandle;
    }
    export const LogicalNodeDefinitionApi: LogicalNodeDefinitionApi;

    export interface MarginsInterfaceApi {
        getMarginFill(self: MarginsInterfaceHandle): FillDescriptorHandle;
        getMargins(self: MarginsInterfaceHandle): LTRB;
        getUseMargins(self: MarginsInterfaceHandle): boolean;
    }
    export const MarginsInterfaceApi: MarginsInterfaceApi;

    export interface MaskRasterNodeApi extends Omit<EnclosureRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): MaskRasterNodeHandle;
    }
    export const MaskRasterNodeApi: MaskRasterNodeApi;

    export interface MaskRasterNodeDefinitionApi extends Omit<EnclosureRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(): MaskRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): MaskRasterNodeDefinitionHandle;
    }
    export const MaskRasterNodeDefinitionApi: MaskRasterNodeDefinitionApi;

    export interface MaximumBlurFilterParametersApi {
        create(): MaximumBlurFilterParametersHandle;
        getIsCircular(self: MaximumBlurFilterParametersHandle): boolean;
        getRadius(self: MaximumBlurFilterParametersHandle): number;
        setIsCircular(self: MaximumBlurFilterParametersHandle, isCircular: boolean): void;
        setRadius(self: MaximumBlurFilterParametersHandle, radius: number): void;
    }
    export const MaximumBlurFilterParametersApi: MaximumBlurFilterParametersApi;

    export interface MaximumBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): MaximumBlurFilterRasterNodeHandle;
        getParameters(node: MaximumBlurFilterRasterNodeHandle): MaximumBlurFilterParametersHandle;
    }
    export const MaximumBlurFilterRasterNodeApi: MaximumBlurFilterRasterNodeApi;

    export interface MaximumBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: MaximumBlurFilterParametersHandle): MaximumBlurFilterRasterNodeDefinitionHandle;
        createDefault(): MaximumBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): MaximumBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: MaximumBlurFilterRasterNodeDefinitionHandle): MaximumBlurFilterParametersHandle;
        setParameters(self: MaximumBlurFilterRasterNodeDefinitionHandle, parameters: MaximumBlurFilterParametersHandle): void;
    }
    export const MaximumBlurFilterRasterNodeDefinitionApi: MaximumBlurFilterRasterNodeDefinitionApi;

    export interface MeasurementNodeApi extends Omit<VectorNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): MeasurementNodeHandle;
        getAnnotationOffset(self: MeasurementNodeHandle): number;
        getDecimalPlaces(self: MeasurementNodeHandle): number;
        getDisplayUnitType(self: MeasurementNodeHandle): UnitType;
        getFactor(self: MeasurementNodeHandle): number;
        getScaledUnitType(self: MeasurementNodeHandle): UnitType;
        getShowEndpointMarkers(self: MeasurementNodeHandle): boolean;
        getSpreadDistance(self: MeasurementNodeHandle): number;
        getSpreadEndpoints(self: MeasurementNodeHandle): Endpoints;
        getUseDocumentPrecision(self: MeasurementNodeHandle): boolean;
    }
    export const MeasurementNodeApi: MeasurementNodeApi;

    export interface MeasurementNodeDefinitionApi extends Omit<VectorNodeDefinitionApi, "fromNodeDefinition"> {
        create(start: Point, end: Point, factor: number, unitType: UnitType): MeasurementNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): MeasurementNodeDefinitionHandle;
        getAnnotationOffset(self: MeasurementNodeDefinitionHandle): number;
        getDecimalPlaces(self: MeasurementNodeDefinitionHandle): number;
        getEndpoints(self: MeasurementNodeDefinitionHandle): Endpoints;
        getFactor(self: MeasurementNodeDefinitionHandle): number;
        getLabelGlyphAtts(self: MeasurementNodeDefinitionHandle): GlyphAttsHandle;
        getScaledUnitType(self: MeasurementNodeDefinitionHandle): UnitType;
        getShowEndpointMarkers(self: MeasurementNodeDefinitionHandle): boolean;
        getUseDocumentPrecision(self: MeasurementNodeDefinitionHandle): boolean;
        setAnnotationOffset(self: MeasurementNodeDefinitionHandle, offset: number): void;
        setDisplayPrecision(self: MeasurementNodeDefinitionHandle, useDocumentPrecision: boolean, decimalPlaces: number): void;
        setEndpoints(self: MeasurementNodeDefinitionHandle, start: Point, end: Point): void;
        setFactor(self: MeasurementNodeDefinitionHandle, factor: number): void;
        setLabelGlyphAtts(self: MeasurementNodeDefinitionHandle, glyphAttsOrNull: GlyphAttsHandle | null): void;
        setScaledUnitType(self: MeasurementNodeDefinitionHandle, unitType: UnitType): void;
        setShowEndpointMarkers(self: MeasurementNodeDefinitionHandle, show: boolean): void;
    }
    export const MeasurementNodeDefinitionApi: MeasurementNodeDefinitionApi;

    export interface MedianBlurFilterParametersApi {
        create(): MedianBlurFilterParametersHandle;
        getRadius(self: MedianBlurFilterParametersHandle): number;
        setRadius(self: MedianBlurFilterParametersHandle, radius: number): void;
    }
    export const MedianBlurFilterParametersApi: MedianBlurFilterParametersApi;

    export interface MedianBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): MedianBlurFilterRasterNodeHandle;
        getParameters(node: MedianBlurFilterRasterNodeHandle): MedianBlurFilterParametersHandle;
    }
    export const MedianBlurFilterRasterNodeApi: MedianBlurFilterRasterNodeApi;

    export interface MedianBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: MedianBlurFilterParametersHandle): MedianBlurFilterRasterNodeDefinitionHandle;
        createDefault(): MedianBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): MedianBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: MedianBlurFilterRasterNodeDefinitionHandle): MedianBlurFilterParametersHandle;
        setParameters(self: MedianBlurFilterRasterNodeDefinitionHandle, parameters: MedianBlurFilterParametersHandle): void;
    }
    export const MedianBlurFilterRasterNodeDefinitionApi: MedianBlurFilterRasterNodeDefinitionApi;

    export interface MinimumBlurFilterParametersApi {
        create(): MinimumBlurFilterParametersHandle;
        getIsCircular(self: MinimumBlurFilterParametersHandle): boolean;
        getRadius(self: MinimumBlurFilterParametersHandle): number;
        setIsCircular(self: MinimumBlurFilterParametersHandle, isCircular: boolean): void;
        setRadius(self: MinimumBlurFilterParametersHandle, radius: number): void;
    }
    export const MinimumBlurFilterParametersApi: MinimumBlurFilterParametersApi;

    export interface MinimumBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): MinimumBlurFilterRasterNodeHandle;
        getParameters(node: MinimumBlurFilterRasterNodeHandle): MinimumBlurFilterParametersHandle;
    }
    export const MinimumBlurFilterRasterNodeApi: MinimumBlurFilterRasterNodeApi;

    export interface MinimumBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: MinimumBlurFilterParametersHandle): MinimumBlurFilterRasterNodeDefinitionHandle;
        createDefault(): MinimumBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): MinimumBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: MinimumBlurFilterRasterNodeDefinitionHandle): MinimumBlurFilterParametersHandle;
        setParameters(self: MinimumBlurFilterRasterNodeDefinitionHandle, parameters: MinimumBlurFilterParametersHandle): void;
    }
    export const MinimumBlurFilterRasterNodeDefinitionApi: MinimumBlurFilterRasterNodeDefinitionApi;

    export interface MotionBlurFilterParametersApi {
        create(): MotionBlurFilterParametersHandle;
        getAngle(self: MotionBlurFilterParametersHandle): number;
        getRadius(self: MotionBlurFilterParametersHandle): number;
        setAngle(self: MotionBlurFilterParametersHandle, angle: number): void;
        setRadius(self: MotionBlurFilterParametersHandle, radius: number): void;
    }
    export const MotionBlurFilterParametersApi: MotionBlurFilterParametersApi;

    export interface MotionBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): MotionBlurFilterRasterNodeHandle;
        getParameters(node: MotionBlurFilterRasterNodeHandle): MotionBlurFilterParametersHandle;
    }
    export const MotionBlurFilterRasterNodeApi: MotionBlurFilterRasterNodeApi;

    export interface MotionBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: MotionBlurFilterParametersHandle): MotionBlurFilterRasterNodeDefinitionHandle;
        createDefault(): MotionBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): MotionBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: MotionBlurFilterRasterNodeDefinitionHandle): MotionBlurFilterParametersHandle;
        setParameters(self: MotionBlurFilterRasterNodeDefinitionHandle, parameters: MotionBlurFilterParametersHandle): void;
    }
    export const MotionBlurFilterRasterNodeDefinitionApi: MotionBlurFilterRasterNodeDefinitionApi;

    export interface NewDocumentOptionsApi {
        clone(self: NewDocumentOptionsHandle): NewDocumentOptionsHandle;
        createDefault(): NewDocumentOptionsHandle;
        createFromPreset(preset: DocumentPresetHandle): NewDocumentOptionsHandle;
        getBleed(self: NewDocumentOptionsHandle): LTRB;
        getColourProfile(self: NewDocumentOptionsHandle): ColourProfileHandle;
        getCreateArtboard(self: NewDocumentOptionsHandle): boolean;
        getCreateMaster(self: NewDocumentOptionsHandle): boolean;
        getDpi(self: NewDocumentOptionsHandle): number;
        getDrawingScale(self: NewDocumentOptionsHandle): DrawingScaleHandle;
        getHeight(self: NewDocumentOptionsHandle): number;
        getImagePlacement(self: NewDocumentOptionsHandle): ImagePlacement;
        getIsDoublePageStart(self: NewDocumentOptionsHandle): boolean;
        getIsFacing(self: NewDocumentOptionsHandle): boolean;
        getIsMultiPage(self: NewDocumentOptionsHandle): boolean;
        getIsTransparentBackground(self: NewDocumentOptionsHandle): boolean;
        getIsVerticalStack(self: NewDocumentOptionsHandle): boolean;
        getMargins(self: NewDocumentOptionsHandle): LTRB;
        getMarginsEnabled(self: NewDocumentOptionsHandle): boolean;
        getMaxDpi(unit: UnitType, dimension: number): number;
        getMaxSize(unit: UnitType, dpi: number): number;
        getPageCount(self: NewDocumentOptionsHandle): number;
        getRasterFormat(self: NewDocumentOptionsHandle): RasterFormat;
        getUnits(self: NewDocumentOptionsHandle): UnitType;
        getUseDrawingScale(self: NewDocumentOptionsHandle): boolean;
        getViewDpi(self: NewDocumentOptionsHandle): number;
        getWidth(self: NewDocumentOptionsHandle): number;
        setBleed(self: NewDocumentOptionsHandle, bleed: LTRB): void;
        setColourProfile(self: NewDocumentOptionsHandle, colourProfile: ColourProfileHandle): void;
        setCreateArtboard(self: NewDocumentOptionsHandle, createArtboard: boolean): void;
        setCreateMaster(self: NewDocumentOptionsHandle, createMaster: boolean): void;
        setDpi(self: NewDocumentOptionsHandle, dpi: number): void;
        setDrawingScale(self: NewDocumentOptionsHandle, drawingScale: DrawingScaleHandle): void;
        setHeight(self: NewDocumentOptionsHandle, height: number): void;
        setImagePlacement(self: NewDocumentOptionsHandle, imagePlacement: ImagePlacement): void;
        setIsDoublePageStart(self: NewDocumentOptionsHandle, isDoublePageStart: boolean): void;
        setIsFacing(self: NewDocumentOptionsHandle, isFacing: boolean): void;
        setIsMultiPage(self: NewDocumentOptionsHandle, isMultiPage: boolean): void;
        setIsTransparentBackground(self: NewDocumentOptionsHandle, isTransparent: boolean): void;
        setIsVerticalStack(self: NewDocumentOptionsHandle, isVerticalStack: boolean): void;
        setMargins(self: NewDocumentOptionsHandle, margins: LTRB): void;
        setMarginsEnabled(self: NewDocumentOptionsHandle, marginsEnabled: boolean): void;
        setPageCount(self: NewDocumentOptionsHandle, pageCount: number): void;
        setRasterFormat(self: NewDocumentOptionsHandle, format: RasterFormat): void;
        setUnits(self: NewDocumentOptionsHandle, unitType: UnitType): void;
        setUseDrawingScale(self: NewDocumentOptionsHandle, useDrawingScale: boolean): void;
        setViewDpi(self: NewDocumentOptionsHandle, viewDpi: number): void;
        setWidth(self: NewDocumentOptionsHandle, width: number): void;
    }
    export const NewDocumentOptionsApi: NewDocumentOptionsApi;

    export interface NodeApi extends SelectableApi {
        fromSelectable(selectable: SelectableHandle): NodeHandle;
        getBaseBoxInterface(self: NodeHandle): BaseBoxInterfaceHandle;
        getBaseToSpreadTransform(self: NodeHandle): Transform;
        getBlendModeInterface(self: NodeHandle): BlendModeInterfaceHandle;
        getContentExtentsBox(self: NodeHandle, includeInvisible: boolean, includeOffCurvePoints: boolean): Rectangle;
        getContentExtentsBoxOfChildren(self: NodeHandle, includeInvisible: boolean, includeOffCurvePoints: boolean): Rectangle;
        getDescriptionInterface(self: NodeHandle): DescriptionInterfaceHandle;
        getDocument(self: NodeHandle): DocumentHandle;
        getEditabilityInterface(self: NodeHandle): EditabilityInterfaceHandle;
        getExactSpreadBaseBox(self: NodeHandle): Rectangle;
        getExactSpreadVisibleBox(self: NodeHandle, includeParentEffects: boolean, considerParentClips: boolean): Rectangle;
        getExportableInterface(self: NodeHandle): ExportableInterfaceHandle;
        getFirstChild(self: NodeHandle, nodeChildType: NodeChildType): NodeHandle;
        getLastChild(self: NodeHandle, nodeChildType: NodeChildType): NodeHandle;
        getLayerEffectsInterface(self: NodeHandle): LayerEffectsInterfaceHandle;
        getLineBox(self: NodeHandle, includeClips: boolean): Rectangle;
        getLocalBaseBox(self: NodeHandle, includeClips: boolean): Rectangle;
        getLocalLineBox(self: NodeHandle, includeClips: boolean): Rectangle;
        getLocalToSpreadTransform(self: NodeHandle): Transform;
        getLocalVisibleBox(self: NodeHandle): Rectangle;
        getNextSibling(self: NodeHandle): NodeHandle;
        getNodeId(self: NodeHandle): number;
        getParent(self: NodeHandle): NodeHandle;
        getPreviousSibling(self: NodeHandle): NodeHandle;
        getSpreadBaseBox(self: NodeHandle, includeClips: boolean): Rectangle;
        getSpreadLineBox(self: NodeHandle, includeClips: boolean): Rectangle;
        getSpreadToBaseTransform(self: NodeHandle): Transform;
        getSpreadVisibleBox(self: NodeHandle, includeParentEffects: boolean): Rectangle;
        getTagInterface(self: NodeHandle): TagInterfaceHandle;
        getTransformInterface(self: NodeHandle): TransformInterfaceHandle;
        getTransformedLineBox(self: NodeHandle, transform: Transform, scalarTransform: Transform, includeClips: boolean): Rectangle;
        getVisibilityInterface(self: NodeHandle): VisibilityInterfaceHandle;
        isSameNode(self: NodeHandle, other: NodeHandle): boolean;
        moveToFirstChild(self: NodeHandle, nodeChildType: NodeChildType): void;
        moveToLastChild(self: NodeHandle, nodeChildType: NodeChildType): void;
        moveToNextSibling(self: NodeHandle): void;
        moveToParent(self: NodeHandle): void;
        moveToPreviousSibling(self: NodeHandle): void;
    }
    export const NodeApi: NodeApi;

    export interface NodeCastApi {
        create(): NodeCastHandle;
        exec(self: NodeCastHandle, node: NodeHandle): void;
        setAddNoiseFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: AddNoiseFilterRasterNodeHandle) => void): void;
        setAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: AdjustmentRasterNodeHandle) => void): void;
        setArtTextNodeHandler(self: NodeCastHandle, handler: (node: ArtTextNodeHandle) => void): void;
        setBilateralBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: BilateralBlurFilterRasterNodeHandle) => void): void;
        setBlackAndWhiteAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: BlackAndWhiteAdjustmentRasterNodeHandle) => void): void;
        setBloomFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: BloomFilterRasterNodeHandle) => void): void;
        setBoxBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: BoxBlurFilterRasterNodeHandle) => void): void;
        setBrightnessContrastAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: BrightnessContrastAdjustmentRasterNodeHandle) => void): void;
        setClarityFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: ClarityFilterRasterNodeHandle) => void): void;
        setColourBalanceAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: ColourBalanceAdjustmentRasterNodeHandle) => void): void;
        setColouredLogicalNodeHandler(self: NodeCastHandle, handler: (node: ColouredLogicalNodeHandle) => void): void;
        setContainerNodeHandler(self: NodeCastHandle, handler: (node: ContainerNodeHandle) => void): void;
        setCurvePathTextNodeHandler(self: NodeCastHandle, handler: (node: CurvePathTextNodeHandle) => void): void;
        setCurvesAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: CurvesAdjustmentRasterNodeHandle) => void): void;
        setDefringeFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: DefringeFilterRasterNodeHandle) => void): void;
        setDenoiseFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: DenoiseFilterRasterNodeHandle) => void): void;
        setDepthOfFieldFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: DepthOfFieldFilterRasterNodeHandle) => void): void;
        setDevelopNodeHandler(self: NodeCastHandle, handler: (node: DevelopNodeHandle) => void): void;
        setDiffuseFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: DiffuseFilterRasterNodeHandle) => void): void;
        setDiffuseGlowFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: DiffuseGlowFilterRasterNodeHandle) => void): void;
        setDocumentNodeHandler(self: NodeCastHandle, handler: (node: DocumentNodeHandle) => void): void;
        setDustAndScratchFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: DustAndScratchFilterRasterNodeHandle) => void): void;
        setEmbeddedDocumentNodeHandler(self: NodeCastHandle, handler: (node: EmbeddedDocumentNodeHandle) => void): void;
        setEnclosureRasterNodeHandler(self: NodeCastHandle, handler: (node: EnclosureRasterNodeHandle) => void): void;
        setExposureAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: ExposureAdjustmentRasterNodeHandle) => void): void;
        setFieldBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: FieldBlurFilterRasterNodeHandle) => void): void;
        setFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: FilterRasterNodeHandle) => void): void;
        setFrameTextNodeHandler(self: NodeCastHandle, handler: (node: FrameTextNodeHandle) => void): void;
        setGaussianBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: GaussianBlurFilterRasterNodeHandle) => void): void;
        setGroupNodeHandler(self: NodeCastHandle, handler: (node: GroupNodeHandle) => void): void;
        setHSLShiftAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: HSLShiftAdjustmentRasterNodeHandle) => void): void;
        setHalftoneFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: HalftoneFilterRasterNodeHandle) => void): void;
        setHighPassFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: HighPassFilterRasterNodeHandle) => void): void;
        setImageNodeHandler(self: NodeCastHandle, handler: (node: ImageNodeHandle) => void): void;
        setInvertAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: InvertAdjustmentRasterNodeHandle) => void): void;
        setLensBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: LensBlurFilterRasterNodeHandle) => void): void;
        setLevelsAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: LevelsAdjustmentRasterNodeHandle) => void): void;
        setLogicalNodeHandler(self: NodeCastHandle, handler: (node: LogicalNodeHandle) => void): void;
        setMaskRasterNodeHandler(self: NodeCastHandle, handler: (node: MaskRasterNodeHandle) => void): void;
        setMaximumBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: MaximumBlurFilterRasterNodeHandle) => void): void;
        setMeasurementNodeHandler(self: NodeCastHandle, handler: (node: MeasurementNodeHandle) => void): void;
        setMedianBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: MedianBlurFilterRasterNodeHandle) => void): void;
        setMinimumBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: MinimumBlurFilterRasterNodeHandle) => void): void;
        setMotionBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: MotionBlurFilterRasterNodeHandle) => void): void;
        setNodeHandler(self: NodeCastHandle, handler: (node: NodeHandle) => void): void;
        setNormalsAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: NormalsAdjustmentRasterNodeHandle) => void): void;
        setPatternRasterNodeHandler(self: NodeCastHandle, handler: (node: PatternRasterNodeHandle) => void): void;
        setPhysicalNodeHandler(self: NodeCastHandle, handler: (node: PhysicalNodeHandle) => void): void;
        setPinchPunchFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: PinchPunchFilterRasterNodeHandle) => void): void;
        setPixelateFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: PixelateFilterRasterNodeHandle) => void): void;
        setPolyCurveNodeHandler(self: NodeCastHandle, handler: (node: PolyCurveNodeHandle) => void): void;
        setPolyCurveTextNodeHandler(self: NodeCastHandle, handler: (node: PolyCurveTextNodeHandle) => void): void;
        setPosteriseAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: PosteriseAdjustmentRasterNodeHandle) => void): void;
        setRadialBlurFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: RadialBlurFilterRasterNodeHandle) => void): void;
        setRasterNodeHandler(self: NodeCastHandle, handler: (node: RasterNodeHandle) => void): void;
        setRecolourAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: RecolourAdjustmentRasterNodeHandle) => void): void;
        setRippleFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: RippleFilterRasterNodeHandle) => void): void;
        setSelectiveColourAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: SelectiveColourAdjustmentRasterNodeHandle) => void): void;
        setShadowsHighlightsAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: ShadowsHighlightsAdjustmentRasterNodeHandle) => void): void;
        setShadowsHighlightsFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: ShadowsHighlightsFilterRasterNodeHandle) => void): void;
        setShapeNodeHandler(self: NodeCastHandle, handler: (node: ShapeNodeHandle) => void): void;
        setShapePathTextNodeHandler(self: NodeCastHandle, handler: (node: ShapePathTextNodeHandle) => void): void;
        setShapeTextNodeHandler(self: NodeCastHandle, handler: (node: ShapeTextNodeHandle) => void): void;
        setSphericalFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: SphericalFilterRasterNodeHandle) => void): void;
        setSplitToningAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: SplitToningAdjustmentRasterNodeHandle) => void): void;
        setSpreadNodeHandler(self: NodeCastHandle, handler: (node: SpreadNodeHandle) => void): void;
        setTableTextNodeHandler(self: NodeCastHandle, handler: (node: TableTextNodeHandle) => void): void;
        setTextNodeHandler(self: NodeCastHandle, handler: (node: TextNodeHandle) => void): void;
        setThresholdAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: ThresholdAdjustmentRasterNodeHandle) => void): void;
        setToneCompressionAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: ToneCompressionAdjustmentRasterNodeHandle) => void): void;
        setToneStretchAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: ToneStretchAdjustmentRasterNodeHandle) => void): void;
        setTwirlFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: TwirlFilterRasterNodeHandle) => void): void;
        setUnsharpMaskFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: UnsharpMaskFilterRasterNodeHandle) => void): void;
        setVectorNodeHandler(self: NodeCastHandle, handler: (node: VectorNodeHandle) => void): void;
        setVibranceAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: VibranceAdjustmentRasterNodeHandle) => void): void;
        setVignetteFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: VignetteFilterRasterNodeHandle) => void): void;
        setVoronoiFilterRasterNodeHandler(self: NodeCastHandle, handler: (node: VoronoiFilterRasterNodeHandle) => void): void;
        setWhiteBalanceAdjustmentRasterNodeHandler(self: NodeCastHandle, handler: (node: WhiteBalanceAdjustmentRasterNodeHandle) => void): void;
    }
    export const NodeCastApi: NodeCastApi;

    export interface NodeDefinitionApi {
        getTransform(self: NodeDefinitionHandle): Transform;
        getUserDescription(self: NodeDefinitionHandle): string;
        setTransform(self: NodeDefinitionHandle, transform: Transform): void;
        setUserDescription(self: NodeDefinitionHandle, description: string): void;
    }
    export const NodeDefinitionApi: NodeDefinitionApi;

    export interface NormalsAdjustmentParametersApi {
        create(): NormalsAdjustmentParametersHandle;
        getFlipX(self: NormalsAdjustmentParametersHandle): boolean;
        getFlipY(self: NormalsAdjustmentParametersHandle): boolean;
        getRotation(self: NormalsAdjustmentParametersHandle): number;
        getScale(self: NormalsAdjustmentParametersHandle): number;
        setFlipX(self: NormalsAdjustmentParametersHandle, flipX: boolean): void;
        setFlipY(self: NormalsAdjustmentParametersHandle, flipY: boolean): void;
        setRotation(self: NormalsAdjustmentParametersHandle, rotation: number): void;
        setScale(self: NormalsAdjustmentParametersHandle, scale: number): void;
    }
    export const NormalsAdjustmentParametersApi: NormalsAdjustmentParametersApi;

    export interface NormalsAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): NormalsAdjustmentRasterNodeHandle;
        getParameters(node: NormalsAdjustmentRasterNodeHandle): NormalsAdjustmentParametersHandle;
    }
    export const NormalsAdjustmentRasterNodeApi: NormalsAdjustmentRasterNodeApi;

    export interface NormalsAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: NormalsAdjustmentParametersHandle): NormalsAdjustmentRasterNodeDefinitionHandle;
        createDefault(): NormalsAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): NormalsAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: NormalsAdjustmentRasterNodeDefinitionHandle): NormalsAdjustmentParametersHandle;
        setParameters(node: NormalsAdjustmentRasterNodeDefinitionHandle, parameters: NormalsAdjustmentParametersHandle): void;
    }
    export const NormalsAdjustmentRasterNodeDefinitionApi: NormalsAdjustmentRasterNodeDefinitionApi;

    export interface PageBoxInterfaceApi {
        getPageBoundingBox(self: PageBoxInterfaceHandle, pageBoundingBoxType: PageBoundingBoxType): Rectangle;
    }
    export const PageBoxInterfaceApi: PageBoxInterfaceApi;

    export interface PageDocumentPropertiesApi {
        clone(self: PageDocumentPropertiesHandle): PageDocumentPropertiesHandle;
        create(): PageDocumentPropertiesHandle;
        getAnchorType(self: PageDocumentPropertiesHandle): SpatialAnchor;
        getDimensions(self: PageDocumentPropertiesHandle): Size;
        getMargin(self: PageDocumentPropertiesHandle): LTRB;
        getMarginFill(self: PageDocumentPropertiesHandle): FillDescriptorHandle;
        getMoveFollowingPages(self: PageDocumentPropertiesHandle): boolean;
        getPageOriginDelta(self: PageDocumentPropertiesHandle): PageOriginDelta;
        getUseMargin(self: PageDocumentPropertiesHandle): boolean;
        getUseMasterMargin(self: PageDocumentPropertiesHandle): boolean;
        setAnchorType(self: PageDocumentPropertiesHandle, anchorType: SpatialAnchor): void;
        setDimensions(self: PageDocumentPropertiesHandle, dimensions: Size): void;
        setMargin(self: PageDocumentPropertiesHandle, margin: LTRB): void;
        setMarginFill(self: PageDocumentPropertiesHandle, marginFill: FillDescriptorHandle): void;
        setMoveFollowingPages(self: PageDocumentPropertiesHandle, moveFollowingPages: boolean): void;
        setPageOriginDelta(self: PageDocumentPropertiesHandle, pageOriginDelta: PageOriginDelta): void;
        setUseMargin(self: PageDocumentPropertiesHandle, useMargin: boolean): void;
        setUseMasterMargin(self: PageDocumentPropertiesHandle, useMasterMargin: boolean): void;
    }
    export const PageDocumentPropertiesApi: PageDocumentPropertiesApi;

    export interface PatternRasterNodeApi extends Omit<RasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): PatternRasterNodeHandle;
        getMirror(node: PatternRasterNodeHandle): boolean;
    }
    export const PatternRasterNodeApi: PatternRasterNodeApi;

    export interface PatternRasterNodeDefinitionApi extends Omit<RasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(bitmap: RasterObjectHandle, transform: Transform, mirror: boolean): PatternRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): PatternRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): PatternRasterNodeDefinitionHandle;
        getMirror(self: PatternRasterNodeDefinitionHandle): boolean;
        setMirror(self: PatternRasterNodeDefinitionHandle, mirror: boolean): void;
    }
    export const PatternRasterNodeDefinitionApi: PatternRasterNodeDefinitionApi;

    export interface PhysicalNodeApi extends NodeApi {
        canTransformWhileProtectingChildList(node: PhysicalNodeHandle, nodeChildType: NodeChildType): boolean;
        fromNode(node: NodeHandle): PhysicalNodeHandle;
    }
    export const PhysicalNodeApi: PhysicalNodeApi;

    export interface PhysicalNodeDefinitionApi extends NodeDefinitionApi {
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): PhysicalNodeDefinitionHandle;
    }
    export const PhysicalNodeDefinitionApi: PhysicalNodeDefinitionApi;

    export interface PhysicalRootInterfaceApi {
        fromNode(node: NodeHandle): PhysicalRootInterfaceHandle;
        getNode(self: PhysicalRootInterfaceHandle): NodeHandle;
        getPhysicalRootProperties(self: PhysicalRootInterfaceHandle): PhysicalRootPropertiesInterfaceHandle;
    }
    export const PhysicalRootInterfaceApi: PhysicalRootInterfaceApi;

    export interface PhysicalRootPropertiesInterfaceApi {
        fromNode(node: NodeHandle): PhysicalRootPropertiesInterfaceHandle;
        getNode(self: PhysicalRootPropertiesInterfaceHandle): NodeHandle;
        getPageBoxInterface(self: PhysicalRootPropertiesInterfaceHandle): PageBoxInterfaceHandle;
        getPageCount(self: PhysicalRootPropertiesInterfaceHandle): number;
    }
    export const PhysicalRootPropertiesInterfaceApi: PhysicalRootPropertiesInterfaceApi;

    export interface PictureFrameInterfaceApi {
        calculateAnchor(self: PictureFrameInterfaceHandle, childNode: NodeHandle, hintAnchor: SpatialAnchor): SpatialAnchor;
        calculateConstraints(self: PictureFrameInterfaceHandle, childNode: NodeHandle, hintConstraintType: ConstraintType): ConstraintType;
        fromNode(node: NodeHandle): PictureFrameInterfaceHandle;
        getAnchor(self: PictureFrameInterfaceHandle): SpatialAnchor;
        getDataMergeFieldId(self: PictureFrameInterfaceHandle): string;
        getDescription(self: PictureFrameInterfaceHandle): string;
        getFrameContents(self: PictureFrameInterfaceHandle): NodeHandle;
        getNode(self: PictureFrameInterfaceHandle): NodeHandle;
        getOriginalContentRectangle(self: PictureFrameInterfaceHandle): Rectangle;
        hasFrameContents(self: PictureFrameInterfaceHandle): boolean;
        isClearFillOnPopulate(self: PictureFrameInterfaceHandle): boolean;
        isEnabled(self: PictureFrameInterfaceHandle): boolean;
    }
    export const PictureFrameInterfaceApi: PictureFrameInterfaceApi;

    export interface PinchPunchFilterParametersApi {
        create(): PinchPunchFilterParametersHandle;
        getIntensity(self: PinchPunchFilterParametersHandle): number;
        getPosition(self: PinchPunchFilterParametersHandle): Point;
        getRadius(self: PinchPunchFilterParametersHandle): number;
        setIntensity(self: PinchPunchFilterParametersHandle, intensity: number): void;
        setPosition(self: PinchPunchFilterParametersHandle, position: Point): void;
        setRadius(self: PinchPunchFilterParametersHandle, radius: number): void;
    }
    export const PinchPunchFilterParametersApi: PinchPunchFilterParametersApi;

    export interface PinchPunchFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): PinchPunchFilterRasterNodeHandle;
        getParameters(node: PinchPunchFilterRasterNodeHandle): PinchPunchFilterParametersHandle;
    }
    export const PinchPunchFilterRasterNodeApi: PinchPunchFilterRasterNodeApi;

    export interface PinchPunchFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: PinchPunchFilterParametersHandle): PinchPunchFilterRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): PinchPunchFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): PinchPunchFilterRasterNodeDefinitionHandle;
        getParameters(node: PinchPunchFilterRasterNodeDefinitionHandle): PinchPunchFilterParametersHandle;
        setParameters(node: PinchPunchFilterRasterNodeDefinitionHandle, parameters: PinchPunchFilterParametersHandle): void;
    }
    export const PinchPunchFilterRasterNodeDefinitionApi: PinchPunchFilterRasterNodeDefinitionApi;

    export interface PixelateFilterParametersApi {
        create(): PixelateFilterParametersHandle;
        getQuantisation(self: PixelateFilterParametersHandle): number;
        setQuantisation(self: PixelateFilterParametersHandle, quantisation: number): void;
    }
    export const PixelateFilterParametersApi: PixelateFilterParametersApi;

    export interface PixelateFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): PixelateFilterRasterNodeHandle;
        getParameters(node: PixelateFilterRasterNodeHandle): PixelateFilterParametersHandle;
    }
    export const PixelateFilterRasterNodeApi: PixelateFilterRasterNodeApi;

    export interface PixelateFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: PixelateFilterParametersHandle): PixelateFilterRasterNodeDefinitionHandle;
        createDefault(): PixelateFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): PixelateFilterRasterNodeDefinitionHandle;
        getParameters(self: PixelateFilterRasterNodeDefinitionHandle): PixelateFilterParametersHandle;
        setParameters(self: PixelateFilterRasterNodeDefinitionHandle, parameters: PixelateFilterParametersHandle): void;
    }
    export const PixelateFilterRasterNodeDefinitionApi: PixelateFilterRasterNodeDefinitionApi;

    export interface PolyCurveNodeApi extends Omit<VectorNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): PolyCurveNodeHandle;
        getArtboardInterface(node: PolyCurveNodeHandle): ArtboardInterfaceHandle;
    }
    export const PolyCurveNodeApi: PolyCurveNodeApi;

    export interface PolyCurveNodeDefinitionApi extends Omit<VectorNodeDefinitionApi, "fromNodeDefinition"> {
        create(polyCurve: PolyCurveHandle, brushFillDescriptorOrNull: FillDescriptorHandle | null, lineFillDescriptorOrNull: FillDescriptorHandle | null, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | null, transparencyFillDescriptorOrNull: FillDescriptorHandle | null): PolyCurveNodeDefinitionHandle;
        createDefault(): PolyCurveNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): PolyCurveNodeDefinitionHandle;
        getCurves(self: PolyCurveNodeDefinitionHandle): PolyCurveHandle;
        setCurves(self: PolyCurveNodeDefinitionHandle, polyCurve: PolyCurveHandle): void;
    }
    export const PolyCurveNodeDefinitionApi: PolyCurveNodeDefinitionApi;

    export interface PolyCurveTextNodeApi extends Omit<TextNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): PolyCurveTextNodeHandle;
    }
    export const PolyCurveTextNodeApi: PolyCurveTextNodeApi;

    export interface PolyCurveTextNodeDefinitionApi extends Omit<TextNodeDefinitionApi, "fromNodeDefinition"> {
        createFromStoryBuilder(polyCurve: PolyCurveHandle, storyBuilder: StoryBuilderHandle): PolyCurveTextNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): PolyCurveTextNodeDefinitionHandle;
    }
    export const PolyCurveTextNodeDefinitionApi: PolyCurveTextNodeDefinitionApi;

    export interface PosteriseAdjustmentParametersApi {
        create(): PosteriseAdjustmentParametersHandle;
        getLevels(self: PosteriseAdjustmentParametersHandle): number;
        setLevels(self: PosteriseAdjustmentParametersHandle, levels: number): void;
    }
    export const PosteriseAdjustmentParametersApi: PosteriseAdjustmentParametersApi;

    export interface PosteriseAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): PosteriseAdjustmentRasterNodeHandle;
        getParameters(node: PosteriseAdjustmentRasterNodeHandle): PosteriseAdjustmentParametersHandle;
    }
    export const PosteriseAdjustmentRasterNodeApi: PosteriseAdjustmentRasterNodeApi;

    export interface PosteriseAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: PosteriseAdjustmentParametersHandle): PosteriseAdjustmentRasterNodeDefinitionHandle;
        createDefault(): PosteriseAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): PosteriseAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: PosteriseAdjustmentRasterNodeDefinitionHandle): PosteriseAdjustmentParametersHandle;
        setParameters(node: PosteriseAdjustmentRasterNodeDefinitionHandle, parameters: PosteriseAdjustmentParametersHandle): void;
    }
    export const PosteriseAdjustmentRasterNodeDefinitionApi: PosteriseAdjustmentRasterNodeDefinitionApi;

    export interface RadialBlurFilterParametersApi {
        create(): RadialBlurFilterParametersHandle;
        getAngle(self: RadialBlurFilterParametersHandle): number;
        getPosition(self: RadialBlurFilterParametersHandle): Point;
        setAngle(self: RadialBlurFilterParametersHandle, angle: number): void;
        setPosition(self: RadialBlurFilterParametersHandle, position: Point): void;
    }
    export const RadialBlurFilterParametersApi: RadialBlurFilterParametersApi;

    export interface RadialBlurFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): RadialBlurFilterRasterNodeHandle;
        getParameters(node: RadialBlurFilterRasterNodeHandle): RadialBlurFilterParametersHandle;
    }
    export const RadialBlurFilterRasterNodeApi: RadialBlurFilterRasterNodeApi;

    export interface RadialBlurFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: RadialBlurFilterParametersHandle): RadialBlurFilterRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): RadialBlurFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): RadialBlurFilterRasterNodeDefinitionHandle;
        getParameters(self: RadialBlurFilterRasterNodeDefinitionHandle): RadialBlurFilterParametersHandle;
        setParameters(self: RadialBlurFilterRasterNodeDefinitionHandle, parameters: RadialBlurFilterParametersHandle): void;
    }
    export const RadialBlurFilterRasterNodeDefinitionApi: RadialBlurFilterRasterNodeDefinitionApi;

    export interface RasterInterfaceApi {
        copyTo(self: RasterInterfaceHandle, rasterObject: RasterObjectHandle, destinationRectangle: Rectangle, sourceX: number, sourceY: number): void;
        createCompatibleBitmap(self: RasterInterfaceHandle, copyContents: boolean): RasterObjectHandle;
        createCompatibleBuffer(self: RasterInterfaceHandle, copyContents: boolean): RasterObjectHandle;
        fromNode(node: NodeHandle): RasterInterfaceHandle;
        getBitmap(self: RasterInterfaceHandle): RasterObjectHandle;
        getDomainTransform(self: RasterInterfaceHandle): Transform;
        getFormat(self: RasterInterfaceHandle): RasterFormat;
        getHeight(self: RasterInterfaceHandle): number;
        getInverseRasterBoundingBox(self: RasterInterfaceHandle): Rectangle;
        getNode(self: RasterInterfaceHandle): NodeHandle;
        getPixelSize(self: RasterInterfaceHandle): number;
        getRasterBoundingBox(self: RasterInterfaceHandle): Rectangle;
        getWidth(self: RasterInterfaceHandle): number;
    }
    export const RasterInterfaceApi: RasterInterfaceApi;

    export interface RasterNodeApi extends Omit<PhysicalNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): RasterNodeHandle;
        getRasterInterface(self: RasterNodeHandle): RasterInterfaceHandle;
        isExtendEmpty(node: RasterNodeHandle): boolean;
    }
    export const RasterNodeApi: RasterNodeApi;

    export interface RasterNodeDefinitionApi extends Omit<PhysicalNodeDefinitionApi, "fromNodeDefinition"> {
        create(format: RasterFormat): RasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): RasterNodeDefinitionHandle;
        getBitmap(self: RasterNodeDefinitionHandle): RasterObjectHandle;
        setBitmap(self: RasterNodeDefinitionHandle, bitmapOrNull: RasterObjectHandle | null): void;
    }
    export const RasterNodeDefinitionApi: RasterNodeDefinitionApi;

    export interface RasterSelectionApi {
        isCurrentPixelSelection(self: RasterSelectionHandle): boolean;
        isSelectAllOrNone(self: RasterSelectionHandle): boolean;
        isSelectNone(self: RasterSelectionHandle): boolean;
    }
    export const RasterSelectionApi: RasterSelectionApi;

    export interface RecolourAdjustmentParametersApi {
        create(): RecolourAdjustmentParametersHandle;
        getHue(self: RecolourAdjustmentParametersHandle): number;
        getLightness(self: RecolourAdjustmentParametersHandle): number;
        getSaturation(self: RecolourAdjustmentParametersHandle): number;
        setHue(self: RecolourAdjustmentParametersHandle, hue: number): void;
        setLightness(self: RecolourAdjustmentParametersHandle, lightness: number): void;
        setSaturation(self: RecolourAdjustmentParametersHandle, saturation: number): void;
    }
    export const RecolourAdjustmentParametersApi: RecolourAdjustmentParametersApi;

    export interface RecolourAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): RecolourAdjustmentRasterNodeHandle;
        getParameters(node: RecolourAdjustmentRasterNodeHandle): RecolourAdjustmentParametersHandle;
    }
    export const RecolourAdjustmentRasterNodeApi: RecolourAdjustmentRasterNodeApi;

    export interface RecolourAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: RecolourAdjustmentParametersHandle): RecolourAdjustmentRasterNodeDefinitionHandle;
        createDefault(): RecolourAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): RecolourAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: RecolourAdjustmentRasterNodeDefinitionHandle): RecolourAdjustmentParametersHandle;
        setParameters(node: RecolourAdjustmentRasterNodeDefinitionHandle, parameters: RecolourAdjustmentParametersHandle): void;
    }
    export const RecolourAdjustmentRasterNodeDefinitionApi: RecolourAdjustmentRasterNodeDefinitionApi;

    export interface RippleFilterParametersApi {
        create(): RippleFilterParametersHandle;
        getIntensity(self: RippleFilterParametersHandle): number;
        getPosition(self: RippleFilterParametersHandle): Point;
        setIntensity(self: RippleFilterParametersHandle, intensity: number): void;
        setPosition(self: RippleFilterParametersHandle, position: Point): void;
    }
    export const RippleFilterParametersApi: RippleFilterParametersApi;

    export interface RippleFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): RippleFilterRasterNodeHandle;
        getParameters(node: RippleFilterRasterNodeHandle): RippleFilterParametersHandle;
    }
    export const RippleFilterRasterNodeApi: RippleFilterRasterNodeApi;

    export interface RippleFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: RippleFilterParametersHandle): RippleFilterRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): RippleFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): RippleFilterRasterNodeDefinitionHandle;
        getParameters(node: RippleFilterRasterNodeDefinitionHandle): RippleFilterParametersHandle;
        setParameters(node: RippleFilterRasterNodeDefinitionHandle, parameters: RippleFilterParametersHandle): void;
    }
    export const RippleFilterRasterNodeDefinitionApi: RippleFilterRasterNodeDefinitionApi;

    export interface SelectableApi {
    }
    export const SelectableApi: SelectableApi;

    export interface SelectionApi {
        addItem(self: SelectionHandle, selectionItem: SelectionItemHandle): void;
        addNode(self: SelectionHandle, node: NodeHandle): boolean;
        addSelectable(self: SelectionHandle, selectable: SelectableHandle): boolean;
        addSubSelectionForNode(self: SelectionHandle, node: NodeHandle, subSelection: SubSelectionHandle): boolean;
        clear(self: SelectionHandle): void;
        containsItem(self: SelectionHandle, itemOrNull: SelectionItemHandle | null): boolean;
        containsNode(self: SelectionHandle, nodeOrNull: NodeHandle | null): boolean;
        createEmpty(document: DocumentHandle): SelectionHandle;
        getCount(self: SelectionHandle): number;
        getFirstSubSelectionOfType(self: SelectionHandle, type: SubSelectionType): SubSelectionHandle;
        getHasKeyObject(self: SelectionHandle): boolean;
        getItem(self: SelectionHandle, index: number): SelectionItemHandle;
        removeNested(self: SelectionHandle): void;
        setHasKeyObject(self: SelectionHandle, hasKeyObject: boolean): void;
    }
    export const SelectionApi: SelectionApi;

    export interface SelectionItemApi {
        enumerateSubSelections(self: SelectionItemHandle, callback: (subSelectionRef: SubSelectionHandle) => EnumerationResult): void;
        getNode(self: SelectionItemHandle): NodeHandle;
        getSubSelection(self: SelectionItemHandle, index: number): SubSelectionHandle;
        getSubSelectionCount(self: SelectionItemHandle): number;
        getSubSelectionOfType(self: SelectionItemHandle, type: SubSelectionType): SubSelectionHandle;
    }
    export const SelectionItemApi: SelectionItemApi;

    export interface SelectiveColourAdjustmentParametersApi {
        create(): SelectiveColourAdjustmentParametersHandle;
        enumerateWeights(self: SelectiveColourAdjustmentParametersHandle, callback: (colour: SelectiveColour, weights: SelectiveColourWeights) => EnumerationResult): void;
        getIsRelative(self: SelectiveColourAdjustmentParametersHandle): boolean;
        getWeights(self: SelectiveColourAdjustmentParametersHandle, colour: SelectiveColour): SelectiveColourWeights;
        getWeightsCount(self: SelectiveColourAdjustmentParametersHandle): number;
        setIsRelative(self: SelectiveColourAdjustmentParametersHandle, isRelative: boolean): void;
        setWeights(self: SelectiveColourAdjustmentParametersHandle, colour: SelectiveColour, weights: SelectiveColourWeights): void;
    }
    export const SelectiveColourAdjustmentParametersApi: SelectiveColourAdjustmentParametersApi;

    export interface SelectiveColourAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): SelectiveColourAdjustmentRasterNodeHandle;
        getParameters(node: SelectiveColourAdjustmentRasterNodeHandle): SelectiveColourAdjustmentParametersHandle;
    }
    export const SelectiveColourAdjustmentRasterNodeApi: SelectiveColourAdjustmentRasterNodeApi;

    export interface SelectiveColourAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: SelectiveColourAdjustmentParametersHandle): SelectiveColourAdjustmentRasterNodeDefinitionHandle;
        createDefault(): SelectiveColourAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): SelectiveColourAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: SelectiveColourAdjustmentRasterNodeDefinitionHandle): SelectiveColourAdjustmentParametersHandle;
        setParameters(node: SelectiveColourAdjustmentRasterNodeDefinitionHandle, parameters: SelectiveColourAdjustmentParametersHandle): void;
    }
    export const SelectiveColourAdjustmentRasterNodeDefinitionApi: SelectiveColourAdjustmentRasterNodeDefinitionApi;

    export interface ShadowsHighlightsAdjustmentParametersApi {
        create(): ShadowsHighlightsAdjustmentParametersHandle;
        getHighlights(self: ShadowsHighlightsAdjustmentParametersHandle): number;
        getShadows(self: ShadowsHighlightsAdjustmentParametersHandle): number;
        setHighlights(self: ShadowsHighlightsAdjustmentParametersHandle, highlights: number): void;
        setShadows(self: ShadowsHighlightsAdjustmentParametersHandle, shadows: number): void;
    }
    export const ShadowsHighlightsAdjustmentParametersApi: ShadowsHighlightsAdjustmentParametersApi;

    export interface ShadowsHighlightsAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ShadowsHighlightsAdjustmentRasterNodeHandle;
        getParameters(node: ShadowsHighlightsAdjustmentRasterNodeHandle): ShadowsHighlightsAdjustmentParametersHandle;
    }
    export const ShadowsHighlightsAdjustmentRasterNodeApi: ShadowsHighlightsAdjustmentRasterNodeApi;

    export interface ShadowsHighlightsAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: ShadowsHighlightsAdjustmentParametersHandle): ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle;
        createDefault(): ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle;
        getParameters(self: ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle): ShadowsHighlightsAdjustmentParametersHandle;
        setParameters(self: ShadowsHighlightsAdjustmentRasterNodeDefinitionHandle, parameters: ShadowsHighlightsAdjustmentParametersHandle): void;
    }
    export const ShadowsHighlightsAdjustmentRasterNodeDefinitionApi: ShadowsHighlightsAdjustmentRasterNodeDefinitionApi;

    export interface ShadowsHighlightsFilterParametersApi {
        create(): ShadowsHighlightsFilterParametersHandle;
        getHighlightsRadius(self: ShadowsHighlightsFilterParametersHandle): number;
        getHighlightsRange(self: ShadowsHighlightsFilterParametersHandle): number;
        getHighlightsStrength(self: ShadowsHighlightsFilterParametersHandle): number;
        getShadowsRadius(self: ShadowsHighlightsFilterParametersHandle): number;
        getShadowsRange(self: ShadowsHighlightsFilterParametersHandle): number;
        getShadowsStrength(self: ShadowsHighlightsFilterParametersHandle): number;
        getVersion(self: ShadowsHighlightsFilterParametersHandle): ShadowsHighlightsVersion;
        setHighlightsRadius(self: ShadowsHighlightsFilterParametersHandle, highlightsRadius: number): void;
        setHighlightsRange(self: ShadowsHighlightsFilterParametersHandle, highlightsRange: number): void;
        setHighlightsStrength(self: ShadowsHighlightsFilterParametersHandle, highlightsStrength: number): void;
        setShadowsRadius(self: ShadowsHighlightsFilterParametersHandle, shadowsRadius: number): void;
        setShadowsRange(self: ShadowsHighlightsFilterParametersHandle, shadowsRange: number): void;
        setShadowsStrength(self: ShadowsHighlightsFilterParametersHandle, shadowsStrength: number): void;
        setVersion(self: ShadowsHighlightsFilterParametersHandle, version: ShadowsHighlightsVersion): void;
    }
    export const ShadowsHighlightsFilterParametersApi: ShadowsHighlightsFilterParametersApi;

    export interface ShadowsHighlightsFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ShadowsHighlightsFilterRasterNodeHandle;
        getParameters(node: ShadowsHighlightsFilterRasterNodeHandle): ShadowsHighlightsFilterParametersHandle;
    }
    export const ShadowsHighlightsFilterRasterNodeApi: ShadowsHighlightsFilterRasterNodeApi;

    export interface ShadowsHighlightsFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: ShadowsHighlightsFilterParametersHandle): ShadowsHighlightsFilterRasterNodeDefinitionHandle;
        createDefault(): ShadowsHighlightsFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ShadowsHighlightsFilterRasterNodeDefinitionHandle;
        getParameters(self: ShadowsHighlightsFilterRasterNodeDefinitionHandle): ShadowsHighlightsFilterParametersHandle;
        setParameters(self: ShadowsHighlightsFilterRasterNodeDefinitionHandle, parameters: ShadowsHighlightsFilterParametersHandle): void;
    }
    export const ShadowsHighlightsFilterRasterNodeDefinitionApi: ShadowsHighlightsFilterRasterNodeDefinitionApi;

    export interface ShapeInterfaceApi {
        fromNode(node: NodeHandle): ShapeInterfaceHandle;
        getDomainTransform(self: ShapeInterfaceHandle): Transform;
        getNode(self: ShapeInterfaceHandle): NodeHandle;
        getShape(self: ShapeInterfaceHandle): ShapeHandle;
        getShapeBoundingBox(self: ShapeInterfaceHandle): Rectangle;
        getType(self: ShapeInterfaceHandle): ShapeType;
    }
    export const ShapeInterfaceApi: ShapeInterfaceApi;

    export interface ShapeNodeApi extends Omit<VectorNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ShapeNodeHandle;
        getArtboardInterface(self: ShapeNodeHandle): ArtboardInterfaceHandle;
        getShapeInterface(self: ShapeNodeHandle): ShapeInterfaceHandle;
    }
    export const ShapeNodeApi: ShapeNodeApi;

    export interface ShapeNodeDefinitionApi extends Omit<VectorNodeDefinitionApi, "fromNodeDefinition"> {
        create(shape: ShapeHandle, rectangle: Rectangle, brushFillDescriptorOrNull: FillDescriptorHandle | null, lineFillDescriptorOrNull: FillDescriptorHandle | null, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | null, transparencyFillDescriptorOrNull: FillDescriptorHandle | null): ShapeNodeDefinitionHandle;
        createDefault(): ShapeNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ShapeNodeDefinitionHandle;
        getBoundingRectangle(self: ShapeNodeDefinitionHandle): Rectangle;
        getShape(self: ShapeNodeDefinitionHandle): ShapeHandle;
        setBoundingRectangle(self: ShapeNodeDefinitionHandle, rectangle: Rectangle): void;
        setShape(self: ShapeNodeDefinitionHandle, shape: ShapeHandle): void;
    }
    export const ShapeNodeDefinitionApi: ShapeNodeDefinitionApi;

    export interface ShapePathTextNodeApi extends Omit<TextNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ShapePathTextNodeHandle;
        getShapeInterface(self: ShapePathTextNodeHandle): ShapeInterfaceHandle;
    }
    export const ShapePathTextNodeApi: ShapePathTextNodeApi;

    export interface ShapePathTextNodeDefinitionApi extends Omit<TextNodeDefinitionApi, "fromNodeDefinition"> {
        createFromStoryBuilder(shape: ShapeHandle, boundingRect: Rectangle, storyBuilder: StoryBuilderHandle): ShapePathTextNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ShapePathTextNodeDefinitionHandle;
    }
    export const ShapePathTextNodeDefinitionApi: ShapePathTextNodeDefinitionApi;

    export interface ShapeTextNodeApi extends Omit<TextNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ShapeTextNodeHandle;
        getShapeInterface(self: ShapeTextNodeHandle): ShapeInterfaceHandle;
    }
    export const ShapeTextNodeApi: ShapeTextNodeApi;

    export interface ShapeTextNodeDefinitionApi extends Omit<TextNodeDefinitionApi, "fromNodeDefinition"> {
        createFromStoryBuilder(shape: ShapeHandle, boundingRect: Rectangle, storyBuilder: StoryBuilderHandle): ShapeTextNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ShapeTextNodeDefinitionHandle;
    }
    export const ShapeTextNodeDefinitionApi: ShapeTextNodeDefinitionApi;

    export interface SphericalFilterParametersApi {
        create(): SphericalFilterParametersHandle;
        getIntensity(self: SphericalFilterParametersHandle): number;
        getPosition(self: SphericalFilterParametersHandle): Point;
        getRadius(self: SphericalFilterParametersHandle): number;
        setIntensity(self: SphericalFilterParametersHandle, intensity: number): void;
        setPosition(self: SphericalFilterParametersHandle, position: Point): void;
        setRadius(self: SphericalFilterParametersHandle, radius: number): void;
    }
    export const SphericalFilterParametersApi: SphericalFilterParametersApi;

    export interface SphericalFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): SphericalFilterRasterNodeHandle;
        getParameters(node: SphericalFilterRasterNodeHandle): SphericalFilterParametersHandle;
    }
    export const SphericalFilterRasterNodeApi: SphericalFilterRasterNodeApi;

    export interface SphericalFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: SphericalFilterParametersHandle): SphericalFilterRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): SphericalFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): SphericalFilterRasterNodeDefinitionHandle;
        getParameters(node: SphericalFilterRasterNodeDefinitionHandle): SphericalFilterParametersHandle;
        setParameters(node: SphericalFilterRasterNodeDefinitionHandle, parameters: SphericalFilterParametersHandle): void;
    }
    export const SphericalFilterRasterNodeDefinitionApi: SphericalFilterRasterNodeDefinitionApi;

    export interface SplitToningAdjustmentParametersApi {
        create(): SplitToningAdjustmentParametersHandle;
        getBalance(self: SplitToningAdjustmentParametersHandle): number;
        getHighlightsHue(self: SplitToningAdjustmentParametersHandle): number;
        getHighlightsSaturation(self: SplitToningAdjustmentParametersHandle): number;
        getShadowsHue(self: SplitToningAdjustmentParametersHandle): number;
        getShadowsSaturation(self: SplitToningAdjustmentParametersHandle): number;
        setBalance(self: SplitToningAdjustmentParametersHandle, balance: number): void;
        setHighlightsHue(self: SplitToningAdjustmentParametersHandle, highlightsHue: number): void;
        setHighlightsSaturation(self: SplitToningAdjustmentParametersHandle, highlightsSaturation: number): void;
        setShadowsHue(self: SplitToningAdjustmentParametersHandle, shadowsHue: number): void;
        setShadowsSaturation(self: SplitToningAdjustmentParametersHandle, shadowsSaturation: number): void;
    }
    export const SplitToningAdjustmentParametersApi: SplitToningAdjustmentParametersApi;

    export interface SplitToningAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): SplitToningAdjustmentRasterNodeHandle;
        getParameters(node: SplitToningAdjustmentRasterNodeHandle): SplitToningAdjustmentParametersHandle;
    }
    export const SplitToningAdjustmentRasterNodeApi: SplitToningAdjustmentRasterNodeApi;

    export interface SplitToningAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: SplitToningAdjustmentParametersHandle): SplitToningAdjustmentRasterNodeDefinitionHandle;
        createDefault(): SplitToningAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): SplitToningAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: SplitToningAdjustmentRasterNodeDefinitionHandle): SplitToningAdjustmentParametersHandle;
        setParameters(node: SplitToningAdjustmentRasterNodeDefinitionHandle, parameters: SplitToningAdjustmentParametersHandle): void;
    }
    export const SplitToningAdjustmentRasterNodeDefinitionApi: SplitToningAdjustmentRasterNodeDefinitionApi;

    export interface SpreadDocumentPropertiesApi extends Omit<ArtboardDocumentPropertiesApi, "clone" | "create"> {
        clone(self: SpreadDocumentPropertiesHandle): SpreadDocumentPropertiesHandle;
        create(): SpreadDocumentPropertiesHandle;
        getReflowPages(self: SpreadDocumentPropertiesHandle): boolean;
        getResamplerType(self: SpreadDocumentPropertiesHandle): RasterResamplerType;
        getUseMasterDrawingScale(self: SpreadDocumentPropertiesHandle): boolean;
        getUseMasterMargin(self: SpreadDocumentPropertiesHandle): boolean;
        setReflowPages(self: SpreadDocumentPropertiesHandle, reflowPages: boolean): void;
        setResamplerType(self: SpreadDocumentPropertiesHandle, resamplerType: RasterResamplerType): void;
        setUseMasterDrawingScale(self: SpreadDocumentPropertiesHandle, useMasterDrawingScale: boolean): void;
        setUseMasterMargin(self: SpreadDocumentPropertiesHandle, useMasterMargin: boolean): void;
    }
    export const SpreadDocumentPropertiesApi: SpreadDocumentPropertiesApi;

    export interface SpreadNodeApi extends Omit<PhysicalNodeApi, "fromNode"> {
        enumerateArtboards(self: SpreadNodeHandle, callback: (artboardRef: ArtboardInterfaceHandle) => EnumerationResult): void;
        fromNode(node: NodeHandle): SpreadNodeHandle;
        getArtboard(self: SpreadNodeHandle, index: number): ArtboardInterfaceHandle;
        getArtboardCount(self: SpreadNodeHandle): number;
        getFirstPageIndex(self: SpreadNodeHandle): number;
        getLastPageIndex(self: SpreadNodeHandle): number;
        getPageIndexOfBox(self: SpreadNodeHandle, rect: Rectangle, relativeToSpread: boolean): number;
        getPageIndexOfPoint(self: SpreadNodeHandle, point: Point, relativeToSpread: boolean): number;
        getPhysicalRootInterface(self: SpreadNodeHandle): PhysicalRootInterfaceHandle;
        getPhysicalRootPropertiesInterface(self: SpreadNodeHandle): PhysicalRootPropertiesInterfaceHandle;
        getSpreadExtents(self: SpreadNodeHandle, includeSpread: boolean, includeBleed: boolean, includeChildren: boolean): Rectangle;
        isFirstPage(self: SpreadNodeHandle): boolean;
        isLastPage(self: SpreadNodeHandle): boolean;
    }
    export const SpreadNodeApi: SpreadNodeApi;

    export interface StoryInterfaceApi {
        fromNode(node: NodeHandle): StoryInterfaceHandle;
        getDomainTransform(self: StoryInterfaceHandle): Transform;
        getNode(self: StoryInterfaceHandle): NodeHandle;
        getScalarDomainTransform(self: StoryInterfaceHandle): Transform;
        getStory(self: StoryInterfaceHandle): StoryHandle;
        getStoryRange(self: StoryInterfaceHandle): StoryRange;
        getTextDefaultType(self: StoryInterfaceHandle): TextDefaultType;
        getTextRenderScale(self: StoryInterfaceHandle): Transform;
        getTextUiScale(self: StoryInterfaceHandle): Transform;
        isMultiFrameTextFlow(self: StoryInterfaceHandle): boolean;
    }
    export const StoryInterfaceApi: StoryInterfaceApi;

    export interface SubSelectionApi {
        getSubSelectionType(self: SubSelectionHandle): SubSelectionType;
    }
    export const SubSelectionApi: SubSelectionApi;

    export interface TableSubSelectionApi extends SubSelectionApi {
        enumerateCells(self: TableSubSelectionHandle, callback: (cell: Point) => EnumerationResult): void;
        enumerateEdges(self: TableSubSelectionHandle, tableAxis: TableAxis, tableEdgeSelector: TableEdgeSelector, callback: (edge: Point) => EnumerationResult): void;
        fromSubSelection(subSelection: SubSelectionHandle): TableSubSelectionHandle;
        getAnchor(self: TableSubSelectionHandle): Point;
        getBoundingBox(self: TableSubSelectionHandle): Rectangle;
        getCaret(self: TableSubSelectionHandle): Point;
        isEmpty(self: TableSubSelectionHandle): boolean;
        isRectangle(self: TableSubSelectionHandle): boolean;
    }
    export const TableSubSelectionApi: TableSubSelectionApi;

    export interface TableTextNodeApi extends Omit<TextNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): TableTextNodeHandle;
    }
    export const TableTextNodeApi: TableTextNodeApi;

    export interface TableTextNodeDefinitionApi extends Omit<TextNodeDefinitionApi, "fromNodeDefinition"> {
        create(box: Rectangle, size: Size): TableTextNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): TableTextNodeDefinitionHandle;
    }
    export const TableTextNodeDefinitionApi: TableTextNodeDefinitionApi;

    export interface TagInterfaceApi {
        fromNode(node: NodeHandle): TagInterfaceHandle;
        getNode(self: TagInterfaceHandle): NodeHandle;
        getValueForKey(self: TagInterfaceHandle, key: string): string;
        getValueForPredefinedKey(self: TagInterfaceHandle, key: PredefinedTagKey): string;
        hasKey(self: TagInterfaceHandle, key: string): boolean;
        hasPredefinedKey(self: TagInterfaceHandle, key: PredefinedTagKey): boolean;
        isMarkAsDecoration(self: TagInterfaceHandle): boolean;
    }
    export const TagInterfaceApi: TagInterfaceApi;

    export interface TextFlowApi {
        getDocumentPageIndex(self: TextFlowHandle, frameIndex: number): number;
        getDocumentSpreadIndex(self: TextFlowHandle, frameIndex: number): number;
        getFrameCount(self: TextFlowHandle): number;
        getOverflowInfo(self: TextFlowHandle): TextFlowOverflowInfoHandle;
        getOverflowInfoAsync(self: TextFlowHandle, callback: (result: Error | null, overflowInfo: TextFlowOverflowInfoHandle | null) => void): void;
        hideOverflow(self: TextFlowHandle): boolean;
        ignoreTextWraps(self: TextFlowHandle): boolean;
        isEmpty(self: TextFlowHandle): boolean;
        isMultiFrameTextFlow(self: TextFlowHandle): boolean;
    }
    export const TextFlowApi: TextFlowApi;

    export interface TextFlowOverflowInfoApi {
        getPosition(self: TextFlowOverflowInfoHandle): number;
        getState(self: TextFlowOverflowInfoHandle): TextFlowOverflowState;
    }
    export const TextFlowOverflowInfoApi: TextFlowOverflowInfoApi;

    export interface TextFrameInterfaceApi {
        canHideOverflow(self: TextFrameInterfaceHandle): boolean;
        canUseBaselineGrid(self: TextFrameInterfaceHandle): boolean;
        canUseTextWraps(self: TextFrameInterfaceHandle): boolean;
        enumerateTextFlowNodes(self: TextFrameInterfaceHandle, callback: (node: TextNodeHandle) => EnumerationResult): void;
        fromNode(node: NodeHandle): TextFrameInterfaceHandle;
        getNode(self: TextFrameInterfaceHandle): NodeHandle;
        getScalarStoryToDomainTransform(self: TextFrameInterfaceHandle): Transform;
        getSpreadNode(self: TextFrameInterfaceHandle): SpreadNodeHandle;
        getStoryToDomainTransform(self: TextFrameInterfaceHandle): Transform;
        getTextBegin(self: TextFrameInterfaceHandle): number;
        getTextFlow(self: TextFrameInterfaceHandle): TextFlowHandle;
        getTextFlowIndex(self: TextFrameInterfaceHandle): number;
        getTextRenderScale(self: TextFrameInterfaceHandle): Transform;
        getTextUiScale(self: TextFrameInterfaceHandle): Transform;
        hasScaledText(self: TextFrameInterfaceHandle): boolean;
        ignoreBaselineGrid(self: TextFrameInterfaceHandle): boolean;
        ignoreTextWraps(self: TextFrameInterfaceHandle): boolean;
        isMultiFrameTextFlow(self: TextFrameInterfaceHandle): boolean;
        isTextFlowBack(self: TextFrameInterfaceHandle): boolean;
        isTextFlowFront(self: TextFrameInterfaceHandle): boolean;
        isWrappingText(self: TextFrameInterfaceHandle): boolean;
    }
    export const TextFrameInterfaceApi: TextFrameInterfaceApi;

    export interface TextNodeApi extends Omit<PhysicalNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): TextNodeHandle;
        getArtboardInterface(self: TextNodeHandle): ArtboardInterfaceHandle;
        getBrushFillInterface(self: TextNodeHandle): BrushFillInterfaceHandle;
        getCompoundOperationInterface(self: TextNodeHandle): CompoundOperationInterfaceHandle;
        getCurvesInterface(self: TextNodeHandle): CurvesInterfaceHandle;
        getLineStyleInterface(self: TextNodeHandle): LineStyleInterfaceHandle;
        getStoryInterface(self: TextNodeHandle): StoryInterfaceHandle;
        getTextFrameInterface(self: TextNodeHandle): TextFrameInterfaceHandle;
        getTransparencyInterface(self: TextNodeHandle): TransparencyInterfaceHandle;
    }
    export const TextNodeApi: TextNodeApi;

    export interface TextNodeDefinitionApi extends Omit<PhysicalNodeDefinitionApi, "fromNodeDefinition"> {
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): TextNodeDefinitionHandle;
    }
    export const TextNodeDefinitionApi: TextNodeDefinitionApi;

    export interface TextSelectionApi extends SubSelectionApi {
        create(storyRanges: StoryRange[]): TextSelectionHandle;
        enumerateRanges(self: TextSelectionHandle, callback: (range: StoryRange) => EnumerationResult): void;
        fromSubSelection(subSelection: SubSelectionHandle): TextSelectionHandle;
        getAnchor(self: TextSelectionHandle): number;
        getCaret(self: TextSelectionHandle): number;
        getMarkedTextBegin(self: TextSelectionHandle): number;
        getMarkedTextEnd(self: TextSelectionHandle): number;
        getRange(self: TextSelectionHandle, index: number): StoryRange;
        getRangeCount(self: TextSelectionHandle): number;
        hasMarkedText(self: TextSelectionHandle): boolean;
        isEmpty(self: TextSelectionHandle): boolean;
    }
    export const TextSelectionApi: TextSelectionApi;

    export interface TextVisibilityOptionsApi {
        anySet(self: TextVisibilityOptionsHandle): boolean;
        clone(self: TextVisibilityOptionsHandle): TextVisibilityOptionsHandle;
        create(): TextVisibilityOptionsHandle;
        equals(self: TextVisibilityOptionsHandle, other: TextVisibilityOptionsHandle): boolean;
        getHighlightFields(self: TextVisibilityOptionsHandle): boolean;
        getShowAnchors(self: TextVisibilityOptionsHandle): boolean;
        getShowIndexMarks(self: TextVisibilityOptionsHandle): boolean;
        getShowNoteMarks(self: TextVisibilityOptionsHandle): boolean;
        getShowSpecialCharacters(self: TextVisibilityOptionsHandle): boolean;
        setHighlightFields(self: TextVisibilityOptionsHandle, value: boolean): void;
        setNewViewDefaults(self: TextVisibilityOptionsHandle): void;
        setNone(self: TextVisibilityOptionsHandle): void;
        setShowAnchors(self: TextVisibilityOptionsHandle, value: boolean): void;
        setShowIndexMarks(self: TextVisibilityOptionsHandle, value: boolean): void;
        setShowNoteMarks(self: TextVisibilityOptionsHandle, value: boolean): void;
        setShowSpecialCharacters(self: TextVisibilityOptionsHandle, value: boolean): void;
    }
    export const TextVisibilityOptionsApi: TextVisibilityOptionsApi;

    export interface ThresholdAdjustmentParametersApi {
        create(): ThresholdAdjustmentParametersHandle;
        getThreshold(self: ThresholdAdjustmentParametersHandle): number;
        setThreshold(self: ThresholdAdjustmentParametersHandle, threshold: number): void;
    }
    export const ThresholdAdjustmentParametersApi: ThresholdAdjustmentParametersApi;

    export interface ThresholdAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ThresholdAdjustmentRasterNodeHandle;
        getParameters(node: ThresholdAdjustmentRasterNodeHandle): ThresholdAdjustmentParametersHandle;
    }
    export const ThresholdAdjustmentRasterNodeApi: ThresholdAdjustmentRasterNodeApi;

    export interface ThresholdAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: ThresholdAdjustmentParametersHandle): ThresholdAdjustmentRasterNodeDefinitionHandle;
        createDefault(): ThresholdAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ThresholdAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: ThresholdAdjustmentRasterNodeDefinitionHandle): ThresholdAdjustmentParametersHandle;
        setParameters(node: ThresholdAdjustmentRasterNodeDefinitionHandle, parameters: ThresholdAdjustmentParametersHandle): void;
    }
    export const ThresholdAdjustmentRasterNodeDefinitionApi: ThresholdAdjustmentRasterNodeDefinitionApi;

    export interface ToneCompressionAdjustmentParametersApi {
        create(): ToneCompressionAdjustmentParametersHandle;
        getColour(self: ToneCompressionAdjustmentParametersHandle): number;
        getExposure(self: ToneCompressionAdjustmentParametersHandle): number;
        getGamma(self: ToneCompressionAdjustmentParametersHandle): number;
        getMethod(self: ToneCompressionAdjustmentParametersHandle): ToneCompressionMethod;
        setColour(self: ToneCompressionAdjustmentParametersHandle, colour: number): void;
        setExposure(self: ToneCompressionAdjustmentParametersHandle, exposure: number): void;
        setGamma(self: ToneCompressionAdjustmentParametersHandle, gamma: number): void;
        setMethod(self: ToneCompressionAdjustmentParametersHandle, method: ToneCompressionMethod): void;
    }
    export const ToneCompressionAdjustmentParametersApi: ToneCompressionAdjustmentParametersApi;

    export interface ToneCompressionAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ToneCompressionAdjustmentRasterNodeHandle;
        getParameters(node: ToneCompressionAdjustmentRasterNodeHandle): ToneCompressionAdjustmentParametersHandle;
    }
    export const ToneCompressionAdjustmentRasterNodeApi: ToneCompressionAdjustmentRasterNodeApi;

    export interface ToneCompressionAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: ToneCompressionAdjustmentParametersHandle): ToneCompressionAdjustmentRasterNodeDefinitionHandle;
        createDefault(): ToneCompressionAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ToneCompressionAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: ToneCompressionAdjustmentRasterNodeDefinitionHandle): ToneCompressionAdjustmentParametersHandle;
        setParameters(node: ToneCompressionAdjustmentRasterNodeDefinitionHandle, parameters: ToneCompressionAdjustmentParametersHandle): void;
    }
    export const ToneCompressionAdjustmentRasterNodeDefinitionApi: ToneCompressionAdjustmentRasterNodeDefinitionApi;

    export interface ToneStretchAdjustmentParametersApi {
        create(): ToneStretchAdjustmentParametersHandle;
        getCompression(self: ToneStretchAdjustmentParametersHandle): number;
        getGamma(self: ToneStretchAdjustmentParametersHandle): number;
        getMethod(self: ToneStretchAdjustmentParametersHandle): ToneStretchMethod;
        getStretchFactor(self: ToneStretchAdjustmentParametersHandle): number;
        setCompression(self: ToneStretchAdjustmentParametersHandle, compression: number): void;
        setGamma(self: ToneStretchAdjustmentParametersHandle, gamma: number): void;
        setMethod(self: ToneStretchAdjustmentParametersHandle, method: ToneStretchMethod): void;
        setStretchFactor(self: ToneStretchAdjustmentParametersHandle, stretchFactor: number): void;
    }
    export const ToneStretchAdjustmentParametersApi: ToneStretchAdjustmentParametersApi;

    export interface ToneStretchAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): ToneStretchAdjustmentRasterNodeHandle;
        getParameters(node: ToneStretchAdjustmentRasterNodeHandle): ToneStretchAdjustmentParametersHandle;
    }
    export const ToneStretchAdjustmentRasterNodeApi: ToneStretchAdjustmentRasterNodeApi;

    export interface ToneStretchAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: ToneStretchAdjustmentParametersHandle): ToneStretchAdjustmentRasterNodeDefinitionHandle;
        createDefault(): ToneStretchAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): ToneStretchAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: ToneStretchAdjustmentRasterNodeDefinitionHandle): ToneStretchAdjustmentParametersHandle;
        setParameters(node: ToneStretchAdjustmentRasterNodeDefinitionHandle, parameters: ToneStretchAdjustmentParametersHandle): void;
    }
    export const ToneStretchAdjustmentRasterNodeDefinitionApi: ToneStretchAdjustmentRasterNodeDefinitionApi;

    export interface TransformInterfaceApi {
        fromNode(node: NodeHandle): TransformInterfaceHandle;
        getDomainTransform(self: TransformInterfaceHandle): Transform;
        getFocalPoint(self: TransformInterfaceHandle): FocalPoint;
        getFrameTextScale(self: TransformInterfaceHandle): Transform;
        getNode(self: TransformInterfaceHandle): NodeHandle;
        getStoryPinPathTransform(self: TransformInterfaceHandle): Transform;
        getTextFrameScaleToDomainTransform(self: TransformInterfaceHandle): Transform;
        getTransform(self: TransformInterfaceHandle, forceConstraints: boolean): Transform;
        getUnconstrainedTransform(self: TransformInterfaceHandle): Transform;
        prefersAspectRatioLockedResize(self: TransformInterfaceHandle): boolean;
    }
    export const TransformInterfaceApi: TransformInterfaceApi;

    export interface TransparencyInterfaceApi {
        fromNode(node: NodeHandle): TransparencyInterfaceHandle;
        getContentType(self: TransparencyInterfaceHandle): ContentType;
        getDomainTransform(self: TransparencyInterfaceHandle): Transform;
        getFillDescriptor(self: TransparencyInterfaceHandle): FillDescriptorHandle;
        getNode(self: TransparencyInterfaceHandle): NodeHandle;
        isTransparencyNone(self: TransparencyInterfaceHandle): boolean;
    }
    export const TransparencyInterfaceApi: TransparencyInterfaceApi;

    export interface TransparencyMeshSubSelectionApi extends SubSelectionApi {
        enumerateItems(self: TransparencyMeshSubSelectionHandle, callback: (meshSubSelectionItem: MeshSubSelectionItem) => EnumerationResult): void;
        fromSubSelection(subSelection: SubSelectionHandle): TransparencyMeshSubSelectionHandle;
        getItemCount(self: TransparencyMeshSubSelectionHandle): number;
        isEmpty(self: TransparencyMeshSubSelectionHandle): boolean;
    }
    export const TransparencyMeshSubSelectionApi: TransparencyMeshSubSelectionApi;

    export interface TransparencySubSelectionApi extends SubSelectionApi {
        clone(self: TransparencySubSelectionHandle): TransparencySubSelectionHandle;
        cloneAsTransparencySubSelection(self: TransparencySubSelectionHandle): TransparencySubSelectionHandle;
        fromSubSelection(subSelection: SubSelectionHandle): TransparencySubSelectionHandle;
        getIndex(self: TransparencySubSelectionHandle): number;
    }
    export const TransparencySubSelectionApi: TransparencySubSelectionApi;

    export interface TwirlFilterParametersApi {
        create(): TwirlFilterParametersHandle;
        getAngle(self: TwirlFilterParametersHandle): number;
        getPosition(self: TwirlFilterParametersHandle): Point;
        getRadius(self: TwirlFilterParametersHandle): number;
        setAngle(self: TwirlFilterParametersHandle, angle: number): void;
        setPosition(self: TwirlFilterParametersHandle, position: Point): void;
        setRadius(self: TwirlFilterParametersHandle, radius: number): void;
    }
    export const TwirlFilterParametersApi: TwirlFilterParametersApi;

    export interface TwirlFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): TwirlFilterRasterNodeHandle;
        getParameters(node: TwirlFilterRasterNodeHandle): TwirlFilterParametersHandle;
    }
    export const TwirlFilterRasterNodeApi: TwirlFilterRasterNodeApi;

    export interface TwirlFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: TwirlFilterParametersHandle): TwirlFilterRasterNodeDefinitionHandle;
        createDefault(document: DocumentHandle): TwirlFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): TwirlFilterRasterNodeDefinitionHandle;
        getParameters(node: TwirlFilterRasterNodeDefinitionHandle): TwirlFilterParametersHandle;
        setParameters(node: TwirlFilterRasterNodeDefinitionHandle, parameters: TwirlFilterParametersHandle): void;
    }
    export const TwirlFilterRasterNodeDefinitionApi: TwirlFilterRasterNodeDefinitionApi;

    export interface UnsharpMaskFilterParametersApi {
        create(): UnsharpMaskFilterParametersHandle;
        getFactor(self: UnsharpMaskFilterParametersHandle): number;
        getRadius(self: UnsharpMaskFilterParametersHandle): number;
        getThreshold(self: UnsharpMaskFilterParametersHandle): number;
        setFactor(self: UnsharpMaskFilterParametersHandle, factor: number): void;
        setRadius(self: UnsharpMaskFilterParametersHandle, radius: number): void;
        setThreshold(self: UnsharpMaskFilterParametersHandle, threshold: number): void;
    }
    export const UnsharpMaskFilterParametersApi: UnsharpMaskFilterParametersApi;

    export interface UnsharpMaskFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): UnsharpMaskFilterRasterNodeHandle;
        getParameters(node: UnsharpMaskFilterRasterNodeHandle): UnsharpMaskFilterParametersHandle;
    }
    export const UnsharpMaskFilterRasterNodeApi: UnsharpMaskFilterRasterNodeApi;

    export interface UnsharpMaskFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: UnsharpMaskFilterParametersHandle): UnsharpMaskFilterRasterNodeDefinitionHandle;
        createDefault(): UnsharpMaskFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): UnsharpMaskFilterRasterNodeDefinitionHandle;
        getParameters(node: UnsharpMaskFilterRasterNodeDefinitionHandle): UnsharpMaskFilterParametersHandle;
        setParameters(node: UnsharpMaskFilterRasterNodeDefinitionHandle, parameters: UnsharpMaskFilterParametersHandle): void;
    }
    export const UnsharpMaskFilterRasterNodeDefinitionApi: UnsharpMaskFilterRasterNodeDefinitionApi;

    export interface VectorNodeApi extends Omit<PhysicalNodeApi, "fromNode"> {
        canBeExpressedAsVectorClip(self: VectorNodeHandle): boolean;
        fromNode(node: NodeHandle): VectorNodeHandle;
        getBrushFillInterface(self: VectorNodeHandle): BrushFillInterfaceHandle;
        getCompoundOperationInterface(self: VectorNodeHandle): CompoundOperationInterfaceHandle;
        getCurvesInterface(self: VectorNodeHandle): CurvesInterfaceHandle;
        getLineStyleInterface(self: VectorNodeHandle): LineStyleInterfaceHandle;
        getPictureFrameInterface(self: VectorNodeHandle): PictureFrameInterfaceHandle;
        getTransparencyInterface(self: VectorNodeHandle): TransparencyInterfaceHandle;
    }
    export const VectorNodeApi: VectorNodeApi;

    export interface VectorNodeDefinitionApi extends Omit<PhysicalNodeDefinitionApi, "fromNodeDefinition"> {
        addBrushFillDescriptor(self: VectorNodeDefinitionHandle, brushFillDescriptorOrNull: FillDescriptorHandle | null): void;
        addLineDescriptors(self: VectorNodeDefinitionHandle, lineFillDescriptorOrNull: FillDescriptorHandle | null, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | null): void;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): VectorNodeDefinitionHandle;
        getBrushFillDescriptor(self: VectorNodeDefinitionHandle, index: number): FillDescriptorHandle;
        getBrushFillDescriptorCount(self: VectorNodeDefinitionHandle): number;
        getCurrentBrushFillIndex(self: VectorNodeDefinitionHandle): number;
        getCurrentLineDescriptorsIndex(self: VectorNodeDefinitionHandle): number;
        getLineDescriptors(self: VectorNodeDefinitionHandle, index: number): LineDescriptors;
        getLineDescriptorsCount(self: VectorNodeDefinitionHandle): number;
        getPictureFrameEnabled(self: VectorNodeDefinitionHandle): boolean;
        getTransparencyDescriptor(self: VectorNodeDefinitionHandle): FillDescriptorHandle;
        insertBrushFillDescriptor(self: VectorNodeDefinitionHandle, index: number, brushFillDescriptorOrNull: FillDescriptorHandle | null): void;
        insertLineDescriptors(self: VectorNodeDefinitionHandle, index: number, lineFillDescriptorOrNull: FillDescriptorHandle | null, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | null): void;
        removeBrushFillDescriptor(self: VectorNodeDefinitionHandle, index: number): void;
        removeLineDescriptors(self: VectorNodeDefinitionHandle, index: number): void;
        setBrushFillDescriptor(self: VectorNodeDefinitionHandle, index: number, brushFillDescriptorOrNull: FillDescriptorHandle | null): void;
        setCurrentBrushFillIndex(self: VectorNodeDefinitionHandle, index: number): void;
        setCurrentLineDescriptorsIndex(self: VectorNodeDefinitionHandle, index: number): void;
        setLineDescriptors(self: VectorNodeDefinitionHandle, index: number, lineFillDescriptorOrNull: FillDescriptorHandle | null, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | null): void;
        setPictureFrameEnabled(self: VectorNodeDefinitionHandle, pictureFrameEnabled: boolean): void;
        setTransparencyDescriptor(self: VectorNodeDefinitionHandle, transparencyFillDescriptorOrNull: FillDescriptorHandle | null): void;
    }
    export const VectorNodeDefinitionApi: VectorNodeDefinitionApi;

    export interface VibranceAdjustmentParametersApi {
        create(): VibranceAdjustmentParametersHandle;
        getSaturation(self: VibranceAdjustmentParametersHandle): number;
        getVibrance(self: VibranceAdjustmentParametersHandle): number;
        setSaturation(self: VibranceAdjustmentParametersHandle, saturation: number): void;
        setVibrance(self: VibranceAdjustmentParametersHandle, vibrance: number): void;
    }
    export const VibranceAdjustmentParametersApi: VibranceAdjustmentParametersApi;

    export interface VibranceAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): VibranceAdjustmentRasterNodeHandle;
        getParameters(node: VibranceAdjustmentRasterNodeHandle): VibranceAdjustmentParametersHandle;
    }
    export const VibranceAdjustmentRasterNodeApi: VibranceAdjustmentRasterNodeApi;

    export interface VibranceAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: VibranceAdjustmentParametersHandle): VibranceAdjustmentRasterNodeDefinitionHandle;
        createDefault(): VibranceAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): VibranceAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: VibranceAdjustmentRasterNodeDefinitionHandle): VibranceAdjustmentParametersHandle;
        setParameters(node: VibranceAdjustmentRasterNodeDefinitionHandle, parameters: VibranceAdjustmentParametersHandle): void;
    }
    export const VibranceAdjustmentRasterNodeDefinitionApi: VibranceAdjustmentRasterNodeDefinitionApi;

    export interface VignetteFilterParametersApi {
        create(): VignetteFilterParametersHandle;
        getExposure(self: VignetteFilterParametersHandle): number;
        getHardness(self: VignetteFilterParametersHandle): number;
        getScale(self: VignetteFilterParametersHandle): number;
        getShape(self: VignetteFilterParametersHandle): number;
        setExposure(self: VignetteFilterParametersHandle, exposure: number): void;
        setHardness(self: VignetteFilterParametersHandle, hardness: number): void;
        setScale(self: VignetteFilterParametersHandle, scale: number): void;
        setShape(self: VignetteFilterParametersHandle, shape: number): void;
    }
    export const VignetteFilterParametersApi: VignetteFilterParametersApi;

    export interface VignetteFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): VignetteFilterRasterNodeHandle;
        getParameters(node: VignetteFilterRasterNodeHandle): VignetteFilterParametersHandle;
    }
    export const VignetteFilterRasterNodeApi: VignetteFilterRasterNodeApi;

    export interface VignetteFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: VignetteFilterParametersHandle): VignetteFilterRasterNodeDefinitionHandle;
        createDefault(): VignetteFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): VignetteFilterRasterNodeDefinitionHandle;
        getParameters(node: VignetteFilterRasterNodeDefinitionHandle): VignetteFilterParametersHandle;
        setParameters(node: VignetteFilterRasterNodeDefinitionHandle, parameters: VignetteFilterParametersHandle): void;
    }
    export const VignetteFilterRasterNodeDefinitionApi: VignetteFilterRasterNodeDefinitionApi;

    export interface VisibilityInterfaceApi {
        getFillOpacity(self: VisibilityInterfaceHandle): number;
        getGlobalOpacity(self: VisibilityInterfaceHandle): number;
        getNode(self: VisibilityInterfaceHandle): NodeHandle;
        isVisible(self: VisibilityInterfaceHandle): boolean;
        isVisibleInDomain(self: VisibilityInterfaceHandle): boolean;
        isVisibleInExport(self: VisibilityInterfaceHandle): boolean;
        testVisibility(self: VisibilityInterfaceHandle, visibilityTestOptions: VisibilityTestOptionsHandle): boolean;
    }
    export const VisibilityInterfaceApi: VisibilityInterfaceApi;

    export interface VisibilityTestOptionsApi {
        clone(self: VisibilityTestOptionsHandle): VisibilityTestOptionsHandle;
        create(): VisibilityTestOptionsHandle;
        getAllowInvisibleLayers(self: VisibilityTestOptionsHandle): boolean;
        getApplyExportableVisibility(self: VisibilityTestOptionsHandle): boolean;
        getClipToSpread(self: VisibilityTestOptionsHandle): boolean;
        getIgnoreVisibilityFlags(self: VisibilityTestOptionsHandle): boolean;
        getShowEmptyRects(self: VisibilityTestOptionsHandle): boolean;
        getShowPictureFrames(self: VisibilityTestOptionsHandle): boolean;
        getTextVisibilityOptions(self: VisibilityTestOptionsHandle): TextVisibilityOptionsHandle;
        setAllowInvisibleLayers(self: VisibilityTestOptionsHandle, value: boolean): void;
        setApplyExportableVisibility(self: VisibilityTestOptionsHandle, value: boolean): void;
        setClipToSpread(self: VisibilityTestOptionsHandle, value: boolean): void;
        setIgnoreVisibilityFlags(self: VisibilityTestOptionsHandle, value: boolean): void;
        setShowEmptyRects(self: VisibilityTestOptionsHandle, value: boolean): void;
        setShowPictureFrames(self: VisibilityTestOptionsHandle, value: boolean): void;
        setTextVisibilityOptions(self: VisibilityTestOptionsHandle, textVisibilityOptions: TextVisibilityOptionsHandle): void;
    }
    export const VisibilityTestOptionsApi: VisibilityTestOptionsApi;

    export interface VoronoiFilterParametersApi {
        create(): VoronoiFilterParametersHandle;
        getCellSize(self: VoronoiFilterParametersHandle): number;
        getLineWidth(self: VoronoiFilterParametersHandle): number;
        setCellSize(self: VoronoiFilterParametersHandle, cellSize: number): void;
        setLineWidth(self: VoronoiFilterParametersHandle, lineWidth: number): void;
    }
    export const VoronoiFilterParametersApi: VoronoiFilterParametersApi;

    export interface VoronoiFilterRasterNodeApi extends Omit<FilterRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): VoronoiFilterRasterNodeHandle;
        getParameters(node: VoronoiFilterRasterNodeHandle): VoronoiFilterParametersHandle;
    }
    export const VoronoiFilterRasterNodeApi: VoronoiFilterRasterNodeApi;

    export interface VoronoiFilterRasterNodeDefinitionApi extends Omit<FilterRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: VoronoiFilterParametersHandle): VoronoiFilterRasterNodeDefinitionHandle;
        createDefault(): VoronoiFilterRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): VoronoiFilterRasterNodeDefinitionHandle;
        getParameters(node: VoronoiFilterRasterNodeDefinitionHandle): VoronoiFilterParametersHandle;
        setParameters(node: VoronoiFilterRasterNodeDefinitionHandle, parameters: VoronoiFilterParametersHandle): void;
    }
    export const VoronoiFilterRasterNodeDefinitionApi: VoronoiFilterRasterNodeDefinitionApi;

    export interface WhiteBalanceAdjustmentParametersApi {
        create(): WhiteBalanceAdjustmentParametersHandle;
        getTint(self: WhiteBalanceAdjustmentParametersHandle): number;
        getWhiteBalance(self: WhiteBalanceAdjustmentParametersHandle): number;
        setTint(self: WhiteBalanceAdjustmentParametersHandle, tint: number): void;
        setWhiteBalance(self: WhiteBalanceAdjustmentParametersHandle, whiteBalance: number): void;
    }
    export const WhiteBalanceAdjustmentParametersApi: WhiteBalanceAdjustmentParametersApi;

    export interface WhiteBalanceAdjustmentRasterNodeApi extends Omit<AdjustmentRasterNodeApi, "fromNode"> {
        fromNode(node: NodeHandle): WhiteBalanceAdjustmentRasterNodeHandle;
        getParameters(node: WhiteBalanceAdjustmentRasterNodeHandle): WhiteBalanceAdjustmentParametersHandle;
    }
    export const WhiteBalanceAdjustmentRasterNodeApi: WhiteBalanceAdjustmentRasterNodeApi;

    export interface WhiteBalanceAdjustmentRasterNodeDefinitionApi extends Omit<AdjustmentRasterNodeDefinitionApi, "create" | "fromNodeDefinition"> {
        create(parameters: WhiteBalanceAdjustmentParametersHandle): WhiteBalanceAdjustmentRasterNodeDefinitionHandle;
        createDefault(): WhiteBalanceAdjustmentRasterNodeDefinitionHandle;
        fromNodeDefinition(nodeDefinition: NodeDefinitionHandle): WhiteBalanceAdjustmentRasterNodeDefinitionHandle;
        getParameters(node: WhiteBalanceAdjustmentRasterNodeDefinitionHandle): WhiteBalanceAdjustmentParametersHandle;
        setParameters(node: WhiteBalanceAdjustmentRasterNodeDefinitionHandle, parameters: WhiteBalanceAdjustmentParametersHandle): void;
    }
    export const WhiteBalanceAdjustmentRasterNodeDefinitionApi: WhiteBalanceAdjustmentRasterNodeDefinitionApi;

}

// ---------------------------------------------------------------------------
// affinity:fills
// ---------------------------------------------------------------------------

declare module "affinity:fills" {

    import { BlendMode, UnitType } from "affinity:common";
    import { MeshApi, Point, Transform } from "affinity:geometry";
    import { RasterExtendType, RasterResamplerType } from "affinity:raster";

    export enum DiffusionCurveKind {
        Bezier,
        Ellipse,
        Arc,
        Line,
    }

    export enum DiffusionCurveSide {
        Left,
        Right,
    }

    export enum FillMask {
        None,
        Alpha,
        Noise,
        Intensity,
        All,
    }

    export enum FillType {
        Unknown,
        None,
        Solid,
        Gradient,
        Bitmap,
        Mesh,
        Hatch,
        Diffusion,
    }

    export enum GradientFillType {
        Linear,
        Elliptical,
        Radial,
        Conical,
    }

    export class DiffusionCurveParametric {
        centre: Point;
        radiusX: number;
        radiusY: number;
        rotation: number;
        angle0: number;
        angle1: number;
    }

    export class TransformInfo {
        transform: Transform;
        isAnchoredToSpread: boolean;
    }

    export interface BitmapFillApi extends Omit<FillApi, "clone"> {
        clone(self: BitmapFillHandle): BitmapFillHandle;
        cloneAsBitmapFill(self: BitmapFillHandle): BitmapFillHandle;
        create(bitmap: RasterObjectHandle, extendType: RasterExtendType, resamplerType: RasterResamplerType, ignoreAlpha: boolean): BitmapFillHandle;
        fromFill(fill: FillHandle): BitmapFillHandle;
        getBitmap(self: BitmapFillHandle): RasterObjectHandle;
        getExtendType(self: BitmapFillHandle): RasterExtendType;
        getIsIgnoreAlpha(self: BitmapFillHandle): boolean;
        getIsKOnly(self: BitmapFillHandle): boolean;
        getProfile(self: BitmapFillHandle): ColourProfileHandle;
        getUpsamplerType(self: BitmapFillHandle): RasterResamplerType;
        setExtendType(self: BitmapFillHandle, extendType: RasterExtendType): void;
        setIsKOnly(self: BitmapFillHandle, isKOnly: boolean): void;
        setProfile(self: BitmapFillHandle, colourProfile: ColourProfileHandle): void;
        setUpsamplerType(self: BitmapFillHandle, upsamplerType: RasterResamplerType): void;
    }
    export const BitmapFillApi: BitmapFillApi;

    export interface ColourMeshApi extends Omit<MeshApi, "clone"> {
        clone(self: ColourMeshHandle): ColourMeshHandle;
        cloneAsColourMesh(self: ColourMeshHandle): ColourMeshHandle;
        createDefaultNone(): ColourMeshHandle;
        createDefaultWhite(): ColourMeshHandle;
        createFromColour(colour: ColourHandle, size: number): ColourMeshHandle;
        createFromGradient(gradient: GradientHandle, isRadial: boolean): ColourMeshHandle;
        getNodeColour(self: ColourMeshHandle, xIndex: number, yIndex: number): ColourHandle;
        setNodeColour(self: ColourMeshHandle, xIndex: number, yIndex: number, colourOrNull: ColourHandle | null): void;
    }
    export const ColourMeshApi: ColourMeshApi;

    export interface DiffusionCurveSetApi {
        addArc(self: DiffusionCurveSetHandle, centre: Point, radiusX: number, radiusY: number, rotation: number, angle0: number, angle1: number, leftColourOrNull: ColourHandle | null, rightColourOrNull: ColourHandle | null): void;
        addCurve(self: DiffusionCurveSetHandle, points: Point[], leftColourOrNull: ColourHandle | null, rightColourOrNull: ColourHandle | null): void;
        addEllipse(self: DiffusionCurveSetHandle, centre: Point, radiusX: number, radiusY: number, rotation: number, leftColourOrNull: ColourHandle | null, rightColourOrNull: ColourHandle | null): void;
        addLine(self: DiffusionCurveSetHandle, start: Point, end: Point, leftColourOrNull: ColourHandle | null, rightColourOrNull: ColourHandle | null): void;
        clone(self: DiffusionCurveSetHandle): DiffusionCurveSetHandle;
        create(): DiffusionCurveSetHandle;
        createDefault(colourA: ColourHandle, colourB: ColourHandle): DiffusionCurveSetHandle;
        getBackgroundColour(self: DiffusionCurveSetHandle): ColourHandle;
        getBackgroundStrength(self: DiffusionCurveSetHandle): number;
        getCurveBlur(self: DiffusionCurveSetHandle, index: number): number;
        getCurveColour(self: DiffusionCurveSetHandle, index: number, side: DiffusionCurveSide): ColourHandle;
        getCurveCount(self: DiffusionCurveSetHandle): number;
        getCurveKind(self: DiffusionCurveSetHandle, index: number): DiffusionCurveKind;
        getCurveNodeCount(self: DiffusionCurveSetHandle, index: number): number;
        getCurveNodeSmooth(self: DiffusionCurveSetHandle, index: number, nodeIndex: number): boolean;
        getCurveParametric(self: DiffusionCurveSetHandle, index: number): DiffusionCurveParametric;
        getCurvePoint(self: DiffusionCurveSetHandle, index: number, pointIndex: number): Point;
        getCurvePointCount(self: DiffusionCurveSetHandle, index: number): number;
        getCurvePressure(self: DiffusionCurveSetHandle, index: number): CurveHandle;
        getCurveStrength(self: DiffusionCurveSetHandle, index: number): number;
        removeCurve(self: DiffusionCurveSetHandle, index: number): void;
        setBackgroundColour(self: DiffusionCurveSetHandle, colourOrNull: ColourHandle | null): void;
        setBackgroundStrength(self: DiffusionCurveSetHandle, strength: number): void;
        setCurveArc(self: DiffusionCurveSetHandle, index: number, centre: Point, radiusX: number, radiusY: number, rotation: number, angle0: number, angle1: number): void;
        setCurveBlur(self: DiffusionCurveSetHandle, index: number, blur: number): void;
        setCurveColour(self: DiffusionCurveSetHandle, index: number, side: DiffusionCurveSide, colourOrNull: ColourHandle | null): void;
        setCurveEllipse(self: DiffusionCurveSetHandle, index: number, centre: Point, radiusX: number, radiusY: number, rotation: number): void;
        setCurveLine(self: DiffusionCurveSetHandle, index: number, start: Point, end: Point): void;
        setCurveNodeSmooth(self: DiffusionCurveSetHandle, index: number, nodeIndex: number, smooth: boolean): void;
        setCurvePoints(self: DiffusionCurveSetHandle, index: number, points: Point[]): void;
        setCurvePressure(self: DiffusionCurveSetHandle, index: number, pressureOrNull: CurveHandle | null): void;
        setCurveStrength(self: DiffusionCurveSetHandle, index: number, strength: number): void;
    }
    export const DiffusionCurveSetApi: DiffusionCurveSetApi;

    export interface DiffusionFillApi extends Omit<FillApi, "clone"> {
        clone(self: DiffusionFillHandle): DiffusionFillHandle;
        cloneAsDiffusionFill(self: DiffusionFillHandle): DiffusionFillHandle;
        cloneWithNewCurves(self: DiffusionFillHandle, curveSet: DiffusionCurveSetHandle): DiffusionFillHandle;
        create(curveSet: DiffusionCurveSetHandle): DiffusionFillHandle;
        createDefault(): DiffusionFillHandle;
        fromFill(fill: FillHandle): DiffusionFillHandle;
        getCurves(self: DiffusionFillHandle): DiffusionCurveSetHandle;
    }
    export const DiffusionFillApi: DiffusionFillApi;

    export interface FillApi {
        clone(self: FillHandle): FillHandle;
        cloneAsFill(self: FillHandle): FillHandle;
        getAlpha(self: FillHandle): number;
        getFillType(self: FillHandle): FillType;
        getHasFlatAlpha(self: FillHandle): boolean;
        getHasNoise(self: FillHandle): boolean;
        getHasNonFullAlpha(self: FillHandle): boolean;
        getIntensity(self: FillHandle): number;
        getIsSpatiallyInvariant(self: FillHandle): boolean;
        getIsVisible(self: FillHandle, minAlpha: number): boolean;
        getMeanAlpha(self: FillHandle): number;
        getNoise(self: FillHandle): number;
        getTint(self: FillHandle): number;
        setAlpha(self: FillHandle, alpha: number): void;
        setIntensity(self: FillHandle, intensity: number): void;
        setNoise(self: FillHandle, noise: number): void;
        setTint(self: FillHandle, tint: number): void;
    }
    export const FillApi: FillApi;

    export interface FillDescriptorApi {
        clone(self: FillDescriptorHandle): FillDescriptorHandle;
        cloneWithNewBlendMode(self: FillDescriptorHandle, blendMode: BlendMode): FillDescriptorHandle;
        cloneWithNewFill(self: FillDescriptorHandle, fill: FillHandle): FillDescriptorHandle;
        cloneWithNewIsAnchoredToSpread(self: FillDescriptorHandle, isAnchoredToSpread: boolean): FillDescriptorHandle;
        cloneWithNewIsScaleWithObject(self: FillDescriptorHandle, isScaleWithObject: boolean): FillDescriptorHandle;
        cloneWithNewTransform(self: FillDescriptorHandle, transformOrNull: Transform | null): FillDescriptorHandle;
        cloneWithNewTransformInfo(self: FillDescriptorHandle, transformOrNull: Transform | null, anchoredToSpread: boolean): FillDescriptorHandle;
        create(fill: FillHandle, scaleWithObject: boolean, transformOrNull: Transform | null, blendMode: BlendMode, anchoredToSpread: boolean): FillDescriptorHandle;
        createNone(): FillDescriptorHandle;
        createSolid(solidFill: SolidFillHandle, blendMode: BlendMode): FillDescriptorHandle;
        getBlendMode(self: FillDescriptorHandle): BlendMode;
        getFill(self: FillDescriptorHandle): FillHandle;
        getIsAnchoredToSpread(self: FillDescriptorHandle): boolean;
        getIsScaleWithObject(self: FillDescriptorHandle): boolean;
        getTransform(self: FillDescriptorHandle): Transform;
        getTransformInfo(self: FillDescriptorHandle): TransformInfo;
    }
    export const FillDescriptorApi: FillDescriptorApi;

    export interface GradientFillApi extends Omit<FillApi, "clone"> {
        clone(self: GradientFillHandle): GradientFillHandle;
        cloneAsGradientFill(self: GradientFillHandle): GradientFillHandle;
        cloneWithNewGradient(self: GradientFillHandle, gradient: GradientHandle): GradientFillHandle;
        cloneWithNewGradientFillType(self: GradientFillHandle, gradientFillType: GradientFillType): GradientFillHandle;
        create(gradient: GradientHandle, gradientFillType: GradientFillType): GradientFillHandle;
        createDefault(): GradientFillHandle;
        fromFill(fill: FillHandle): GradientFillHandle;
        getGradient(self: GradientFillHandle): GradientHandle;
        getGradientFillType(self: GradientFillHandle): GradientFillType;
    }
    export const GradientFillApi: GradientFillApi;

    export interface HatchFillApi extends Omit<FillApi, "clone"> {
        clone(self: HatchFillHandle): HatchFillHandle;
        cloneAsHatchFill(self: HatchFillHandle): HatchFillHandle;
        create(hatchPattern: HatchPatternHandle, units: UnitType, penColourOrNull: ColourHandle | null, brushColourOrNull: ColourHandle | null, lineWeight: number): HatchFillHandle;
        fromFill(fill: FillHandle): HatchFillHandle;
        getBrushColour(self: HatchFillHandle): ColourHandle;
        getLineWeight(self: HatchFillHandle): number;
        getPattern(self: HatchFillHandle): HatchPatternHandle;
        getPenColour(self: HatchFillHandle): ColourHandle;
        getUnits(self: HatchFillHandle): UnitType;
        setBrushColour(self: HatchFillHandle, colourOrNull: ColourHandle | null): void;
        setLineWeight(self: HatchFillHandle, lineWeight: number): void;
        setPattern(self: HatchFillHandle, hatchPattern: HatchPatternHandle): void;
        setPenColour(self: HatchFillHandle, colourOrNull: ColourHandle | null): void;
        setUnits(self: HatchFillHandle, unitType: UnitType): void;
    }
    export const HatchFillApi: HatchFillApi;

    export interface MeshFillApi extends Omit<FillApi, "clone"> {
        clone(self: MeshFillHandle): MeshFillHandle;
        cloneAsMeshFill(self: MeshFillHandle): MeshFillHandle;
        create(colourMesh: ColourMeshHandle): MeshFillHandle;
        fromFill(fill: FillHandle): MeshFillHandle;
        getColourMesh(self: MeshFillHandle): ColourMeshHandle;
    }
    export const MeshFillApi: MeshFillApi;

    export interface NoFillApi extends Omit<FillApi, "clone"> {
        clone(self: NoFillHandle): NoFillHandle;
        cloneAsNoFill(self: NoFillHandle): NoFillHandle;
        create(): NoFillHandle;
        fromFill(fill: FillHandle): NoFillHandle;
    }
    export const NoFillApi: NoFillApi;

    export interface SolidFillApi extends Omit<FillApi, "clone"> {
        clone(self: SolidFillHandle): SolidFillHandle;
        cloneAsSolidFill(self: SolidFillHandle): SolidFillHandle;
        create(colour: ColourHandle): SolidFillHandle;
        createDefault(): SolidFillHandle;
        fromFill(fill: FillHandle): SolidFillHandle;
        getColour(self: SolidFillHandle): ColourHandle;
        setColour(self: SolidFillHandle, colour: ColourHandle): void;
    }
    export const SolidFillApi: SolidFillApi;

}

// ---------------------------------------------------------------------------
// affinity:fonts
// ---------------------------------------------------------------------------

declare module "affinity:fonts" {

    import { EnumerationResult } from "affinity:common";

    export enum FontField {
        PostscriptName,
        FamilyName,
        Weight,
        IsItalic,
        Width,
        Panose,
        VarParams,
        RibbiFamily,
        WwsFamily,
    }

    export enum FontMatch {
        Any,
        Family,
        Exact,
    }

    export enum FontWeight {
        Thin,
        ExtraLight,
        Light,
        Normal,
        Medium,
        SemiBold,
        Bold,
        ExtraBold,
        Black,
    }

    export enum FontWidth {
        UltraCondensed,
        ExtraCondensed,
        Condensed,
        SemiCondensed,
        Normal,
        SemiExpanded,
        Expanded,
        ExtraExpanded,
        UltraExpanded,
    }

    export enum PanoseType {
        Unknown,
        Unmatched,
        Body,
        Script,
        Decorative,
        Symbol,
    }

    export class VariableFontBold {
        regular: number;
        bold: number;
    }

    export class VariableFontItalic {
        regular: number;
        italic: number;
    }

    export interface FontApi {
        clone(self: FontHandle): FontHandle;
        cloneAsFont(self: FontHandle): FontHandle;
        create(family: string, weight: number, isItalic: boolean, width: FontWidth): FontHandle;
        createDefault(): FontHandle;
        createDefaultMonospaced(): FontHandle;
        createDefaultSymbol(): FontHandle;
        createEmpty(): FontHandle;
        enumerate(callback: (font: FontHandle) => EnumerationResult): void;
        getDistance(self: FontHandle, other: FontHandle): number;
        getFamilyName(self: FontHandle): string;
        getNormalizedWeight(self: FontHandle): number;
        getNormalizedWidth(self: FontHandle): number;
        getPanose(self: FontHandle): PanoseHandle;
        getPostscriptName(self: FontHandle): string;
        getPostscriptPrefix(self: FontHandle): string;
        getRibbiFamily(self: FontHandle): string;
        getTraitsName(self: FontHandle): string;
        getVariableBold(self: FontHandle): VariableFontBold;
        getVariableItalic(self: FontHandle): VariableFontItalic;
        getWeight(self: FontHandle): number;
        getWidth(self: FontHandle): FontWidth;
        getWwsFamily(self: FontHandle): string;
        isBold(self: FontHandle): boolean;
        isBoldAvailable(self: FontHandle): boolean;
        isCondensed(self: FontHandle): boolean;
        isExpanded(self: FontHandle): boolean;
        isItalic(self: FontHandle): boolean;
        isItalicAvailable(self: FontHandle): boolean;
        isNormal(self: FontHandle): boolean;
        isValid(self: FontHandle): boolean;
        isVariableBold(self: FontHandle): boolean;
        isVariableItalic(self: FontHandle): boolean;
        toString(self: FontHandle): string;
    }
    export const FontApi: FontApi;

    export interface FontCollectionApi {
        clone(self: FontCollectionHandle): FontCollectionHandle;
        cloneAsFontCollection(self: FontCollectionHandle): FontCollectionHandle;
        enumerateCollections(callback: (fontCollection: FontCollectionHandle) => EnumerationResult): void;
        getDefault(): FontCollectionHandle;
        getDisplayName(self: FontCollectionHandle): string;
    }
    export const FontCollectionApi: FontCollectionApi;

    export interface FontFamilyApi {
        clone(self: FontFamilyHandle): FontFamilyHandle;
        cloneAsFontFamily(self: FontFamilyHandle): FontFamilyHandle;
        enumerate(callback: (fontFamily: FontFamilyHandle) => EnumerationResult): void;
        enumerateFonts(self: FontFamilyHandle, callback: (font: FontHandle) => EnumerationResult): void;
        getFont(self: FontFamilyHandle, index: number): FontHandle;
        getFontCount(self: FontFamilyHandle): number;
        getName(self: FontFamilyHandle): string;
        hasFixed(self: FontFamilyHandle): boolean;
        hasVariations(self: FontFamilyHandle): boolean;
    }
    export const FontFamilyApi: FontFamilyApi;

    export interface PanoseApi {
        clone(self: PanoseHandle): PanoseHandle;
        cloneAsPanose(self: PanoseHandle): PanoseHandle;
        getDistance(self: PanoseHandle, other: PanoseHandle): number;
        is(self: PanoseHandle, panoseType: PanoseType): boolean;
        isEmpty(self: PanoseHandle): boolean;
        isMonospaced(self: PanoseHandle): boolean;
        isSansSerif(self: PanoseHandle): boolean;
        isSerif(self: PanoseHandle): boolean;
        toString(self: PanoseHandle): string;
    }
    export const PanoseApi: PanoseApi;

}

// ---------------------------------------------------------------------------
// affinity:fs
// ---------------------------------------------------------------------------

declare module "affinity:fs" {

    export enum CopyOptions {
        None,
        SkipExisting,
        OverwriteExisting,
        UpdateExisting,
        Recursive,
        CopySymlinks,
        SkipSymlinks,
        DirectoriesOnly,
        CreateSymlinks,
        CreateHardLinks,
    }

    export enum FileOrigin {
        Begin,
        Current,
        End,
    }

    export enum FilePermissions {
        None,
        OwnerRead,
        OwnerWrite,
        OwnerExec,
        OwnerAll,
        GroupRead,
        GroupWrite,
        GroupExec,
        GroupAll,
        OthersRead,
        OthersWrite,
        OthersExec,
        OthersAll,
        All,
        SetUid,
        SetGid,
        StickyBit,
        Mask,
        Unknown,
    }

    export enum PathType {
        None,
        NotFound,
        File,
        Directory,
        Symlink,
        Block,
        Character,
        Fifo,
        Socket,
        Unknown,
    }

    export enum PermOptions {
        Replace,
        Add,
        Remove,
        NoFollow,
    }

    export class FileSystemSpace {
        available: number;
        free: number;
        capacity: number;
    }

    export interface DirectoryIteratorApi {
        create(path: string): DirectoryIteratorHandle;
        getFileSize(self: DirectoryIteratorHandle, asBigInt: boolean): number;
        getFileStatus(self: DirectoryIteratorHandle): FileStatusHandle;
        getPath(self: DirectoryIteratorHandle): string;
        getSymlinkStatus(self: DirectoryIteratorHandle): FileStatusHandle;
        isDone(self: DirectoryIteratorHandle): boolean;
        next(self: DirectoryIteratorHandle): void;
    }
    export const DirectoryIteratorApi: DirectoryIteratorApi;

    export interface FileApi {
        close(self: FileHandle): void;
        closeAsync(self: FileHandle, cancelOps: boolean, callback: (errorCode: Error | null) => void): void;
        create(): FileHandle;
        flush(self: FileHandle): void;
        flushAsync(self: FileHandle, callback: (errorCode: Error | null) => void): void;
        getLength(self: FileHandle, asBigInt: boolean): number;
        getLengthAsync(self: FileHandle, callback: (errorCode: Error | null, length: number) => void, asBigInt: boolean): void;
        isEof(self: FileHandle): boolean;
        isEofAsync(self: FileHandle, callback: (errorCode: Error | null, isEof: boolean) => void): void;
        isOpen(self: FileHandle): boolean;
        open(self: FileHandle, path: string, mode: string): void;
        openFromResource(self: FileHandle, resource: ResourceHandle): void;
        read(self: FileHandle, buffer: BufferHandle | ArrayBuffer | SharedArrayBuffer | ArrayBufferView, length: number): number;
        readAsync(self: FileHandle, buffer: BufferHandle | ArrayBuffer | SharedArrayBuffer | ArrayBufferView, offset: number, length: number, position: number, callback: (err: Error | null, bytesRead: number) => void): void;
        seek(self: FileHandle, offset: number, origin: FileOrigin): void;
        seekAsync(self: FileHandle, offset: number, origin: FileOrigin, callback: (errorCode: Error | null) => void): void;
        tell(self: FileHandle, asBigInt: boolean): number;
        tellAsync(self: FileHandle, asBigInt: boolean, callback: (errorCode: Error | null, pos: number) => void): void;
        write(self: FileHandle, buffer: BufferHandle | ArrayBuffer | SharedArrayBuffer | ArrayBufferView, length: number): number;
        writeAsync(self: FileHandle, buffer: BufferHandle | ArrayBuffer | SharedArrayBuffer | ArrayBufferView, offset: number, length: number, position: number, callback: (err: Error | null, bytesWritten: number) => void): void;
    }
    export const FileApi: FileApi;

    export interface FileStatusApi {
        clone(self: FileStatusHandle): FileStatusHandle;
        getPermissions(self: FileStatusHandle): FilePermissions;
        getType(self: FileStatusHandle): PathType;
    }
    export const FileStatusApi: FileStatusApi;

    export interface FileSystemApi {
        areEquivalent(path1: string, path2: string): boolean;
        areEquivalentAsync(path1: string, path2: string, callback: (errorCode: Error | null, areEquivalent: boolean) => void): void;
        copy(from: string, to: string, options: CopyOptions): void;
        copyAsync(src: string, dest: string, options: CopyOptions, callback: (errorCode: Error | null) => void): void;
        copyFile(from: string, to: string, options: CopyOptions): void;
        copyFileAsync(src: string, dest: string, options: CopyOptions, callback: (errorCode: Error | null) => void): void;
        createDirectories(path: string): void;
        createDirectoriesAsync(path: string, callback: (errorCode: Error | null) => void): void;
        createDirectory(path: string): void;
        createDirectoryAsync(path: string, callback: (errorCode: Error | null) => void): void;
        createDirectorySymlink(target: string, link: string): void;
        createDirectorySymlinkAsync(target: string, link: string, callback: (errorCode: Error | null) => void): void;
        createSymlink(target: string, link: string): void;
        createSymlinkAsync(target: string, link: string, callback: (errorCode: Error | null) => void): void;
        exists(path: string): boolean;
        existsAsync(path: string, callback: (errorCode: Error | null, exists: boolean) => void): void;
        getAbsolute(path: string): string;
        getAbsoluteAsync(path: string, callback: (errorCode: Error | null, absolutePath: string) => void): void;
        getCanonical(target: string): string;
        getCanonicalAsync(target: string, callback: (errorCode: Error | null, canonicalPath: string) => void): void;
        getFileSize(path: string, asBigInt: boolean): number;
        getFileSizeAsync(path: string, callback: (errorCode: Error | null, size: number) => void, asBigInt: boolean): void;
        getFileStatus(path: string): FileStatusHandle;
        getFileStatusAsync(path: string, callback: (errorCode: Error | null, fileStatus: FileStatusHandle | null) => void): void;
        getHardLinkCount(path: string): number;
        getHardLinkCountAsync(path: string, callback: (errorCode: Error | null, num: number) => void): void;
        getSpace(path: string, asBigInt: boolean): FileSystemSpace;
        getSpaceAsync(path: string, callback: (err: Error | null, space: FileSystemSpace | null) => void, asBigInt: boolean): void;
        getSymlinkStatus(path: string): FileStatusHandle;
        getSymlinkStatusAsync(path: string, callback: (errorCode: Error | null, fileStatus: FileStatusHandle | null) => void): void;
        getWeaklyCanonical(target: string): string;
        getWeaklyCanonicalAsync(target: string, callback: (errorCode: Error | null, canonicalPath: string) => void): void;
        isBlockFile(path: string): boolean;
        isBlockFileAsync(path: string, callback: (errorCode: Error | null, isBlockFile: boolean) => void): void;
        isCharacterFile(path: string): boolean;
        isCharacterFileAsync(path: string, callback: (errorCode: Error | null, isCharacterFile: boolean) => void): void;
        isDirectory(path: string): boolean;
        isDirectoryAsync(path: string, callback: (errorCode: Error | null, isDirectory: boolean) => void): void;
        isEmpty(path: string): boolean;
        isEmptyAsync(path: string, callback: (errorCode: Error | null, isEmpty: boolean) => void): void;
        isFifo(path: string): boolean;
        isFifoAsync(path: string, callback: (errorCode: Error | null, isFifo: boolean) => void): void;
        isOther(path: string): boolean;
        isOtherAsync(path: string, callback: (errorCode: Error | null, isOther: boolean) => void): void;
        isRegularFile(path: string): boolean;
        isRegularFileAsync(path: string, callback: (errorCode: Error | null, isRegularFile: boolean) => void): void;
        isSocket(path: string): boolean;
        isSocketAsync(path: string, callback: (errorCode: Error | null, isSocket: boolean) => void): void;
        isSymlink(path: string): boolean;
        isSymlinkAsync(path: string, callback: (errorCode: Error | null, isSymlink: boolean) => void): void;
        readSymlink(path: string): string;
        readSymlinkAsync(path: string, callback: (errorCode: Error | null, target: string) => void): void;
        remove(path: string): void;
        removeAll(path: string): void;
        removeAllAsync(path: string, callback: (errorCode: Error | null) => void): void;
        removeAsync(path: string, callback: (errorCode: Error | null) => void): void;
        rename(oldPath: string, newPath: string): void;
        renameAsync(oldPath: string, newPath: string, callback: (errorCode: Error | null) => void): void;
        resizeFile(path: string, newSize: number): void;
        resizeFileAsync(path: string, newSize: number, callback: (errorCode: Error | null) => void): void;
        setFilePermissions(path: string, filePermissions: FilePermissions, permOptions: PermOptions): void;
        setFilePermissionsAsync(path: string, filePermissions: FilePermissions, permOptions: PermOptions, callback: (errorCode: Error | null) => void): void;
    }
    export const FileSystemApi: FileSystemApi;

}

// ---------------------------------------------------------------------------
// affinity:geometry
// ---------------------------------------------------------------------------

declare module "affinity:geometry" {

    import { EnumerationResult } from "affinity:common";

    export enum CurveCornerType {
        None,
        Round,
        Inverse,
        Straight,
        CutOut,
    }

    export enum CurveNodeStyle {
        None,
        Cusp,
        Smooth,
        Smart,
    }

    export enum CurveNodeType {
        OnCurve,
        Cubic1,
        Cubic2,
    }

    export enum MeshDirection {
        Left,
        Right,
        Up,
        Down,
    }

    export enum QRPayloadType {
        Text,
        URL,
        Phone,
        SMS,
        Email,
        WhatsApp,
        FaceTime,
        Location,
        Wifi,
        VEvent,
        VCard,
        DataMerge,
    }

    export enum ShapeArrowEndStyle {
        None,
        Arrow,
        TailTriangular,
        TailSquare,
        Circle,
        HalfCircleInner,
        HalfCircleOuter,
        Diamond,
        Box,
        Barb,
        Chevron,
    }

    export enum ShapeBoolParam {
        Arrow_LeftIsProportional,
        Arrow_RightIsProportional,
        CalloutEllipse_AbsoluteSizes,
        CalloutRectangle_SingleRadius,
        CalloutRectangle_AbsoluteSizes,
        Polygon_SmoothPoints,
        Rectangle_SingleRadius,
        Tear_FixedBallSize,
    }

    export enum ShapeCornerIndex {
        TopLeft,
        TopRight,
        BottomRight,
        BottomLeft,
    }

    export enum ShapeCornerType {
        Round,
        Straight,
        RoundInverse,
        Cutout,
        None,
    }

    export enum ShapeEnumParam {
        Rectangle_BottomLeftCornerType,
        Rectangle_BottomRightCornerType,
        Rectangle_TopLeftCornerType,
        Rectangle_TopRightCornerType,
        Arrow_LeftEndStyle,
        Arrow_RightEndStyle,
    }

    export enum ShapeFloatParam {
        Arrow_LeftLength,
        Arrow_LeftInnerOffset,
        Arrow_RightLength,
        Arrow_RightInnerOffset,
        Arrow_Thickness,
        CalloutEllipse_TailAngle,
        CalloutEllipse_TailEndPosition,
        CalloutEllipse_TailHeight,
        CalloutRectangle_BottomLeftRadius,
        CalloutRectangle_BottomRightRadius,
        CalloutRectangle_TopLeftRadius,
        CalloutRectangle_TopRightRadius,
        CalloutRectangle_TailEndPosition,
        CalloutRectangle_TailHeight,
        CalloutRectangle_TailPosition,
        CalloutRectangle_TailWidth,
        Cloud_InnerRadius,
        Cog_Curve,
        Cog_HoleRadius,
        Cog_InnerRadius,
        Cog_NotchSize,
        Cog_ToothSize,
        Crescent_ArcLeft,
        Crescent_ArcRight,
        Diamond_Position,
        DoubleStar_InnerRadius,
        DoubleStar_PointRadius,
        Heart_Spread,
        Pie_InnerRadius,
        Pie_StartAngle,
        Pie_EndAngle,
        Pie_Sweep,
        Polygon_Curve,
        Rectangle_BottomLeftRadius,
        Rectangle_BottomRightRadius,
        Rectangle_TopLeftRadius,
        Rectangle_TopRightRadius,
        Segment_Angle,
        Segment_LowerLine,
        Segment_UpperLine,
        SquareStar_Cutout,
        Star_CircleOuterRadius,
        Star_CircleInnerRadius,
        Star_InnerRadius,
        Star_LeftCurve,
        Star_RightCurve,
        Trapezoid_LeftPosition,
        Trapezoid_RightPosition,
        Triangle_Position,
        Tear_BallSize,
        Tear_Curve,
        Tear_Bend,
        Tear_TailPosition,
    }

    export enum ShapeIntParam {
        Cloud_BubbleCount,
        Cog_ToothCount,
        DoubleStar_PointCount,
        Polygon_SideCount,
        SquareStar_SideCount,
        Star_PointCount,
    }

    export enum ShapeMajorAxis {
        Y,
        X,
    }

    export enum ShapeSpiralStyle {
        SemiCircle,
        CounterSemiCircle,
        Fibonacci,
        SegmentedLogarithmic,
        SegmentedLinear,
        Plotted,
    }

    export enum ShapeType {
        Rectangle,
        Ellipse,
        Triangle,
        Diamond,
        Trapezoid,
        Polygon,
        Star,
        DoubleStar,
        Arrow,
        Pie,
        Cog,
        Cloud,
        CalloutRectangle,
        CalloutEllipse,
        Crescent,
        Segment,
        SquareStar,
        Tear,
        Heart,
        Cat,
        Cat2,
        Cat3,
        Cat4,
        QRCode,
        Spiral,
        Style,
    }

    export enum SplineProfile {
        Linear,
        SCurve,
        SmoothIn,
        SmoothOut,
        Squared,
        SquareRoot,
    }

    export enum WifiEncryptionType {
        None,
        WEP,
        WPA_WPA2,
    }

    export enum WindingOrder {
        OddEven,
        NonZero,
    }

    export class BoundingBox {
        bounds: Rectangle;
        isSet: boolean;
    }

    export class CubicBezier {
        #private;
        start: Point;
        c1: Point;
        c2: Point;
        end: Point;
    }

    export class CubicBezierPair {
        left: CubicBezier;
        right: CubicBezier;
    }

    export class CurveCornerData {
        type: CurveCornerType;
        radius: number;
    }

    export class CurveNode {
        position: Point;
        type: CurveNodeType;
        style: CurveNodeStyle;
        assign(source: CurveNode): void;
    }

    export class CurvePair {
        curveA: CurveHandle;
        curveB: CurveHandle;
    }

    export class Endpoints {
        start: Point;
        end: Point;
    }

    export class MeshSize {
        xSize: number;
        ySize: number;
    }

    export class Point {
        x: number;
        y: number;
    }

    export class PointMinMax {
        minPoint: Point;
        maxPoint: Point;
    }

    export class Rectangle {
        x: number;
        y: number;
        width: number;
        height: number;
        clone(): Rectangle;
    }

    export class ShapeTrapezoidPositions {
        left: number;
        right: number;
    }

    export class Size {
        width: number;
        height: number;
        clone(): Size;
    }

    export class SplineFindPointResult {
        index: number;
        isValid: boolean;
    }

    export class Transform {
        #private;
        data: number[];
    }

    export class TransformData {
        scaleX: number;
        scaleY: number;
        shear: number;
        rotation: number;
        translateX: number;
        translateY: number;
    }

    export class Vector {
        x: number;
        y: number;
    }

    export interface CubicBezierApi {
        assign(self: CubicBezier, other: CubicBezier): void;
        evaluate(self: CubicBezier, t: number): Point;
        getAcceleration(self: CubicBezier, t: number): Vector;
        getBoundingBox(self: CubicBezier): Rectangle;
        getClosestPoint(self: CubicBezier, pt: Point): Point;
        getControlBox(self: CubicBezier): Rectangle;
        getCurvature(self: CubicBezier, t: number): number;
        getLength(self: CubicBezier): number;
        getNormal(self: CubicBezier, t: number): Vector;
        getParamAtLength(self: CubicBezier, length: number): number;
        getTangent(self: CubicBezier, t: number): Vector;
        getVelocity(self: CubicBezier, t: number): Vector;
        makeLine(self: CubicBezier, start: Point, end: Point): void;
        reverse(self: CubicBezier): void;
        split(self: CubicBezier, t: number): CubicBezierPair;
        splitLeft(self: CubicBezier, t: number): CubicBezier;
        splitRight(self: CubicBezier, t: number): CubicBezier;
        transform(self: CubicBezier, transform: Transform): void;
    }
    export const CubicBezierApi: CubicBezierApi;

    export interface CurveApi {
        appendNode(self: CurveHandle, curveNode: CurveNode, cornerDataOrNull: CurveCornerData | null): void;
        clear(self: CurveHandle): void;
        clone(self: CurveHandle): CurveHandle;
        create(): CurveHandle;
        createDiamond(rectangle: Rectangle): CurveHandle;
        createEllipse(rectangle: Rectangle): CurveHandle;
        createLine(point1: Point, point2: Point): CurveHandle;
        createLozenge(point0: Point, point1: Point, radius: number): CurveHandle;
        createPrecisionEllipse(rectangle: Rectangle): CurveHandle;
        createPrecisionUnitCircle(): CurveHandle;
        createRectangle(rectangle: Rectangle): CurveHandle;
        cut(self: CurveHandle, isParametric: boolean, distance: number): CurvePair;
        enumerateNodes(self: CurveHandle, callback: (node: CurveNode, corner: CurveCornerData) => EnumerationResult): void;
        generatePolygon(self: CurveHandle, tolerance: number): PolygonHandle;
        getApproxBoundingBox(self: CurveHandle, transformOrNull: Transform | null): BoundingBox;
        getCorner(self: CurveHandle, pointIndex: number): CurveCornerData;
        getCubicBezier(self: CurveHandle, pointIndex: number): CubicBezier;
        getExactBoundingBox(self: CurveHandle, transformOrNull: Transform | null): BoundingBox;
        getFirstOnCurvePointIndex(self: CurveHandle): number;
        getLastOnCurvePointIndex(self: CurveHandle): number;
        getLength(self: CurveHandle): number;
        getNextOnCurvePointIndex(self: CurveHandle, pointIndex: number, allowWrapIfClosed: boolean): number;
        getNode(self: CurveHandle, index: number): CurveNode;
        getNodeCount(self: CurveHandle): number;
        getPath(self: CurveHandle): Point[];
        getPoint(self: CurveHandle, index: number): Point;
        getPointCount(self: CurveHandle): number;
        getPreviousOnCurvePointIndex(self: CurveHandle, pointIndex: number, allowWrapIfClosed: boolean): number;
        getSubPath(self: CurveHandle, start: number, count: number): Point[];
        isClockwise(self: CurveHandle): boolean;
        isClosed(self: CurveHandle): boolean;
        isEllipse(self: CurveHandle): boolean;
        isEllipseTolerance(self: CurveHandle, tolerance: number): boolean;
        isEmpty(self: CurveHandle): boolean;
        isPolyline(self: CurveHandle): boolean;
        isPolylineTolerance(self: CurveHandle, tolerance: number): boolean;
        isRectangle(self: CurveHandle): boolean;
        isRectangleTolerance(self: CurveHandle, tolerance: number): boolean;
        isStraightLine(self: CurveHandle): boolean;
        isStraightLineTolerance(self: CurveHandle, tolerance: number): boolean;
        makeClosed(self: CurveHandle): void;
        reverse(self: CurveHandle): void;
        setCorner(self: CurveHandle, pointIndex: number, curveCornerData: CurveCornerData, forceCorner: boolean): void;
        setPath(self: CurveHandle, points: Point[]): void;
        setPoint(self: CurveHandle, index: number, point: Point): void;
        transform(self: CurveHandle, transform: Transform): void;
    }
    export const CurveApi: CurveApi;

    export interface CurveBuilderApi {
        addArc(self: CurveBuilderHandle, startAngle: number, endAngle: number, radius: number, reverse: boolean): void;
        addBezier(self: CurveBuilderHandle, c0: Point, c1: Point, end: Point): void;
        addEllipse(self: CurveBuilderHandle, startAngle: number, endAngle: number, majorRadius: number, minorRadius: number, rotation: number, reverse: boolean): void;
        begin(self: CurveBuilderHandle, point: Point): void;
        bulgeRelative(self: CurveBuilderHandle, vector: Vector, bulge: number): void;
        bulgeTo(self: CurveBuilderHandle, point: Point, bulge: number): void;
        clone(self: CurveBuilderHandle): CurveBuilderHandle;
        close(self: CurveBuilderHandle): void;
        create(): CurveBuilderHandle;
        createCurve(self: CurveBuilderHandle): CurveHandle;
        lineRelative(self: CurveBuilderHandle, vector: Vector): void;
        lineTo(self: CurveBuilderHandle, point: Point): void;
        setCorner(self: CurveBuilderHandle, pointIndex: number, curveCornerData: CurveCornerData, forceCorner: boolean): void;
        transform(self: CurveBuilderHandle, transform: Transform): void;
        versineRelative(self: CurveBuilderHandle, vector: Vector, versine: number): void;
        versineTo(self: CurveBuilderHandle, point: Point, versine: number): void;
    }
    export const CurveBuilderApi: CurveBuilderApi;

    export interface MeshApi {
        clone(self: MeshHandle): MeshHandle;
        cloneAsMesh(self: MeshHandle): MeshHandle;
        deleteSpline(self: MeshHandle, isVertical: boolean, index: number): void;
        getCurveNodePosition(self: MeshHandle, xIndex: number, yIndex: number, direction: MeshDirection): Point;
        getNodePosition(self: MeshHandle, xIndex: number, yIndex: number): Point;
        getNodeStyle(self: MeshHandle, xIndex: number, yIndex: number): CurveNodeStyle;
        getSize(self: MeshHandle): MeshSize;
        insertSpline(self: MeshHandle, isVertical: boolean, index: number, param: number): void;
        setCurveNodePosition(self: MeshHandle, xIndex: number, yIndex: number, direction: MeshDirection, position: Point): void;
        setNodePosition(self: MeshHandle, xIndex: number, yIndex: number, position: Point): void;
        setNodeStyle(self: MeshHandle, xIndex: number, yIndex: number, style: CurveNodeStyle): void;
    }
    export const MeshApi: MeshApi;

    export interface PointApi {
        absEq(self: Point): void;
        assign(self: Point, other: Point): void;
        distance(point: Point, other: Point): number;
        distanceSquared(point: Point, other: Point): number;
        getAbs(point: Point): Point;
        getNeg(point: Point): Point;
        interpolate(point: Point, other: Point, t: number): Point;
        makeZero(self: Point): void;
        negEq(self: Point): void;
        scale(point: Point, s: number): Point;
        transform(point: Point, transform: Transform): Point;
        translate(point: Point, translation: Vector): Point;
        vectorTo(startPoint: Point, endPoint: Point): Vector;
    }
    export const PointApi: PointApi;

    export interface PolyCurveApi {
        addCurve(self: PolyCurveHandle, curve: CurveHandle, moveContents: boolean): void;
        clear(self: PolyCurveHandle): void;
        clone(self: PolyCurveHandle): PolyCurveHandle;
        create(): PolyCurveHandle;
        getApproxBoundingBox(self: PolyCurveHandle, transformOrNull: Transform | null): BoundingBox;
        getControlBoundingBox(self: PolyCurveHandle, transformOrNull: Transform | null): BoundingBox;
        getCurve(self: PolyCurveHandle, index: number, clone: boolean): CurveHandle;
        getCurveCount(self: PolyCurveHandle): number;
        getExactBoundingBox(self: PolyCurveHandle, transformOrNull: Transform | null): BoundingBox;
        removeEmptyCurves(self: PolyCurveHandle): void;
        transform(self: PolyCurveHandle, transform: Transform): void;
    }
    export const PolyCurveApi: PolyCurveApi;

    export interface PolyPolyCurveApi {
        addPolyCurve(self: PolyPolyCurveHandle, polyCurve: PolyCurveHandle, transformOrNull: Transform | null): void;
        addPolyPolyCurve(self: PolyPolyCurveHandle, polyPolyCurve: PolyPolyCurveHandle, transformOrNull: Transform | null): void;
        addRectangle(self: PolyPolyCurveHandle, rectangle: Rectangle, transformOrNull: Transform | null): void;
        clone(self: PolyPolyCurveHandle): PolyPolyCurveHandle;
        containsPoint(self: PolyPolyCurveHandle, point: Point, allowUnclosed: boolean, windingOrder: WindingOrder, performBoundsCheck: boolean): boolean;
        getApproxBoundingBox(self: PolyPolyCurveHandle, transformOrNull: Transform | null): BoundingBox;
        getExactBoundingBox(self: PolyPolyCurveHandle, transformOrNull: Transform | null): BoundingBox;
        getPolyCurve(self: PolyPolyCurveHandle, index: number): PolyCurveHandle;
        getPolyCurveCount(self: PolyPolyCurveHandle): number;
        getPolyCurveTransform(self: PolyPolyCurveHandle, index: number): Transform;
        getTransformedPolyCurve(self: PolyPolyCurveHandle, index: number): PolyCurveHandle;
        hasCorners(self: PolyPolyCurveHandle): boolean;
        hasCurves(self: PolyPolyCurveHandle): boolean;
        hasJoins(self: PolyPolyCurveHandle): boolean;
        intersectsRectangle(self: PolyPolyCurveHandle, transform: Transform, rectangle: Rectangle, closeCurves: boolean): boolean;
        isNearPoint(self: PolyPolyCurveHandle, point: Point, xTolerance: number, yTolerance: number, tolerance: number): boolean;
        isNearRectangle(self: PolyPolyCurveHandle, rectangle: Rectangle, tolerance: number): boolean;
        transform(self: PolyPolyCurveHandle, transformOrNull: Transform | null): void;
    }
    export const PolyPolyCurveApi: PolyPolyCurveApi;

    export interface PolygonApi {
        addPoint(self: PolygonHandle, point: Point): void;
        clear(self: PolygonHandle): void;
        clone(self: PolygonHandle): PolygonHandle;
        close(self: PolygonHandle): void;
        create(): PolygonHandle;
        createLine(point1: Point, point2: Point): PolygonHandle;
        createRectangle(rectangle: Rectangle): PolygonHandle;
        createTriangle(point1: Point, point2: Point, point3: Point): PolygonHandle;
        enumeratePoints(self: PolygonHandle, callback: (point: Point) => EnumerationResult): void;
        getBoundingBox(self: PolygonHandle, transformOrNull: Transform | null): BoundingBox;
        getPoint(self: PolygonHandle, index: number): Point;
        getPointCount(self: PolygonHandle): number;
        insertPoint(self: PolygonHandle, index: number, point: Point): void;
        isClockwise(self: PolygonHandle): boolean;
        isClosed(self: PolygonHandle): boolean;
        isEmpty(self: PolygonHandle): boolean;
        isRectangle(self: PolygonHandle): boolean;
        reverse(self: PolygonHandle): void;
    }
    export const PolygonApi: PolygonApi;

    export interface QRPayloadApi {
        clearPayload(self: QRPayloadHandle): void;
        clone(self: QRPayloadHandle): QRPayloadHandle;
        cloneAsQRPayload(self: QRPayloadHandle): QRPayloadHandle;
        create(type: QRPayloadType): QRPayloadHandle;
        getPayloadDisplayString(self: QRPayloadHandle): string;
        getPayloadString(self: QRPayloadHandle): string;
        getPayloadType(self: QRPayloadHandle): QRPayloadType;
        isPayloadValid(self: QRPayloadHandle): boolean;
        parse(text: string): QRPayloadHandle;
    }
    export const QRPayloadApi: QRPayloadApi;

    export interface QRPayloadDataMergeApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadDataMergeHandle): QRPayloadDataMergeHandle;
        cloneAsQRPayloadDataMerge(self: QRPayloadDataMergeHandle): QRPayloadDataMergeHandle;
        create(): QRPayloadDataMergeHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadDataMergeHandle;
        getDataMergeField(self: QRPayloadDataMergeHandle): string;
        hasPreviewValue(self: QRPayloadDataMergeHandle): boolean;
        setDataMergeField(self: QRPayloadDataMergeHandle, text: string): void;
        setPreviewValue(self: QRPayloadDataMergeHandle, text: string): void;
    }
    export const QRPayloadDataMergeApi: QRPayloadDataMergeApi;

    export interface QRPayloadEmailApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadEmailHandle): QRPayloadEmailHandle;
        cloneAsQRPayloadEmail(self: QRPayloadEmailHandle): QRPayloadEmailHandle;
        create(): QRPayloadEmailHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadEmailHandle;
        getAddress(self: QRPayloadEmailHandle): string;
        getBody(self: QRPayloadEmailHandle): string;
        getSubject(self: QRPayloadEmailHandle): string;
        isAddressValid(self: QRPayloadEmailHandle): boolean;
        setAddress(self: QRPayloadEmailHandle, text: string): void;
        setBody(self: QRPayloadEmailHandle, text: string): void;
        setSubject(self: QRPayloadEmailHandle, text: string): void;
    }
    export const QRPayloadEmailApi: QRPayloadEmailApi;

    export interface QRPayloadFaceTimeApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadFaceTimeHandle): QRPayloadFaceTimeHandle;
        cloneAsQRPayloadFaceTime(self: QRPayloadFaceTimeHandle): QRPayloadFaceTimeHandle;
        create(): QRPayloadFaceTimeHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadFaceTimeHandle;
        getRecipient(self: QRPayloadFaceTimeHandle): string;
        setRecipient(self: QRPayloadFaceTimeHandle, text: string): void;
    }
    export const QRPayloadFaceTimeApi: QRPayloadFaceTimeApi;

    export interface QRPayloadLocationApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadLocationHandle): QRPayloadLocationHandle;
        cloneAsQRPayloadLocation(self: QRPayloadLocationHandle): QRPayloadLocationHandle;
        create(): QRPayloadLocationHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadLocationHandle;
        getElevation(self: QRPayloadLocationHandle): string;
        getLatitude(self: QRPayloadLocationHandle): string;
        getLongitude(self: QRPayloadLocationHandle): string;
        isElevationValid(self: QRPayloadLocationHandle): boolean;
        isLatitudeValid(self: QRPayloadLocationHandle): boolean;
        isLongitudeValid(self: QRPayloadLocationHandle): boolean;
        setElevation(self: QRPayloadLocationHandle, text: string): void;
        setLatitude(self: QRPayloadLocationHandle, text: string): void;
        setLongitude(self: QRPayloadLocationHandle, text: string): void;
    }
    export const QRPayloadLocationApi: QRPayloadLocationApi;

    export interface QRPayloadPhoneApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadPhoneHandle): QRPayloadPhoneHandle;
        cloneAsQRPayloadPhone(self: QRPayloadPhoneHandle): QRPayloadPhoneHandle;
        create(): QRPayloadPhoneHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadPhoneHandle;
        getNumber(self: QRPayloadPhoneHandle): string;
        setNumber(self: QRPayloadPhoneHandle, text: string): void;
    }
    export const QRPayloadPhoneApi: QRPayloadPhoneApi;

    export interface QRPayloadSMSApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadSMSHandle): QRPayloadSMSHandle;
        cloneAsQRPayloadSMS(self: QRPayloadSMSHandle): QRPayloadSMSHandle;
        create(): QRPayloadSMSHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadSMSHandle;
        getContent(self: QRPayloadSMSHandle): string;
        getNumber(self: QRPayloadSMSHandle): string;
        isNumberValid(self: QRPayloadSMSHandle): boolean;
        setContent(self: QRPayloadSMSHandle, content: string): void;
        setNumber(self: QRPayloadSMSHandle, number: string): void;
    }
    export const QRPayloadSMSApi: QRPayloadSMSApi;

    export interface QRPayloadTextApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadTextHandle): QRPayloadTextHandle;
        cloneAsQRPayloadText(self: QRPayloadTextHandle): QRPayloadTextHandle;
        create(): QRPayloadTextHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadTextHandle;
        getText(self: QRPayloadTextHandle): string;
        setText(self: QRPayloadTextHandle, text: string): void;
    }
    export const QRPayloadTextApi: QRPayloadTextApi;

    export interface QRPayloadURLApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadURLHandle): QRPayloadURLHandle;
        cloneAsQRPayloadURL(self: QRPayloadURLHandle): QRPayloadURLHandle;
        create(): QRPayloadURLHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadURLHandle;
        getURL(self: QRPayloadURLHandle): string;
        isURLValid(self: QRPayloadURLHandle): boolean;
        setURL(self: QRPayloadURLHandle, text: string): void;
    }
    export const QRPayloadURLApi: QRPayloadURLApi;

    export interface QRPayloadVCardApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadVCardHandle): QRPayloadVCardHandle;
        cloneAsQRPayloadVCard(self: QRPayloadVCardHandle): QRPayloadVCardHandle;
        create(): QRPayloadVCardHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadVCardHandle;
        getBirthday(self: QRPayloadVCardHandle): string;
        getCity(self: QRPayloadVCardHandle): string;
        getCompany(self: QRPayloadVCardHandle): string;
        getCountry(self: QRPayloadVCardHandle): string;
        getEmail(self: QRPayloadVCardHandle): string;
        getFirstName(self: QRPayloadVCardHandle): string;
        getJobTitle(self: QRPayloadVCardHandle): string;
        getLastName(self: QRPayloadVCardHandle): string;
        getNotes(self: QRPayloadVCardHandle): string;
        getPhone(self: QRPayloadVCardHandle): string;
        getPostalCode(self: QRPayloadVCardHandle): string;
        getPrefixes(self: QRPayloadVCardHandle): string;
        getRegion(self: QRPayloadVCardHandle): string;
        getStreetAddress(self: QRPayloadVCardHandle): string;
        getSuffixes(self: QRPayloadVCardHandle): string;
        getWebsite(self: QRPayloadVCardHandle): string;
        isEmailValid(self: QRPayloadVCardHandle): boolean;
        isFirstNameValid(self: QRPayloadVCardHandle): boolean;
        isFullNameValid(self: QRPayloadVCardHandle): boolean;
        isLastNameValid(self: QRPayloadVCardHandle): boolean;
        isWebsiteValid(self: QRPayloadVCardHandle): boolean;
        setBirthday(self: QRPayloadVCardHandle, birthday: string): void;
        setCity(self: QRPayloadVCardHandle, city: string): void;
        setCompany(self: QRPayloadVCardHandle, company: string): void;
        setCountry(self: QRPayloadVCardHandle, country: string): void;
        setEmail(self: QRPayloadVCardHandle, email: string): void;
        setFirstName(self: QRPayloadVCardHandle, firstName: string): void;
        setJobTitle(self: QRPayloadVCardHandle, jobTitle: string): void;
        setLastName(self: QRPayloadVCardHandle, lastName: string): void;
        setNotes(self: QRPayloadVCardHandle, notes: string): void;
        setPhone(self: QRPayloadVCardHandle, phone: string): void;
        setPostalCode(self: QRPayloadVCardHandle, postalCode: string): void;
        setPrefixes(self: QRPayloadVCardHandle, prefixes: string): void;
        setRegion(self: QRPayloadVCardHandle, region: string): void;
        setStreetAddress(self: QRPayloadVCardHandle, streetAddress: string): void;
        setSuffixes(self: QRPayloadVCardHandle, suffixes: string): void;
        setWebsite(self: QRPayloadVCardHandle, website: string): void;
    }
    export const QRPayloadVCardApi: QRPayloadVCardApi;

    export interface QRPayloadWhatsAppApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadWhatsAppHandle): QRPayloadWhatsAppHandle;
        cloneAsQRPayloadWhatsApp(self: QRPayloadWhatsAppHandle): QRPayloadWhatsAppHandle;
        create(): QRPayloadWhatsAppHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadWhatsAppHandle;
        getContent(self: QRPayloadWhatsAppHandle): string;
        getNumber(self: QRPayloadWhatsAppHandle): string;
        setContent(self: QRPayloadWhatsAppHandle, content: string): void;
        setNumber(self: QRPayloadWhatsAppHandle, number: string): void;
    }
    export const QRPayloadWhatsAppApi: QRPayloadWhatsAppApi;

    export interface QRPayloadWifiApi extends Omit<QRPayloadApi, "clone" | "create"> {
        clone(self: QRPayloadWifiHandle): QRPayloadWifiHandle;
        cloneAsQRPayloadWifi(self: QRPayloadWifiHandle): QRPayloadWifiHandle;
        create(): QRPayloadWifiHandle;
        fromPayload(payload: QRPayloadHandle): QRPayloadWifiHandle;
        getEncryption(self: QRPayloadWifiHandle): WifiEncryptionType;
        getHidden(self: QRPayloadWifiHandle): boolean;
        getPassword(self: QRPayloadWifiHandle): string;
        getSSID(self: QRPayloadWifiHandle): string;
        isSSIDValid(self: QRPayloadWifiHandle): boolean;
        setEncryption(self: QRPayloadWifiHandle, encryption: WifiEncryptionType): void;
        setHidden(self: QRPayloadWifiHandle, hidden: boolean): void;
        setPassword(self: QRPayloadWifiHandle, password: string): void;
        setSSID(self: QRPayloadWifiHandle, ssid: string): void;
    }
    export const QRPayloadWifiApi: QRPayloadWifiApi;

    export interface RectangleApi {
        assign(dest: Rectangle, src: Rectangle): void;
        assignMinMax(dest: Rectangle, minPt: Point, maxPt: Point): void;
        centreOn(rect: Rectangle, pt: Point): void;
        getArea(rect: Rectangle): number;
        getBottomCentre(rect: Rectangle): Point;
        getBottomLeft(rect: Rectangle): Point;
        getBottomRight(rect: Rectangle): Point;
        getCentre(rect: Rectangle): Point;
        getCentreLeft(rect: Rectangle): Point;
        getCentreRight(rect: Rectangle): Point;
        getMaxPoint(rect: Rectangle): Point;
        getMinMaxPoints(rect: Rectangle): PointMinMax;
        getMinPoint(rect: Rectangle): Point;
        getTopCentre(rect: Rectangle): Point;
        getTopLeft(rect: Rectangle): Point;
        getTopRight(rect: Rectangle): Point;
        isFinite(rect: Rectangle): boolean;
        isValid(rect: Rectangle): boolean;
        makeNormalised(rect: Rectangle): void;
        makeZero(rect: Rectangle): void;
        moveTo(rect: Rectangle, pt: Point): void;
        offset(rect: Rectangle, vector: Vector): void;
    }
    export const RectangleApi: RectangleApi;

    export interface ShapeApi {
        clone(self: ShapeHandle): ShapeHandle;
        cloneAsShape(self: ShapeHandle): ShapeHandle;
        create(type: ShapeType): ShapeHandle;
        getCurves(self: ShapeHandle, rectangle: Rectangle, transform: Transform): PolyCurveHandle;
        getDefaultMinorAxisSize(self: ShapeHandle): number;
        getDisplayName(self: ShapeHandle): string;
        getMajorAxis(self: ShapeHandle): ShapeMajorAxis;
        getRotationOrder(self: ShapeHandle): number;
        getShapeType(self: ShapeHandle): ShapeType;
        getTransformedBounds(self: ShapeHandle, rectangle: Rectangle, transform: Transform): Rectangle;
        getTypeBaseType(type: ShapeType): ShapeType;
        getTypeDisplayName(type: ShapeType): string;
        isAffectedByScale(self: ShapeHandle): boolean;
    }
    export const ShapeApi: ShapeApi;

    export interface ShapeArrowApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeArrowHandle): ShapeArrowHandle;
        cloneAsShapeArrow(self: ShapeArrowHandle): ShapeArrowHandle;
        create(): ShapeArrowHandle;
        fromShape(shape: ShapeHandle): ShapeArrowHandle;
        getLeftEndStyle(self: ShapeArrowHandle): ShapeArrowEndStyle;
        getLeftInnerOffset(self: ShapeArrowHandle): number;
        getLeftIsProportional(self: ShapeArrowHandle): boolean;
        getLeftLength(self: ShapeArrowHandle): number;
        getRightEndStyle(self: ShapeArrowHandle): ShapeArrowEndStyle;
        getRightInnerOffset(self: ShapeArrowHandle): number;
        getRightIsProportional(self: ShapeArrowHandle): boolean;
        getRightLength(self: ShapeArrowHandle): number;
        getThickness(self: ShapeArrowHandle): number;
        setLeftEndStyle(self: ShapeArrowHandle, endStyle: ShapeArrowEndStyle): void;
        setLeftInnerOffset(self: ShapeArrowHandle, innerOffset: number, width: number, height: number): void;
        setLeftIsProportional(self: ShapeArrowHandle, proportional: boolean, width: number, height: number): void;
        setLeftLength(self: ShapeArrowHandle, length: number, width: number, height: number): void;
        setRightEndStyle(self: ShapeArrowHandle, endStyle: ShapeArrowEndStyle): void;
        setRightInnerOffset(self: ShapeArrowHandle, innerOffset: number, width: number, height: number): void;
        setRightIsProportional(self: ShapeArrowHandle, proportional: boolean, width: number, height: number): void;
        setRightLength(self: ShapeArrowHandle, length: number, width: number, height: number): void;
        setThickness(self: ShapeArrowHandle, thickness: number): void;
    }
    export const ShapeArrowApi: ShapeArrowApi;

    export interface ShapeCalloutEllipseApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCalloutEllipseHandle): ShapeCalloutEllipseHandle;
        cloneAsShapeCalloutEllipse(self: ShapeCalloutEllipseHandle): ShapeCalloutEllipseHandle;
        create(): ShapeCalloutEllipseHandle;
        fromShape(shape: ShapeHandle): ShapeCalloutEllipseHandle;
        getAbsoluteSizes(self: ShapeCalloutEllipseHandle): boolean;
        getTailAngle(self: ShapeCalloutEllipseHandle): number;
        getTailEndPosition(self: ShapeCalloutEllipseHandle): number;
        getTailHeight(self: ShapeCalloutEllipseHandle): number;
        setAbsoluteSizes(self: ShapeCalloutEllipseHandle, absoluteSizes: boolean, width: number, height: number): void;
        setTailAngle(self: ShapeCalloutEllipseHandle, tailAngle: number): void;
        setTailEndPosition(self: ShapeCalloutEllipseHandle, tailEndPosition: number): void;
        setTailHeight(self: ShapeCalloutEllipseHandle, tailHeight: number): void;
    }
    export const ShapeCalloutEllipseApi: ShapeCalloutEllipseApi;

    export interface ShapeCalloutRectangleApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCalloutRectangleHandle): ShapeCalloutRectangleHandle;
        cloneAsShapeCalloutRectangle(self: ShapeCalloutRectangleHandle): ShapeCalloutRectangleHandle;
        create(): ShapeCalloutRectangleHandle;
        fromShape(shape: ShapeHandle): ShapeCalloutRectangleHandle;
        getAbsoluteSizes(self: ShapeCalloutRectangleHandle): boolean;
        getCornerRadius(self: ShapeCalloutRectangleHandle, index: ShapeCornerIndex): number;
        getTailEndPosition(self: ShapeCalloutRectangleHandle): number;
        getTailHeight(self: ShapeCalloutRectangleHandle): number;
        getTailPosition(self: ShapeCalloutRectangleHandle): number;
        getTailWidth(self: ShapeCalloutRectangleHandle): number;
        getUseSingleRadius(self: ShapeCalloutRectangleHandle): boolean;
        setAbsoluteSizes(self: ShapeCalloutRectangleHandle, absoluteSizes: boolean, width: number, height: number): void;
        setCornerRadius(self: ShapeCalloutRectangleHandle, index: ShapeCornerIndex, cornerRadius: number, width: number, height: number): void;
        setTailEndPosition(self: ShapeCalloutRectangleHandle, tailEndPosition: number): void;
        setTailHeight(self: ShapeCalloutRectangleHandle, tailHeight: number): void;
        setTailPosition(self: ShapeCalloutRectangleHandle, tailPosition: number): void;
        setTailWidth(self: ShapeCalloutRectangleHandle, tailWidth: number): void;
        setUseSingleRadius(self: ShapeCalloutRectangleHandle, useSingleRadius: boolean): void;
    }
    export const ShapeCalloutRectangleApi: ShapeCalloutRectangleApi;

    export interface ShapeCat2Api extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCat2Handle): ShapeCat2Handle;
        cloneAsShapeCat2(self: ShapeCat2Handle): ShapeCat2Handle;
        create(): ShapeCat2Handle;
        fromShape(shape: ShapeHandle): ShapeCat2Handle;
    }
    export const ShapeCat2Api: ShapeCat2Api;

    export interface ShapeCat3Api extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCat3Handle): ShapeCat3Handle;
        cloneAsShapeCat3(self: ShapeCat3Handle): ShapeCat3Handle;
        create(): ShapeCat3Handle;
        fromShape(shape: ShapeHandle): ShapeCat3Handle;
    }
    export const ShapeCat3Api: ShapeCat3Api;

    export interface ShapeCat4Api extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCat4Handle): ShapeCat4Handle;
        cloneAsShapeCat4(self: ShapeCat4Handle): ShapeCat4Handle;
        create(): ShapeCat4Handle;
        fromShape(shape: ShapeHandle): ShapeCat4Handle;
    }
    export const ShapeCat4Api: ShapeCat4Api;

    export interface ShapeCatApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCatHandle): ShapeCatHandle;
        cloneAsShapeCat(self: ShapeCatHandle): ShapeCatHandle;
        create(): ShapeCatHandle;
        fromShape(shape: ShapeHandle): ShapeCatHandle;
    }
    export const ShapeCatApi: ShapeCatApi;

    export interface ShapeCloudApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCloudHandle): ShapeCloudHandle;
        cloneAsShapeCloud(self: ShapeCloudHandle): ShapeCloudHandle;
        create(): ShapeCloudHandle;
        fromShape(shape: ShapeHandle): ShapeCloudHandle;
        getBubbleCount(self: ShapeCloudHandle): number;
        getInnerRadius(self: ShapeCloudHandle): number;
        setBubbleCount(self: ShapeCloudHandle, bubbleCount: number): void;
        setInnerRadius(self: ShapeCloudHandle, innerRadius: number): void;
    }
    export const ShapeCloudApi: ShapeCloudApi;

    export interface ShapeCogApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCogHandle): ShapeCogHandle;
        cloneAsShapeCog(self: ShapeCogHandle): ShapeCogHandle;
        create(): ShapeCogHandle;
        fromShape(shape: ShapeHandle): ShapeCogHandle;
        getCurvature(self: ShapeCogHandle): number;
        getHoleRadius(self: ShapeCogHandle): number;
        getInnerRadius(self: ShapeCogHandle): number;
        getNotchSize(self: ShapeCogHandle): number;
        getToothCount(self: ShapeCogHandle): number;
        getToothSize(self: ShapeCogHandle): number;
        setCurvature(self: ShapeCogHandle, curvature: number): void;
        setHoleRadius(self: ShapeCogHandle, holeRadius: number): void;
        setInnerRadius(self: ShapeCogHandle, innerRadius: number): void;
        setNotchSize(self: ShapeCogHandle, notchSize: number): void;
        setToothCount(self: ShapeCogHandle, toothCount: number): void;
        setToothSize(self: ShapeCogHandle, toothSize: number): void;
    }
    export const ShapeCogApi: ShapeCogApi;

    export interface ShapeCrescentApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeCrescentHandle): ShapeCrescentHandle;
        cloneAsShapeCrescent(self: ShapeCrescentHandle): ShapeCrescentHandle;
        create(): ShapeCrescentHandle;
        fromShape(shape: ShapeHandle): ShapeCrescentHandle;
        getArcLeft(self: ShapeCrescentHandle): number;
        getArcRight(self: ShapeCrescentHandle): number;
        setArcLeft(self: ShapeCrescentHandle, arcLeft: number): void;
        setArcRight(self: ShapeCrescentHandle, arcRight: number): void;
    }
    export const ShapeCrescentApi: ShapeCrescentApi;

    export interface ShapeDiamondApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeDiamondHandle): ShapeDiamondHandle;
        cloneAsShapeDiamond(self: ShapeDiamondHandle): ShapeDiamondHandle;
        create(): ShapeDiamondHandle;
        fromShape(shape: ShapeHandle): ShapeDiamondHandle;
        getPosition(self: ShapeDiamondHandle): number;
        setPosition(self: ShapeDiamondHandle, position: number): void;
    }
    export const ShapeDiamondApi: ShapeDiamondApi;

    export interface ShapeDoubleStarApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeDoubleStarHandle): ShapeDoubleStarHandle;
        cloneAsShapeDoubleStar(self: ShapeDoubleStarHandle): ShapeDoubleStarHandle;
        create(): ShapeDoubleStarHandle;
        fromShape(shape: ShapeHandle): ShapeDoubleStarHandle;
        getInnerRadius(self: ShapeDoubleStarHandle): number;
        getPointCount(self: ShapeDoubleStarHandle): number;
        getPointRadius(self: ShapeDoubleStarHandle): number;
        setInnerRadius(self: ShapeDoubleStarHandle, innerRadius: number): void;
        setPointCount(self: ShapeDoubleStarHandle, pointCount: number): void;
        setPointRadius(self: ShapeDoubleStarHandle, pointRadius: number): void;
    }
    export const ShapeDoubleStarApi: ShapeDoubleStarApi;

    export interface ShapeEllipseApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeEllipseHandle): ShapeEllipseHandle;
        cloneAsShapeEllipse(self: ShapeEllipseHandle): ShapeEllipseHandle;
        create(): ShapeEllipseHandle;
        fromShape(shape: ShapeHandle): ShapeEllipseHandle;
    }
    export const ShapeEllipseApi: ShapeEllipseApi;

    export interface ShapeHeartApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeHeartHandle): ShapeHeartHandle;
        cloneAsShapeHeart(self: ShapeHeartHandle): ShapeHeartHandle;
        create(): ShapeHeartHandle;
        fromShape(shape: ShapeHandle): ShapeHeartHandle;
        getSpread(self: ShapeHeartHandle): number;
        setSpread(self: ShapeHeartHandle, spread: number): void;
    }
    export const ShapeHeartApi: ShapeHeartApi;

    export interface ShapePieApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapePieHandle): ShapePieHandle;
        cloneAsShapePie(self: ShapePieHandle): ShapePieHandle;
        closePie(self: ShapePieHandle): void;
        create(): ShapePieHandle;
        fromShape(shape: ShapeHandle): ShapePieHandle;
        getEndAngle(self: ShapePieHandle): number;
        getInnerRadius(self: ShapePieHandle): number;
        getIsClosed(self: ShapePieHandle): boolean;
        getStartAngle(self: ShapePieHandle): number;
        getSweep(self: ShapePieHandle): number;
        setEndAngle(self: ShapePieHandle, endAngle: number): void;
        setInnerRadius(self: ShapePieHandle, innerRadius: number): void;
        setStartAngle(self: ShapePieHandle, startAngle: number): void;
        setSweep(self: ShapePieHandle, sweep: number): void;
    }
    export const ShapePieApi: ShapePieApi;

    export interface ShapePolygonApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapePolygonHandle): ShapePolygonHandle;
        cloneAsShapePolygon(self: ShapePolygonHandle): ShapePolygonHandle;
        create(): ShapePolygonHandle;
        fromShape(shape: ShapeHandle): ShapePolygonHandle;
        getCurve(self: ShapePolygonHandle): number;
        getMinCurve(self: ShapePolygonHandle): number;
        getSideCount(self: ShapePolygonHandle): number;
        getSmoothPoints(self: ShapePolygonHandle): boolean;
        setCurve(self: ShapePolygonHandle, curve: number): void;
        setSideCount(self: ShapePolygonHandle, numSides: number): void;
        setSmoothPoints(self: ShapePolygonHandle, smoothPoints: boolean): void;
    }
    export const ShapePolygonApi: ShapePolygonApi;

    export interface ShapeQRCodeApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeQRCodeHandle): ShapeQRCodeHandle;
        cloneAsShapeQRCode(self: ShapeQRCodeHandle): ShapeQRCodeHandle;
        create(): ShapeQRCodeHandle;
        fromShape(shape: ShapeHandle): ShapeQRCodeHandle;
        getPayload(self: ShapeQRCodeHandle): QRPayloadHandle;
        setPayload(self: ShapeQRCodeHandle, payload: QRPayloadHandle): void;
    }
    export const ShapeQRCodeApi: ShapeQRCodeApi;

    export interface ShapeRectangleApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeRectangleHandle): ShapeRectangleHandle;
        cloneAsShapeRectangle(self: ShapeRectangleHandle): ShapeRectangleHandle;
        create(): ShapeRectangleHandle;
        fromShape(shape: ShapeHandle): ShapeRectangleHandle;
        getAbsoluteSizes(self: ShapeRectangleHandle): boolean;
        getCornerRadius(self: ShapeRectangleHandle, corner: ShapeCornerIndex): number;
        getCornerType(self: ShapeRectangleHandle, corner: ShapeCornerIndex): ShapeCornerType;
        getUseSingleRadius(self: ShapeRectangleHandle): boolean;
        isPlainRectangle(self: ShapeRectangleHandle): boolean;
        setAbsoluteSizes(self: ShapeRectangleHandle, absoluteSizes: boolean, width: number, height: number): void;
        setCornerRadius(self: ShapeRectangleHandle, corner: ShapeCornerIndex, cornerRadius: number, width: number, height: number): void;
        setCornerType(self: ShapeRectangleHandle, corner: ShapeCornerIndex, cornerType: ShapeCornerType): void;
        setUseSingleRadius(self: ShapeRectangleHandle, singleRadius: boolean): void;
    }
    export const ShapeRectangleApi: ShapeRectangleApi;

    export interface ShapeSegmentApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeSegmentHandle): ShapeSegmentHandle;
        cloneAsShapeSegment(self: ShapeSegmentHandle): ShapeSegmentHandle;
        create(): ShapeSegmentHandle;
        fromShape(shape: ShapeHandle): ShapeSegmentHandle;
        getAngle(self: ShapeSegmentHandle): number;
        getLowerLine(self: ShapeSegmentHandle): number;
        getUpperLine(self: ShapeSegmentHandle): number;
        setAngle(self: ShapeSegmentHandle, angle: number): void;
        setLowerLine(self: ShapeSegmentHandle, lowerLine: number): void;
        setUpperLine(self: ShapeSegmentHandle, upperLine: number): void;
    }
    export const ShapeSegmentApi: ShapeSegmentApi;

    export interface ShapeSpiralApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeSpiralHandle): ShapeSpiralHandle;
        cloneAsShapeSpiral(self: ShapeSpiralHandle): ShapeSpiralHandle;
        create(): ShapeSpiralHandle;
        fromShape(shape: ShapeHandle): ShapeSpiralHandle;
        getBias(self: ShapeSpiralHandle): number;
        getCapChoke(self: ShapeSpiralHandle): boolean;
        getChoke(self: ShapeSpiralHandle): number;
        getCusped(self: ShapeSpiralHandle): boolean;
        getDecay(self: ShapeSpiralHandle): number;
        getDecayPerSegment(self: ShapeSpiralHandle): boolean;
        getDivisions(self: ShapeSpiralHandle): number;
        getFlip(self: ShapeSpiralHandle): boolean;
        getInnerRadius(self: ShapeSpiralHandle): number;
        getPartTurn(self: ShapeSpiralHandle): number;
        getSegmentAngle(self: ShapeSpiralHandle): number;
        getStyle(self: ShapeSpiralHandle): ShapeSpiralStyle;
        getTurns(self: ShapeSpiralHandle): number;
        setBias(self: ShapeSpiralHandle, bias: number): void;
        setCapChoke(self: ShapeSpiralHandle, capChoke: boolean): void;
        setChoke(self: ShapeSpiralHandle, choke: number): void;
        setCusped(self: ShapeSpiralHandle, cusped: boolean): void;
        setDecay(self: ShapeSpiralHandle, decay: number): void;
        setDecayPerSegment(self: ShapeSpiralHandle, decayPerSegment: boolean): void;
        setDivisions(self: ShapeSpiralHandle, divisions: number): void;
        setFlip(self: ShapeSpiralHandle, flip: boolean): void;
        setInnerRadius(self: ShapeSpiralHandle, innerRadius: number): void;
        setPartTurn(self: ShapeSpiralHandle, partTurn: number): void;
        setSegmentAngle(self: ShapeSpiralHandle, segmentAngle: number): void;
        setStyle(self: ShapeSpiralHandle, style: ShapeSpiralStyle): void;
        setTurns(self: ShapeSpiralHandle, turns: number): void;
    }
    export const ShapeSpiralApi: ShapeSpiralApi;

    export interface ShapeSquareStarApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeSquareStarHandle): ShapeSquareStarHandle;
        cloneAsShapeSquareStar(self: ShapeSquareStarHandle): ShapeSquareStarHandle;
        create(): ShapeSquareStarHandle;
        fromShape(shape: ShapeHandle): ShapeSquareStarHandle;
        getCutout(self: ShapeSquareStarHandle): number;
        getSideCount(self: ShapeSquareStarHandle): number;
        setCutout(self: ShapeSquareStarHandle, cutout: number): void;
        setSideCount(self: ShapeSquareStarHandle, sideCount: number): void;
    }
    export const ShapeSquareStarApi: ShapeSquareStarApi;

    export interface ShapeStarApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeStarHandle): ShapeStarHandle;
        cloneAsShapeStar(self: ShapeStarHandle): ShapeStarHandle;
        create(): ShapeStarHandle;
        fromShape(shape: ShapeHandle): ShapeStarHandle;
        getCircleInnerRadius(self: ShapeStarHandle): number;
        getCircleOuterRadius(self: ShapeStarHandle): number;
        getCurvedEdges(self: ShapeStarHandle): boolean;
        getInnerRadius(self: ShapeStarHandle): number;
        getLeftCurve(self: ShapeStarHandle): number;
        getMaxCircleInnerRadius(self: ShapeStarHandle): number;
        getPointCount(self: ShapeStarHandle): number;
        getRightCurve(self: ShapeStarHandle): number;
        setCircleInnerRadius(self: ShapeStarHandle, innerRadius: number): void;
        setCircleOuterRadius(self: ShapeStarHandle, outerRadius: number): void;
        setCurvedEdges(self: ShapeStarHandle, curvedEdges: boolean): void;
        setInnerRadius(self: ShapeStarHandle, innerRadius: number): void;
        setLeftCurve(self: ShapeStarHandle, leftCurve: number): void;
        setPointCount(self: ShapeStarHandle, pointCount: number): void;
        setRightCurve(self: ShapeStarHandle, rightCurve: number): void;
    }
    export const ShapeStarApi: ShapeStarApi;

    export interface ShapeTearApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeTearHandle): ShapeTearHandle;
        cloneAsShapeTear(self: ShapeTearHandle): ShapeTearHandle;
        create(): ShapeTearHandle;
        fromShape(shape: ShapeHandle): ShapeTearHandle;
        getBallSize(self: ShapeTearHandle): number;
        getBend(self: ShapeTearHandle): number;
        getCurve(self: ShapeTearHandle): number;
        getFixedBallSize(self: ShapeTearHandle): boolean;
        getTailPosition(self: ShapeTearHandle): number;
        setBallSize(self: ShapeTearHandle, ballSize: number): void;
        setBend(self: ShapeTearHandle, bend: number): void;
        setCurve(self: ShapeTearHandle, curve: number): void;
        setFixedBallSize(self: ShapeTearHandle, fixedBallSize: boolean): void;
        setTailPosition(self: ShapeTearHandle, tailPosition: number): void;
    }
    export const ShapeTearApi: ShapeTearApi;

    export interface ShapeTrapezoidApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeTrapezoidHandle): ShapeTrapezoidHandle;
        cloneAsShapeTrapezoid(self: ShapeTrapezoidHandle): ShapeTrapezoidHandle;
        create(): ShapeTrapezoidHandle;
        fromShape(shape: ShapeHandle): ShapeTrapezoidHandle;
        getLeftPosition(self: ShapeTrapezoidHandle): number;
        getPositions(self: ShapeTrapezoidHandle): ShapeTrapezoidPositions;
        getRightPosition(self: ShapeTrapezoidHandle): number;
        setLeftPosition(self: ShapeTrapezoidHandle, leftPosition: number): void;
        setPositions(self: ShapeTrapezoidHandle, leftPosition: number, rightPosition: number): void;
        setRightPosition(self: ShapeTrapezoidHandle, rightPosition: number): void;
    }
    export const ShapeTrapezoidApi: ShapeTrapezoidApi;

    export interface ShapeTriangleApi extends Omit<ShapeApi, "clone" | "create"> {
        clone(self: ShapeTriangleHandle): ShapeTriangleHandle;
        cloneAsShapeTriangle(self: ShapeTriangleHandle): ShapeTriangleHandle;
        create(): ShapeTriangleHandle;
        fromShape(shape: ShapeHandle): ShapeTriangleHandle;
        getPosition(self: ShapeTriangleHandle): number;
        setPosition(self: ShapeTriangleHandle, position: number): void;
    }
    export const ShapeTriangleApi: ShapeTriangleApi;

    export interface SplineApi {
        clear(self: SplineHandle): void;
        clone(self: SplineHandle): SplineHandle;
        create(): SplineHandle;
        createFromPoints(points: Point[]): SplineHandle;
        createFromProfile(profile: SplineProfile): SplineHandle;
        findPoint(self: SplineHandle, point: Point): SplineFindPointResult;
        getPoint(self: SplineHandle, index: number): Point;
        getPointCount(self: SplineHandle): number;
        insertPoint(self: SplineHandle, point: Point): void;
        isLinear(self: SplineHandle): boolean;
        removePoint(self: SplineHandle, index: number): void;
        replaceOrInsertPoint(self: SplineHandle, point: Point): void;
        setIsLinear(self: SplineHandle, isLinear: boolean): void;
    }
    export const SplineApi: SplineApi;

    export interface TransformApi {
        add(left: Transform, right: Transform, result: Transform): void;
        applyToPoint(self: Transform, point: Point): Point;
        applyToVector(self: Transform, vector: Vector): Vector;
        assign(self: Transform, source: Transform): void;
        compose(self: Transform, data: TransformData): void;
        decompose(self: Transform): TransformData;
        invert(self: Transform): void;
        inverted(self: Transform): Transform;
        multiply(left: Transform, right: Transform, result: Transform): void;
        rotate(self: Transform, rads: number): void;
        scale(self: Transform, x: number, y: number): void;
        setIdentity(self: Transform): void;
        shear(self: Transform, x: number, y: number): void;
        subtract(left: Transform, right: Transform, result: Transform): void;
        translate(self: Transform, x: number, y: number): void;
    }
    export const TransformApi: TransformApi;

    export interface VectorApi {
        absEq(self: Vector): void;
        add(vector: Vector, other: Vector): Vector;
        assign(self: Vector, other: Vector): void;
        cross(vector: Vector, other: Vector): number;
        dot(vector: Vector, other: Vector): number;
        getAbs(vector: Vector): Vector;
        getAngle(vector: Vector): number;
        getAngleDeg(vector: Vector): number;
        getNeg(vector: Vector): Vector;
        getSpangle(vector: Vector): number;
        length(vector: Vector): number;
        lengthSquared(vector: Vector): number;
        makeZero(self: Vector): void;
        negEq(self: Vector): void;
        normalise(vector: Vector): Vector;
        reverse(vector: Vector): Vector;
        rotate(vector: Vector, rads: number): Vector;
        scale(vector: Vector, scale: number): Vector;
        subtract(vector: Vector, other: Vector): Vector;
        transform(vector: Vector, transform: Transform): Vector;
    }
    export const VectorApi: VectorApi;

}

// ---------------------------------------------------------------------------
// affinity:hatches
// ---------------------------------------------------------------------------

declare module "affinity:hatches" {

    import { EnumerationResult } from "affinity:common";
    import { Point, Vector } from "affinity:geometry";

    export interface HatchLineApi {
        clone(self: HatchLineHandle): HatchLineHandle;
        create(origin: Point, rot: number, step: Vector, pattern: number[]): HatchLineHandle;
        enumeratePattern(self: HatchLineHandle, callback: (dash: number) => EnumerationResult): void;
        getOrigin(self: HatchLineHandle): Point;
        getPatternDash(self: HatchLineHandle, index: number): number;
        getPatternDashCount(self: HatchLineHandle): number;
        getRotation(self: HatchLineHandle): number;
        getStep(self: HatchLineHandle): Vector;
        isSolid(self: HatchLineHandle): boolean;
        setOrigin(self: HatchLineHandle, origin: Point): void;
        setPattern(self: HatchLineHandle, pattern: number[]): void;
        setRotation(self: HatchLineHandle, rotationRads: number): void;
        setStep(self: HatchLineHandle, step: Vector): void;
    }
    export const HatchLineApi: HatchLineApi;

    export interface HatchPatternApi {
        appendHatchLine(self: HatchPatternHandle, hatchLine: HatchLineHandle): void;
        appendHatchLineData(self: HatchPatternHandle, origin: Point, rot: number, step: Vector, pattern: number[]): void;
        clearHatchLines(self: HatchPatternHandle): void;
        clone(self: HatchPatternHandle): HatchPatternHandle;
        createDefault(): HatchPatternHandle;
        createEmpty(): HatchPatternHandle;
        enumerateHatchLines(self: HatchPatternHandle, callback: (hatchLineRef: HatchLineHandle) => EnumerationResult): void;
        eraseHatchLine(self: HatchPatternHandle, index: number): void;
        getHatchLine(self: HatchPatternHandle, index: number): HatchLineHandle;
        getHatchLineCount(self: HatchPatternHandle): number;
        insertHatchLine(self: HatchPatternHandle, index: number, hatchLine: HatchLineHandle): void;
        insertHatchLineData(self: HatchPatternHandle, index: number, origin: Point, rot: number, step: Vector, pattern: number[]): void;
    }
    export const HatchPatternApi: HatchPatternApi;

}

// ---------------------------------------------------------------------------
// affinity:layereffects
// ---------------------------------------------------------------------------

declare module "affinity:layereffects" {

    import { BlendMode, EnumerationResult } from "affinity:common";
    import { SplineProfile, Transform } from "affinity:geometry";
    import { StrokeAlignment } from "affinity:linestyles";

    export enum BevelEmbossType {
        Inner,
        Outer,
        Emboss,
        Pillow,
    }

    export enum LayerEffectType {
        BevelEmboss,
        Outline,
        PhongBevel,
        InnerShadow,
        InnerGlow,
        ColourOverlay,
        GradientOverlay,
        OuterGlow,
        OuterShadow,
        GaussianBlur,
    }

    export enum StrokeFillType {
        Solid,
        Contour,
        Gradient,
    }

    export interface BevelEmbossLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        clone(self: BevelEmbossLayerEffectHandle): BevelEmbossLayerEffectHandle;
        cloneAsBevelEmbossLayerEffect(self: BevelEmbossLayerEffectHandle): BevelEmbossLayerEffectHandle;
        create(): BevelEmbossLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): BevelEmbossLayerEffectHandle;
        getAzimuth(self: BevelEmbossLayerEffectHandle): number;
        getBevelEmbossType(self: BevelEmbossLayerEffectHandle): BevelEmbossType;
        getBevelProfile(self: BevelEmbossLayerEffectHandle): SplineHandle;
        getDepth(self: BevelEmbossLayerEffectHandle): number;
        getElevation(self: BevelEmbossLayerEffectHandle): number;
        getHighlightBlendMode(self: BevelEmbossLayerEffectHandle): BlendMode;
        getHighlightColour(self: BevelEmbossLayerEffectHandle): ColourHandle;
        getHighlightOpacity(self: BevelEmbossLayerEffectHandle): number;
        getInvert(self: BevelEmbossLayerEffectHandle): boolean;
        getRadius(self: BevelEmbossLayerEffectHandle): number;
        getShadowBlendMode(self: BevelEmbossLayerEffectHandle): BlendMode;
        getShadowColour(self: BevelEmbossLayerEffectHandle): ColourHandle;
        getShadowOpacity(self: BevelEmbossLayerEffectHandle): number;
        getSoften(self: BevelEmbossLayerEffectHandle): number;
        setAzimuth(self: BevelEmbossLayerEffectHandle, azimuth: number): void;
        setBevelEmbossType(self: BevelEmbossLayerEffectHandle, bevelEmbossType: BevelEmbossType): void;
        setBevelProfile(self: BevelEmbossLayerEffectHandle, bevelProfileOrNull: SplineHandle | null): void;
        setDepth(self: BevelEmbossLayerEffectHandle, depth: number): void;
        setElevation(self: BevelEmbossLayerEffectHandle, elevation: number): void;
        setHighlightBlendMode(self: BevelEmbossLayerEffectHandle, highlightBlendMode: BlendMode): void;
        setHighlightColour(self: BevelEmbossLayerEffectHandle, highlightColour: ColourHandle): void;
        setHighlightOpacity(self: BevelEmbossLayerEffectHandle, highlightOpacity: number): void;
        setInvert(self: BevelEmbossLayerEffectHandle, invert: boolean): void;
        setRadius(self: BevelEmbossLayerEffectHandle, radius: number): void;
        setShadowBlendMode(self: BevelEmbossLayerEffectHandle, shadowBlendMode: BlendMode): void;
        setShadowColour(self: BevelEmbossLayerEffectHandle, shadowColour: ColourHandle): void;
        setShadowOpacity(self: BevelEmbossLayerEffectHandle, shadowOpacity: number): void;
        setSoften(self: BevelEmbossLayerEffectHandle, soften: number): void;
        setStandardBevelProfile(self: BevelEmbossLayerEffectHandle, standardProfile: SplineProfile): void;
    }
    export const BevelEmbossLayerEffectApi: BevelEmbossLayerEffectApi;

    export interface ColourOverlayLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        clone(self: ColourOverlayLayerEffectHandle): ColourOverlayLayerEffectHandle;
        cloneAsColourOverlayLayerEffect(self: ColourOverlayLayerEffectHandle): ColourOverlayLayerEffectHandle;
        create(): ColourOverlayLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): ColourOverlayLayerEffectHandle;
        getColour(self: ColourOverlayLayerEffectHandle): ColourHandle;
        setColour(self: ColourOverlayLayerEffectHandle, colour: ColourHandle): void;
    }
    export const ColourOverlayLayerEffectApi: ColourOverlayLayerEffectApi;

    export interface GaussianBlurLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        clone(self: GaussianBlurLayerEffectHandle): GaussianBlurLayerEffectHandle;
        cloneAsGaussianBlurLayerEffect(self: GaussianBlurLayerEffectHandle): GaussianBlurLayerEffectHandle;
        create(): GaussianBlurLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): GaussianBlurLayerEffectHandle;
        getPreserveAlpha(self: GaussianBlurLayerEffectHandle): boolean;
        getRadius(self: GaussianBlurLayerEffectHandle): number;
        setPreserveAlpha(self: GaussianBlurLayerEffectHandle, preserveAlpha: boolean): void;
        setRadius(self: GaussianBlurLayerEffectHandle, radius: number): void;
    }
    export const GaussianBlurLayerEffectApi: GaussianBlurLayerEffectApi;

    export interface GradientOverlayLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        calculateTransform(scaleX: number, scaleY: number, offsetX: number, offsetY: number): Transform;
        clone(self: GradientOverlayLayerEffectHandle): GradientOverlayLayerEffectHandle;
        cloneAsGradientOverlayLayerEffect(self: GradientOverlayLayerEffectHandle): GradientOverlayLayerEffectHandle;
        create(): GradientOverlayLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): GradientOverlayLayerEffectHandle;
        getFillDescriptor(self: GradientOverlayLayerEffectHandle): FillDescriptorHandle;
        setFillDescriptor(self: GradientOverlayLayerEffectHandle, fillDescriptor: FillDescriptorHandle): void;
    }
    export const GradientOverlayLayerEffectApi: GradientOverlayLayerEffectApi;

    export interface InnerGlowLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        clone(self: InnerGlowLayerEffectHandle): InnerGlowLayerEffectHandle;
        cloneAsInnerGlowLayerEffect(self: InnerGlowLayerEffectHandle): InnerGlowLayerEffectHandle;
        create(): InnerGlowLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): InnerGlowLayerEffectHandle;
        getCentre(self: InnerGlowLayerEffectHandle): boolean;
        getColour(self: InnerGlowLayerEffectHandle): ColourHandle;
        getIntensity(self: InnerGlowLayerEffectHandle): number;
        getRadius(self: InnerGlowLayerEffectHandle): number;
        setCentre(self: InnerGlowLayerEffectHandle, centre: boolean): void;
        setColour(self: InnerGlowLayerEffectHandle, colour: ColourHandle): void;
        setIntensity(self: InnerGlowLayerEffectHandle, intensity: number): void;
        setRadius(self: InnerGlowLayerEffectHandle, radius: number): void;
    }
    export const InnerGlowLayerEffectApi: InnerGlowLayerEffectApi;

    export interface InnerShadowLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        clone(self: InnerShadowLayerEffectHandle): InnerShadowLayerEffectHandle;
        cloneAsInnerShadowLayerEffect(self: InnerShadowLayerEffectHandle): InnerShadowLayerEffectHandle;
        create(): InnerShadowLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): InnerShadowLayerEffectHandle;
        getAngle(self: InnerShadowLayerEffectHandle): number;
        getColour(self: InnerShadowLayerEffectHandle): ColourHandle;
        getIntensity(self: InnerShadowLayerEffectHandle): number;
        getOffset(self: InnerShadowLayerEffectHandle): number;
        getRadius(self: InnerShadowLayerEffectHandle): number;
        setAngle(self: InnerShadowLayerEffectHandle, angle: number): void;
        setColour(self: InnerShadowLayerEffectHandle, colour: ColourHandle): void;
        setIntensity(self: InnerShadowLayerEffectHandle, intensity: number): void;
        setOffset(self: InnerShadowLayerEffectHandle, offset: number): void;
        setRadius(self: InnerShadowLayerEffectHandle, radius: number): void;
    }
    export const InnerShadowLayerEffectApi: InnerShadowLayerEffectApi;

    export interface LayerEffectApi {
        clone(self: LayerEffectHandle): LayerEffectHandle;
        cloneAsLayerEffect(self: LayerEffectHandle): LayerEffectHandle;
        getBlendMode(self: LayerEffectHandle): BlendMode;
        getEnabled(self: LayerEffectHandle): boolean;
        getOpacity(self: LayerEffectHandle): number;
        getScaleWithObject(self: LayerEffectHandle): boolean;
        getType(self: LayerEffectHandle): LayerEffectType;
        setBlendMode(self: LayerEffectHandle, blendMode: BlendMode): void;
        setEnabled(self: LayerEffectHandle, enabled: boolean): void;
        setOpacity(self: LayerEffectHandle, opacity: number): void;
        setScaleWithObject(self: LayerEffectHandle, scaleWithObject: boolean): void;
    }
    export const LayerEffectApi: LayerEffectApi;

    export interface OuterGlowLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        clone(self: OuterGlowLayerEffectHandle): OuterGlowLayerEffectHandle;
        cloneAsOuterGlowLayerEffect(self: OuterGlowLayerEffectHandle): OuterGlowLayerEffectHandle;
        create(): OuterGlowLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): OuterGlowLayerEffectHandle;
        getColour(self: OuterGlowLayerEffectHandle): ColourHandle;
        getIntensity(self: OuterGlowLayerEffectHandle): number;
        getRadius(self: OuterGlowLayerEffectHandle): number;
        setColour(self: OuterGlowLayerEffectHandle, colour: ColourHandle): void;
        setIntensity(self: OuterGlowLayerEffectHandle, intensity: number): void;
        setRadius(self: OuterGlowLayerEffectHandle, radius: number): void;
    }
    export const OuterGlowLayerEffectApi: OuterGlowLayerEffectApi;

    export interface OuterShadowLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        clone(self: OuterShadowLayerEffectHandle): OuterShadowLayerEffectHandle;
        cloneAsOuterShadowLayerEffect(self: OuterShadowLayerEffectHandle): OuterShadowLayerEffectHandle;
        create(): OuterShadowLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): OuterShadowLayerEffectHandle;
        getAngle(self: OuterShadowLayerEffectHandle): number;
        getColour(self: OuterShadowLayerEffectHandle): ColourHandle;
        getFillKnocksOut(self: OuterShadowLayerEffectHandle): boolean;
        getIntensity(self: OuterShadowLayerEffectHandle): number;
        getOffset(self: OuterShadowLayerEffectHandle): number;
        getRadius(self: OuterShadowLayerEffectHandle): number;
        setAngle(self: OuterShadowLayerEffectHandle, angle: number): void;
        setColour(self: OuterShadowLayerEffectHandle, colour: ColourHandle): void;
        setFillKnocksOut(self: OuterShadowLayerEffectHandle, fillKnocksOut: boolean): void;
        setIntensity(self: OuterShadowLayerEffectHandle, intensity: number): void;
        setOffset(self: OuterShadowLayerEffectHandle, offset: number): void;
        setRadius(self: OuterShadowLayerEffectHandle, radius: number): void;
    }
    export const OuterShadowLayerEffectApi: OuterShadowLayerEffectApi;

    export interface OutlineLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        calculateTransform(scaleX: number, scaleY: number, offsetX: number, offsetY: number): Transform;
        clone(self: OutlineLayerEffectHandle): OutlineLayerEffectHandle;
        cloneAsOutlineLayerEffect(self: OutlineLayerEffectHandle): OutlineLayerEffectHandle;
        create(): OutlineLayerEffectHandle;
        fromLayerEffect(layerEffect: LayerEffectHandle): OutlineLayerEffectHandle;
        getAlignment(self: OutlineLayerEffectHandle): StrokeAlignment;
        getColour(self: OutlineLayerEffectHandle): ColourHandle;
        getFillDescriptor(self: OutlineLayerEffectHandle): FillDescriptorHandle;
        getFillType(self: OutlineLayerEffectHandle): StrokeFillType;
        getRadius(self: OutlineLayerEffectHandle): number;
        setAlignment(self: OutlineLayerEffectHandle, alignment: StrokeAlignment): void;
        setColour(self: OutlineLayerEffectHandle, colour: ColourHandle): void;
        setFillDescriptor(self: OutlineLayerEffectHandle, fillDescriptor: FillDescriptorHandle): void;
        setFillType(self: OutlineLayerEffectHandle, fillType: StrokeFillType): void;
        setRadius(self: OutlineLayerEffectHandle, radius: number): void;
    }
    export const OutlineLayerEffectApi: OutlineLayerEffectApi;

    export interface PhongBevelLayerEffectApi extends Omit<LayerEffectApi, "clone"> {
        appendLight(self: PhongBevelLayerEffectHandle, pointLight: PointLightHandle): void;
        clone(self: PhongBevelLayerEffectHandle): PhongBevelLayerEffectHandle;
        cloneAsPhongBevelLayerEffect(self: PhongBevelLayerEffectHandle): PhongBevelLayerEffectHandle;
        create(): PhongBevelLayerEffectHandle;
        enumerateLights(self: PhongBevelLayerEffectHandle, callback: (pointLight: PointLightHandle) => EnumerationResult): void;
        fromLayerEffect(layerEffect: LayerEffectHandle): PhongBevelLayerEffectHandle;
        getAmbient(self: PhongBevelLayerEffectHandle): number;
        getAmbientColour(self: PhongBevelLayerEffectHandle): ColourHandle;
        getBevelProfile(self: PhongBevelLayerEffectHandle): SplineHandle;
        getDepth(self: PhongBevelLayerEffectHandle): number;
        getDiffuse(self: PhongBevelLayerEffectHandle): number;
        getLight(self: PhongBevelLayerEffectHandle, index: number): PointLightHandle;
        getLightCount(self: PhongBevelLayerEffectHandle): number;
        getLinkDepth(self: PhongBevelLayerEffectHandle): boolean;
        getRadius(self: PhongBevelLayerEffectHandle): number;
        getShininess(self: PhongBevelLayerEffectHandle): number;
        getSoften(self: PhongBevelLayerEffectHandle): number;
        getSpecular(self: PhongBevelLayerEffectHandle): number;
        getSpecularColour(self: PhongBevelLayerEffectHandle): ColourHandle;
        insertLight(self: PhongBevelLayerEffectHandle, index: number, pointLight: PointLightHandle): void;
        removeLight(self: PhongBevelLayerEffectHandle, index: number): void;
        setAmbient(self: PhongBevelLayerEffectHandle, ambient: number): void;
        setAmbientColour(self: PhongBevelLayerEffectHandle, ambientColour: ColourHandle): void;
        setBevelProfile(self: PhongBevelLayerEffectHandle, bevelProfileOrNull: SplineHandle | null): void;
        setDepth(self: PhongBevelLayerEffectHandle, depth: number): void;
        setDiffuse(self: PhongBevelLayerEffectHandle, diffuse: number): void;
        setLinkDepth(self: PhongBevelLayerEffectHandle, linkDepth: boolean): void;
        setRadius(self: PhongBevelLayerEffectHandle, radius: number): void;
        setShininess(self: PhongBevelLayerEffectHandle, shininess: number): void;
        setSoften(self: PhongBevelLayerEffectHandle, soften: number): void;
        setSpecular(self: PhongBevelLayerEffectHandle, specular: number): void;
        setSpecularColour(self: PhongBevelLayerEffectHandle, specularColour: ColourHandle): void;
        setStandardBevelProfile(self: PhongBevelLayerEffectHandle, standardProfile: SplineProfile): void;
    }
    export const PhongBevelLayerEffectApi: PhongBevelLayerEffectApi;

    export interface PointLightApi {
        clone(self: PointLightHandle): PointLightHandle;
        cloneAsPointLight(self: PointLightHandle): PointLightHandle;
        getAzimuth(self: PointLightHandle): number;
        getColour(self: PointLightHandle): ColourHandle;
        getElevation(self: PointLightHandle): number;
        setAzimuth(self: PointLightHandle, azimuth: number): void;
        setColour(self: PointLightHandle, colour: ColourHandle): void;
        setElevation(self: PointLightHandle, elevation: number): void;
    }
    export const PointLightApi: PointLightApi;

}

// ---------------------------------------------------------------------------
// affinity:linestyles
// ---------------------------------------------------------------------------

declare module "affinity:linestyles" {

    import { Rectangle, Transform } from "affinity:geometry";

    export enum ArrowHeadStyle {
        Triangle,
        TriangleTall,
        TriangleWide,
        Curved,
        Barbed,
        Simple,
        SimpleTall,
        SimpleWide,
        SimpleClosed,
        SimpleClosedTall,
        SimpleClosedWide,
        Circle,
        CircleSolid,
        Square,
        SquareSolid,
        Bar,
        Oblique,
        Oblique_Alternate,
        Origin,
        Origin_Alternate,
        Datum_60_Blank,
        Datum_60_Filled,
        Datum_45_Blank,
        Datum_45_Filled,
        Affinity,
    }

    export enum LineCap {
        Butt,
        Square,
        Round,
    }

    export enum LineJoin {
        MiterLegacy,
        Miter,
        Round,
        Bevel,
    }

    export enum LineStyleMask {
        Type,
        ScaledWeight,
        Brush,
        Cap,
        Join,
        Miter,
        DashPattern,
        DashPhase,
        Weight,
        BalancedDashes,
        Order,
        Scale,
        ArrowHeadFront,
        ArrowHeadBack,
        ArrowHeadPlacement,
        ArrowHeadFrontScale,
        ArrowHeadBackScale,
        Pressure,
        All,
    }

    export enum LineType {
        None,
        Solid,
        Dash,
        Texture,
    }

    export enum StrokeAlignment {
        Centre,
        Inside,
        Outside,
    }

    export interface ArrowHeadApi {
        clone(self: ArrowHeadHandle): ArrowHeadHandle;
        create(style: ArrowHeadStyle, anchorInternal: number, anchorExternal: number, isSolidLine: boolean, scaleX: number, scaleY: number): ArrowHeadHandle;
        createDefault(style: ArrowHeadStyle): ArrowHeadHandle;
        getAnchor(self: ArrowHeadHandle, isInternal: boolean): number;
        getBounds(self: ArrowHeadHandle): Rectangle;
        getCurves(self: ArrowHeadHandle): PolyPolyCurveHandle;
        getScaleX(self: ArrowHeadHandle): number;
        getScaleY(self: ArrowHeadHandle): number;
        isFilled(self: ArrowHeadHandle): boolean;
        isOutlined(self: ArrowHeadHandle): boolean;
        isSolidLine(self: ArrowHeadHandle): boolean;
        setAnchor(self: ArrowHeadHandle, isInternal: boolean, anchor: number): void;
        setScaleX(self: ArrowHeadHandle, scale: number): void;
        setScaleY(self: ArrowHeadHandle, scale: number): void;
        setSolidLine(self: ArrowHeadHandle, isSolidLine: boolean): void;
    }
    export const ArrowHeadApi: ArrowHeadApi;

    export interface LineStyleApi {
        clone(self: LineStyleHandle): LineStyleHandle;
        create(cap: LineCap, join: LineJoin, type: LineType, weight: number, miterLimit: number, dashPhase: number, dashPattern: number[], isResolutionIndependent: boolean, isBalancedDashes: boolean, pathBrushOrNull: PathBrushHandle | null): LineStyleHandle;
        createDefault(): LineStyleHandle;
        createDefaultWithWeight(weight: number): LineStyleHandle;
        getCap(self: LineStyleHandle): LineCap;
        getDashPattern(self: LineStyleHandle): number[];
        getDashPatternLength(self: LineStyleHandle): number;
        getDashPhase(self: LineStyleHandle): number;
        getJoin(self: LineStyleHandle): LineJoin;
        getMiterLimit(self: LineStyleHandle): number;
        getPathBrush(self: LineStyleHandle): PathBrushHandle;
        getType(self: LineStyleHandle): LineType;
        getWeight(self: LineStyleHandle): number;
        hasBalancedDashes(self: LineStyleHandle): boolean;
        isResolutionIndependent(self: LineStyleHandle): boolean;
        setCap(self: LineStyleHandle, cap: LineCap): void;
        setDashPattern(self: LineStyleHandle, dashPattern: number[]): void;
        setDashPhase(self: LineStyleHandle, dashPhase: number): void;
        setHasBalancedDashes(self: LineStyleHandle, hasBalancedDashes: boolean): void;
        setIsResolutionIndependent(self: LineStyleHandle, isResolutionIndependent: boolean): void;
        setJoin(self: LineStyleHandle, join: LineJoin): void;
        setMiterLimit(self: LineStyleHandle, miterLimit: number): void;
        setPathBrush(self: LineStyleHandle, pathBrush: PathBrushHandle): void;
        setType(self: LineStyleHandle, type: LineType): void;
        setWeight(self: LineStyleHandle, weight: number): void;
    }
    export const LineStyleApi: LineStyleApi;

    export interface LineStyleDescriptorApi {
        clone(self: LineStyleDescriptorHandle): LineStyleDescriptorHandle;
        cloneScaled(self: LineStyleDescriptorHandle, scale: number): LineStyleDescriptorHandle;
        cloneWithNewArrowHeads(self: LineStyleDescriptorHandle, frontArrowOrNull: ArrowHeadHandle | null, backArrowOrNull: ArrowHeadHandle | null): LineStyleDescriptorHandle;
        cloneWithNewLineStyle(self: LineStyleDescriptorHandle, lineStyle: LineStyleHandle): LineStyleDescriptorHandle;
        create(lineStyle: LineStyleHandle, frontArrowOrNull: ArrowHeadHandle | null, backArrowOrNull: ArrowHeadHandle | null, pressureOrNull: CurveHandle | null, isBehind: boolean, isScale: boolean, strokeAlignment: StrokeAlignment): LineStyleDescriptorHandle;
        createDefault(): LineStyleDescriptorHandle;
        createDefaultWithWeight(weight: number): LineStyleDescriptorHandle;
        getBackArrowHead(self: LineStyleDescriptorHandle): ArrowHeadHandle;
        getEffectiveWeight(self: LineStyleDescriptorHandle, worldTransform: Transform, scalarTransform: Transform): number;
        getFrontArrowHead(self: LineStyleDescriptorHandle): ArrowHeadHandle;
        getLineStyle(self: LineStyleDescriptorHandle): LineStyleHandle;
        getPressure(self: LineStyleDescriptorHandle): CurveHandle;
        getStrokeAlignment(self: LineStyleDescriptorHandle): StrokeAlignment;
        isBehind(self: LineStyleDescriptorHandle): boolean;
        isScale(self: LineStyleDescriptorHandle): boolean;
    }
    export const LineStyleDescriptorApi: LineStyleDescriptorApi;

}

// ---------------------------------------------------------------------------
// affinity:network
// ---------------------------------------------------------------------------

declare module "affinity:network" {

    export enum HttpStatusCode {
        Continue,
        SwitchingProtocols,
        Processing,
        EarlyHints,
        Ok,
        Created,
        Accepted,
        NonAuthoritativeInformation,
        NoContent,
        ResetContent,
        PartialContent,
        MultiStatus,
        AlreadyReported,
        IMUsed,
        MultipleChoices,
        MovedPermanently,
        Found,
        SeeOther,
        NotModified,
        UseProxy,
        SwitchProxy,
        TemporaryRedirect,
        PermanentRedirect,
        Invalid,
        Unauthorized,
        PaymentRequired,
        Forbidden,
        NotFound,
        MethodNotAllowed,
        NotAcceptable,
        ProxyAuthenticationRequired,
        RequestTimeout,
        Conflict,
        Gone,
        ContentTooLarge,
        Throttled,
        UnknownError,
        NotImplemented,
        BadGateway,
        ServiceUnavailable,
        GatewayTimeout,
        HTTPVersionNotSupported,
        VariantAlsoNegotiates,
        InsufficientStorage,
        LoopDetected,
        NotExtended,
        NetworkAuthenticationRequired,
    }

    export enum RequestMethod {
        Get,
        Post,
    }

    export class HttpRequestResult {
        response: HttpResponseHandle;
        failureReason: string;
    }

    export interface HttpRequestApi {
        create(url: string, method: RequestMethod): HttpRequestHandle;
        do(self: HttpRequestHandle): HttpRequestResult;
        doAsync(self: HttpRequestHandle, callback: (err: Error | null, result: HttpRequestResult | null) => void): void;
        getHeaderValue(self: HttpRequestHandle, headerKey: string): string;
        setAvoidChunkedTransferEncoding(self: HttpRequestHandle, isAvoidChunkedTransfer: boolean): void;
        setEncodeHeaderValuesAsRfc2047(self: HttpRequestHandle, isEncodeAsRfc: boolean): void;
        setHeaderValue(self: HttpRequestHandle, headerKey: string, headerValue: string): void;
        setSuppressUserAgentHeader(self: HttpRequestHandle, suppress: boolean): void;
        setTimeoutInSec(self: HttpRequestHandle, timeout: number): void;
        setUseConstrainedNetwork(self: HttpRequestHandle, useConstrainedNetwork: boolean): void;
        setUseExpensiveNetwork(self: HttpRequestHandle, useExpensiveNetwork: boolean): void;
    }
    export const HttpRequestApi: HttpRequestApi;

    export interface HttpResponseApi {
        getContent(self: HttpResponseHandle): string;
        getHeaderValue(self: HttpResponseHandle, headerKey: string): string;
        getIsSuccess(self: HttpResponseHandle): boolean;
        getStatusCode(self: HttpResponseHandle): HttpStatusCode;
    }
    export const HttpResponseApi: HttpResponseApi;

}

// ---------------------------------------------------------------------------
// affinity:os
// ---------------------------------------------------------------------------

declare module "affinity:os" {

    export interface OSApi {
        getArchitecture(): string;
        getEol(): string;
        getMachine(): string;
        getOSName(): string;
        getOSVersion(): string;
        getPlatform(): string;
        getRelease(): string;
    }
    export const OSApi: OSApi;

}

// ---------------------------------------------------------------------------
// affinity:raster
// ---------------------------------------------------------------------------

declare module "affinity:raster" {

    import { CMYKA8, IA16, IA8, LABA16, M16, M8, Mf, RGBA16, RGBA8, RGBAuf } from "affinity:colours";
    import { Rectangle } from "affinity:geometry";

    export enum RasterExtendType {
        Zero,
        Repeat,
        Wrap,
        Mirror,
    }

    export enum RasterFormat {
        RGBA8,
        RGBA16,
        IA8,
        IA16,
        CMYKA8,
        LABA16,
        M8,
        M16,
        EMPTY,
        RGBAUF,
        MF,
    }

    export enum RasterIntent {
        Perceptual,
        RelativeColourimetric,
        Saturation,
        AbsoluteColourimetric,
    }

    export enum RasterObjectType {
        Bitmap,
        Buffer,
        RenderingEngine,
    }

    export enum RasterResamplerType {
        Default,
        BilinearMipmap,
        NearestNeighbourMipmap,
        NearestNeighbour,
        Bilinear,
        Bicubic,
        SeparableLanczos3,
        NonseparableLanczos3,
        AntialiasedNearestNeighbourMipmap,
        Mitchell,
    }

    export interface NodeRenderingEngineOptionsApi {
        clone(self: NodeRenderingEngineOptionsHandle): NodeRenderingEngineOptionsHandle;
        cloneAsNodeRenderingEngineOptions(self: NodeRenderingEngineOptionsHandle): NodeRenderingEngineOptionsHandle;
        create(): NodeRenderingEngineOptionsHandle;
        getAllowDegradedBitmaps(self: NodeRenderingEngineOptionsHandle): boolean;
        getAntialias(self: NodeRenderingEngineOptionsHandle): boolean;
        getClipToSpread(self: NodeRenderingEngineOptionsHandle): boolean;
        getDitherGradients(self: NodeRenderingEngineOptionsHandle): boolean;
        getDownResamplerType(self: NodeRenderingEngineOptionsHandle): RasterResamplerType;
        getDrawBackground(self: NodeRenderingEngineOptionsHandle): boolean;
        getIsIsolatedRendering(self: NodeRenderingEngineOptionsHandle): boolean;
        getIsMaskRenderingMode(self: NodeRenderingEngineOptionsHandle): boolean;
        getIsPerfectClipping(self: NodeRenderingEngineOptionsHandle): boolean;
        getScale(self: NodeRenderingEngineOptionsHandle): number;
        getSourceRect(self: NodeRenderingEngineOptionsHandle): Rectangle;
        getUpResamplerType(self: NodeRenderingEngineOptionsHandle): RasterResamplerType;
        setAllowDegradedBitmaps(self: NodeRenderingEngineOptionsHandle, value: boolean): void;
        setAntialias(self: NodeRenderingEngineOptionsHandle, value: boolean): void;
        setClipToSpread(self: NodeRenderingEngineOptionsHandle, value: boolean): void;
        setDitherGradients(self: NodeRenderingEngineOptionsHandle, value: boolean): void;
        setDownResamplerType(self: NodeRenderingEngineOptionsHandle, value: RasterResamplerType): void;
        setDrawBackground(self: NodeRenderingEngineOptionsHandle, value: boolean): void;
        setIsIsolatedRendering(self: NodeRenderingEngineOptionsHandle, value: boolean): void;
        setIsMaskRenderingMode(self: NodeRenderingEngineOptionsHandle, value: boolean): void;
        setIsPerfectClipping(self: NodeRenderingEngineOptionsHandle, value: boolean): void;
        setScale(self: NodeRenderingEngineOptionsHandle, scale: number): void;
        setSourceRect(self: NodeRenderingEngineOptionsHandle, sourceRectOrNull: Rectangle | null): void;
        setUpResamplerType(self: NodeRenderingEngineOptionsHandle, value: RasterResamplerType): void;
    }
    export const NodeRenderingEngineOptionsApi: NodeRenderingEngineOptionsApi;

    export interface PixelReaderCMYKA8Api {
        create(bitmap: RasterObjectHandle): PixelReaderCMYKA8Handle;
        dispose(self: PixelReaderCMYKA8Handle): void;
        readPixel(self: PixelReaderCMYKA8Handle, x: number, y: number): CMYKA8;
    }
    export const PixelReaderCMYKA8Api: PixelReaderCMYKA8Api;

    export interface PixelReaderIA16Api {
        create(bitmap: RasterObjectHandle): PixelReaderIA16Handle;
        dispose(self: PixelReaderIA16Handle): void;
        readPixel(self: PixelReaderIA16Handle, x: number, y: number): IA16;
    }
    export const PixelReaderIA16Api: PixelReaderIA16Api;

    export interface PixelReaderIA8Api {
        create(bitmap: RasterObjectHandle): PixelReaderIA8Handle;
        dispose(self: PixelReaderIA8Handle): void;
        readPixel(self: PixelReaderIA8Handle, x: number, y: number): IA8;
    }
    export const PixelReaderIA8Api: PixelReaderIA8Api;

    export interface PixelReaderLABA16Api {
        create(bitmap: RasterObjectHandle): PixelReaderLABA16Handle;
        dispose(self: PixelReaderLABA16Handle): void;
        readPixel(self: PixelReaderLABA16Handle, x: number, y: number): LABA16;
    }
    export const PixelReaderLABA16Api: PixelReaderLABA16Api;

    export interface PixelReaderM16Api {
        create(bitmap: RasterObjectHandle): PixelReaderM16Handle;
        dispose(self: PixelReaderM16Handle): void;
        readPixel(self: PixelReaderM16Handle, x: number, y: number): M16;
    }
    export const PixelReaderM16Api: PixelReaderM16Api;

    export interface PixelReaderM8Api {
        create(bitmap: RasterObjectHandle): PixelReaderM8Handle;
        dispose(self: PixelReaderM8Handle): void;
        readPixel(self: PixelReaderM8Handle, x: number, y: number): M8;
    }
    export const PixelReaderM8Api: PixelReaderM8Api;

    export interface PixelReaderMfApi {
        create(bitmap: RasterObjectHandle): PixelReaderMfHandle;
        dispose(self: PixelReaderMfHandle): void;
        readPixel(self: PixelReaderMfHandle, x: number, y: number): Mf;
    }
    export const PixelReaderMfApi: PixelReaderMfApi;

    export interface PixelReaderRGBA16Api {
        create(bitmap: RasterObjectHandle): PixelReaderRGBA16Handle;
        dispose(self: PixelReaderRGBA16Handle): void;
        readPixel(self: PixelReaderRGBA16Handle, x: number, y: number): RGBA16;
    }
    export const PixelReaderRGBA16Api: PixelReaderRGBA16Api;

    export interface PixelReaderRGBA8Api {
        create(bitmap: RasterObjectHandle): PixelReaderRGBA8Handle;
        dispose(self: PixelReaderRGBA8Handle): void;
        readPixel(self: PixelReaderRGBA8Handle, x: number, y: number): RGBA8;
    }
    export const PixelReaderRGBA8Api: PixelReaderRGBA8Api;

    export interface PixelReaderRGBAufApi {
        create(bitmap: RasterObjectHandle): PixelReaderRGBAufHandle;
        dispose(self: PixelReaderRGBAufHandle): void;
        readPixel(self: PixelReaderRGBAufHandle, x: number, y: number): RGBAuf;
    }
    export const PixelReaderRGBAufApi: PixelReaderRGBAufApi;

    export interface PixelReaderWriterCMYKA8Api {
        create(bitmap: RasterObjectHandle): PixelReaderWriterCMYKA8Handle;
        dispose(self: PixelReaderWriterCMYKA8Handle): void;
        readPixel(self: PixelReaderWriterCMYKA8Handle, x: number, y: number): CMYKA8;
        writePixel(self: PixelReaderWriterCMYKA8Handle, x: number, y: number, pixel: CMYKA8): void;
    }
    export const PixelReaderWriterCMYKA8Api: PixelReaderWriterCMYKA8Api;

    export interface PixelReaderWriterIA16Api {
        create(bitmap: RasterObjectHandle): PixelReaderWriterIA16Handle;
        dispose(self: PixelReaderWriterIA16Handle): void;
        readPixel(self: PixelReaderWriterIA16Handle, x: number, y: number): IA16;
        writePixel(self: PixelReaderWriterIA16Handle, x: number, y: number, pixel: IA16): void;
    }
    export const PixelReaderWriterIA16Api: PixelReaderWriterIA16Api;

    export interface PixelReaderWriterIA8Api {
        create(bitmap: RasterObjectHandle): PixelReaderWriterIA8Handle;
        dispose(self: PixelReaderWriterIA8Handle): void;
        readPixel(self: PixelReaderWriterIA8Handle, x: number, y: number): IA8;
        writePixel(self: PixelReaderWriterIA8Handle, x: number, y: number, pixel: IA8): void;
    }
    export const PixelReaderWriterIA8Api: PixelReaderWriterIA8Api;

    export interface PixelReaderWriterLABA16Api {
        create(bitmap: RasterObjectHandle): PixelReaderWriterLABA16Handle;
        dispose(self: PixelReaderWriterLABA16Handle): void;
        readPixel(self: PixelReaderWriterLABA16Handle, x: number, y: number): LABA16;
        writePixel(self: PixelReaderWriterLABA16Handle, x: number, y: number, pixel: LABA16): void;
    }
    export const PixelReaderWriterLABA16Api: PixelReaderWriterLABA16Api;

    export interface PixelReaderWriterM16Api {
        create(bitmap: RasterObjectHandle): PixelReaderWriterM16Handle;
        dispose(self: PixelReaderWriterM16Handle): void;
        readPixel(self: PixelReaderWriterM16Handle, x: number, y: number): M16;
        writePixel(self: PixelReaderWriterM16Handle, x: number, y: number, pixel: M16): void;
    }
    export const PixelReaderWriterM16Api: PixelReaderWriterM16Api;

    export interface PixelReaderWriterM8Api {
        create(bitmap: RasterObjectHandle): PixelReaderWriterM8Handle;
        dispose(self: PixelReaderWriterM8Handle): void;
        readPixel(self: PixelReaderWriterM8Handle, x: number, y: number): M8;
        writePixel(self: PixelReaderWriterM8Handle, x: number, y: number, pixel: M8): void;
    }
    export const PixelReaderWriterM8Api: PixelReaderWriterM8Api;

    export interface PixelReaderWriterMfApi {
        create(bitmap: RasterObjectHandle): PixelReaderWriterMfHandle;
        dispose(self: PixelReaderWriterMfHandle): void;
        readPixel(self: PixelReaderWriterMfHandle, x: number, y: number): Mf;
        writePixel(self: PixelReaderWriterMfHandle, x: number, y: number, pixel: Mf): void;
    }
    export const PixelReaderWriterMfApi: PixelReaderWriterMfApi;

    export interface PixelReaderWriterRGBA16Api {
        create(bitmap: RasterObjectHandle): PixelReaderWriterRGBA16Handle;
        dispose(self: PixelReaderWriterRGBA16Handle): void;
        readPixel(self: PixelReaderWriterRGBA16Handle, x: number, y: number): RGBA16;
        writePixel(self: PixelReaderWriterRGBA16Handle, x: number, y: number, pixel: RGBA16): void;
    }
    export const PixelReaderWriterRGBA16Api: PixelReaderWriterRGBA16Api;

    export interface PixelReaderWriterRGBA8Api {
        create(bitmap: RasterObjectHandle): PixelReaderWriterRGBA8Handle;
        dispose(self: PixelReaderWriterRGBA8Handle): void;
        readPixel(self: PixelReaderWriterRGBA8Handle, x: number, y: number): RGBA8;
        writePixel(self: PixelReaderWriterRGBA8Handle, x: number, y: number, pixel: RGBA8): void;
    }
    export const PixelReaderWriterRGBA8Api: PixelReaderWriterRGBA8Api;

    export interface PixelReaderWriterRGBAufApi {
        create(bitmap: RasterObjectHandle): PixelReaderWriterRGBAufHandle;
        dispose(self: PixelReaderWriterRGBAufHandle): void;
        readPixel(self: PixelReaderWriterRGBAufHandle, x: number, y: number): RGBAuf;
        writePixel(self: PixelReaderWriterRGBAufHandle, x: number, y: number, pixel: RGBAuf): void;
    }
    export const PixelReaderWriterRGBAufApi: PixelReaderWriterRGBAufApi;

    export interface RasterObjectApi {
        clone(self: RasterObjectHandle): RasterObjectHandle;
        cloneEmpty(self: RasterObjectHandle): RasterObjectHandle;
        copyTo(self: RasterObjectHandle, rasterObject: RasterObjectHandle, destinationRectangle: Rectangle, sourceX: number, sourceY: number): void;
        createBitmap(width: number, height: number, format: RasterFormat): RasterObjectHandle;
        createCompatibleBitmap(self: RasterObjectHandle, copyContents: boolean): RasterObjectHandle;
        createCompatibleBuffer(self: RasterObjectHandle, copyContents: boolean): RasterObjectHandle;
        createDefaultNodeRenderingEngine(node: NodeHandle, format: RasterFormat): RasterObjectHandle;
        createNodeRenderingEngine(node: NodeHandle, format: RasterFormat, options: NodeRenderingEngineOptionsHandle): RasterObjectHandle;
        createPixelBuffer(width: number, height: number, format: RasterFormat): RasterObjectHandle;
        dispose(self: RasterObjectHandle): void;
        getArrayBuffer(self: RasterObjectHandle): ArrayBuffer;
        getDescription(self: RasterObjectHandle): string;
        getDirectAccess(self: RasterObjectHandle): ArrayBuffer;
        getFormat(self: RasterObjectHandle): RasterFormat;
        getHeight(self: RasterObjectHandle): number;
        getPixelSize(self: RasterObjectHandle): number;
        getType(self: RasterObjectHandle): RasterObjectType;
        getWidth(self: RasterObjectHandle): number;
        loadBitmapFromFile(path: string, format: RasterFormat): RasterObjectHandle;
        loadBitmapFromFileAsync(path: string, format: RasterFormat, callback: (result: Error | null, rasterObjectRef: RasterObjectHandle | null) => void): void;
        loadBitmapFromResource(resource: ResourceHandle, format: RasterFormat): RasterObjectHandle;
        loadBitmapFromResourceAsync(resource: ResourceHandle, format: RasterFormat, callback: (result: Error | null, rasterObjectRef: RasterObjectHandle | null) => void): void;
    }
    export const RasterObjectApi: RasterObjectApi;

}

// ---------------------------------------------------------------------------
// affinity:story
// ---------------------------------------------------------------------------

declare module "affinity:story" {

    import { FontField, FontWidth } from "affinity:fonts";
    import { RasterFormat } from "affinity:raster";

    export enum CapsType {
        None,
        CapsToSmallCaps,
        SmallCaps,
        AllCaps,
        AllSmallCaps,
        CapsToPetiteCaps,
        PetiteCaps,
        AllPetiteCaps,
        Titling,
        Unicase,
    }

    export enum CrossReferenceSubGlyphType {
        PageNumber,
        SectionName,
        AboveBelow,
        NumberedParagraph,
        ParagraphBody,
        ListNumber,
        NoteNumber,
        AnchorName,
        ChapterName,
        ObjectDescription,
    }

    export enum CrossReferenceTargetType {
        Anchor,
        Paragraph,
        IndexMark,
    }

    export enum DataMergeSourceType {
        RecordIndex,
        OriginalRecordIndex,
        SourceName,
    }

    export enum DocumentFieldType {
        Author,
        Tags,
        Comments,
        Title,
        LastEditedBy,
        Size,
        Created,
        Modified,
        PageCount,
        Revision,
        SaveCount,
        Printed,
        Filename,
        Path,
        Subject,
        Rating,
        Headline,
        AuthorPosition,
        DescriptionWriter,
        ImageLocation,
        ImageCity,
        ImageState,
        ImageCountry,
        ImageIsoCountryCode,
        Source,
        Credit,
        Genre,
        SubjectCodes,
        Scenes,
        JobId,
        Instructions,
        ContactAddress,
        ContactCity,
        ContactState,
        ContactPostcode,
        ContactCountry,
        ContactPhone,
        ContactEmail,
        ContactWebsite,
        IsCopyrighted,
        CopyrightTerms,
        CopyrightUrl,
        CcLicenceName,
        CcMorePermsUrl,
        CcAttributionUrl,
        CcAttributionName,
        CameraModel,
        CameraMaker,
        Lens,
        DateShot,
        Publisher,
        ISBN10,
        ISBN13,
        Illustrator,
    }

    export enum FieldDataType {
        String,
        Number,
        DateTime,
    }

    export enum FillerTextType {
        Lorem,
        Alice,
    }

    export enum GlyphAttDoubleType {
        Height,
        CharacterSpacing,
        BaselineAdvance,
        AutoKernMinHeight,
        OffsetX,
        OffsetY,
        ManualKerning,
        ScaleX,
        ScaleY,
        ShearX,
        AbsoluteLeading,
    }

    export enum GlyphAttStringType {
        SpellingLanguageId,
        StyleName,
        HyphenationLanguageId,
    }

    export enum GlyphType {
        Anchor,
        Char,
        CrossReference,
        CrossReferenceSub,
        FillerText,
        CapturedDateTime,
        CustomField,
        DataMergeField,
        DataMergeSource,
        DocumentField,
        RunningHeader,
        PageNumber,
        RangenoteBody,
        RangenoteReference,
        SectionName,
        GlyphIndex,
        HardBreak,
        IndentToHere,
        IndexMark,
        ListNumber,
        NoteNumber,
        Pin,
        RangenoteEnd,
        RightIndentTab,
    }

    export enum HardBreakType {
        None,
        Line,
        Paragraph,
        Column,
        TableCell,
        Frame,
        Page,
        OddPage,
        EvenPage,
        Story,
    }

    export enum LeadingOverrideType {
        None,
        AtLeast,
    }

    export enum NotePosition {
        Unknown,
        BottomOfColumn,
        BottomOfFrame,
        EndOfStory,
        StoryFrame,
        SectionFrame,
        DocumentFrame,
        BelowText,
        BelowFrame,
        LeftOfFrame,
        RightOfFrame,
        AwayFromSpine,
        TowardsSpine,
        AlternateSides,
        ClosestSide,
        EndOfBook,
    }

    export enum NoteType {
        None,
        Footnote,
        Endnote,
        Sidenote,
    }

    export enum OpticalAlignmentType {
        None,
        Manual,
        Font,
    }

    export enum PageNumberType {
        Current,
        Next,
        Previous,
        SectionTotal,
        RunLast,
    }

    export enum ParagraphAlignXType {
        Left,
        Centre,
        Right,
        JustifyLeft,
        JustifyCentre,
        JustifyRight,
        JustifyAll,
        AwayFromSpine,
        TowardsSpine,
    }

    export enum ParagraphAttDoubleType {
        RelativeLeading,
        AbsoluteLeading,
        LeftIndent,
        RightIndent,
        FirstLineIndent,
        SpaceBefore,
        SpaceAfter,
        DefaultTabStops,
        MinWordSpacing,
        DesiredWordSpacing,
        MaxWordSpacing,
        MinLetterSpacing,
        DesiredLetterSpacing,
        MaxLetterSpacing,
        MinHyphenScore,
        HyphenationZone,
        HyphenationZoneCapitals,
        HyphenationZoneParagraphEnd,
        HyphenationZoneColumnEnd,
        LastLineOutdent,
        SpaceBetweenSameStyles,
    }

    export enum ParagraphAttStringType {
        StyleName,
    }

    export enum ParagraphLeadingType {
        RelativeToIdeal,
        RelativeToHeight,
        ExactlyAbsolute,
        AtLeastAbsolute,
        RelativeToIdealAbsolute,
    }

    export enum ParagraphLineBreakModeType {
        Auto,
        Western,
        International,
    }

    export enum ParagraphPDFExportTagType {
        P,
        H1,
        H2,
        H3,
        H4,
        H5,
        H6,
    }

    export enum ParagraphStartAtHardBreakType {
        None,
        Column,
        Frame,
        Page,
        EvenPage,
        OddPage,
    }

    export enum ParagraphUseSpaceBeforeMode {
        OnlyBetweenParagraphs,
        OnlyAtColumnTop,
        Always,
    }

    export enum SoftBreakType {
        Normal,
        Space,
        Never,
        WithoutHyphen,
        SoftHyphen,
        Ideographic,
        Punctuation,
        OpenPunctuation,
        ClosePunctuation,
        CloseParenthesis,
        Solidus,
        InfixNumeric,
    }

    export enum StoryIoFormat {
        Raw,
        UserDescriptions,
        InternalDescriptions,
        MenuDescriptions,
        CppDescriptions,
        Returns,
        Newlines,
        CrLf,
        Tabs,
        HideStoryTerminator,
        ReplaceCrLfTabWithSpace,
        ReplaceTypographicQuotes,
        TokenDescriptions,
        FieldDescriptions,
        ClipboardDescriptions,
        CommandDescriptions,
        Debug,
    }

    export enum SuperSubType {
        None,
        Superscript,
        Subscript,
    }

    export enum TableAxis {
        Columns,
        Rows,
    }

    export enum TocRoleType {
        None,
        PageNumber,
    }

    export enum TypographicLineType {
        None,
        Single,
        Double,
    }

    export enum WordPartType {
        Word,
        Punctuation,
        Space,
    }

    export class StoryRange {
        begin: number;
        end: number;
    }

    export interface AnchorGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: AnchorGlyphHandle): AnchorGlyphHandle;
        cloneAsAnchorGlyph(self: AnchorGlyphHandle): AnchorGlyphHandle;
        fromGlyph(glyph: GlyphHandle): AnchorGlyphHandle;
    }
    export const AnchorGlyphApi: AnchorGlyphApi;

    export interface CapturedDateTimeGlyphApi extends Omit<FormattableFieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: CapturedDateTimeGlyphHandle): CapturedDateTimeGlyphHandle;
        cloneAsCapturedDateTimeGlyph(self: CapturedDateTimeGlyphHandle): CapturedDateTimeGlyphHandle;
        fromGlyph(glyph: GlyphHandle): CapturedDateTimeGlyphHandle;
        getDateTime(self: CapturedDateTimeGlyphHandle): number;
    }
    export const CapturedDateTimeGlyphApi: CapturedDateTimeGlyphApi;

    export interface CharGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: CharGlyphHandle): CharGlyphHandle;
        cloneAsCharGlyph(self: CharGlyphHandle): CharGlyphHandle;
        create(char32: number): CharGlyphHandle;
        fromGlyph(glyph: GlyphHandle): CharGlyphHandle;
        getBaseChar32(self: CharGlyphHandle): number;
        getChar32(self: CharGlyphHandle): number;
        getString(self: CharGlyphHandle): string;
    }
    export const CharGlyphApi: CharGlyphApi;

    export interface CrossReferenceGlyphApi extends Omit<FieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: CrossReferenceGlyphHandle): CrossReferenceGlyphHandle;
        cloneAsCrossReferenceGlyph(self: CrossReferenceGlyphHandle): CrossReferenceGlyphHandle;
        create(): CrossReferenceGlyphHandle;
        fromGlyph(glyph: GlyphHandle): CrossReferenceGlyphHandle;
        getTargetType(self: CrossReferenceGlyphHandle): CrossReferenceTargetType;
        isTargetDifferentChapter(self: CrossReferenceGlyphHandle): boolean;
        usesStyles(self: CrossReferenceGlyphHandle): boolean;
    }
    export const CrossReferenceGlyphApi: CrossReferenceGlyphApi;

    export interface CrossReferenceSubGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: CrossReferenceSubGlyphHandle): CrossReferenceSubGlyphHandle;
        cloneAsCrossReferenceSubGlyph(self: CrossReferenceSubGlyphHandle): CrossReferenceSubGlyphHandle;
        create(crossReferenceSubGlyphType: CrossReferenceSubGlyphType): CrossReferenceSubGlyphHandle;
        fromGlyph(glyph: GlyphHandle): CrossReferenceSubGlyphHandle;
    }
    export const CrossReferenceSubGlyphApi: CrossReferenceSubGlyphApi;

    export interface CustomFieldGlyphApi extends Omit<FormattableFieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: CustomFieldGlyphHandle): CustomFieldGlyphHandle;
        cloneAsCustomFieldGlyph(self: CustomFieldGlyphHandle): CustomFieldGlyphHandle;
        fromGlyph(glyph: GlyphHandle): CustomFieldGlyphHandle;
    }
    export const CustomFieldGlyphApi: CustomFieldGlyphApi;

    export interface DataMergeFieldGlyphApi extends Omit<DataMergeGlyphApi, "clone" | "fromGlyph"> {
        clone(self: DataMergeFieldGlyphHandle): DataMergeFieldGlyphHandle;
        cloneAsDataMergeFieldGlyph(self: DataMergeFieldGlyphHandle): DataMergeFieldGlyphHandle;
        fromGlyph(glyph: GlyphHandle): DataMergeFieldGlyphHandle;
        getDataMergeFieldId(self: DataMergeFieldGlyphHandle): string;
    }
    export const DataMergeFieldGlyphApi: DataMergeFieldGlyphApi;

    export interface DataMergeGlyphApi extends Omit<FormattableFieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: DataMergeGlyphHandle): DataMergeGlyphHandle;
        cloneAsDataMergeGlyph(self: DataMergeGlyphHandle): DataMergeGlyphHandle;
        fromGlyph(glyph: GlyphHandle): DataMergeGlyphHandle;
    }
    export const DataMergeGlyphApi: DataMergeGlyphApi;

    export interface DataMergeSourceGlyphApi extends Omit<DataMergeGlyphApi, "clone" | "fromGlyph"> {
        clone(self: DataMergeSourceGlyphHandle): DataMergeSourceGlyphHandle;
        cloneAsDataMergeSourceGlyph(self: DataMergeSourceGlyphHandle): DataMergeSourceGlyphHandle;
        fromGlyph(glyph: GlyphHandle): DataMergeSourceGlyphHandle;
        getDataMergeSourceType(self: DataMergeSourceGlyphHandle): DataMergeSourceType;
    }
    export const DataMergeSourceGlyphApi: DataMergeSourceGlyphApi;

    export interface DocumentFieldGlyphApi extends Omit<FormattableFieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: DocumentFieldGlyphHandle): DocumentFieldGlyphHandle;
        cloneAsDocumentFieldGlyph(self: DocumentFieldGlyphHandle): DocumentFieldGlyphHandle;
        fromGlyph(glyph: GlyphHandle): DocumentFieldGlyphHandle;
        getDocumentFieldType(self: DocumentFieldGlyphHandle): DocumentFieldType;
    }
    export const DocumentFieldGlyphApi: DocumentFieldGlyphApi;

    export interface FieldGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: FieldGlyphHandle): FieldGlyphHandle;
        cloneAsFieldGlyph(self: FieldGlyphHandle): FieldGlyphHandle;
        fromGlyph(glyph: GlyphHandle): FieldGlyphHandle;
        getFieldName(self: FieldGlyphHandle): string;
    }
    export const FieldGlyphApi: FieldGlyphApi;

    export interface FillerTextGlyphApi extends Omit<FieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: FillerTextGlyphHandle): FillerTextGlyphHandle;
        cloneAsFillerTextGlyph(self: FillerTextGlyphHandle): FillerTextGlyphHandle;
        create(fillerTextType: FillerTextType, sourceBegin: number): FillerTextGlyphHandle;
        fromGlyph(glyph: GlyphHandle): FillerTextGlyphHandle;
        getFillerTextType(self: FillerTextGlyphHandle): FillerTextType;
        getSourceBegin(self: FillerTextGlyphHandle): number;
    }
    export const FillerTextGlyphApi: FillerTextGlyphApi;

    export interface FormattableFieldGlyphApi extends Omit<FieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: FormattableFieldGlyphHandle): FormattableFieldGlyphHandle;
        cloneAsFormattableFieldGlyph(self: FormattableFieldGlyphHandle): FormattableFieldGlyphHandle;
        fromGlyph(glyph: GlyphHandle): FormattableFieldGlyphHandle;
        getFieldDataType(self: FormattableFieldGlyphHandle): FieldDataType;
    }
    export const FormattableFieldGlyphApi: FormattableFieldGlyphApi;

    export interface GlyphApi {
        canSoftBreakAfter(self: GlyphHandle): boolean;
        canSoftBreakBefore(self: GlyphHandle): boolean;
        clone(self: GlyphHandle): GlyphHandle;
        cloneAsGlyph(self: GlyphHandle): GlyphHandle;
        getDescription(self: GlyphHandle, format: StoryIoFormat): string;
        getGlyphType(self: GlyphHandle): GlyphType;
        getHardBreakType(self: GlyphHandle): HardBreakType;
        getSoftBreakType(self: GlyphHandle): SoftBreakType;
        getWordPartType(self: GlyphHandle): WordPartType;
        isAlpha(self: GlyphHandle): boolean;
        isAlphaNumeric(self: GlyphHandle): boolean;
        isCombining(self: GlyphHandle): boolean;
        isConsolidated(self: GlyphHandle): boolean;
        isDeletable(self: GlyphHandle): boolean;
        isHiddenFromOpenType(self: GlyphHandle): boolean;
        isJustificationSpace(self: GlyphHandle): boolean;
        isLowercase(self: GlyphHandle): boolean;
        isMarking(self: GlyphHandle): boolean;
        isMarkup(self: GlyphHandle): boolean;
        isMidWordPunctuation(self: GlyphHandle): boolean;
        isNumeric(self: GlyphHandle): boolean;
        isParagraphBreak(self: GlyphHandle): boolean;
        isSoftBreak(self: GlyphHandle): boolean;
        isStoryTerminator(self: GlyphHandle): boolean;
        isTab(self: GlyphHandle): boolean;
        isTableCellBreak(self: GlyphHandle): boolean;
        isUppercase(self: GlyphHandle): boolean;
        isZeroWidth(self: GlyphHandle): boolean;
        wantsFastFind(self: GlyphHandle): boolean;
    }
    export const GlyphApi: GlyphApi;

    export interface GlyphAttsApi {
        clone(self: GlyphAttsHandle): GlyphAttsHandle;
        create(): GlyphAttsHandle;
        getBrushFill(self: GlyphAttsHandle): FillDescriptorHandle;
        getCapsType(self: GlyphAttsHandle): CapsType;
        getDoubleValue(self: GlyphAttsHandle, att: GlyphAttDoubleType): number;
        getFont(self: GlyphAttsHandle): FontHandle;
        getHighlightFill(self: GlyphAttsHandle): FillDescriptorHandle;
        getIsNoBreak(self: GlyphAttsHandle): boolean;
        getLeadingOverrideType(self: GlyphAttsHandle): LeadingOverrideType;
        getLineStyleDescriptor(self: GlyphAttsHandle): LineStyleDescriptorHandle;
        getOpenTypeLanguageTag(self: GlyphAttsHandle): number;
        getOpenTypeScriptTag(self: GlyphAttsHandle): number;
        getOpticalAlignmentType(self: GlyphAttsHandle): OpticalAlignmentType;
        getPenFill(self: GlyphAttsHandle): FillDescriptorHandle;
        getStrikeoutFill(self: GlyphAttsHandle): FillDescriptorHandle;
        getStrikeoutType(self: GlyphAttsHandle): TypographicLineType;
        getStringValue(self: GlyphAttsHandle, att: GlyphAttStringType): string;
        getSuperSubType(self: GlyphAttsHandle): SuperSubType;
        getTocRoleType(self: GlyphAttsHandle): TocRoleType;
        getTransparency(self: GlyphAttsHandle): FillDescriptorHandle;
        getUnderlineFill(self: GlyphAttsHandle): FillDescriptorHandle;
        getUnderlineType(self: GlyphAttsHandle): TypographicLineType;
        setBrushFill(self: GlyphAttsHandle, fillDescriptorOrNull: FillDescriptorHandle | null): void;
        setCapsType(self: GlyphAttsHandle, type: CapsType): void;
        setDoubleValue(self: GlyphAttsHandle, att: GlyphAttDoubleType, value: number): void;
        setFont(self: GlyphAttsHandle, font: FontHandle): void;
        setHighlightFill(self: GlyphAttsHandle, fillDescriptorOrNull: FillDescriptorHandle | null): void;
        setIsNoBreak(self: GlyphAttsHandle, isNoBreak: boolean): void;
        setLeadingOverrideType(self: GlyphAttsHandle, type: LeadingOverrideType): void;
        setLineStyleDescriptor(self: GlyphAttsHandle, lineStyleDescriptor: LineStyleDescriptorHandle): void;
        setOpenTypeLanguageTag(self: GlyphAttsHandle, tag: number): void;
        setOpenTypeScriptTag(self: GlyphAttsHandle, tag: number): void;
        setOpticalAlignmentType(self: GlyphAttsHandle, type: OpticalAlignmentType): void;
        setPenFill(self: GlyphAttsHandle, fillDescriptorOrNull: FillDescriptorHandle | null): void;
        setStrikeoutFill(self: GlyphAttsHandle, fillDescriptorOrNull: FillDescriptorHandle | null): void;
        setStrikeoutType(self: GlyphAttsHandle, type: TypographicLineType): void;
        setStringValue(self: GlyphAttsHandle, att: GlyphAttStringType, value: string): void;
        setSuperSubType(self: GlyphAttsHandle, type: SuperSubType): void;
        setTocRoleType(self: GlyphAttsHandle, type: TocRoleType): void;
        setTransparency(self: GlyphAttsHandle, fillDescriptorOrNull: FillDescriptorHandle | null): void;
        setUnderlineFill(self: GlyphAttsHandle, fillDescriptorOrNull: FillDescriptorHandle | null): void;
        setUnderlineType(self: GlyphAttsHandle, type: TypographicLineType): void;
    }
    export const GlyphAttsApi: GlyphAttsApi;

    export interface GlyphIndexGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: GlyphIndexGlyphHandle): GlyphIndexGlyphHandle;
        cloneAsGlyphIndexGlyph(self: GlyphIndexGlyphHandle): GlyphIndexGlyphHandle;
        fromGlyph(glyph: GlyphHandle): GlyphIndexGlyphHandle;
        getIndex(self: GlyphIndexGlyphHandle): number;
    }
    export const GlyphIndexGlyphApi: GlyphIndexGlyphApi;

    export interface HardBreakGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: HardBreakGlyphHandle): HardBreakGlyphHandle;
        cloneAsHardBreakGlyph(self: HardBreakGlyphHandle): HardBreakGlyphHandle;
        fromGlyph(glyph: GlyphHandle): HardBreakGlyphHandle;
    }
    export const HardBreakGlyphApi: HardBreakGlyphApi;

    export interface IndentToHereGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: IndentToHereGlyphHandle): IndentToHereGlyphHandle;
        cloneAsIndentToHereGlyph(self: IndentToHereGlyphHandle): IndentToHereGlyphHandle;
        fromGlyph(glyph: GlyphHandle): IndentToHereGlyphHandle;
    }
    export const IndentToHereGlyphApi: IndentToHereGlyphApi;

    export interface IndexMarkGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: IndexMarkGlyphHandle): IndexMarkGlyphHandle;
        cloneAsIndexMarkGlyph(self: IndexMarkGlyphHandle): IndexMarkGlyphHandle;
        fromGlyph(glyph: GlyphHandle): IndexMarkGlyphHandle;
        getGlyphStyle(self: IndexMarkGlyphHandle): string;
    }
    export const IndexMarkGlyphApi: IndexMarkGlyphApi;

    export interface ListNumberGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: ListNumberGlyphHandle): ListNumberGlyphHandle;
        cloneAsListNumberGlyph(self: ListNumberGlyphHandle): ListNumberGlyphHandle;
        fromGlyph(glyph: GlyphHandle): ListNumberGlyphHandle;
        getLevel(self: ListNumberGlyphHandle): number;
    }
    export const ListNumberGlyphApi: ListNumberGlyphApi;

    export interface NoteNumberGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: NoteNumberGlyphHandle): NoteNumberGlyphHandle;
        cloneAsNoteNumberGlyph(self: NoteNumberGlyphHandle): NoteNumberGlyphHandle;
        fromGlyph(glyph: GlyphHandle): NoteNumberGlyphHandle;
    }
    export const NoteNumberGlyphApi: NoteNumberGlyphApi;

    export interface PageNumberGlyphApi extends Omit<FieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: PageNumberGlyphHandle): PageNumberGlyphHandle;
        cloneAsPageNumberGlyph(self: PageNumberGlyphHandle): PageNumberGlyphHandle;
        fromGlyph(glyph: GlyphHandle): PageNumberGlyphHandle;
        getPageNumberType(self: PageNumberGlyphHandle): PageNumberType;
    }
    export const PageNumberGlyphApi: PageNumberGlyphApi;

    export interface ParagraphAttsApi {
        clone(self: ParagraphAttsHandle): ParagraphAttsHandle;
        create(): ParagraphAttsHandle;
        getAlignToBaselineGrid(self: ParagraphAttsHandle): boolean;
        getAlignXType(self: ParagraphAttsHandle): ParagraphAlignXType;
        getDoubleValue(self: ParagraphAttsHandle, att: ParagraphAttDoubleType): number;
        getHyphenateMinLength(self: ParagraphAttsHandle): number;
        getHyphenateMinPrefix(self: ParagraphAttsHandle): number;
        getHyphenateMinSuffix(self: ParagraphAttsHandle): number;
        getIsAutoHyphenate(self: ParagraphAttsHandle): boolean;
        getIsBookEndnotes(self: ParagraphAttsHandle): boolean;
        getIsIndex(self: ParagraphAttsHandle): boolean;
        getIsKeepTogether(self: ParagraphAttsHandle): boolean;
        getIsKeepWithPrevious(self: ParagraphAttsHandle): boolean;
        getIsPreventOrphans(self: ParagraphAttsHandle): boolean;
        getIsPreventWidows(self: ParagraphAttsHandle): boolean;
        getIsSumBeforeAndAfterSpace(self: ParagraphAttsHandle): boolean;
        getKeepWithNext(self: ParagraphAttsHandle): number;
        getLeadingType(self: ParagraphAttsHandle): ParagraphLeadingType;
        getLineBreakModeType(self: ParagraphAttsHandle): ParagraphLineBreakModeType;
        getMaxConsecutiveHyphens(self: ParagraphAttsHandle): number;
        getPDFExportTagType(self: ParagraphAttsHandle): ParagraphPDFExportTagType;
        getStartAtHardBreakType(self: ParagraphAttsHandle): ParagraphStartAtHardBreakType;
        getStringValue(self: ParagraphAttsHandle, att: ParagraphAttStringType): string;
        getUseModernLeading(self: ParagraphAttsHandle): boolean;
        getUseSpaceBeforeMode(self: ParagraphAttsHandle): ParagraphUseSpaceBeforeMode;
        getUseSpaceBetweenSameStyles(self: ParagraphAttsHandle): boolean;
        setAlignToBaselineGrid(self: ParagraphAttsHandle, value: boolean): void;
        setAlignXType(self: ParagraphAttsHandle, type: ParagraphAlignXType): void;
        setDoubleValue(self: ParagraphAttsHandle, att: ParagraphAttDoubleType, value: number): void;
        setHyphenateMinLength(self: ParagraphAttsHandle, value: number): void;
        setHyphenateMinPrefix(self: ParagraphAttsHandle, value: number): void;
        setHyphenateMinSuffix(self: ParagraphAttsHandle, value: number): void;
        setIsAutoHyphenate(self: ParagraphAttsHandle, value: boolean): void;
        setIsBookEndnotes(self: ParagraphAttsHandle, value: boolean): void;
        setIsIndex(self: ParagraphAttsHandle, value: boolean): void;
        setIsKeepTogether(self: ParagraphAttsHandle, value: boolean): void;
        setIsKeepWithPrevious(self: ParagraphAttsHandle, value: boolean): void;
        setIsPreventOrphans(self: ParagraphAttsHandle, value: boolean): void;
        setIsPreventWidows(self: ParagraphAttsHandle, value: boolean): void;
        setIsSumBeforeAndAfterSpace(self: ParagraphAttsHandle, value: boolean): void;
        setKeepWithNext(self: ParagraphAttsHandle, value: number): void;
        setLeadingType(self: ParagraphAttsHandle, type: ParagraphLeadingType): void;
        setLineBreakModeType(self: ParagraphAttsHandle, type: ParagraphLineBreakModeType): void;
        setMaxConsecutiveHyphens(self: ParagraphAttsHandle, value: number): void;
        setPDFExportTagType(self: ParagraphAttsHandle, type: ParagraphPDFExportTagType): void;
        setStartAtHardBreakType(self: ParagraphAttsHandle, type: ParagraphStartAtHardBreakType): void;
        setStringValue(self: ParagraphAttsHandle, att: ParagraphAttStringType, value: string): void;
        setUseModernLeading(self: ParagraphAttsHandle, value: boolean): void;
        setUseSpaceBeforeMode(self: ParagraphAttsHandle, mode: ParagraphUseSpaceBeforeMode): void;
        setUseSpaceBetweenSameStyles(self: ParagraphAttsHandle, value: boolean): void;
    }
    export const ParagraphAttsApi: ParagraphAttsApi;

    export interface PinGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: PinGlyphHandle): PinGlyphHandle;
        cloneAsPinGlyph(self: PinGlyphHandle): PinGlyphHandle;
        fromGlyph(glyph: GlyphHandle): PinGlyphHandle;
        getNotePosition(self: PinGlyphHandle): NotePosition;
        getNoteType(self: PinGlyphHandle): NoteType;
        isInline(self: PinGlyphHandle): boolean;
        isNote(self: PinGlyphHandle): boolean;
    }
    export const PinGlyphApi: PinGlyphApi;

    export interface RangenoteBodyGlyphApi extends Omit<FieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: RangenoteBodyGlyphHandle): RangenoteBodyGlyphHandle;
        cloneAsRangenoteBodyGlyph(self: RangenoteBodyGlyphHandle): RangenoteBodyGlyphHandle;
        fromGlyph(glyph: GlyphHandle): RangenoteBodyGlyphHandle;
        isLive(self: RangenoteBodyGlyphHandle): boolean;
    }
    export const RangenoteBodyGlyphApi: RangenoteBodyGlyphApi;

    export interface RangenoteEndGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: RangenoteEndGlyphHandle): RangenoteEndGlyphHandle;
        cloneAsRangenoteEndGlyph(self: RangenoteEndGlyphHandle): RangenoteEndGlyphHandle;
        fromGlyph(glyph: GlyphHandle): RangenoteEndGlyphHandle;
        isLive(self: RangenoteEndGlyphHandle): boolean;
    }
    export const RangenoteEndGlyphApi: RangenoteEndGlyphApi;

    export interface RangenoteReferenceGlyphApi extends Omit<FieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: RangenoteReferenceGlyphHandle): RangenoteReferenceGlyphHandle;
        cloneAsRangenoteReferenceGlyph(self: RangenoteReferenceGlyphHandle): RangenoteReferenceGlyphHandle;
        fromGlyph(glyph: GlyphHandle): RangenoteReferenceGlyphHandle;
        getNotePosition(self: RangenoteReferenceGlyphHandle): NotePosition;
        getNoteType(self: RangenoteReferenceGlyphHandle): NoteType;
    }
    export const RangenoteReferenceGlyphApi: RangenoteReferenceGlyphApi;

    export interface RightIndentTabGlyphApi extends Omit<GlyphApi, "clone"> {
        clone(self: RightIndentTabGlyphHandle): RightIndentTabGlyphHandle;
        cloneAsRightIndentTabGlyph(self: RightIndentTabGlyphHandle): RightIndentTabGlyphHandle;
        fromGlyph(glyph: GlyphHandle): RightIndentTabGlyphHandle;
    }
    export const RightIndentTabGlyphApi: RightIndentTabGlyphApi;

    export interface RunningHeaderGlyphApi extends Omit<FormattableFieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: RunningHeaderGlyphHandle): RunningHeaderGlyphHandle;
        cloneAsRunningHeaderGlyph(self: RunningHeaderGlyphHandle): RunningHeaderGlyphHandle;
        fromGlyph(glyph: GlyphHandle): RunningHeaderGlyphHandle;
    }
    export const RunningHeaderGlyphApi: RunningHeaderGlyphApi;

    export interface SectionNameGlyphApi extends Omit<FieldGlyphApi, "clone" | "fromGlyph"> {
        clone(self: SectionNameGlyphHandle): SectionNameGlyphHandle;
        cloneAsSectionNameGlyph(self: SectionNameGlyphHandle): SectionNameGlyphHandle;
        fromGlyph(glyph: GlyphHandle): SectionNameGlyphHandle;
    }
    export const SectionNameGlyphApi: SectionNameGlyphApi;

    export interface StoryApi {
        containsBookEndnotes(self: StoryHandle): boolean;
        containsIndex(self: StoryHandle): boolean;
        containsToc(self: StoryHandle): boolean;
        findParagraphBreak(self: StoryHandle, startPos: number, maxNum: number): number;
        findWordBegin(self: StoryHandle, startPos: number, maxNum: number): number;
        findWordEnd(self: StoryHandle, startPos: number, maxNum: number): number;
        findWordPart(self: StoryHandle, startPos: number, maxNum: number): number;
        getGlyph(self: StoryHandle, pos: number): GlyphHandle;
        getGlyphAtts(self: StoryHandle, pos: number): GlyphAttsHandle;
        getGlyphAttsRunEnd(self: StoryHandle, pos: number, maxPos: number): number;
        getGlyphType(self: StoryHandle, pos: number): GlyphType;
        getHardBreakType(self: StoryHandle, pos: number): HardBreakType;
        getLength(self: StoryHandle): number;
        getParagraphAtts(self: StoryHandle, pos: number): ParagraphAttsHandle;
        getParagraphAttsRunEnd(self: StoryHandle, pos: number, maxPos: number): number;
        getSoftBreakType(self: StoryHandle, pos: number): SoftBreakType;
        getText(self: StoryHandle, storyPos: number, maxNum: number, format: StoryIoFormat): string;
        getWordPartType(self: StoryHandle, pos: number): WordPartType;
        isCellBegin(self: StoryHandle, pos: number): boolean;
        isCellEnd(self: StoryHandle, pos: number): boolean;
        isEmpty(self: StoryHandle): boolean;
        isParagraphBreak(self: StoryHandle, pos: number): boolean;
        isRangenoteBodyStory(self: StoryHandle): boolean;
        isTable(self: StoryHandle): boolean;
        isWordBegin(self: StoryHandle, pos: number): boolean;
        isWordEnd(self: StoryHandle, pos: number): boolean;
        isWordPart(self: StoryHandle, pos: number): boolean;
        rFindParagraphBreak(self: StoryHandle, startPos: number, maxNum: number): number;
        rFindWordBegin(self: StoryHandle, startPos: number, maxNum: number): number;
        rFindWordEnd(self: StoryHandle, startPos: number, maxNum: number): number;
        rFindWordPart(self: StoryHandle, startPos: number, maxNum: number): number;
        usesGlobalNumbering(self: StoryHandle): boolean;
    }
    export const StoryApi: StoryApi;

    export interface StoryBuilderApi {
        addParagraphBreak(self: StoryBuilderHandle): void;
        addText(self: StoryBuilderHandle, utf8Text: string): void;
        applyGlyphDelta(self: StoryBuilderHandle, delta: StoryDeltaHandle): void;
        applyParagraphDelta(self: StoryBuilderHandle, delta: StoryDeltaHandle): void;
        clearText(self: StoryBuilderHandle): void;
        create(): StoryBuilderHandle;
        getGlyphAtts(self: StoryBuilderHandle): GlyphAttsHandle;
        getParagraphAtts(self: StoryBuilderHandle): ParagraphAttsHandle;
        setGlyphAtts(self: StoryBuilderHandle, glyphAtts: GlyphAttsHandle): void;
        setParagraphAtts(self: StoryBuilderHandle, paragraphAtts: ParagraphAttsHandle): void;
        setToArtisticTextDefaultStyle(self: StoryBuilderHandle, dpi: number, format: RasterFormat): void;
        setToFrameTextDefaultStyle(self: StoryBuilderHandle, dpi: number, format: RasterFormat): void;
    }
    export const StoryBuilderApi: StoryBuilderApi;

    export interface StoryDeltaApi {
        createAlignToBaselineGridDelta(value: boolean): StoryDeltaHandle;
        createAlignXDelta(type: ParagraphAlignXType): StoryDeltaHandle;
        createBrushFillDelta(fillDescriptorOrNull: FillDescriptorHandle | null): StoryDeltaHandle;
        createCapsTypeDelta(type: CapsType): StoryDeltaHandle;
        createCompositeDelta(deltas: StoryDeltaHandle[]): StoryDeltaHandle;
        createFamilyNameDelta(familyName: string): StoryDeltaHandle;
        createFontDelta(fields: FontField, font: FontHandle): StoryDeltaHandle;
        createGlyphDoubleDelta(key: GlyphAttDoubleType, value: number): StoryDeltaHandle;
        createGlyphLineStyleDescriptorDelta(lineStyleDescriptor: LineStyleDescriptorHandle): StoryDeltaHandle;
        createGlyphStringDelta(key: GlyphAttStringType, value: string): StoryDeltaHandle;
        createHighlightFillDelta(fillDescriptorOrNull: FillDescriptorHandle | null): StoryDeltaHandle;
        createHyphenateMinLengthDelta(value: number): StoryDeltaHandle;
        createHyphenateMinPrefixDelta(value: number): StoryDeltaHandle;
        createHyphenateMinSuffixDelta(value: number): StoryDeltaHandle;
        createIsAutoHyphenateDelta(value: boolean): StoryDeltaHandle;
        createIsKeepTogetherDelta(value: boolean): StoryDeltaHandle;
        createIsKeepWithPreviousDelta(value: boolean): StoryDeltaHandle;
        createIsNoBreakDelta(isNoBreak: boolean): StoryDeltaHandle;
        createIsPreventOrphansDelta(value: boolean): StoryDeltaHandle;
        createIsPreventWidowsDelta(value: boolean): StoryDeltaHandle;
        createIsSumBeforeAndAfterSpaceDelta(value: boolean): StoryDeltaHandle;
        createItalicDelta(italic: boolean): StoryDeltaHandle;
        createKeepWithNextDelta(value: number): StoryDeltaHandle;
        createLeadingOverrideTypeDelta(type: LeadingOverrideType): StoryDeltaHandle;
        createLeadingTypeDelta(type: ParagraphLeadingType): StoryDeltaHandle;
        createLeftIndentDelta(value: number): StoryDeltaHandle;
        createLineBreakModeDelta(mode: ParagraphLineBreakModeType): StoryDeltaHandle;
        createMaxConsecutiveHyphensDelta(value: number): StoryDeltaHandle;
        createOpenTypeLanguageTagDelta(tag: number): StoryDeltaHandle;
        createOpenTypeScriptTagDelta(tag: number): StoryDeltaHandle;
        createOpticalAlignmentTypeDelta(type: OpticalAlignmentType): StoryDeltaHandle;
        createPDFExportTagDelta(type: ParagraphPDFExportTagType): StoryDeltaHandle;
        createParagraphDoubleDelta(key: ParagraphAttDoubleType, value: number): StoryDeltaHandle;
        createParagraphStringDelta(key: ParagraphAttStringType, value: string): StoryDeltaHandle;
        createPenFillDelta(fillDescriptorOrNull: FillDescriptorHandle | null): StoryDeltaHandle;
        createPostscriptNameDelta(postscriptName: string): StoryDeltaHandle;
        createRightIndentDelta(value: number): StoryDeltaHandle;
        createSetAttsDelta(glyphAttsOrNull: GlyphAttsHandle | null, paragraphAttsOrNull: ParagraphAttsHandle | null): StoryDeltaHandle;
        createStartAtHardBreakDelta(type: ParagraphStartAtHardBreakType): StoryDeltaHandle;
        createStrikeoutFillDelta(fillDescriptorOrNull: FillDescriptorHandle | null): StoryDeltaHandle;
        createStrikeoutTypeDelta(type: TypographicLineType): StoryDeltaHandle;
        createSuperSubTypeDelta(type: SuperSubType): StoryDeltaHandle;
        createTocRoleTypeDelta(type: TocRoleType): StoryDeltaHandle;
        createTransparencyDelta(fillDescriptorOrNull: FillDescriptorHandle | null): StoryDeltaHandle;
        createUnderlineFillDelta(fillDescriptorOrNull: FillDescriptorHandle | null): StoryDeltaHandle;
        createUnderlineTypeDelta(type: TypographicLineType): StoryDeltaHandle;
        createUseModernLeadingDelta(value: boolean): StoryDeltaHandle;
        createUseSpaceBeforeModeDelta(mode: ParagraphUseSpaceBeforeMode): StoryDeltaHandle;
        createUseSpaceBetweenSameStylesDelta(value: boolean): StoryDeltaHandle;
        createWeightDelta(weight: number): StoryDeltaHandle;
        createWidthDelta(width: FontWidth): StoryDeltaHandle;
    }
    export const StoryDeltaApi: StoryDeltaApi;

    export interface StoryRangeApi {
        getCount(range: StoryRange): number;
        getReversed(range: StoryRange): StoryRange;
        isBackwards(range: StoryRange): boolean;
        isEmpty(range: StoryRange): boolean;
        isForwards(range: StoryRange): boolean;
    }
    export const StoryRangeApi: StoryRangeApi;

}

// ---------------------------------------------------------------------------
// affinity:timers
// ---------------------------------------------------------------------------

declare module "affinity:timers" {

    export interface TimerApi {
        cancel(self: TimerHandle): void;
        cancelAll(): void;
        create(): TimerHandle;
        dispose(self: TimerHandle): void;
        getExpiry(self: TimerHandle, asBigInt: boolean): number;
        getExpiryFromNow(self: TimerHandle, asBigInt: boolean): number;
        getNow(asBigInt: boolean): number;
        moveExpiry(self: TimerHandle, durationMs: number): void;
        setExpiry(self: TimerHandle, expiryTimeMs: number): void;
        setExpiryFromNow(self: TimerHandle, durationMs: number): void;
        waitAsync(self: TimerHandle, callback: (error: Error | null) => void): void;
    }
    export const TimerApi: TimerApi;

}

// ---------------------------------------------------------------------------
// affinity:ui
// ---------------------------------------------------------------------------

declare module "affinity:ui" {

    import { EnumerationResult, HorizontalAlignment, UnitType, UserUnitType } from "affinity:common";
    import { SpatialAnchor } from "affinity:dom";
    import { Size } from "affinity:geometry";

    export enum DialogItemType {
        Unknown,
        Separator,
        Switch,
        ComboBox,
        ButtonSet,
        RadioGroup,
        StaticText,
        UnitValueEditor,
        CheckBox,
        SpatialAnchor,
        ColourPicker,
        TextBox,
        FontPicker,
        FillEditor,
        StrokeEditor,
        Group,
        Column,
        ColumnStack,
        Button,
    }

    export enum DialogResult {
        Cancel,
        Ok,
    }

    export interface DialogApi {
        addColumn(self: DialogHandle): DialogColumnHandle;
        create(title: string, sizeOrNull: Size | null): DialogHandle;
        enumerateColumns(self: DialogHandle, callback: (column: DialogColumnHandle) => EnumerationResult): void;
        findControl(self: DialogHandle, controlID: number): DialogControlHandle;
        getColumn(self: DialogHandle, index: number): DialogColumnHandle;
        getColumnCount(self: DialogHandle): number;
        getInitialWidth(self: DialogHandle): number;
        getIsResizable(self: DialogHandle): boolean;
        getIsRunningModal(self: DialogHandle): boolean;
        runModal(self: DialogHandle): DialogResult;
        setInitialWidth(self: DialogHandle, width: number): void;
        setIsResizable(self: DialogHandle, isResizable: boolean): void;
        setItemsVisibility(self: DialogHandle, showIDs: number[], hideIDs: number[]): void;
        setOnControlValueChangedHandler(self: DialogHandle, callback: (transient: boolean, controlID: number) => void): void;
    }
    export const DialogApi: DialogApi;

    export interface DialogBoolControlApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogBoolControlHandle;
        getValue(self: DialogBoolControlHandle): boolean;
        setValue(self: DialogBoolControlHandle, value: boolean): void;
    }
    export const DialogBoolControlApi: DialogBoolControlApi;

    export interface DialogButtonApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogButtonHandle;
        getAlignment(self: DialogButtonHandle): HorizontalAlignment;
        getIsFullWidth(self: DialogButtonHandle): boolean;
        setAlignment(self: DialogButtonHandle, alignment: HorizontalAlignment): void;
        setIsFullWidth(self: DialogButtonHandle, isFullWidth: boolean): void;
    }
    export const DialogButtonApi: DialogButtonApi;

    export interface DialogButtonSetApi extends Omit<DialogEnumControlApi, "fromControl"> {
        fromControl(ctrl: DialogControlHandle): DialogButtonSetHandle;
        getIsFullWidth(self: DialogButtonSetHandle): boolean;
        setIsFullWidth(self: DialogButtonSetHandle, isFullWidth: boolean): void;
    }
    export const DialogButtonSetApi: DialogButtonSetApi;

    export interface DialogCheckBoxApi extends Omit<DialogBoolControlApi, "fromControl"> {
        fromControl(ctrl: DialogControlHandle): DialogCheckBoxHandle;
        getIsFullWidth(self: DialogCheckBoxHandle): boolean;
        setIsFullWidth(self: DialogCheckBoxHandle, isFullWidth: boolean): void;
    }
    export const DialogCheckBoxApi: DialogCheckBoxApi;

    export interface DialogColourPickerApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogColourPickerHandle;
        getAllowNoise(self: DialogColourPickerHandle): boolean;
        getAllowPickNone(self: DialogColourPickerHandle): boolean;
        getIsFullWidth(self: DialogColourPickerHandle): boolean;
        getValue(self: DialogColourPickerHandle): ColourHandle;
        setAllowNoise(self: DialogColourPickerHandle, value: boolean): void;
        setAllowPickNone(self: DialogColourPickerHandle, value: boolean): void;
        setIsFullWidth(self: DialogColourPickerHandle, isFullWidth: boolean): void;
        setValue(self: DialogColourPickerHandle, valueOrNull: ColourHandle | null): void;
    }
    export const DialogColourPickerApi: DialogColourPickerApi;

    export interface DialogColumnApi extends DialogItemApi {
        addGroup(self: DialogColumnHandle, text: string): DialogGroupHandle;
        enumerateGroups(self: DialogColumnHandle, callback: (group: DialogGroupHandle) => EnumerationResult): void;
        getColumnIndex(self: DialogColumnHandle): number;
        getGroup(self: DialogColumnHandle, index: number): DialogGroupHandle;
        getGroupCount(self: DialogColumnHandle): number;
        getPaddingFactor(self: DialogColumnHandle): number;
        getWidthProportion(self: DialogColumnHandle): number;
        setPaddingFactor(self: DialogColumnHandle, paddingFactor: number): void;
        setWidthProportion(self: DialogColumnHandle, widthProportion: number): void;
    }
    export const DialogColumnApi: DialogColumnApi;

    export interface DialogColumnStackApi extends DialogItemApi {
        addColumn(self: DialogColumnStackHandle): DialogColumnHandle;
        enumerateColumns(self: DialogColumnStackHandle, callback: (column: DialogColumnHandle) => EnumerationResult): void;
        getColumn(self: DialogColumnStackHandle, index: number): DialogColumnHandle;
        getColumnCount(self: DialogColumnStackHandle): number;
    }
    export const DialogColumnStackApi: DialogColumnStackApi;

    export interface DialogComboBoxApi extends Omit<DialogEnumControlApi, "fromControl"> {
        fromControl(ctrl: DialogControlHandle): DialogComboBoxHandle;
        getIsFullWidth(self: DialogComboBoxHandle): boolean;
        setIsFullWidth(self: DialogComboBoxHandle, isFullWidth: boolean): void;
    }
    export const DialogComboBoxApi: DialogComboBoxApi;

    export interface DialogControlApi extends DialogItemApi {
        getDescription(self: DialogControlHandle): string;
        getIsEnabled(self: DialogControlHandle): boolean;
        getLabel(self: DialogControlHandle): string;
        setDescription(self: DialogControlHandle, description: string): void;
        setIsEnabled(self: DialogControlHandle, isEnabled: boolean): void;
        setOnValueChangedHandler(self: DialogControlHandle, callback: (transient: boolean) => void): void;
    }
    export const DialogControlApi: DialogControlApi;

    export interface DialogEnumControlApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogEnumControlHandle;
        getSelectedIndex(self: DialogEnumControlHandle): number;
        setSelectedIndex(self: DialogEnumControlHandle, index: number): void;
    }
    export const DialogEnumControlApi: DialogEnumControlApi;

    export interface DialogFillEditorApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogFillEditorHandle;
        getFill(self: DialogFillEditorHandle): FillHandle;
        getIsFullWidth(self: DialogFillEditorHandle): boolean;
        getIsStrokeFill(self: DialogFillEditorHandle): boolean;
        setFill(self: DialogFillEditorHandle, fillOrNull: FillHandle | null): void;
        setIsFullWidth(self: DialogFillEditorHandle, isFullWidth: boolean): void;
        setIsStrokeFill(self: DialogFillEditorHandle, isStrokeFill: boolean): void;
    }
    export const DialogFillEditorApi: DialogFillEditorApi;

    export interface DialogFontPickerApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogFontPickerHandle;
        getFont(self: DialogFontPickerHandle): FontHandle;
        getFontCollection(self: DialogFontPickerHandle): FontCollectionHandle;
        getFontFamily(self: DialogFontPickerHandle): FontFamilyHandle;
        getIsFullWidth(self: DialogFontPickerHandle): boolean;
        getText(self: DialogFontPickerHandle): string;
        setFont(self: DialogFontPickerHandle, fontOrNull: FontHandle | null): void;
        setFontCollection(self: DialogFontPickerHandle, fontCollectionOrNull: FontCollectionHandle | null): void;
        setFontFamily(self: DialogFontPickerHandle, fontFamilyOrNull: FontFamilyHandle | null): void;
        setIsFullWidth(self: DialogFontPickerHandle, isFullWidth: boolean): void;
        setText(self: DialogFontPickerHandle, text: string): void;
    }
    export const DialogFontPickerApi: DialogFontPickerApi;

    export interface DialogGroupApi extends DialogItemApi {
        addButton(self: DialogGroupHandle, label: string): DialogButtonHandle;
        addButtonGetID(self: DialogGroupHandle, label: string): number;
        addButtonSet(self: DialogGroupHandle, label: string, items: string[], initialValue: number): DialogButtonSetHandle;
        addButtonSetGetID(self: DialogGroupHandle, label: string, items: string[], initialValue: number): number;
        addCheckBox(self: DialogGroupHandle, label: string, initialValue: boolean): DialogCheckBoxHandle;
        addCheckBoxGetID(self: DialogGroupHandle, label: string, initialValue: boolean): number;
        addColourPicker(self: DialogGroupHandle, label: string, initialValueOrNull: ColourHandle | null): DialogColourPickerHandle;
        addColourPickerGetID(self: DialogGroupHandle, label: string, initialValueOrNull: ColourHandle | null): number;
        addColumnStack(self: DialogGroupHandle): DialogColumnStackHandle;
        addColumnStackGetID(self: DialogGroupHandle): number;
        addComboBox(self: DialogGroupHandle, label: string, items: string[], initialValue: number): DialogComboBoxHandle;
        addComboBoxGetID(self: DialogGroupHandle, label: string, items: string[], initialValue: number): number;
        addFillEditor(self: DialogGroupHandle, label: string, initialValueOrNull: FillHandle | null): DialogFillEditorHandle;
        addFillEditorGetID(self: DialogGroupHandle, label: string, initialValueOrNull: FillHandle | null): number;
        addFontPicker(self: DialogGroupHandle, label: string): DialogFontPickerHandle;
        addFontPickerGetID(self: DialogGroupHandle, label: string): number;
        addRadioGroup(self: DialogGroupHandle, label: string, items: string[], initialValue: number): DialogRadioGroupHandle;
        addRadioGroupGetID(self: DialogGroupHandle, label: string, items: string[], initialValue: number): number;
        addSpatialAnchor(self: DialogGroupHandle, label: string, initialValue: SpatialAnchor): DialogSpatialAnchorHandle;
        addSpatialAnchorGetID(self: DialogGroupHandle, label: string, initialValue: SpatialAnchor): number;
        addStaticText(self: DialogGroupHandle, label: string, text: string): DialogStaticTextHandle;
        addStaticTextGetID(self: DialogGroupHandle, label: string, text: string): number;
        addStrokeEditor(self: DialogGroupHandle, label: string, initialValueOrNull: LineStyleDescriptorHandle | null): DialogStrokeEditorHandle;
        addStrokeEditorGetID(self: DialogGroupHandle, label: string, initialValueOrNull: LineStyleDescriptorHandle | null): number;
        addSwitch(self: DialogGroupHandle, label: string, initialValue: boolean): DialogSwitchHandle;
        addSwitchGetID(self: DialogGroupHandle, label: string, initialValue: boolean): number;
        addTextBox(self: DialogGroupHandle, label: string, text: string): DialogTextBoxHandle;
        addTextBoxGetID(self: DialogGroupHandle, label: string, text: string): number;
        addUnitValueEditor(self: DialogGroupHandle, label: string, units: UnitType, displayUnits: UnitType, minValue: number, maxValue: number, initialValue: number): DialogUnitValueEditorHandle;
        addUnitValueEditorGetID(self: DialogGroupHandle, label: string, units: UnitType, displayUnits: UnitType, minValue: number, maxValue: number, initialValue: number): number;
        addUserUnitValueEditor(self: DialogGroupHandle, label: string, units: UnitType, displayUnits: UserUnitType, minValue: number, maxValue: number, initialValue: number): DialogUnitValueEditorHandle;
        addUserUnitValueEditorGetID(self: DialogGroupHandle, label: string, units: UnitType, displayUnits: UserUnitType, minValue: number, maxValue: number, initialValue: number): number;
        enumerateControls(self: DialogGroupHandle, callback: (control: DialogControlHandle) => EnumerationResult): void;
        getColumn(self: DialogGroupHandle): DialogColumnHandle;
        getControl(self: DialogGroupHandle, index: number): DialogControlHandle;
        getControlCount(self: DialogGroupHandle): number;
        getEnableSeparator(self: DialogGroupHandle): boolean;
        getLabel(self: DialogGroupHandle): string;
        setEnableSeparator(self: DialogGroupHandle, enableSeparator: boolean): void;
    }
    export const DialogGroupApi: DialogGroupApi;

    export interface DialogItemApi {
        getIsVisible(self: DialogItemHandle): boolean;
        getItemID(self: DialogItemHandle): number;
        getItemType(self: DialogItemHandle): DialogItemType;
        setIsVisible(self: DialogItemHandle, visible: boolean): void;
    }
    export const DialogItemApi: DialogItemApi;

    export interface DialogRadioGroupApi extends Omit<DialogEnumControlApi, "fromControl"> {
        fromControl(ctrl: DialogControlHandle): DialogRadioGroupHandle;
        getIsFullWidth(self: DialogRadioGroupHandle): boolean;
        setIsFullWidth(self: DialogRadioGroupHandle, isFullWidth: boolean): void;
    }
    export const DialogRadioGroupApi: DialogRadioGroupApi;

    export interface DialogSpatialAnchorApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogSpatialAnchorHandle;
        getValue(self: DialogSpatialAnchorHandle): SpatialAnchor;
        setValue(self: DialogSpatialAnchorHandle, value: SpatialAnchor): void;
    }
    export const DialogSpatialAnchorApi: DialogSpatialAnchorApi;

    export interface DialogStaticTextApi extends Omit<DialogTextControlApi, "fromControl"> {
        fromControl(ctrl: DialogControlHandle): DialogStaticTextHandle;
    }
    export const DialogStaticTextApi: DialogStaticTextApi;

    export interface DialogStrokeEditorApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogStrokeEditorHandle;
        getIsFullWidth(self: DialogStrokeEditorHandle): boolean;
        getStroke(self: DialogStrokeEditorHandle): LineStyleDescriptorHandle;
        setIsFullWidth(self: DialogStrokeEditorHandle, isFullWidth: boolean): void;
        setStroke(self: DialogStrokeEditorHandle, lineStyleDescriptorOrNull: LineStyleDescriptorHandle | null): void;
    }
    export const DialogStrokeEditorApi: DialogStrokeEditorApi;

    export interface DialogSwitchApi extends Omit<DialogBoolControlApi, "fromControl"> {
        fromControl(ctrl: DialogControlHandle): DialogSwitchHandle;
    }
    export const DialogSwitchApi: DialogSwitchApi;

    export interface DialogTextBoxApi extends Omit<DialogTextControlApi, "fromControl"> {
        fromControl(ctrl: DialogControlHandle): DialogTextBoxHandle;
        getIsMultiLine(self: DialogTextBoxHandle): boolean;
        getRowSpan(self: DialogTextBoxHandle): number;
        setIsMultiLine(self: DialogTextBoxHandle, value: boolean): void;
        setRowSpan(self: DialogTextBoxHandle, rowSpan: number): void;
    }
    export const DialogTextBoxApi: DialogTextBoxApi;

    export interface DialogTextControlApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogTextControlHandle;
        getIsFullWidth(self: DialogTextControlHandle): boolean;
        getText(self: DialogTextControlHandle): string;
        getTextHorizontalAlignment(self: DialogTextControlHandle): HorizontalAlignment;
        setIsFullWidth(self: DialogTextControlHandle, isFullWidth: boolean): void;
        setText(self: DialogTextControlHandle, text: string): void;
        setTextHorizontalAlignment(self: DialogTextControlHandle, alignment: HorizontalAlignment): void;
    }
    export const DialogTextControlApi: DialogTextControlApi;

    export interface DialogUnitValueEditorApi extends DialogControlApi {
        fromControl(ctrl: DialogControlHandle): DialogUnitValueEditorHandle;
        getHasNoMaxValue(self: DialogUnitValueEditorHandle): boolean;
        getHasNoMinValue(self: DialogUnitValueEditorHandle): boolean;
        getIsFullWidth(self: DialogUnitValueEditorHandle): boolean;
        getPrecision(self: DialogUnitValueEditorHandle): number;
        getShowPopupSlider(self: DialogUnitValueEditorHandle): boolean;
        getUnits(self: DialogUnitValueEditorHandle): UnitType;
        getValue(self: DialogUnitValueEditorHandle): number;
        setHasNoMaxValue(self: DialogUnitValueEditorHandle, hasNoMaxValue: boolean): void;
        setHasNoMinValue(self: DialogUnitValueEditorHandle, hasNoMinValue: boolean): void;
        setIsFullWidth(self: DialogUnitValueEditorHandle, isFullWidth: boolean): void;
        setPrecision(self: DialogUnitValueEditorHandle, precision: number): void;
        setShowPopupSlider(self: DialogUnitValueEditorHandle, hasSlider: boolean): void;
        setValue(self: DialogUnitValueEditorHandle, value: number): void;
    }
    export const DialogUnitValueEditorApi: DialogUnitValueEditorApi;

    export interface UiApi {
        alert(message: string, title: string): void;
        alertAsync(message: string, title: string, callback: (errorCode: Error | null) => void): void;
        chooseFile(): string;
        chooseFileAsync(callback: (errorCode: Error | null, path: string) => void): void;
        confirm(message: string, title: string): boolean;
        confirmAsync(message: string, title: string, callback: (errorCode: Error | null, isOK: boolean) => void): void;
        prompt(message: string, title: string, initialText: string): string;
        promptAsync(message: string, title: string, initialText: string, callback: (errorCode: Error | null, result: string) => void): void;
    }
    export const UiApi: UiApi;

}
