const imgIconSparkle = "/assets/5c77fc2e-f958-4368-8ca1-169a9e58c0bc.svg";
const imgWifi = "/assets/dd3227bc-dc34-4b52-b9d4-734e49367b71.svg";
const imgHeroPhoto = "/assets/7547dca9-3a1a-493e-94d8-1822e419e418.png";
const imgIconSprout = "/assets/3cfade3e-c748-49d1-b4b2-1f34b96b1f20.svg";
const imgIconGlobe = "/assets/6fde0ecd-7fcd-43d4-8480-8ba1bfc2e08b.svg";
const imgIconText = "/assets/c689d958-b56a-44e4-aedc-cd1e0fcc8277.svg";
const imgIconHelp = "/assets/31147bea-2622-47cf-abf1-c544e1507a04.svg";

type HomeIndicatorProps = {
  className?: string;
  mode?: "Dark";
};

function HomeIndicator({ className, mode = "Dark" }: HomeIndicatorProps) {
  return (
    <div className={className || "s36"} data-node-id="2004:590">
      <div className="s0" data-node-id="2004:589" data-name="Bar" />
    </div>
  );
}

type ButtonProps = {
  className?: string;
  label?: string;
  style?: "Primary" | "Secondary";
};

function Button({ className, label = "Get Started", style = "Primary" }: ButtonProps) {
  const isSecondary = style === "Secondary";
  return (
    <div data-action={label} className={className || (isSecondary ? "s39" : "s40")} id={isSecondary ? "node-2004_618" : "node-2004_615"}>
      {style === "Primary" && (
        <p className="s1" data-node-id="2004:614">
          {label}
        </p>
      )}
      {isSecondary && (
        <p className="s2" data-node-id="2004:617">
          {label}
        </p>
      )}
    </div>
  );
}

type AiButtonProps = {
  className?: string;
  label?: string;
  style?: "Chip";
};

function AiButton({ className, label = "Ask Compass", style = "Chip" }: AiButtonProps) {
  return (
    <div data-action={label} className={className || "s37"} data-node-id="2004:606">
      <div className="s3" data-node-id="2004:602" data-name="icon/sparkle">
        <img alt="" className="s4" src={imgIconSparkle} />
      </div>
      <p className="s5" data-node-id="2004:605">
        {label}
      </p>
    </div>
  );
}

type StatusBarProps = {
  className?: string;
  mode?: "Dark";
};

function StatusBar({ className, mode = "Dark" }: StatusBarProps) {
  return (
    <div className={className || "s38"} data-node-id="2004:571">
      <p className="s6" data-node-id="2004:558">
        9:41
      </p>
      <div className="s7" data-node-id="2004:559" data-name="Indicators">
        <div className="s8" data-node-id="2004:560" data-name="Signal">
          <div className="s9" data-node-id="2004:561" data-name="Rectangle" />
          <div className="s10" data-node-id="2004:562" data-name="Rectangle" />
          <div className="s11" data-node-id="2004:563" data-name="Rectangle" />
          <div className="s12" data-node-id="2004:564" data-name="Rectangle" />
        </div>
        <div className="s13" data-node-id="2004:565" data-name="Wifi">
          <img alt="" className="s4" src={imgWifi} />
        </div>
        <div className="s14" data-node-id="2004:569" data-name="Battery">
          <div className="s15" data-node-id="2004:570" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

export default function Component1WelcomeAccess() {
  return (
    <div className="s16" data-node-id="2004:733" data-name="1 · Welcome & Access">
      <div className="s17" data-node-id="2004:734" data-name="Hero photo">
        <img alt="" className="s18" src={imgHeroPhoto} />
      </div>
      <StatusBar className="s19" />
      <div className="s20" data-node-id="2004:749" data-name="Content">
        <div className="s21" data-node-id="2004:750" data-name="Logo">
          <div className="s22" data-node-id="2004:751" data-name="Mark">
            <div className="s23" data-node-id="2004:752" data-name="icon/sprout">
              <img alt="" className="s4" src={imgIconSprout} />
            </div>
          </div>
          <p className="s24" data-node-id="2004:756">
            Next Chapter
          </p>
        </div>
        <p className="s25" data-node-id="2004:757">
          Shape what comes next.
        </p>
        <AiButton className="s26" label="AI-assisted · human supported" />
        <div className="s27" data-node-id="2004:763" data-name="Actions">
          <Button className="s28" />
          <Button className="s29" label="Sign In" style="Secondary" />
        </div>
        <p className="s30" data-node-id="2004:768">
          Explore as guest
        </p>
        <div className="s31" data-node-id="2004:769" data-name="Utilities">
          <div className="s32" data-node-id="2004:770" data-name="English">
            <div className="s33" data-node-id="2004:771" data-name="icon/globe">
              <img alt="" className="s4" src={imgIconGlobe} />
            </div>
            <p className="s34" data-node-id="2004:774">
              English
            </p>
          </div>
          <div className="s32" data-node-id="2004:775" data-name="Text size">
            <div className="s33" data-node-id="2004:776" data-name="icon/text">
              <img alt="" className="s4" src={imgIconText} />
            </div>
            <p className="s34" data-node-id="2004:778">
              Text size
            </p>
          </div>
          <div className="s32" data-node-id="2004:779" data-name="Help">
            <div className="s33" data-node-id="2004:780" data-name="icon/help">
              <img alt="" className="s4" src={imgIconHelp} />
            </div>
            <p className="s34" data-node-id="2004:783">
              Help
            </p>
          </div>
        </div>
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
