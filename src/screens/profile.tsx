const imgIconSparkle = "/assets/a584258b-8f2b-4bd8-aa50-5ec23037f8d5.svg";
const imgWifi = "/assets/9e7ada4a-9192-44fe-9763-317fc1f5f7ee.svg";
const imgAvatarPhoto = "/assets/c88c4345-f1e8-4c12-af71-4613d46c52dc.png";
const imgIconChevLeft = "/assets/f4155921-74ae-4fe3-891a-46481ba74e1f.svg";
const imgIconCamera = "/assets/ed24bcb3-3bb9-46cb-a594-4a98f6ee7cfd.svg";
const imgIconPin = "/assets/947f0882-1b85-4818-8459-cd1b37c5c3f3.svg";
const imgIconFlag = "/assets/fc7cf095-bb68-4e11-a940-8d867a6fa130.svg";
const imgIconGlobe = "/assets/b769fd73-23de-4da7-8434-21db8ffcce48.svg";
const imgIconChevDown = "/assets/5b7f7c95-3a42-4e16-93b7-b2d7c6d26b08.svg";
const imgIconText = "/assets/aed2a797-7fd3-40a3-aa54-1a4bf9729058.svg";
const imgIconVolume = "/assets/963182e1-86b2-4105-a975-babdfd79cc14.svg";
const imgIconBell = "/assets/5a8a33f0-bea5-4386-b887-442892eebe09.svg";
const imgIconCheck = "/assets/8a8dd19a-0171-45db-a69d-5c51dbf06f0d.svg";

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
  style?: "Pill";
};

