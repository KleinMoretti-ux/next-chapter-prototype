const imgIconSparkle = "/assets/0bdf3b4a-47e7-436d-b371-74fc4196ef88.svg";
const imgIconSparkle1 = "/assets/069bb732-1dc4-4463-8e98-33de3c7da2eb.svg";
const imgWifi = "/assets/a98cb90d-8c16-4c8e-bbe7-20e82c1c0a45.svg";
const imgPhotoCommunityGarden = "/assets/cc705cba-d7b9-4c60-bc6b-467cac28c2ff.png";
const imgPhotoDigitalSkills = "/assets/21644e75-8ed7-4eff-9707-28888cb7e769.png";
const imgIconSearch = "/assets/97f2a702-859e-45b1-8f8b-9af2af7e7b64.svg";
const imgIconMic = "/assets/5ed97e41-c713-4540-a45c-135dba4c0402.svg";
const imgIconStar = "/assets/e2c6c7c0-a86b-4447-9dce-7cc6b7ab4b9d.svg";
const imgIconBookmark = "/assets/f5403344-ce3d-4b52-9095-313ac85251c5.svg";
const imgIconShield = "/assets/aaffb17b-f1e9-430d-b136-4b38b07f0b6d.svg";
const imgIconPin = "/assets/c06c7277-6b0f-4873-a388-5c2f6c9cf8b2.svg";
const imgIconClock = "/assets/651a68d6-9dde-436d-890c-b4c4ae66029c.svg";
const imgIconX = "/assets/e47310de-6002-4413-8a53-5bf7e992a74f.svg";
const imgIconClock1 = "/assets/e82f9f6d-299e-4812-abcc-9ebbdc06faf3.svg";
const imgIconFilter = "/assets/87f9b722-12b8-42b1-9dee-ccc4b1e512c6.svg";
const imgIconCompare = "/assets/fe0a1aec-0f35-4416-8a30-0ac5fb3be928.svg";
const imgIconHome = "/assets/6f30eec0-6137-4815-9d5c-0983e58bf43b.svg";
const imgIconCompass = "/assets/5c95e66e-5c41-45a1-b0a4-cbf84b3dc0f4.svg";
const imgIconSparkle2 = "/assets/c26a14bb-bb9a-47b3-a589-5be88f922b38.svg";
const imgIconInbox = "/assets/c085f360-c73f-43f6-b61a-246a9587c6ce.svg";
const imgIconUser = "/assets/670a9da9-8bc7-4365-9a04-4a3f36f79e85.svg";

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

type AiButtonProps = {
  className?: string;
  label?: string;
  style?: "Chip" | "Circle";
};

