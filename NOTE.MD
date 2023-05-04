- Cấu hình lại web.xml (filter)
	<filter>
		<filter-name>CorsFilter</filter-name>
		<filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
		<init-param>
			<param-name>cors.allowed.origins</param-name>
			<param-value>http://localhost:3000</param-value>
		</init-param>
		<init-param>
			<param-name>cors.support.credentials</param-name>
			<param-value>true</param-value>
		</init-param>
	</filter>

	<filter-mapping>
		<filter-name>CorsFilter</filter-name>
		<url-pattern>/*</url-pattern>
	</filter-mapping>


- Hình ảnh (lưu nhiều hình ảnh)
    + Base64 (Là phương thức convert dạng mã hóa 2 chiều từ binary sang string để có thể gửi đi được trong network một cách dễ dàng)


	+ Hàm nén hình ảnh
            public static byte[] compressImage(byte[] data) {
            Deflater deflater = new Deflater();
            deflater.setLevel(Deflater.BEST_COMPRESSION);
            deflater.setInput(data);
            deflater.finish();

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
            byte[] tmp = new byte[4*1024];
            while (!deflater.finished()) {
                int size = deflater.deflate(tmp);
                outputStream.write(tmp, 0, size);
            }
            try {
                outputStream.close();
            } catch (Exception ignored) {
            }
            return outputStream.toByteArray();
        }

	+ giải nén hình ảnh
		public static byte[] decompressImage(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] tmp = new byte[4*1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(tmp);
                outputStream.write(tmp, 0, count);
            }
            outputStream.close();
        } catch (Exception ignored) {
        }
        return outputStream.toByteArray();
    }

    - Trả về object book
        {
            "id": 1,
            "name": "Sách 1",
            "author": "Tác giả 1",
            "languages": "Ngôn ngữ 1",
            "length": 454,
            "price": 2090,
            "description": "Mô tả sách 1",
            "images": 
                [
                    {
                        id: 1,
                        name: 'Hình ảnh 1'
                        type: image/jpeg,
                        data: '.........................'
                    },
                    {
                        id: 2,
                        name: 'Hình ảnh 2'
                        type: image/jpg,
                        data: '.........................'
                    }
                ]
        }
    
    - Trả về mảng book 
    [
        {
            "id": 1,
            "name": "Sách 1",
            "author": "Tác giả 1",
            "languages": "Ngôn ngữ 1",
            "length": 454,
            "price": 2090,
            "description": "Mô tả sách 1",
            "images": 
                [
                    {
                        id: 1,
                        name: 'Hình ảnh 1'
                        type: image/jpeg,
                        data: '.........................'
                    },
                    {
                        id: 2,
                        name: 'Hình ảnh 2'
                        type: image/jpg,
                        data: '.........................'
                    }
                ]
        }

        {
            "id": 2,
            "name": "Sách 2",
            "author": "Tác giả 2",
            "languages": "Ngôn ngữ 2",
            "length": 454,
            "price": 2090,
            "description": "Mô tả sách 2",
            "images": 
                [
                    {
                        id: 1,
                        name: 'Hình ảnh 1'
                        type: image/jpeg,
                        data: '.........................'
                    },
                    {
                        id: 2,
                        name: 'Hình ảnh 2'
                        type: image/jpg,
                        data: '.........................'
                    }
                ]
        }
    ]

	
-JSON (dạng trả về)
    - Trên trình duyệt

    + successful create book
	response.setStatus(HttpServletResponse.SC_CREATED);
	response.getWriter().print(bookObj);

    + failed create book
    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
	response.getWriter().println("{\"error\": \"Tạo sách thất bại có lỗi xảy ra trên server\"}");
