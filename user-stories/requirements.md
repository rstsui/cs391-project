# Spark!Bytes — Project Requirements

## Functional Requirements

### 1. User Accounts & Authentication
| Requirement | Description |
|--------------|-------------|
| **BU Login (SSO/Kerberos)** | Users must sign up and log in using official BU credentials via SSO. |
| **Account Creation** | Only BU-affiliated users can register; non-BU users are denied access. |
| **Profile Management** | Users can edit dietary preferences and notification settings. |
| **Password Reset** | Users can reset forgotten passwords through secure verification. |
| **Session Management** | Secure login persistence with logout functionality. |

---

### 2. Role-Based Permissions
| Role | Capabilities |
|------|---------------|
| **Students** | Browse, reserve, and claim food; report posts and users. |
| **Faculty/Staff** | Create and manage events, view analytics. |
| **Shared Permissions** | Edit profiles, adjust notifications, and view all listings. |

---

### 3. Event Creation & Management
| Requirement | Description |
|--------------|-------------|
| **Create Events** | Organizers can post events with title, description, date/time, location, and food details. |
| **Edit & Cancel Events** | Events can be updated or removed; attendees are notified of changes. |
| **Recurring Events** | Support for recurring (weekly/monthly) events. |
| **Out-of-Stock / Expiration** | Hosts can mark events as “out of stock”; events auto-expire after their end time. |
| **Attachments** | Hosts can add images, Google Maps links, social media, or contact info. |
| **Dietary Flairs** | Hosts can tag food items (vegan, halal, gluten-free, etc.) for filtering. |
| **Analytics Dashboard** | Shows reservation counts, cancellations, and attendance insights. |

---

### 4. Event Browsing & Discovery
| Requirement | Description |
|--------------|-------------|
| **Event Feed** | Users can view all active events in a list or map view. |
| **Event Details** | Includes organizer info, food type, dietary tags, and availability status. |
| **Search & Filters** | Users can search by keyword, location, date/time, or dietary tag. |
| **Sorting** | Events can be sorted by proximity, recency, or time. |
| **Bookmarking** | Users can save and revisit events later. |

---

### 5. Food Reservation & Claiming
| Requirement | Description |
|--------------|-------------|
| **Reserve Food** | Students can reserve specific quantities from events. |
| **Cancel Reservation** | Users can unclaim food reservations, freeing up availability. |
| **Pickup Notifications** | Notifications sent when reserved food is ready for pickup. |
| **Quota Management** | One reservation per user per event (or as defined by organizers). |
| **Organizer Tracking** | Hosts can monitor total reservations and cancellations. |

---

### 6. Notifications
| Requirement | Description |
|--------------|-------------|
| **Event Alerts** | Users receive notifications for new, edited, or canceled events. |
| **Reservation Updates** | Users are notified when food is ready or out of stock. |
| **Delivery Channels** | Notifications appear both in-app and optionally as push/email alerts. |
| **User Preferences** | Users can toggle notifications via their profile. |

---

### 7. Messaging & Communication
| Requirement | Description |
|--------------|-------------|
| **In-App Chat** | Students and organizers can message to coordinate pickups. |
| **Timeouts** | Chats automatically close after inactivity or completion. |
| **Moderation Integration** | Offensive or harassing messages trigger auto-reporting or blocking. |

---

### 8. Moderation & Safety
| Requirement | Description |
|--------------|-------------|
| **Report Users** | Users can flag harassment or inappropriate behavior in chat. |
| **Report Posts** | Users can report misleading or unsafe food posts. |
| **Automated Review** | A moderation API may process flagged content for review. |
| **Blocking Mechanism** | Reported users can be blocked from viewing or interacting. |

---

### 9. Usability & Accessibility
| Requirement | Description |
|--------------|-------------|
| **Google Maps Integration** | Event listings link to Google Maps directions. |
| **Accessible UI** | High contrast, alt text, and keyboard-friendly navigation. |
| **Mobile Responsiveness** | Optimized for use on phones and tablets. |
| **Status Indicators** | Clear markers for “Available,” “Out of Stock,” or “Expired.” |

---

## Non-Functional Requirements
| Category | Requirement |
|-----------|-------------|
| **Security** | Enforce BU-only SSO access; encrypt all user data. |
| **Performance** | Handle concurrent event posting and reservations with minimal lag. |
| **Scalability** | Support an increasing number of users and events. |
| **Reliability** | Ensure consistent data syncing and uptime. |
| **Usability** | Provide intuitive and minimal-click navigation. |
| **Accessibility** | Meet WCAG standards for inclusive design. |

---

## Feature Prioritization
| Feature | Priority | User Type |
|----------|-----------|------------|
| BU Authentication (SSO) | High | All |
| Role-Based Permissions | High | All |
| Event Creation & Editing | High | Faculty / Organizers |
| Event Feed & Search | High | Students |
| Reservation System | High | Students |
| Notifications | High | All |
| Dietary Tags & Filters | High | All |
| Out-of-Stock / Expiration | High | Organizers |
| Bookmarking | Medium | Students |
| Organizer Analytics | Medium | Faculty / Organizers |
| Reporting / Moderation | Medium | All |
| In-App Chat | Medium | Students & Organizers |