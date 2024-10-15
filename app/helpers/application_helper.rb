module ApplicationHelper
  def hx_form_method(record)
    if record.persisted?
      :hx_patch
    else
      :hx_post
    end
  end
end