function AiButton({ className, label = "Ask Compass", style = "Chip" }: AiButtonProps) {
  const isCircle = style === "Circle";
  return (
    <div data-action={label} className={className || (isCircle ? "s154" : "s101")} id={isCircle ? "node-2004_611" : "node-2004_606"}>
      <div className={(isCircle ? "s46" : "s3")} id={isCircle ? "node-2004_608" : "node-2004_602"} data-name="icon/sparkle">
        <img alt="" className="s4" src={isCircle ? imgIconSparkle1 : imgIconSparkle} />
      </div>
      {style === "Chip" && (
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

export default function Component6OpportunityHub() {
  return (
    <div className="s16" data-node-id="2004:1203" data-name="6 · Opportunity Hub">
      <StatusBar className="s19" />
      <div className="s124" data-node-id="2004:1218" data-name="Content">
        <div className="s125" data-node-id="2004:1219" data-name="Search row">
          <div className="s126" data-node-id="2004:1220" data-name="Search field">
            <div className="s33" data-node-id="2004:1221" data-name="icon/search">
              <img alt="" className="s4" src={imgIconSearch} />
            </div>
            <p className="s127" data-node-id="2004:1224">
              Search activities
            </p>
            <div className="s33" data-node-id="2004:1225" data-name="icon/mic">
              <img alt="" className="s4" src={imgIconMic} />
            </div>
          </div>
          <AiButton className="s128" style="Circle" />
        </div>
        <div className="s129" data-node-id="2004:1232" data-name="Categories">
          <div className="s130" data-node-id="2004:1233" data-name="Cat · Activities">
            <p className="s62" data-node-id="2004:1234">
              Activities
            </p>
          </div>
          <div className="s131" data-node-id="2004:1235" data-name="Cat · Courses">
            <p className="s60" data-node-id="2004:1236">
              Courses
            </p>
          </div>
          <div className="s131" data-node-id="2004:1237" data-name="Cat · Volunteer">
            <p className="s60" data-node-id="2004:1238">
              Volunteer
            </p>
          </div>
          <div className="s131" data-node-id="2004:1239" data-name="Cat · Flexible work">
            <p className="s60" data-node-id="2004:1240">
              Flexible work
            </p>
          </div>
        </div>
        <AiButton className="s26" label="3 picks match your goals" />
        <a className="s132" data-node-id="2004:1246" data-name="Card · Community Garden">
          <div className="s133" data-node-id="2004:1247" data-name="Photo · Community Garden">
            <img alt="" className="s134" src={imgPhotoCommunityGarden} />
            <div className="s135" data-node-id="2004:1248" data-name="Recommended">
              <div className="s3" data-node-id="2004:1249" data-name="icon/star">
                <img alt="" className="s4" src={imgIconStar} />
              </div>
              <p className="s136" data-node-id="2004:1251">
                For you
              </p>
            </div>
            <div className="s137" data-node-id="2004:1252" data-name="Save">
              <div className="s33" data-node-id="2004:1253" data-name="icon/bookmark">
                <img alt="" className="s4" src={imgIconBookmark} />
              </div>
            </div>
          </div>
          <div className="s138" data-node-id="2004:1255" data-name="Body">
            <div className="s7" data-node-id="2004:1256" data-name="Title">
              <p className="s139" data-node-id="2004:1257">
                Community Garden
              </p>
              <div className="s33" data-node-id="2004:1258" data-name="icon/shield">
                <img alt="" className="s4" src={imgIconShield} />
              </div>
            </div>
            <div className="s140" data-node-id="2004:1261" data-name="Meta">
              <div className="s141" data-node-id="2004:1262" data-name="Meta · Riverside Park">
                <div className="s81" data-node-id="2004:1263" data-name="icon/pin">
                  <img alt="" className="s4" src={imgIconPin} />
                </div>
                <p className="s142" data-node-id="2004:1266">
                  Riverside Park
                </p>
              </div>
              <div className="s141" data-node-id="2004:1267" data-name="Meta · Tue · 10 AM">
                <div className="s81" data-node-id="2004:1268" data-name="icon/clock">
                  <img alt="" className="s4" src={imgIconClock} />
                </div>
                <p className="s142" data-node-id="2004:1271">
                  Tue · 10 AM
                </p>
              </div>
            </div>
            <div className="s143" data-node-id="2004:1272" data-name="Actions">
              <AiButton className="s26" label="Why for me?" />
              <div className="s144" data-node-id="2004:1278" data-name="Spacer" />
              <div className="s145" data-node-id="2004:1279" data-name="Not for me">
                <div className="s3" data-node-id="2004:1280" data-name="icon/x">
                  <img alt="" className="s4" src={imgIconX} />
                </div>
                <p className="s146" data-node-id="2004:1282">
                  Not for me
                </p>
              </div>
            </div>
          </div>
        </a>
        <a className="s147" data-node-id="2004:1283" data-name="Card · Digital Skills Basics">
          <div className="s148" data-node-id="2004:1284" data-name="Photo · Digital skills">
            <img alt="" className="s109" src={imgPhotoDigitalSkills} />
          </div>
          <div className="s110" data-node-id="2004:1285" data-name="Text">
            <p className="s149" data-node-id="2004:1286">
              Digital Skills Basics
            </p>
            <div className="s141" data-node-id="2004:1287" data-name="Meta">
              <div className="s113" data-node-id="2004:1288" data-name="icon/clock">
                <img alt="" className="s4" src={imgIconClock1} />
              </div>
              <p className="s142" data-node-id="2004:1291">
                Wed · 2 PM · CC
              </p>
            </div>
          </div>
          <div className="s150" data-node-id="2004:1292" data-name="Not for me">
            <div className="s3" data-node-id="2004:1293" data-name="icon/x">
              <img alt="" className="s4" src={imgIconX} />
            </div>
          </div>
        </a>
        <div className="s63" data-node-id="2004:1295" data-name="Tools">
          <div className="s151" data-node-id="2004:1296" data-name="Button · Filter">
            <div className="s41" data-node-id="2004:1297" data-name="icon/filter">
              <img alt="" className="s4" src={imgIconFilter} />
            </div>
            <p className="s96" data-node-id="2004:1299">
              Filter
            </p>
          </div>
          <div className="s151" data-node-id="2004:1300" data-name="Button · Compare">
            <div className="s41" data-node-id="2004:1301" data-name="icon/compare">
              <img alt="" className="s4" src={imgIconCompare} />
            </div>
            <p className="s96" data-node-id="2004:1304">
              Compare
            </p>
          </div>
        </div>
      </div>
      <div className="s115" data-node-id="2004:1305" data-name="Navigation bar">
        <a className="s116" data-node-id="I2004:1305;2004:651" data-name="Home tab">
          <div className="s46" data-node-id="I2004:1305;2004:652" data-name="icon/home">
            <img alt="" className="s4" src={imgIconHome} />
          </div>
          <p className="s117" data-node-id="I2004:1305;2004:654">
            Home
          </p>
        </a>
        <div className="s152" data-node-id="I2004:1305;2004:655" data-name="Explore tab">
          <div className="s46" data-node-id="I2004:1305;2004:656" data-name="icon/compass">
            <img alt="" className="s4" src={imgIconCompass} />
          </div>
          <p className="s153" data-node-id="I2004:1305;2004:659">
            Explore
          </p>
        </div>
        <div className="s120" data-node-id="I2004:1305;2004:660" data-name="Compass (AI)">
          <div className="s121" data-node-id="I2004:1305;2004:661" data-name="AI circle">
            <div className="s33" data-node-id="I2004:1305;2004:662" data-name="icon/sparkle">
              <img alt="" className="s4" src={imgIconSparkle2} />
            </div>
          </div>
          <p className="s122" data-node-id="I2004:1305;2004:665">
            Compass
          </p>
        </div>
        <div className="s123" data-node-id="I2004:1305;2004:666" data-name="Inbox tab">
          <div className="s46" data-node-id="I2004:1305;2004:667" data-name="icon/inbox">
            <img alt="" className="s4" src={imgIconInbox} />
          </div>
          <p className="s122" data-node-id="I2004:1305;2004:670">
            Inbox
          </p>
        </div>
        <a className="s116" data-node-id="I2004:1305;2004:671" data-name="Me tab">
          <div className="s46" data-node-id="I2004:1305;2004:672" data-name="icon/user">
            <img alt="" className="s4" src={imgIconUser} />
          </div>
          <p className="s117" data-node-id="I2004:1305;2004:675">
            Me
          </p>
        </a>
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
