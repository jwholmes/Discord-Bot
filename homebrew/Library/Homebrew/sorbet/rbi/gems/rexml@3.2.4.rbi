# This file is autogenerated. Do not edit it by hand. Regenerate it with:
#   tapioca sync

# typed: true

class Array
  include(::Enumerable)
  include(::JSON::Ext::Generator::GeneratorMethods::Array)
  include(::Plist::Emit)

  def dclone; end
end

class Float < ::Numeric
  include(::JSON::Ext::Generator::GeneratorMethods::Float)

  def dclone; end
end

class Integer < ::Numeric
  include(::JSON::Ext::Generator::GeneratorMethods::Integer)

  def dclone; end
end

Integer::GMP_VERSION = T.let(T.unsafe(nil), String)

class Object < ::BasicObject
  include(::Kernel)
  include(::JSON::Ext::Generator::GeneratorMethods::Object)
  include(::PP::ObjectMixin)

  def dclone; end
end

class REXML::AttlistDecl < ::REXML::Child
  include(::Enumerable)

  def initialize(source); end

  def [](key); end
  def each(&block); end
  def element_name; end
  def include?(key); end
  def node_type; end
  def write(out, indent = _); end
end

class REXML::Attribute
  include(::REXML::Node)
  include(::REXML::XMLTokens)
  include(::REXML::Namespace)

  def initialize(first, second = _, parent = _); end

  def ==(other); end
  def clone; end
  def doctype; end
  def element; end
  def element=(element); end
  def hash; end
  def inspect; end
  def namespace(arg = _); end
  def node_type; end
  def normalized=(_); end
  def prefix; end
  def remove; end
  def to_s; end
  def to_string; end
  def value; end
  def write(output, indent = _); end
  def xpath; end
end

class REXML::Attributes < ::Hash
  def initialize(element); end

  def <<(attribute); end
  def [](name); end
  def []=(name, value); end
  def add(attribute); end
  def delete(attribute); end
  def delete_all(name); end
  def each; end
  def each_attribute; end
  def get_attribute(name); end
  def get_attribute_ns(namespace, name); end
  def length; end
  def namespaces; end
  def prefixes; end
  def size; end
  def to_a; end
end

class REXML::CData < ::REXML::Text
  def initialize(first, whitespace = _, parent = _); end

  def clone; end
  def to_s; end
  def value; end
  def write(output = _, indent = _, transitive = _, ie_hack = _); end
end

class REXML::Child
  include(::REXML::Node)

  def initialize(parent = _); end

  def bytes; end
  def document; end
  def next_sibling; end
  def next_sibling=(other); end
  def parent; end
  def parent=(other); end
  def previous_sibling; end
  def previous_sibling=(other); end
  def remove; end
  def replace_with(child); end
end

class REXML::Comment < ::REXML::Child
  include(::Comparable)

  def initialize(first, second = _); end

  def <=>(other); end
  def ==(other); end
  def clone; end
  def node_type; end
  def string; end
  def string=(_); end
  def to_s; end
  def write(output, indent = _, transitive = _, ie_hack = _); end
end

class REXML::Declaration < ::REXML::Child
  def initialize(src); end

  def to_s; end
  def write(output, indent); end
end

class REXML::DocType < ::REXML::Parent
  include(::REXML::XMLTokens)

  def initialize(first, parent = _); end

  def add(child); end
  def attribute_of(element, attribute); end
  def attributes_of(element); end
  def clone; end
  def context; end
  def entities; end
  def entity(name); end
  def external_id; end
  def name; end
  def namespaces; end
  def node_type; end
  def notation(name); end
  def notations; end
  def public; end
  def system; end
  def write(output, indent = _, transitive = _, ie_hack = _); end

  private

  def strip_quotes(quoted_string); end
end

