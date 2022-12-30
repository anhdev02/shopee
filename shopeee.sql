PGDMP     #    *                z            shopeee    14.5    14.5 N    f           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            g           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            h           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            i           1262    16528    shopeee    DATABASE     k   CREATE DATABASE shopeee WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE shopeee;
                postgres    false            �            1259    16592    attr_values    TABLE     �   CREATE TABLE public.attr_values (
    id integer NOT NULL,
    product_id smallint NOT NULL,
    attribute_id smallint NOT NULL,
    "values" text NOT NULL
);
    DROP TABLE public.attr_values;
       public         heap    postgres    false            �            1259    16591    attr_values_id_seq    SEQUENCE     �   CREATE SEQUENCE public.attr_values_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.attr_values_id_seq;
       public          postgres    false    218            j           0    0    attr_values_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.attr_values_id_seq OWNED BY public.attr_values.id;
          public          postgres    false    217            �            1259    16578 
   attributes    TABLE     x   CREATE TABLE public.attributes (
    id integer NOT NULL,
    category_id smallint NOT NULL,
    label text NOT NULL
);
    DROP TABLE public.attributes;
       public         heap    postgres    false            �            1259    16577    attributes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.attributes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.attributes_id_seq;
       public          postgres    false    216            k           0    0    attributes_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.attributes_id_seq OWNED BY public.attributes.id;
          public          postgres    false    215            �            1259    16546    brands    TABLE     �   CREATE TABLE public.brands (
    id integer NOT NULL,
    brand_name text NOT NULL,
    banner text NOT NULL,
    status boolean DEFAULT true,
    trash boolean DEFAULT false,
    create_at date DEFAULT CURRENT_DATE
);
    DROP TABLE public.brands;
       public         heap    postgres    false            �            1259    16545    brands_id_seq    SEQUENCE     �   CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.brands_id_seq;
       public          postgres    false    212            l           0    0    brands_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;
          public          postgres    false    211            �            1259    16530 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    category_name text NOT NULL,
    parent smallint,
    status boolean DEFAULT true,
    trash boolean DEFAULT false,
    image text
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    16529    categorys_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categorys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.categorys_id_seq;
       public          postgres    false    210            m           0    0    categorys_id_seq    SEQUENCE OWNED BY     F   ALTER SEQUENCE public.categorys_id_seq OWNED BY public.categories.id;
          public          postgres    false    209            �            1259    16648    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            �            1259    26248    order_details    TABLE     �   CREATE TABLE public.order_details (
    id integer NOT NULL,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    status boolean DEFAULT true,
    trash boolean DEFAULT false
);
 !   DROP TABLE public.order_details;
       public         heap    postgres    false            �            1259    26247     order_details_orderdetail_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_details_orderdetail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.order_details_orderdetail_id_seq;
       public          postgres    false    227            n           0    0     order_details_orderdetail_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.order_details_orderdetail_id_seq OWNED BY public.order_details.id;
          public          postgres    false    226            �            1259    26219    orders    TABLE     7  CREATE TABLE public.orders (
    id integer NOT NULL,
    fullname text NOT NULL,
    address text NOT NULL,
    phone text NOT NULL,
    order_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    trash boolean DEFAULT false,
    confirm boolean DEFAULT false,
    total double precision DEFAULT 0.0
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    26218    order_order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.order_order_id_seq;
       public          postgres    false    225            o           0    0    order_order_id_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public.order_order_id_seq OWNED BY public.orders.id;
          public          postgres    false    224            �            1259    16557    products    TABLE     �  CREATE TABLE public.products (
    id integer NOT NULL,
    product_name text NOT NULL,
    category_id smallint NOT NULL,
    brand_id smallint,
    image text NOT NULL,
    price double precision NOT NULL,
    status boolean DEFAULT true,
    trash boolean DEFAULT false,
    details text NOT NULL,
    create_at date DEFAULT CURRENT_DATE,
    fk_prd_bra bigint,
    sales integer DEFAULT 0,
    quantity integer DEFAULT 0
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16556    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    214            p           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    213            �            1259    26133    roles    TABLE     �   CREATE TABLE public.roles (
    id integer NOT NULL,
    role_name text NOT NULL,
    roles text,
    status boolean DEFAULT true,
    trash boolean DEFAULT false
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    26132    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    222            q           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    221            �            1259    26141 
   user_roles    TABLE     ^   CREATE TABLE public.user_roles (
    user_id bigint NOT NULL,
    role_id integer NOT NULL
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            �            1259    16674    users    TABLE     n  CREATE TABLE public.users (
    id integer DEFAULT nextval('public.products_id_seq'::regclass) NOT NULL,
    user_name text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    status boolean DEFAULT true,
    trash boolean DEFAULT false,
    create_at date DEFAULT CURRENT_DATE,
    avatar text,
    address text,
    fullname text,
    email text
);
    DROP TABLE public.users;
       public         heap    postgres    false    213            �           2604    16595    attr_values id    DEFAULT     p   ALTER TABLE ONLY public.attr_values ALTER COLUMN id SET DEFAULT nextval('public.attr_values_id_seq'::regclass);
 =   ALTER TABLE public.attr_values ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    16581    attributes id    DEFAULT     n   ALTER TABLE ONLY public.attributes ALTER COLUMN id SET DEFAULT nextval('public.attributes_id_seq'::regclass);
 <   ALTER TABLE public.attributes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    16549 	   brands id    DEFAULT     f   ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);
 8   ALTER TABLE public.brands ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �           2604    16533    categories id    DEFAULT     m   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categorys_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �           2604    26251    order_details id    DEFAULT     �   ALTER TABLE ONLY public.order_details ALTER COLUMN id SET DEFAULT nextval('public.order_details_orderdetail_id_seq'::regclass);
 ?   ALTER TABLE public.order_details ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    26222 	   orders id    DEFAULT     k   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.order_order_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    16560    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            �           2604    26136    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            Z          0    16592    attr_values 
   TABLE DATA           M   COPY public.attr_values (id, product_id, attribute_id, "values") FROM stdin;
    public          postgres    false    218   +Z       X          0    16578 
   attributes 
   TABLE DATA           <   COPY public.attributes (id, category_id, label) FROM stdin;
    public          postgres    false    216   a       T          0    16546    brands 
   TABLE DATA           R   COPY public.brands (id, brand_name, banner, status, trash, create_at) FROM stdin;
    public          postgres    false    212   Jb       R          0    16530 
   categories 
   TABLE DATA           U   COPY public.categories (id, category_name, parent, status, trash, image) FROM stdin;
    public          postgres    false    210   �b       c          0    26248    order_details 
   TABLE DATA           Z   COPY public.order_details (id, order_id, product_id, quantity, status, trash) FROM stdin;
    public          postgres    false    227   �d       a          0    26219    orders 
   TABLE DATA           a   COPY public.orders (id, fullname, address, phone, order_date, trash, confirm, total) FROM stdin;
    public          postgres    false    225   g       V          0    16557    products 
   TABLE DATA           �   COPY public.products (id, product_name, category_id, brand_id, image, price, status, trash, details, create_at, fk_prd_bra, sales, quantity) FROM stdin;
    public          postgres    false    214   o       ^          0    26133    roles 
   TABLE DATA           D   COPY public.roles (id, role_name, roles, status, trash) FROM stdin;
    public          postgres    false    222   d�       _          0    26141 
   user_roles 
   TABLE DATA           6   COPY public.user_roles (user_id, role_id) FROM stdin;
    public          postgres    false    223   ��       \          0    16674    users 
   TABLE DATA           {   COPY public.users (id, user_name, phone, password, status, trash, create_at, avatar, address, fullname, email) FROM stdin;
    public          postgres    false    220   <�       r           0    0    attr_values_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.attr_values_id_seq', 350, true);
          public          postgres    false    217            s           0    0    attributes_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.attributes_id_seq', 30, true);
          public          postgres    false    215            t           0    0    brands_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.brands_id_seq', 5, true);
          public          postgres    false    211            u           0    0    categorys_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categorys_id_seq', 56, true);
          public          postgres    false    209            v           0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 1, false);
          public          postgres    false    219            w           0    0     order_details_orderdetail_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.order_details_orderdetail_id_seq', 111, true);
          public          postgres    false    226            x           0    0    order_order_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.order_order_id_seq', 206, true);
          public          postgres    false    224            y           0    0    products_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.products_id_seq', 184, true);
          public          postgres    false    213            z           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 4, true);
          public          postgres    false    221            �           2606    16599    attr_values attr_values_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.attr_values
    ADD CONSTRAINT attr_values_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.attr_values DROP CONSTRAINT attr_values_pkey;
       public            postgres    false    218            �           2606    16585    attributes attributes_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.attributes
    ADD CONSTRAINT attributes_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.attributes DROP CONSTRAINT attributes_pkey;
       public            postgres    false    216            �           2606    16555    brands brands_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public            postgres    false    212            �           2606    16539    categories categorys_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categorys_pkey PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.categories DROP CONSTRAINT categorys_pkey;
       public            postgres    false    210            �           2606    26255     order_details order_details_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_pkey;
       public            postgres    false    227            �           2606    26229    orders order_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
 ;   ALTER TABLE ONLY public.orders DROP CONSTRAINT order_pkey;
       public            postgres    false    225            �           2606    16566    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    214            �           2606    26140    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    222            �           2606    26211 !   users ukdu5v5sr43g5bfnji4vb8hg5s3 
   CONSTRAINT     ]   ALTER TABLE ONLY public.users
    ADD CONSTRAINT ukdu5v5sr43g5bfnji4vb8hg5s3 UNIQUE (phone);
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT ukdu5v5sr43g5bfnji4vb8hg5s3;
       public            postgres    false    220            �           2606    26209 !   users ukk8d0f2n7n88w1a16yhua64onx 
   CONSTRAINT     a   ALTER TABLE ONLY public.users
    ADD CONSTRAINT ukk8d0f2n7n88w1a16yhua64onx UNIQUE (user_name);
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT ukk8d0f2n7n88w1a16yhua64onx;
       public            postgres    false    220            �           2606    26145    user_roles user_roles_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    223    223            �           2606    16685    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220            �           2606    16664 $   products fk150r48lb1e4qkfcn0navtpcrp    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk150r48lb1e4qkfcn0navtpcrp FOREIGN KEY (fk_prd_bra) REFERENCES public.brands(id);
 N   ALTER TABLE ONLY public.products DROP CONSTRAINT fk150r48lb1e4qkfcn0navtpcrp;
       public          postgres    false    3241    212    214            �           2606    16586    attributes fk_attr_cat    FK CONSTRAINT     ~   ALTER TABLE ONLY public.attributes
    ADD CONSTRAINT fk_attr_cat FOREIGN KEY (category_id) REFERENCES public.categories(id);
 @   ALTER TABLE ONLY public.attributes DROP CONSTRAINT fk_attr_cat;
       public          postgres    false    216    210    3239            �           2606    16605    attr_values fk_attrv_attr    FK CONSTRAINT     �   ALTER TABLE ONLY public.attr_values
    ADD CONSTRAINT fk_attrv_attr FOREIGN KEY (attribute_id) REFERENCES public.attributes(id);
 C   ALTER TABLE ONLY public.attr_values DROP CONSTRAINT fk_attrv_attr;
       public          postgres    false    3245    216    218            �           2606    16600    attr_values fk_attrv_prd    FK CONSTRAINT     }   ALTER TABLE ONLY public.attr_values
    ADD CONSTRAINT fk_attrv_prd FOREIGN KEY (product_id) REFERENCES public.products(id);
 B   ALTER TABLE ONLY public.attr_values DROP CONSTRAINT fk_attrv_prd;
       public          postgres    false    218    214    3243            �           2606    16572    products fk_prd_bra    FK CONSTRAINT     t   ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_prd_bra FOREIGN KEY (brand_id) REFERENCES public.brands(id);
 =   ALTER TABLE ONLY public.products DROP CONSTRAINT fk_prd_bra;
       public          postgres    false    212    214    3241            �           2606    16567    products fk_prd_cat    FK CONSTRAINT     {   ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_prd_cat FOREIGN KEY (category_id) REFERENCES public.categories(id);
 =   ALTER TABLE ONLY public.products DROP CONSTRAINT fk_prd_cat;
       public          postgres    false    3239    210    214            �           2606    26150 &   user_roles fkh8ciramu9cc9q3qcqiv4ue8a6    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id) REFERENCES public.roles(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6;
       public          postgres    false    223    3255    222            �           2606    26155 &   user_roles fkhfh9dx7w3ubf1co1vdev94g3f    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f FOREIGN KEY (user_id) REFERENCES public.users(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f;
       public          postgres    false    220    223    3253            Z   �  x�u�M�G��٧�ب*##���l�l	y��$n୑W^X2�ɖ�b� �17�`�:"3G���W��Uv��W�kX�|v��ã��.��}u}��Ɂ Q��xy���ųC�k��ˉ��������8?�o�
^uV��j�OV��z��l���m�@�n���c��/��������l���_\0X�(K�y���;�(t��t�ǁ�_y�+!~��k!?Z0Z?ZC�����4�G)���_u�+�~��k���`�~i����<F>�_<9{��!E�%<<�����!Q�{0<;�~z����83Am��_l�Đp=��΃�ߏ��>�;~}~qvHY��TD>���#KM{/�Ni�0�#���;�IƁ�I�Ƣ�iX[�Њ�'Z�q�5�{Z^D��2��FZ�"�L2��Dh,꜆��	��|�UGZ���E�)�`m<�Jy��q��$�@cQ�4�-OhE���8Қ�=�.�Nik����u�5���/n�)�7�AZ��Ce8|��8����Co�j�׽o����V���o�����u��HD��R����"t��o�E^��UD�ۂ����,�x�uAqn-�.Q��_�z�Kəs�^��츛�*�7o"Ys��؛cg�{�"�qlZ4�7G�"ysZy�W����vc��M�:�&�5�O*����c���3֬�D���/_�� %��eY��=�ª�$2+�?ƽ輹W��{SŸ��E����axrGCǲ���e2�(�X�;�2wǵW�^t�ܫNֽ�b��֢L�Q�X�����ʖɸ��c����O9�u/:o�U'��T1�(gQ��hgZ�;jY�w�2���,�ugU���h݋Λ{�ɺ7U�;ʗ�-�h_���?	J�>����0��U��������_@N*���x�r��Ŋ�ŭ�3�N;��80�ʎ���[v�@����(X�+c�(Ie�`�na�=�E��QuMe�@�R���V��3Ы2m4*���Z�3X�[p�'F�igTFS�1вToa�m����LMKmd�nE���TYN���Ψ:���eD�oZ挈NZ��_\^���U����_/��!���.����՟h����G�I(�Oo�t�����*N�1�
��8c4=�3P�)v��,C6��GM�O�ȉ�:{֑���1��3F�#;C��RǐG�y�!�<e�3 [��XGv��BǨ*�M���̎��%dءS��RE�0��b��g`�1�
��8c4=�3�73��0p��3p��8a�N�2Xg���2�(*t�������� �c����%�C���<�9:�m�����M�.�rr�F�y���ls�^�>��sv9G��s;�s�ng�s�:�9G���9*�����y�st;ۜ�׹�9��]�Q�<���������}����r�J�!�(v����6��u�s�>g�sT:9G��<��v�9G�s�s�9����y�9���9G���9z���������C�Q�<�9��m�����}�]�Q�y�9�=�s�n�&�^�]�	}�m�	}����<OsN��Z��XGt��BǨ*�M������9�ׁ6�$���9'�bm�s�/��2Xg��:�c:FUq�hzdg��s�s�{�9'��>��<�9�=�e�Ξ�ud�(*t������ΐoŻ��<ۜ�<�9'�y����X��XGu��BǨ*�M���y�rN��lsN�>'�y����Y��9��1�
��8c4=�3P����w���Ȥ��      X     x�e��JA�띧�'�����0�i������Etb)V�6��BB������&Ή�殛�v��R��n�=U,�>�-�	h��57K�3voJ���b�f�Z�$?ڬG�i��� t�n]�e��D�nE*h��H˂�c���)7�/7���l�0�5<1�
�A�M�5Z��H����(�` ]��Y��׿�S��~]T@�`�K���Y(m�a����(�5m.` Ux+6�b�l����Tܹ�ւ|��ڻr:�p��J�b	}S�7�]S�o��La�m���o�Kї      T   �   x�m��
�0���ͻ���"��Z�¢�n�M"f C�o�.����'������]�e��J��SiuV��/ז>����U�>'%Pd&Sʐ0T�a	֠���)\�ԙ?����Ƣ��l_�B/n��{��F�\Ǝ���g.ȍB��pW6      R   �  x�eR�NA��_1%���nmGX�"��r8�*�����eD�"E�H	#Q��(@B���?�O2�3�ޥ�y޼};o����!�����U3U��	N{���S{p`fS�FI<���i�`�����fo� Z|y=y��9�;t�շ���7��Cĭ�%0�d��Z����a��d�5ϸ��Q��{�e����4
��d(����������'�e�h5;�43��yb��x٠�q��@�
�V��C��Qp?_���S��y�=�7\�Arª7�M���'�ۤ�\8�]�/����0wSl�����^h���c�l�8� �a���wǽ��I��>�d,+>^�)q1B�X#���ƪWg��:K�Yd
]6������ '�5J����U�^$m������W̂Ѳz��� ��j�ʀ��? (a	�`�j�>ݮT*��(:      c   B  x�U�ٍ�0D���,tIl�=l��GR�2KzRSv
�_���'��?�/���{Hq�w|���DN�
y��r�졪L��<:�.�:吰n:�7^M�xS}�1ċ�7>M��R}�8f�}/%G�i�[NCG�i��<����~|��<�?�X!:ɖ'2�H����� R�"�5B�>�"�3:C�r�@6�a�Sd����zF���	���/Ɩ�c�ހ�5o�؆7X`��`#��;ٿ����i����i8{��ZS���k(�5ZQͿ��W�3c�:��uկ¾l'UO���R)��1��D=�L�]z�x48�y%k�����8��.��H��o9UJ���o���>�=p��Y��ې�>Zp��Uu=�Cpd�	t5��%k;<dE��/ٙn�<BJ{��nf�n��n㪇oV3��I��gų�AdWb�����f�pK0�7�s���]� �2�if@�eg��T=�U|�U��j>�2T{1. �����by��Xv;��Թ-ӗC���4s.^���$�t����S92��oJt��5�|Χ@>Q^�a���������-�      a   �  x��Z͎ܸ>�<E��XU��q��K�ǽ�hzd��q�	r�9A��}t��1o�E��(��C��ic������ؠݩi���t�ۮ黶?��:����;=������8����ϧ���ߟ�$����- �����f�:i���N�����éh����Ɍ�Y���!�-��b(Xt��J�3B�-��;�bЗ�A����]?�L�v����o@߁��R~�m�(��,m?���t�D&\��b6����ڵ���P+f��#a�<��(h��<N;7ƚ\�;O���F}[��g�����J�ۺsWXMa{c����ɀ
x�
����,�O� �I(�����ʡ�j��
ˡ�jR��Y�,u��K�:&UV�h�Khɳh�!t|&Ζ� �I�]��o��Ƕ�.W2P�A��jЕҌ��r�؇E�l���E�����b���j���uwʞj� sk?�jw��8�H�m��}��y�1�)������6�k�`�$p��i7:�7��s�C���?�C?������K]�j�]�(�D�JHRHY1�o�dB�T)�N/BC\6�2�(]�������3��L�"KZ���&�;��\匰��`ٯ?���o�^{8�N�TF��ړ�`f�3m6����Am��̤��h�Ĕib���͠�NWh���{s�S02
����Ԯ��1f�<����"�e��'W#|&���������H[¶�tk78vr�ed=��˞@�v%��m��s����U}�=�ԭ�^��?� ���?�iX����C} 7���hQ��B�'q��q��V�������w3�Ɇ�������B�l����Jrω*!e��`�LБM�.L��N�J���`)*A���$l��������$$����������7���|L�jTi��c�h�@�
+&!v�f��A�����拽-dkXW4��<�f�2"I��[)���)p��1�v�h���.�͓T$��	ja+�طT��)�W�z��^3�HCʆ����|��xm�A�rh��iPY�W����vC3މxn��2�|�1/��]6�����3�$�y�����=\6��8ߡ�QZ���V�����1u�D�x5���4�
��	���!�- *n3U�����N�<b���Z��󁈣�М���7�QU�[����u�p��'�j�>(5"�i�t[*İ�S��D��}��,�1M�	n�v|����(�֒*k�C�J��i�q+'��1MRX2SRxU����Z�Ԣ�ql�w�*��pp�c(�R��T4ӱ��I$ֈi�m�" �m����}O����*���<��dpw\M�#p�4�#�\�`⑒�[�1�/���S��N.ξ��FHlb�Yk�X�a���+U	��bn&���Q�"��]�Ö��XE��B�2YTIj)
�Dq6(8�'��aC�~�oMe�m.�����y��m0���W)Y��%�L�_�`�~eI�x��dm�fo*�Ҩ��6=�:�U��*��7�c��	�k�*?�O���U�Ⱦ �ْ��.�(�6�_�=Eg��R5P9ܞ
��(MA���'w>�iť^.N.S	�T3�����=��/D��J��{�4�+���:�u���IX�e����)��yhS�Ppk���;��cT��#���Csa������v�7��mJ�8��`�ub�H{v�Z#��.M���㍆�^�8`����_�Do����/�}�����3�9��y�������_���������7�w��??]�W~���b�˗�_}���/;w����o��i��8��w��50iK��x�2��O����Vn���/�j��Ce�^G�r��!d�n�ݏ\50������+GZ־&[�8q���̙�U$5��f�+3o�muMz�N�1l�z9`���w�#�p}�n��M�Jc�²C#�lr�|7�8p�|�+�!
K�#��_ڡ�/�P����䫔o	|w�7|���q�X��ϡ��tH�b#���6B'���%�2~����~,�sU      V      x��}�rו�o�)vY���d&U$( -B��R���h=DwC@7M����L�Q�:N����.�ز��m9�Y�����`�`���F7�&	%uΉ�|!�F������|k����ܔi��|�h�=h]���
S��l�4�w�,p�vڃ������쵧��?S�ԕ������\����w��N�~:U�
���t�4u�1U(O�^*N��6<U��jqo���V�@5:�[��m�@-Yֆ��Z���<�{Рz}��~�#��S�ben.S��Rfn�����ׯ�?���O��]*�c����?ű����٠�ta0.Fb�m�S�YՅK�����uU���s߁?v?Q��݇��;���}�	?��p������p��
��ӯ�v�������GnF�#��� �۹�c���K�2/����v;j�b�7l�E=l@�.��{]�0��G\���G��<so�S����=�<P0��v�� bL�����W���M��@��00�&N~_����&����j�}��/���{��UUso���&��4��U��~qA����ٴQ]vS�xf��`���;sfq��V^_��{r��o*wt&t��S�ғ�8/���󾉗v?T�ӯ���e�6�t�J���؃ѝ@u�.X#O��27 �����M����%s�� s���i�M��~���?�|d`�����3��i�3@D��jcg�?������]GUr�����<4q5�����zt`�@�O���n����bS�x5�yK�W�����'&mwo�SI�$�I�ns�г�sZ���Gm2�t;F�'��z���UI�z�]p�� ��i�D6n��n�`��՟���ת4(Ⱦ�K\�0��1{�`�z��y9i(<�-���m��,xJm�ɂ&Η�0��S�{}b���ZN0�M�k������>Ӡo��݁}�n�L��4��zt�g2���VD��1�p,�\7����k����X}��{�Ѽ߅v�X�ꎶ�$}�=w��u�ct�ǒ�?�M�Q�+�{�{��%�ɪT�^��[�齖r���`|��$�_-?�����bx��d����}R#���Q����x��mU�&��-q�h>=`9i/����b����${�H5�����{%�w���x,�6;����	��B�1�$�oh��MZ�23n� X�׳k��C-Z�i�m�+nM�_:{����!�Sy=�gYV@=��Ĉ��x�@a�_�e�&��+�D�G��<���+O�A"�,��B���
��y�K�����qE �>lpwL�K��{7�v�E��$P��_��8Ce��`�4gQ��}��8]�Sh�2�5��P^�F��i^d	����� �&6��)WZ>�
%iQ[��e鮬Z�������'ɕH�!�Ź��>�4�<�����0�z2}W��ͬ��zO707��bf?�=\��OC���w4�	k�:�Z�Rn�����t�'����v���=��+����c���ֈ�q��D.y`��}	�BN��He�&�w4XZE䍔�7à�$�?A�ms������.lE�=�Cz�3I?Ц�{6P��|z��c��c�Jyz�K���M�s�io �F����&|}��C��gcԇ�Et���]K-��7\�?`+�j�km��]��MM?N���:�7r \��{*��j�"q�e(�.����,�����E-d6\�/�x�)Ot|�7�?}z�~�ݰN�o�y;X���3i<U��qV�J�������j�.��|�L��?�#W���`��K �Զ:���VU�v��2�Sj^�p�~�e����dx�	;��CX�66Rʔ7�fMk��>.,-��>nܓ+�H.S*��ȊG	��i��p����>p�Ԯ������#���b���ʅr�"����2T�3���t������·�5��t��.��}�ϫJ��x��w�A"~d�g�W�l�t�2kt0���\�t��?ʹ���!O)4��H|�f^�߶�<{1�l{�ے�(�z�����)�C�l�j�޼���饋j����V��{��#`��T���:�N���'�=����鑾C�5蒾ː��^y�v�QMt
:p;6�_4`~��1�F��y~�v-�s57��b��N�\q��f+�_e��g��pB�;AL�)͍ۙ���rj&_��2x��\��b�-Y�ց�
�:��uV��twp����_�z}�7�� I1[DRj.��P���XE�i:�D��1��ڮ�o��v���[Hp����Q�{�u4�MuQK��@Ղ��Ȃ���5?���03n�8]_�!�#z�2̊����}����R����2Z�����r��`�=��;?�`t�8�r�܊��V0�#wc��	S�\�V�!XR.��DB[1�p9f2�^v�x�f�w�C��8;�FP+J���BM�DсGM��*CS`|':��u&�"u�� �;��p�سǛ!:�K�,γd�-q˶ZA#<q��ю�y�[���,��S�2d�:�j���a*�*Ȃ A���sc�Ҷ���!؊6~q'��N�p��%�z����说(�g{�V'�$�_D7�H�=����r��1��\�-�E�m��n<�9���9���'z�4����i�ցV�hp�4��$6�f��{��>O��Hp�X���:bQ�pp�@���?��T!��Fms�������J����閽FBs�FBsS`�^*��c�%�I,Tb��X��B%*�P��J,Tb��X��B%*�P��J,Tb��X��B%*�P�����E�X���3���Tz�1 �%�BA���#��e��%6*�Q��JlTb��ب�F%6*�Q��JlTb��ب�F%6*�Q��JlTb��ب�F��#��Jl�e�hE�F�qP����,�C�wb��O��%**QQ��JTT�����DE%**QQ��JTT�����DE%**QQ��JTT�����DE��#��JT�e���!'F�)�{ri�R�8]*�R�jlb�1 ���f)��Hi~N"�)�H�DJ%R*�R��J�T"�)�H�DJ%R*�R��J�T"�)�H�DJ%R*�R��J��L�H�DJ_X������?R;?zd@tVDK���D% *Q	�J@T����D% *Q	�J@T����D% *Q	�J@T�?���D% ��2��L@tn�ѵU}y!��s��x%�ІX���v�v�}XU5���X��
��a�9!��H�ئ���E5:&�8�ߣH�`.�|6q"� ���ơ;���������f<��X���@�qT\���8�����4����FV	6�h,�BGl���ZvUk�x�m2Z�亣
9Л��ұ�?@�#t��$���P0����H�_&� �Dc����D*����|��bh�F���Gת5�/v�WU�~፽�w���K�>����,�'��	�[��&��c;%�(�U2�S۪�d����F~g}�>��r%��"#�FXQD
��a��	��Q�pt�;���\����#҅��!f���\7 =�Fn(Xpz��L0zD��"8��@���[�Øbb���U%j.7p�wj���j���qeS� �*��d;�%m��))��x~��f�ߝ�7�����?_PՅU����X�缎����Z��{Հ�c�2�7p)|񾍰w"$���fp;�7�0m�dD����<�M�Hm��E1	2��,�|��j���k�/����
�?�w0���uF����!�C�c��/(^p�kS�9�'c���>� C����q�x	��!a]O@�o�F��������ѯ�jtm9M�Ɠk
����$��8�k

r���B/�a�Ip�a��A��v��:d��k i/�A��0�Յ7T��c��jȥr�n�M��6(d�B��#��zm� XJB�D�ED"��Ǩ%��_e�6�Q�t	�C:\GRw�a���.��<ǌW�>����eR$��8�����;0KX�*r+N��@��?ԥTN��c74�����t�B	7�)C��6����#w    �W�2c�����3���m��j�p}�J���d鳈{B���g�ъϫ���.\CJ ��G�	��f�9����#�[I�{ ���~ �muj^g���rN�����n��M	��O(��M3�_UK� hjΏ?��L�U�ݞ��c�����3�n�L�&�,�j�1Hx�G�
�w��g&V��j�~�R��$������W'c����m���B�&J����v�M�@�5Q�m��3�5�:�rV���Z�	������}�a��;��"�-�iѸ�EC����l�Č,2�@���Ew������_�dC'Ae���˱�$-�{=/:̰��K�/'N��$̱s� E�VИ�ɏ�,���A��3�a��5�F���X'�z�t��i_�Q4-�p�?D��;2o=����I�k������g�����^������+�ԯ$�ɗ3�r�.��6Ɍ�dTs-��?L�O,�S� �������rF���~�����>�`����r����I�lFY�h&�\�	�/�N0&��-�/'ۀў�oK�h]�O_�?o�O 
���R�s�?����ξ�`�^�G�r��[h/��׳�8�Њ���{3zV
)�W?_P�K�\�p���1�2#p��)��"p��)��"p��)��"p��)����)������������#���e)ʱ~9�/���X��c�r�_��˱~S��˱~9�/���X��ߏ���/���X��c�r�_��˱~9�/��_���r��`��c�/ s���*�?����!u����㢪�pI��\X�^�#-p�T�-1R��J�Tb�#���H%F*1R��J�Tb�#���H%F*1R��J�Tb�#���H�a$��J��eiinn�|~�J8x͵MK���Z<_(�Y�Y�K���z\R�K�qI=�}_H=.��%��\��u�K=.��%���׳MH=.��uPR�K�q����U���y)_���?U�+�%��L!_�U�oV
�Bavnfnf6W��}s�R��s�Re�<3W��7��?��S����J遼֕���Ǒ�1�yS�P���r/�+�܅�MRF�Ͻ9�f�:,K�B	:�Î�?��)�O���u5�J��N?���&R�2U�Z��M�.�ʇ��o��H��Q{ɳ�)D���KÁ�%�!��u`J�}�\�2TU���Z��{3U�Z�k���e��ׂ~�k�����A�
1���Ę�J<u��aX�s	3�1�RhZ=7�ځ	J���h��[��&Z(�����<��U�f�d@Čvz���f�%�l��'�6�n�n�|��-�]['X�̆���Z��iS]ۘ�THӄ:-6�3C��+�@��q<�����R��М��r��� .����&f%�s`�5D0̈��x�����U:�x*�;�z�w��4��3��Qn>����>���}��T5�������n'L�g��M+�9{��Hc9tzLL�"���É+�|�/�=��S4�Y�H���174汑%�A
�s�h�(��q"v�Pg��;`�ӐI�)�_�\�b�a��7���%0����J��Y���EKa��D��:���8aB6�(>�ք�"�Dԯ~ �9|�9=��}�2v�h�C��m�����lU���ȩ�)�3x��{7����Xz�)Y1�P�3��٩a�a��X7n����h��~�+y`������t�S"!Y�6�2���11��6�Y��б���D��7-|��W�P��]Z[.�c�A	�g���x�(�Y�0��7n�t�H�S3��n9ԨZ��o��ٜͧ����y���ᒘ�6�pfp��������À�=�7�'r4FXb@IL����uO0�|���3) ����������E����=���H���k��&:��U�{��ZF� Fr�p���!�O��t_�M�a��#�΍z�I�4:t�B!CB9C7�hD0y'�Y5p�$��Z�ȃe-�C�oĩnn\�l�ۘ�����y�̣��u�oY���*l'W�T�rq6�s�h桥�R�nD��P��3���p,O�_�;4s�g4�)��B4�Z�2��=-�;̣g�~5-������U��J���6)K�aQ�b�\mR�S�&��ǟ�����``��:Ii�(�>B?z�x�ԡ{���cd�\j��N���9y~�~*d�Xxl=��������������zV�9�VQ�8q�_:��^;��롺��9
�G1l<�C'@G	3�A������qOt�f|�1�=Ƨ{"J��ŹBGu�EG�(
f�>�i�)T4)5m�uB*n���b��z�g��T
�`�s{��}� ecF��\Dh׍��D� m�Z��j&��n��L�����AE��&7�VX/.1,ߏ��ҫ�S�ejl�S�/h��|� ⫖��������D5i�
I
kں���R���Ÿ�����������M}��<��y'me��\[zUU��5;�u�:I�{'����\�퉻�CV(�����R����p��d,��i�hw,ZK��|;˧�2��u��+��Jx��o��^.fK��f#Nmñ�v�r)�_.����l�����e5�}``�9��`�X_�?��eMr�	>s�h��w?g���tu=�>�Ť��Z��P��K�z���
���_���1R�k�09�����\WE-���? #�.lL�� .JgiQwv�n��hj}��j���@1\(WP�OL��T�٫�j&[Q'�V߳[`J���ɽ����e}ume�<������{C�)�@�I{Z��Q��7�In�xK�rJ�cI[��������[O59$bS�*_)e�3�f*�f�se�8��lt5?W���$�yN�1�L�h�*�{������?�p�<s�Yx������x;#�"^�܄�nLz`�hO�� ׌E���M���;�J�VG��F�G�����$�K�!�B'�i?W�Unf��s=��,K��i����|�SE���E۱��Fo`�N�'j�뽥ꞏ���4�nRb�-[g+<W#k����8�~f�,�nu�L�<��N��rT*F\�5΢�����������[͇�u^��bN����I�|;��z�o^�L��y��`�[v_WM�e��UG<x�R�o�Mixhgq�75֥�ҒvKgʓ:�8�M�.+�ߤ�s����"K�`�Q��3k�0�e��B��A�F���eö����9�����i.́���y����R�3��_r�5�>{��4f.G��c��&p��6$8m��lB���؇t���q�1��B VS�5�  ���C��#�ӽ��ߵO�	|:�O�)�ڟ;���(#�����"��
}�"E
�	�3������%�"����l��8t|	�:��4kl:�#�N:��'4��
s���޶�/�u�%q�s��3_)�
]��/U��_�K3x�,�9���h���7 G޴�|�E8��X�ql���|Ct��!���ț^�l���{�X�#N0�a��Y$�\xf�������>�ֆWZV?�]�v��5�F?���8H�$@��l/n]I#0.�Hx1�0q���b��:(V�VX���EZ����n�f�/���^���֌ ���B�_Q��uf����˟*�hy�7���f���8����z�X6��]�v�Rk�[` /�W�"�U�5-Է�t�Z$+1�1(4;Xx銵���EO8n�t�t��Zn��OA9
�la[0F�$�")iô����Y�*=bjTI+�F��W|�jl{�W�*��9A��9e�Dy�~t�o�=@m��O̫��`�8�Eg�c"X�Q��K��H�g��ܱ����m<�*�R�{O�4��H=C�,�M�? ��K_��j�9�ާ�p�h~cq����A��~��V�Ĺ`�D�jm~���W35I:NV>ܐ�W=b9�gj\tv	�#خ��;ʢZ�3��,5�1]S+}����o,�$]��գ".f:���D�5�!'F,x����M>;猎{�    5^ɀ���^����:��	^��A@�|�^֤�3�)���X�6�ӣo<B�+vq� �;�!$�)��בv��[ڶ�i).ӄ��}C���A`t>�і+�Q��-����|T�W�NP5�N�sz^�T��'�^[^?�����h�@������P��?@ػWg���T\�iZRq����CB��O�d����S� xuX��\�k��$bX7������4C���i�3.|�W�̫��W$����8�A�f&�~�oi3�q3�5($'�cʎ��:o,�ov@�'��*s���C4����a<X����H�fx�L���l��w�hZ���d����!�,q��L���cE��R��(����q�:\�	��_v;ʐz��Mw�&�;K�<7C[#�HwD�폌L����)�ƫ+O��5�V�}Yu��!N�޾&c;v<>�A�>=]v�����E[��~���O����>x��r��_��	�t�7����_�~���=R�;*�O(�<�Z��A�}Ji�PJ����	��,�!%�(-�+1Wks���'�"�X����K:f�6�5dzg�=�Z�m&'��d#���n�_č��P��G� �������0�E���f�-��zY��(3*.#a��f%v�\���"����(��0L��N/zqq�e��!�-$-��p��8���O�Хn�G�����(WXpyo������(ؾ6�KL|:���������q�հX%�/�b��y��2T�۝)w6H����#���qD�O}<���/��Y{���-<�CgsS8o���� �����LA����&���@�0Ӷ";���mƏ��B����1[��@�Y�}�[Ҏ�<v:�ϊM���?�G^�Ȥ�����H���1YQ=�<kP?\b4�j�r�˰>4F�[co�Z�ۮ��ׂ͠cpX8y�V��`��@�~����,�e4kp(�l7��ۦ$:��ް�?ظ�\��Gy��3�;�at�5K��cY�՛Ye���4�0�y��3o`"<�o��Al�z��rc�n2^u
D8j�fk�kgÚ��rVq��X�<�(Sw��4�tZV�5fs��0��k�[�k�	����4��UL?,3��r���;�#��:�I��D�8���a`�3u�.�R0���fG��Ψ�j_U��������U�uc��ްƜFB�6'��)�v�f	]��O?4U��/�6�N�UĲ	�}��������S�3������p񤓜�U��J�a�l��E�2��E�}�ob@��>ִ6;(����24n�#�d�~gˠK���xU[�"bk��@���	"m�-ĳC��w��q�F}F�=�(����q ���A�)�ä(L:������D����\R�n����N�t25�2��b�.o}���F�a%_�������~Fl��|enb�;v��(�;�R�8u ��� �Xw�����d�
�-`���v�-`���v�-`���v�-`���v�-`���v���vsv��h}�O����hЋ�m��W�E����k55��Z�ou�������ǣ)�Z0}{����\G��H��$�@�QD-�@�QD-�@�QD-�@�QD-�@�QD-��.O�o�`�m݁�[}F��a�e�&#�0V�/����3	�Q�9�#��~Č ӂL2-ȴ ӂL2-ȴ ӂL2-ȴ ӂL2-ȴ ӂL2-ȴ �? dzfj�ޘ�k�^3�4��1�d�j�_큯֬����C�ht�2[�5�_.G/.X�#Q�]�_@j���Z@j���Z@j���Z@j���Z@j���Z@�H=�����J�	(-����J(-����J(-����J(-����J(-����J(����3��߱x�,�
���P��=�}��u3;մ�T:X��M�ҙʇ��?U��GO)����J	���U[��zΆ���CЄ;�.��l�4x���/�%˷L_�wmg*?U<����B�9�t����$�6ۮ#{ް�m�@M�h	6ۈ�v�n۾ѥ�"8�JY���?!A����n�AQ�8�^�7�y4fWa�:�i�CF��Hyu�1�=��O���`�(��@�;����:M�C[K�4]�k�wctÙ�׺��+C$ ��DH�o��R����1��t����o��P��c�1��Il�:$fu�;�3��sȨ�>�;�z���b�9	��)"�C<�,p�D�G��Ճ.O<�`�7<��o��xr�Ԍ^��-�-7�W��}�bZ<5���-F=�}�Ӳ�j��
n��	��31c(�� ?g�� ���$Dq�P#��4�<�M�+���P��ق,�\��J/�@Ú���Ve��hh�m��]�L�ǋ��V�K�	��Zmhs|����d�g�f�����Ő��_�@D$\��αQh�)H��o��i�9���F����%K�������v�w�i$ZK�X��h�3��!;���F���O�z���%Ӂ$ǁmf��\b_��0��Bz�<#{��jZf��6�I��11��6�Y��б���l���h����՝�3�Kk+�Ѐ75�\�!�����rY�0�����="O��2�����P����[��g�(/вpb��%1m�ӄ��-bP�C>��t34Rc}���>q�� Ā,��,l�vi��'�q>`���s�q��p�\O���<,�8zF{
����ia�ZD��il_Cg�ג�w۫��2�b�:� <H�E�Ʌ�9z�aݪ.�#����)�2�y�Q5#�H(g�����'�� t�̪%�ے��!��7��77JGڨsSo�}��B�nz������z�V��E���Z�#-�9ma���K,,����K,,��^T��K��Vמ>۵[W�iP�s�ޢTbP�A%�TbP�A%ՋjP�f�F�<�B�
-JH>���-t��&SI�)�'����M �1_��OQ� ��E0>{sM5;��{Ȇ��"C��u��@��P�����.�3��0/�*`n)@)$���ߌehpT�*� �� ����O�ﳗ�|W˥�3�u�e&�8bt���K��Fj�S��,Gm�J(��"�Z:5���Q*�*F̄�׵�78�`�SNT��h]J��o���h�,�\`��.ec����\$�c�n�� �1���S
^F]2�T��E�f۴�y��%�s*�ħ?2�r�fr'4��
������e��������Ğ�J�T��%}��f�
\��f��*^s�V�;�$�h��L��.��щ�k�y������P"'��?����d�O��	S���t����C����E��Łg�n�}<�ó�+�ѕ����x׳]<{��O��;-���VHE��䤱E�櫩��ܴ���[�SG:n��͊�&��8n⸉�&��8n⸽��[��f]͎sX���nb-�x�g`K,1���K,1�^x���<S(I���Ob?��$���Ob?�����O�)�Z�ux%��\��Sk}�ҡS�-��sL:6L1s�`�w:��|5�t����x��z-`mԓ�ȹ��?�Buw���=�ԡ,�S����]j��Wa|��������Vgd��^`�㬭��b��Y,;�)�pU�ڭtvQ�
"d~�}�Cm66��
�qI0'�QB�;�ut)������Ū_��R1\o�wQ��H~�\���:d�\h��4�uǞ�4��Up��P����73��].��<kxp��8��.,���R5K�պj����EX�w]"�X:����s�EҘ���.Fd����l�z����h�N��K�K��cu��j���;�G�L*��r���|���b����������D5i�
I
k�3�f��J� �Ei��`��CN�˦�ZG�U������2�-��*ي횝��:M2FHj������ޞ��5Xr���Bg�и��k1���0����M�/�`g��?�Pm�^|�B![��W��6���b��mv�V�p,�]�\
�    Ǘ��jv6[)sI��e5��������8_����²&9���\u������kX]/�z:}���+��&g�ǌ2�cP�3��K�u�P�M��{��3�H�s����kJ�/�UQˮ�<��ti�}W�b;��Ңr���6��Z_����C�4P����$.Uj�꺚�V������X��&nro���pY_][YxC�9^�E�zl,`�L&�i= �^-z��'���-)�)��+�҆ti�I��#�6��o=��@��1��+�lyf��Le��lv��g�6���Tȴ��\qrj�`NT�"z�P0`E��ha!�%��|�����z8
��PQ�h$��;ܾ"^�܄�Vz��Cc�z\��=�7��w� +mZur�r��?���Z]���C$�N"�~�6������zd������J�nZ��s��v���X�G����Z�zo�:��y\7/�|P����Ț�z}�1N���q�u�{e��\��~gU�F�4j�RU�6��8���W�>����g�'n5��y�^�9��[|���Ki�#]ϙ���g�2]O�y[�v��<u��Iu�S<O�<���S<O�<���S<O�<�����yΦx�g_mrLT��.��TPq@�TPq@�TPq@��`t�Y�L����{FS�V��=�$�)�����{��)�����{��)�����{��)�硾g1���E�����=���S|O�=���S|O�=���S|O�=��L�=�iG>W�TY�4��|��)�Oq>���S�Oq>���S�Oq>���S�Oq>S��B�|6��7԰��u[,Hҭ���{��)�����{��)�����{��)��������������=vZ@qzj�Y_h����g�lh�s���Q��+ܾs����!�iIGF�I�Ӄ�V�c�� ����v��{ԓ�pcgqC့H?Ј�e�K����e��w8�V!r=4��v�w���;ߙ���+Ũ/|Y��0�'�_qw���^va;A���CE��������J�?h���5uC��ؗt��r�2���wki��F�N7ܻ��lG����$�����A�!����ףua
A�W�W��Goݿ�.bk�з*����	�3���v�ڸd�K����6�b�_¾�?Ұ�����~��~���
�up��y�)췭��n��H)�J9��=�2^�ЕK�R.���4�7�ҟ jC�Я.c+��/S���e���~e��j"ql��萜�n1?��4�y5`&��`x�=����v�	��0��#����ό��x��g#W��+-����g�x�t����w$}
q�S �s��:�VU5�kٖj�z��J (o�3h�k���.b?�o��ý��k[-ZVulxW-����G�#����"�D�<y4�GE�G���5�y}G�g[���<���3Ϝo��G
��66"lD؈��R\����ٳgΫ0�M�W���6C�&���Ho��c��+���#EQ�񙲈"E"�DE���h5���.��Ϩ؅�ч��PG!�,m�mM]�۹��Z�mݪ�jmo�=����!�R�D�Eu���~撪.������׎�We��D^��y������NU�߲ۆ��	�X�Ǝ�)�av����H��_�6'RG��H�:c�3��}�Қ��j5jOރ��/�BjI�0�/"_D�D򥜋�Ο�x��ۭ�ݲ����mC��/�~�̙�Q����a�EЈ�A#�f,h�S1�6u~�KL��xNx��,>?�"��_�(��V��#ŏN����H��?"~^`�S��9��a��c^��BmV�u��	3yD�	#&�0Ÿ��p^!1��ɿ��z���3��5�k?���б�u��#��G>�:�)�t��d��	%*&�J�`��=��N��蜞RE�0"`"S��mm�G�7n��$h{��}Um��PKggc;,(��Ca�Ό�!�C"�DEr��Cl�`݃�X��Y�)a*,a��H�0"ab���9����3�3�a�R6�Z��W�pE�c�C�����:��E����_���-���M}y}}�B/P�U��<�^���@�2"eD�<#e��G��6�=7��Q�?��P�j�������Ea.g����6�C�|�V�.j�:5� �K�1ϊ?&K$�H�HbUrq��%S��������{$p�~1΅��?[^YQ�յD��"������Tɉ�&I��}	��htm0��{j)�������5�6-u�j�|��f!7U�2y�r87y����Bv˅�]��T�1Q�����xy��
��#�����#�z�j����@d������c�;������ V:�M�4j5�'�C�^�)�5]�|@/�B����Um�����*��s@M~,����8�Oܰ�{b0On��"�c��ݛ&����\0fr�M�l�`�񟴪� �k���Z]����UU�_xco��U8����Ǌ䷖�,�'%ǫXA�.o�U����?��T��\��̩mՁ �����5C��!�$�=�y�2�o��X˖�һ�Щ�eT�3A����z�s,o~�d2+>x���4����ʄ㎸8d���5P��/��1��EZY,����Y�\n���4�Zmo糺�WI�5{`��Z�M.��$)Y#э�I�}:T�����#%���73�L���w~�T+�{��|a\�k��� �jA������#�ڀ�i�n3������o�yҡ��4��%`�P�T�����"y�SWg'��E��βp򩞫��_�%�}O5�����&�;��;V�&����B�I�*��^ ��D��}�'�����Gt�����M2́~�?���D��1��^����.�����Fז�$o�M+%t��;~�	�X�Jњ����j���!�)#��2Ip�[����ۂ&'����H�Kg���-�gu�U����!�6��)m��$��m�_R�L���UeYU�?��3>��N~����G�t��$:\���h6�[D�7 �B�"�<ǌW�V�rT*��S�"G��,��7r+N��@��?ԥTN���Tv����P�'7|��q�
��]}�+<��/Nٹ� ��կ�A���W�WA���Mڪ���9l*m�*���ia�'\�@;6!Y����xh���XTq��	&M>�L욥��lE�B��zw� �$�Wf;<b����Լ*�nr���Nz��b{�@)ݔ�`>���[;��%d45��Ys��
���H0:��%cg>�ޙ�MJY�C��c���4����L����:8pj]����!�r��dl�N�F]�,�j�T�.�lW���
41{P��v1�=sX�S,gX��%�@�Ϫ(h߇����bM�/ѦE���f�N�%3�ȼ��b��8���#�q�5��-=��ۑ�B�$z�ߠ�V|���4>u���9vn�����1��:�K�)m�D�gT\�J}�I�_�Er���%�Ap����E�b^����p������y6mKM�:x�ЯA���|~f:��������>ĻQ�~���Z'�&_�����,�5Ɍ�dTs-��z�+xu����������{C]\XYΨ��ѯB�1}9bҧ�o��ʼ����k)��w���D���V���'.CB��󏓿����m�hO�7���N���ħ��7���(r�ϥ��
���-��1�}#��S�?Z�}�B{A�o����a��V��7�47W|��\yK+�K�&��*��젖]A�+���Uc��z�,����|b�Ezܑx�>`>#(|��w�*L]��YYh�7�㯝Q����[��[}л�0~�2z�݋�a.G[k*�j�EMw�PMv�͸� JA|x��
Ϭ"�Dl����->���iՀ$�i-������gq�� _:R�%D.�GD�����'y���˯��Nn���WO���
��'!��W�'�����k��ġL� ���H	���J���0a"��Y>�X���a��o���y������H����H� '  ���H����H����H����H����H����H����Ø0����/��ٯ/���o�Y�q�?U�7�%�$���3濿p$�[���+�`�τ�*��k�&��d�l޶��=��A�b;��n�����x���Af1�L�-6���IW�K�A�O"�D>���Q�{�l��'������D?����ԕ�e�qy��Cs��,bHĐ���bh&Qa�
����[l���g-���W�C��'��EV�P�'�f&'�7"�D�4z&�ĉ7�K	~[�i������7:ïP��ɿ��ɿ��ɿ��ɿ��ɿ��ɿ��ɿ��ɿy��o���p}���5T���\!$���S�VX`E�VX`E�VX`E�VX`�V*Ǩ�b��Z�
�\�8�
�\pE�W\pE�W\pE�W\pE�W^tpevji8�\u1�W�w������J�뷺�` B�GU���Z}t�G��|���={*?U<l��G���і\�37#�>���:��g�����-e}��ցX8C�$�d#B��u�C�%����4����p���
u�u*bW��o3X�b�G�����`�xp��i��l���v��#�(0��� �%�Cl�t@���N�`��%*��P� ��M4�p��np��	���cFYB���,�^)�����O@�h�@MA\6�ו����e����a�;�34��G&ȃ�4u�]X�-6��Zx�K�]+"���|�{d��$�>�h�j�7<72�'��L�^$����3@���+֡�����A��O�LϠ"=2quѐc�O��ގ901[�t�y����-82��I���C����N;��b��j���J7m�x���qo�@I?&�5�k���xQǬT�h\w��L��X�����>���x��Ђf"��DD�5��f�����h�~�2��8�C��mŴ���l�|�ls�9uc<e~��~�f�H�4��R�P[��٩�`�;5J��*"�q�~��Y������@�;I�)���s�q/�i��%�#}���jÞ�o;���Y�Ot�~���i䄼��}f�vim�yhڠ�3�\��q4oW��,hh��}�G�㩒T�?u�>�ˠ�Ԃ����l>�Z����%�j��%1m��d�-bP��m5�H�Xߌl�h�� Ā,��,>=ӥ�`Ơ��>�}hQ��������E��gwz�@/�ia�ZD��il_�G:x�0��**C1
��M2�R܀���	��$�����jG���'BS e��h�jn��!���H4"�A����P�Y����Z�@߈S#�ܸ���QVUqnj�$s$kX�p�5�J��,�2@�<���-�ҏ�x-`�����ʻ�~��<���3T݃/�>���)|��!�Wqn��I-�&J|M��8���!���,��]�v�Rk�[`.�W���T=״\�o������x��Q	Ĭ�&:��^��X]�k�pc�
���� �8�t3�	@:�$��c�
�N�@�E+�:^�|��T�So(ck��~�7���� VH�"2�dg��c���>C#�� Nr��ϫM�*ۡp�]��,F�b� ^#�K��E�!N3{�n�h[n�w�qP���_�E�ѱpp4��헾�).�kH�>�}�7Q�[X����#P�"�];�1�Z[��{;��LE��d�U:�Q=b9��� � E��D�-]@I��w���Z����\f��߈u�fm[7����q�~	�l�#�o"̂���#<tF62ă�V�&��sF���64#0�0_#J�]�[�j�N��(
�|��U5���e�*�6(:����q��(( D�-����6����[�dd��e�PE�}C��Ն��񸏈�`_���+%;����{�����NP5�N�sz^�T��'�^[^?������{*��
�K���u�C�@ػ��~Gky��T\�iZ��%r�ڸ���x�'����"����2'��\�5$�" �$�a���4�b��i�3.|�W�̫0�%�&�� <��F[=��ɫ��_���[�L܌9i�����'!D�M����7;���^�����y%�pO��`��
E�{�M��!���S��v��v�S�9hQp63f�8�H!g٠[i�=M�$1�N�b܏�s�S}�P}q�ΐp�}w�eװ# �!7�����,��7C[#�HdheBЕ�e�����v���#m���6Vgm�S�7��dl�ƌ>���n�����dw4l�f�*�4��'Ɵ�S�-�Q��r���x�9u��(�A�~�7��������ذ��!�=Qy�D�,���)yYTɉ��|��H/y�u��;��b���0�5)����b����9�%�O�Mˉ4dzg]��Q�>`�-�&���3���Ŀ�����#O�/]�x`(}}ϱ#ŋ�o�Q�]oQ���C�i%H�)�I�Am�Y�]j�}6����3Qz��	��E��7p��uh!i�#k.�|\̸��q5�1�O�wQ�^���������(ؾ6�KL|�3�T .L��Ά�;S�(��x��&�/���1<)C%�slw�e(�%Iq?g^���d9aއ�����Ҭ=}���\)�*��F��G)!�ٙ�&8f�\C�m�.k-1̴��Τţ|�xU/�H�h��#}gm�mPnI;>��)���Oy$s��g�tяO�����ik��:zHaP?��|*���s�]����;�)%�.�m���k�f�1@���M$Vi��z���Ϣ^F���v%
�j¸�z�V�`���bAQBn�C	g�:Q�!%I��{��2��Ze�C�n\�҄u�b2�O��q[�G��/��h�:G9�o"�u�'v4j�f�8��x^~9�.����DP�i�)J�Dk�������-�5B<5f�!�u_�����z�cZ����8B	��8I�(�s8�IP��-�KK����ʇ�|h&m�������U헑o���ˮ{&��6�m�`;Y��0��O?4U�i��s�UĲ����D|̘��炥���Z�}� �t���j�]I2��2:�L�1�N/r��~�����A�5� S�и�L��-`^^��d9Q!���Q�u���GA�p`��@[q�|����'��q�F}F�=��� ͐G��ZȪ��h&Eaґw�s���:�K���x���/�p��c(^I��ae�X�Rf����6
��b
iͰ�����Q0u)7u�r������d-b��5Т��.,�%��@7��RkV��e�j=p��m����ʹW��«��Q�t)��o�LZ0i���LZ0i���LZ0i���LZ0i���LZ0i���L�o����k���U~�9VeY��un����8���B��_4,��Y���{Y5�/�z�2ܖjy�#_�9�_�'/�W��+��yc�4K/���[�3*���5�I��)L��y��&H|>s~�ҧeK%C"�D�
����K/�� @ �      ^   ?   x�3���q�v���,�L�2���� �!��.��~01�����k�c�?\m� �!�      _   y   x�-��1D���K,�P.�?�_���h4���ޏ[�����R_��^���~� � M��N������:���I��ژ8����n���U�w&�Nj��2?���7ys�5�}���(�      \   u	  x�}W�ҪH]s��.j[ɼkEPA��0$�2(����O���ˎ�E���Q�QoҠ�^���� BjpN~S��e�
�),�c � ���hoN�S����y5�f�b5�j��^��OK~�ؤ�цB�H��� ��~ ���y~�1i*X�*p3�WA��1.�0� �>��Ip��k�Q��x���a�N�����8�օ�	�I&.����P7�8�+�X7JXUHؤ��� ��������`�n?��pdJ�\��Y����C�hj0ے��ȫ�Y{N���mY��P{]:��/�Û�{����%��$E�"��q{sT������A�Z�͒s׮����v;�׾���S��Fg�8��[U�2x��h�O16t{J��F�y�H� � ��*gר�Z��:֊FJ��9�ڢ����Y��H;N�5ǔv�|��9�E 8  s�dҁ5�f�X�� ���%e��Y@ڍ}h��j�ͺ��"�K�����a�'��4T���wr7������Bl3�� }�BWԑ��N]��@BH����f�3-�����f�e�ݨ=���XK䦊�N5SF�/�w'P7�XU�B���`�P�	��#H�`{?q�3E�Bޑ��ED$��f]�U�j���� �,w�i�'���S�Q梴(�T�,N�`�����UP��)� �I�q2��ܘc7�1�O�
��u��Za6�����e~�Aǣ�*��'�J�3E/Э�8�����@�	�8��qZ��.�������23�5�/y0K�ҍ �FZ��*��q{r�I���oox��~)Ȱ��Y��߇op	�{RFI5I'R�p8�ۨ����V�/���=0SW\^��/Q������Vъs�x��fp!_Gl�F�n�8�$�1n�������$n���n�ŸW����/�r�-k�wtv�~��dt��H7IP�?�爮�uK5��W����	�����w�[yg^���(��H���?����.�����2���l;��x����xPXO���U��̛�!���l������Gߍ�����<B��i��4�gpw���[wE�u#���!�BCy�vmh5Zm���GN��9Ht���l.>$q��ӟ�G���+"����9��a^��m��M�\��n|G:k�d����EU�{��L&SEƱ|�I#AuO�Gz�/U���4+izE+Ɏ���j����r�0����,����~�< ��^h��zZUԮctNu�^W�v�Z��L�z��<� c��Ң���s`����E�h}v� ���R<_�`ŋ�TJ�s�i�x����8eoc�ߞ�s�e�Pz�qG�6�Y_��5���{[r_"�ܾ����H�|�\`R�&J�\��Z��a|�ir�b�S��S�o<�q��r*��ԭ��#�؀�9y��gy�-�醜���dd��-�e����[��P��FN2Vy��R�s9?��x����|cC���4����h��b�!��I��3q
ΕS;6*$]��A����>�-�n�kV����E�y'B��:�>4�3�JJL���x�'q���@���x�%�N����MJ��qHOQm�����w�ׇW%��иw�[��&1?4n9(�M6��	.Ǡ�6gN>Q$p�2k���s��X�Ȭ&���-�-�%��">t��y�������c<	�9����Ir\4 Y5�L�nHq���t���ц����v�P�l}!t�0��*���ӫ��j�?�go䡢 �����ĵ�]񼾈ƅ3����\ٴ�6<�7�Ֆ]iq@M1[Y'+-�	�!���7�ᶇ|�H��w_�R$߂����F�EP?:��ʧ\�S�ף�y:�u���S3oLu���9�o�mЕS������!���Ɇ=l/ˆ<��[�@?�ĪA�Oďt.8��#Gч��B�g�1��ɒߔZo[�Ya��3�>m>���KMF����(T_���ib)�KAa؉E��VP��ař'H�I=�(K��%�ꎜ���7o�w����0���K�b�>�nM n��Ae����Z�c�l���}���7y]R0��lM�ܵ!ܫ3�l�_��}�<d9�<���F���hJ/	�1:Kh���{{�,�`�mm������<�j��������Mּ
�?�G?q���ח�t���vE��x�I�TO�����pC�u���2J�h�'kM��K�w]�Q.��Z��cS|u�kI~P���n���AilJ�W��Jģ���:����s�iNQR����,��]��[��������jyvl?�y���V�����m�y$�P�+9tѱ���V��\�[��θ�l�#+�{V N�A�TbZ��#H\n�;P�������dzI��\x4'Գ�K��ֈ�n��j�`E�}��?n*�     