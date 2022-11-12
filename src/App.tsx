import React, { useEffect } from "react";
import "./App.css";
import SocialLink from "./SocialLink";
import {
  mdiCoffee,
  mdiDice3Outline,
  mdiEmail,
  mdiFeather,
  mdiGithub,
  mdiMastodon,
  mdiMicrosoftXbox,
  mdiMovie,
  mdiPrinter3d,
  mdiSonyPlaystation,
  mdiSteam,
  mdiTwitter,
} from "@mdi/js";

function App() {
  return (
    <div className="App">
      <SocialLink
        siteName="E-Mail"
        color="#fff65d"
        icon={mdiEmail}
        accountName="henlo@frdnspnzr.de"
        url="mailto:henlo@frdnspnzr.de"
      />
      <SocialLink
        siteName="Threema"
        color="#04742c"
        icon={mdiLock}
        accountName="RH2T3YYA"
        url="https://threema.id/RH2T3YYA"
      />
      <SocialLink
        siteName="Blog"
        color="#c80815"
        icon={mdiFeather}
        accountName="blog.frdnspnzr.de"
        url="https://blog.frdnspnzr.de/"
      />
      <SocialLink
        siteName="Twitter"
        color="#1DA1F2"
        icon={mdiTwitter}
        accountName="@Frdnspnzr"
        url="https://twitter.com/Frdnspnzr"
      />
      <SocialLink
        siteName="Mastodon"
        color="#56a7e1"
        icon={mdiMastodon}
        accountName="@Frdnspnzr@dice.camp"
        url="https://dice.camp/@Frdnspnzr"
      />
      <SocialLink
        siteName="Printables"
        color="#fa6831"
        icon={mdiPrinter3d}
        accountName="Frdnspnzr"
        url="https://www.printables.com/social/219395-frdnspnzr/about"
      />
      <SocialLink
        siteName="GitHub"
        color="#fdfdfd"
        icon={mdiGithub}
        accountName="Friedenspanzer"
        url="https://github.com/Friedenspanzer"
      />
      <SocialLink
        siteName="Ko-fi"
        color="#d95151"
        icon={mdiCoffee}
        accountName="Frdnspnzr"
        url="https://ko-fi.com/frdnspnzr"
      />
      <SocialLink
        siteName="Xbox Live"
        color="#107C10"
        icon={mdiMicrosoftXbox}
        accountName="Frdnspnzr"
        url="https://live.xbox.com/de-DE/Profile?gamertag=Frdnspnzr"
      />
      <SocialLink
        siteName="PSN"
        color="#0070d1"
        icon={mdiSonyPlaystation}
        accountName="Friedenspanzer23"
      />
      <SocialLink
        siteName="Steam"
        color="#c5c3c0"
        icon={mdiSteam}
        accountName="Frdnspnzr"
        url="https://steamcommunity.com/id/friedenspanzer/"
      />
      <SocialLink
        siteName="Letterboxd"
        color="#00a11d"
        icon={mdiMovie}
        accountName="Frdnspnzr"
        url="https://letterboxd.com/Friedenspanzer/"
      />
      <SocialLink
        siteName="BoardGameGeek"
        color="#ff5100"
        icon={mdiDice3Outline}
        accountName="Friedenspanzer"
        url="https://boardgamegeek.com/user/Friedenspanzer"
      />
      <div className="bottom"><a href="https://blog.frdnspnzr.de/contact/">Impressum</a> ◆ <a href="https://github.com/Friedenspanzer/henlo">Source</a>
      </div>
    </div>
  );
}

export default App;