class REXML::Document < ::REXML::Element
  def initialize(source = _, context = _); end

  def <<(child); end
  def add(child); end
  def add_element(arg = _, arg2 = _); end
  def clone; end
  def doctype; end
  def document; end
  def encoding; end
  def entity_expansion_count; end
  def expanded_name; end
  def name; end
  def node_type; end
  def record_entity_expansion; end
  def root; end
  def stand_alone?; end
  def version; end
  def write(*arguments); end
  def xml_decl; end

  private

  def build(source); end

  def self.entity_expansion_limit; end
  def self.entity_expansion_limit=(val); end
  def self.entity_expansion_text_limit; end
  def self.entity_expansion_text_limit=(val); end
  def self.parse_stream(source, listener); end
end

class REXML::Element < ::REXML::Parent
  include(::REXML::XMLTokens)
  include(::REXML::Namespace)

  def initialize(arg = _, parent = _, context = _); end

  def [](name_or_index); end
  def add_attribute(key, value = _); end
  def add_attributes(hash); end
  def add_element(element, attrs = _); end
  def add_namespace(prefix, uri = _); end
  def add_text(text); end
  def attribute(name, namespace = _); end
  def attributes; end
  def cdatas; end
  def clone; end
  def comments; end
  def context; end
  def context=(_); end
  def delete_attribute(key); end
  def delete_element(element); end
  def delete_namespace(namespace = _); end
  def document; end
  def each_element(xpath = _, &block); end
  def each_element_with_attribute(key, value = _, max = _, name = _, &block); end
  def each_element_with_text(text = _, max = _, name = _, &block); end
  def elements; end
  def get_elements(xpath); end
  def get_text(path = _); end
  def has_attributes?; end
  def has_elements?; end
  def has_text?; end
  def ignore_whitespace_nodes; end
  def inspect; end
  def instructions; end
  def namespace(prefix = _); end
  def namespaces; end
  def next_element; end
  def node_type; end
  def prefixes; end
  def previous_element; end
  def raw; end
  def root; end
  def root_node; end
  def text(path = _); end
  def text=(text); end
  def texts; end
  def whitespace; end
  def write(output = _, indent = _, transitive = _, ie_hack = _); end
  def xpath; end

  private

  def __to_xpath_helper(node); end
  def each_with_something(test, max = _, name = _); end
end

class REXML::Elements
  include(::Enumerable)

  def initialize(parent); end

  def <<(element = _); end
  def [](index, name = _); end
  def []=(index, element); end
  def add(element = _); end
  def collect(xpath = _); end
  def delete(element); end
  def delete_all(xpath); end
  def each(xpath = _); end
  def empty?; end
  def index(element); end
  def inject(xpath = _, initial = _); end
  def size; end
  def to_a(xpath = _); end

  private

  def literalize(name); end
end

module REXML::Encoding
  def decode(string); end
  def encode(string); end
  def encoding; end
  def encoding=(encoding); end

  private

  def find_encoding(name); end
end

class REXML::Entity < ::REXML::Child
  include(::REXML::XMLTokens)

  def initialize(stream, value = _, parent = _, reference = _); end

  def external; end
  def name; end
  def ndata; end
  def normalized; end
  def pubid; end
  def ref; end
  def to_s; end
  def unnormalized; end
  def value; end
  def write(out, indent = _); end

  def self.matches?(string); end
end

class REXML::ExternalEntity < ::REXML::Child
  def initialize(src); end

  def to_s; end
  def write(output, indent); end
end

class REXML::Formatters::Default
  def initialize(ie_hack = _); end

  def write(node, output); end

  protected

  def write_cdata(node, output); end
  def write_comment(node, output); end
  def write_document(node, output); end
  def write_element(node, output); end
  def write_instruction(node, output); end
  def write_text(node, output); end
end

class REXML::Formatters::Pretty < ::REXML::Formatters::Default
  def initialize(indentation = _, ie_hack = _); end

  def compact; end
  def compact=(_); end
  def width; end
  def width=(_); end

  protected

  def write_cdata(node, output); end
  def write_comment(node, output); end
  def write_document(node, output); end
  def write_element(node, output); end
  def write_text(node, output); end

  private

  def indent_text(string, level = _, style = _, indentfirstline = _); end
  def wrap(string, width); end
end

