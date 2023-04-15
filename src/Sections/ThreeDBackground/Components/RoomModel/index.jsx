import React, { useContext, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LoadingContext } from "../../../../Context/LoadingContext"
gsap.registerPlugin(ScrollTrigger)

function RoomModel() {
  const { roomModel } = useContext(LoadingContext)

  const roomLocations = {
    heroPos: {
      x: 0,
      y: 0,
      z: 3,
    },
    heroRot: {
      x: 0,
      y: 0,
      z: 0,
    },

    servicesPos: {
      x: 0,
      y: 0.5,
      z: 3.7,
    },
    servicesRot: {
      x: 0,
      y: -1.2,
      z: 0,
    },

    worksPos: {
      x: -0.26,
      y: 0.4,
      z: 4.2,
    },
    worksRot: {
      x: 0,
      y: -1.4,
      z: 0,
    },

    contactPos: {
      x: 0.17,
      y: 0.4,
      z: 4.38,
    },
    contactRot: {
      x: 0,
      y: 0,
      z: 0,
    },
  }

  useLayoutEffect(() => {
    const animate = gsap.timeline()

    animate.to(
      roomModel.position,
      {
        x: roomLocations.heroPos.x,
        y: roomLocations.heroPos.y,
        z: roomLocations.heroPos.z,
        duration: 1.3,
        ease: "power3.out",
      },
      0
    )

    animate.to(
      roomModel.rotation,
      {
        x: roomLocations.heroRot.x,
        y: roomLocations.heroRot.y,
        z: roomLocations.heroRot.z,
        duration: 1.3,
        ease: "power3.out",
      },
      0
    )

    animate.fromTo(
      roomModel.position,
      {
        x: roomLocations.heroPos.x,
        y: roomLocations.heroPos.y,
        z: roomLocations.heroPos.z,
      },
      {
        scrollTrigger: {
          trigger: "#section_services",
          start: "top bottom",
          end: "center center",

          snap: 1,
          scrub: 0.4,
        },
        x: roomLocations.servicesPos.x,
        y: roomLocations.servicesPos.y,
        z: roomLocations.servicesPos.z,
      }
    )

    animate.fromTo(
      roomModel.rotation,
      { x: roomLocations.heroRot.x, y: roomLocations.heroRot.y, z: roomLocations.heroRot.z },
      {
        scrollTrigger: {
          trigger: "#section_services",
          start: "top bottom",
          end: "center center",
          snap: 1,
          scrub: 0.4,
        },
        x: roomLocations.servicesRot.x,
        y: roomLocations.servicesRot.y,
        z: roomLocations.servicesRot.z,
      }
    )

    animate.fromTo(
      roomModel.position,
      { x: roomLocations.servicesPos.x, y: roomLocations.servicesPos.y, z: roomLocations.servicesPos.z },
      {
        scrollTrigger: {
          trigger: "#section_works",
          start: "top bottom",
          end: "center center",
          snap: 1,
          scrub: 0.4,
        },
        x: roomLocations.worksPos.x,
        y: roomLocations.worksPos.y,
        z: roomLocations.worksPos.z,
      }
    )
    animate.fromTo(
      roomModel.rotation,
      { x: roomLocations.servicesRot.x, y: roomLocations.servicesRot.y, z: roomLocations.servicesRot.z },
      {
        scrollTrigger: {
          trigger: "#section_works",
          start: "top bottom",
          end: "center center",
          snap: 1,
          scrub: 0.4,
        },
        x: roomLocations.worksRot.x,
        y: roomLocations.worksRot.y,
        z: roomLocations.worksRot.z,
      }
    )

    animate.fromTo(
      roomModel.position,
      { x: roomLocations.worksPos.x, y: roomLocations.worksPos.y, z: roomLocations.worksPos.z },
      {
        scrollTrigger: {
          trigger: "#section_contact",
          start: "top bottom",
          end: "center center",
          snap: 1,
          scrub: 0.4,
        },
        x: roomLocations.contactPos.x,
        y: roomLocations.contactPos.y,
        z: roomLocations.contactPos.z,
      }
    )
    animate.fromTo(
      roomModel.rotation,
      { x: roomLocations.worksRot.x, y: roomLocations.worksRot.y, z: roomLocations.worksRot.z },
      {
        scrollTrigger: {
          trigger: "#section_contact",
          start: "top bottom",
          end: "center center",
          snap: 1,
          scrub: 0.4,
        },
        x: roomLocations.contactRot.x,
        y: roomLocations.contactRot.y,
        z: roomLocations.contactRot.z,
      }
    )

    animate.fromTo(
      roomModel.position,
      {
        x: roomLocations.contactPos.x,
        y: roomLocations.contactPos.y,
        z: roomLocations.contactPos.z,
      },
      {
        scrollTrigger: {
          trigger: "#section_footer",
          start: "top bottom",
          end: "bottom bottom",
          snap: 1,
          scrub: 0.4,
        },
        x: roomLocations.heroPos.x,
        y: roomLocations.heroPos.y,
        z: roomLocations.heroPos.z,
      }
    )
  }, [])

  return <primitive object={roomModel} />
}

export default RoomModel
