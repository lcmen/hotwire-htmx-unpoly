class ApplicationController < ActionController::Base
  allow_browser versions: :modern

  layout proc { htmx_request? ? "htmx" : "application" }

  private

  def htmx_request?
    request.env["HTTP_HX_REQUEST"].present?
  end

  def redirect_to(path, **kwargs)
    respond_to do |format|
      format.html { super }
      format.turbo_stream do
        kwargs.each do |(type, value)|
          flash[type] = value if self.class._flash_types.include?(type)
        end
        render turbo_stream: turbo_stream.action(:redirect, path)
      end
    end
  end
end