class REXML::IOSource < ::REXML::Source
  def initialize(arg, block_size = _, encoding = _); end

  def consume(pattern); end
  def current_line; end
  def empty?; end
  def match(pattern, cons = _); end
  def position; end
  def read; end
  def scan(pattern, cons = _); end

  private

  def encoding_updated; end
  def readline; end
end

class REXML::Instruction < ::REXML::Child
  def initialize(target, content = _); end

  def ==(other); end
  def clone; end
  def content; end
  def content=(_); end
  def inspect; end
  def node_type; end
  def target; end
  def target=(_); end
  def write(writer, indent = _, transitive = _, ie_hack = _); end
end

class REXML::NotationDecl < ::REXML::Child
  def initialize(name, middle, pub, sys); end

  def name; end
  def public; end
  def public=(_); end
  def system; end
  def system=(_); end
  def to_s; end
  def write(output, indent = _); end
end

class REXML::Output
  include(::REXML::Encoding)

  def initialize(real_IO, encd = _); end

  def <<(content); end
  def encoding; end
  def to_s; end
end

class REXML::Parent < ::REXML::Child
  include(::Enumerable)

  def initialize(parent = _); end

  def <<(object); end
  def [](index); end
  def []=(*args); end
  def add(object); end
  def children; end
  def deep_clone; end
  def delete(object); end
  def delete_at(index); end
  def delete_if(&block); end
  def each(&block); end
  def each_child(&block); end
  def each_index(&block); end
  def index(child); end
  def insert_after(child1, child2); end
  def insert_before(child1, child2); end
  def length; end
  def parent?; end
  def push(object); end
  def replace_child(to_replace, replacement); end
  def size; end
  def to_a; end
  def unshift(object); end
end

class REXML::ParseException < ::RuntimeError
  def initialize(message, source = _, parser = _, exception = _); end

  def context; end
  def continued_exception; end
  def continued_exception=(_); end
  def line; end
  def parser; end
  def parser=(_); end
  def position; end
  def source; end
  def source=(_); end
  def to_s; end
end

class REXML::Parsers::BaseParser
  def initialize(source); end

  def add_listener(listener); end
  def empty?; end
  def entity(reference, entities); end
  def has_next?; end
  def normalize(input, entities = _, entity_filter = _); end
  def peek(depth = _); end
  def position; end
  def pull; end
  def source; end
  def stream=(source); end
  def unnormalize(string, entities = _, filter = _); end
  def unshift(token); end

  private

  def need_source_encoding_update?(xml_declaration_encoding); end
  def parse_attributes(prefixes, curr_ns); end
  def process_instruction; end
  def pull_event; end
end

REXML::Parsers::BaseParser::QNAME = T.let(T.unsafe(nil), Regexp)

REXML::Parsers::BaseParser::QNAME_STR = T.let(T.unsafe(nil), String)

class REXML::Parsers::StreamParser
  def initialize(source, listener); end

  def add_listener(listener); end
  def parse; end
end

class REXML::Parsers::TreeParser
  def initialize(source, build_context = _); end

  def add_listener(listener); end
  def parse; end
end

class REXML::Parsers::XPathParser
  include(::REXML::XMLTokens)

  def abbreviate(path); end
  def expand(path); end
  def namespaces=(namespaces); end
  def parse(path); end
  def predicate(path); end
  def predicate_to_string(path, &block); end

  private

  def AdditiveExpr(path, parsed); end
  def AndExpr(path, parsed); end
  def EqualityExpr(path, parsed); end
  def FilterExpr(path, parsed); end
  def FunctionCall(rest, parsed); end
  def LocationPath(path, parsed); end
  def MultiplicativeExpr(path, parsed); end
  def NodeTest(path, parsed); end
  def OrExpr(path, parsed); end
  def PathExpr(path, parsed); end
  def Predicate(path, parsed); end
  def PrimaryExpr(path, parsed); end
  def RelationalExpr(path, parsed); end
  def RelativeLocationPath(path, parsed); end
  def UnaryExpr(path, parsed); end
  def UnionExpr(path, parsed); end
  def get_group(string); end
  def parse_args(string); end
end

