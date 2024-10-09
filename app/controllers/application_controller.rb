class ApplicationController < ActionController::Base
  allow_browser versions: :modern

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
