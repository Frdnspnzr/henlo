import React from "react";
import "./socialLink.css";
import Icon from "@mdi/react";

interface SocialLinkProps {
  icon: string;
  accountName: string;
  siteName: string;
  url?: string;
  color: string;
}

export default function SocialLink(props: SocialLinkProps) {
  const container = (
    <div className="social-link" style={{ backgroundColor: props.color }}>
      <h1>{props.siteName}</h1>
      <Icon path={props.icon} size={4}></Icon>
      <h3>{props.accountName}</h3>
    </div>
  );
  if (!!props.url) {
    return <a href={props.url} target="_blank" rel="noopener noreferrer">{container}</a>;
  } else {
    return container;
  }
}
