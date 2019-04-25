import React, { Component } from "react";
import "./AddReview.scss";

class AddReview extends Component {
  render() {
    return (
      <div class="widget-post" aria-labelledby="post-header-title">
        <div class="widget-post__header">
          <h2 class="widget-post__title" id="post-header-title">
            <i class="fa fa-pencil" aria-hidden="true" />
            Write review
          </h2>
        </div>
        <form
          id="widget-form"
          class="widget-post__form"
          name="form"
          aria-label="post widget"
        >
          <div class="widget-post__content">
            <label for="post-content" class="sr-only">
              Add your review here....
            </label>
            <textarea
              name="post"
              id="post-content"
              class="widget-post__textarea scroller"
              placeholder="Add your review here...."
            />
          </div>

          <div class="widget-post__actions post--actions">
            <div class="post-actions__attachments" />
            <div class="post-actions__widget ">
              <button class="post-actions__publish">Publish</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddReview;
