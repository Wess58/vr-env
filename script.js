(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_3CF53A03_21A1_2AFD_41A3_4A0A3A91F4BB], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist,this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist,this.mainPlayList]); this.playList_67330909_69CF_F8E2_41B1_1F0E6082F767.set('selectedIndex', 0)",
 "scrollBarMargin": 2,
 "data": {
  "name": "Player450"
 },
 "minHeight": 20,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_0CA09538_1E53_CFBF_41B5_165D47622D12",
  "this.Container_0CA8165C_1E5D_CDF7_41B5_38F7F5064CCF",
  "this.IconButton_372F8513_21EF_391D_4182_0F02D3B6FFF3",
  "this.IconButton_34A3ABC0_21E3_697B_41B8_29CA818DEC9C",
  "this.IconButton_34FD4933_21E1_E91C_41B1_F2009665B359",
  "this.IconButton_3CF53A03_21A1_2AFD_41A3_4A0A3A91F4BB",
  "this.Container_3277DDDD_3FF3_268D_4199_93B05A9BA19F",
  "this.Container_31B576EC_3FF1_22B3_41C8_02854D8AA49F",
  "this.Container_318F84FA_3FCF_2697_41BF_9B2FF5F364D5",
  "this.Container_319E57B1_3FD1_2295_41C6_5DC2B87C7C9F",
  "this.Container_3152B613_3FD0_E595_419A_FDD3CA12F9F9",
  "this.Container_4F2E4EE5_426C_F76E_41CB_17BB9D5E8FDB",
  "this.Container_54B4B676_4031_259F_41BD_70DCE7409EBC",
  "this.Container_52F75147_4263_4AAA_41BF_0CF83D96A2C8",
  "this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66",
  "this.Container_51063121_4223_4AE6_41B5_423F16E9E766",
  "this.Container_54349891_4224_FBA6_41D0_211EB714D23F"
 ],
 "scrollBarWidth": 10,
 "width": "100%",
 "overflow": "visible",
 "borderRadius": 0,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "propagateClick": false,
 "definitions": [{
 "id": "effect_5189961D_4265_76DE_41CF_93D68012EDEB",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "id": "effect_50322CCA_426C_FBBA_41BA_01143D758113",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_camera"
},
{
 "initialPosition": {
  "yaw": 103.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_654409F4_69CF_FB21_41A8_E494E78D1D75"
},
{
 "height": 2479,
 "label": "Bedroom",
 "class": "Photo",
 "width": 3508,
 "id": "album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_0",
 "image": {
  "levels": [
   {
    "url": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_0_t.png",
 "duration": 5000
},
{
 "id": "effect_65105A23_69CF_F927_41D7_C6AF267C8C15",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeInEffect"
},
{
 "initialPosition": {
  "yaw": -118.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65A439D4_69CF_FB62_41D9_4AA33498739E"
},
{
 "height": 2479,
 "label": "Kitchen",
 "class": "Photo",
 "width": 3508,
 "id": "album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_2",
 "image": {
  "levels": [
   {
    "url": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_2_t.png",
 "duration": 5000
},
{
 "id": "effect_5189361D_4265_76DE_41C4_A6E96857A275",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_67335909_69CF_F8E2_41B1_F69A04440094",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 98.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65E6B996_69CF_FBE1_41D2_075DBDA8132D"
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 1439.71,
   "angle": -91.43,
   "y": 1292.59,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Common Bathroom",
 "id": "panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465",
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.67,
   "yaw": -91.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_ECA7F139_FCC3_7531_41DE_32577C68E55C"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_t.jpg"
},
{
 "initialPosition": {
  "yaw": 146.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_66F17938_69CF_FB21_41D9_344A1B0CA251"
},
{
 "initialPosition": {
  "yaw": 80.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6551FA03_69CF_F8E6_41CF_A692B4ACA36D"
},
{
 "initialPosition": {
  "yaw": 89.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65ED9996_69CF_FBE1_41CB_4B0C9CED9F83"
},
{
 "initialPosition": {
  "yaw": -126.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65D7D986_69CF_FBEE_41CD_BCCCBB9D2584"
},
{
 "initialPosition": {
  "yaw": 100.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_66E0C929_69CF_FB23_41B8_5887D6FF0F45"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_camera"
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 2080.52,
   "angle": 204.53,
   "y": 1479.54,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Lounge",
 "id": "panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83",
 "adjacentPanoramas": [
  {
   "backwardYaw": -81.05,
   "yaw": 61.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE"
  },
  {
   "backwardYaw": -46.6,
   "yaw": 63.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248"
  },
  {
   "panorama": "this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -105.84,
   "yaw": 143.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_F3DE9618_FCC1_5EFF_41DC_718D57F8C146",
  "this.overlay_ED987DE1_FCDF_4D51_41D2_D8C7251A92A2",
  "this.overlay_F3240AEE_FCC3_5750_41D2_D6369C46003F",
  "this.overlay_EC577944_FCC1_5550_41D8_F5509D2010A8"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_t.jpg"
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 1117.24,
   "angle": 187.3,
   "y": 1657.93,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Master Bedroom 02",
 "id": "panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736",
 "adjacentPanoramas": [
  {
   "backwardYaw": 160.58,
   "yaw": -90.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_F31A402F_FCC3_32D0_41E5_569DF1A890C9"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_camera"
},
{
 "initialPosition": {
  "yaw": -55.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_659129C5_69CF_FB63_41D9_541EFB534E92"
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 1445.56,
   "angle": 120.81,
   "y": 1475.26,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Circulation",
 "id": "panorama_D883E764_D2C0_7721_41D1_47B3283B1800",
 "adjacentPanoramas": [
  {
   "backwardYaw": -91.39,
   "yaw": -149.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465"
  },
  {
   "backwardYaw": 121.39,
   "yaw": -33.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248"
  },
  {
   "backwardYaw": -76.57,
   "yaw": 139.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE"
  },
  {
   "backwardYaw": -99.18,
   "yaw": 53.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0"
  },
  {
   "panorama": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_EC686C4D_FCDF_3350_41EF_010168FE9037",
  "this.overlay_ECD4E8BC_FCC1_7337_41E5_60434A4C2072",
  "this.overlay_ED6CBD16_FCC1_32F3_41EB_9DCDA997E7E3",
  "this.overlay_EF6617BF_FCC1_FD31_41BE_DAD886BEC3AF",
  "this.overlay_EC4F01EE_FCC1_3553_41DD_31F49AE31134"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_camera"
},
{
 "label": "Photo Album Bedroom",
 "class": "PhotoAlbum",
 "id": "album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F",
 "thumbnailUrl": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_t.png",
 "playList": "this.album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_AlbumPlayList"
},
{
 "id": "effect_5189A61D_4265_76DE_41C7_5F3280F81890",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "items": [
  "this.PanoramaPlayListItem_67340909_69CF_F8E2_41B5_EE8DE2E3F614",
  "this.PanoramaPlayListItem_66CB9909_69CF_F8E2_41CE_F3B9C64EE18B",
  "this.PanoramaPlayListItem_66CAF909_69CF_F8E2_41D1_DBCB29F7F03C",
  "this.PanoramaPlayListItem_66CA6909_69CF_F8E2_41C7_0F78050B0B42",
  "this.PanoramaPlayListItem_66CDC909_69CF_F8E2_41B1_855590384BD4",
  "this.PanoramaPlayListItem_66CD0909_69CF_F8E2_41D6_B41B9ACA3AE2",
  "this.PanoramaPlayListItem_66CA2909_69CF_F8E2_41D4_7359AD8A8AB7",
  "this.PanoramaPlayListItem_66CD7909_69CF_F8E2_41C7_FAE322ABD887",
  "this.PanoramaPlayListItem_66CCE909_69CF_F8E2_41D0_78C64226C0BA"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -19.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6577FA23_69CF_F927_41BB_0F4BA1BF6D0B"
},
{
 "initialPosition": {
  "yaw": -81.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65D08977_69CF_FB2F_41CE_5ECB9F2C931B"
},
{
 "items": [
  {
   "media": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_camera"
  },
  {
   "media": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_camera"
  },
  {
   "media": "this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_camera"
  },
  {
   "media": "this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_camera"
  },
  {
   "media": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800_camera"
  },
  {
   "media": "this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_camera"
  },
  {
   "media": "this.panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_camera"
  },
  {
   "media": "this.panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_camera"
  },
  {
   "media": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_camera"
  }
 ],
 "id": "ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_camera"
},
{
 "initialPosition": {
  "yaw": 74.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_658DE9B5_69CF_FB23_41DA_450D3A95195B"
},
{
 "id": "effect_5188461C_4265_76DE_41B1_FC0C80DC545B",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_camera"
},
{
 "items": [
  {
   "media": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_camera"
  },
  {
   "media": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_camera"
  },
  {
   "media": "this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_camera"
  },
  {
   "media": "this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_camera"
  },
  {
   "media": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800_camera"
  },
  {
   "media": "this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_camera"
  },
  {
   "media": "this.panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_camera"
  },
  {
   "media": "this.panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_camera"
  },
  {
   "media": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_camera"
  }
 ],
 "id": "ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist",
 "class": "PlayList"
},
{
 "fieldOfViewOverlayOutsideColor": "#FFFFFF",
 "label": "Unity-East-E-brochure-5",
 "id": "map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
 "minimumZoomFactor": 0.5,
 "width": 3366,
 "image": {
  "levels": [
   {
    "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2414
   },
   {
    "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_lq.png",
    "width": 294,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 222
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayOutsideOpacity": 0,
 "overlays": [
  "this.overlay_13E23DF6_1E2D_5EB0_419C_66ACE669C709",
  "this.overlay_11E70747_1E33_4BD1_41A7_D4D462215259",
  "this.overlay_112D3ABD_1E34_BAB0_41B2_6E8F0EDD8BB8",
  "this.overlay_115E57AD_1E35_CAAF_41B3_7C097E41C655",
  "this.overlay_11BCB0E5_1E34_C6D0_41B6_50F7C9E024A2",
  "this.overlay_1111E55E_1E34_CFF0_41AC_DC381710F260",
  "this.overlay_1106ABAC_1E3C_BB57_41AE_7A8C85EB2C29",
  "this.overlay_0E130A4C_1E3D_C5D7_41BD_C6E3BE653235",
  "this.overlay_0E0CB235_1E3D_45B1_41B4_EDBBBD274CA1"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.41,
 "maximumZoomFactor": 1.5,
 "fieldOfViewOverlayRadiusScale": 0.27,
 "initialZoomFactor": 1.5,
 "class": "Map",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "scaleMode": "fit_to_width",
 "thumbnailUrl": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_t.png",
 "height": 2540
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 1468.21,
   "angle": 102.45,
   "y": 1666.45,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Master Bedroom 01",
 "id": "panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0",
 "adjacentPanoramas": [
  {
   "backwardYaw": 53.18,
   "yaw": -99.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800"
  },
  {
   "backwardYaw": -90.64,
   "yaw": 160.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_EC1EDF0F_FCC1_4ED1_41E9_C51E3EAE628E",
  "this.overlay_EE436884_FCC2_D3D7_41EA_53000939FD89"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_t.jpg"
},
{
 "initialPosition": {
  "yaw": 133.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65F159A6_69CF_FB21_41DA_26B100243181"
},
{
 "height": 2479,
 "label": "Lounge",
 "class": "Photo",
 "width": 3508,
 "id": "album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_3",
 "image": {
  "levels": [
   {
    "url": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_3.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_3_t.png",
 "duration": 5000
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "id": "effect_5188161C_4265_76DE_41CD_EA5F6A9E18C9",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "id": "effect_5189C61C_4265_76DE_41A6_87B9EAA48562",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "id": "effect_5189F61C_4265_76DE_41C5_B260B4DA4897",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_camera"
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 2073.21,
   "angle": -74.78,
   "y": 1278.46,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Kitchen",
 "id": "panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5",
 "adjacentPanoramas": [
  {
   "backwardYaw": -144.28,
   "yaw": 98.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60"
  },
  {
   "backwardYaw": 143.87,
   "yaw": -105.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_EC2FB7B9_FCDF_5D30_41E7_DC4C5F06DA3B",
  "this.overlay_ECB726B1_FCDF_DF30_41E5_90FBE202E7FC"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_t.jpg"
},
{
 "initialPosition": {
  "yaw": 30.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_658439B5_69CF_FB23_41CA_8F9084A61E9F"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_67330909_69CF_F8E2_41B1_1F0E6082F767",
 "class": "PlayList"
},
{
 "id": "effect_5189161D_4265_76DE_41B7_0F48D8E2735A",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "yaw": 88.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65B109E4_69CF_FB21_41C6_55CAACBB5B30"
},
{
 "height": 2479,
 "label": "Cloak Rm",
 "class": "Photo",
 "width": 3508,
 "id": "album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_1",
 "image": {
  "levels": [
   {
    "url": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_1_t.png",
 "duration": 5000
},
{
 "initialPosition": {
  "yaw": -116.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_668F4938_69CF_FB21_4183_9DDAB1B6F865"
},
{
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_3CF53A03_21A1_2AFD_41A3_4A0A3A91F4BB",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": 35.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_656D2A03_69CF_F8E6_41C4_EB5196AA5FDB"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_camera"
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 2183.2,
   "angle": -18.99,
   "y": 1014.34,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Laundry",
 "id": "panorama_D883E749_D2C3_D763_41B0_80B9D461AC60",
 "adjacentPanoramas": [
  {
   "backwardYaw": 98.9,
   "yaw": -144.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_F3A22F1B_FCDF_CEF1_41EB_1CFB4D2BA215"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D883E764_D2C0_7721_41D1_47B3283B1800_camera"
},
{
 "id": "effect_52E7224D_4033_DD8D_41C3_3969A7CCF47F",
 "duration": 500,
 "easing": "linear",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "yaw": -36.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_657BBA13_69CF_F8E7_41D2_A7A6C62942A1"
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 1685.22,
   "angle": 134.64,
   "y": 1484.03,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Lounge 02",
 "id": "panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248",
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.62,
   "yaw": 124.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE"
  },
  {
   "backwardYaw": -33.99,
   "yaw": 121.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800"
  },
  {
   "backwardYaw": 63.11,
   "yaw": -46.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_F2EC9D09_FCC6_D2D1_41EC_9F8DDFA8B991",
  "this.overlay_ED97F929_FCC2_D2D1_41E1_41819543B6CB",
  "this.overlay_F3785C1C_FCC2_D2F7_41DA_71AF2794441A"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_t.jpg"
},
{
 "initialPosition": {
  "yaw": -40.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65AA19D4_69CF_FB62_41D0_F227C5CD5FF1"
},
{
 "id": "effect_518AF61D_4265_76DE_417E_F1AC7C27957E",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "items": [
  {
   "media": "this.album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F",
   "start": "this.keepComponentVisibility(this.Container_54B4B676_4031_259F_41BD_70DCE7409EBC, true); this.keepComponentVisibility(this.Container_54B41676_4031_259F_419E_182CD1CC50EB, true); this.keepComponentVisibility(this.Container_54B46676_4031_259F_41C0_7E4B81DFBB7D, true); this.keepComponentVisibility(this.IconButton_54B47676_4031_259F_41C9_1A251F452E46, true); this.keepComponentVisibility(this.Label_5424C213_403F_3D95_41C9_2A0B660DFFD3, true); this.keepComponentVisibility(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5, true)",
   "begin": "this.registerKey('visibility_ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5', this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5.get('visible')); this.loopAlbum(this.playList_6720B8FA_69CF_F921_41D2_588556788771, 0); this.keepComponentVisibility(this.Container_54B4B676_4031_259F_41BD_70DCE7409EBC, false); this.setComponentVisibility(this.Container_54B4B676_4031_259F_41BD_70DCE7409EBC, false, -1, this.effect_5188461C_4265_76DE_41B1_FC0C80DC545B, 'hideEffect', false); this.keepComponentVisibility(this.Container_54B41676_4031_259F_419E_182CD1CC50EB, false); this.setComponentVisibility(this.Container_54B41676_4031_259F_419E_182CD1CC50EB, false, -1, this.effect_5188361C_4265_76DE_41C5_5D2E32954996, 'hideEffect', false); this.keepComponentVisibility(this.Container_54B46676_4031_259F_41C0_7E4B81DFBB7D, false); this.setComponentVisibility(this.Container_54B46676_4031_259F_41C0_7E4B81DFBB7D, false, -1, this.effect_5189F61C_4265_76DE_41C5_B260B4DA4897, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_54B47676_4031_259F_41C9_1A251F452E46, false); this.setComponentVisibility(this.IconButton_54B47676_4031_259F_41C9_1A251F452E46, false, -1, this.effect_5189A61D_4265_76DE_41C7_5F3280F81890, 'hideEffect', false); this.keepComponentVisibility(this.Label_5424C213_403F_3D95_41C9_2A0B660DFFD3, false); this.setComponentVisibility(this.Label_5424C213_403F_3D95_41C9_2A0B660DFFD3, false, -1, this.effect_5189361D_4265_76DE_41C4_A6E96857A275, 'hideEffect', false); this.keepComponentVisibility(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5, false); this.setComponentVisibility(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5, false, -1, this.effect_50322CCA_426C_FBBA_41BA_01143D758113, 'hideEffect', false)",
   "player": "this.ViewerAreaLabeled_4F2E1EE5_426C_F76E_41CD_66DECEA2AEA4PhotoAlbumPlayer",
   "end": "this.setComponentVisibility(this.Container_54B4B676_4031_259F_41BD_70DCE7409EBC, false, -1, this.effect_5188161C_4265_76DE_41CD_EA5F6A9E18C9, 'hideEffect', false); this.setComponentVisibility(this.Container_54B41676_4031_259F_419E_182CD1CC50EB, false, -1, this.effect_5189C61C_4265_76DE_41A6_87B9EAA48562, 'hideEffect', false); this.setComponentVisibility(this.Container_54B46676_4031_259F_41C0_7E4B81DFBB7D, false, -1, this.effect_5189961D_4265_76DE_41CF_93D68012EDEB, 'hideEffect', false); this.setComponentVisibility(this.IconButton_54B47676_4031_259F_41C9_1A251F452E46, false, -1, this.effect_5189161D_4265_76DE_41B7_0F48D8E2735A, 'hideEffect', false); this.setComponentVisibility(this.Label_5424C213_403F_3D95_41C9_2A0B660DFFD3, false, -1, this.effect_518AF61D_4265_76DE_417E_F1AC7C27957E, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5')){ if(this.getKey('visibility_ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5')) { this.setComponentVisibility(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5, true, -1, this.effect_65105A23_69CF_F927_41D7_C6AF267C8C15, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5, false, -1, this.effect_50322CCA_426C_FBBA_41BA_01143D758113, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5')",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_6720B8FA_69CF_F921_41D2_588556788771",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_10FD4814_1E2D_4577_41B3_1CE359E63E62",
   "x": 1060.25,
   "angle": 173.91,
   "y": 1446.76,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "Bedroom 02",
 "id": "panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE",
 "adjacentPanoramas": [
  {
   "backwardYaw": 124.32,
   "yaw": -79.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248"
  },
  {
   "backwardYaw": 139.23,
   "yaw": -76.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800"
  },
  {
   "backwardYaw": 61.08,
   "yaw": -81.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "overlays": [
  "this.overlay_F35C042A_FCC3_32D0_41D6_4B7572BCAC97",
  "this.overlay_F35F8969_FCC2_D551_41D0_F0D61456E355",
  "this.overlay_F30C560B_FCC7_3ED1_41E0_A83FE41D81F4"
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_t.jpg"
},
{
 "viewerArea": "this.ViewerAreaLabeled_4F2E1EE5_426C_F76E_41CD_66DECEA2AEA4",
 "id": "ViewerAreaLabeled_4F2E1EE5_426C_F76E_41CD_66DECEA2AEA4PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_4F2E3EE5_426C_F76E_41C7_63EE6A73DF61",
 "buttonPrevious": "this.IconButton_4F2E0EE5_426C_F76E_41A1_8E994DC89608"
},
{
 "id": "effect_5188361C_4265_76DE_41C5_5D2E32954996",
 "duration": 1000,
 "easing": "cubic_in_out",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "yaw": -58.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_654B19E4_69CF_FB21_41D2_173AD8E33AD4"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "shadow": false,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Gabriola",
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 0.55,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "toolTipDisplayTime": 600,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_0CA09538_1E53_CFBF_41B5_165D47622D12",
 "children": [
  "this.MapViewer"
 ],
 "scrollBarWidth": 10,
 "right": "1.15%",
 "width": "16.647%",
 "overflow": "scroll",
 "backgroundOpacity": 0.23,
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "32.459%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container11301"
 }
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_0CA8165C_1E5D_CDF7_41B5_38F7F5064CCF",
 "children": [
  "this.Label_08B6FE8B_1E5F_7D51_417E_5BC75A6FD744"
 ],
 "shadowSpread": 1,
 "shadowColor": "#333333",
 "scrollBarWidth": 10,
 "right": "1.21%",
 "width": "16.647%",
 "overflow": "scroll",
 "backgroundOpacity": 0.63,
 "shadowOpacity": 0.49,
 "borderRadius": 0,
 "shadow": true,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "32.9%",
 "shadowVerticalLength": 8,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "2.514%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowHorizontalLength": 1,
 "data": {
  "name": "Container11301"
 },
 "shadowBlurRadius": 51
},
{
 "data": {
  "name": "IconButton7640"
 },
 "minHeight": 1,
 "id": "IconButton_372F8513_21EF_391D_4182_0F02D3B6FFF3",
 "maxWidth": 53,
 "width": 53,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": "21.17%",
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_372F8513_21EF_391D_4182_0F02D3B6FFF3.png",
 "propagateClick": false,
 "bottom": "0.66%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 52,
 "height": 52,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.facebook.com/unity.homes.kenya/', '_blank')",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "minHeight": 0,
 "id": "IconButton_34A3ABC0_21E3_697B_41B8_29CA818DEC9C",
 "width": 40,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": "18.28%",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_34A3ABC0_21E3_697B_41B8_29CA818DEC9C_rollover.png",
 "iconURL": "skin/IconButton_34A3ABC0_21E3_697B_41B8_29CA818DEC9C.png",
 "propagateClick": false,
 "bottom": "1.31%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "minWidth": 0,
 "click": "this.openLink('http://youtu.be/eD0S2kJpay0', '_blank')",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_34A3ABC0_21E3_697B_41B8_29CA818DEC9C_pressed.png",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "Button53068"
 }
},
{
 "data": {
  "name": "IconButton21546"
 },
 "minHeight": 1,
 "id": "IconButton_34FD4933_21E1_E91C_41B1_F2009665B359",
 "maxWidth": 53,
 "width": 53,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": "24.43%",
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_34FD4933_21E1_E91C_41B1_F2009665B359.png",
 "propagateClick": false,
 "bottom": "0.55%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 52,
 "height": 52,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://twitter.com/unityhomeskenya', '_self')",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "data": {
  "name": "IconButton14830"
 },
 "minHeight": 1,
 "id": "IconButton_3CF53A03_21A1_2AFD_41A3_4A0A3A91F4BB",
 "maxWidth": 54,
 "width": 54,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": "27.5%",
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_3CF53A03_21A1_2AFD_41A3_4A0A3A91F4BB.png",
 "propagateClick": false,
 "bottom": "0.33%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 55,
 "height": 55,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_3277DDDD_3FF3_268D_4199_93B05A9BA19F",
 "left": "27.08%",
 "children": [
  "this.Label_3187A3BF_3FCF_628D_41A4_73B2E3C65B3B"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "backgroundOpacity": 0.63,
 "width": "6.333%",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.7,
 "borderRadius": 0,
 "shadow": true,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "0.87%",
 "shadowVerticalLength": 3,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.45,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "3.716%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadowHorizontalLength": -1,
 "data": {
  "name": "Container5987"
 },
 "shadowBlurRadius": 13
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_31B576EC_3FF1_22B3_41C8_02854D8AA49F",
 "left": "0.66%",
 "children": [
  "this.Label_31A366C8_3FF1_22F3_419D_D92D973EFD7C"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "backgroundOpacity": 0.63,
 "width": "6.333%",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.7,
 "borderRadius": 0,
 "shadow": true,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "0.98%",
 "shadowVerticalLength": 3,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.45,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "3.716%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadowHorizontalLength": -1,
 "data": {
  "name": "Container5987"
 },
 "shadowBlurRadius": 13
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_318F84FA_3FCF_2697_41BF_9B2FF5F364D5",
 "left": "7.3%",
 "children": [
  "this.Label_31BD24DF_3FCF_268D_4190_4DD861938D77"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "backgroundOpacity": 0.63,
 "width": "6.333%",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.7,
 "borderRadius": 0,
 "shadow": true,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "0.98%",
 "shadowVerticalLength": 3,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.45,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "3.716%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadowHorizontalLength": -1,
 "data": {
  "name": "Container5987"
 },
 "shadowBlurRadius": 13
},
{
 "scrollBarMargin": 2,
 "data": {
  "name": "Container5987"
 },
 "minHeight": 1,
 "id": "Container_319E57B1_3FD1_2295_41C6_5DC2B87C7C9F",
 "left": "13.87%",
 "children": [
  "this.Label_3193B797_3FD1_229D_41CA_3CC430BE490A"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "backgroundOpacity": 0.63,
 "width": "6.333%",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.7,
 "borderRadius": 0,
 "shadow": true,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "0.98%",
 "shadowVerticalLength": 3,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.45,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "3.716%",
 "click": "this.setComponentVisibility(this.Container_4F2E4EE5_426C_F76E_41CB_17BB9D5E8FDB, true, 0, null, null, false); this.setComponentVisibility(this.Container_4F2FFEE5_426C_F76E_41CD_8962BBF03BA4, true, 0, null, null, false); this.setComponentVisibility(this.Container_4F2FEEE5_426C_F76E_41D0_0F016B4E24B4, true, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_4F2E1EE5_426C_F76E_41CD_66DECEA2AEA4, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_4F2E0EE5_426C_F76E_41A1_8E994DC89608, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_4F2E3EE5_426C_F76E_41C7_63EE6A73DF61, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_4F2E5EE5_426C_F76E_41C9_FA65F4DE6885, true, 0, null, null, false)",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadowHorizontalLength": -1,
 "shadowBlurRadius": 13
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_3152B613_3FD0_E595_419A_FDD3CA12F9F9",
 "left": "20.45%",
 "children": [
  "this.Label_316795E5_3FD0_E6BD_41CF_B579213A7FEA"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "backgroundOpacity": 0.63,
 "width": "6.333%",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.7,
 "borderRadius": 0,
 "shadow": true,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "0.87%",
 "shadowVerticalLength": 3,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.45,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "3.716%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadowHorizontalLength": -1,
 "data": {
  "name": "Container5987"
 },
 "shadowBlurRadius": 13
},
{
 "scrollBarMargin": 2,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "minHeight": 1,
 "id": "Container_4F2E4EE5_426C_F76E_41CB_17BB9D5E8FDB",
 "left": "0%",
 "children": [
  "this.Container_4F2FFEE5_426C_F76E_41CD_8962BBF03BA4"
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "layout": "absolute",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_4F2E4EE5_426C_F76E_41CB_17BB9D5E8FDB, false, 0, null, null, false)",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "visible": false
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_54B4B676_4031_259F_41BD_70DCE7409EBC",
 "left": "0%",
 "children": [
  "this.Container_54B41676_4031_259F_419E_182CD1CC50EB"
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "layout": "absolute",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "scrollBarMargin": 2,
 "data": {
  "name": "--LOCATION"
 },
 "minHeight": 1,
 "id": "Container_52F75147_4263_4AAA_41BF_0CF83D96A2C8",
 "left": "0%",
 "children": [
  "this.Container_52F78147_4263_4AAA_41C8_4A115D7E547C",
  "this.Container_52F7A147_4263_4AAA_41AC_7C1338D7EB7B"
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "layout": "absolute",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_52F75147_4263_4AAA_41BF_0CF83D96A2C8, false, 0, null, null, false)",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "visible": false
},
{
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Arial",
 "id": "ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66",
 "left": "0.48%",
 "itemBorderRadius": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.2,
 "width": "52.232%",
 "itemVerticalAlign": "middle",
 "scrollBarWidth": 10,
 "itemPaddingLeft": 3,
 "itemOpacity": 1,
 "shadow": false,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailShadowOpacity": 0.8,
 "itemThumbnailOpacity": 1,
 "propagateClick": false,
 "itemThumbnailShadowSpread": 1,
 "height": 130,
 "playList": "this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66_playlist",
 "verticalAlign": "top",
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemLabelGap": 5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "minHeight": 1,
 "itemThumbnailShadowBlurRadius": 4,
 "itemLabelFontSize": 14,
 "itemThumbnailShadow": true,
 "itemThumbnailHeight": 75,
 "borderRadius": 5,
 "layout": "horizontal",
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailScaleMode": "fit_outside",
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "bottom": "5.9%",
 "class": "ThumbnailList",
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 75,
 "itemThumbnailShadowVerticalLength": 3,
 "minWidth": 1,
 "itemPaddingBottom": 3,
 "itemThumbnailShadowColor": "#000000",
 "gap": 10,
 "itemLabelFontStyle": "normal",
 "paddingTop": 10,
 "paddingLeft": 20,
 "paddingBottom": 10,
 "itemMode": "normal",
 "visible": false,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailBorderRadius": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList1355"
 }
},
{
 "scrollBarMargin": 2,
 "data": {
  "name": "--INFO photo"
 },
 "minHeight": 1,
 "id": "Container_51063121_4223_4AE6_41B5_423F16E9E766",
 "left": "0%",
 "children": [
  "this.Container_5106F121_4223_4AE6_40D2_F185E5DC6300"
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "layout": "absolute",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_51063121_4223_4AE6_41B5_423F16E9E766, false, 0, null, null, false)",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "visible": false
},
{
 "scrollBarMargin": 2,
 "data": {
  "name": "--INFO photo"
 },
 "minHeight": 1,
 "id": "Container_54349891_4224_FBA6_41D0_211EB714D23F",
 "left": "0%",
 "children": [
  "this.Container_5435C891_4224_FBA6_41CD_DFD3E5442E13",
  "this.Container_54347891_4224_FBA6_41B2_EFE9155B11F0",
  "this.Container_5435F891_4224_FBA6_41CB_AFDC74EF13CF"
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "layout": "absolute",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_54349891_4224_FBA6_41D0_211EB714D23F, false, 0, null, null, false)",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "visible": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800, this.camera_658439B5_69CF_FB23_41CA_8F9084A61E9F); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673F7909_69CF_F8E2_41A2_2A9201FD86F9",
   "yaw": -91.39,
   "pitch": -51.44,
   "hfov": 8.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECA7F139_FCC3_7531_41DE_32577C68E55C",
 "maps": [
  {
   "yaw": -91.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.44,
   "hfov": 8.05
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248, this.camera_65F159A6_69CF_FB21_41DA_26B100243181); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673BA8FA_69CF_F921_41CE_FC30CCFC896E",
   "yaw": 63.11,
   "pitch": -25.49,
   "hfov": 9.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3DE9618_FCC1_5EFF_41DC_718D57F8C146",
 "maps": [
  {
   "yaw": 63.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_1_HS_6_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.49,
   "hfov": 9.4
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5, this.camera_658DE9B5_69CF_FB23_41DA_450D3A95195B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673B48FA_69CF_F921_41A5_7D32008A0DE1",
   "yaw": 143.87,
   "pitch": -41.18,
   "hfov": 9.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED987DE1_FCDF_4D51_41D2_D8C7251A92A2",
 "maps": [
  {
   "yaw": 143.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_1_HS_7_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.18,
   "hfov": 9.15
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE, this.camera_65E6B996_69CF_FBE1_41D2_075DBDA8132D); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673AE8FA_69CF_F921_41C7_628362999E84",
   "yaw": 61.08,
   "pitch": -11.3,
   "hfov": 5.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3240AEE_FCC3_5750_41D2_D6369C46003F",
 "maps": [
  {
   "yaw": 61.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_1_HS_8_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.3,
   "hfov": 5.11
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673A98FA_69CF_F921_41CD_396ED5910F31",
   "yaw": 161.72,
   "pitch": -19.11,
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC577944_FCC1_5550_41D8_F5509D2010A8",
 "maps": [
  {
   "yaw": 161.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_1_HS_9_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.11,
   "hfov": 4.92
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0, this.camera_6577FA23_69CF_F927_41BB_0F4BA1BF6D0B); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673FC909_69CF_F8E2_41C4_E2DAF44B9DBD",
   "yaw": -90.64,
   "pitch": -37.62,
   "hfov": 10.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F31A402F_FCC3_32D0_41E5_569DF1A890C9",
 "maps": [
  {
   "yaw": -90.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.62,
   "hfov": 10.23
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465, this.camera_65B109E4_69CF_FB21_41C6_55CAACBB5B30); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673C7909_69CF_F8E2_41C6_5DB864DB4588",
   "yaw": -149.67,
   "pitch": -56.46,
   "hfov": 7.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC686C4D_FCDF_3350_41EF_010168FE9037",
 "maps": [
  {
   "yaw": -149.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_5_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -56.46,
   "hfov": 7.14
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248, this.camera_654B19E4_69CF_FB21_41D2_173AD8E33AD4); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673C1909_69CF_F8E2_4160_F3FE1417EA5D",
   "yaw": -33.99,
   "pitch": -50.98,
   "hfov": 7.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECD4E8BC_FCC1_7337_41E5_60434A4C2072",
 "maps": [
  {
   "yaw": -33.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_6_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.98,
   "hfov": 7.65
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673FE909_69CF_F8E2_41CB_6E757AE1B2A1",
   "yaw": -33.22,
   "pitch": -24.12,
   "hfov": 7.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED6CBD16_FCC1_32F3_41EB_9DCDA997E7E3",
 "maps": [
  {
   "yaw": -33.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_7_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.12,
   "hfov": 7.92
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0, this.camera_6551FA03_69CF_F8E6_41CF_A692B4ACA36D); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673F9909_69CF_F8E2_41D4_09CDBA8F8059",
   "yaw": 53.18,
   "pitch": -48.97,
   "hfov": 7.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EF6617BF_FCC1_FD31_41BE_DAD886BEC3AF",
 "maps": [
  {
   "yaw": 53.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_8_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.97,
   "hfov": 7.98
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE, this.camera_654409F4_69CF_FB21_41A8_E494E78D1D75); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673F4909_69CF_F8E2_41BA_BAE02CDE4705",
   "yaw": 139.23,
   "pitch": -26.25,
   "hfov": 9.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC4F01EE_FCC1_3553_41DD_31F49AE31134",
 "maps": [
  {
   "yaw": 139.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_9_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.25,
   "hfov": 9.34
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "items": [
  {
   "media": "this.album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.39"
    }
   }
  },
  {
   "media": "this.album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.47",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.62"
    }
   }
  },
  {
   "media": "this.album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.26",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.74"
    }
   }
  },
  {
   "media": "this.album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.59"
    }
   }
  }
 ],
 "id": "album_4D34F397_426F_4DAA_41AD_FBDEF425FD1F_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "media": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_67340909_69CF_F8E2_41B5_EE8DE2E3F614, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_67340909_69CF_F8E2_41B5_EE8DE2E3F614",
 "camera": "this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_camera"
},
{
 "media": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_66CB9909_69CF_F8E2_41CE_F3B9C64EE18B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_66CB9909_69CF_F8E2_41CE_F3B9C64EE18B",
 "camera": "this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_camera"
},
{
 "media": "this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_66CAF909_69CF_F8E2_41D1_DBCB29F7F03C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_66CAF909_69CF_F8E2_41D1_DBCB29F7F03C",
 "camera": "this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_camera"
},
{
 "media": "this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_66CA6909_69CF_F8E2_41C7_0F78050B0B42, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_66CA6909_69CF_F8E2_41C7_0F78050B0B42",
 "camera": "this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_camera"
},
{
 "media": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_66CDC909_69CF_F8E2_41B1_855590384BD4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_66CDC909_69CF_F8E2_41B1_855590384BD4",
 "camera": "this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800_camera"
},
{
 "media": "this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_66CD0909_69CF_F8E2_41D6_B41B9ACA3AE2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_66CD0909_69CF_F8E2_41D6_B41B9ACA3AE2",
 "camera": "this.panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_camera"
},
{
 "media": "this.panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_66CA2909_69CF_F8E2_41D4_7359AD8A8AB7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_66CA2909_69CF_F8E2_41D4_7359AD8A8AB7",
 "camera": "this.panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_camera"
},
{
 "media": "this.panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_66CD7909_69CF_F8E2_41C7_FAE322ABD887, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_66CD7909_69CF_F8E2_41C7_FAE322ABD887",
 "camera": "this.panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_camera"
},
{
 "media": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_66CCE909_69CF_F8E2_41D0_78C64226C0BA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "end": "this.trigger('tourEnded')",
 "id": "PanoramaPlayListItem_66CCE909_69CF_F8E2_41D0_78C64226C0BA",
 "camera": "this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_camera"
},
{
 "map": {
  "width": 142.79,
  "x": 2009.13,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_0_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1415.33,
  "class": "HotspotMapOverlayMap",
  "height": 128.43,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2009.13,
  "y": 1415.33,
  "width": 142.79,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_0.png",
     "width": 135,
     "class": "ImageResourceLevel",
     "height": 122
    }
   ],
   "class": "ImageResource"
  },
  "height": 128.43
 },
 "useHandCursor": true,
 "id": "overlay_13E23DF6_1E2D_5EB0_419C_66ACE669C709"
},
{
 "map": {
  "width": 122.82,
  "x": 2011.81,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1218.53,
  "class": "HotspotMapOverlayMap",
  "height": 119.87,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2011.81,
  "y": 1218.53,
  "width": 122.82,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_1.png",
     "width": 116,
     "class": "ImageResourceLevel",
     "height": 113
    }
   ],
   "class": "ImageResource"
  },
  "height": 119.87
 },
 "useHandCursor": true,
 "id": "overlay_11E70747_1E33_4BD1_41A7_D4D462215259"
},
{
 "map": {
  "width": 131.38,
  "x": 2117.51,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 950.13,
  "class": "HotspotMapOverlayMap",
  "height": 128.43,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2117.51,
  "y": 950.13,
  "width": 131.38,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_2.png",
     "width": 124,
     "class": "ImageResourceLevel",
     "height": 122
    }
   ],
   "class": "ImageResource"
  },
  "height": 128.43
 },
 "useHandCursor": true,
 "id": "overlay_112D3ABD_1E34_BAB0_41B2_6E8F0EDD8BB8"
},
{
 "map": {
  "width": 122.82,
  "x": 1623.81,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1424.1,
  "class": "HotspotMapOverlayMap",
  "height": 119.87,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1623.81,
  "y": 1424.1,
  "width": 122.82,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_3.png",
     "width": 116,
     "class": "ImageResourceLevel",
     "height": 113
    }
   ],
   "class": "ImageResource"
  },
  "height": 119.87
 },
 "useHandCursor": true,
 "id": "overlay_115E57AD_1E35_CAAF_41B3_7C097E41C655"
},
{
 "map": {
  "width": 122.82,
  "x": 1384.15,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1415.33,
  "class": "HotspotMapOverlayMap",
  "height": 119.87,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1384.15,
  "y": 1415.33,
  "width": 122.82,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_4.png",
     "width": 116,
     "class": "ImageResourceLevel",
     "height": 113
    }
   ],
   "class": "ImageResource"
  },
  "height": 119.87
 },
 "useHandCursor": true,
 "id": "overlay_11BCB0E5_1E34_C6D0_41B6_50F7C9E024A2"
},
{
 "map": {
  "width": 122.82,
  "x": 1406.8,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1606.52,
  "class": "HotspotMapOverlayMap",
  "height": 119.87,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1406.8,
  "y": 1606.52,
  "width": 122.82,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_5.png",
     "width": 116,
     "class": "ImageResourceLevel",
     "height": 113
    }
   ],
   "class": "ImageResource"
  },
  "height": 119.87
 },
 "useHandCursor": true,
 "id": "overlay_1111E55E_1E34_CFF0_41AC_DC381710F260"
},
{
 "map": {
  "width": 122.82,
  "x": 1055.83,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1598,
  "class": "HotspotMapOverlayMap",
  "height": 119.87,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1055.83,
  "y": 1598,
  "width": 122.82,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_6.png",
     "width": 116,
     "class": "ImageResourceLevel",
     "height": 113
    }
   ],
   "class": "ImageResource"
  },
  "height": 119.87
 },
 "useHandCursor": true,
 "id": "overlay_1106ABAC_1E3C_BB57_41AE_7A8C85EB2C29"
},
{
 "map": {
  "width": 122.82,
  "x": 998.84,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1386.83,
  "class": "HotspotMapOverlayMap",
  "height": 119.87,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 998.84,
  "y": 1386.83,
  "width": 122.82,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_7.png",
     "width": 116,
     "class": "ImageResourceLevel",
     "height": 113
    }
   ],
   "class": "ImageResource"
  },
  "height": 119.87
 },
 "useHandCursor": true,
 "id": "overlay_0E130A4C_1E3D_C5D7_41BD_C6E3BE653235"
},
{
 "map": {
  "width": 122.82,
  "x": 1378.31,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_8_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1232.66,
  "class": "HotspotMapOverlayMap",
  "height": 119.87,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1378.31,
  "y": 1232.66,
  "width": 122.82,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_10FD4814_1E2D_4577_41B3_1CE359E63E62_HS_8.png",
     "width": 116,
     "class": "ImageResourceLevel",
     "height": 113
    }
   ],
   "class": "ImageResource"
  },
  "height": 119.87
 },
 "useHandCursor": true,
 "id": "overlay_0E0CB235_1E3D_45B1_41B4_EDBBBD274CA1"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800, this.camera_65D7D986_69CF_FBEE_41CD_BCCCBB9D2584); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673EE909_69CF_F8E2_41B4_739E34534FBF",
   "yaw": -99.18,
   "pitch": -53.2,
   "hfov": 7.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC1EDF0F_FCC1_4ED1_41E9_C51E3EAE628E",
 "maps": [
  {
   "yaw": -99.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -53.2,
   "hfov": 7.74
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736, this.camera_65ED9996_69CF_FBE1_41CB_4B0C9CED9F83); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673EA909_69CF_F8E2_419E_553D8EE53850",
   "yaw": 160.58,
   "pitch": -35.86,
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE436884_FCC2_D3D7_41EA_53000939FD89",
 "maps": [
  {
   "yaw": 160.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.86,
   "hfov": 10.47
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MapViewer",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "shadow": false,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Gabriola",
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "toolTipDisplayTime": 600,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "MapViewer"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83, this.camera_657BBA13_69CF_F8E7_41D2_A7A6C62942A1); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673D58FA_69CF_F921_41D5_8FC95231CD01",
   "yaw": -105.84,
   "pitch": -48.22,
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC2FB7B9_FCDF_5D30_41E7_DC4C5F06DA3B",
 "maps": [
  {
   "yaw": -105.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.22,
   "hfov": 8.1
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D883E749_D2C3_D763_41B0_80B9D461AC60, this.camera_656D2A03_69CF_F8E6_41C4_EB5196AA5FDB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673D2909_69CF_F8E2_41D3_8B359F6E07A7",
   "yaw": 98.9,
   "pitch": -34.4,
   "hfov": 10.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECB726B1_FCDF_DF30_41E5_90FBE202E7FC",
 "maps": [
  {
   "yaw": 98.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.4,
   "hfov": 10.03
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5, this.camera_65D08977_69CF_FB2F_41CE_5ECB9F2C931B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673CC909_69CF_F8E2_41CF_8F83824AF061",
   "yaw": -144.28,
   "pitch": -39.93,
   "hfov": 9.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3A22F1B_FCDF_CEF1_41EB_1CFB4D2BA215",
 "maps": [
  {
   "yaw": -144.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.93,
   "hfov": 9.32
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83, this.camera_668F4938_69CF_FB21_4183_9DDAB1B6F865); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673A58FA_69CF_F921_41D8_35F1D0479D27",
   "yaw": -46.6,
   "pitch": -32.37,
   "hfov": 10.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2EC9D09_FCC6_D2D1_41EC_9F8DDFA8B991",
 "maps": [
  {
   "yaw": -46.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_1_HS_6_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.37,
   "hfov": 10.26
  }
 ],
 "data": {
  "label": "Circle 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800, this.camera_66F17938_69CF_FB21_41D9_344A1B0CA251); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673A08FA_69CF_F921_41D9_8C56A27672C3",
   "yaw": 121.39,
   "pitch": -43.15,
   "hfov": 9.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED97F929_FCC2_D2D1_41E1_41819543B6CB",
 "maps": [
  {
   "yaw": 121.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_1_HS_7_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.15,
   "hfov": 9.43
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE, this.camera_66E0C929_69CF_FB23_41B8_5887D6FF0F45); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673DB8FA_69CF_F921_41B1_278FAC84D681",
   "yaw": 124.32,
   "pitch": -17.87,
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3785C1C_FCC2_D2F7_41DA_71AF2794441A",
 "maps": [
  {
   "yaw": 124.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_1_HS_8_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.87,
   "hfov": 4.96
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D883E764_D2C0_7721_41D1_47B3283B1800, this.camera_65AA19D4_69CF_FB62_41D0_F227C5CD5FF1); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673F2909_69CF_F8E2_41D8_0D520ED8B456",
   "yaw": -76.57,
   "pitch": -32.85,
   "hfov": 10.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F35C042A_FCC3_32D0_41D6_4B7572BCAC97",
 "maps": [
  {
   "yaw": -76.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.85,
   "hfov": 10.85
  }
 ],
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248, this.camera_659129C5_69CF_FB63_41D9_541EFB534E92); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673EC909_69CF_F8E2_41D7_837E65C26723",
   "yaw": -79.62,
   "pitch": -23.37,
   "hfov": 7.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F35F8969_FCC2_D551_41D0_F0D61456E355",
 "maps": [
  {
   "yaw": -79.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.37,
   "hfov": 7.97
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83, this.camera_65A439D4_69CF_FB62_41D9_4AA33498739E); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_673E8909_69CF_F8E2_41C1_F36DE40A3C67",
   "yaw": -81.05,
   "pitch": -16.08,
   "hfov": 5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F30C560B_FCC7_3ED1_41E0_A83FE41D81F4",
 "maps": [
  {
   "yaw": -81.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.08,
   "hfov": 5
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_4F2E1EE5_426C_F76E_41CD_66DECEA2AEA4",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "right": "1.71%",
 "width": "96.416%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "shadow": false,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "95.219%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "show": "this.ViewerAreaLabeled_4F2E1EE5_426C_F76E_41CD_66DECEA2AEA4.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6720B8FA_69CF_F921_41D2_588556788771.set('selectedIndex', -1); }, this); this.playList_6720B8FA_69CF_F921_41D2_588556788771.set('selectedIndex', 0)",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "toolTipDisplayTime": 600,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "bottom": "2.32%",
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "data": {
  "name": "IconButton >"
 },
 "minHeight": 50,
 "id": "IconButton_4F2E3EE5_426C_F76E_41C7_63EE6A73DF61",
 "maxWidth": 60,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": 10,
 "borderRadius": 0,
 "shadow": false,
 "top": "20%",
 "iconURL": "skin/IconButton_4F2E3EE5_426C_F76E_41C7_63EE6A73DF61.png",
 "propagateClick": true,
 "bottom": "20%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 60,
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_4F2E3EE5_426C_F76E_41C7_63EE6A73DF61_pressed.png",
 "paddingTop": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_4F2E3EE5_426C_F76E_41C7_63EE6A73DF61_rollover.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false
},
{
 "data": {
  "name": "IconButton <"
 },
 "minHeight": 50,
 "id": "IconButton_4F2E0EE5_426C_F76E_41A1_8E994DC89608",
 "left": 10,
 "maxWidth": 60,
 "width": "14.22%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "top": "20%",
 "iconURL": "skin/IconButton_4F2E0EE5_426C_F76E_41A1_8E994DC89608.png",
 "propagateClick": true,
 "bottom": "20%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 60,
 "minWidth": 50,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4F2E0EE5_426C_F76E_41A1_8E994DC89608_pressed.png",
 "paddingTop": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_4F2E0EE5_426C_F76E_41A1_8E994DC89608_rollover.png",
 "borderSize": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false
},
{
 "fontFamily": "Gabriola",
 "verticalAlign": "middle",
 "data": {
  "name": "Label9939"
 },
 "minHeight": 1,
 "id": "Label_08B6FE8B_1E5F_7D51_417E_5BC75A6FD744",
 "backgroundOpacity": 0,
 "width": "57.509%",
 "right": "15.8%",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "bottom": "0%",
 "class": "Label",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "94.737%",
 "fontSize": "21px",
 "minWidth": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "paddingLeft": 0,
 "text": "FLOOR LAYOUT",
 "borderSize": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "text": "Location",
 "data": {
  "name": "Label5673"
 },
 "minHeight": 1,
 "id": "Label_3187A3BF_3FCF_628D_41A4_73B2E3C65B3B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "99.048%",
 "fontFamily": "Gabriola",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "top": "0%",
 "class": "Label",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "97.059%",
 "fontSize": "2vmin",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_52F75147_4263_4AAA_41BF_0CF83D96A2C8, true, 0, null, null, false); this.setComponentVisibility(this.Container_52F78147_4263_4AAA_41C8_4A115D7E547C, true, 0, null, null, false); this.setComponentVisibility(this.Container_52F7A147_4263_4AAA_41AC_7C1338D7EB7B, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_52F7B147_4263_4AAA_41BC_577B47A11AA5, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66, false, 0, null, null, false)",
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "fontColor": "#000000"
},
{
 "text": "Panorama List",
 "data": {
  "name": "Label5673"
 },
 "minHeight": 1,
 "id": "Label_31A366C8_3FF1_22F3_419D_D92D973EFD7C",
 "fontFamily": "Gabriola",
 "backgroundOpacity": 0,
 "width": "95.238%",
 "right": "0%",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "top": "2.94%",
 "class": "Label",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "88.235%",
 "fontSize": "2vmin",
 "minWidth": 1,
 "click": "if(!this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66.get('visible')){ this.setComponentVisibility(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66, true, 0, null, null, false) } else { this.setComponentVisibility(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66, false, 0, null, null, false) }",
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "fontColor": "#000000"
},
{
 "text": "Floor Plan",
 "data": {
  "name": "Label5673"
 },
 "minHeight": 1,
 "id": "Label_31BD24DF_3FCF_268D_4190_4DD861938D77",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "99.048%",
 "fontFamily": "Gabriola",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "top": "0%",
 "class": "Label",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "97.059%",
 "fontSize": "2vmin",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66, false, 0, null, null, false); this.setComponentVisibility(this.Container_54349891_4224_FBA6_41D0_211EB714D23F, true, 0, null, null, false); this.setComponentVisibility(this.Container_5435C891_4224_FBA6_41CD_DFD3E5442E13, true, 0, null, null, false); this.setComponentVisibility(this.Container_54347891_4224_FBA6_41B2_EFE9155B11F0, true, 0, null, null, false); this.setComponentVisibility(this.Container_5435F891_4224_FBA6_41CB_AFDC74EF13CF, true, 0, null, null, false); this.setComponentVisibility(this.Image_5A8B522C_4223_CEFE_41CC_6E94939EAC48, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_54346891_4224_FBA6_41C7_A832095CE904, true, 0, null, null, false)",
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "fontColor": "#000000"
},
{
 "text": "Highlights",
 "data": {
  "name": "Label5673"
 },
 "minHeight": 1,
 "id": "Label_3193B797_3FD1_229D_41CA_3CC430BE490A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "99.048%",
 "fontFamily": "Gabriola",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "top": "0%",
 "class": "Label",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "97.059%",
 "fontSize": "2vmin",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_4F2E4EE5_426C_F76E_41CB_17BB9D5E8FDB, true, 0, null, null, false); this.setComponentVisibility(this.Container_4F2FFEE5_426C_F76E_41CD_8962BBF03BA4, true, 0, null, null, false); this.setComponentVisibility(this.Container_4F2FEEE5_426C_F76E_41D0_0F016B4E24B4, true, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_4F2E1EE5_426C_F76E_41CD_66DECEA2AEA4, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_4F2E0EE5_426C_F76E_41A1_8E994DC89608, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_4F2E3EE5_426C_F76E_41C7_63EE6A73DF61, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_4F2E5EE5_426C_F76E_41C9_FA65F4DE6885, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66, false, 0, null, null, false)",
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "fontColor": "#000000"
},
{
 "text": "Context",
 "data": {
  "name": "Label5673"
 },
 "minHeight": 1,
 "id": "Label_316795E5_3FD0_E6BD_41CF_B579213A7FEA",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "99.048%",
 "fontFamily": "Gabriola",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "top": "0%",
 "class": "Label",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "97.059%",
 "fontSize": "2vmin",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.ThumbnailList_51721187_4267_CDAB_41A7_E3C70C55CB66, false, 0, null, null, false); this.setComponentVisibility(this.Container_51063121_4223_4AE6_41B5_423F16E9E766, true, 0, null, null, false); this.setComponentVisibility(this.Container_5106F121_4223_4AE6_40D2_F185E5DC6300, true, 0, null, null, false); this.setComponentVisibility(this.Container_5106E121_4223_4AE6_419E_555F9827BFAC, true, 0, null, null, false); this.setComponentVisibility(this.Image_56CCB4B1_4225_4BE6_41C1_7C1F7B64F106, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_51060121_4223_4AE6_41BD_74EE037136C9, true, 0, null, null, false)",
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "fontColor": "#000000"
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_4F2FFEE5_426C_F76E_41CD_8962BBF03BA4",
 "left": "15%",
 "children": [
  "this.Container_4F2FEEE5_426C_F76E_41D0_0F016B4E24B4"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadow": true,
 "shadowOpacity": 0.3,
 "class": "Container",
 "layout": "vertical",
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_54B41676_4031_259F_419E_182CD1CC50EB",
 "left": "15%",
 "children": [
  "this.Container_54B46676_4031_259F_41C0_7E4B81DFBB7D",
  "this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadow": true,
 "shadowOpacity": 0.3,
 "class": "Container",
 "layout": "absolute",
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_52F78147_4263_4AAA_41C8_4A115D7E547C",
 "left": "15%",
 "children": [
  "this.WebFrame_52F79147_4263_4AAA_41CA_A4E674E73F24"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadow": true,
 "shadowOpacity": 0.3,
 "class": "Container",
 "layout": "horizontal",
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_52F7A147_4263_4AAA_41AC_7C1338D7EB7B",
 "left": "15%",
 "children": [
  "this.IconButton_52F7B147_4263_4AAA_41BC_577B47A11AA5"
 ],
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "right": "15%",
 "borderRadius": 0,
 "shadow": false,
 "overflow": "visible",
 "layout": "vertical",
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_5106F121_4223_4AE6_40D2_F185E5DC6300",
 "left": "10%",
 "children": [
  "this.Container_5106E121_4223_4AE6_419E_555F9827BFAC"
 ],
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "10%",
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "layout": "horizontal",
 "top": "5%",
 "propagateClick": false,
 "bottom": "5%",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_5435C891_4224_FBA6_41CD_DFD3E5442E13",
 "left": "10%",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "10%",
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "layout": "horizontal",
 "top": "5%",
 "propagateClick": false,
 "bottom": "5%",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_54347891_4224_FBA6_41B2_EFE9155B11F0",
 "left": "78.21%",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "right": "17%",
 "borderRadius": 0,
 "shadow": false,
 "overflow": "visible",
 "layout": "vertical",
 "top": "5.86%",
 "propagateClick": false,
 "bottom": "86.67%",
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_5435F891_4224_FBA6_41CB_AFDC74EF13CF",
 "children": [
  "this.Image_5A8B522C_4223_CEFE_41CC_6E94939EAC48",
  "this.IconButton_54346891_4224_FBA6_41C7_A832095CE904"
 ],
 "scrollBarWidth": 10,
 "right": "12.56%",
 "width": "67.31%",
 "horizontalAlign": "center",
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadow": false,
 "layout": "absolute",
 "top": "5.11%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": "4.89%",
 "class": "Container",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 }
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D880574B_D2C0_D767_41D5_EAEEB4E6B465_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673F7909_69CF_F8E2_41A2_2A9201FD86F9",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_1_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673BA8FA_69CF_F921_41CE_FC30CCFC896E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_1_HS_7_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673B48FA_69CF_F921_41A5_7D32008A0DE1",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_1_HS_8_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673AE8FA_69CF_F921_41C7_628362999E84",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88C67EE_D2C3_B721_41E6_C51778CC6A83_1_HS_9_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673A98FA_69CF_F921_41CD_396ED5910F31",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88007D5_D2C0_B763_41B1_0BBE0070E736_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673FC909_69CF_F8E2_41C4_E2DAF44B9DBD",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673C7909_69CF_F8E2_41C6_5DB864DB4588",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673C1909_69CF_F8E2_4160_F3FE1417EA5D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_7_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673FE909_69CF_F8E2_41CB_6E757AE1B2A1",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_8_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673F9909_69CF_F8E2_41D4_09CDBA8F8059",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D883E764_D2C0_7721_41D1_47B3283B1800_1_HS_9_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673F4909_69CF_F8E2_41BA_BAE02CDE4705",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673EE909_69CF_F8E2_41B4_739E34534FBF",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88017A8_D2C0_5721_41DE_D4C99448BDC0_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673EA909_69CF_F8E2_419E_553D8EE53850",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673D58FA_69CF_F921_41D5_8FC95231CD01",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88037ED_D2C3_D723_41CE_A18E468C76F5_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673D2909_69CF_F8E2_41D3_8B359F6E07A7",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D883E749_D2C3_D763_41B0_80B9D461AC60_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673CC909_69CF_F8E2_41CF_8F83824AF061",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_1_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673A58FA_69CF_F921_41D8_35F1D0479D27",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_1_HS_7_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673A08FA_69CF_F921_41D9_8C56A27672C3",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D974C7CF_D2C0_577F_41E6_458BD0D9E248_1_HS_8_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673DB8FA_69CF_F921_41B1_278FAC84D681",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673F2909_69CF_F8E2_41D8_0D520ED8B456",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673EC909_69CF_F8E2_41D7_837E65C26723",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D88E56E7_D2C0_C92F_41E2_153D80A9D5BE_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_673E8909_69CF_F8E2_41C1_F36DE40A3C67",
 "colCount": 4
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_4F2FEEE5_426C_F76E_41D0_0F016B4E24B4",
 "children": [
  "this.ViewerAreaLabeled_4F2E1EE5_426C_F76E_41CD_66DECEA2AEA4",
  "this.IconButton_4F2E0EE5_426C_F76E_41A1_8E994DC89608",
  "this.IconButton_4F2E3EE5_426C_F76E_41C7_63EE6A73DF61",
  "this.IconButton_4F2E5EE5_426C_F76E_41C9_FA65F4DE6885"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "visible",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 }
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_54B46676_4031_259F_41C0_7E4B81DFBB7D",
 "children": [
  "this.IconButton_54B47676_4031_259F_41C9_1A251F452E46",
  "this.Label_5424C213_403F_3D95_41C9_2A0B660DFFD3"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "borderRadius": 0,
 "shadow": false,
 "class": "Container",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "itemMinHeight": 50,
 "itemThumbnailBorderRadius": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelFontFamily": "Oswald",
 "id": "ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5",
 "left": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "rollOverItemLabelFontColor": "#04A3E1",
 "backgroundOpacity": 0,
 "width": "100%",
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingLeft": 3,
 "itemOpacity": 1,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "shadow": false,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMinWidth": 50,
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "playList": "this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5_playlist",
 "propagateClick": false,
 "paddingRight": 70,
 "scrollBarOpacity": 0.5,
 "height": "92%",
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarColor": "#04A3E1",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "itemHeight": 160,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "minHeight": 1,
 "rollOverItemThumbnailShadow": true,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontSize": 16,
 "itemThumbnailShadow": false,
 "itemThumbnailHeight": 125,
 "selectedItemThumbnailShadow": true,
 "borderRadius": 5,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemBackgroundColorDirection": "vertical",
 "bottom": -0.2,
 "class": "ThumbnailGrid",
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemWidth": 220,
 "minWidth": 1,
 "itemMaxWidth": 1000,
 "itemPaddingBottom": 3,
 "click": "this.setComponentVisibility(this.Container_54B4B676_4031_259F_41BD_70DCE7409EBC, false, 0, this.effect_52E7224D_4033_DD8D_41C3_3969A7CCF47F, 'hideEffect', false); this.setComponentVisibility(this.Container_54B41676_4031_259F_419E_182CD1CC50EB, false, 0, this.effect_52E7224D_4033_DD8D_41C3_3969A7CCF47F, 'hideEffect', false); this.setComponentVisibility(this.Container_54B46676_4031_259F_41C0_7E4B81DFBB7D, false, 0, this.effect_52E7224D_4033_DD8D_41C3_3969A7CCF47F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_54B47676_4031_259F_41C9_1A251F452E46, false, 0, this.effect_52E7224D_4033_DD8D_41C3_3969A7CCF47F, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailGrid_54B45676_4031_259F_41C5_C516CE210FC5, false, 0, this.effect_52E7224D_4033_DD8D_41C3_3969A7CCF47F, 'hideEffect', false)",
 "gap": 26,
 "itemLabelFontStyle": "italic",
 "paddingTop": 10,
 "itemMaxHeight": 1000,
 "paddingLeft": 70,
 "paddingBottom": 70,
 "itemMode": "normal",
 "itemLabelPosition": "bottom",
 "scrollBarMargin": 2,
 "itemLabelHorizontalAlign": "center"
},
{
 "minHeight": 1,
 "id": "WebFrame_52F79147_4263_4AAA_41CA_A4E674E73F24",
 "width": "100%",
 "insetBorder": false,
 "backgroundOpacity": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.028811101849!2d36.90820761526472!3d-1.139847735806706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f39efdcb6f491%3A0x635a391a7a6a364f!2sUnity%20Homes!5e0!3m2!1sen!2ske!4v1654675011245!5m2!1sen!2ske",
 "borderRadius": 0,
 "shadow": false,
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "minHeight": 50,
 "id": "IconButton_52F7B147_4263_4AAA_41BC_577B47A11AA5",
 "maxWidth": 60,
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "rollOverIconURL": "skin/IconButton_52F7B147_4263_4AAA_41BC_577B47A11AA5_rollover.jpg",
 "iconURL": "skin/IconButton_52F7B147_4263_4AAA_41BC_577B47A11AA5.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 60,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_52F75147_4263_4AAA_41BF_0CF83D96A2C8, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_52F7B147_4263_4AAA_41BC_577B47A11AA5_pressed.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "minHeight": 1,
 "id": "Container_5106E121_4223_4AE6_419E_555F9827BFAC",
 "children": [
  "this.Image_56CCB4B1_4225_4BE6_41C1_7C1F7B64F106",
  "this.IconButton_51060121_4223_4AE6_41BD_74EE037136C9"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "width": "94.768%",
 "overflow": "scroll",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "absolute",
 "class": "Container",
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "-left"
 }
},
{
 "minHeight": 1,
 "id": "Image_5A8B522C_4223_CEFE_41CC_6E94939EAC48",
 "left": "0%",
 "maxWidth": 1228,
 "width": "89.695%",
 "backgroundOpacity": 0,
 "url": "skin/Image_5A8B522C_4223_CEFE_41CC_6E94939EAC48.png",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "bottom": "-0.05%",
 "class": "Image",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 976,
 "height": "94.845%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image34605"
 }
},
{
 "borderRadius": 0,
 "data": {
  "name": "X"
 },
 "minHeight": 50,
 "id": "IconButton_54346891_4224_FBA6_41C7_A832095CE904",
 "maxWidth": 60,
 "width": "5.376%",
 "backgroundOpacity": 0,
 "right": "0.45%",
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_54346891_4224_FBA6_41C7_A832095CE904_pressed_rollover.jpg",
 "horizontalAlign": "center",
 "top": "0.85%",
 "iconURL": "skin/IconButton_54346891_4224_FBA6_41C7_A832095CE904.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 60,
 "height": "7.286%",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_54349891_4224_FBA6_41D0_211EB714D23F, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_54346891_4224_FBA6_41C7_A832095CE904_pressed.jpg",
 "paddingTop": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_54346891_4224_FBA6_41C7_A832095CE904_rollover.jpg",
 "borderSize": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false
},
{
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 },
 "minHeight": 50,
 "id": "IconButton_4F2E5EE5_426C_F76E_41C9_FA65F4DE6885",
 "maxWidth": 60,
 "width": "10%",
 "backgroundOpacity": 0,
 "right": 20,
 "shadow": false,
 "horizontalAlign": "right",
 "top": 20,
 "iconURL": "skin/IconButton_4F2E5EE5_426C_F76E_41C9_FA65F4DE6885.jpg",
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "top",
 "paddingRight": 0,
 "maxHeight": 60,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_4F2E4EE5_426C_F76E_41CB_17BB9D5E8FDB, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_4F2E5EE5_426C_F76E_41C9_FA65F4DE6885_pressed.jpg",
 "paddingTop": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_4F2E5EE5_426C_F76E_41C9_FA65F4DE6885_rollover.jpg",
 "borderSize": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false
},
{
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 },
 "minHeight": 50,
 "id": "IconButton_54B47676_4031_259F_41C9_1A251F452E46",
 "maxWidth": 60,
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_54B47676_4031_259F_41C9_1A251F452E46_pressed_rollover.jpg",
 "horizontalAlign": "right",
 "top": 20,
 "iconURL": "skin/IconButton_54B47676_4031_259F_41C9_1A251F452E46.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "top",
 "paddingRight": 0,
 "maxHeight": 60,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_54B4B676_4031_259F_41BD_70DCE7409EBC, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_54B47676_4031_259F_41C9_1A251F452E46_pressed.jpg",
 "paddingTop": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_54B47676_4031_259F_41C9_1A251F452E46_rollover.jpg",
 "borderSize": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false
},
{
 "fontFamily": "Gabriola",
 "verticalAlign": "middle",
 "data": {
  "name": "Label21016"
 },
 "minHeight": 1,
 "id": "Label_5424C213_403F_3D95_41C9_2A0B660DFFD3",
 "left": "6.87%",
 "backgroundOpacity": 0,
 "width": "25.332%",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "bottom": "0%",
 "class": "Label",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "47.857%",
 "fontSize": "5vmin",
 "minWidth": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "paddingLeft": 0,
 "text": "PANORAMA LIST",
 "borderSize": 0,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#0099FF"
},
{
 "minHeight": 1,
 "id": "Image_56CCB4B1_4225_4BE6_41C1_7C1F7B64F106",
 "maxWidth": 1261,
 "width": "93.397%",
 "backgroundOpacity": 0,
 "right": "0.4%",
 "url": "skin/Image_56CCB4B1_4225_4BE6_41C1_7C1F7B64F106.png",
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "top": "0%",
 "propagateClick": false,
 "class": "Image",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 951,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image25843"
 }
},
{
 "borderRadius": 0,
 "data": {
  "name": "X"
 },
 "minHeight": 50,
 "id": "IconButton_51060121_4223_4AE6_41BD_74EE037136C9",
 "maxWidth": 60,
 "width": "4.773%",
 "backgroundOpacity": 0,
 "right": "2.23%",
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_51060121_4223_4AE6_41BD_74EE037136C9_pressed_rollover.jpg",
 "horizontalAlign": "center",
 "top": "0.49%",
 "iconURL": "skin/IconButton_51060121_4223_4AE6_41BD_74EE037136C9.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxHeight": 60,
 "height": "6.072%",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_51063121_4223_4AE6_41B5_423F16E9E766, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_51060121_4223_4AE6_41BD_74EE037136C9_pressed.jpg",
 "paddingTop": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_51060121_4223_4AE6_41BD_74EE037136C9_rollover.jpg",
 "borderSize": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false
}],
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "defaultVRPointer": "laser",
 "scripts": {
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getKey": function(key){  return window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "downloadEnabled": false,
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
