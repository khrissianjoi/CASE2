if (self.CavalryLogger) { CavalryLogger.start_js(["sDews"]); }

__d("ProfileCometLegacyAlbumViewRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2782067745163008",metadata:{},name:"ProfileCometLegacyAlbumViewRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometLegacyAlbumViewRouteRoot.entrypoint",["JSResourceForInteraction","ProfileCometLegacyAlbumViewRootQuery$Parameters","WebPixelRatio","buildCometProfileRoute.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometProfileRoute.entrypoint")(b("JSResourceForInteraction")("ProfileCometLegacyAlbumViewRoot.react").__setRef("ProfileCometLegacyAlbumViewRouteRoot.entrypoint"),function(a){var c=a.routeProps.viewerID;a=a.routeParams.set;return{queries:{rootQueryReference:{environmentProviderOptions:{actorID:c},parameters:b("ProfileCometLegacyAlbumViewRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"ProfileCometLegacyAlbumViewRoute",feedLocation:"ALBUM_FEED",feedbackSource:67,mediaSetToken:a,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"album_feed",scale:b("WebPixelRatio").get()}}}}});e.exports=a}),null);