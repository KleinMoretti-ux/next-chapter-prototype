const imgWifi = "/assets/35ad0c90-468e-4174-a6ff-1e0000fb8814.svg";
const imgPhotoDigitalSkillsBasics = "/assets/081aec48-4e3e-43e6-a1c8-4dea6e059b0a.png";
const imgPhotoWeekendGardenClub = "/assets/92dce505-3f9b-4348-a3cd-e631eda71ebd.png";
const imgIconChevLeft = "/assets/b89f85c0-b311-469e-8f5d-579f8e657820.svg";
const imgIconSearchx = "/assets/1109dc1c-c413-402b-8b71-e35d6686e3eb.svg";
const imgIconSparkle = "/assets/aee2b7f4-140f-49fd-882f-eb53adf923fe.svg";
const imgIconClock = "/assets/28abc486-bd75-448a-bf03-ae7456a22181.svg";
const imgIconChevRight = "/assets/6656dad2-7982-434e-a234-5b11bf9ccff9.svg";
const imgIconPin = "/assets/9f523846-d59a-4ce9-8ce0-d6b8d17bf677.svg";
const imgIconPhone = "/assets/a1d31ae4-ac41-48ef-a0ba-50b51bb8465d.svg";

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

export default function Component7BNoStrongMatchYet() {
  return (
    <div className="s16" data-node-id="2004:1438" data-name="7B · No Strong Match Yet">
      <StatusBar className="s19" />
      <div className="s103" data-node-id="2004:1453" data-name="Content">
        <div className="s183" data-node-id="2004:1454" data-name="Header">
          <a className="s45" data-node-id="2004:1455" data-name="Button · Back">
            <div className="s46" data-node-id="2004:1456" data-name="icon/chevLeft">
              <img alt="" className="s4" src={imgIconChevLeft} />
            </div>
          </a>
        </div>
        <div className="s184" data-node-id="2004:1458" data-name="Empty state">
          <div className="s185" data-node-id="2004:1459" data-name="Illustration">
            <div className="s186" data-node-id="2004:1460" data-name="icon/searchx">
              <img alt="" className="s4" src={imgIconSearchx} />
            </div>
          </div>
          <p className="s187" data-node-id="2004:1463">
            No strong match yet
          </p>
          <p className="s188" data-node-id="2004:1464">
            Based on what you told us
          </p>
        </div>
        <div className="s189" data-node-id="2004:1465" data-name="AI note">
          <div className="s190" data-node-id="2004:1466" data-name="Spark">
            <div className="s41" data-node-id="2004:1467" data-name="icon/sparkle">
              <img alt="" className="s4" src={imgIconSparkle} />
            </div>
          </div>
          <p className="s191" data-node-id="2004:1470">
            2 options partly fit. Time or distance is off.
          </p>
        </div>
        <div className="s107" data-node-id="2004:1471" data-name="Partial · Digital Skills Basics">
          <div className="s192" data-node-id="2004:1472" data-name="Photo · Digital Skills Basics">
            <img alt="" className="s109" src={imgPhotoDigitalSkillsBasics} />
          </div>
          <div className="s193" data-node-id="2004:1473" data-name="Text">
            <p className="s194" data-node-id="2004:1474">
              Digital Skills Basics
            </p>
            <div className="s195" data-node-id="2004:1475" data-name="Partial badge">
              <div className="s3" data-node-id="2004:1476" data-name="icon/clock">
                <img alt="" className="s4" src={imgIconClock} />
              </div>
              <p className="s196" data-node-id="2004:1479">
                Partial · Time
              </p>
            </div>
          </div>
          <div className="s41" data-node-id="2004:1480" data-name="icon/chevRight">
            <img alt="" className="s4" src={imgIconChevRight} />
          </div>
        </div>
        <div className="s107" data-node-id="2004:1482" data-name="Partial · Weekend Garden Club">
          <div className="s192" data-node-id="2004:1483" data-name="Photo · Weekend Garden Club">
            <img alt="" className="s109" src={imgPhotoWeekendGardenClub} />
          </div>
          <div className="s193" data-node-id="2004:1484" data-name="Text">
            <p className="s194" data-node-id="2004:1485">
              Weekend Garden Club
            </p>
            <div className="s195" data-node-id="2004:1486" data-name="Partial badge">
              <div className="s3" data-node-id="2004:1487" data-name="icon/pin">
                <img alt="" className="s4" src={imgIconPin} />
              </div>
              <p className="s196" data-node-id="2004:1490">
                Partial · Distance
              </p>
            </div>
          </div>
          <div className="s41" data-node-id="2004:1491" data-name="icon/chevRight">
            <img alt="" className="s4" src={imgIconChevRight} />
          </div>
        </div>
        <Button className="s28" label="Adjust my preferences" />
        <div className="s63" data-node-id="2004:1503" data-name="Secondary actions">
          <div className="s197" data-node-id="2004:1504" data-name="Button · See partial">
            <p className="s198" data-node-id="2004:1505">
              See partial
            </p>
          </div>
          <a className="s199" data-node-id="2004:1506" data-name="Button · Talk to a person">
            <div className="s41" data-node-id="2004:1507" data-name="icon/phone">
              <img alt="" className="s4" src={imgIconPhone} />
            </div>
            <p className="s200" data-node-id="2004:1509">
              Talk to a person
            </p>
          </a>
        </div>
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
