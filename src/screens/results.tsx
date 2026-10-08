const imgWifi = "/assets/93f75285-5b3c-4860-9db5-d57a05d5f218.svg";
const imgIconChevLeft = "/assets/2f887f9e-619f-412f-b7a0-1fd7682988f5.svg";
const imgIconSearch = "/assets/6a9aae61-6bff-487e-a49f-26abd4b04b8e.svg";
const imgIconXCircle = "/assets/c46f5173-af16-425c-b9af-31263b8438d5.svg";
const imgIconSparkle = "/assets/bfbf6690-02be-497b-a9a5-882bd44e7365.svg";
const imgIconSparkle1 = "/assets/f200595e-01c3-47b9-9cfd-345cde2d2d7b.svg";
const imgIconInfo = "/assets/fd7256ff-3625-44f2-a6b7-b77b81a72874.svg";
const imgIconChevRight = "/assets/db3bc2ca-82e9-4d35-80ef-f6cfa76fba4b.svg";
const imgIconBuilding = "/assets/87675e89-2f75-4a44-bf97-f53e8f1656e0.svg";
const imgIconBook = "/assets/197f40d1-d76f-455a-8840-f15349c20e75.svg";
const imgIconLeaf = "/assets/d80758fe-752e-4e43-a7a9-f54a50d9cedc.svg";
const imgIconChevRight1 = "/assets/9bbf1d42-f5f4-4009-a02e-81f54ec73521.svg";
const imgIconSliders = "/assets/044877ac-5e10-4308-be0a-eb1230e4c2dc.svg";
const imgIconCompare = "/assets/e18e2ab8-19bd-45e8-8a9f-847514147660.svg";
const imgIconLeaf1 = "/assets/458c0c76-f759-4b4e-9120-9577894e9d9b.svg";
const imgIconStar = "/assets/c7fd98f6-09ed-4ae9-a0bb-9839eb71ba96.svg";
const imgIconShield = "/assets/bd984e15-0c12-4612-8900-7d0dac186ed5.svg";
const imgIconClock = "/assets/01e74031-2015-4b84-87d2-388ede042033.svg";
const imgIconPin = "/assets/2ccf5eda-547d-42cc-b68a-75abc03ab787.svg";
const imgIconX = "/assets/80e66c21-36cf-42c5-b89d-b33e686a2715.svg";
const imgIconBookmark = "/assets/eec0a35f-ceb1-4725-b72e-b58696309cdb.svg";
const imgIconCamera = "/assets/f45cc8b7-42a2-4242-a2d1-59ce3fcd5f81.svg";
const imgIconAlert = "/assets/d0698440-d91f-4897-9868-ef65989432f3.svg";
const imgIconBook1 = "/assets/21f5af6f-3833-40f6-916b-832f7695660c.svg";
const imgIconPhone = "/assets/8ec10315-10e8-4947-9242-e2f2e7a03825.svg";
const imgIconHome = "/assets/46cbca69-a7a8-420f-9713-9d7c66848796.svg";
const imgIconCompass = "/assets/f347f0e8-1ab1-4845-844e-0008b03046d9.svg";
const imgIconSearch1 = "/assets/8acbbeb3-7d48-4f8d-9a44-ceb5381877a7.svg";
const imgIconSprout = "/assets/041cf16b-f2c8-45e1-b8de-bf43a6529207.svg";

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

