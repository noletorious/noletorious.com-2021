import FadeInWhenVisible from "../fadeInWhenVisible";
import FancyImage from "../fancyImage";
import * as Styled from "../scaffold";
import ProjectHeader from "../projectHeader";
import ProjectFooterLinks from "../projectFooterLinks";
import ResponsivePlayer from "../responsivePlayer";
import { Carousel } from "react-responsive-carousel";

export default function HopContent({}) {
  return (
    <Styled.ContentWrap>
      <ProjectHeader
        image="/hop/hop-tap.jpg"
        logo="/hop/hop-fastpass-circle.png"
        logoWidth="150"
        logoHeight="150"
        colors={[
          "rgb(42, 4, 134)",
          "rgb(254, 203, 56)",
          "rgb(255, 107, 0)",
          "rgb(141, 198, 64)",
          "rgb(114 175 212)",
          "rgba(42, 4, 134, .98)",
        ]}
        position="Web/Motion Designer"
        description="Hand model, video production, motion graphics, 2D animation, interaction design"
      />
      {/* myhopcard.com website */}
      <Styled.Section first>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
            <Styled.TextsAndLinksLeft>
              <Styled.TextAndLinksInner>
                I provide our development team design guidance and references to
                implement. I also produce all motion graphics on the website,
                app and commercial content.
              </Styled.TextAndLinksInner>
              <Styled.SectionLinkWrap>
                <Styled.SectionLink href={"https://myhopcard.com"} passHref>
                  <a target="_blank">myhopcard.com</a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
            </Styled.TextsAndLinksLeft>
            <div>
              <Styled.MediaWrap>
                <FancyImage
                  image={"/hop/myhopcard.com.png"}
                  width={2000}
                  height={1126}
                  boxRadius
                />
              </Styled.MediaWrap>
            </div>
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Solving problem set example */}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
            <Styled.TextsAndLinksRight>
              <Styled.TextAndLinksInner>
                My team recieves regularly feedback from customer support on
                reccuring issues. A direct problem example we alleviated was
                helping riders figure out which payment method fits their needs,
                as there was some confusion given all the options.
              </Styled.TextAndLinksInner>
              <Styled.SectionLinkWrap>
                <Styled.SectionLink
                  href="https://trimet.org/waystopay"
                  passHref
                >
                  <a target="_blank">Whats my fare questionnare</a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
            </Styled.TextsAndLinksRight>
            <Styled.CarouselMediaWrap>
              <Carousel
                autoPlay
                interval={18000}
                infiniteLoop
                stopOnHover
                dynamicHeight={true}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                transitionTime={1000}
              >
                <Styled.CarouselItem>
                  <Styled.BoxRadius>
                    <FancyImage
                      image="/hop/hop-whatsmyfare.jpg"
                      width={2000}
                      height={1106}
                    />
                  </Styled.BoxRadius>
                  <p className="carousel-context">Mapping the problem</p>
                </Styled.CarouselItem>
                <Styled.CarouselItem>
                  <Styled.ReactPlayerWrap>
                    <ResponsivePlayer url="/hop/hop-whatsmyfare.mp4" />
                  </Styled.ReactPlayerWrap>
                  <p className="carousel-context">Questionnare solution</p>
                </Styled.CarouselItem>
              </Carousel>
            </Styled.CarouselMediaWrap>
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Working with Apple */}
      <Styled.CenteredRowsSection>
        <FadeInWhenVisible>
          <Styled.MediaWrap>
            <FancyImage
              boxRadius
              image="/hop/hop-vc-tap.jpg"
              width={1500}
              height={500}
            />
          </Styled.MediaWrap>
          <Styled.Paragraph>
            Collaborated directly with Apple's Marketing team promoting{" "}
            <Styled.SectionLink href="https://trimet.org/applepay/" passHref>
              <a target="_blank">Virtual Card + ApplePay</a>
            </Styled.SectionLink>{" "}
            and{" "}
            <Styled.SectionLink href="https://youtu.be/44fJcKEdTQs" passHref>
              <a target="_blank">produced how-to videos</a>
            </Styled.SectionLink>
            .
          </Styled.Paragraph>
        </FadeInWhenVisible>
      </Styled.CenteredRowsSection>
      {/* Fun animations */}{" "}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
            <Styled.TextsAndLinksLeft>
              <Styled.TextAndLinksInner>
                Responsible for creating fun animations for marketing campaigns.
              </Styled.TextAndLinksInner>
              <Styled.SectionLinkWrap>
                <Styled.SectionLink
                  href="/https://dribbble.com/shots/11102697-Hop-Fastpass-Where-to-get-a-card"
                  passHref
                >
                  <a target="_blank">Dribbble</a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
            </Styled.TextsAndLinksLeft>
            <div>
              <Styled.MediaWrap>
                <Styled.BoxRadius>
                  <ResponsivePlayer url="/hop/hop-plaidpantry.webm" />
                </Styled.BoxRadius>
              </Styled.MediaWrap>
            </div>
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Launch campaign ads */}{" "}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
            <Styled.TextsAndLinksRight>
              <Styled.TextAndLinksInner>
                Created the Hop Fastpass launch animation ads.
              </Styled.TextAndLinksInner>
              <Styled.SectionLinkWrap>
                <Styled.SectionLink
                  href="/https://youtu.be/K0rsCD-jTBk"
                  passHref
                >
                  <a target="_blank">Hop Fastpass Youtube</a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
            </Styled.TextsAndLinksRight>
            <div>
              <Styled.MediaWrap>
                <Styled.BoxRadius>
                  <ResponsivePlayer url="/hop/hop-30secad.webm" />
                </Styled.BoxRadius>
              </Styled.MediaWrap>
            </div>
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Improving proof of fare */}{" "}
      <Styled.CenteredRowsSection>
        <Styled.CenteredRowBgHelper bgColor={"#101010"}>
          <Styled.PortraitMediaWrap extraSmall>
            <FancyImage
              image="/hop/hop-googleVC.gif"
              width={500}
              height={1080}
            />
          </Styled.PortraitMediaWrap>
          <Styled.Paragraph>
            Added an extra layer of security by animating the Hopster mascots
            within app's{" "}
            <Styled.SectionLink href="https://myhopcard.com/home/pay-with-your-phone">
              virtual card
            </Styled.SectionLink>{" "}
            validator.
          </Styled.Paragraph>
        </Styled.CenteredRowBgHelper>
      </Styled.CenteredRowsSection>
      {/*Logo + Next page link */}
      <ProjectFooterLinks nextLink={"/attensa"} next={"Attensa"} />
      <Styled.ImageFooter bgColor={"#000"} image={"/hop/hop-animation.gif"} />
    </Styled.ContentWrap>
  );
}
