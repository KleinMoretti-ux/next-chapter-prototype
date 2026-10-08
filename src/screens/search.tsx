const imgWifi = "/assets/332200cf-bc6e-4169-8d8b-a038a87ec736.svg";
const imgIconChevLeft = "/assets/ae662f1f-3990-45f2-b840-e246b483bcef.svg";
const imgIconSearch = "/assets/a619a1fd-4cb1-4da3-a348-6dfdb1f80711.svg";
const imgIconCameraScanAFlyer = "/assets/9fd98cbc-692e-4423-84b6-ec7ef36bd4e7.svg";
const imgIconTrash = "/assets/26cda91e-3edc-4c38-81b8-b069eb17c568.svg";
const imgIconClock = "/assets/784cde15-7943-4810-8cbc-1ab05135dc22.svg";
const imgIconSparkle = "/assets/185c374c-5820-45ad-abfd-984d5715e4bb.svg";
const imgIconSparkle1 = "/assets/8ec2cc93-32eb-44f0-adc5-addd09c80ca2.svg";
const imgIconChevRight = "/assets/974da9b1-ba65-4e9c-836f-9626d2985bb7.svg";
const imgIconShield = "/assets/ee11b278-cb59-49cd-b2af-c50d7dbc662f.svg";
const imgIconMic = "/assets/33019391-b4d9-420c-a71a-741e7842f034.svg";
const imgIconHome = "/assets/65b7b298-7156-4608-acaf-4cc7e940d34d.svg";
const imgIconCompass = "/assets/0c8c4d2a-86af-446c-85d7-fc3a2e9d1af4.svg";
const imgIconSearch1 = "/assets/03bdea2d-7dd8-4629-b335-b29ec19af9f8.svg";
const imgIconSprout = "/assets/d21ea897-60f4-4770-a9fb-79852289a08c.svg";

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