REXML::Parsers::XPathParser::LOCAL_NAME_WILDCARD = T.let(T.unsafe(nil), Regexp)

REXML::Parsers::XPathParser::PREFIX_WILDCARD = T.let(T.unsafe(nil), Regexp)

class REXML::Source
  include(::REXML::Encoding)

  def initialize(arg, encoding = _); end

  def buffer; end
  def consume(pattern); end
  def current_line; end
  def empty?; end
  def encoding; end
  def encoding=(enc); end
  def line; end
  def match(pattern, cons = _); end
  def match_to(char, pattern); end
  def match_to_consume(char, pattern); end
  def position; end
  def read; end
  def scan(pattern, cons = _); end

  private

  def detect_encoding; end
  def encoding_updated; end
end

class REXML::Text < ::REXML::Child
  include(::Comparable)

  def initialize(arg, respect_whitespace = _, parent = _, raw = _, entity_filter = _, illegal = _); end

  def <<(to_append); end
  def <=>(other); end
  def clone; end
  def doctype; end
  def empty?; end
  def indent_text(string, level = _, style = _, indentfirstline = _); end
  def inspect; end
  def node_type; end
  def parent=(parent); end
  def raw; end
  def raw=(_); end
  def to_s; end
  def value; end
  def value=(val); end
  def wrap(string, width, addnewline = _); end
  def write(writer, indent = _, transitive = _, ie_hack = _); end
  def write_with_substitution(out, input); end
  def xpath; end

  private

  def clear_cache; end

  def self.check(string, pattern, doctype); end
  def self.expand(ref, doctype, filter); end
  def self.normalize(input, doctype = _, entity_filter = _); end
  def self.read_with_substitution(input, illegal = _); end
  def self.unnormalize(string, doctype = _, filter = _, illegal = _); end
end

class REXML::XMLDecl < ::REXML::Child
  include(::REXML::Encoding)

  def initialize(version = _, encoding = _, standalone = _); end

  def ==(other); end
  def clone; end
  def dowrite; end
  def encoding=(enc); end
  def inspect; end
  def node_type; end
  def nowrite; end
  def old_enc=(encoding); end
  def stand_alone?; end
  def standalone; end
  def standalone=(_); end
  def version; end
  def version=(_); end
  def write(writer, indent = _, transitive = _, ie_hack = _); end
  def writeencoding; end
  def writethis; end
  def xmldecl(version, encoding, standalone); end

  private

  def content(enc); end

  def self.default; end
end

class REXML::XPathNode
  def initialize(node, context = _); end

  def context; end
  def position; end
  def raw_node; end
end

class REXML::XPathParser
  include(::REXML::XMLTokens)

  def initialize(strict: _); end

  def []=(variable_name, value); end
  def first(path_stack, node); end
  def get_first(path, nodeset); end
  def match(path_stack, nodeset); end
  def namespaces=(namespaces = _); end
  def parse(path, nodeset); end
  def predicate(path, nodeset); end
  def variables=(vars = _); end

  private

  def child(nodeset); end
  def compare(a, operator, b); end
  def descendant(nodeset, include_self); end
  def descendant_recursive(raw_node, new_nodeset, new_nodes, include_self); end
  def each_unnode(nodeset); end
  def enter(tag, *args); end
  def equality_relational_compare(set1, op, set2); end
  def evaluate_predicate(expression, nodesets); end
  def expr(path_stack, nodeset, context = _); end
  def filter_nodeset(nodeset); end
  def following(node); end
  def following_node_of(node); end
  def get_namespace(node, prefix); end
  def leave(tag, *args); end
  def next_sibling_node(node); end
  def node_test(path_stack, nodesets, any_type: _); end
  def norm(b); end
  def normalize_compare_values(a, operator, b); end
  def preceding(node); end
  def preceding_node_of(node); end
  def sort(array_of_nodes, order); end
  def step(path_stack, any_type: _, order: _); end
  def strict?; end
  def trace(*args); end
  def unnode(nodeset); end
  def value_type(value); end
end

class Symbol
  include(::Comparable)

  def dclone; end
end
