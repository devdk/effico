export const GET_EVENTS = `
query listEvents {
  events:listVirtuosoEvents {
    items {
      EventID
    }
  }
}
`;

// export const GET_PAGINATED_EVENTS_BY_CATEGORY = `
// query listEvents($category: String, $nextToken: String = "", $limit: Int = 15) {
//   events:listVirtuosoEvents(filter: { EventCategory: { eq: $category } }, nextToken: $nextToken, limit: $limit) {
//     items {
//       EventID
//       EventImages
//       EventName
//       venue {
//         VenueName
//         VenueProfileImage
//         VenueID
//       }
//     }
//     nextToken
//   }
// }
// `;

export const GET_EVENT = `
query getEvent($eventId: String!) {
  event: getVirtuosoEvents(EventID: $eventId) {
    EventCategory
    EventCreatorID
    EventDate
    StartTime
    EndTime
    EventDescription
    EventImages
    EventName
    EventID
    Price
    isLive
    isEventLive
    isVipEntryAllowed
    streamingConfiguration {
      playbackURL
    }
    vipPrice
    venue {
      VenueProfileCover
      VenueName
    }
    eventOwner {
      avatar
      name
      sub
    }
    sitemap {
      SiteMapName
      SiteMapID
    }
    StageStreamMaps {
      stageID
      stageName
      streamID
      stream {
        streamID
        streamName
      }
    }
    VenueID
  }
}
`;
