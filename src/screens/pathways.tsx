const imgIconSparkle = "/assets/2689525e-806d-418b-ac9d-1086a2d0fa66.svg";
const imgWifi = "/assets/a78d2301-81fe-468b-8d97-a3ffd4b752ce.svg";
const imgPhotoDailyRoutine = "/assets/11ca4d57-b7f2-42c9-b66e-b39790b07082.png";
const imgPhotoStayActive = "/assets/aa55fd8e-1ba8-4d54-a06a-b39a74b065e2.png";
const imgPhotoMeetPeople = "/assets/c9a6efd3-5af8-4d0b-b324-d763dfaf2b58.png";
const imgIconSun = "/assets/c04fcb60-ecb1-4a70-821e-950bfb6fa11a.svg";
const imgIconChevRight = "/assets/70a24cd9-9973-4551-a7cb-1e5fa77177f3.svg";
const imgIconBolt = "/assets/5076f15f-5481-4f2e-9111-9a79e427c1ed.svg";
const imgIconUsers = "/assets/343cf6ab-0bc3-4f2e-a571-d6c111ea57e6.svg";
const imgIconHome = "/assets/1463c336-9258-4ea3-8711-e7b7b92da5d4.svg";
const imgIconCompass = "/assets/fd35bae7-2d6d-407c-a1c9-856a4f2303b9.svg";
const imgIconSparkle1 = "/assets/5a046b77-b600-4a49-b55d-f3155b1a9173.svg";
const imgIconInbox = "/assets/8615aed0-e4f6-4f63-aca1-57306b31e99d.svg";
const imgIconUser = "/assets/ea018d7b-525d-41d4-88a4-27000123d821.svg";

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

export default function Component5PersonalPathways() {
  return (
    <div className="s16" data-node-id="2004:1103" data-name="5 · Personal Pathways">
      <StatusBar className="s19" />
      <div className="s103" data-node-id="2004:1118" data-name="Content">
        <div className="s48" data-node-id="2004:1119" data-name="Title row">
          <p className="s49" data-node-id="2004:1123">
            Your pathways
          </p>
          <AiButton className="s26" label="Why these?" />
        </div>
        <div className="s104" data-node-id="2004:1129" data-name="Tabs">
          <div className="s105" data-node-id="2004:1130" data-name="Tab · Pathways">
            <p className="s96" data-node-id="2004:1131">
              Pathways
            </p>
          </div>
          <div className="s106" data-node-id="2004:1132" data-name="Tab · Saved · 2">
            <p className="s89" data-node-id="2004:1133">
              Saved · 2
            </p>
          </div>
        </div>
        <div className="s107" data-node-id="2004:1134" data-name="Pathway · Daily Routine">
          <div className="s108" data-node-id="2004:1135" data-name="Photo · Daily Routine">
            <img alt="" className="s109" src={imgPhotoDailyRoutine} />
          </div>
          <div className="s110" data-node-id="2004:1136" data-name="Text">
            <p className="s111" data-node-id="2004:1137">
              01
            </p>
            <p className="s112" data-node-id="2004:1138">
              Daily Routine
            </p>
            <div className="s7" data-node-id="2004:1139" data-name="Sub">
              <div className="s113" data-node-id="2004:1140" data-name="icon/sun">
                <img alt="" className="s4" src={imgIconSun} />
              </div>
              <p className="s34" data-node-id="2004:1143">
                Feel better day to day
              </p>
            </div>
          </div>
          <div className="s114" data-node-id="2004:1144" data-name="Open">
            <div className="s41" data-node-id="2004:1145" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight} />
            </div>
          </div>
        </div>
        <div className="s107" data-node-id="2004:1147" data-name="Pathway · Stay Active">
          <div className="s108" data-node-id="2004:1148" data-name="Photo · Stay Active">
            <img alt="" className="s109" src={imgPhotoStayActive} />
          </div>
          <div className="s110" data-node-id="2004:1149" data-name="Text">
            <p className="s111" data-node-id="2004:1150">
              02
            </p>
            <p className="s112" data-node-id="2004:1151">
              Stay Active
            </p>
            <div className="s7" data-node-id="2004:1152" data-name="Sub">
              <div className="s113" data-node-id="2004:1153" data-name="icon/bolt">
                <img alt="" className="s4" src={imgIconBolt} />
              </div>
              <p className="s34" data-node-id="2004:1155">
                Move more, feel stronger
              </p>
            </div>
          </div>
          <div className="s114" data-node-id="2004:1156" data-name="Open">
            <div className="s41" data-node-id="2004:1157" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight} />
            </div>
          </div>
        </div>
        <div className="s107" data-node-id="2004:1159" data-name="Pathway · Meet People">
          <div className="s108" data-node-id="2004:1160" data-name="Photo · Meet People">
            <img alt="" className="s109" src={imgPhotoMeetPeople} />
          </div>
          <div className="s110" data-node-id="2004:1161" data-name="Text">
            <p className="s111" data-node-id="2004:1162">
              03
            </p>
            <p className="s112" data-node-id="2004:1163">
              Meet People
            </p>
            <div className="s7" data-node-id="2004:1164" data-name="Sub">
              <div className="s113" data-node-id="2004:1165" data-name="icon/users">
                <img alt="" className="s4" src={imgIconUsers} />
              </div>
              <p className="s34" data-node-id="2004:1169">
                Find your community
              </p>
            </div>
          </div>
          <div className="s114" data-node-id="2004:1170" data-name="Open">
            <div className="s41" data-node-id="2004:1171" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight} />
            </div>
          </div>
        </div>
        <Button className="s28" label="Explore activities" />
      </div>
      <div className="s115" data-node-id="2004:1175" data-name="Navigation bar">
        <a className="s116" data-node-id="I2004:1175;2004:651" data-name="Home tab">
          <div className="s46" data-node-id="I2004:1175;2004:652" data-name="icon/home">
            <img alt="" className="s4" src={imgIconHome} />
          </div>
          <p className="s117" data-node-id="I2004:1175;2004:654">
            Home
          </p>
        </a>
        <a className="s118" data-node-id="I2004:1175;2004:655" data-name="Explore tab">
          <div className="s46" data-node-id="I2004:1175;2004:656" data-name="icon/compass">
            <img alt="" className="s4" src={imgIconCompass} />
          </div>
          <p className="s119" data-node-id="I2004:1175;2004:659">
            Explore
          </p>
        </a>
        <div className="s120" data-node-id="I2004:1175;2004:660" data-name="Compass (AI)">
          <div className="s121" data-node-id="I2004:1175;2004:661" data-name="AI circle">
            <div className="s33" data-node-id="I2004:1175;2004:662" data-name="icon/sparkle">
              <img alt="" className="s4" src={imgIconSparkle1} />
            </div>
          </div>
          <p className="s122" data-node-id="I2004:1175;2004:665">
            Compass
          </p>
        </div>
        <div className="s123" data-node-id="I2004:1175;2004:666" data-name="Inbox tab">
          <div className="s46" data-node-id="I2004:1175;2004:667" data-name="icon/inbox">
            <img alt="" className="s4" src={imgIconInbox} />
          </div>
          <p className="s122" data-node-id="I2004:1175;2004:670">
            Inbox
          </p>
        </div>
        <a className="s116" data-node-id="I2004:1175;2004:671" data-name="Me tab">
          <div className="s46" data-node-id="I2004:1175;2004:672" data-name="icon/user">
            <img alt="" className="s4" src={imgIconUser} />
          </div>
          <p className="s117" data-node-id="I2004:1175;2004:675">
            Me
          </p>
        </a>
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