export default function Search1SearchEntry() {
  return (
    <div className="s209" data-node-id="1:3" data-name="Search - 1 · Search entry">
      <StatusBar className="s19" />
      <div className="s210" data-node-id="8:224" data-name="Content">
        <div className="s125" data-node-id="8:225" data-name="Search header">
          <div className="s211" data-node-id="8:226" data-name="Button · Back">
            <div className="s46" data-node-id="8:227" data-name="icon/chevLeft">
              <img alt="" className="s4" src={imgIconChevLeft} />
            </div>
          </div>
          <div className="s212" data-node-id="8:229" data-name="Search field · focused">
            <div className="s33" data-node-id="8:230" data-name="icon/search">
              <img alt="" className="s4" src={imgIconSearch} />
            </div>
            <p className="s213" data-node-id="8:233">
              Search activities, courses…
            </p>
            <div className="s46" data-node-id="8:234" data-name="icon/camera · scan a flyer">
              <img alt="" className="s4" src={imgIconCameraScanAFlyer} />
            </div>
          </div>
          <a className="s214" data-node-id="8:237">
            <p className="s215">Search</p>
          </a>
        </div>
        <div className="s216" data-node-id="8:238" data-name="Recent searches">
          <div className="s48" data-node-id="8:239" data-name="Header">
            <p className="s217" data-node-id="8:240">
              Recent searches
            </p>
            <div className="s218" data-node-id="8:241" data-name="Button · Clear recent searches">
              <div className="s33" data-node-id="8:242" data-name="icon/trash">
                <img alt="" className="s4" src={imgIconTrash} />
              </div>
            </div>
          </div>
          <div className="s67" data-node-id="8:244" data-name="Chips">
            <a className="s219" data-node-id="8:245" data-name="Chip · What can I do after retiring?">
              <div className="s81" data-node-id="8:246" data-name="icon/clock">
                <img alt="" className="s4" src={imgIconClock} />
              </div>
              <p className="s220" data-node-id="8:249">
                What can I do after retiring?
              </p>
            </a>
            <div className="s221" data-node-id="8:250" data-name="Chip · Tai chi near me">
              <div className="s81" data-node-id="8:251" data-name="icon/clock">
                <img alt="" className="s4" src={imgIconClock} />
              </div>
              <p className="s222" data-node-id="8:254">
                Tai chi near me
              </p>
            </div>
            <div className="s221" data-node-id="8:255" data-name="Chip · Weekend volunteering">
              <div className="s81" data-node-id="8:256" data-name="icon/clock">
                <img alt="" className="s4" src={imgIconClock} />
              </div>
              <p className="s222" data-node-id="8:259">
                Weekend volunteering
              </p>
            </div>
          </div>
        </div>
        <div className="s216" data-node-id="8:260" data-name="Try asking">
          <div className="s58" data-node-id="8:261" data-name="Header">
            <div className="s41" data-node-id="8:262" data-name="icon/sparkle">
              <img alt="" className="s4" src={imgIconSparkle} />
            </div>
            <p className="s217" data-node-id="8:265">
              Try asking in your own words
            </p>
          </div>
          <div className="s223" data-node-id="8:266" data-name="Suggestion · Something I can try once first">
            <div className="s81" data-node-id="8:267" data-name="icon/sparkle">
              <img alt="" className="s4" src={imgIconSparkle1} />
            </div>
            <p className="s224" data-node-id="8:270">
              Something I can try once first
            </p>
            <div className="s41" data-node-id="8:271" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight} />
            </div>
          </div>
          <div className="s223" data-node-id="8:273" data-name="Suggestion · Things I can do with a friend">
            <div className="s81" data-node-id="8:274" data-name="icon/sparkle">
              <img alt="" className="s4" src={imgIconSparkle1} />
            </div>
            <p className="s224" data-node-id="8:277">
              Things I can do with a friend
            </p>
            <div className="s41" data-node-id="8:278" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight} />
            </div>
          </div>
          <div className="s223" data-node-id="8:280" data-name="Suggestion · Ways to use my past work skills">
            <div className="s81" data-node-id="8:281" data-name="icon/sparkle">
              <img alt="" className="s4" src={imgIconSparkle1} />
            </div>
            <p className="s224" data-node-id="8:284">
              Ways to use my past work skills
            </p>
            <div className="s41" data-node-id="8:285" data-name="icon/chevRight">
              <img alt="" className="s4" src={imgIconChevRight} />
            </div>
          </div>
          <div className="s225" data-node-id="8:287" data-name="Personalisation note">
            <p className="s226" data-node-id="8:288">
              Based on your check-in: Learning, Community
            </p>
            <p className="s226" data-node-id="8:289">
              ·
            </p>
            <p className="s227" data-node-id="8:290">
              Edit
            </p>
          </div>
        </div>
        <div className="s228" data-node-id="8:291" data-name="Popular near you">
          <div className="s48" data-node-id="8:292" data-name="Header">
            <p className="s217" data-node-id="8:293">
              Popular near you this week
            </p>
            <div className="s70" data-node-id="8:294" data-name="Verified note">
              <div className="s81" data-node-id="8:295" data-name="icon/shield">
                <img alt="" className="s4" src={imgIconShield} />
              </div>
              <p className="s229" data-node-id="8:298">
                Verified
              </p>
            </div>
          </div>
          <div className="s230" data-node-id="8:299" data-name="Grid">
            <div className="s231" data-node-id="8:300" data-name="Row">
              <div className="s232" data-node-id="8:301" data-name="Item · Morning Qigong">
                <p className="s233" data-node-id="8:302">
                  1
                </p>
                <div className="s234" data-node-id="8:303" data-name="Text">
                  <p className="s235" data-node-id="8:304">
                    Morning Qigong
                  </p>
                  <p className="s236" data-node-id="8:305">
                    Riverside Park · free
                  </p>
                </div>
              </div>
              <div className="s232" data-node-id="8:306" data-name="Item · Kopi & Chat">
                <p className="s233" data-node-id="8:307">
                  2
                </p>
                <div className="s234" data-node-id="8:308" data-name="Text">
                  <p className="s235" data-node-id="8:309">{`Kopi & Chat`}</p>
                  <p className="s236" data-node-id="8:310">
                    Community Centre
                  </p>
                </div>
              </div>
            </div>
            <div className="s231" data-node-id="8:311" data-name="Row">
              <div className="s232" data-node-id="8:312" data-name="Item · Heritage Walk">
                <p className="s233" data-node-id="8:313">
                  3
                </p>
                <div className="s234" data-node-id="8:314" data-name="Text">
                  <p className="s235" data-node-id="8:315">
                    Heritage Walk
                  </p>
                  <p className="s236" data-node-id="8:316">
                    Tiong Bahru · Sat
                  </p>
                </div>
              </div>
              <div className="s232" data-node-id="8:317" data-name="Item · Phone Photography">
                <p className="s233" data-node-id="8:318">
                  4
                </p>
                <div className="s234" data-node-id="8:319" data-name="Text">
                  <p className="s235" data-node-id="8:320">
                    Phone Photography
                  </p>
                  <p className="s236" data-node-id="8:321">
                    Public Library
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="s237" data-node-id="8:322" data-name="Hold to ask">
        <div className="s238" data-node-id="8:323" data-name="Mic">
          <div className="s46" data-node-id="8:324" data-name="icon/mic">
            <img alt="" className="s4" src={imgIconMic} />
          </div>
        </div>
        <div className="s239" data-node-id="8:327" data-name="Text">
          <p className="s240" data-node-id="8:328">
            Hold to ask in your own words
          </p>
          <p className="s241" data-node-id="8:329">
            <span className="s215">{`English · `}</span>
            <span className="s242">中文</span>
            <span className="s215">{` · Melayu · `}</span>
            <span className="s243" style={{ fontVariationSettings: '"wdth" 100' }}>
              தமிழ்
            </span>
          </p>
        </div>
      </a>
      <div className="s244" data-node-id="15:466" data-name="Navigation bar">
        <a className="s245" data-node-id="I15:466;15:294" data-name="Home icon">
          <div className="s46" data-node-id="I15:466;15:295" data-name="icon/home">
            <img alt="" className="s4" src={imgIconHome} />
          </div>
          <p className="s246" data-node-id="I15:466;15:297">
            Home
          </p>
        </a>
        <div className="s247" data-node-id="I15:466;15:298" data-name="Explore icon">
          <div className="s46" data-node-id="I15:466;15:299" data-name="icon/compass">
            <img alt="" className="s4" src={imgIconCompass} />
          </div>
          <p className="s248" data-node-id="I15:466;15:302">
            Explore
          </p>
        </div>
        <div className="s249" data-node-id="I15:466;15:303" data-name="Search icon">
          <div className="s46" data-node-id="I15:466;15:304" data-name="icon/search">
            <img alt="" className="s4" src={imgIconSearch1} />
          </div>
          <p className="s250" data-node-id="I15:466;15:307">
            Search
          </p>
        </div>
        <div className="s247" data-node-id="I15:466;15:308" data-name="My Journey icon">
          <div className="s46" data-node-id="I15:466;15:309" data-name="icon/sprout">
            <img alt="" className="s4" src={imgIconSprout} />
          </div>
          <p className="s248" data-node-id="I15:466;15:313">
            My Journey
          </p>
        </div>
      </div>
      <HomeIndicator className="s35" />
    </div>
  );
}
