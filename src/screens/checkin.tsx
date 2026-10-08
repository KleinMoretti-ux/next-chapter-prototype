const imgIconSparkle = "/assets/1d178f87-5c81-4c9d-9017-d63a7b7c463d.svg";
const imgIconSparkle1 = "/assets/308fddf7-db88-4520-b1cc-58e801faa09c.svg";
const imgWifi = "/assets/84ae1d5f-2045-42af-84d2-a01b679f2056.svg";
const imgNeedHealth = "/assets/48a8ba30-2d75-4945-a468-4ac9cffd60fb.png";
const imgNeedLearning = "/assets/6b9f8cd6-4837-4b08-a0ac-b2afafe272c2.png";
const imgNeedCommunity = "/assets/b43f49bb-fe73-4370-b905-2f697d7ff4c5.png";
const imgNeedPurpose = "/assets/0868d799-6ec0-4ee2-84f1-29215d2a6b52.png";
const imgIconChevLeft = "/assets/bf6602bd-2a7c-4d66-b618-71609a0b3c3d.svg";
const imgIconHeart = "/assets/11f6a49d-b547-4734-b01b-a92a7b8e7218.svg";
const imgIconBook = "/assets/28bd0bbb-07c3-4965-93b3-cd7a56fa4a1e.svg";
const imgIconCheck = "/assets/46aa766f-a160-4c17-81f0-1530f25d4f9f.svg";
const imgIconUsers = "/assets/4094f5c9-f160-42e7-9f68-e7b0c29b40fd.svg";
const imgIconSprout = "/assets/f7322f4c-d43a-41b9-93f1-951d3ef4c108.svg";

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
  style?: "Primary";
};

function Button({ className, label = "Get Started", style = "Primary" }: ButtonProps) {
  return (
    <div data-action={label} className={className || "s83"} data-node-id="2004:615">
      <p className="s1" data-node-id="2004:614">
        {label}
      </p>
    </div>
  );
}

type AiButtonProps = {
  className?: string;
  label?: string;
  style?: "Pill" | "Chip";
};

function AiButton({ className, label = "Ask Compass", style = "Pill" }: AiButtonProps) {
  const isChip = style === "Chip";
  return (
    <div data-action={label} className={className || (isChip ? "s101" : "s102")} id={isChip ? "node-2004_606" : "node-2004_600"}>
      <div className={(isChip ? "s3" : "s41")} id={isChip ? "node-2004_602" : "node-2004_596"} data-name="icon/sparkle">
        <img alt="" className="s4" src={isChip ? imgIconSparkle1 : imgIconSparkle} />
      </div>
      {style === "Pill" && (
        <p className="s42" data-node-id="2004:599">
          {label}
        </p>
      )}
      {isChip && (
        <p className="s5" data-node-id="2004:605">
          {label}
        </p>
      )}
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

export default function Component3NeedsCheckIn() {
  return (
    <div className="s16" data-node-id="2004:897" data-name="3 · Needs Check-in">
      <StatusBar className="s19" />
      <div className="s43" data-node-id="2004:912" data-name="Content">
        <div className="s85" data-node-id="2004:913" data-name="Header">
          <a className="s45" data-node-id="2004:914" data-name="Button · Back">
            <div className="s46" data-node-id="2004:915" data-name="icon/chevLeft">
              <img alt="" className="s4" src={imgIconChevLeft} />
            </div>
          </a>
          <div className="s86" data-node-id="2004:917" data-name="Progress 1 of 4">
            <div className="s87" data-node-id="2004:918" data-name="Step 1" />
            <div className="s88" data-node-id="2004:919" data-name="Step 2" />
            <div className="s88" data-node-id="2004:920" data-name="Step 3" />
            <div className="s88" data-node-id="2004:921" data-name="Step 4" />
          </div>
          <p className="s89" data-node-id="2004:922">
            Skip
          </p>
        </div>
        <p className="s90" data-node-id="2004:923">
          What matters to you now?
        </p>
        <div className="s21" data-node-id="2004:924" data-name="Sub">
          <p className="s91" data-node-id="2004:925">
            Pick up to two
          </p>
          <AiButton className="s26" label="Shapes your picks" style="Chip" />
        </div>
        <div className="s92" data-node-id="2004:931" data-name="Needs grid">
          <div className="s93" data-node-id="2004:932" data-name="Need · Health">
            <img alt="" className="s94" src={imgNeedHealth} />
            <div className="s95" data-node-id="2004:933" data-name="Label">
              <div className="s41" data-node-id="2004:934" data-name="icon/heart">
                <img alt="" className="s4" src={imgIconHeart} />
              </div>
              <p className="s96" data-node-id="2004:936">
                Health
              </p>
            </div>
          </div>
          <div className="s97" data-node-id="2004:937" data-name="Need · Learning">
            <img alt="" className="s94" src={imgNeedLearning} />
            <div className="s98" data-node-id="2004:938" data-name="Label">
              <div className="s41" data-node-id="2004:939" data-name="icon/book">
                <img alt="" className="s4" src={imgIconBook} />
              </div>
              <p className="s96" data-node-id="2004:942">
                Learning
              </p>
            </div>
            <div className="s99" data-node-id="2004:943" data-name="Selected">
              <div className="s41" data-node-id="2004:944" data-name="icon/check">
                <img alt="" className="s4" src={imgIconCheck} />
              </div>
            </div>
          </div>
          <div className="s97" data-node-id="2004:946" data-name="Need · Community">
            <img alt="" className="s94" src={imgNeedCommunity} />
            <div className="s98" data-node-id="2004:947" data-name="Label">
              <div className="s41" data-node-id="2004:948" data-name="icon/users">
                <img alt="" className="s4" src={imgIconUsers} />
              </div>
              <p className="s96" data-node-id="2004:952">
                Community
              </p>
            </div>
            <div className="s99" data-node-id="2004:953" data-name="Selected">
              <div className="s41" data-node-id="2004:954" data-name="icon/check">
                <img alt="" className="s4" src={imgIconCheck} />
              </div>
            </div>
          </div>
          <div className="s93" data-node-id="2004:956" data-name="Need · Purpose">
            <img alt="" className="s94" src={imgNeedPurpose} />
            <div className="s95" data-node-id="2004:957" data-name="Label">
              <div className="s41" data-node-id="2004:958" data-name="icon/sprout">
                <img alt="" className="s4" src={imgIconSprout} />
              </div>
              <p className="s96" data-node-id="2004:962">
                Purpose
              </p>
            </div>
          </div>
        </div>
        <div className="s100" data-node-id="2004:963" data-name="AI help">
          <AiButton className="s50" label="Not sure? Talk it through" />
        </div>
        <Button className="s28" label="Continue" />
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