export default function Search2AiSummaryResults() {
  return (
    <div className="s209" data-node-id="8:330" data-name="Search - 2 · AI summary results">
      <StatusBar className="s19" />
      <div className="s251" data-node-id="8:347" data-name="Content">
        <div className="s125" data-node-id="8:348" data-name="Search header">
          <a className="s252" data-node-id="8:349" data-name="Button · Back">
            <div className="s46" data-node-id="8:350" data-name="icon/chevLeft">
              <img alt="" className="s4" src={imgIconChevLeft} />
            </div>
          </a>
          <div className="s253" data-node-id="8:352" data-name="Search field · with query">
            <div className="s33" data-node-id="8:353" data-name="icon/search">
              <img alt="" className="s4" src={imgIconSearch} />
            </div>
            <p className="s254" data-node-id="8:356">
              What can I do after retiring?
            </p>
            <div className="s33" data-node-id="8:357" data-name="icon/xCircle">
              <img alt="" className="s4" src={imgIconXCircle} />
            </div>
          </div>
          <p className="s255" data-node-id="8:360">
            Search
          </p>
        </div>
        <div className="s256" data-node-id="8:361" data-name="Result tabs">
          <div className="s257" data-node-id="8:362" data-name="Tabs (scroll)">
            <div className="s258" data-node-id="8:363" data-name="Tab · All">
              <p className="s259" data-node-id="8:364">
                All
              </p>
              <div className="s260" data-node-id="8:365" data-name="Indicator" />
            </div>
            <div className="s258" data-node-id="8:366" data-name="Tab · Activities">
              <p className="s261" data-node-id="8:367">
                Activities
              </p>
              <div className="s262" data-node-id="8:368" data-name="Indicator" />
            </div>
            <div className="s258" data-node-id="8:369" data-name="Tab · Courses">
              <p className="s261" data-node-id="8:370">
                Courses
              </p>
              <div className="s262" data-node-id="8:371" data-name="Indicator" />
            </div>
            <div className="s258" data-node-id="8:372" data-name="Tab · Volunteer">
              <p className="s261" data-node-id="8:373">
                Volunteer
              </p>
              <div className="s262" data-node-id="8:374" data-name="Indicator" />
            </div>
            <div className="s258" data-node-id="8:375" data-name="Tab · Flexible work">
              <p className="s261" data-node-id="8:376">
                Flexible work
              </p>
              <div className="s262" data-node-id="8:377" data-name="Indicator" />
            </div>
          </div>
          <div className="s263" data-node-id="8:378" data-name="Divider" />
          <a className="s264" data-node-id="8:379" data-name="Ask Compass tab">
            <div className="s81" data-node-id="8:380" data-name="icon/sparkle">
              <img alt="" className="s4" src={imgIconSparkle} />
            </div>
            <p className="s265" data-node-id="8:383">
              Ask Compass
            </p>
          </a>
        </div>
        <div className="s266" data-node-id="8:384" data-name="AI summary card · collapsed">
          <div className="s58" data-node-id="8:385" data-name="Top">
            <div className="s267" data-node-id="8:386" data-name="AI label">
              <div className="s3" data-node-id="8:387" data-name="icon/sparkle">
                <img alt="" className="s4" src={imgIconSparkle1} />
              </div>
              <p className="s268" data-node-id="8:390">
                Compass summary
              </p>
            </div>
            <div className="s144" data-node-id="8:607" data-name="Spacer" />
            <div className="s269" data-node-id="8:392" data-name="Button · About AI summaries">
              <div className="s41" data-node-id="8:393" data-name="icon/info">
                <img alt="" className="s4" src={imgIconInfo} />
              </div>
            </div>
          </div>
          <div className="s270" data-node-id="8:396" data-name="Preview (clipped)">
            <p className="s271" data-node-id="8:397">
              Three directions fit what you told us — Learning and Community, on weekday mornings, near home. Each has real, verified options:
            </p>
            <div className="s272" data-node-id="8:398" data-name="Direction 01">
              <p className="s273" data-node-id="8:399">
                01
              </p>
              <div className="s274" data-node-id="8:400" data-name="Text">
                <p className="s275" data-node-id="8:401">
                  Learn something new
                </p>
                <p className="s276" data-node-id="8:402">
                  5 options · e.g. Phone Photography, Tue 9:30 AM
                </p>
              </div>
            </div>
            <div className="s272" data-node-id="8:403" data-name="Direction 02">
              <p className="s273" data-node-id="8:404">
                02
              </p>
              <div className="s274" data-node-id="8:405" data-name="Text">
                <p className="s275" data-node-id="8:406">
                  Meet people through a shared task
                </p>
                <p className="s276" data-node-id="8:407">
                  4 options · e.g. Community Garden, Sat 10 AM
                </p>
              </div>
            </div>
            <div className="s272" data-node-id="8:408" data-name="Direction 03">
              <p className="s273" data-node-id="8:409">
                03
              </p>
              <div className="s274" data-node-id="8:410" data-name="Text">
                <p className="s275" data-node-id="8:411">
                  Share your experience
                </p>
                <p className="s276" data-node-id="8:412">
                  3 volunteer roles · most let you try once first
                </p>
              </div>
            </div>
            <div className="s277" data-node-id="8:413" data-name="Fade" />
          </div>
          <a className="s278" data-node-id="8:414" data-name="Continue in Ask Compass">
            <p className="s265" data-node-id="8:415">{`Read the full answer & ask more`}</p>
            <div className="s81" data-node-id="8:416" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight} />
            </div>
          </a>
          <a className="s279" data-node-id="8:418" data-name="Sources row">
            <div className="s280" data-node-id="8:419" data-name="Sources">
              <div className="s281" data-node-id="8:420" data-name="Source · building">
                <div className="s3" data-node-id="8:421" data-name="icon/building">
                  <img alt="" className="s4" src={imgIconBuilding} />
                </div>
              </div>
              <div className="s282" data-node-id="8:424" data-name="Source · book">
                <div className="s3" data-node-id="8:425" data-name="icon/book">
                  <img alt="" className="s4" src={imgIconBook} />
                </div>
              </div>
              <div className="s283" data-node-id="8:428" data-name="Source · leaf">
                <div className="s3" data-node-id="8:429" data-name="icon/leaf">
                  <img alt="" className="s4" src={imgIconLeaf} />
                </div>
              </div>
            </div>
            <p className="s284" data-node-id="8:432">
              12 verified listings · updated today
            </p>
            <div className="s81" data-node-id="8:433" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight1} />
            </div>
          </a>
        </div>
        <div className="s285" data-node-id="8:435" data-name="Results header">
          <div className="s286" data-node-id="8:436" data-name="Title">
            <p className="s287" data-node-id="8:437">
              Top matches
            </p>
            <p className="s288" data-node-id="8:438">
              3 of 12 results
            </p>
          </div>
          <div className="s289" data-node-id="8:439" data-name="Button · Filter">
            <div className="s81" data-node-id="8:440" data-name="icon/sliders">
              <img alt="" className="s4" src={imgIconSliders} />
            </div>
            <p className="s290" data-node-id="8:444">
              Filter
            </p>
          </div>
          <div className="s289" data-node-id="8:445" data-name="Button · Compare">
            <div className="s81" data-node-id="8:446" data-name="icon/compare">
              <img alt="" className="s4" src={imgIconCompare} />
            </div>
            <p className="s290" data-node-id="8:449">
              Compare
            </p>
          </div>
        </div>
        <div className="s228" data-node-id="8:450" data-name="Result list">
          <div className="s291" data-node-id="8:608" data-name="Result card · Community Garden Workshop">
            <div className="s292" data-node-id="8:609" data-name="Image · placeholder">
              <div className="s293" data-node-id="8:610" data-name="icon/leaf">
                <img alt="" className="s4" src={imgIconLeaf1} />
              </div>
            </div>
            <div className="s193" data-node-id="8:613" data-name="Info">
              <div className="s7" data-node-id="8:614" data-name="Badges">
                <div className="s294" data-node-id="8:615" data-name="Badge · Strong fit">
                  <div className="s295" data-node-id="8:616" data-name="icon/star">
                    <img alt="" className="s4" src={imgIconStar} />
                  </div>
                  <p className="s296" data-node-id="8:618">
                    Strong fit
                  </p>
                </div>
                <div className="s297" data-node-id="8:619" data-name="Badge · Verified">
                  <div className="s295" data-node-id="8:620" data-name="icon/shield">
                    <img alt="" className="s4" src={imgIconShield} />
                  </div>
                  <p className="s298" data-node-id="8:623">
                    Verified
                  </p>
                </div>
              </div>
              <p className="s299" data-node-id="8:624">
                Community Garden Workshop
              </p>
              <div className="s7" data-node-id="8:625" data-name="Meta · clock">
                <div className="s113" data-node-id="8:626" data-name="icon/clock">
                  <img alt="" className="s4" src={imgIconClock} />
                </div>
                <p className="s300" data-node-id="8:629">
                  Sat · 10:00 AM · weekly
                </p>
              </div>
              <div className="s7" data-node-id="8:630" data-name="Meta · pin">
                <div className="s113" data-node-id="8:631" data-name="icon/pin">
                  <img alt="" className="s4" src={imgIconPin} />
                </div>
                <p className="s300" data-node-id="8:634">
                  Riverside Park · 12 min
                </p>
              </div>
              <div className="s301" data-node-id="8:635" data-name="AI reason">
                <div className="s3" data-node-id="8:636" data-name="icon/sparkle">
                  <img alt="" className="s4" src={imgIconSparkle1} />
                </div>
                <p className="s302" data-node-id="8:639">
                  Community · outdoors · beginner-friendly
                </p>
              </div>
              <div className="s52" data-node-id="8:640" data-name="Actions">
                <p className="s303" data-node-id="8:641">
                  Why this?
                </p>
                <div className="s304" data-node-id="8:642" data-name="Not for me">
                  <div className="s3" data-node-id="8:643" data-name="icon/x">
                    <img alt="" className="s4" src={imgIconX} />
                  </div>
                  <p className="s300" data-node-id="8:645">
                    Not for me
                  </p>
                </div>
                <div className="s144" data-node-id="8:646" data-name="Spacer" />
                <div className="s305" data-node-id="8:647" data-name="Button · Save">
                  <div className="s33" data-node-id="8:648" data-name="icon/bookmark">
                    <img alt="" className="s4" src={imgIconBookmark} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s291" data-node-id="8:650" data-name="Result card · Phone Photography for Beginners">
            <div className="s306" data-node-id="8:651" data-name="Image · placeholder">
              <div className="s293" data-node-id="8:652" data-name="icon/camera">
                <img alt="" className="s4" src={imgIconCamera} />
              </div>
            </div>
            <div className="s193" data-node-id="8:655" data-name="Info">
              <div className="s7" data-node-id="8:656" data-name="Badges">
                <div className="s307" data-node-id="8:657" data-name="Badge · Partial fit">
                  <div className="s295" data-node-id="8:658" data-name="icon/alert">
                    <img alt="" className="s4" src={imgIconAlert} />
                  </div>
                  <p className="s296" data-node-id="8:661">
                    Partial fit
                  </p>
                </div>
                <div className="s297" data-node-id="8:662" data-name="Badge · Verified">
                  <div className="s295" data-node-id="8:663" data-name="icon/shield">
                    <img alt="" className="s4" src={imgIconShield} />
                  </div>
                  <p className="s298" data-node-id="8:666">
                    Verified
                  </p>
                </div>
              </div>
              <p className="s299" data-node-id="8:667">
                Phone Photography for Beginners
              </p>
              <div className="s7" data-node-id="8:668" data-name="Meta · clock">
                <div className="s113" data-node-id="8:669" data-name="icon/clock">
                  <img alt="" className="s4" src={imgIconClock} />
                </div>
                <p className="s300" data-node-id="8:672">
                  Tue · 9:30 AM · 6 weeks
                </p>
              </div>
              <div className="s7" data-node-id="8:673" data-name="Meta · pin">
                <div className="s113" data-node-id="8:674" data-name="icon/pin">
                  <img alt="" className="s4" src={imgIconPin} />
                </div>
                <p className="s300" data-node-id="8:677">
                  Public Library · 8 min
                </p>
              </div>
              <div className="s301" data-node-id="8:678" data-name="AI reason">
                <div className="s3" data-node-id="8:679" data-name="icon/sparkle">
                  <img alt="" className="s4" src={imgIconSparkle1} />
                </div>
                <p className="s302" data-node-id="8:682">
                  Learning · fee not listed yet
                </p>
              </div>
              <div className="s52" data-node-id="8:683" data-name="Actions">
                <p className="s303" data-node-id="8:684">
                  Why this?
                </p>
                <div className="s304" data-node-id="8:685" data-name="Not for me">
                  <div className="s3" data-node-id="8:686" data-name="icon/x">
                    <img alt="" className="s4" src={imgIconX} />
                  </div>
                  <p className="s300" data-node-id="8:688">
                    Not for me
                  </p>
                </div>
                <div className="s144" data-node-id="8:689" data-name="Spacer" />
                <div className="s305" data-node-id="8:690" data-name="Button · Save">
                  <div className="s33" data-node-id="8:691" data-name="icon/bookmark">
                    <img alt="" className="s4" src={imgIconBookmark} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s291" data-node-id="8:693" data-name="Result card · Library Reading Buddy">
            <div className="s308" data-node-id="8:694" data-name="Image · placeholder">
              <div className="s293" data-node-id="8:695" data-name="icon/book">
                <img alt="" className="s4" src={imgIconBook1} />
              </div>
            </div>
            <div className="s193" data-node-id="8:698" data-name="Info">
              <div className="s7" data-node-id="8:699" data-name="Badges">
                <div className="s294" data-node-id="8:700" data-name="Badge · Strong fit">
                  <div className="s295" data-node-id="8:701" data-name="icon/star">
                    <img alt="" className="s4" src={imgIconStar} />
                  </div>
                  <p className="s296" data-node-id="8:703">
                    Strong fit
                  </p>
                </div>
                <div className="s297" data-node-id="8:704" data-name="Badge · Verified">
                  <div className="s295" data-node-id="8:705" data-name="icon/shield">
                    <img alt="" className="s4" src={imgIconShield} />
                  </div>
                  <p className="s298" data-node-id="8:708">
                    Verified
                  </p>
                </div>
              </div>
              <p className="s299" data-node-id="8:709">
                Library Reading Buddy
              </p>
              <div className="s7" data-node-id="8:710" data-name="Meta · clock">
                <div className="s113" data-node-id="8:711" data-name="icon/clock">
                  <img alt="" className="s4" src={imgIconClock} />
                </div>
                <p className="s300" data-node-id="8:714">
                  2 hrs a week · you choose
                </p>
              </div>
              <div className="s7" data-node-id="8:715" data-name="Meta · pin">
                <div className="s113" data-node-id="8:716" data-name="icon/pin">
                  <img alt="" className="s4" src={imgIconPin} />
                </div>
                <p className="s300" data-node-id="8:719">
                  Public Library · 8 min
                </p>
              </div>
              <div className="s301" data-node-id="8:720" data-name="AI reason">
                <div className="s3" data-node-id="8:721" data-name="icon/sparkle">
                  <img alt="" className="s4" src={imgIconSparkle1} />
                </div>
                <p className="s302" data-node-id="8:724">
                  Uses your admin skills · try once first
                </p>
              </div>
              <div className="s52" data-node-id="8:725" data-name="Actions">
                <p className="s303" data-node-id="8:726">
                  Why this?
                </p>
                <div className="s304" data-node-id="8:727" data-name="Not for me">
                  <div className="s3" data-node-id="8:728" data-name="icon/x">
                    <img alt="" className="s4" src={imgIconX} />
                  </div>
                  <p className="s300" data-node-id="8:730">
                    Not for me
                  </p>
                </div>
                <div className="s144" data-node-id="8:731" data-name="Spacer" />
                <div className="s305" data-node-id="8:732" data-name="Button · Save">
                  <div className="s33" data-node-id="8:733" data-name="icon/bookmark">
                    <img alt="" className="s4" src={imgIconBookmark} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s309" data-node-id="8:584" data-name="See all">
          <p className="s310" data-node-id="8:585">
            See all 12 results
          </p>
        </div>
        <div className="s311" data-node-id="8:586" data-name="Human support">
          <div className="s81" data-node-id="8:587" data-name="icon/phone">
            <img alt="" className="s4" src={imgIconPhone} />
          </div>
          <p className="s300" data-node-id="8:589">
            None of these feel right?
          </p>
          <p className="s312" data-node-id="8:590">
            Talk to a person
          </p>
        </div>
      </div>
      <div className="s244" data-node-id="15:489" data-name="Navigation bar">
        <a className="s245" data-node-id="I15:489;15:294" data-name="Home icon">
          <div className="s46" data-node-id="I15:489;15:295" data-name="icon/home">
            <img alt="" className="s4" src={imgIconHome} />
          </div>
          <p className="s246" data-node-id="I15:489;15:297">
            Home
          </p>
        </a>
        <div className="s247" data-node-id="I15:489;15:298" data-name="Explore icon">
          <div className="s46" data-node-id="I15:489;15:299" data-name="icon/compass">
            <img alt="" className="s4" src={imgIconCompass} />
          </div>
          <p className="s248" data-node-id="I15:489;15:302">
            Explore
          </p>
        </div>
        <a className="s313" data-node-id="I15:489;15:303" data-name="Search icon">
          <div className="s46" data-node-id="I15:489;15:304" data-name="icon/search">
            <img alt="" className="s4" src={imgIconSearch1} />
          </div>
          <p className="s314" data-node-id="I15:489;15:307">
            Search
          </p>
        </a>
        <div className="s247" data-node-id="I15:489;15:308" data-name="My Journey icon">
          <div className="s46" data-node-id="I15:489;15:309" data-name="icon/sprout">
            <img alt="" className="s4" src={imgIconSprout} />
          </div>
          <p className="s248" data-node-id="I15:489;15:313">
            My Journey
          </p>
        </div>
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
