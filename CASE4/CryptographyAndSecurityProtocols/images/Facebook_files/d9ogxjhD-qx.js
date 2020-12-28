if (self.CavalryLogger) { CavalryLogger.start_js(["Bzg9J"]); }

__d("CometDefaultGroupInlineComposerQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"groupID"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"id",variableName:"groupID"}],c={alias:null,args:null,kind:"ScalarField",name:"has_viewer_posted_in_group",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"is_newly_created",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"can_viewer_see_public_group_hint_text_in_composer",storageKey:null},f={alias:null,args:[{kind:"Literal",name:"qe_universe",value:"groups_inline_composer_directional_comet"}],concreteType:"QECheck",kind:"LinkedField",name:"qe_check",plural:!1,selections:[{alias:"should_show_wyfp_text",args:[{kind:"Literal",name:"bool_default",value:!1},{kind:"Literal",name:"param_name",value:"should_show_wyfp_text"}],kind:"ScalarField",name:"bool",storageKey:'bool(bool_default:false,param_name:"should_show_wyfp_text")'}],storageKey:'qe_check(qe_universe:"groups_inline_composer_directional_comet")'},g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[{alias:null,args:null,concreteType:"AvailableActorsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,h],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometDefaultGroupInlineComposerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometMemberProfileLinkContainer_profile"},{args:null,kind:"FragmentSpread",name:"CometFeedInlineComposerProfilePic_profile"},{args:null,kind:"FragmentSpread",name:"CometFeedInlineComposerWOYM_profile"}],storageKey:null}],storageKey:null},{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[c,d,e,f,{args:null,kind:"FragmentSpread",name:"GroupsCometFeedInlineComposerSproutsList_group"},{args:null,kind:"FragmentSpread",name:"useGroupComposerSaveDraftDialog_canDraftPost"},{args:null,kind:"FragmentSpread",name:"useGroupsCometAnonymousActorID_group"},{args:null,kind:"FragmentSpread",name:"useGroupsCometGroupVoiceActorID_group"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometDefaultGroupInlineComposerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[g,h,{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"group_id",variableName:"groupID"}],concreteType:"GroupMembership",kind:"LinkedField",name:"group_membership",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_member_feed",storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[h,{alias:null,args:null,concreteType:"GroupLeadersEngagementLoggingSettings",kind:"LinkedField",name:"leaders_engagement_logging_settings",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_surface_mappings",plural:!0,selections:[g,{alias:null,args:null,kind:"ScalarField",name:"surface",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"trace_policy",storageKey:null}],type:"GroupLeadersEngagementLoggingExactCometSurfaceMapping",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"prefixes",storageKey:null}],type:"GroupLeadersEngagementLoggingPrefixCometSurfaceMapping",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null},h],storageKey:null}],type:"GroupMember",abstractKey:"__isGroupMember"}],type:"Profile",abstractKey:"__isProfile"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[c,d,e,f,{alias:null,args:null,concreteType:"GroupCometComposer",kind:"LinkedField",name:"group_comet_composer",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["GroupsCometComposerRoomToLiveSprout","GroupsCometComposerVideoMeetupSprout","GroupsCometComposerAnonymousPostSprout","GroupsCometComposerGroupVoiceSprout","CoworkerGroupsCometComposerShiftCoverSprout","GeminiGroupsComposerShiftCoverSprout","CometComposerUploadMediaSprout","GroupCometComposerWithTaggingSprout","CometComposerMinutiaeSprout","CometComposerPollSprout","GroupsCometComposerWorkAchievementsSprout","GroupCometComposerLiveProducerSprout"]}],concreteType:null,kind:"LinkedField",name:"inline_sprouts",plural:!0,selections:[g,{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupsCometInlineComposerRoomToLiveSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerRoomToLiveSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupsCometInlineComposerVideoMeetupSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerVideoMeetupSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerAnonymousPostSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerAnonymousPostSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerGroupVoiceSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerGroupVoiceSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerShiftCoverSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CoworkerGroupsCometComposerShiftCoverSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerGeminiShiftCoverSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GeminiGroupsComposerShiftCoverSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerMediaSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerUploadMediaSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupsCometInlineComposerTaggingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupCometComposerWithTaggingSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerFeelingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerMinutiaeSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerPollSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerPollSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupsGeminiInlineComposerAchievementsSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerWorkAchievementsSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupLiveProducerCometInlineComposerLiveSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupCometComposerLiveProducerSprout",abstractKey:null}],storageKey:'inline_sprouts(supported:["GroupsCometComposerRoomToLiveSprout","GroupsCometComposerVideoMeetupSprout","GroupsCometComposerAnonymousPostSprout","GroupsCometComposerGroupVoiceSprout","CoworkerGroupsCometComposerShiftCoverSprout","GeminiGroupsComposerShiftCoverSprout","CometComposerUploadMediaSprout","GroupCometComposerWithTaggingSprout","CometComposerMinutiaeSprout","CometComposerPollSprout","GroupsCometComposerWorkAchievementsSprout","GroupCometComposerLiveProducerSprout"])'}],storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"can_viewer_draft_post",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_post_status",storageKey:null},{alias:null,args:[{kind:"Literal",name:"type",value:"GROUPS_ANONYMOUS"}],concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:i,storageKey:'available_actors(type:"GROUPS_ANONYMOUS")'},{alias:"available_actors_group_voice",args:[{kind:"Literal",name:"type",value:"GROUP_VOICE"}],concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:i,storageKey:'available_actors(type:"GROUP_VOICE")'}],storageKey:null}]},params:{id:"3726849904027156",metadata:{},name:"CometDefaultGroupInlineComposerQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("useGroupsCometAnonymousActorID_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometAnonymousActorID_group",selections:[{alias:null,args:[{kind:"Literal",name:"type",value:"GROUPS_ANONYMOUS"}],concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:[{alias:null,args:null,concreteType:"AvailableActorsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'available_actors(type:"GROUPS_ANONYMOUS")'}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useGroupsCometGroupVoiceActorID_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometGroupVoiceActorID_group",selections:[{alias:"available_actors_group_voice",args:[{kind:"Literal",name:"type",value:"GROUP_VOICE"}],concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:[{alias:null,args:null,concreteType:"AvailableActorsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'available_actors(type:"GROUP_VOICE")'}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometFeedInlineComposerSproutsList_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometFeedInlineComposerSproutsList_group",selections:[{alias:null,args:null,concreteType:"GroupCometComposer",kind:"LinkedField",name:"group_comet_composer",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["GroupsCometComposerRoomToLiveSprout","GroupsCometComposerVideoMeetupSprout","GroupsCometComposerAnonymousPostSprout","GroupsCometComposerGroupVoiceSprout","CoworkerGroupsCometComposerShiftCoverSprout","GeminiGroupsComposerShiftCoverSprout","CometComposerUploadMediaSprout","GroupCometComposerWithTaggingSprout","CometComposerMinutiaeSprout","CometComposerPollSprout","GroupsCometComposerWorkAchievementsSprout","GroupCometComposerLiveProducerSprout"]}],concreteType:null,kind:"LinkedField",name:"inline_sprouts",plural:!0,selections:[{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupsCometInlineComposerRoomToLiveSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerRoomToLiveSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupsCometInlineComposerVideoMeetupSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerVideoMeetupSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerAnonymousPostSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerAnonymousPostSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerGroupVoiceSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerGroupVoiceSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerShiftCoverSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CoworkerGroupsCometComposerShiftCoverSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerGeminiShiftCoverSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GeminiGroupsComposerShiftCoverSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerMediaSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerUploadMediaSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupsCometInlineComposerTaggingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupCometComposerWithTaggingSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerFeelingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerMinutiaeSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"FeedInlineComposerPollSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerPollSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupsGeminiInlineComposerAchievementsSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupsCometComposerWorkAchievementsSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometFeedInlineComposerSproutsList_group",fragmentName:"GroupLiveProducerCometInlineComposerLiveSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"GroupCometComposerLiveProducerSprout",abstractKey:null}],storageKey:'inline_sprouts(supported:["GroupsCometComposerRoomToLiveSprout","GroupsCometComposerVideoMeetupSprout","GroupsCometComposerAnonymousPostSprout","GroupsCometComposerGroupVoiceSprout","CoworkerGroupsCometComposerShiftCoverSprout","GeminiGroupsComposerShiftCoverSprout","CometComposerUploadMediaSprout","GroupCometComposerWithTaggingSprout","CometComposerMinutiaeSprout","CometComposerPollSprout","GroupsCometComposerWorkAchievementsSprout","GroupCometComposerLiveProducerSprout"])'}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometFeedInlineComposerHintText.react",["fbt","CometRefineRef","React","TextInputButton.react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(a){var c=a.onPress;a=a.triggerRef;return h.jsx(b("TextInputButton.react"),{label:g._("Create a public post..."),onPress:c,ref:b("CometRefineRef")(a)})}}),null);
__d("CometInlineComposerSproutListMatcher.react",["CometRelay","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=a.sprouts;a=babelHelpers.objectWithoutPropertiesLoose(a,["sprouts"]);return g.jsx(g.Fragment,{children:h(b,a)})}function h(a,c){a==null&&b("recoverableViolation")("Server failed to provide a valid inline sprouts object for the composer.","comet_composer");return((a=a)!=null?a:[]).map(function(a,d){return g.jsx(b("CometRelay").MatchContainer,{match:a,props:c},d)})}a.useMatcher=h}),null);
__d("GroupsCometFeedInlineComposerSproutsList.react",["CometInlineComposerSproutListMatcher.react","CometRelay","React","stylex","GroupsCometFeedInlineComposerSproutsList_group.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("GroupsCometFeedInlineComposerSproutsList_group.graphql"),a.group$key);return h.jsx("div",{className:"k4urcfbm h4z51re5 rv4hoivh osnr6wyh kwzhilbh lhclo0ds j83agx80 rq0escxv",children:h.jsx(b("CometInlineComposerSproutListMatcher.react"),{showComposerDialog:a.showFeedComposerDialog,sprouts:c==null?void 0:(c=c.group_comet_composer)==null?void 0:c.inline_sprouts,triggerRef:a.triggerRef})})}}),null);
__d("GroupsCometFeedInlineComposerWYFP.react",["fbt","CometRefineRef","React","TextInputButton.react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(a){var c=a.onPress;a=a.triggerRef;return h.jsx(b("TextInputButton.react"),{label:g._("Write your first post..."),onPress:c,ref:b("CometRefineRef")(a),testid:void 0})}}),null);
__d("composerPollReducer",["cometUniqueID","useComposerViewStateDispatcher"],(function(a,b,c,d,e,f){"use strict";f.composerPollReducer=a;f.createPollItems=g;f.useComposerPollItemsHooks=c;function a(a,b){var c={collaborationMode:"PUBLIC",items:g(3),selectionMode:"MULTIPLE"},d=a.poll==null?c:a.poll;switch(b.type){case"init_poll":return babelHelpers["extends"]({},a,{poll:c});case"add_empty_poll_item":return babelHelpers["extends"]({},a,{poll:babelHelpers["extends"]({},d,{items:d.items.concat(g(1))})});case"set_poll_selection_mode":return babelHelpers["extends"]({},a,{poll:babelHelpers["extends"]({},d,{selectionMode:b.pollSelectionMode})});case"set_poll_collaboration_mode":return babelHelpers["extends"]({},a,{poll:babelHelpers["extends"]({},d,{collaborationMode:b.pollCollaborationMode})});case"update_poll_item":return babelHelpers["extends"]({},a,{poll:babelHelpers["extends"]({},d,{items:d.items.map(function(a){return a.uid===b.pollItem.uid?b.pollItem:a})})});case"remove_poll_item":return babelHelpers["extends"]({},a,{poll:babelHelpers["extends"]({},d,{items:d.items.filter(function(a){return a.uid!==b.pollItem.uid})})});case"clear_poll":return babelHelpers["extends"]({},a,{poll:void 0});default:return a}}function g(a){var c=[];for(var d=0;d<a;d++)c.push({text:"",uid:b("cometUniqueID")()});return c}function c(){var a=b("useComposerViewStateDispatcher")();return{addEmptyPollItem:function(){a({type:"add_empty_poll_item"})},clearPoll:function(){a({type:"clear_poll"})},initPoll:function(){a({type:"init_poll"})},removePollItem:function(b){a({pollItem:b,type:"remove_poll_item"})},setCollaborationMode:function(b){a({pollCollaborationMode:b,type:"set_poll_collaboration_mode"})},setSelectionMode:function(b){a({pollSelectionMode:b,type:"set_poll_selection_mode"})},updatePollItemText:function(b,c){a({pollItem:babelHelpers["extends"]({},b,{text:c}),type:"update_poll_item"})}}}}),null);
__d("useGroupsCometAnonymousActorID",["CometRelay","orEmptyArray","useGroupsCometAnonymousActorID_group.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("useGroupsCometAnonymousActorID_group.graphql"),a);a=b("orEmptyArray")(a==null?void 0:(a=a.available_actors)==null?void 0:a.edges);return(a=a[0])==null?void 0:(a=a.node)==null?void 0:a.id}}),null);
__d("useGroupsCometGroupVoiceActorID",["CometRelay","orEmptyArray","useGroupsCometGroupVoiceActorID_group.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("useGroupsCometGroupVoiceActorID_group.graphql"),a);a=b("orEmptyArray")(a==null?void 0:(a=a.available_actors_group_voice)==null?void 0:a.edges);return(a=a[0])==null?void 0:(a=a.node)==null?void 0:a.id}}),null);
__d("CometDefaultGroupInlineComposer.react",["fbt","Actor","CometCard.react","CometComposerSproutListMatcher.react","CometFeedInlineComposerProfilePic.react","CometFeedInlineComposerWOYM.react","CometRelay","CometRouteParams","GroupsCometFeedInlineComposerHintText.react","GroupsCometFeedInlineComposerSproutsList.react","GroupsCometFeedInlineComposerWYFP.react","GroupsCometMemberProfileLinkContainer.react","QE2Logger","React","composerPollReducer","logGroupsCometFunnelEvent","requireCond","stylex","unrecoverableViolation","useCometInteractionTracing","useGroupCometComposerCreateDialog","useGroupsCometAnonymousActorID","useGroupsCometGroupVoiceActorID","useResumableComposerViewState","cr:1587767","cr:1161081","CometDefaultGroupInlineComposerQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k=b("cr:1587767")!=null?b("cr:1587767"):function(a,b){},l={body:{alignItems:"bp9cbjyn",display:"j83agx80",paddingBottom:"ihqw7lf3",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",paddingTop:"pybr56ya"},profilePic:{marginEnd:"oi9244e8"},root:{marginBottom:"sjgh65i0"}};function a(a){var c=a.props,d=c.groupID,e=c.overrideViewState;c=a.queries;var f=j.useRef(!1);a=b("Actor").useActor();a=a[0];var n=b("useResumableComposerViewState")(),o=n.clearResumableViewState,p=n.getResumableViewState,q=n.saveResumableViewState;n=b("useResumableComposerViewState")();var r=n.clearResumableViewState,s=n.getResumableViewState,t=n.saveResumableViewState;n=b("useResumableComposerViewState")();var u=n.clearResumableViewState,v=n.getResumableViewState,w=n.saveResumableViewState;k(a,d);n=b("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometDefaultGroupInlineComposerQuery.graphql"),c.queryReference);b("logGroupsCometFunnelEvent").useLogGroupsCometFunnelImpressionEvent(null,"GroupsCometFeedWebFunnelDefinition","[impression][mall][default composer entrypoint]",d);c=n==null?void 0:(c=n.viewer)==null?void 0:c.actor;var x=j.useCallback(function(a){a.isGroupAnonymousPost===!0?t(a):a.isGroupVoicePost===!0?w(a):q(a)},[q,t,w]),y=j.useCallback(function(a){a.isGroupAnonymousPost===!0?r():a.isGroupVoicePost===!0?u():o()},[o,r,u]),z=b("useGroupCometComposerCreateDialog")({groupID:d,onBeforeClose:x,onSave:y}),A=z[0],B=z[1],C=b("useCometInteractionTracing")(30605340,"responsive","INTERACTION"),D=b("useGroupsCometAnonymousActorID")(n.group),E=b("useGroupsCometGroupVoiceActorID")(n.group);k((z=(z=D)!=null?z:E)!=null?z:a,d);z=b("useGroupCometComposerCreateDialog")({actorID_DO_NOT_USE_UNLESS_YOU_KNOW_EXACTLY_WHAT_YOU_ARE_DOING:D!=null?D:void 0,groupID:d,onBeforeClose:x,onSave:y});var F=z[0],G=z[1];a=b("useGroupCometComposerCreateDialog")({actorID_DO_NOT_USE_UNLESS_YOU_KNOW_EXACTLY_WHAT_YOU_ARE_DOING:E!=null?E:void 0,groupID:d,onBeforeClose:x,onSave:y});var H=a[0],I=a[1],J=j.useRef(B),K=j.useCallback(function(a){a.beginningViewState.isGroupAnonymousPost===!0?(J.current=G,F(a)):a.beginningViewState.isGroupVoicePost===!0?(J.current=I,H(a)):(J.current=B,A(a))},[F,H,A,G,I,B]),L=j.useCallback(function(a){var c=a==null?void 0:a.additionalMediaAttachmentItems,d=!1,f=!1;if((a==null?void 0:a.withAnonymousPostOnLoad)===!0){if(D==null)throw b("unrecoverableViolation")("Composer entry point is for anonymous post, but no anonymous actor exists","groups_comet");d=!0}else if((a==null?void 0:a.withGroupVoiceOnLoad)===!0){if(E==null)throw b("unrecoverableViolation")("Composer entry point is for group voice, but no group voice exists","groups_comet");f=!0}c=d?s(c):f?v(c):p(c);if(Boolean(a==null?void 0:a.withPollOnLoad)){c=babelHelpers["extends"]({},c,{attachmentArea:{activeAttachmentType:"POLL"},poll:(a=c.poll)!=null?a:{collaborationMode:"PUBLIC",items:b("composerPollReducer").createPollItems(3),selectionMode:"MULTIPLE"}})}a=babelHelpers["extends"]({},c,e,{isGroupAnonymousPost:d,isGroupVoicePost:f});return a},[D,E,p,s,v,e]),M=b("CometComposerSproutListMatcher.react").useGetSproutToPushTo(),N=j.useCallback(function(a){C(function(b){var c;b.onComplete(function(){f.current?b.addMetadata("revisit",1):f.current=!0});K({beginningViewState:L(a),groupID:d,pushedPageOnLoad:(c=a==null?void 0:a.pushedPageOnLoad)!=null?c:M})})},[L,d,K,C,M]);m(N);b("cr:1161081")(n.group,p);z=!1;if(J.current!=null&&((x=n.group)==null?void 0:x.is_newly_created)===!0&&((y=n.group)==null?void 0:y.has_viewer_posted_in_group)===!1){z=Boolean((a=n.group)==null?void 0:(x=a.qe_check)==null?void 0:x.should_show_wyfp_text);b("QE2Logger").logExposureForGroup("groups_inline_composer_directional_comet",d)}x=(a=(y=n.group)==null?void 0:y.can_viewer_see_public_group_hint_text_in_composer)!=null?a:!1;return j.jsx("div",{className:(i||(i=b("stylex")))(l.root),"data-testid":void 0,children:j.jsxs(b("CometCard.react"),{background:"white",dropShadow:1,children:[j.jsxs("div",{className:i(l.body),children:[c&&j.jsx(b("GroupsCometMemberProfileLinkContainer.react"),{"aria-label":g._("Profile"),groupID:d,profile:c,xstyle:l.profilePic,children:j.jsx(b("CometFeedInlineComposerProfilePic.react"),{profile$key:c})}),J.current!=null&&(x?j.jsx(b("GroupsCometFeedInlineComposerHintText.react"),{onPress:function(a){return N()},triggerRef:J.current}):z?j.jsx(b("GroupsCometFeedInlineComposerWYFP.react"),{onPress:function(a){return N()},triggerRef:J.current}):j.jsx(b("CometFeedInlineComposerWOYM.react"),{onPress:function(a){return N()},profile$key:c,triggerRef:J.current}))]}),J.current!=null&&j.jsx(b("GroupsCometFeedInlineComposerSproutsList.react"),{group$key:n.group,showFeedComposerDialog:N,triggerRef:J.current})]})})}function m(a){var b=n();j.useEffect(function(){b&&a()},[b])}function n(){var a=b("CometRouteParams").useRouteParams();a=a.should_open_composer;return a===!0||a==="true"||a===1||a==="1"?!0:!1}}),null);