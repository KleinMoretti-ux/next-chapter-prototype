const imgWifi = "/assets/0d7b1873-6b66-419f-bcaa-f7e8b4fb7535.svg";
const imgIconChevLeft = "/assets/e271a9d4-8cb9-4550-9fb4-2b61b311b4ef.svg";
const imgIconCompass = "/assets/df4b365a-b905-4ebf-ade8-0f4341378542.svg";
const imgIconDots = "/assets/ea9d7be0-79ae-4fe7-95ab-0813fd173018.svg";
const imgIconBuilding = "/assets/19579d6d-805e-435f-b410-5fb9473d6fd7.svg";
const imgIconBook = "/assets/b1f63a7f-9148-4a07-9e11-9006ed988667.svg";
const imgIconLeaf = "/assets/5e73d826-3d7f-4613-96ec-2443d9276065.svg";
const imgIconChevRight = "/assets/b13c79d3-0254-4967-9fa4-949850d9a075.svg";
const imgIconChevRight1 = "/assets/1893059f-19d2-4b0c-ba99-2a11fce6e5f2.svg";
const imgIconLeaf1 = "/assets/c4de4aa1-8c32-4254-8127-8101f0a2dcd7.svg";
const imgIconChevRight2 = "/assets/d16c23b7-b7ec-48da-be93-2ede99e38545.svg";
const imgIconWalk = "/assets/afeef63e-f45a-42bb-98e1-df35f8e2588c.svg";
const imgIconInfo = "/assets/b4411dbd-5fd0-4e0c-81a1-c71c2207a1b9.svg";
const imgIconPhone = "/assets/45d65dd8-5854-413c-872e-93dcf06083b2.svg";
const imgIconWaves = "/assets/b6f155f7-61c3-4c88-b45c-084beacac20e.svg";
const imgIconCamera = "/assets/e3ae4954-b858-485d-a69e-2e34f0070ed7.svg";
const imgIconPlus = "/assets/be3edbc9-0c02-4fed-989d-997770fa0688.svg";

function HomeIndicator({ className }: { className?: string }) {
  return (
    <div className={className || "s36"} data-node-id="15:317" data-name="Home indicator">
      <div className="s201" data-node-id="15:316" data-name="Bar" />
    </div>
  );
}

function StatusBar({ className }: { className?: string }) {
  return (
    <div className={className || "s38"} data-node-id="15:292" data-name="Status bar">
      <p className="s202" data-node-id="15:279">
        9:41
      </p>
      <div className="s7" data-node-id="15:280" data-name="Indicators">
        <div className="s8" data-node-id="15:281" data-name="Signal">
          <div className="s203" data-node-id="15:282" data-name="Rectangle" />
          <div className="s204" data-node-id="15:283" data-name="Rectangle" />
          <div className="s205" data-node-id="15:284" data-name="Rectangle" />
          <div className="s206" data-node-id="15:285" data-name="Rectangle" />
        </div>
        <div className="s13" data-node-id="15:286" data-name="Wifi">
          <img alt="" className="s4" src={imgWifi} />
        </div>
        <div className="s207" data-node-id="15:290" data-name="Battery">
          <div className="s208" data-node-id="15:291" data-name="Level" />
        </div>
      </div>
    </div>
  );
}

