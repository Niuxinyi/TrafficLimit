/**
 * Created by xujie3949 on 2017/6/20.
 */

module.exports = [
    // uikit/controllers
    'common/FeatureConfig.js',
    'common/EventTypes.js',
    'config/Config.js',
    'config/Feature.js',
    'config/Tip.js',
    'config/EditTool.js',
    'config/Utility.js',
    'config/ThematicFigure.js',
    /** ------------情报矢量化------------------***/
    'config/preEditor/InfoEditTool.js',
    'config/preEditor/InfoTip.js',
    /** ------------------------------***/
    /** ------------FC预处理------------***/
    'config/preEditor/PretreatmentEditTool.js',
    'config/preEditor/PretreatmentTip.js',
    /** --------------------------------**/
    'controllers/FeatCodeController.js',
    'controllers/LayerController.js',
    'controllers/ObjectEditController.js',
    'controllers/OutPutController.js',
    'controllers/LogMsgController.js',
    'controllers/SelectController.js',
    'controllers/ShapeEditorController.js',
    'controllers/ToolTipsController.js',
    'controllers/HighRenderController.js',
    'controllers/EventController.js',
    'tools/Tool.js',
    'tools/MapTool.js',
    'tools/PanTool.js',
    'tools/ToolController.js',
    'tools/selectTools/PointSelectTool.js',
    'tools/selectTools/RectSelectTool.js',
    'tools/selectTools/StreetViewSelectTool.js',
    'tools/selectTools/TrackSelectTool.js',
    'tools/selectTools/PolygonSelectTool.js',
    'tools/assistantTools/AssistantTool.js',
    'tools/assistantTools/DistanceTool.js',
    'tools/assistantTools/AngleTool.js',
    'tools/assistantTools/AreaTool.js',
    'edit/Editor.js',
    'edit/EditResult.js',
    'check/CheckConfig.js',
    'check/CheckController.js',
    'check/CheckEngine.js',
    'check/CheckResult.js',
    'check/CheckRule.js',
    'check/rules/mini_length.js',
    'check/rules/Restriction/permit_check_is_integrity_restriction.js',
    'check/rules/Restriction/restriction_part_has_arrow_outLink.js',
    'check/rules/Restriction/restriction_viaLink_is_closed.js',
    'check/rules/RdSpeedLimit/speedLimit_link_no_cross.js',
    'check/rules/RdSpeedLimit/speedLimit_point_no_node.js',
    'check/rules/RdSpeedLimit/speedLimit_move_canpass_link.js',
    'check/rules/RdLinkWarning/linkWarning_link_limit.js',
    'check/rules/RdLinkWarning/linkWarning_move_canpass_link.js',
    'check/rules/RdLinkWarning/rdlink_warning_geo_is_not_in_mesh_link.js',
    'check/rules/RdElectronicEye/electronicEye_add_pair.js',
    'check/rules/point_direct_link_no_empty.js',
    'check/rules/move_point_distance.js',
    'check/rules/startEndTip_canPass_check.js',
    'check/rules/length_not_zero.js',
    'check/rules/startEndTip_samePoint_check.js',
    'check/rules/startEndTip_integrity_check.js',
    'check/rules/RdMileagePile/mileagePile_link_kind_check.js',
    'check/rules/RdMileagePile/mileagePile_link_form_check.js',
    'check/rules/RdMileagePile/mileagePile_point_position.js',
    'check/rules/RdMileagePile/mileagePile_point_complete.js',
    'check/rules/RdLinkSpeedLimit/linkSpeedLimit_complete.js',
    'check/rules/RdSlope/rdSlope_outLink_kind_check.js',
    'check/rules/RdSlope/rdSlope_outLink_form_check.js',
    'check/rules/RdSlope/rdSlope_inNode_check.js',
    'check/rules/RdSlope/rdSlope_links_check.js',
    'check/rules/RdSlope/rdSlope_outLink_length_check.js',
    'check/rules/RdSpeedBump/speedBump_link_form_check.js',
    'check/rules/RdSpeedBump/speedBump_link_kind_check.js',
    'check/rules/RdSpeedBump/speedBump_link_point_check.js',
    // 'check/rules/RdWaringInfo/waringInfo_link_check.js',
    // 'check/rules/RdWaringInfo/waringInfo_node_check.js',
    // 'check/rules/RdWaringInfo/waringInfo_link_node.js',
    'check/rules/RdGate/gate_node_hookLink_check.js',
    'check/rules/link_node_link_no_empty.js',
    'check/rules/node_no_empty.js',
    'check/rules/buffer_width.js',
    'check/rules/tipBorder_Geometry.js',
    'check/rules/RdTollGate/tollGate_node_hookLink_check.js',
    'check/rules/RdTollGate/tollGate_inLink_outLink_check.js',
    'check/rules/RdHgWgLimit/hgWgLimit_point_position.js',
    'check/rules/IxPoi/ixPoi_name_kindCode_check.js',
    'check/rules/IxPoi/ixPoi_link_form_check.js',
    'check/rules/IxPoi/ixPoi_batch_converge_location_integrity_check.js',
    'check/rules/IxPoi/ixPoi_batch_guide_auto_integrity_check.js',
    'check/rules/IxPoi/ixPoi_batch_guide_manual_integrity_check.js',
    'check/rules/IxPoi/ixPoi_batch_translate_location_integrity_check.js',
    'check/rules/RdInter/rdInter_node_form_check.js',
    'check/rules/RdInter/rdInter_node_check.js',
    'check/rules/RdRoad/rdRoad_link_form_check.js',
    'check/rules/RdObject/rdObject_form_check.js',
    'check/rules/RdVariableSpeed/variableSpeed_link_check.js',
    'check/rules/RdVariableSpeed/variableSpeed_inNode_check.js',
    'check/rules/RdVariableSpeed/variableSpeed_data_complete.js',
    'check/rules/RdVariableSpeed/variableSpeed_recommend_viasLink_check.js',
    'check/rules/RdDirectRoute/directRoute_data_complete.js',
    'check/rules/RdDirectRoute/directRoute_link_check.js',
    'check/rules/RdDirectRoute/directRoute_outlink_select.js',
    'check/rules/RdBranch/branch_link_node_link_no_empty.js',
    'check/rules/RdBranch/branch_is_not_same_outLink.js',
    'check/rules/RdBranch/branch_rule_1.js',
    'check/rules/RdBranch/branch_rule_2.js',
    'check/rules/RdBranch/branch_rule_3.js',
    'check/rules/RdBranch/branch_rule_4.js',
    'check/rules/RdBranch/branch_rule_5.js',
    'check/rules/RdBranch/branch_rule_6.js',
    'check/rules/RdBranch/branch_rule_7.js',
    'check/rules/RdBranch/branch_rule_8.js',
    'check/rules/RdBranch/branch_rule_9.js',
    'check/rules/RdBranch/branch_rule_10.js',
    'check/rules/RdVoiceGuide/voiceGuide_data_complete.js',
    'check/rules/RdVoiceGuide/voiceGuide_inLink_check_kind.js',
    'check/rules/RdVoiceGuide/voiceGuide_inLink_form_corss.js',
    'check/rules/RdVoiceGuide/voiceGuide_inLink_form_island.js',
    'check/rules/RdVoiceGuide/voiceGuide_outLink_check_kind.js',
    'check/rules/RdVoiceGuide/voiceGuide_outLink_form_corss.js',
    'check/rules/RdVoiceGuide/voiceGuide_outLink_form_island.js',
    'check/rules/RdLaneConnexity/lane_connexity_integrity_check.js',
    'check/rules/RdLaneConnexity/lane_connexity_runtime_check.js',
    'check/rules/LinkEdit/link_nodes_num_limit_check.js',
    'check/rules/LinkEdit/permit_check_node_is_not_contain_shapenode.js',
    'check/rules/LinkEdit/permit_check_is_integrity_rdlink.js',
    'check/rules/LinkEdit/permit_check_link_is_not_move_to_corner_node.js',
    'check/rules/LinkEdit/link_snap_link_limit_to_node.js',
    'check/rules/RdGsc/rdgsc_integrity_check.js',
    'check/rules/RdGsc/rdgsc_changed_check.js',
    'check/rules/RdGsc/link_node_is_not_closed_on_add_rdgsc.js',
    'check/rules/RdGsc/rdgsc_link_form_check.js',
    'check/rules/RdSe/rdSe_link_form_check.js',
    'check/rules/RdSe/rdSe_link_imicode_check.js',
    'check/rules/RdFace/check_face_must_composed_by_closedlink.js',
    'check/rules/LinkEdit/shaping_check_face_isless_threepoint.js',
    'check/rules/LinkEdit/shaping_check_link_selfintersect_2.js',
    'check/rules/RdFace/shaping_check_face_selfintersect_face.js',
    'check/rules/nodeEdit/permitmovecornerrules_node.js',
    'check/rules/LinkEdit/permitmovecornerrules_link.js',
    'check/rules/nodeEdit/permitmovesheetcornerrules_node.js',
    'check/rules/nodeEdit/permit_check_rdnode_is_not_move_to_corner_node.js',
    'check/rules/nodeEdit/link_node_is_not_closed_on_add_node.js',
    'check/rules/nodeEdit/link_node_is_not_closed_on_move_node.js',
    'check/rules/LinkEdit/permitmovesheetcornerrules_link.js',
    'check/rules/LinkEdit/shaping_check_link_ringnobreak_2_link.js',
    'check/rules/nodeEdit/shaping_check_link_ringnobreak_2_node.js',
    'check/rules/nodeEdit/shaping_check_face_selfintersect_node.js',
    'check/rules/nodeEdit/permit_node_finalGeometry_no_empty.js',
    'check/rules/LinkEdit/shaping_check_sheetline_not_move.js',
    'check/rules/LinkEdit/two_link_is_not_same_enode_and_snode.js',
    'check/rules/RdFace/lcLink_with_single_line_river_not_composed_to_face.js',
    'check/rules/RdFace/check_adlink_face_must_composed_by_closedlink.js',
    'check/rules/RdFace/shaping_check_face_selfintersect_face_when_link_to_face.js',
    'check/rules/RdFace/check_face_at_least_three_points.js',
    'check/rules/TipRoadSA/tipRoadSA_link_check_kind.js',
    'check/rules/TipRoadSA/tipRoadSA_data_check.js',
    'check/rules/RegionSelect/regionSelect_commit_check.js',
    'check/rules/TipLaneConnexity/tipLaneConnexity_extend_check.js',
    'check/rules/TipLaneConnexity/tipLaneConnexity_extend_update_check.js',
    'check/rules/TipSketch/tipSketch_save_check.js',
    'check/rules/LinkBreak/link_break_form_check.js',
    'check/rules/TipGSC/self_intersection_check.js',
    'check/rules/SubTaskCircle/merge_subTask_num.js',
    'check/rules/SubTaskCircle/merge_subTask_adjacent.js',
    'check/rules/SubTaskCircle/drawLink_not_intersect.js',
    'check/rules/SubTaskCircle/draw_polygon_close.js',
    'check/rules/SubTaskCircle/drawPolygon_not_intersect.js',
    'check/rules/RdCross/rdcross_integrity.js',
    'check/rules/TipBuildTimeChange/buildTimeChange_limit_check.js',
    'check/rules/TipDeletePropertyInProgress/property_in_progress_check.js',
    'check/rules/CmgBuilding/permit_face_no_empty.js',
    'check/rules/AdjustImage/permit_check_move_distance.js',
    'operation/Operation.js',
    'operation/EditResultOperation.js',
    'operation/PathEditOperation.js',
    'operation/PathVertexAddOperation.js',
    'operation/PathVertexMoveOperation.js',
    'operation/PathVertexRemoveOperation.js',
    'operation/PolygonEditOperation.js',
    'operation/PolygonVertexAddOperation.js',
    'operation/PolygonVertexMoveOperation.js',
    'operation/PolygonVertexRemoveOperation.js',
    'operation/OperationController.js',
    'edit/shapeEdit/ShapeEditor.js',
    'edit/shapeEdit/results/ShapeEditResult.js',
    'edit/shapeEdit/results/PathResult.js',
    'edit/shapeEdit/results/IxPoiResult.js',
    'edit/shapeEdit/results/TipBorderResult.js',
    'edit/shapeEdit/results/PointAddResult.js',
    'edit/shapeEdit/results/PointMoveResult.js',
    'edit/shapeEdit/results/PointGuideLinkResult.js',
    'edit/shapeEdit/results/PolygonResult.js',
    'edit/shapeEdit/results/PointResult.js',
    'edit/shapeEdit/results/TipLaneConnexityResult.js',
    'edit/shapeEdit/results/BreakTipLinksResult.js',
    'edit/shapeEdit/results/TipLinkUpDownDepartResult.js',
    'edit/shapeEdit/tools/ShapeTool.js',
    'edit/shapeEdit/tools/PathTool.js',
    'edit/shapeEdit/tools/PathSmoothTool.js',
    'edit/shapeEdit/tools/PathVertexAddTool.js',
    'edit/shapeEdit/tools/PathVertexInsertTool.js',
    'edit/shapeEdit/tools/PathVertexMoveTool.js',
    'edit/shapeEdit/tools/PathVertexRemoveTool.js',
    'edit/shapeEdit/tools/TipBorderTool.js',
    'edit/shapeEdit/tools/PoiAddTool.js',
    'edit/shapeEdit/tools/PointLocationTool.js',
    'edit/shapeEdit/tools/PoiUpdateTool.js',
    'edit/shapeEdit/tools/PointAddTool.js',
    'edit/shapeEdit/tools/PointMoveTool.js',
    'edit/shapeEdit/tools/PointGuideLinkTool.js',
    'edit/shapeEdit/tools/PolygonTool.js',
    'edit/shapeEdit/tools/PolygonSmoothTool.js',
    'edit/shapeEdit/tools/PolygonVertexAddTool.js',
    'edit/shapeEdit/tools/PolygonVertexInsertTool.js',
    'edit/shapeEdit/tools/PolygonVertexMoveTool.js',
    'edit/shapeEdit/tools/PolygonVertexRemoveTool.js',
    'edit/shapeEdit/tools/PointTool.js',
    'edit/shapeEdit/tools/TipLaneConnexityTool.js',

    'edit/shapeEdit/tools/TipSketchTool.js',
    'edit/shapeEdit/tools/BreakTipLinksTool.js',
    'edit/shapeEdit/tools/TipNomalRestrictionTool.js',
    'edit/shapeEdit/results/IxPoiResult.js',
    'edit/shapeEdit/results/PointLocationResult.js',
    'edit/shapeEdit/results/TipSketchResult.js',
    'edit/shapeEdit/results/TipNomalRestrictionResult.js',
    'edit/relationEdit/RelationEditor.js',
    'edit/relationEdit/results/LinkNodeLinkResult.js',
    'edit/relationEdit/results/LinkNodeLinksResult.js',
    'edit/relationEdit/results/RestrictionResult.js',
    'edit/relationEdit/results/PointLinkResult.js',
    'edit/relationEdit/results/NodeLinksResult.js',
    'edit/relationEdit/results/LinkPointDirectResult.js',
    'edit/relationEdit/results/LinkNodeResult.js',
    'edit/relationEdit/results/PolygonResult.js',
    'edit/complexEdit/results/LineDimensionsResult.js',
    'edit/complexEdit/results/AdminJoinFacesResult.js',
    'edit/relationEdit/results/NodeResult.js',
    'edit/relationEdit/results/LinkNodeViasLinkResult.js',
    'edit/relationEdit/results/LinkNodeLinkContinueLinkResult.js',
    'edit/relationEdit/results/LaneConnexityResult.js',
    'edit/relationEdit/results/SamePointRelationResult.js',
    'edit/relationEdit/results/SameLineRelationResult.js',
    'edit/relationEdit/results/CrfInterResult.js',
    'edit/relationEdit/results/CrfRoadResult.js',
    'edit/relationEdit/results/CrfObjectResult.js',
    'edit/relationEdit/results/GradeSeperateCrossResult.js',
    'edit/relationEdit/results/RDCrossResult.js',
    'edit/relationEdit/results/CmgBuildingResult.js',
    'edit/relationEdit/results/SpeedLimitResult.js',
    'edit/relationEdit/results/ScopeLineResult.js',
    'edit/relationEdit/results/StartFinishPointResult.js',
    'edit/relationEdit/results/TipMultiDigitizedResult.js',
    'edit/relationEdit/results/TipGSCResult.js',
    'edit/relationEdit/tools/RelationTool.js',
    'edit/relationEdit/tools/LinkNodeLinkTool.js',
    'edit/relationEdit/tools/LinkNodeLinksTool.js',
    'edit/relationEdit/tools/RestrictionTool.js',
    'edit/relationEdit/tools/NodeLinksTool.js',
    'edit/relationEdit/tools/PointLinkTool.js',
    'edit/relationEdit/tools/LinkPointDirectTool.js',
    'edit/relationEdit/tools/NodeTool.js',
    'edit/relationEdit/tools/LinkNodeTool.js',
    'edit/relationEdit/tools/RectSelectTool.js',
    'edit/relationEdit/tools/CrfInterTool.js',
    'edit/relationEdit/tools/CrfRoadTool.js',
    'edit/relationEdit/tools/CrfObjectTool.js',
    'edit/complexEdit/tools/LineDimensionsTool.js',
    'edit/relationEdit/tools/LinkNodeViasLinkTool.js',
    'edit/relationEdit/tools/LinkNodeLinkContinueLinkTool.js',
    'edit/relationEdit/tools/LaneConnexityTool.js',
    'edit/relationEdit/tools/SamePointRelationTool.js',
    'edit/relationEdit/tools/SameLineRelationTool.js',
    'edit/relationEdit/tools/GradeSeperateCrossTool.js',
    'edit/relationEdit/tools/RDCrossTool.js',
    'edit/relationEdit/tools/CmgBuildingTool.js',
    'edit/relationEdit/tools/SpeedLimitTool.js',
    'edit/relationEdit/tools/ScopeLineTool.js',
    'edit/relationEdit/tools/StartFinishPointTool.js',
    'edit/relationEdit/tools/PolygonTool.js',
    'edit/relationEdit/tools/TipMultiDigitizedTool.js',
    'edit/relationEdit/tools/TipGSCTool.js',
    'edit/complexEdit/ComplexEditor.js',
    'edit/complexEdit/results/UpDownDepartResult.js',
    'edit/complexEdit/results/SideRoadResult.js',
    'edit/complexEdit/results/SamePoiResult.js',
    'edit/complexEdit/results/PoiParentResult.js',
    'edit/complexEdit/results/LinkDirectResult.js',
    'edit/complexEdit/results/LinksAutoBreakResult.js',
    'edit/complexEdit/results/DrawSubTaskResult.js',
    'edit/complexEdit/results/MergeSubTaskResult.js',
    'edit/complexEdit/results/SelectQualityCircleResult.js',
    'edit/complexEdit/results/BatchTranslatePoiLocationEditResult.js',
    'edit/complexEdit/results/BatchConvergePoiLocationEditResult.js',
    'edit/complexEdit/results/BatchPoiGuideAutoEditResult.js',
    'edit/complexEdit/results/BatchPoiGuideManualEditResult.js',
    'edit/complexEdit/results/AdjustImageResult.js',
    'edit/complexEdit/results/CopyResult.js',
    'edit/complexEdit/results/DrawPolygonResult.js',
    'edit/complexEdit/results/BatchEditLimitResult.js',
    'edit/complexEdit/tools/ComplexTool.js',
    'edit/complexEdit/tools/UpDownDepartTool.js',
    'edit/complexEdit/tools/RectSelectTool.js',
    'edit/complexEdit/tools/SelectPoiParentTool.js',
    'edit/complexEdit/tools/SamePoiTool.js',
    'edit/complexEdit/tools/SideRoadTool.js',
    'edit/complexEdit/tools/AdminJoinFacesTool.js',
    'edit/complexEdit/results/AddPairElectronicEyeResult.js',
    'edit/complexEdit/tools/AddPairElectronicEyeTool.js',
    'edit/complexEdit/tools/ChangeLinkDirectTool.js',
    'edit/complexEdit/tools/LinksAutoBreakTool.js',
    'edit/complexEdit/tools/DrawSubTaskTool.js',
    'edit/complexEdit/tools/MergeSubTaskTool.js',
    'edit/complexEdit/tools/SelectQualityCircleTool.js',
    'edit/complexEdit/tools/BatchTranslatePoiLocationTool.js',
    'edit/complexEdit/tools/BatchConvergePoiLocationTool.js',
    'edit/complexEdit/tools/BatchPoiGuideAutoTool.js',
    'edit/complexEdit/tools/BatchPoiGuideManualTool.js',
    'edit/complexEdit/tools/CopyTool.js',
    'edit/complexEdit/tools/DrawPolygonTool.js',
    'edit/complexEdit/tools/BatchEditLimitTool.js',
    'edit/shapeEdit/tools/TipLinkUpDownDepartTool.js',
    'edit/complexEdit/tools/AdjustImageTool.js',
    'edit/topoEdit/TopoEditor.js',
    'edit/topoEdit/RdRestrictionTopoEditor.js',
    'edit/topoEdit/RdRestrictionTruckTopoEditor.js',
    'edit/topoEdit/RdCrossTopoEditor.js',
    'edit/topoEdit/CmgBuildingTopoEditor.js',
    'edit/topoEdit/RdMileagePileTopoEditor.js',
    'edit/topoEdit/RdElectronicEyeTopoEditor.js',
    'edit/topoEdit/RdTrafficSignalTopoEditor.js',
    'edit/topoEdit/AdAdminJoinFacesTopoEditor.js',
    'edit/topoEdit/RdSlopeTopoEditor.js',
    'edit/topoEdit/RdSpeedBumpTopoEditor.js',
    'edit/topoEdit/RdSpeedLimitTopoEditor.js',
    // 'edit/topoEdit/RdWaringInfoTopoEditor.js',
    'edit/topoEdit/RdLinkWarningTopoEditor.js',
    'edit/topoEdit/RdMultiDigitizedTopoEditor.js',
    'edit/topoEdit/RdSideRoadTopoEditor.js',
    'edit/topoEdit/AdFaceTopoEditor.js',
    'edit/topoEdit/LuFaceTopoEditor.js',
    'edit/topoEdit/CmgBuildFaceTopoEditor.js',
    'edit/topoEdit/LcFaceTopoEditor.js',
    'edit/topoEdit/ZoneFaceTopoEditor.js',
    'edit/topoEdit/RdSeTopoEditor.js',
    'edit/topoEdit/RdHighSpeedBranchTopoEditor.js',
    'edit/topoEdit/RdAspectBranchTopoEditor.js',
    'edit/topoEdit/RdICBranchTopoEditor.js',
    'edit/topoEdit/Rd3DBranchTopoEditor.js',
    'edit/topoEdit/RdComplexSchemaTopoEditor.js',
    'edit/topoEdit/RdRealImageTopoEditor.js',
    'edit/topoEdit/RdSignAsRealTopoEditor.js',
    'edit/topoEdit/RdSeriesBranchTopoEditor.js',
    'edit/topoEdit/RdSchematicBranchTopoEditor.js',
    'edit/topoEdit/RdSignBoardTopoEditor.js',
    'edit/topoEdit/RdGateTopoEditor.js',
    'edit/topoEdit/RdTollGateTopoEditor.js',
    'edit/topoEdit/RdHgWgLimitTopoEditor.js',
    'edit/topoEdit/RdLinkTopoEditor.js',
    'edit/topoEdit/LcLinkTopoEditor.js',
    'edit/topoEdit/LuLinkTopoEditor.js',
    'edit/topoEdit/CmgBuildLinkTopoEditor.js',
    'edit/topoEdit/ZoneLinkTopoEditor.js',
    'edit/topoEdit/LcNodeTopoEditor.js',
    'edit/topoEdit/LuNodeTopoEditor.js',
    'edit/topoEdit/CmgBuildNodeTopoEditor.js',
    'edit/topoEdit/ZoneNodeTopoEditor.js',
    'edit/topoEdit/RwLinkTopoEditor.js',
    'edit/topoEdit/RwNodeTopoEditor.js',
    'edit/topoEdit/AdLinkTopoEditor.js',
    'edit/topoEdit/AdNodeTopoEditor.js',
    'edit/topoEdit/TipBorderTopoEditor.js',
    'edit/topoEdit/IxPoiTopoEditor.js',
    'edit/topoEdit/IxPoiBatchTopoEditor.js',
    'edit/topoEdit/AdAdminTopoEditor.js',
    'edit/topoEdit/RdVariableSpeedTopoEditor.js',
    'edit/topoEdit/RdDirectRouteTopoEditor.js',
    'edit/topoEdit/RdLaneConnexityTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipTollGateTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRailWayTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipLinksTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipLinkUpDownDepartTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRoadTypeTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRoadDirectionTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipDriveWayMountTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRoadNameTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipDeleteTagTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRoundAboutTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipConnectTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipLaneConnexityTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipPedestrianStreetTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipFCTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRegionRoadTopoEditor.js',
    'edit/topoEdit/selectTipsAndPOITopEditor/SelectTipsAndPOITopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRoadSATopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRoadPATopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRampTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipBridgeTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipTunnelTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipMaintenanceTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipBusLaneTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipMultiDigitizedTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipRestrictionTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipTrafficSignalTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipSketchTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipGPSDotTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipHighWayConnectTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipNomalRestrictionTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipGSCTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/TipDeletePropertyInProgressEditor.js',
    'edit/topoEdit/tipTopoEditor/TipBuildTimeChangeTopoEditor.js',
    'edit/topoEdit/tipTopoEditor/AdjustImageTopoEditor.js',
    'edit/topoEdit/limit/CopyToLineTopoEditor.js',
    'edit/topoEdit/limit/CopyToPolygonTopoEditor.js',
    'edit/topoEdit/limit/DrawPolygonTopoEditor.js',
    'edit/topoEdit/limit/GeometryLineTopoEditor.js',
    'edit/topoEdit/limit/GeometryPolygonTopoEditor.js',
    'edit/topoEdit/RdNodeTopoEditor.js',
    'edit/topoEdit/TopoEditFactory.js',
    'edit/topoEdit/RdVoiceGuideTopoEditor.js',
    'edit/topoEdit/RdSameNodeTopoEditor.js',
    'edit/topoEdit/RdSameLineTopoEditor.js',
    'edit/topoEdit/RdInterTopoEditor.js',
    'edit/topoEdit/RdRoadTopoEditor.js',
    'edit/topoEdit/RdObjectTopoEditor.js',
    'edit/topoEdit/RdGscTopoEditor.js',
    'edit/topoEdit/RdLinkSpeedLimitTopoEditor.js',
    'edit/topoEdit/LinksAutoBreakTopoEditor.js',
    'edit/topoEdit/drawCircle/DrawSubTaskTopoEditor.js',
    'editControl/EditControl.js',
    'editControl/selectControl/SelectControl.js',
    'editControl/selectControl/BatchSelectControl.js',
    'editControl/createControl/CreateSimpleFeatureControl.js',
    'editControl/createControl/CreateTipsControl.js',
    'editControl/createControl/CreateRelationFeatureControl.js',
    'editControl/complexControl/CreateLineBufferControl.js',
    'editControl/complexControl/CreateAdminJoinFacesControl.js',
    'editControl/complexControl/AddPairElectronicEyeControl.js',
    'editControl/complexControl/StartupToolControl.js',
    'editControl/complexControl/TipLinkUpDownDepartControl.js',
    'editControl/complexControl/AdjustImageControl.js',
    'editControl/complexControl/CopyLineControl.js',
    'editControl/complexControl/DeleteLimitControl.js',
    'editControl/complexControl/BatchEditLimitControl.js',
    'editControl/modifyControl/ModifySimpleFeatureControl.js',
    'editControl/modifyControl/ModifyRelationFeatureControl.js',
    'editControl/modifyControl/BatchModifyTipsControl.js',
    'editControl/modifyControl/BatchModifyTmcControl.js',
    'editControl/modifyControl/ModifySimpleTipsControl.js',
    'editControl/modifyControl/ModifyRelationTipsControl.js',
    'editControl/modifyControl/ModifyViaControl.js',
    'editControl/complexControl/CreateLineDimensionsControl.js',
    'editControl/complexControl/DeleteClosedVertexControl.js',
    'editControl/complexControl/ModifyPoiParentControl.js',
    'editControl/complexControl/ModifySamePoiControl.js',
    'editControl/createControl/CreateSimpleTipsControl.js',
    'editControl/complexControl/ChangeLinkDirectControl.js',
    'editControl/complexControl/BreakTipLinksControl.js',
    'editControl/complexControl/SelectTipsAndPOIControl.js',
    'editControl/complexControl/BreakLinksControl.js',
    'editControl/complexControl/DrawCircleControl.js',
    'editControl/complexControl/MergeCircleControl.js',
    'editControl/complexControl/DataPlanControl.js',
    'editControl/complexControl/DrawQualityCircleControl.js',
    'editControl/complexControl/UpdateQualityCircleControl.js',
    'editControl/complexControl/BatchTranslatePoiLocationControl.js',
    'editControl/complexControl/BatchConvergePoiLocationControl.js',
    'editControl/complexControl/BatchPoiGuideAutoControl.js',
    'editControl/complexControl/BatchPoiGuideManualControl.js',
    'editControl/createControl/CreateRelationTipsControl.js',
    'editControl/EditControlFactory.js',
    'Util.js'
];
