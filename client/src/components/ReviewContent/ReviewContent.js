import React, { Component } from "react";
import "./ReviewContent.scss";

class ReviewContent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="content-wrap">
          <div class="comment-item">
            <div class="comment-item--inner">
              <div class="is-left">
                <figure class="avatar">
                  <img
                    src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijsZ277OnhAhWWUn0KHY74CXoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.tekneitalia.com%2Fcatalog%2Fplaceholder-thumb-imgs%2F&psig=AOvVaw3ByAKDwCUaJfk_6dT3lNOR&ust=1556233700403608"
                    alt=""
                  />
                </figure>
              </div>
              <div class="is-right">
                <div class="is-right--inner">
                  <a href="" class="name">
                    Tawhid Abdullah
                  </a>
                  <small>1 month ago</small>
                  <div class="the--comment">
                    <p>
                      doloremque quia, quis inventore est vel magnam sit
                      nesciunt provident. Quasi!
                    </p>
                  </div>
                  <div class="ratings">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="shareCount plus feather feather-chevron-up"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    <span class="share share-count share-plus">1</span>{" "}
                    <span class="bar">|</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="shareCount minus feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>{" "}
                    <span class="share share-count share-minus" />
                    <span class="share sharing-init">Share</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="sharing-option">
              <div class="sharing-container">
                <ul class="social-icons">
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-pinterest-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-twitter-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-medium" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="close sharing-init">
                <i class="fa fa-close" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrap">
          <div class="comment-item">
            <div class="comment-item--inner">
              <div class="is-left">
                <figure class="avatar">
                  <img
                    src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijsZ277OnhAhWWUn0KHY74CXoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.tekneitalia.com%2Fcatalog%2Fplaceholder-thumb-imgs%2F&psig=AOvVaw3ByAKDwCUaJfk_6dT3lNOR&ust=1556233700403608"
                    alt=""
                  />
                </figure>
              </div>
              <div class="is-right">
                <div class="is-right--inner">
                  <a href="" class="name">
                    Tawhid Abdullah
                  </a>
                  <small>1 month ago</small>
                  <div class="the--comment">
                    <p>
                      doloremque quia, quis inventore est vel magnam sit
                      nesciunt provident. Quasi!
                    </p>
                  </div>
                  <div class="ratings">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="shareCount plus feather feather-chevron-up"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    <span class="share share-count share-plus">1</span>{" "}
                    <span class="bar">|</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="shareCount minus feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>{" "}
                    <span class="share share-count share-minus" />
                    <span class="share sharing-init">Share</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="sharing-option">
              <div class="sharing-container">
                <ul class="social-icons">
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-pinterest-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-twitter-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-medium" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="close sharing-init">
                <i class="fa fa-close" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrap">
          <div class="comment-item">
            <div class="comment-item--inner">
              <div class="is-left">
                <figure class="avatar">
                  <img
                    src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijsZ277OnhAhWWUn0KHY74CXoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.tekneitalia.com%2Fcatalog%2Fplaceholder-thumb-imgs%2F&psig=AOvVaw3ByAKDwCUaJfk_6dT3lNOR&ust=1556233700403608"
                    alt=""
                  />
                </figure>
              </div>
              <div class="is-right">
                <div class="is-right--inner">
                  <a href="" class="name">
                    Tawhid Abdullah
                  </a>
                  <small>1 month ago</small>
                  <div class="the--comment">
                    <p>
                      doloremque quia, quis inventore est vel magnam sit
                      nesciunt provident. Quasi!
                    </p>
                  </div>
                  <div class="ratings">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="shareCount plus feather feather-chevron-up"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    <span class="share share-count share-plus">1</span>{" "}
                    <span class="bar">|</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="shareCount minus feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>{" "}
                    <span class="share share-count share-minus" />
                    <span class="share sharing-init">Share</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="sharing-option">
              <div class="sharing-container">
                <ul class="social-icons">
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-pinterest-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-twitter-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="icon">
                    <a href="">
                      <i class="fa fa-medium" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="close sharing-init">
                <i class="fa fa-close" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewContent;
