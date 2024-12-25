class ApplicationFormBuilder < ActionView::Helpers::FormBuilder
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::UrlHelper

  CANCEL_CLASSES = %w[button gray]
  TEXT_FIELD_CLASSES = %w[block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full].freeze
  SUBMIT_CLASSES = %w[button green]

  def cancel(value, url = nil, options = {})
    value, url, options = "Cancel", value, url if url.nil? || url.is_a?(Hash)
    classes = options.delete(:class)
    options[:class] = class_names(CANCEL_CLASSES, classes)
    link_to(value, url, options)
  end

  def text_field(method, options = {})
    classes = options.delete(:class)
    options[:class] = class_names(TEXT_FIELD_CLASSES, classes)
    super
  end

  def submit(value = nil, options = {})
    value, options = nil, value if value.is_a?(Hash)
    classes = Array.wrap(options.delete(:class))
    options[:class] = (SUBMIT_CLASSES + classes).compact.join(" ")
    super(value, options)
  end
end
