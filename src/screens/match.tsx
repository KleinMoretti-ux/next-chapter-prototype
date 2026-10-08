const imgIconSparkle = "/assets/4cb903e8-b11e-4f26-bae9-ebbeeb81d006.svg";
const imgIconSparkle1 = "/assets/4003a86b-1fa9-4b81-bacd-d84d5f61fc58.svg";
const imgWifi = "/assets/5c9bbdec-70cb-4b79-bbda-c0974db6b1c0.svg";
const imgHeroPhoto = "/assets/a92b050e-b196-4703-9485-5fe68ec91d69.png";
const imgIconChevLeft = "/assets/41dad92a-e0e4-4eaf-93b8-c777968b9d6a.svg";
const imgIconBookmark = "/assets/25e9f257-cb5c-4e52-82cd-0722b95c4e7b.svg";
const imgIconPin = "/assets/cf8c219c-9ded-4907-ba94-a63721e3ce23.svg";
const imgIconCalendar = "/assets/f94e662b-d08e-4ce3-bbaf-7e40d8a35a94.svg";
const imgIconStar = "/assets/db0d5afc-d66b-41be-9296-e0ec622a97b8.svg";
const imgIconClock = "/assets/5bf7d5ed-d4fe-4d0f-b0f5-ebc8b03cf0fb.svg";
const imgIconCheck = "/assets/97665f60-19dd-4c33-904b-d8085a8c8573.svg";
const imgIconBolt = "/assets/95befb5a-c964-4af2-a4d6-f6ca664a611a.svg";
const imgIconAlert = "/assets/e771e0b1-3228-43fe-90b4-8ebe00d2f0da.svg";
const imgIconPin1 = "/assets/bb79082e-cc09-4004-9924-126a07f42dca.svg";
const imgIconShield = "/assets/ee9d107c-2472-4d40-952c-a809e5a8ca24.svg";
const imgIconShield1 = "/assets/cfb17daf-ee90-42b1-9eb8-2e5d06922175.svg";

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

