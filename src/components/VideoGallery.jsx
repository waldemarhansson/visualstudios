import React, { lazy, Suspense, useState } from "react"
import VideoPlayer from "./VideoPlayer";
import VimeoVideoGallery from "./VimeoVideoGallery";
const LazyVideoWithPoster = lazy(() => import('./VideoWithPoster'));
import VideoWithPoster from "./VideoWithPoster";
import arkPoster from "../assets/thumb-2.jpg"



const VideoGallery = () => {
    const ark = arkPoster
    const poster = "https://i.vimeocdn.com/video/1793385943-1fc74352d57ac5fb94b9c81639a214c215ae50b08fe42af86bf00eb898d0d3db-d_1920x1080"
    const BernadotteKylberg = "https://i.vimeocdn.com/video/1742059276-138f42aa1f3d6740fbdaa47000ec39432de0b70df519ca031d6b57adfc404cf8-d_1920x1080"
    const ArmandMemira = "https:\/\/i.vimeocdn.com\/video\/1380992879-d5fcbbcd356a1644548e2f99b5a1e59e2acb29eda98eef0a7d5364c524166574-d_640"
    const ElineaYou = "https://i.vimeocdn.com/video/1483357440-2f150fcb8fadb96ce4224bcad47025bbd99db5291bb0cbcbe796bbdf8d221fc0-d_1920x1080"
    const Kentaro = "https://i.vimeocdn.com/video/1455798545-5e5954a060efd98291735f773489191b714f5c41f99145c0a0fa397292b0f273-d_1920x1080"
    const Kundkraft = "https://i.vimeocdn.com/video/1034549648-15ea33fbdd8014240526befc7bc7c4f230c9038e8a154862044172282eeccc12-d_1920x1080"
    const SvenskaSpel = "https:\/\/i.vimeocdn.com\/video\/1217105317-ef3f4736a53cac4e9b4d0380b9de4f99ffcbce67b0c5596944c0cea4fc083828-d_640"
    const Kundkraft2 = "https://i.vimeocdn.com/video/977588542-8563196ae50e5792daedf2d2704ce7c9c19935684d87b134156c48c4df118ad4-d_1920x1080"
    const RickardSöderberg = "https://i.vimeocdn.com/video/1793383700-9dfcc6e5b288d743feb57c1672bbca89e10862d81f6844f266cf167bc9f03770-d_1920x1080"
    const Berlutti = "https:\/\/i.vimeocdn.com\/video\/767554571-d7ef5f3af5088ae4100dbf1852e846717282998a32fdde78a538db0ffa8ff8cb-d_640"
    const BerluttiTwilight = "https:\/\/i.vimeocdn.com\/video\/750896747-5b612bee048dd022e39f4ce320a5e4e3f96c713e144b74f86100b93398ecc534-d_640"
    const Inabo = "https://i.vimeocdn.com/video/751242983-0b453e217308a7d272aad90c254f87ebbd009f749b10ca31997ccd98a4529d11-d_1920x1080"





    return (

        <div className="videogallery-wrapper">
            <VideoWithPoster poster={arkPoster} videoText={"Client Ark Sports ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/1022876655/rendition/1080p/file.mp4?loc=external&log_user=0&signature=17897f509ace88123cf68f80b69dbf870968c00dda217e3681041d31ce357d00"}></VideoWithPoster>
            <VideoWithPoster poster={BernadotteKylberg} videoText={"Client Bernadotte Kylberg ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/876839330/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9530692ac98c88194bc396d4b4034b0b717a290a54ac5dbf0901b449dc9a4ceb"}></VideoWithPoster>
            <VideoWithPoster poster={ArmandMemira} text2={"Feat Armand Duplantis ///"} videoText={"Client Memira ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/671087058/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2de22f593f056ee904be458afc85e1700af9dfc923b3cd47b3d1416180ed3ffc"}></VideoWithPoster>
            <VideoWithPoster poster={ElineaYou} videoText={"You ///"} text2={"Feat Elinea ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/737185087/rendition/1080p/file.mp4?loc=external&log_user=0&signature=ebeda3593841b3ec906aa18464f0cbf618d54f36638bf92189fefecfd247ab2c"}></VideoWithPoster>

            <Suspense>
                <VideoWithPoster poster={poster} videoText={"Client Memira ///"} text2={"Feat Samuel Fröhler ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/818372812/rendition/1080p/file.mp4?loc=external&log_user=0&signature=95457a1e29f052999671dca36cd66e5ec4f02b9eecc2eae21a23287e4451b9f2"}></VideoWithPoster>
                <LazyVideoWithPoster poster={Kentaro} videoText={"Kentaro - Diary of a broken heart ///"} text2={"Feat Kentaro Mitsumori & Katja Lobas ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/722941004/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0307a1c33f12bd42a5a82cdd9895e374bb8c452514a668c04d0459876a44d26e"}></LazyVideoWithPoster>
                <LazyVideoWithPoster poster={Kundkraft} videoText={"Client Kundkraft ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/499970486/rendition/1080p/file.mp4?loc=external&log_user=0&signature=60fd682e58bf89017cd6e9cf52315aaa75c5d7864de1c2e067e62a572f0272e9"}></LazyVideoWithPoster>
                <LazyVideoWithPoster poster={SvenskaSpel} videoText={"Client Svenska Spel ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/588321114/rendition/1080p/file.mp4?loc=external&log_user=0&signature=4b2e56ddfcb8104d9fdac8965d628fef5bc83e3e6a34011d073cc42997995494"}></LazyVideoWithPoster>
                <LazyVideoWithPoster poster={Kundkraft2} videoText={"Client Kundkraft ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/469564749/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2960ba24c1040f241c01a51b597ca0d46b72a9244e05aa9004c391fb6a487cb7"}></LazyVideoWithPoster>
                <LazyVideoWithPoster poster={RickardSöderberg} videoText={"Client Memira ///"} text2={"Feat Rickard Söderberg ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/795208925/rendition/1080p/file.mp4?loc=external&log_user=0&signature=f80309c16c02d296eea312b810bc63639e7f75835e7f1c8f6e3a85cf16ad3110"}></LazyVideoWithPoster>
                <LazyVideoWithPoster poster={Inabo} videoText={"Client Inabo ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/304331014/rendition/1080p/file.mp4?loc=external&log_user=0&signature=7740585c14f39796ad5f7b01890235e599cae899aee9359fb285a1f05869ff1c"}></LazyVideoWithPoster>
                <LazyVideoWithPoster poster={Berlutti} videoText={"Client Berluti ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/324207415/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2979df8f62e770258b67f2e81e958e67b0bc96cec70415803f2ce782a291e9e1"}></LazyVideoWithPoster>
                <LazyVideoWithPoster poster={BerluttiTwilight} videoText={"Client Berluti ///"} videoSrc={"https://player.vimeo.com/progressive_redirect/playback/310333399/rendition/1080p/file.mp4?loc=external&log_user=0&signature=228b4ec0b1e40c8f83734bec81d30533dd182d351c298595abb21d108e0f394d"}></LazyVideoWithPoster>

            </Suspense>


        </div>

    )

}
export default VideoGallery