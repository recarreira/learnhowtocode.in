---
layout: page
title: Python
language: python
---

<div class="container main-content">
    <div class="row">
        <div class="span3">
            <ul class="unstyled" id="languages-nav" data-spy="affix">
                <li><a href="#english">English</a></li>
                <li><a href="#portuguese">Português</a></li>
            </ul>
        </div>
        <div class="span9">
            <div class="tab-content">
                <div class="tab-pane" id="portuguese">
                {% capture pt %}{% include python/portuguese.md %}{% endcapture %}
                {{ pt | markdownify }}
                </div>
                <div class="tab-pane" id="english">
                {% capture en %}{% include python/english.md %}{% endcapture %}
                {{ en | markdownify }}
                </div>
            </div>
        </div>
    </div>
</div>