export default function Component7AStrongMatch() {
  return (
    <div className="s16" data-node-id="2004:1333" data-name="7A · Strong Match">
      <div className="s155" data-node-id="2004:1334" data-name="Hero photo">
        <img alt="" className="s134" src={imgHeroPhoto} />
      </div>
      <StatusBar className="s19" />
      <a className="s156" data-node-id="2004:1349" data-name="Button · Back">
        <div className="s46" data-node-id="2004:1350" data-name="icon/chevLeft">
          <img alt="" className="s4" src={imgIconChevLeft} />
        </div>
      </a>
      <div className="s157" data-node-id="2004:1352" data-name="Button · Save">
        <div className="s46" data-node-id="2004:1353" data-name="icon/bookmark">
          <img alt="" className="s4" src={imgIconBookmark} />
        </div>
      </div>
      <div className="s158" data-node-id="2004:1355" data-name="Sheet">
        <div className="s159" data-node-id="2004:1356" data-name="Facts">
          <div className="s160" data-node-id="2004:1357" data-name="Fact · Local park">
            <div className="s113" data-node-id="2004:1358" data-name="icon/pin">
              <img alt="" className="s4" src={imgIconPin} />
            </div>
            <p className="s161" data-node-id="2004:1361">
              Local park
            </p>
          </div>
          <div className="s160" data-node-id="2004:1362" data-name="Fact · 2× a week">
            <div className="s113" data-node-id="2004:1363" data-name="icon/calendar">
              <img alt="" className="s4" src={imgIconCalendar} />
            </div>
            <p className="s161" data-node-id="2004:1366">
              2× a week
            </p>
          </div>
        </div>
        <p className="s162" data-node-id="2004:1367">
          Community Walking Group
        </p>
        <div className="s163" data-node-id="2004:1368" data-name="AI fit">
          <div className="s164" data-node-id="2004:1369" data-name="Fit header">
            <div className="s165" data-node-id="2004:1370" data-name="Badge">
              <div className="s23" data-node-id="2004:1371" data-name="icon/star">
                <img alt="" className="s4" src={imgIconStar} />
              </div>
            </div>
            <div className="s166" data-node-id="2004:1373" data-name="Fit text">
              <p className="s167" data-node-id="2004:1374">
                Strong fit
              </p>
              <p className="s168" data-node-id="2004:1375">
                4 factors checked
              </p>
            </div>
            <AiButton className="s26" label="AI estimate" style="Chip" />
          </div>
          <div className="s169" data-node-id="2004:1381" data-name="Factors">
            <div className="s170" data-node-id="2004:1382" data-name="Factor · Time">
              <div className="s171" data-node-id="2004:1383" data-name="Icon">
                <div className="s172" data-node-id="2004:1384" data-name="icon/clock">
                  <img alt="" className="s4" src={imgIconClock} />
                </div>
                <div className="s173" data-node-id="2004:1387" data-name="OK">
                  <div className="s174" data-node-id="2004:1388" data-name="icon/check">
                    <img alt="" className="s4" src={imgIconCheck} />
                  </div>
                </div>
              </div>
              <p className="s175" data-node-id="2004:1390">
                Time
              </p>
              <p className="s176" data-node-id="2004:1391">
                Good
              </p>
            </div>
            <div className="s177" data-node-id="2004:1392" data-name="Factor · Energy">
              <div className="s171" data-node-id="2004:1393" data-name="Icon">
                <div className="s172" data-node-id="2004:1394" data-name="icon/bolt">
                  <img alt="" className="s4" src={imgIconBolt} />
                </div>
                <div className="s178" data-node-id="2004:1396" data-name="Check">
                  <div className="s179" data-node-id="2004:1397" data-name="icon/alert">
                    <img alt="" className="s4" src={imgIconAlert} />
                  </div>
                </div>
              </div>
              <p className="s175" data-node-id="2004:1400">
                Energy
              </p>
              <p className="s180" data-node-id="2004:1401">
                Check
              </p>
            </div>
            <div className="s170" data-node-id="2004:1402" data-name="Factor · Distance">
              <div className="s171" data-node-id="2004:1403" data-name="Icon">
                <div className="s172" data-node-id="2004:1404" data-name="icon/pin">
                  <img alt="" className="s4" src={imgIconPin1} />
                </div>
                <div className="s173" data-node-id="2004:1407" data-name="OK">
                  <div className="s174" data-node-id="2004:1408" data-name="icon/check">
                    <img alt="" className="s4" src={imgIconCheck} />
                  </div>
                </div>
              </div>
              <p className="s175" data-node-id="2004:1410">
                Distance
              </p>
              <p className="s176" data-node-id="2004:1411">
                Good
              </p>
            </div>
            <div className="s170" data-node-id="2004:1412" data-name="Factor · Trust">
              <div className="s171" data-node-id="2004:1413" data-name="Icon">
                <div className="s172" data-node-id="2004:1414" data-name="icon/shield">
                  <img alt="" className="s4" src={imgIconShield} />
                </div>
                <div className="s173" data-node-id="2004:1417" data-name="OK">
                  <div className="s174" data-node-id="2004:1418" data-name="icon/check">
                    <img alt="" className="s4" src={imgIconCheck} />
                  </div>
                </div>
              </div>
              <p className="s175" data-node-id="2004:1420">
                Trust
              </p>
              <p className="s176" data-node-id="2004:1421">
                Good
              </p>
            </div>
          </div>
        </div>
        <div className="s58" data-node-id="2004:1422" data-name="Verified">
          <div className="s41" data-node-id="2004:1423" data-name="icon/shield">
            <img alt="" className="s4" src={imgIconShield1} />
          </div>
          <p className="s181" data-node-id="2004:1426">
            Verified by community centre
          </p>
          <p className="s82" data-node-id="2004:1427">
            Source
          </p>
        </div>
        <div className="s125" data-node-id="2004:1428" data-name="Actions">
          <AiButton className="s50" label="Why?" />
          <Button className="s182" label="Join a trial" />
        </div>
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