export default function Search3AskCompass() {
  return (
    <div className="s209" data-node-id="8:735" data-name="Search - 3 · Ask Compass">
      <StatusBar className="s19" />
      <div className="s315" data-node-id="8:752" data-name="Content">
        <div className="s125" data-node-id="8:753" data-name="Chat header">
          <button className="s252" data-node-id="8:754" data-name="Button · Back">
            <div className="s46" data-node-id="8:755" data-name="icon/chevLeft">
              <img alt="" className="s4" src={imgIconChevLeft} />
            </div>
          </button>
          <div className="s316" data-node-id="8:757" data-name="Compass avatar">
            <div className="s46" data-node-id="8:758" data-name="icon/compass">
              <img alt="" className="s4" src={imgIconCompass} />
            </div>
          </div>
          <div className="s286" data-node-id="8:761" data-name="Title">
            <p className="s317" data-node-id="8:762">
              Compass
            </p>
            <p className="s288" data-node-id="8:763">
              AI helper · suggests, you decide
            </p>
          </div>
          <div className="s218" data-node-id="8:764" data-name="Button · More options">
            <div className="s46" data-node-id="8:765" data-name="icon/dots">
              <img alt="" className="s4" src={imgIconDots} />
            </div>
          </div>
        </div>
        <p className="s318" data-node-id="8:769">
          Today · 10:24
        </p>
        <div className="s319" data-node-id="8:770" data-name="User message">
          <div className="s320" data-node-id="8:771" data-name="Bubble">
            <p className="s321" data-node-id="8:772">
              What can I do after retiring?
            </p>
          </div>
        </div>
        <div className="s322" data-node-id="8:773" data-name="Compass message">
          <div className="s58" data-node-id="8:774" data-name="Sources row">
            <div className="s280" data-node-id="8:775" data-name="Sources">
              <div className="s281" data-node-id="8:776" data-name="Source · building">
                <div className="s3" data-node-id="8:777" data-name="icon/building">
                  <img alt="" className="s4" src={imgIconBuilding} />
                </div>
              </div>
              <div className="s282" data-node-id="8:780" data-name="Source · book">
                <div className="s3" data-node-id="8:781" data-name="icon/book">
                  <img alt="" className="s4" src={imgIconBook} />
                </div>
              </div>
              <div className="s283" data-node-id="8:784" data-name="Source · leaf">
                <div className="s3" data-node-id="8:785" data-name="icon/leaf">
                  <img alt="" className="s4" src={imgIconLeaf} />
                </div>
              </div>
            </div>
            <p className="s323" data-node-id="8:788">
              Searched 12 verified listings near you
            </p>
            <div className="s3" data-node-id="8:789" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight} />
            </div>
          </div>
          <p className="s324" data-node-id="8:791">
            Here are three directions that fit Learning and Community, on weekday mornings near home:
          </p>
          <div className="s231" data-node-id="8:792" data-name="Direction 01">
            <p className="s325" data-node-id="8:793">
              01
            </p>
            <div className="s326" data-node-id="8:794" data-name="Text">
              <p className="s259" data-node-id="8:795">
                Learn something new
              </p>
              <p className="s327" data-node-id="8:796">
                Phone Photography for Beginners · Tue 9:30 AM · 8 min away. Fee not listed yet.
              </p>
              <div className="s328" data-node-id="8:797" data-name="See fit link">
                <p className="s329" data-node-id="8:798">
                  See fit
                </p>
                <div className="s3" data-node-id="8:799" data-name="icon/chevRight">
                  <img alt="" className="s4" src={imgIconChevRight1} />
                </div>
              </div>
            </div>
          </div>
          <div className="s231" data-node-id="8:801" data-name="Direction 02">
            <p className="s325" data-node-id="8:802">
              02
            </p>
            <div className="s326" data-node-id="8:803" data-name="Text">
              <p className="s259" data-node-id="8:804">
                Meet people through a shared task
              </p>
              <p className="s327" data-node-id="8:805">
                Community Garden Workshop · Sat 10:00 AM · 12 min. Small group, trial session available.
              </p>
              <div className="s328" data-node-id="8:806" data-name="See fit link">
                <p className="s329" data-node-id="8:807">
                  See fit
                </p>
                <div className="s3" data-node-id="8:808" data-name="icon/chevRight">
                  <img alt="" className="s4" src={imgIconChevRight1} />
                </div>
              </div>
            </div>
          </div>
          <div className="s231" data-node-id="8:810" data-name="Direction 03">
            <p className="s325" data-node-id="8:811">
              03
            </p>
            <div className="s326" data-node-id="8:812" data-name="Text">
              <p className="s259" data-node-id="8:813">
                Share your experience
              </p>
              <p className="s327" data-node-id="8:814">
                Library Reading Buddy · 2 hrs a week. You can try one session first.
              </p>
              <div className="s328" data-node-id="8:815" data-name="See fit link">
                <p className="s329" data-node-id="8:816">
                  See fit
                </p>
                <div className="s3" data-node-id="8:817" data-name="icon/chevRight">
                  <img alt="" className="s4" src={imgIconChevRight1} />
                </div>
              </div>
            </div>
          </div>
          <p className="s330" data-node-id="8:819">
            Not ready to choose? Save any of these and decide later.
          </p>
        </div>
        <div className="s319" data-node-id="8:820" data-name="User message">
          <div className="s320" data-node-id="8:821" data-name="Bubble">
            <p className="s321" data-node-id="8:822">
              Which ones can I try once, with a friend?
            </p>
          </div>
        </div>
        <div className="s322" data-node-id="8:823" data-name="Compass message">
          <p className="s324" data-node-id="8:824">
            Two options let you try once and welcome a friend:
          </p>
          <div className="s331" data-node-id="8:825" data-name="Option · Community Garden Workshop">
            <div className="s332" data-node-id="8:826" data-name="Image · placeholder">
              <div className="s23" data-node-id="8:827" data-name="icon/leaf">
                <img alt="" className="s4" src={imgIconLeaf1} />
              </div>
            </div>
            <div className="s333" data-node-id="8:830" data-name="Text">
              <p className="s235" data-node-id="8:831">
                Community Garden Workshop
              </p>
              <p className="s236" data-node-id="8:832">
                Trial · Sat 10:00 AM · friends welcome
              </p>
            </div>
            <div className="s41" data-node-id="8:833" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight2} />
            </div>
          </div>
          <div className="s331" data-node-id="8:835" data-name="Option · Morning Qigong">
            <div className="s334" data-node-id="8:836" data-name="Image · placeholder">
              <div className="s23" data-node-id="8:837" data-name="icon/walk">
                <img alt="" className="s4" src={imgIconWalk} />
              </div>
            </div>
            <div className="s333" data-node-id="8:840" data-name="Text">
              <p className="s235" data-node-id="8:841">
                Morning Qigong
              </p>
              <p className="s236" data-node-id="8:842">
                Drop-in · free · friends welcome
              </p>
            </div>
            <div className="s41" data-node-id="8:843" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight2} />
            </div>
          </div>
          <div className="s169" data-node-id="8:845" data-name="Uncertainty note">
            <div className="s81" data-node-id="8:846" data-name="icon/info">
              <img alt="" className="s4" src={imgIconInfo} />
            </div>
            <p className="s335" data-node-id="8:849">{`I couldn't confirm whether friends can join Phone Photography. The organiser can tell you.`}</p>
          </div>
        </div>
        <div className="s336" data-node-id="8:850" data-name="Follow-up suggestions">
          <div className="s337" data-node-id="8:851" data-name="Chip · Only weekday mornings">
            <p className="s338" data-node-id="8:852">
              Only weekday mornings
            </p>
          </div>
          <div className="s337" data-node-id="8:853" data-name="Chip · Free options only">
            <p className="s338" data-node-id="8:854">
              Free options only
            </p>
          </div>
          <div className="s337" data-node-id="8:855" data-name="Chip · Compare these two">
            <p className="s338" data-node-id="8:856">
              Compare these two
            </p>
          </div>
        </div>
        <div className="s339" data-node-id="8:857" data-name="Human support">
          <div className="s81" data-node-id="8:858" data-name="icon/phone">
            <img alt="" className="s4" src={imgIconPhone} />
          </div>
          <p className="s300" data-node-id="8:860">
            Prefer a person?
          </p>
          <p className="s312" data-node-id="8:861">
            Talk to a Next Chapter guide
          </p>
        </div>
      </div>
      <div className="s340" data-node-id="8:862" data-name="Input bar">
        <div className="s125" data-node-id="8:863" data-name="Row">
          <div className="s341" data-node-id="8:864" data-name="Button · Hold to talk">
            <div className="s46" data-node-id="8:865" data-name="icon/waves">
              <img alt="" className="s4" src={imgIconWaves} />
            </div>
          </div>
          <div className="s342" data-node-id="8:867" data-name="Message field">
            <p className="s343" data-node-id="8:868">
              Ask a follow-up or hold to talk…
            </p>
            <div className="s33" data-node-id="8:869" data-name="icon/camera">
              <img alt="" className="s4" src={imgIconCamera} />
            </div>
          </div>
          <div className="s344" data-node-id="8:872" data-name="Button · More">
            <div className="s46" data-node-id="8:873" data-name="icon/plus">
              <img alt="" className="s4" src={imgIconPlus} />
            </div>
          </div>
        </div>
        <p className="s318" data-node-id="8:875">{`Compass won't sign you up or share your details without asking.`}</p>
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