function AiButton({ className, label = "Ask Compass", style = "Pill" }: AiButtonProps) {
  return (
    <div data-action={label} className={className || "s84"} data-node-id="2004:600">
      <div className="s41" data-node-id="2004:596" data-name="icon/sparkle">
        <img alt="" className="s4" src={imgIconSparkle} />
      </div>
      <p className="s42" data-node-id="2004:599">
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

export default function Component2ProfilePreferences() {
  return (
    <div className="s16" data-node-id="2004:786" data-name="2 · Profile & Preferences">
      <StatusBar className="s19" />
      <div className="s43" data-node-id="2004:801" data-name="Content">
        <div className="s44" data-node-id="2004:802" data-name="Header">
          <a className="s45" data-node-id="2004:803" data-name="Button · Back">
            <div className="s46" data-node-id="2004:804" data-name="icon/chevLeft">
              <img alt="" className="s4" src={imgIconChevLeft} />
            </div>
          </a>
          <p className="s47" data-node-id="2004:806">
            Step 1 of 2
          </p>
        </div>
        <div className="s48" data-node-id="2004:807" data-name="Title row">
          <p className="s49" data-node-id="2004:808">
            About you
          </p>
          <AiButton className="s50" label="Fill by voice" />
        </div>
        <div className="s51" data-node-id="2004:814" data-name="Profile">
          <div className="s52" data-node-id="2004:815" data-name="Name row">
            <div className="s53" data-node-id="2004:816" data-name="Avatar">
              <div className="s54" data-node-id="2004:817" data-name="Avatar photo">
                <img alt="" className="s55" src={imgAvatarPhoto} />
              </div>
              <div className="s56" data-node-id="2004:818" data-name="Edit photo">
                <div className="s3" data-node-id="2004:819" data-name="icon/camera">
                  <img alt="" className="s4" src={imgIconCamera} />
                </div>
              </div>
            </div>
            <div className="s57" data-node-id="2004:822" data-name="Name field">
              <p className="s6" data-node-id="2004:823">
                Lin Mei
              </p>
            </div>
          </div>
          <div className="s58" data-node-id="2004:824" data-name="Age range">
            <div className="s59" data-node-id="2004:825" data-name="Age 55–59">
              <p className="s60" data-node-id="2004:826">
                55–59
              </p>
            </div>
            <div className="s61" data-node-id="2004:827" data-name="Age 60–64">
              <p className="s62" data-node-id="2004:828">
                60–64
              </p>
            </div>
            <div className="s59" data-node-id="2004:829" data-name="Age 65–69">
              <p className="s60" data-node-id="2004:830">
                65–69
              </p>
            </div>
            <div className="s59" data-node-id="2004:831" data-name="Age 70+">
              <p className="s60" data-node-id="2004:832">
                70+
              </p>
            </div>
          </div>
          <div className="s63" data-node-id="2004:833" data-name="Area & role">
            <div className="s64" data-node-id="2004:834" data-name="Queenstown">
              <div className="s41" data-node-id="2004:835" data-name="icon/pin">
                <img alt="" className="s4" src={imgIconPin} />
              </div>
              <p className="s65" data-node-id="2004:838">
                Queenstown
              </p>
            </div>
            <div className="s64" data-node-id="2004:841" data-name="Ex-admin">
              <div className="s41" data-node-id="2004:842" data-name="icon/flag">
                <img alt="" className="s4" src={imgIconFlag} />
              </div>
              <p className="s65" data-node-id="2004:844">
                Ex-admin
              </p>
            </div>
          </div>
        </div>
        <p className="s66" data-node-id="2004:847">
          Preferences
        </p>
        <div className="s67" data-node-id="2004:848" data-name="Preferences grid">
          <div className="s68" data-node-id="2004:860" data-name="Pref · Language">
            <div className="s69" data-node-id="2004:861" data-name="Top">
              <div className="s33" data-node-id="2004:862" data-name="icon/globe">
                <img alt="" className="s4" src={imgIconGlobe} />
              </div>
              <p className="s60" data-node-id="2004:865">
                Language
              </p>
            </div>
            <div className="s70" data-node-id="2004:849" data-name="Value">
              <p className="s71" data-node-id="2004:850">
                English
              </p>
              <div className="s3" data-node-id="2004:851" data-name="icon/chevDown">
                <img alt="" className="s4" src={imgIconChevDown} />
              </div>
            </div>
          </div>
          <div className="s68" data-node-id="2004:866" data-name="Pref · Text size">
            <div className="s69" data-node-id="2004:867" data-name="Top">
              <div className="s33" data-node-id="2004:868" data-name="icon/text">
                <img alt="" className="s4" src={imgIconText} />
              </div>
              <p className="s60" data-node-id="2004:870">
                Text size
              </p>
            </div>
            <div className="s72" data-node-id="2004:853" data-name="Text size">
              <div className="s73" data-node-id="2004:854" data-name="Size 13">
                <p className="s74" data-node-id="2004:855">
                  A
                </p>
              </div>
              <div className="s75" data-node-id="2004:856" data-name="Size 17">
                <p className="s76" data-node-id="2004:857">
                  A
                </p>
              </div>
              <div className="s73" data-node-id="2004:858" data-name="Size 21">
                <p className="s77" data-node-id="2004:859">
                  A
                </p>
              </div>
            </div>
          </div>
          <div className="s68" data-node-id="2004:873" data-name="Pref · Voice guide">
            <div className="s69" data-node-id="2004:874" data-name="Top">
              <div className="s33" data-node-id="2004:875" data-name="icon/volume">
                <img alt="" className="s4" src={imgIconVolume} />
              </div>
              <p className="s60" data-node-id="2004:878">
                Voice guide
              </p>
            </div>
            <div className="s78" data-node-id="2004:871" data-name="Toggle">
              <div className="s79" data-node-id="2004:872" data-name="Knob" />
            </div>
          </div>
          <div className="s68" data-node-id="2004:881" data-name="Pref · Reminders">
            <div className="s69" data-node-id="2004:882" data-name="Top">
              <div className="s33" data-node-id="2004:883" data-name="icon/bell">
                <img alt="" className="s4" src={imgIconBell} />
              </div>
              <p className="s60" data-node-id="2004:886">
                Reminders
              </p>
            </div>
            <div className="s78" data-node-id="2004:879" data-name="Toggle">
              <div className="s79" data-node-id="2004:880" data-name="Knob" />
            </div>
          </div>
        </div>
        <div className="s21" data-node-id="2004:887" data-name="Privacy">
          <div className="s80" data-node-id="2004:888" data-name="Checkbox">
            <div className="s81" data-node-id="2004:889" data-name="icon/check">
              <img alt="" className="s4" src={imgIconCheck} />
            </div>
          </div>
          <p className="s34" data-node-id="2004:891">
            I agree to the privacy policy
          </p>
          <p className="s82" data-node-id="2004:892">
            Manage
          </p>
        </div>
        <Button className="s28" label="Save & Continue" />
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
