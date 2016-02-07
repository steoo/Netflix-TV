/**
 * This class represents a View for a single channel
 * */

export class ChannelsContainer {
    constructor(position) {
        this.$position = $(position);
        this.template = `<div class="lolomoRow lolomoRow_title_card">
                            <h2 class="rowHeader">
                                <a class="rowTitle" href="javascript:void(0)">
                                    <span>Channels</span>
                                </a>
                            </h2>
                             <div class="rowContainer rowContainer_title_card">
                                <div class="rowContent slider-hover-trigger-layer">
                                    <div class="slider">
                                       <div class="sliderMask showPeek">
                                            <div class="sliderContent row-with-x-columns channels-container"></div>
                                       </div>
                                    </div>
                                </div>
                             </div>
                         </div>`;
        this.$template = $(this.template);
        this.$container = null;
    }

    render() {
        /** Building the container for the channels */
        this.$container = this.$template.insertAfter(this.$position);
        this.$container = this.$container.find(".channels-container");
        console.log("Rendered: ", this.$container);
    }

    renderChannel(channel) {
        console.log("Rendering channel: ", channel);
        this.$container.append(channel.render());
    }

}

export class Channel {

    constructor(model) {
        this.model = model;
    }

    render() {
        let name = this.model.name;
        let id = this.model.id;

        return `<div class="slider-item slider-item-${id}">
                    <div class="title-card-container">
                        <div id="title-card-${id}-${name}" class="smallTitleCard lockup title_card sliderRefocus " tabindex="0" aria-label="${name}" role="link">
                            <div class="ptrack-content">
                                <a href="/browse/genre/${id}" class="rowTitle">
                                    <h2>${name}</h2>
                                    <div class="video-artwork" style="background-image:url(http://cdn1.nflximg.net/webp/2305/23132305.webp);"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}